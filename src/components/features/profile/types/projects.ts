export type Project = {
	id: string;
	title: string;
	period: {
		start: string;
		end?: string;
	};
	tags?: string[];
	link?: string;
	skills: string[];
	summary?: string;
	description?: string;
	logo?: string;
	isExpanded?: boolean;
};
