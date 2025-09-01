import { type Experience } from "@/components/features/profile/types/experiences";

export const LEADERSHIP: Experience[] = [
	{
		id: "usc",
		companyName: "University of Southern California",
		positions: [
			{
				id: "usc-pos-1",
				title: "Course Producer & Grader",
				employmentPeriod: { start: "Aug 2023", end: "Dec 2024" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Part-time",
				icon: "idea",
				description: `
*Automation Expert* - DSCI 510: Principles of Programming for Data Science

- Orchestrated **GitHub Actions Workflow** to automate testing, linting, and reporting for 70+ assignments within 10 minutes on GitHub Classrooms  
- Crafted test cases and Flake8 plugins to enforce assignment guidelines, utilizing **Pytest**, **Flake8**, and **Bash** for workflow efficiency
- Designed challenging coding assignments, tests, and projects, ensuring alignment with course objectives and learning outcomes
        `,
				skills: ["Python", "GitHub Actions", "Pytest", "Flake8", "Bash", "CI/CD", "Automation"],
			},
		],
	},
	{
		id: "usc-ais",
		companyName: "USC AI Safety",
		positions: [
			{
				id: "usc-ais-pos-1",
				title: "Technical AI Fellow",
				employmentPeriod: { start: "Jan 2023", end: "Mar 2023" },
				location: "Los Angeles, CA",
				employmentType: "Volunteer",
				icon: "code",
				description: `
- Researched expert predictions on **timelines to human-level AI** and analyzed potential **risks of AGI development**
- Investigated failure modes such as **reward misspecification** and **deceptive alignment** to assess safety concerns
- Participated in weekly research reading groups, engaging with _state-of-the-art AI safety literature_
- Studied foundational concepts of **AGI**, focusing on its potential **societal impacts** and **catastrophic risk scenarios**
        `,
				skills: ["AI Safety", "Risk Analysis", "Research", "Data Governance"],
			},
		],
	},
	{
		id: "djsa",
		companyName: "DJS Antariksh",
		positions: [
			{
				id: "djsa-pos-1",
				title: "Data Science Head & Mentor",
				employmentPeriod: { start: "Jan 2020", end: "May 2021" },
				location: "Mumbai, India",
				employmentType: "Volunteer",
				icon: "business",
				description: `DJS Antariksh is the official rover challenge team of Dwarkadas J. Sanghvi College of Engineering, Mumbai, India.

%%European Rover Challenge 2020 – 3rd Place Global, “Best Science Planning” Award%%

- Led development of **SLAM-based path planning** and **obstacle detection** in ROS, integrating LiDAR and camera localization (achieved _92% navigation accuracy_ with **300 ms latency** on NVIDIA Jetson hardware)
- Deployed **Fast R-CNN** and **YOLOv5** for autonomous navigation, achieving **84% mAP@0.5** in object detection tasks
- Automated dataset creation with **Selenium + BeautifulSoup**, curating 100+ images and boosting training efficiency by **25%**
- Analyzed soil sensor data (_pH, water content_) to detect potential **signs of life** and support science evaluations
- Mentored **5+ members** in ML and data engineering workflows; authored documentation and introduced **agile practices** with GitHub Projects/Kanban
        `,
				skills: [
					"Python",
					"ROS",
					"SLAM",
					"LiDAR/Computer Vision",
					"Deep Learning (YOLOv5, Fast R-CNN)",
					"OpenCV",
					"Data Engineering",
					"Selenium",
					"BeautifulSoup",
					"Machine Learning Mentorship",
					"Agile Practices",
				],
			},
		],
	},
];
