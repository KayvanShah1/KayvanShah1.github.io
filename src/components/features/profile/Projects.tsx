import { PROJECTS } from "@/data/projects";
import { CollapsibleList } from "@/components/collapsible-list";
import { ProjectItem } from "@/components/features/profile/projects/project-item";

const Projects = () => {
	return (
		<section id="projects" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">
				Projects
				<sup className="text-muted-foreground ml-1 text-sm select-none">({PROJECTS.length})</sup>
			</h1>

			<CollapsibleList items={PROJECTS} max={5} renderItem={(item) => <ProjectItem project={item} />} />
		</section>
	);
};

export default Projects;
