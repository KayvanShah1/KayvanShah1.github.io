import { EDUCATION } from "./data/education";
import { EducationPositionItem } from "./education/education-position-item";

const Education = () => {
	return (
		<section id="education" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
			<h1 className="mb-8 text-4xl font-semibold">Education</h1>

			<div className="before:bg-border relative space-y-4 before:absolute before:left-3 before:h-full before:w-px">
				{EDUCATION.map((position) => (
					<EducationPositionItem key={position.id} position={position} />
				))}
			</div>
		</section>
	);
};

export default Education;

// education/index (Education.tsx)
// import { Timeline } from "@/components/ui/timeline";
// import { EDUCATION } from "./data/education";
// import { EducationPositionItem } from "./education/education-position-item";

// const Education = () => {
//   return (
//     <section id="education" className="mx-6 my-10 flex flex-col justify-center py-10 sm:px-8 md:mx-4 md:px-16">
//       <h1 className="mb-8 text-4xl font-semibold">Education</h1>

//       <Timeline orientation="vertical" className="mt-2" /* value={EDUCATION.length} */>
//         {EDUCATION.map((position, idx) => (
//           <EducationPositionItem key={position.id} position={position} step={idx + 1} />
//         ))}
//       </Timeline>
//     </section>
//   );
// };

// export default Education;
