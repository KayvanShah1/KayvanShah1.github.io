import USCLogo from "@/assets/img/USCLogo_PrimShield_Word_RegUse_Card-Blk_RGB.png";
import DJSCOELogo from "@/assets/img/DJSCOE_Logo.png";

type EducationRole = {
	title: string;
	org: string;
	period: string;
};

type Education = {
	id: number;
	degree: string;
	university: string;
	location?: string;
	duration: string;
	gpa?: string;
	key_courses?: Array<string>;
	roles?: EducationRole[];
	logo?: string; // Optional logo URL for the university
};

const educationData: Education[] = [
	{
		id: 1,
		degree: "Masters of Science in Applied Data Science",
		university: "University of Southern California",
		location: "Los Angeles, CA",
		duration: "2023 – 2024",
		gpa: "3.62/4.0",
		key_courses: [
			"Machine Learning",
			"Data Management",
			"Natural Language Processing",
			"Data Mining",
			"Deep Learning",
			"ML Optimization Techniques",
		],
		roles: [
			{
				title: "Course Producer & Grader",
				org: "USC DSCI 510 - Principles of Python Programming",
				period: "Aug 2023 - Dec 2024",
			},
			{
				title: "Graduate Mentor",
				org: "Viterbi Graduate Student Mentorship Program",
				period: "Aug 2023 - Dec 2024",
			},
			{
				title: "Technical AI Fellow",
				org: "USC Center for AI Safety",
				period: "Jan 2023 - Mar 2023",
			},
		],
		logo: USCLogo,
	},
	{
		id: 2,
		degree: "Bachelors of Engineering in Electronics & Telecommunications",
		university: "D.J. Sanghvi College of Engineering (Mumbai University)",
		location: "Mumbai, MH",
		duration: "2017 – 2021",
		gpa: "8.77/10",
		key_courses: [
			"Big Data Analytics",
			"Nueral Networks and Fuzzy Logic",
			"Database Management Systems",
			"Image Processing and Machine Vision",
		],
		roles: [
			{
				title: "Data Science & Ops Head, Student Mentor",
				org: "DJ Antariksh",
				period: "Jan 2020 - May 2021",
			},
		],
		logo: DJSCOELogo,
	},
];

export default educationData;
