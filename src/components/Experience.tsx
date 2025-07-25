import experienceData from "@/data/experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
	Timeline,
	TimelineDescription,
	TimelineHeader,
	TimelineItem,
	TimelineTime,
	TimelineTitle,
} from "./ui/timeline";

const Experience = () => {
	return (
		<section id="experience" className="mx-6 my-10 flex flex-col justify-start py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">Experience</h1>

			<Tabs defaultValue={experienceData[0].id} className="w-full">
				<div className="flex h-full w-full flex-col md:flex-row">
					{/* Tabs List */}
					<TabsList className="flex h-full w-full flex-col gap-2 bg-transparent md:w-1/5">
						{experienceData.map((exp) => (
							<TabsTrigger
								key={exp.id}
								value={exp.id}
								className="hover:bg-muted/70 focus-visible:ring-primary h-auto w-full border-r-4 px-4 py-2 text-center break-words whitespace-normal transition-colors duration-200 focus-visible:ring-2"
							>
								{exp.company}
							</TabsTrigger>
						))}
					</TabsList>

					{/* Tabs Content */}
					<div className="mt-6 w-full md:mt-0 md:w-4/5 md:pl-6">
						{experienceData.map((exp) => (
							<TabsContent key={exp.id} value={exp.id}>
								<Timeline>
									{exp.roles.map((role, idx) => (
										<TimelineItem key={idx}>
											<TimelineHeader>
												<TimelineTime>{role.duration}</TimelineTime>
												<div>
													<TimelineTitle>{role.title}</TimelineTitle>
													{role.type && (
														<p className="text-muted-foreground text-sm">{role.type}</p>
													)}
												</div>
											</TimelineHeader>
											<TimelineDescription>
												{"projects" in role ? (
													<div className="space-y-4">
														{role.projects.map((proj, pIdx) => (
															<div key={pIdx}>
																<p className="text-foreground font-medium">
																	{proj.name}
																</p>
																<ul className="text-muted-foreground ml-5 list-disc space-y-1 text-sm">
																	{proj.bullets.map((pt, bIdx) => (
																		<li key={bIdx}>{pt}</li>
																	))}
																</ul>
															</div>
														))}
													</div>
												) : (
													<ul className="text-muted-foreground ml-5 list-disc space-y-1 text-sm">
														{role.description.map((pt, bIdx) => (
															<li key={bIdx}>{pt}</li>
														))}
													</ul>
												)}
											</TimelineDescription>
										</TimelineItem>
									))}
								</Timeline>
							</TabsContent>
						))}
					</div>
				</div>
			</Tabs>
		</section>
	);
};

export default Experience;
