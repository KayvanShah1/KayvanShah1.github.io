export type EducationPositionIcon = "code" | "design" | "education" | "business" | "idea";

export type EducationPosition = {
	id: string;
	university: string;
	educationPeriod: {
		start: string;
		end?: string;
	};
	location?: string;
	degree?: string;
	description?: string;
	icon?: EducationPositionIcon;
	key_courses?: string[];
	isExpanded?: boolean;
	gpa?: string;
};
