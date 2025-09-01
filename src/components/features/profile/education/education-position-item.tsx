import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Markdown } from "@/components/ui/markdown";
import { Separator } from "@/components/ui/separator";
import { Tag } from "@/components/ui/tag";
import { Prose } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import { ChevronsDownUpIcon, ChevronsUpDownIcon, InfinityIcon } from "lucide-react";

import type { EducationPosition } from "../types/education";
import { ExperienceIcon } from "@/components/features/profile/experience/experience-position-icon";

export function EducationPositionItem({ position }: { position: EducationPosition }) {
	const { start, end } = position.educationPeriod;
	const isOngoing = !end;

	return (
		<Collapsible defaultOpen={position.isExpanded} asChild>
			<div className="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4">
				<CollapsibleTrigger
					className={cn(
						"group/experience block w-full text-left select-none",
						"hover:before:bg-accent/50 relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5",
						"before:left-7 before:-z-1 before:rounded-lg"
					)}
				>
					<div className="relative z-1 mb-1 flex items-center gap-3">
						<div
							className="bg-muted text-muted-foreground flex size-6 shrink-0 items-center justify-center rounded-lg dark:inset-shadow-[1px_1px_1px,0px_0px_1px] dark:inset-shadow-white/15"
							aria-hidden
						>
							<ExperienceIcon className="size-4" icon={position.icon} />
						</div>

						<h4 className="flex-1 text-base font-medium md:text-lg">{position.university}</h4>

						<div className="text-muted-foreground shrink-0 [&_svg]:size-4" aria-hidden>
							<ChevronsDownUpIcon className="hidden group-data-[state=open]/experience:block" />
							<ChevronsUpDownIcon className="hidden group-data-[state=closed]/experience:block" />
						</div>
					</div>

					<div className="text-muted-foreground flex items-center gap-2 pl-9 text-sm">
						<>
							<dl>
								<dt className="sr-only">Employment Type</dt>
								<dd className="text-base">{position.degree}</dd>
							</dl>

							<Separator className="data-[orientation=vertical]:h-4" orientation="vertical" />
						</>

						<dl className="text-muted-foreground text-sm">
							<dt className="sr-only">Employment Period</dt>
							<dd className="flex items-center gap-1">
								<time>{start}</time>
								<span className="font-mono">—</span>
								{isOngoing ? (
									<>
										<InfinityIcon className="size-4.5 translate-y-[0.5px]" aria-hidden />
										<span className="sr-only">Present</span>
									</>
								) : (
									<time>{end}</time>
								)}
							</dd>
						</dl>

						{position.location && (
							<>
								{/* <Separator className="data-[orientation=vertical]:h-4" orientation="vertical" /> */}
								<dl>
									<dt className="sr-only">Employment Location</dt>
									<dd className="sr-only">{position.location}</dd>
								</dl>
							</>
						)}
					</div>
				</CollapsibleTrigger>

				<CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden duration-300">
					{position.description && (
						<Prose className="!text-muted-foreground pt-2 pl-9">
							<Markdown>{position.description}</Markdown>
						</Prose>
					)}

					{Array.isArray(position.key_courses) && position.key_courses.length > 0 && (
						<ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
							{position.key_courses.map((key_courses, index) => (
								<li key={index} className="flex">
									<Tag>{key_courses}</Tag>
								</li>
							))}
						</ul>
					)}
				</CollapsibleContent>
			</div>
		</Collapsible>
	);
}

// import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
// import { Markdown } from "@/components/ui/markdown";
// import { Tag } from "@/components/ui/tag";
// import { Prose } from "@/components/ui/typography";
// import { cn } from "@/lib/utils";
// import { Separator } from "@/components/ui/separator";
// import { ChevronsDownUpIcon, ChevronsUpDownIcon, InfinityIcon } from "lucide-react";

// import {
// 	TimelineItem,
// 	// TimelineDate,
// 	TimelineHeader,
// 	TimelineTitle,
// 	TimelineContent,
// 	TimelineIndicator,
// 	TimelineSeparator,
// } from "@/components/ui/timeline";

// import type { EducationPosition } from "../types/education";
// import { ExperienceIcon } from "@/components/features/profile/experience/experience-position-icon";

// export function EducationPositionItem({ position, step }: { position: EducationPosition; step: number }) {
// 	const { start, end } = position.educationPeriod;
// 	const isOngoing = !end;

// 	return (
// 		<TimelineItem step={step} dense className="group-data-[orientation=vertical]/timeline:ms-10">
// 			{/* slimmer separator offsets */}
// 			<TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-7 group-data-[orientation=vertical]/timeline:h-[calc(100%-1rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-4.5" />

// 			<TimelineIndicator className="bg-muted text-muted-foreground group-data-completed/timeline-item:bg-primary group-data-completed/timeline-item:text-primary-foreground flex size-6 items-center justify-center border-none group-data-[orientation=vertical]/timeline:-left-7">
// 				<ExperienceIcon className="size-4" icon={position.icon} />
// 			</TimelineIndicator>

// 			<Collapsible defaultOpen={position.isExpanded} asChild>
// 				<div className="relative z-1 mb-1 flex flex-col items-center gap-3">
// 					<CollapsibleTrigger
// 						className={cn(
// 							"group/edu hover:bg-accent/40 flex w-full items-center justify-between rounded-md px-3 py-2 text-left select-none",
// 							"hover:before:bg-accent/50 relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5",
// 							"before:-z-1 before:rounded-lg"
// 						)}
// 					>
// 						{/* 2-column grid: title/degree left, dates right */}
// 						<TimelineHeader className="grid grid-cols-[1fr_auto] items-baseline gap-x-3 gap-y-0">
// 							<div className="min-w-0">
// 								<TimelineTitle className="text-lg leading-tight md:text-xl">
// 									{position.university}
// 								</TimelineTitle>
// 								<div className="text-muted-foreground mt-2 flex items-center gap-2 text-sm">
// 									<>
// 										<dl>
// 											<dt className="sr-only">Employment Type</dt>
// 											<dd className="text-sm md:text-base">{position.degree}</dd>
// 										</dl>

// 										<Separator className="data-[orientation=vertical]:h-4" orientation="vertical" />
// 									</>

// 									<dl className="text-muted-foreground text-sm">
// 										<dt className="sr-only">Employment Period</dt>
// 										<dd className="flex items-center gap-1">
// 											<time>{start}</time>
// 											<span className="font-mono">—</span>
// 											{isOngoing ? (
// 												<>
// 													<InfinityIcon
// 														className="size-4.5 translate-y-[0.5px]"
// 														aria-hidden
// 													/>
// 													<span className="sr-only">Present</span>
// 												</>
// 											) : (
// 												<time>{end}</time>
// 											)}
// 										</dd>
// 									</dl>

// 									{position.location && (
// 										<>
// 											{/* <Separator className="data-[orientation=vertical]:h-4" orientation="vertical" /> */}
// 											<dl>
// 												<dt className="sr-only">Employment Location</dt>
// 												<dd className="sr-only">{position.location}</dd>
// 											</dl>
// 										</>
// 									)}
// 								</div>
// 							</div>
// 						</TimelineHeader>

// 						<div className="text-muted-foreground shrink-0 [&_svg]:size-4" aria-hidden>
// 							<ChevronsDownUpIcon className="hidden group-data-[state=open]/edu:block" />
// 							<ChevronsUpDownIcon className="hidden group-data-[state=closed]/edu:block" />
// 						</div>
// 					</CollapsibleTrigger>

// 					<CollapsibleContent className="data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden duration-300">
// 						{position.description && (
// 							<TimelineContent className="pt-1">
// 								<Prose className="!text-muted-foreground">
// 									<Markdown>{position.description}</Markdown>
// 								</Prose>
// 							</TimelineContent>
// 						)}

// 						{Array.isArray(position.key_courses) && position.key_courses.length > 0 && (
// 							<ul className="flex flex-wrap gap-1.5 pt-2">
// 								{position.key_courses.map((course, index) => (
// 									<li key={index}>
// 										<Tag>{course}</Tag>
// 									</li>
// 								))}
// 							</ul>
// 						)}
// 					</CollapsibleContent>
// 				</div>
// 			</Collapsible>
// 		</TimelineItem>
// 	);
// }
