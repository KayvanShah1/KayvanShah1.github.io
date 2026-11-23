import type { Project } from "./types/projects";

export const PROJECTS: Project[] = [
	{
		id: "vivi-commercial-vehicle-search",
		title: "Vivi: Conversational Commercial Vehicle Search",
		period: { start: "Aug 2026", end: "Sep 2026" },
		tags: ["AI", "NLP", "Search"],
		skills: ["Python", "OpenAI Agents SDK", "Groq", "MotherDuck", "Streamlit"],
		link: "https://github.com/KayvanShah1/conversational-commercial-vehicle-search",
		summary: "Search 1,000 used commercial-vehicle listings by voice or text in English or Hinglish.",
		description: "A buyer can change the budget, correct the payload, or ask about the second truck in a shortlist. Vivi carries those constraints across turns and checks every ranked result against the catalog. It passed 51 of 52 voice and text benchmark cases.",
	},
	{
		id: "gridledger",
		title: "GridLedger: Renewable Curtailment Platform",
		tags: ["Energy", "Data Engineering", "Analytics"],
		skills: ["Python", "Polars", "BigQuery", "dbt", "Dagster", "GCP"],
		summary: "Estimate how much curtailed wind and solar generation battery storage could recover.",
		description: "Ingested Brazilian grid data into GCS and BigQuery and modeled curtailed generation by plant and region at 30-minute intervals. Simulated batteries with two to twelve hours of storage to compare recovered energy, state of charge, and utilization.",
	},
	{
		id: "settlesentry",
		title: "SettleSentry: Payment Collection AI Agent",
		period: { start: "Apr 2026", end: "May 2026" },
		tags: ["AI", "Finance", "Backend"],
		skills: ["Python", "LangGraph", "Pydantic AI", "OpenRouter", "Pytest"],
		link: "https://github.com/KayvanShah1/settlesentry-payment-collection-agent",
		summary: "A collection agent that verifies identity before disclosing a balance and requires confirmation before calling a payment tool.",
		description: "Compared four modes, from fixed rules to model-directed tool calls, against the same 15 simulated collection scenarios. The evaluation recorded no privacy leaks or premature payment calls. Automated conversations averaged 8.6 turns.",
	},
	{
		id: "b2b-ecommerce-data-platform",
		title: "B2B e-Commerce Data Platform",
		period: { start: "Mar 2026", end: "May 2026" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["Python", "Dagster", "dbt", "PostgreSQL", "Polars", "MotherDuck", "MinIO"],
		link: "https://github.com/KayvanShah1/b2b-ecommerce-platform",
		summary: "A warehouse for tracking orders, product performance, and customer activity as commerce data changes.",
		description: "Generated synthetic business activity and processed over 10 million rows through incremental loads. Watermarks, manifests, and checkpoints let interrupted runs resume without duplicating orders. Tested dbt marts expose sales trends and customer funnels.",
	},
	{
		id: "btm-bess-market-optimizer",
		title: "Swedish Industrial Battery Dispatch & Market Optimizer",
		period: { start: "Jul 2026", end: "Oct 2026" },
		tags: ["Energy", "Analytics"],
		skills: ["Python", "Battery Dispatch", "Scenario Analysis", "Streamlit"],
		link: "https://github.com/KayvanShah1/btm-bess-market-optimizer",
		summary: "Compare factory peak savings with the revenue from selling a battery’s spare capacity into Swedish reserve markets.",
		description: "Modeled a 1 MW / 2 MWh behind-the-meter battery serving factory load and solar generation. The dashboard compares hourly dispatch, state of charge, and break-even prices. Adding mFRR improved value in the low-activation scenario, but heavier activation left less energy available for later factory peaks.",
	},
	{
		id: "climate-transition-risk",
		title: "Climate Transition Risk Assessment",
		period: { start: "Apr 2026", end: "Apr 2026" },
		tags: ["AI", "Finance", "Research"],
		skills: ["LlamaIndex", "AlloyDB", "Document AI", "vLLM", "System Design"],
		summary: "A system design for tracing portfolio climate-risk ratings back to policy and market evidence.",
		description: "Designed a retrieval workflow that combines exact policy terms, semantic search, and reranking. Agents extract carbon-pricing and demand-shift indicators from the retrieved passages. Deterministic rules assign ratings and retain supporting evidence for review.",
	},
	{
		id: "electric-mobility-intelligence",
		title: "Electric Mobility Intelligence Platform",
		tags: ["Data Engineering", "Analytics", "Energy"],
		skills: ["PySpark", "H3", "dbt", "Databricks", "Delta Lake", "Tableau"],
		summary: "Connect trips, charging sessions, and vehicle telemetry to explain fleet efficiency and charger utilization.",
		description: "Modeled trips and charging sessions as incremental facts in Delta Lake. H3 cells group trip coordinates for geographic analysis. Partitioned tables and Z-Ordering support the queries behind Tableau dashboards for fleet and charging performance.",
	},
	{
		id: "bfsi-reputation-intelligence",
		title: "BFSI Reputation Intelligence",
		period: { start: "Jun 2026", end: "Jun 2026" },
		tags: ["NLP", "Analytics", "Finance"],
		skills: ["Python", "Pydantic", "Parquet", "Streamlit"],
		link: "https://github.com/KayvanShah1/bfsi-reputation-intelligence",
		summary: "Trace changes in a financial institution’s reputation back to the mentions driving them.",
		description: "Normalized and deduplicated source mentions, filtered for relevance, and recorded the reason for each driver and sentiment label. A Streamlit dashboard lets reviewers move from a trend to the underlying records.",
	},
	{
		id: "coretrail",
		title: "CoreTrail",
		period: { start: "Oct 2026", end: "Nov 2026" },
		tags: ["Education", "Frontend"],
		skills: ["Jekyll", "Markdown", "GitHub Pages"],
		link: "https://kayvanshah1.github.io/coretrail/",
		summary: "A technical interview handbook built around topics I wanted to revisit after interviews.",
		description: "Organized lessons on data engineering, machine learning, AI, and software engineering by subject so readers can return to a specific concept between interviews.",
	},
	{
		id: "neuromorph-tree",
		title: "Neuromorph Tree",
		period: { start: "Mar 2026", end: "Nov 2026" },
		tags: ["Generative Art", "Frontend"],
		skills: ["TypeScript", "Canvas 2D", "React"],
		link: "https://github.com/KayvanShah1/luminous-grove",
		summary: "The interactive circuit tree on this portfolio is also a reusable Canvas 2D package.",
		description: "Procedural branches grow into different structures, pulses travel through the tree, and pointer input changes its movement. The portfolio uses the same published rendering engine as the standalone demo.",
	},
	{
		id: "mediflow",
		title: "MediFlow: Healthcare Data Integration & Analytics",
		period: { start: "Sep 2025", end: "Sep 2025" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["Airflow", "dbt", "Snowflake", "Python"],
		link: "https://github.com/KayvanShah1/mediflow",
		summary: "A Medicare analytics warehouse for exploring cost of care, provider utilization, and readmissions.",
		description: "Airflow coordinates claims and provider ingestion. dbt transforms staged data into dimensions, facts, and reporting marts, with checks on the modeled data.",
	},
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
		tags: ["AI", "Full Stack", "Backend", "Frontend"],
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
			"Canvas 2D",
			"Motion",
			"shadcn/ui",
			"TypeScript",
			"Fractal Tree",
			"Github Actions",
		],
		tags: ["Frontend", "Generative Art", "Portfolio"],
		summary: "An interactive developer portfolio showcasing projects and animations",
		description: `A modern portfolio site blending clean design with interactive visuals to highlight my engineering work and creative coding.

* **Immersive UI** – Built with **React + Tailwind v4**, styled for speed and clarity, and enhanced with **shadcn/ui**.
* **Living Animations** – Uses the Canvas 2D engine from [Luminous Grove](https://github.com/KayvanShah1/luminous-grove) for interactive tree growth, light pulses, and sway.
* **Seamless Navigation** – Responsive design with smooth transitions and optimized performance across devices.
* **Automated Deploys** – Backed by **GitHub Actions**, ensuring CI/CD with every commit.
* **Open Source** – Fully available on [GitHub](https://github.com/KayvanShah1/KayvanShah1.github.io)`,
		logo: "https://kayvanshah1.github.io/dark-logo/favicon-32x32.png",
	},
	{
		id: "google-workspace-token-activity-audit-pipeline",
		title: "Google Workspace Security Audit Pipeline",
		period: { start: "May 2025", end: "Dec 2025" },
		tags: ["Data Engineering", "Cloud", "Analytics", "Security"],
		skills: ["Python", "Polars", "Dagster", "dbt", "DuckDB", "MotherDuck"],
		link: "https://github.com/KayvanShah1/gws-audit-analytics-pipeline",
		summary: "Investigate token use, logins, SAML, administrative changes, and Drive activity across Google Workspace.",
		description: "Per-app cursors and overlapping fetch windows recover late events. Polars normalizes and deduplicates records before Dagster triggers incremental warehouse loads and dbt models. The pipeline handled over a million events across five audit feeds.",
	},
	{
		id: "drive-access-analysis",
		title: "Google Drive Access Analyzer",
		period: { start: "Jun 2025", end: "Jun 2025" },
		tags: ["Security", "Research"],
		skills: ["Access Control", "Data Modeling", "Google Drive"],
		link: "https://github.com/KayvanShah1/gdrive-access-analyzer",
		summary: "A design study of who can access Drive files through direct grants, groups, shared drives, and inherited permissions.",
		description: "Mapped the relationships between principals, files, and permissions and documented cases where link sharing or inheritance can expose a file more widely than intended.",
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
		id: "transaction-anomaly-detection",
		title: "Transaction Anomaly Detection",
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
		tags: ["MLOps", "ML", "AI", "Finance"],
		link: "https://github.com/DataForgeOpenAIHub/mlops-credit-card-fraud-detection-end-to-end",
		summary:
			"Low-latency fraud detection service with streaming pipeline, explainable ML, and full MLOps integration",
		description: `A complete fraud detection system built around the **Capital One Transactions Dataset**, combining rigorous modeling with production-grade MLOps practices. The project spans from data wrangling and experimentation to model deployment and CI/CD automation.

* **Advanced Data Prep** – Cleaned raw transaction data for multi-swipe errors, reversed duplicates, missing values, and outliers. Normalized and encoded features; addressed class imbalance via **bootstrapped undersampling**.
* **Modeling Excellence** – Trained multiple ensemble classifiers (RF, GBM, XGBoost), tracked using **MLflow**/**Databricks**, achieving **0.91 F-beta score** with Gradient Boosting and extensive hyperparameter tuning.
* **Reproducible Pipelines** – All stages managed via **DVC**, including data versioning, pipeline execution (dvc repro), and DAG visualization.
* **MLOps + CI/CD** – Packaged the pipeline into **Docker containers**, staged using **GitHub Actions**, and deployed on **AWS** with a **FastAPI**-powered inference service.
* **Remote Storage with Google Drive** – Used **DVC GDrive remote** to offload data artifacts, with automated setup and remote config via scripts.
* **Interactive Analysis** – Modular notebooks for data loading, visualization, modeling, and deployment workflows.`,
		// "description": "Designed a real-time anomaly detection system to flag suspicious financial transactions, combining scalable data engineering with production-grade ML.\n\n* **Streaming Pipeline** – Built end-to-end ingestion and detection workflow (~1M+ tx/day) with deduplication, replay handling, and class balancing.\n* **Risk Scoring Service** – Deployed FastAPI microservice delivering explainable predictions (85% recall) using statistical features + ML models (XGBoost, logistic regression).\n* **MLOps + Reliability** – Tracked experiments in MLflow, versioned data/models with DVC, packaged in Docker, and deployed via AWS Lambda for reproducibility and scalability.\n* **Monitoring & Dashboards** – Integrated alerts and dashboards to reduce manual fraud reviews by 30%."
	},
	{
		id: "productivity-caffeine-sleep",
		title: "Study on Effects of Lifestyle Habits on Productivity",
		link: "https://github.com/KayvanShah1/usc-dsci517-rmaus-fall24",
		period: { start: "Sep 2024", end: "Dec 2024" },
		skills: ["Python", "Data Analysis", "Statistics"],
		tags: ["Research", "Analytics"],
		summary: "Correlational study analyzing the impact of caffeine, exercise, and sleep on student productivity",
	},
	{
		id: "onenet-1d-unet",
		title: "OneNet: A Channel-Wise 1D Convolutional U-Net",
		period: { start: "Sep 2024", end: "Nov 2024" },
		skills: ["Deep Learning", "PyTorch", "Computer Vision", "CNN"],
		tags: ["Deep Learning", "Research", "Computer Vision"],
		link: "https://github.com/shbyun080/OneNet",
		summary: "Co-authored a channel-wise 1D U-Net for semantic segmentation, presented at IEEE IPTA 2025.",
		description: "We used pixel rearrangement and channel-wise 1D convolutions to reduce the parameter count of a U-Net encoder. [Read the paper](https://arxiv.org/abs/2411.09838).",
	},
	{
		id: "steam-sales-analysis",
		title: "Steam Sales Analysis",
		period: { start: "Jun 2024", end: "Aug 2024" },
		link: "https://github.com/DataForgeOpenAIHub/Steam-Sales-Analysis",
		skills: [
			"Python",
			"ETL",
			"Prefect",
			"GitHub Actions",
			"MySQL",
			"Tableau",
			"Data Analysis",
			"Data Modeling",
			"Data Visualization",
		],
		tags: ["Data Engineering", "Analytics"],
		summary: "Automated ETL pipelines and dashboards for Steam game sales insights",
	},
	{
		id: "unifaq-llm-faq",
		link: "https://github.com/KayvanShah1/UniFAQ",
		title: "UniFAQ: Fine-Tuned LLM based FAQ Generation for University Admissions",
		period: { start: "May 2024", end: "Jun 2024" },
		skills: ["NLP", "PyTorch", "LLM", "Python", "Web Scraping"],
		tags: ["AI", "NLP"],
		summary: "LLM-based system to auto-generate FAQs from MSCS admission requirements",
	},
	{
		id: "virtuta-ai-ta",
		title: "VirtuTA: Agentic Teaching Assistant",
		period: { start: "Apr 2024", end: "May 2024" },
		link: "https://github.com/KayvanShah1/VirtuTA",
		skills: [
			"NLP",
			"LLM",
			"LangChain",
			"ETL",
			"Python",
			"MLOps",
			"Data Warehousing",
			"Data Engineering",
			"Retrieval Augmented Generation (RAG)",
		],
		tags: ["AI", "MLOps", "Education"],
		summary: "AI-powered teaching assistant automating Piazza Q&A with multimodal retrieval",
		description: `VirtuTA is an AI-powered **virtual teaching assistant** that enhances university learning by delivering context-aware, multimodal, and automated support for students and instructors. As part of Final project for *DSCI 560 – Data Science Professional Practicum* @ *USC*.
* Designed a **multimodal RAG pipeline** (LangChain + Google Gemini) using dual vector stores (Mongo Atlas) for content + logistics queries
* Integrated with **Piazza API** to auto-answer unresolved student queries in discussion forums
* Delivered **personalized support**: Q&A, assignment management, logistics updates, and tutoring resources
* Enhanced responses with **slides, snapshots, timestamps, and source links** for contextual explanations
* Leveraged **YouTube API** to fetch transcripts, align concept queries to relevant segments, and generate links starting at the exact timestamp
* Achieved **94% answer rate** on student queries through automated response generation

[![YouTube Presentation](https://img.shields.io/badge/YouTube-Presentation-FF0000?logo=youtube&logoColor=white)](https://www.youtube.com/watch?v=zmJYuHgZtFs) ![Course Project](https://img.shields.io/badge/USC-DSCI%20560%20Project-maroon)
		`,
	},
	{
		id: "yelpr8-recommender",
		link: "https://github.com/KayvanShah1/YelpR8-Business-Recommendations-System",
		title: "YelpR8: Business Recommendations System",
		period: { start: "May 2024", end: "May 2024" },
		skills: ["PySpark", "Data Mining", "Python", "Machine Learning"],
		tags: ["Data Engineering", "ML", "Analytics"],
		summary: "Hybrid recommendation system using collaborative filtering + XGBoost",
	},
	{
		id: "quizgenie-ai-quiz",
		link: "https://github.com/KayvanShah1/QuizGenie",
		title: "QuizGenie: AI-powered and RAG-based quiz generation tool",
		period: { start: "Mar 2024", end: "Apr 2024" },
		skills: ["GCP", "NLP", "Python", "LLM", "Data Engineering", "MLOps"],
		tags: ["AI", "NLP", "Data Engineering"],
		summary: "RAG-based system generating interactive quizzes from PDF documents",
	},
	{
		id: "hmm-pos-tagging",
		title: "Part-of-Speech Tagging with Hidden Markov Models",
		period: { start: "Nov 2023", end: "Dec 2023" },
		tags: ["NLP", "Research"],
		skills: ["Python", "Hidden Markov Models", "Viterbi Decoding"],
		link: "https://github.com/KayvanShah1/pos-tagging-hmm-adversarial-learning",
		summary: "Compared sequence decoders on Wall Street Journal text for a USC optimization course.",
		description: "Implemented greedy and Viterbi decoding and evaluated how adversarial training affected part-of-speech tagging accuracy.",
	},
	{
		id: "static-analysis-llm",
		title: "Not Too Bad Code Generation: Static Analysis for Code LLMs",
		link: "https://github.com/KayvanShah1/static_analysis_codegen_llms",
		period: { start: "Sep 2023", end: "Nov 2023" },
		tags: ["AI", "Research", "NLP", "Analytics"],
		skills: ["NLP", "PyTorch", "Python", "LLM", "Data Analysis", "Machine Learning"],
		summary: "Compared baseline Code Llama generations with static-analysis feedback and preference tuning on Python and C++ samples from XLCoST.",
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
		tags: ["AI", "Frontend", "Backend", "Full Stack"],
		summary: "Serverless AWS web app integrating OpenAI API for custom email generation",
	},
	{
		id: "landmark-classification",
		title: "Landmark & Category Classification using Transfer Learning",
		period: { start: "Apr 2023", end: "May 2023" },
		skills: ["TensorFlow", "Python", "CNN", "Computer Vision", "Deep Learning"],
		tags: ["Deep Learning", "Computer Vision"],
		summary: "Two-branch EfficientNetB0 model achieving 95% F1 for image classification",
	},
	{
		id: "firebase-emulator",
		title: "Firebase Realtime Database Emulator",
		period: { start: "Feb 2023", end: "Apr 2023" },
		skills: ["Web Development", "Data Warehousing", "Docker", "Python", "GitHub Actions", "FastAPI", "MongoDB"],
		tags: ["Backend"],
		link: "https://github.com/KayvanShah1/firebase-realtime-db-emulator",
		summary: "Emulated Firebase Realtime DB with MongoDB + REST APIs",
		description: `Developed a **local emulator** for Firebase Realtime Database, enabling developers to build and test applications without relying on the cloud service. The emulator mimics Firebase's core functionalities, providing a seamless development experience.
- Built a FastAPI and Motor backend emulating Firebase Realtime Database **REST semantics** with full CRUD parity.
- Implemented Firebase-style querying: orderBy $key/$value/child, limitToFirst/Last, startAt, endAt, equalTo, with validation.
- Designed scalable data model: collection-per-root, _fm_id/_fm_val docs, efficient nested updates via dot-notation and upserts.
- Productionized service using Docker, Compose, and Okteto; added CORS, JWT foundations, and GitHub Actions CI/CD to Docker Hub.
- Delivered versioned APIs with OpenAPI/Redoc docs, plus tooling for bulk data ingestion and endpoint verification via tests.		
`,
	},
	{
		id: "carbon-market-trading",
		title: "Carbon Market Trading & Analytics Pipeline (Climate Connect Digital)",
		period: { start: "Nov 2022", end: "Dec 2022" },
		tags: ["Data Engineering", "Cloud", "Finance", "Energy"],
		skills: ["Python", "Pub/Sub", "SNS/SQS", "AWS Lambda", "DynamoDB", "Terraform"],
		summary: "A Climate Connect system for tracing carbon-market events from ingestion through pricing and reconciliation.",
		description: "Built a cross-cloud event pipeline with separate paths for archiving, low-latency lookup, and replay. Integrated CME carbon futures and market indicators so analysts could compare contracts and prepare pricing features from the same underlying data.",
	},
	{
		id: "greenfield-datacenter",
		title: "Green-Field Data Center Site Feasibility Analysis",
		period: { start: "Jul 2021", end: "Aug 2021" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["Data Mining", "Python", "Data Analysis", "Machine Learning", "Web Scraping", "ETL", "MySQL"],
		summary: "Geospatial and zoning analysis for optimal green-field data center site selection",
	},
	{
		id: "thomasnet-scraper",
		title: "Thomasnet Scraper",
		period: { start: "Jul 2021", end: "Jul 2021" },
		skills: ["Python", "Web Scraping", "ETL", "Data Engineering"],
		tags: ["Data Engineering"],
		summary: "Scraped U.S. hardware supplier data from Thomasnet",
	},
	{
		id: "commonlit-rating",
		title: "CommonLit: Rating Literary Passage Complexity",
		summary: "Analyzed CommonLit reading comprehension data to identify student performance trends",
		period: { start: "May 2021", end: "Jul 2021" },
		skills: ["Python", "Data Analysis", "NLP", "Pytorch", "Machine Learning", "Data Visualization"],
		tags: ["Deep Learning", "NLP", "Analytics"],
	},
	{
		id: "social-media-comment-classification",
		period: { start: "Apr 2020", end: "Jun 2021" },
		title: "Rate Severity & Toxicity Classification of Social Media Comments",
		skills: [
			"TensorFlow",
			"Python",
			"Natural Language Processing",
			"Deep Learning",
			"Machine Learning",
			"Data Analysis",
			"PyTorch",
			"Transformers",
			"Text Classification",
		],
		tags: ["NLP", "Deep Learning", "Analytics"],
		summary:
			"Classified social media comments for toxicity and severity using HuggingFace Transformers models on TPUs",
	},
	{
		id: "ml-billing-inventory",
		title: "Machine Learning based Automated Product Billing and Inventory Management System",
		period: { start: "Aug 2020", end: "Apr 2021" },
		skills: ["SQL", "TensorFlow", "OpenCV", "Python", "CNN", "Computer Vision", "Machine Learning", "ETL"],
		tags: ["Computer Vision", "Deep Learning", "Full Stack", "IoT"],
		summary: "Automated billing and inventory tracking system with barcode + object detection",
	},
	{
		id: "wheelchair-vision-assist",
		title: "Wheelchair Mobility with Computer Vision Assistance",
		period: { start: "Oct 2019", end: "Mar 2020" },
		skills: ["TensorFlow", "OpenCV", "Python", "Computer Vision", "Machine Learning"],
		tags: ["Computer Vision", "Deep Learning", "IoT"],
		summary: "Semi-automated wheelchair navigation using facial keypoint + eye tracking",
	},
	{
		id: "automated-irrigation",
		title: "Automated Irrigation System",
		period: { start: "Jun 2019", end: "Dec 2019" },
		skills: ["Python", "Machine Learning", "Arduino", "C/C++"],
		tags: ["IoT", "ML"],
		summary: "Smart irrigation system improving water efficiency by 19% using sensors + ML",
	},
];
