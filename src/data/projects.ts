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
		title: "Real-time Event Stream Processing Pipeline",
		period: {
			start: "Feb 2025",
			end: "Feb 2025",
		},
		link: "https://github.com/KayvanShah1/event-replay-recovery",
		skills: [
			"Python",
			"Apache Kafka",
			"Kafka",
			"Streaming Systems",
			"Event Sourcing",
			"Data Validation",
			"Resilience Engineering",
			"Time Series Processing",
		],
		summary: "A tool for replaying and recovering missed events in event-driven systems",
		description: `A recovery and replay system designed to maintain **data integrity** in event-driven architectures by filling gaps, repairing corrupted events, and recalculating accurate time series.

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
];
