import { Icons } from "@/components/icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Markdown } from "@/components/ui/markdown";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";
import { ChevronsDownUpIcon, ChevronsUpDownIcon, InfinityIcon, LinkIcon } from "lucide-react";

import type { Project } from "../types/projects";
import { Badge } from "@/components/ui/badge";

type LogoType = string | React.ReactNode;

type ProjectWithLogo = Project & {
	logo?: LogoType;
};

export function ProjectItem({ className, project }: { className?: string; project: ProjectWithLogo }) {
	const { start, end } = project.period;
	const isOngoing = !end;

	const renderLogo = (logo?: LogoType) => {
		if (!logo) {
			return (
				<div
					className="text-muted-foreground mx-4 hidden size-6 shrink-0 items-center justify-center select-none sm:flex"
					aria-hidden="true"
				>
					<Icons.project className="size-5" />
				</div>
			);
		}
		if (typeof logo === "string") {
			return (
				<img
					src={logo}
					alt=""
					width={32}
					height={32}
					className="mx-4 hidden size-6 shrink-0 select-none sm:flex"
					loading="lazy"
					aria-hidden="true"
				/>
			);
		}
		return (
			<div
				className="mx-4 hidden size-6 shrink-0 items-center justify-center select-none sm:flex"
				aria-hidden="true"
			>
				{logo}
			</div>
		);
	};

	return (
		<Collapsible defaultOpen={project.isExpanded} asChild>
			<div className={className}>
				<div className="hover:bg-muted/30 flex items-center transition-colors">
					{renderLogo(project.logo)}

					<div className="border-edge flex-1 border-l border-dashed">
						<CollapsibleTrigger className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
							<div className="flex-1">
								{/* <h3 className="mb-1 text-lg leading-snug font-medium text-balance">
									{project.title}
								</h3> */}

								<div className="mb-1 flex items-center">
									<h3 className="text-lg leading-snug font-medium text-balance">{project.title}</h3>

									{project.tags && project.tags.length > 0 && (
										<div className="ml-2 flex flex-wrap gap-1">
											{project.tags.map((tag, idx) => (
												<Badge
													key={idx}
													variant="outline"
													className="text-muted-foreground bg-muted border-muted hover:bg-muted/80 rounded-full text-xs hover:text-green-400"
												>
													{tag}
												</Badge>
											))}
										</div>
									)}
								</div>

								<dl className="text-muted-foreground text-sm">
									<dt className="sr-only">Period</dt>
									<dd className="flex items-center gap-1">
										<time dateTime={start}>{start}</time>
										<span className="font-mono">—</span>
										{isOngoing ? (
											<>
												<InfinityIcon
													className="size-4 translate-y-[0.5px] text-green-400"
													aria-hidden
												/>
												<span className="sr-only">Present</span>
											</>
										) : (
											<time dateTime={end}>{end}</time>
										)}
									</dd>
								</dl>
							</div>

							{project.link && (
								<SimpleTooltip content="Open Project Link">
									<a
										className="text-muted-foreground hover:text-foreground relative flex size-6 shrink-0 items-center justify-center after:absolute after:-inset-2"
										href={addQueryParams(project.link, UTM_PARAMS)}
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkIcon className="pointer-events-none size-4" />
										<span className="sr-only">Open Project Link</span>
									</a>
								</SimpleTooltip>
							)}

							<div className="text-muted-foreground shrink-0 [&_svg]:size-4" aria-hidden>
								<ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
								<ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
							</div>
						</CollapsibleTrigger>
					</div>
				</div>

				<CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden duration-300 motion-reduce:!animate-none motion-reduce:!duration-0">
					<div className="border-edge space-y-4 border-t border-dashed p-4">
						{project.summary && <p className="text-base font-bold">{project.summary}</p>}
						{project.description && (
							<Prose className="!text-muted-foreground">
								<Markdown>{project.description}</Markdown>
							</Prose>
						)}

						{project.skills.length > 0 && (
							<ul className="flex flex-wrap gap-1.5">
								{project.skills.map((skill, index) => (
									<li key={index} className="flex">
										<Tag>{skill}</Tag>
									</li>
								))}
							</ul>
						)}
					</div>
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
}
