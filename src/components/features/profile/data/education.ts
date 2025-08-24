import type { EducationPosition } from "../types/education";

export const EDUCATION: EducationPosition[] = [
	{
		id: "usc",
		degree: "Masters of Science in Applied Data Science",
		university: "University of Southern California",
		location: "Los Angeles, CA",
		educationPeriod: {
			start: "2023",
			end: "2024",
		},
		gpa: "3.62/4.0",
		key_courses: [
			"Machine Learning for Data Science",
			"Foundations of Data Management",
			"Applications of Natural Language Processing",
			"Foundations & Applications of Data Mining",
			"Deep Learning & Applications",
			"Optimization Techniques for Machine Learning",
			"Research Methods and Analysis of User Studies",
			"Data Visualization",
		],
		icon: "education",
		description: `
- Course Producer & Grader for USC DSCI 510 - Principles of Python Programming (Aug 2023 - Dec 2024)
- Graduate Mentor for Viterbi Graduate Student Mentorship Program (Aug 2023 - Dec 2024)
- Technical AI Fellow at USC Center for AI Safety (Jan 2023 - Mar 2023)
        `,
	},
	{
		id: "djsce",
		degree: "Bachelors of Engineering in Electronics & Telecommunications",
		university: "Dwarkadas J. Sanghvi College of Engineering",
		location: "Mumbai, MH",
		educationPeriod: {
			start: "2017",
			end: "2021",
		},
		gpa: "8.77/10",
		icon: "education",
		key_courses: [
			"Big Data Analytics",
			"Nueral Networks and Fuzzy Logic",
			"Database Management Systems",
			"Image Processing and Machine Vision",
			"Structured Programming Approach",
		],
		description: `- Graduated with First Class with Distinction
- Data Science & Ops Head, Student Mentor at DJS Antariksh (Jan 2020 - May 2021)

*Affiliated to University of Mumbai*
        `,
	},
	{
		id: "pace-jc",
		degree: "High School Certificate - Science",
		university: "Pace Junior Science College",
		location: "Mumbai, MH",
		educationPeriod: {
			start: "2015",
			end: "2017",
		},
		icon: "education",
		key_courses: ["Physics", "Chemistry", "Mathematics"],
	},
	{
		id: "cnms",
		degree: "Indian Certificate of Secondary Education",
		university: "Chhatrabhuj Narsee Memorial School",
		location: "Mumbai, MH",
		educationPeriod: {
			start: "2005",
			end: "2015",
		},
		icon: "education",
		description: `- Graduated with Distinction (Top 15 in school)
- Top Engineering Drawings in ICSE Board Exam (2015)`,
	},
];
