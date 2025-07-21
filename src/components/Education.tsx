import educationData from "@/data/education";
import {
	Timeline,
	TimelineItem,
	TimelineTitle,
	TimelineTime,
	TimelineHeader,
	TimelineDescription,
} from "@/components/ui/timeline";
import { Badge } from "./ui/badge";

const Education = () => {
	return (
		<section id="education" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">Education</h1>

			<Timeline className="mt-2">
				{educationData.map((item) => (
					<TimelineItem key={item.id}>
						<TimelineHeader>
							<TimelineTime variant="default" className="bg-muted-foreground">
								{item.duration}
							</TimelineTime>
							<div className="flex w-full flex-col justify-between">
								<TimelineTitle className="text-xl">{item.university}</TimelineTitle>
								<p className="text-muted-foreground text-lg font-medium">{item.degree}</p>
							</div>
							{/* {item.logo && (
								<img
									src={item.logo}
									alt={`${item.university} logo`}
									className="bg-muted-foreground mt-2 h-10 w-10 rounded object-contain"
								/>
							)} */}
						</TimelineHeader>

						<TimelineDescription className="mt-2 space-y-3 text-sm leading-relaxed">
							<div className="mt-1 flex flex-wrap items-center gap-2">
								{item.key_courses && (
									<span className="text-muted-foreground font-medium">Key Courses:</span>
								)}
								{item.key_courses?.map((course, idx) => (
									<Badge key={idx} variant="secondary" className="text-xs">
										{course}
									</Badge>
								))}
							</div>

							{item.roles && (
								<div className="mt-2 space-y-1">
									<p className="text-muted-foreground font-medium">Leadership & Research:</p>
									<ul className="text-muted-foreground list-inside list-disc space-y-0.5 text-sm">
										{item.roles.map((role, idx) => (
											<li key={idx}>
												<span className="font-medium">{role.title}</span> · {role.org}{" "}
												<span className="text-muted-foreground">({role.period})</span>
											</li>
										))}
									</ul>
								</div>
							)}
						</TimelineDescription>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
};

export default Education;
