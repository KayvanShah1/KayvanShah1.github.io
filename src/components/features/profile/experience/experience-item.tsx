import type { Experience } from "../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
	return (
		<div className="screen-line-after space-y-4 py-4">
			<div className="flex items-center gap-3">
				<div className="flex size-6 shrink-0 items-center justify-center select-none">
					{experience.companyLogo ? (
						<img
							src={experience.companyLogo}
							alt={experience.companyName}
							width={24}
							height={24}
							className="rounded-full"
							loading="lazy"
						/>
					) : (
						<span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
					)}
				</div>

				<h3 className="text-lg leading-snug font-medium">{experience.companyName}</h3>

				{experience.isCurrentEmployer && (
					<span className="relative flex items-center justify-center">
						<span className="bg-info absolute inline-flex size-3 animate-ping rounded-full opacity-50" />
						<span className="bg-info relative inline-flex size-2 rounded-full" />
						<span className="sr-only">Current Employer</span>
					</span>
				)}
			</div>

			<div className="before:bg-border relative space-y-4 before:absolute before:left-3 before:h-full before:w-px">
				{experience.positions.map((position) => (
					<ExperiencePositionItem key={position.id} position={position} />
				))}
			</div>
		</div>
	);
}
