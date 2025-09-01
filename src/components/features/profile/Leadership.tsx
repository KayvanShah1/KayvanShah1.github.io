import { ExperienceItem } from "@/components/features/profile/experience/experience-item";
import { LEADERSHIP } from "./data/leadership";

const Leadership = () => {
	return (
		<section id="leadership" className="mx-6 my-10 flex flex-col justify-start py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-4 text-3xl font-semibold">Leadership</h1>

			<div className="">
				{LEADERSHIP.map((experience) => (
					<ExperienceItem key={experience.id} experience={experience} />
				))}
			</div>
		</section>
	);
};

export default Leadership;
