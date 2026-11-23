import { Icons } from "@/components/icons";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Markdown } from "@/components/ui/markdown";
import { Tag } from "@/components/ui/tag";
import { SimpleTooltip } from "@/components/ui/tooltip";
import { Prose } from "@/components/ui/typography";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";
import { ChevronsDownUpIcon, ChevronsUpDownIcon, InfinityIcon, LinkIcon } from "lucide-react";

import type { Project } from "@/data/types/projects";
import { Badge } from "@/components/ui/badge";

type LogoType = string | React.ReactNode;

type ProjectWithLogo = Project & {
	logo?: LogoType;
};

type ProjectItemProps = {
	className?: string;
	project: ProjectWithLogo;
	selectedTags?: string[]; // <-- optional, since not always passed
};

export function ProjectItem({ className, project, selectedTags = [] }: ProjectItemProps) {
	const period = project.period;

	const renderLogo = (logo?: LogoType) => {
		if (!logo) {
			return (
				<div
					className="mx-4 size-6 shrink-0 items-center justify-center text-muted-foreground select-none sm:flex"
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
					className="mx-4 size-6 shrink-0 select-none sm:flex"
					loading="lazy"
					aria-hidden="true"
				/>
			);
		}
		return (
			<div className="mx-4 size-6 shrink-0 items-center justify-center select-none sm:flex" aria-hidden="true">
				{logo}
			</div>
		);
	};

	return (
		<Collapsible defaultOpen={project.isExpanded} asChild>
			<div className={className}>
				<div className="flex items-center transition-colors hover:bg-muted/30">
					{renderLogo(project.logo)}

					<div className="border-edge flex-1 border-l border-dashed">
						<CollapsibleTrigger className="group/project flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
							<div className="flex-1">
								{/* <h3 className="mb-1 text-lg leading-snug font-medium text-balance">
									{project.title}
								</h3> */}

								<div className="mb-1 flex items-center">
									<h3 className="text-lg leading-snug font-medium text-balance">{project.title}</h3>
								</div>

								{period && (
									<dl className="text-sm text-muted-foreground">
										<dt className="sr-only">Period</dt>
										<dd className="flex items-center gap-1">
											<time dateTime={period.start}>{period.start}</time>
											<span className="font-mono">-</span>
											{!period.end ? (
												<>
													<InfinityIcon
														className="size-4.5 translate-y-[0.5px]"
														aria-hidden
													/>
													<span className="sr-only">Present</span>
												</>
											) : (
												<time dateTime={period.end}>{period.end}</time>
											)}
										</dd>
									</dl>
								)}

								<div className="mt-1 flex flex-wrap gap-1">
									{project.tags?.map((tag, idx) => {
										const isActive = selectedTags.includes(tag);
										return (
											<Badge
												key={idx}
												variant="outline"
												className={[
													"bg-muted border-muted rounded-full text-xs transition",
													isActive
														? "text-green-400 ring-2 ring-green-400/70 duration-300"
														: "text-muted-foreground hover:bg-muted/80",
												].join(" ")}
											>
												{tag}
											</Badge>
										);
									})}
								</div>
							</div>

							{project.link && (
								<SimpleTooltip content="Open Project Link">
									<a
										className="relative flex size-6 shrink-0 items-center justify-center text-muted-foreground after:absolute after:-inset-2 hover:text-foreground"
										href={addQueryParams(project.link, UTM_PARAMS)}
										target="_blank"
										rel="noopener noreferrer"
									>
										<LinkIcon className="pointer-events-none size-4" />
										<span className="sr-only">Open Project Link</span>
									</a>
								</SimpleTooltip>
							)}

							<div className="shrink-0 text-muted-foreground [&_svg]:size-4" aria-hidden>
								<ChevronsDownUpIcon className="hidden group-data-[state=open]/project:block" />
								<ChevronsUpDownIcon className="hidden group-data-[state=closed]/project:block" />
							</div>
						</CollapsibleTrigger>
					</div>
				</div>

				<CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down motion-reduce:animate-none! motion-reduce:duration-0!">
					<div className="border-edge space-y-4 border-t border-dashed p-4">
						{project.summary && <p className="text-base font-bold">{project.summary}</p>}
						{project.description && (
							<Prose className="text-muted-foreground!">
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
