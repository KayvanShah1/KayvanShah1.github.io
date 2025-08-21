import type { Project } from "@/components/features/profile/types/projects";

export const PROJECTS: Project[] = [
	{
		id: "taskaza",
		title: "Taskaza",
		period: {
			start: "Aug 2025",
		},
		link: "https://github.com/KayvanShah1/taskaza",
		skills: [
			"Personal Project",
			"Python",
			"FastAPI",
			"React",
			"TypeScript",
			"FastMCP",
			"Pydantic",
			"LLMs",
			"Model Context Protocol (MCP)",
			"SQLite",
			"Task Management",
			"OpenRouter API",
			"Agents",
			"GitHub Actions",
		],
		tags: ["AI", "Full Stack", "Backend"],
		summary: "A smart, conversational productivity app",
		description: `Built with a secure FastAPI backend and a sleek React frontend, Taskaza lets you manage tasks the way you think, not the way APIs demand.

* **Conversational Tasking** – Add, update, or complete tasks just by telling the **AskBar** what you need.
* **AI Agent Inside** – Powered by **FastMCP + OpenRouter**, Taskaza translates natural language into real actions.
* **Secure & Scalable** – Backed by JWT + API key authentication and a Postgres data layer.
* **End-to-End Experience** – From backend APIs to frontend dashboards, designed for speed, security, and simplicity.

[Try the Taskaza API](https://taskaza.onrender.com/docs) via Swagger UI`,
		isExpanded: true,
	},
	{
		id: "kayvanshah1dotgithubdotio",
		title: "kayvanshah1.github.io",
		period: {
			start: "Jul 2025",
		},
		link: "https://KayvanShah1.github.io",
		skills: [
			"Developer Portfolio",
			"React.js 19",
			"Tailwind CSS v4",
			"p5.js",
			"Motion",
			"shadcn/ui",
			"TypeScript",
			"Fractal Tree",
			"Github Actions",
		],
		tags: ["Frontend", "Creative Coding", "Portfolio"],
		summary: "An interactive developer portfolio showcasing projects and animations",
		description: `A modern portfolio site blending clean design with interactive visuals to highlight my engineering work and creative coding.

* **Immersive UI** – Built with **React + Tailwind v4**, styled for speed and clarity, and enhanced with **shadcn/ui**.
* **Living Animations** – Features a custom-built **VoltTree circuit tree** using **p5.js**, with recursive growth, shine effects, and interactivity.
* **Seamless Navigation** – Responsive design with smooth transitions and optimized performance across devices.
* **Automated Deploys** – Backed by **GitHub Actions**, ensuring CI/CD with every commit.
* **Open Source** – Fully available on [GitHub](https://github.com/KayvanShah1/KayvanShah1.github.io)`,
		logo: "https://kayvanshah1.github.io/dark-logo/favicon-32x32.png",
	},
	{
		id: "google-workspace-token-activity-audit-pipeline",
		title: "Google Workspace Token Activity Audit Pipeline",
		period: {
			start: "May 2025",
			end: "May 2025",
		},
		tags: ["Data Engineering", "Cloud"],
		skills: [
			"Python",
			"Apache Beam",
			"Cloud Dataflow",
			"Polars",
			"DuckDB",
			"Google Cloud Platform",
			"Batch Processing",
			"Data Analysis",
			"User Activity Auditing",
		],
		link: "https://github.com/KayvanShah1/gws-token-activity-analyzer",
		summary: "A pipeline for auditing and analyzing Google Workspace user activity",
		description: `A resilient batch pipeline to fetch, process, and analyze token activity events from the Google Workspace Admin Reports API. Ensures **zero data loss** across runs, with deduplication, optimized storage, and rapid analysis for auditing purposes.

* **Reliable Ingestion** – Pulls token activity events via the **Admin SDK Reports API**, buffering into *time-partitioned JSONL* logs.
* **Optimized Processing** – Deduplicates and transforms events with **Apache Beam**, persisting in compact **Parquet** for efficiency.
* **Fast Insights** – Ad-hoc queries with **Polars/DuckDB** answer key auditing questions (e.g., *top users by activity, highest-volume API methods*) in seconds.
* **Cloud-Ready** – Designed for **GCP Dataflow**, but portable enough for local or hybrid execution.)`,
	},
	{
		id: "real-time-event-stream-processing-pipeline",
		title: "EventPulse: Real-time Event Streaming Pipeline",
		period: {
			start: "Feb 2025",
			end: "Feb 2025",
		},
		tags: ["Data Engineering", "Cloud"],
		link: "https://github.com/KayvanShah1/event-replay-recovery",
		skills: [
			"Python",
			"Apache Kafka",
			"Docker",
			"Streaming Systems",
			"Event Sourcing",
			"Data Validation",
			"Event-Driven Architecture",
			"Time Series Processing",
		],
		summary: "A tool for replaying and recovering missed events in event-driven systems",
		description: `Designed to maintain **data integrity** in streaming pipelines by filling gaps, repairing corrupted events and recalculating accurate time-series outputs. Originally built to simulate **industrial equipment monitoring**, where replay and recovery are essential for anomaly correction and predictive maintenance. This framework can be extended to **IoT, financial trading, telemetry, and log analytics** domains.

* **File-Based Logging** – Uses **JSONL** for durable, efficient event storage and retrieval.
* **Heap-Based Ordering** – Ensures events are replayed in correct **chronological order**, preventing skew in time-series data.
* **Resilient Replay** – Reprocesses events from any timestamp while avoiding duplicates via a **reprocessed set**.
* **Synthetic Gap Filling** – Generates **probabilistic synthetic events** for missing data, maintaining logical consistency.
* **Flexible Transmission** – Supports JSON (readable), CSV (compact), and extensible formats (Protobuf/Avro).
* **Kafka-Powered Ingestion** – Uses **Apache Kafka** to capture and buffer sensor events with long-term retention guarantees.`,
	},
	{
		id: "credit-card-fraud-mlops",
		title: "Credit Card Fraud Detection",
		period: {
			start: "Nov 2024",
			end: "Jan 2025",
		},
		skills: [
			"Python",
			"Machine Learning",
			"XGBoost",
			"DVC",
			"MLflow",
			"Docker",
			"FastAPI",
			"Databricks",
			"AWS",
			"GitHub Actions",
			"Data Preprocessing",
			"Imbalanced Learning",
			"Feature Engineering",
		],
		tags: ["MLOps", "Machine Learning", "AI"],
		link: "https://github.com/DataForgeOpenAIHub/mlops-credit-card-fraud-detection-end-to-end",
		summary: "End-to-end fraud detection pipeline with full MLOps integration",
		description: `A complete fraud detection system built around the **Capital One Transactions Dataset**, combining rigorous modeling with production-grade MLOps practices. The project spans from data wrangling and experimentation to model deployment and CI/CD automation.

* **Advanced Data Prep** – Cleaned raw transaction data for multi-swipe errors, reversed duplicates, missing values, and outliers. Normalized and encoded features; addressed class imbalance via **bootstrapped undersampling**.
* **Modeling Excellence** – Trained multiple ensemble classifiers (RF, GBM, XGBoost), tracked using **MLflow**/**Databricks**, achieving **0.91 F-beta score** with Gradient Boosting and extensive hyperparameter tuning.
* **Reproducible Pipelines** – All stages managed via **DVC**, including data versioning, pipeline execution (dvc repro), and DAG visualization.
* **MLOps + CI/CD** – Packaged the pipeline into **Docker containers**, staged using **GitHub Actions**, and deployed on **AWS** with a **FastAPI**-powered inference service.
* **Remote Storage with Google Drive** – Used **DVC GDrive remote** to offload data artifacts, with automated setup and remote config via scripts.
* **Interactive Analysis** – Modular notebooks for data loading, visualization, modeling, and deployment workflows.`,
	},
	{
		id: "productivity-caffeine-sleep",
		title: "Study on Effects of Lifestyle Habits on Productivity",
		link: "https://github.com/KayvanShah1/usc-dsci517-rmaus-fall24",
		period: { start: "Sep 2024", end: "Dec 2024" },
		skills: ["Python", "Data Analysis", "Statistics"],
		tags: ["Research", "Data Science"],
		summary: "Correlational study analyzing the impact of caffeine, exercise, and sleep on student productivity",
	},
	{
		id: "onenet-1d-unet",
		title: "OneNet: A Channel-Wise 1D Convolutional U-Net",
		period: { start: "Sep 2024", end: "Nov 2024" },
		skills: ["Deep Learning", "PyTorch", "Computer Vision", "CNN"],
		summary: "Lightweight 1D U-Net for semantic segmentation optimized for edge devices",
	},
	{
		id: "steam-sales-analysis",
		title: "Steam Sales Analysis",
		period: { start: "Jun 2024", end: "Aug 2024" },
		skills: ["Python", "ETL", "Prefect", "GitHub Actions", "MySQL", "Tableau", "Data Analysis", "Git"],
		summary: "Automated ETL pipelines and dashboards for Steam game sales insights",
	},
	{
		id: "unifaq-llm-faq",
		title: "UniFAQ: Fine-Tuned LLM based FAQ Generation for University Admissions",
		period: { start: "May 2024", end: "Jun 2024" },
		skills: ["NLP", "PyTorch", "LLM", "Python", "Web Scraping"],
		summary: "LLM-based system to auto-generate FAQs from MSCS admission requirements",
	},
	{
		id: "virtuta-ai-ta",
		title: "VirtuTA: AI enabled Virtual Teaching Assistant",
		period: { start: "Apr 2024", end: "May 2024" },
		skills: ["NLP", "LLM", "LangChain", "ETL", "Python", "MLOps", "Data Warehousing", "Data Engineering", "Git"],
		summary: "AI-powered teaching assistant automating Piazza Q&A with multimodal retrieval",
	},
	{
		id: "yelpr8-recommender",
		title: "YelpR8: Business Recommendations System",
		period: { start: "May 2024", end: "May 2024" },
		skills: ["PySpark", "Data Mining", "Python", "Machine Learning", "Git"],
		summary: "Hybrid recommendation system using collaborative filtering + XGBoost",
	},
	{
		id: "quizgenie-ai-quiz",
		title: "QuizGenie: AI-powered and RAG-based quiz generation tool",
		period: { start: "Mar 2024", end: "Apr 2024" },
		skills: ["GCP", "NLP", "Python", "LLM", "Data Engineering", "MLOps", "Git"],
		summary: "RAG-based system generating interactive quizzes from PDF documents",
	},
	{
		id: "static-analysis-llm",
		title: "Leveraging static analysis for evaluating code-generation models",
		period: { start: "Sep 2023", end: "Nov 2023" },
		skills: ["NLP", "PyTorch", "Python", "LLM", "Data Analysis", "Machine Learning"],
		summary: "Used static analysis and DPO fine-tuning to improve LLM code quality by 61%",
	},
	{
		id: "personalized-email-gen",
		title: "Personalized Email Generation",
		period: { start: "Aug 2023", end: "Oct 2023" },
		skills: [
			"Web Development",
			"NLP",
			"JavaScript",
			"Docker",
			"AWS",
			"Python",
			"LLM",
			"GitHub Actions",
			"MLOps",
			"Git",
			"FastAPI",
			"Terraform",
		],
		summary: "Serverless AWS web app integrating OpenAI API for custom email generation",
	},
	{
		id: "landmark-classification",
		title: "Landmark & Category Classification using Transfer Learning",
		period: { start: "Apr 2023", end: "May 2023" },
		skills: ["TensorFlow", "Python", "CNN", "Computer Vision", "Deep Learning"],
		summary: "Two-branch EfficientNetB0 model achieving 95% F1 for image classification",
	},
	{
		id: "firebase-emulator",
		title: "Firebase Realtime Database Emulator",
		period: { start: "Feb 2023", end: "Apr 2023" },
		skills: ["Web Development", "Data Warehousing", "Docker", "Python", "Git", "FastAPI"],
		summary: "Emulated Firebase Realtime DB with MongoDB + REST APIs",
	},
	{
		id: "greenfield-datacenter",
		title: "Green-Field Data Center Site Feasibility Analysis",
		period: { start: "Jul 2021", end: "Aug 2021" },
		skills: ["Data Mining", "Python", "Data Analysis", "Machine Learning", "Web Scraping", "ETL", "Git"],
		summary: "Geospatial and zoning analysis for optimal green-field data center site selection",
	},
	{
		id: "thomasnet-scraper",
		title: "Thomasnet Scraper",
		period: { start: "Jul 2021", end: "Jul 2021" },
		skills: ["Python", "Web Scraping", "ETL", "Data Engineering", "Git"],
		summary: "Scraped U.S. hardware supplier data from Thomasnet",
	},
	{
		id: "ml-billing-inventory",
		title: "Machine Learning based Automated Product Billing and Inventory Management System",
		period: { start: "Aug 2020", end: "Apr 2021" },
		skills: ["SQL", "TensorFlow", "OpenCV", "Python", "CNN", "Computer Vision", "Machine Learning", "ETL", "Git"],
		summary: "Automated billing and inventory tracking system with barcode + object detection",
	},
	{
		id: "wheelchair-vision-assist",
		title: "Wheelchair Mobility with Computer Vision Assistance",
		period: { start: "Oct 2019", end: "Mar 2020" },
		skills: ["TensorFlow", "OpenCV", "Python", "Computer Vision", "Machine Learning"],
		summary: "Semi-automated wheelchair navigation using facial keypoint + eye tracking",
	},
	{
		id: "automated-irrigation",
		title: "Automated Irrigation System",
		period: { start: "Jun 2019", end: "Dec 2019" },
		skills: ["Python", "Machine Learning", "Arduino", "C/C++"],
		summary: "Smart irrigation system improving water efficiency by 19% using sensors + ML",
	},
];
