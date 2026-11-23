import type { Experience } from "./types/experiences";

export const EXPERIENCES: Experience[] = [
	{
		id: "mercor-intelligence",
		companyName: "Mercor Intelligence",
		positions: [
			{
				id: "mi-1",
				summary: "I evaluated coding agents on changes that had to work inside an existing repository.",
				title: "AI/ML Evaluation Engineer",
				employmentPeriod: { start: "May 2026", end: "Jul 2026" },
				location: "Remote",
				employmentType: "Contract",
				isExpanded: false,
				icon: "code",
				description: `A patch could look reasonable in isolation and still fail when the application used it. My job was to turn that difference into evidence a model evaluation team could use.

- Built Docker environments and test harnesses around repository tasks so I could run a proposed change under repeatable conditions.
- Compared the implementation with the task requirements, ran the tests, and checked runtime behavior. I documented where a patch failed and looked for the same failure across other tasks.`,
				skills: ["Python", "Docker", "Test Automation", "Coding Agent Evaluation"],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "toptal",
		companyName: "Toptal",
		positions: [
			{
				id: "toptal-1",
				summary:
					"Senior Data Engineer in Toptal’s freelance network, focused on data pipelines and analytical warehouses.",
				title: "Senior Data Engineer",
				employmentPeriod: { start: "Apr 2026" },
				location: "Remote",
				employmentType: "Freelance",
				isExpanded: false,
				icon: "code",
				description: `For my technical assessment, I built a B2B commerce pipeline around three sources that change independently: PostgreSQL records, web server logs, and marketing lead spreadsheets.

- Built restartable incremental ingestion with metadata tracking, then modeled the staged records into dbt marts and reports. That made it possible to follow an order from its source through to a sales report and rerun a failed load.

[Explore the public B2B e-commerce project](https://github.com/KayvanShah1/b2b-ecommerce-platform)`,
				skills: ["GCP", "Data Engineering", "RAG", "LLMs", "Python", "Machine Learning", "AWS", "ETL"],
			},
		],
		isCurrentEmployer: true,
	},
	{
		id: "usc-isi",
		companyName: "USC Information Sciences Institute",
		positions: [
			{
				id: "usc-isi-pos-1",
				summary:
					"I built the retrieval and model-serving backend for a research assistant that works inside Jupyter notebooks.",
				title: "AI Engineer",
				employmentPeriod: { start: "Feb 2025", end: "Feb 2026" },
				location: "Marina del Rey, CA (Remote)",
				employmentType: "Volunteer",
				isExpanded: true,
				icon: "code",
				description: `A researcher asking about “the last run” is referring to a particular cell, its code, and its output. I made that execution history available to the assistant so it could distinguish runs and answer follow-up questions in context.

- Indexed code, Markdown, outputs, and execution metadata in Elasticsearch. A FAISS cache matched paraphrased questions to candidate documents. When the match was weak, the service fell back to a fresh search. Offline checks showed **85% top-k relevance** and filtered out **40% of irrelevant results**.
- Persisted state across reasoning steps and added RabbitMQ events so we could trace which context reached the model. That made it possible to distinguish a retrieval mistake from a bad answer produced with the right evidence.
- Served models on GPUs through vLLM at about **five seconds per response** on average. Compared task-specific prompts and QLoRA adapters on notebook-assistance tasks.`,
				skills: [
					"Python",
					"TypeScript",
					"LangChain",
					"LangSmith",
					"FAISS",
					"Elasticsearch",
					"Docker",
					"Retrieval-Augmented Generation (RAG)",
					"LLMs",
				],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "usc",
		companyName: "University of Southern California",
		positions: [
			{
				id: "usc-pos-1",
				summary:
					"I led four graders for USC’s DSCI 510 and automated a weekly grading batch that had taken the teaching team about 20 hours.",
				title: "Course Producer & Grader (Grading Automation)",
				employmentPeriod: { start: "Aug 2023", end: "Dec 2024" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Part-time",
				icon: "code",
				description: `Each week we ran student code, checked the rubric, wrote feedback, and revisited submissions when a student requested a regrade. Much of that work was the same across submissions. I built a GitHub Classroom workflow we could reuse across **70+ assignments**.

- The dispatcher started **100+ isolated GitHub Actions evaluations**. Each runner received the private tests, ran Pytest and Flake8, and preserved the results so a disputed grade could be traced back to the run.
- The **full weekly batch, including regrades, finished in about 10 minutes**. Each student received individual feedback, and the workflow posted one consolidated results CSV to the teaching team’s Slack channel.
- We spent the time we recovered designing harder assignments and answering more questions on the student forum. Instructors teaching similar courses adopted the workflow.`,
				skills: ["Python", "GitHub Actions", "Pytest", "Flake8", "Bash", "CI/CD", "Automation"],
			},
		],
	},
	{
		id: "workup",
		companyName: "WorkUp",
		positions: [
			{
				id: "workup-pos-1",
				summary:
					"I worked on the data, ranking models, and serving pipeline behind WorkUp’s personalized video feed.",
				title: "Machine Learning Engineer Intern",
				employmentPeriod: { start: "Jun 2024", end: "Jul 2024" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `The team needed to estimate which videos a user would be interested in. Preparing the interaction features was a bottleneck before we could even compare ranking models.

- Moved feature preparation onto NVIDIA GPUs with NVTabular and RAPIDS cuDF. The same preprocessing ran about **3× faster** than the CPU workflow.
- Trained and compared DLRM, DCN, and DCNv2 models using NVIDIA Merlin and TensorFlow. The recommendation model reached **0.71 ROC-AUC**.
- Deployed inference on SageMaker with NVIDIA Triton, with Lambda and API Gateway connecting the serving endpoint to the application.`,
				skills: [
					"Python",
					"TensorFlow",
					"NVIDIA Merlin",
					"NVIDIA Triton",
					"NVTabular",
					"RAPIDS cuDF",
					"AWS SageMaker",
					"AWS Lambda",
					"API Gateway",
					"Recommendation Systems",
					"Deep Learning",
				],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "lisus",
		companyName: "Lisus",
		positions: [
			{
				id: "lisus-pos-1",
				summary:
					"I used satellite imagery to narrow the search for potential lithium-brine sites in California.",
				title: "Data Science Intern",
				employmentPeriod: { start: "Jun 2023", end: "Jul 2023" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `A warm patch in a satellite image can reflect terrain, land cover, or surface conditions. I combined measurements across sensors and dates so the team had more evidence for deciding which regions deserved investigation.

- Converted **2 TB of satellite imagery** into georeferenced grids. Cropping, cloud masking, and denoising made ECOSTRESS thermal observations and Sentinel-1 radar measurements comparable across locations.
- Used DBSCAN and spectral clustering to identify candidate regions, then checked them against elevation, land cover, and evapotranspiration. Those checks removed about **a quarter of the initial candidates** before further review.`,
				skills: [
					"Python",
					"Google Earth Engine",
					"GDAL",
					"Rasterio",
					"NumPy",
					"GeoPandas",
					"scikit-learn",
					"TensorFlow",
					"Spectral Clustering",
					"Remote Sensing",
					"Geospatial Analysis",
					"Image Processing",
					"Data Pipelines",
					"GIS",
				],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "climate-connect-digital",
		companyName: "Climate Connect Digital",
		positions: [
			{
				id: "ccd-pos-0",
				summary:
					"I built the data flows that let the carbon-markets team price contracts and reconcile trade events across GCP and AWS.",
				title: "Data Engineer",
				employmentPeriod: { start: "Nov 2022", end: "Dec 2022" },
				location: "Pune, Maharashtra, India (Hybrid)",
				employmentType: "Freelance",
				icon: "code",
				description: `The latest trade state served analysts, while investigating a missing update required the original exchange message. I kept both representations and made the event history replayable.

- Bridged Pub/Sub to SNS/SQS through Cloud Functions. Lambda decoded messages, S3 kept the originals, and DynamoDB tracked processing state. Event IDs and instrument sequence numbers helped distinguish a duplicate delivery from a missing update.
- Combined CME futures data with market indicators for pricing features. I also automated carbon-registry collection and built Looker Studio reporting for the commercial team.`,
				skills: [
					"Python",
					"SQL",
					"Google Cloud Platform (GCP)",
					"Amazon Web Services (AWS)",
					"Selenium",
					"BeautifulSoup",
					"Looker Studio",
					"Time-Series Forecasting",
					"Data Engineering",
					"ETL Pipelines",
					"Data Modeling",
					"Data Warehousing",
					"ML Ops",
				],
			},
			{
				id: "ccd-pos-1",
				summary:
					"I led the data engineering and MLOps behind plant telemetry and 15-minute load forecasts for five power plants.",
				title: "Data Engineer",
				employmentPeriod: { start: "Feb 2022", end: "Oct 2022" },
				location: "Pune, Maharashtra, India (Hybrid)",
				employmentType: "Full-time",
				icon: "code",
				description: `Grid operators needed forecasts on schedule, even when weather feeds were late or a plant needed its history reprocessed. The ML team developed the forecasting models. I owned the data, automation, serving integrations, and monitoring around them.

- Moved live SCADA publishing from AWS MSK to Pub/Sub and built a GCS batch path for replay and reconciliation. The change lowered pipeline cloud spend by **about 60% over a quarter**.
- Kept legacy consumers online during the move from MongoDB to BigQuery through parallel ingestion and cutoff-based backfills. Modeled site, asset, and tag readings in dbt. Partitioned time aggregates reduced query scans by **30%**.
- Standardized telemetry exports and result loads across **20+ sites** with Dataflow templates and Terraform-managed Cloud Functions. Rebuilt weather ingestion in Dagster with validation and retries, reducing failures by **70%**.
- Connected Dagster, FastAPI, and MLflow to run the 15-minute forecast cycle, compare predictions with actual load, and trigger retraining on drift. Across the five plants, forecast accuracy improved about **3%** and deviation penalties fell about **10%**.`,
				skills: [
					"Python",
					"SQL",
					"Apache Beam",
					"Google Cloud Platform (GCP)",
					"Amazon Web Services (AWS)",
					"Prefect",
					"Dagster",
					"MLflow",
					"Selenium",
					"BeautifulSoup",
					"Looker Studio",
					"Time-Series Forecasting",
					"Data Engineering",
					"ETL Pipelines",
					"Data Modeling",
					"Data Warehousing",
					"ML Ops",
					"dbt",
				],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "taiyo",
		companyName: "Taiyō.AI",
		positions: [
			{
				id: "taiyo-pos-1",
				summary:
					"I helped the team trace missing or stale infrastructure records from their source through to the search index.",
				title: "Consultant - Data & Machine Learning",
				employmentPeriod: { start: "Jan 2022", end: "Apr 2022" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Part-time",
				description: `When a project disappeared from a search result, the underlying problem could be a failed fetch, a transformation, or an indexing error. I used Kibana and Logstash to follow failures across those stages.

- Investigated recurring ingestion and indexing failures and tracked their frequency as we fixed them. Error rates fell **40% over three months**.
- Documented source schemas, naming conventions, and operating procedures so an engineer onboarding a new feed could follow a known record through the pipeline.`,
				skills: [
					"Python",
					"ELK Stack",
					"Kibana",
					"Logstash",
					"Documentation",
					"Technical Writing",
					"Data Governance",
				],
			},
			{
				id: "taiyo-pos-2",
				summary:
					"I led the data platform and search work that helped infrastructure investors find comparable projects across 50M+ records.",
				title: "Data & Machine Learning Engineer",
				icon: "idea",
				employmentPeriod: { start: "Jul 2021", end: "Dec 2021" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Full-time",
				description: `Project notices from different sources can describe the same asset under different names. Investors also need details unique to a particular tender or market. I designed a record model that reconciled shared fields while retaining the original source attributes.

- Enriched standardized records with entities and keyphrases from source text and OCR-processed scans. Parallel embedding generation and indexing kept the search representation tied to each record. The enrichment closed **27% of project data gaps**.
- Built semantic search and similar-project recommendations using domain-adapted BERT embeddings and heuristic reranking. On our evaluation set, retrieval reached **85% Precision@10 and 0.7 MRR**. Tuning Elasticsearch mappings and indices reduced search latency by **20%**.
- Standardized **35+ multistage pipelines** with reusable Argo Workflows on AWS Fargate, backed by Terraform and tiered S3 storage. New sources took half as long to integrate and data-product release cycles shortened by **60%**.`,
				skills: [
					"Python",
					"TypeScript",
					"AWS (EKS, Fargate, S3)",
					"Terraform",
					"Argo Workflows",
					"TensorFlow",
					"GitLab CI/CD",
					"Docker",
					"Elasticsearch",
					"Natural Language Processing (NLP)",
					"Semantic Search",
					"Data Pipelines",
					"Data Modeling",
					"Data Warehousing",
					"Data Engineering",
					"Machine Learning",
				],
			},
			{
				id: "taiyo-pos-3",
				summary:
					"I built classification and investment-risk models that helped analysts investigate infrastructure projects.",
				title: "Data Scientist",
				employmentPeriod: { start: "Jan 2021", end: "Jun 2021" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Part-time",
				icon: "code",
				description: `An analyst needed to know why a project was flagged and when risk might emerge. I combined project and tender attributes with economic indicators, and kept the explanation available alongside the score.

- Trained an XGBoost risk classifier that reached **0.84 F1**. Django endpoints returned the score and its ten leading SHAP drivers in two to five seconds. I also developed an LSTM-Cox survival model to study time-to-risk when many project outcomes were still unknown.
- Used curated seed labels and BERT embeddings to classify 100K+ records across roughly 300 sectors and subsectors. The classifier reached **0.80 macro F1** on a manually reviewed holdout set.
- Built reusable ingestion and transformation pipelines for government and multilateral contract sources, with checkpoints so interrupted loads could resume.`,
				skills: [
					"Python",
					"TensorFlow",
					"BeautifulSoup",
					"Selenium",
					"Apache Spark",
					"SHAP",
					"GitLab CI/CD",
					"ETL Pipelines",
					"Data Engineering",
					"Machine Learning",
					"Data Science",
					"Natural Language Processing (NLP)",
				],
			},
			{
				id: "taiyo-pos-4",
				summary: "I built the economic and financial data feeds behind Taiyō’s market scanner.",
				title: "Data Scientist Intern",
				employmentPeriod: { start: "Jun 2020", end: "Dec 2020" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `The team needed historical context as well as fresh observations to compare conditions across markets. I built Airflow jobs for scrapers and APIs that fed those time series into PostgreSQL.

- Expanded the scanner’s coverage across **40+ sources** with more than **60 years of historical data**. Grafana dashboards let the team compare forecasting models and indicators across assets.
- I also compiled benchmark results for the Stanford HAI AI Index Report 2021.`,
				skills: [
					"Python",
					"Apache Airflow",
					"PostgreSQL",
					"Grafana",
					"Data Engineering",
					"Time-Series Analysis",
					"Machine Learning",
					"Data Visualization",
				],
			},
		],
		isCurrentEmployer: false,
	},
	{
		id: "open-space-services",
		companyName: "OpenSpace Services Pvt. Ltd.",
		positions: [
			{
				id: "oss-pos-1",
				summary:
					"I built backend services that turned uploaded clinical document scans into structured results for review.",
				title: "Backend Developer Intern",
				location: "Mumbai, Maharashtra, India (Onsite)",
				employmentPeriod: { start: "Dec 2019", end: "Jan 2020" },
				employmentType: "Internship",
				icon: "code",
				description: `OCR takes longer than a file upload. I separated document submission from processing so the application could return a job ID, show its status, and notify the reviewer when results were ready.

- Built Django REST Framework endpoints for uploads, job status, and structured JSON results. Celery workers used OpenCV to straighten and denoise scans before Tesseract extracted text.
- Stored documents in S3 with server-side encryption, role-based access, and audit logging. Firebase Cloud Messaging and webhooks delivered processing updates to the review workflow.`,
				skills: ["Python", "Django", "RESTful APIs", "Firebase", "AWS S3", "Tesseract OCR", "OpenCV"],
			},
		],
	},
];

export default EXPERIENCES;

// // type Role = {
// // 	title: string;
// // 	duration: string;
// // 	type?: string; // Internship, Full-time etc.
// // 	description: string[];
// // };

// type SimpleRole = {
// 	title: string;
// 	duration: string;
// 	type?: string;
// 	description: string[]; // flat bullet list
// };

// type ProjectRole = {
// 	title: string;
// 	duration: string;
// 	type?: string;
// 	projects: {
// 		name: string;
// 		bullets: string[];
// 	}[];
// };

// type Role = SimpleRole | ProjectRole;

// type Experience = {
// 	id: string;
// 	company: string;
// 	location?: string;
// 	locationType?: "Remote" | "Onsite" | "Hybrid";
// 	roles: Role[];
// };

// const experienceData: Experience[] = [
// 	{
// 		id: "usc-isi",
// 		company: "USC Information Sciences Institute",
// 		location: "Marina del Rey, CA",
// 		locationType: "Remote",
// 		roles: [
// 			{
// 				title: "Software Engineer - AI",
// 				duration: "Feb 2025 – Present",
// 				// type: "Full-time",
// 				description: [
// 					"Developing KNIC (Knowledge Needed In Context), a system that captures, structures, and transfers expert knowledge using LLMs, ElasticSearch, and vector databases, making task-specific insights easily accessible",
// 					"Implementing AI-driven pipelines that analyze Jupyter sessions in real-time, extract contextual knowledge, and enable intelligent recommendations through FAISS and RAG (retrieval-augmented generation), bridging the gap between novice and expert users",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "usc",
// 		company: "University of Southern California",
// 		location: "Los Angeles, CA",
// 		locationType: "Remote",
// 		roles: [
// 			{
// 				title: "Course Producer & Grader - DSCI 510: Principles of Programming for Data Science",
// 				duration: "Aug 2023 – Dec 2024",
// 				description: [
// 					"Orchestrated GitHub Actions Workflow to automate testing, linting, and reporting for 70+ assignments within 10-minutes submitted on GitHub Classrooms",
// 					"Crafted test cases and Flake8 plugins to enforce assignment guidelines, utilizing Pytest, Flake8, and Bash for workflow efficiency",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "workup",
// 		company: "WorkUp",
// 		location: "Los Angeles, CA",
// 		locationType: "Remote",
// 		roles: [
// 			{
// 				title: "Machine Learning Engineer Intern",
// 				duration: "Jun 2024 – Jul 2024",
// 				// type: "Internship",
// 				description: [
// 					"Feature-engineered and preprocessed large datasets via NVTabular workflows and RAPIDS cuDF for the 'For-You' video recommendation system, optimizing performance with NVIDIA GPUs, achieving 3x faster processing",
// 					"Trained DLRM, DCN, and DCNv2 models to predict user interest, achieving a ROC-AUC of 71% with NVIDIA Merlin and TensorFlow",
// 					"Deployed models on AWS SageMaker with NVIDIA Triton server, establishing inference pipeline using AWS Lambda and API Gateway",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "lisus",
// 		company: "Lisus",
// 		location: "Los Angeles, CA",
// 		locationType: "Remote",
// 		roles: [
// 			{
// 				title: "Data Science Intern",
// 				duration: "Jun 2023 – Jul 2023",
// 				// type: "Internship",
// 				description: [
// 					"Analyzed spatiotemporal satellite data by integrating ECOSTRESS Thermal Infrared and Sentinel-1 SAR measurements to identify high-potential lithium brine sites in California, utilizing soil evaporation, topography analysis, and clustering algorithms (DBSCAN, Spectral) for resource optimization",
// 					"Designed an automated data processing and annotation pipeline for 2TB of 3D imagery data, converting swath to gridded GeoTIFFs, reducing storage by 80% per image",
// 					"Improved data quality by integrating image cropping, cloud cover removal, and denoising techniques, ensuring high-fidelity datasets for ML models",
// 					"Experimented with image data fusion models to merge multi-spectral satellite images to enhance spatial and spectral resolution for more accurate analysis",
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "climate-connect-digital",
// 		company: "Climate Connect Digital",
// 		location: "Pune, Maharashtra, India",
// 		locationType: "Hybrid",
// 		roles: [
// 			{
// 				title: "Data Engineer",
// 				duration: "Feb 2022 – Dec 2022",
// 				type: "Full-time",
// 				projects: [
// 					{
// 						name: "Green Commodities Trading",
// 						bullets: [
// 							"Formulated a trading strategy using technical indicators (RSI, moving averages), time-series models (ARIMA, Prophet, RNNs, LSTMs), and improved forecast accuracy by 4% through pattern recognition and trend analysis",
// 							"Developed cross-cloud real-time pipeline to stream carbon credits data (GCP Pub/Sub to AWS SNS/SQS, S3, Glue, DynamoDB), with event decoding, replay and failover mechanisms for emissions trading",
// 							"Curated and prepared a dataset for carbon offsets price forecasting, integrating financial data (commodities, stock indices) and applying statistical analysis, enhancing feature coverage with 10 new features and improving prediction accuracy",
// 							"Led end-to-end automation of carbon registry data ingestion using Selenium, BeautifulSoup, and GCP; built scalable Python ETL pipelines, streamlining workflows and reducing manual effort by 40%",
// 							// "Orchestrated a dynamic dashboard in Looker Studio to monitor key metrics, patterns and trends in real-time helping the sales team to improve carbon footprint reporting by 30%",
// 							"Designed a Looker Studio dashboard linking CRM, emissions, and energy trade data to surface real-time sales KPIs and carbon impact trends, improving carbon footprint reporting efficiency by 30%",
// 						],
// 					},
// 					{
// 						name: "Energy Demand & Load Forecasting",
// 						bullets: [
// 							"Designed an event-driven micro-batch pipeline to ingest power grid data from GCS into BigQuery using Pub/Sub, Cloud Functions, and Dataflow; reduced end-to-end latency from 15 to 5 minutes and cut cloud costs by 60%",
// 							"Automated end-to-end ML pipelines for 15-min grid balancing forecasts on GCP (Beam, BigQuery, MLflow, Prefect); enabled daily retraining with updated SCADA features, improving forecast accuracy by 3% and reducing turn-around time by 10%",
// 							"Engineered a data lakehouse using BigQuery and Cloud Storage, optimizing query performance for analytics platform through partitioning, materialized views and stored procedures, reducing data scanning by 30%",
// 							"Migrated SCADA data (MongoDB to BigQuery) via Apache Beam, ensuring zero downtime and reducing storage costs by 60%",
// 							"Refactored weather data pipelines integrating data validation and anomaly detection, automating workflows with Dagster, improving maintainability, and reducing pipeline failures by 70%",
// 							"Organized 2 sessions on source control and scripting practices, giving an overview of Data and Machine Learning Operations Systems for the company’s products",
// 						],
// 					},
// 				],
// 			},
// 		],
// 	},
// 	{
// 		id: "taiyo",
// 		company: "Taiyō.AI",
// 		location: "San Francisco, CA",
// 		locationType: "Remote",
// 		roles: [
// 			{
// 				title: "Consultant - Data & Machine Learning",
// 				duration: "Jan 2022 – Apr 2022",
// 				type: "Part-time",
// 				description: [
// 					"Enabled system-wide observability using Kibana + Logstash, tracking pipeline health, data coverage, ingestion trends, data completeness across key dimensions, and operational issues for faster debugging and resolution",
// 					"Authored comprehensive product documentation encompassing product-wide schema, meticulous naming conventions, nuanced problem-solving solutions, and in-depth insights into the design process, reflecting meticulous attention to detail and thoughtful engineering strategies",
// 					"Created video documentation and comprehensive WIKI resources to onboard new team members and provide insights into core product concepts and development practices",
// 				],
// 			},
// 			{
// 				title: "Data & Machine Learning Engineer",
// 				duration: "Jul 2021 – Dec 2021",
// 				type: "Full-time",
// 				description: [
// 					"Built and scaled infrastructure intelligence platform, ingesting and unifying 60+ yrs of global public contracts data and $15T+ in project value, powering semantic discovery, demand indices, and procurement risk analytics",
// 					"Engineered a semantic search and recommendation system using custom BERT embeddings and cosine similarity with heuristic re-ranking, achieving 65% Precision@10 and 0.8 MRR, improving relevance diversity in discovery workflows",
// 					"Fine-tuned BERT embeddings for NER and Key-phrase extraction to enhance document tagging and data enrichment, reducing missing values by 27% and improving text-based entity recognition by 20%",
// 					"Orchestrated and automated data pipelines with Argo Workflows on AWS EKS with Fargate leveraging Terraform, Docker, and GitLab CI/CD, reducing manual work by 60% and saving 120+ hrs/month on data product delivery",
// 					"Designed scalable data infrastructure using hot and cold storage strategy, optimized S3 for cost-efficient back-filling, and leveraged Elasticsearch for fast retrieval across 50M+ documents, reducing retrieval costs by 20%",
// 					"Modeled a hybrid data schema and quality checks, standardizing diverse sources into a Common Data Model, improving data consistency, and reducing analytical discrepancies by 30%",
// 				],
// 			},
// 			{
// 				title: "Data Scientist",
// 				duration: "Jan 2021 – Jun 2021",
// 				type: "Part-time",
// 				description: [
// 					"Developed BERT-based weakly supervised classifier for sector-subsector labeling (~300 classes) across 100K+ records, achieving 80% macro F1, organizing data for improving categorization, search, and analytics",
// 					// "Engineered modular ETL framework with parallel processing, powering 20+ pipelines across web/API sources; clean, validate, and enabled transformations (semantic, spatial, standardization), reducing dev and ingestion time by 50%",
// 					"Engineered a modular Python ETL framework with multiprocessing for data retrieval and Spark for distributed transformations and ingestion, with checkpointing and failure recovery, cutting delivery time by 50%",
// 					"Developed 20+ data pipelines to scrape data from web pages and 3rd Party APIs using BeautifulSoup, and Selenium, transformed (cleaned, geocoded, standardized) data with PySpark, generated embeddings using Hugging Face models, and ingested into GCS and Elasticsearch",
// 					// "Built reusable training and inference pipeline and integrated SHAP into analytics dashboards to highlight top 10 risk drivers from 1K+ features, improving model transparency and guiding stakeholder decisions",
// 					"Trained a voting-based ensemble (XGBoost, RF, NNs) for investment risk profiling from static and temporal data, handling complexity and imbalance; achieved 84% F1-score for early identification of high-risk projects",
// 					"Built inference pipelines with SHAP explainability, integrated into analytics APIs to surface top 10 risk drivers from 1K+ features, delivering over 80% explainability coverage in investment risk decisions",
// 					// "Trained a voting ensemble (XGBoost, RF, NNs) on static and temporal data, addressing class imbalance and complexity applying feature reduction (10K+ → ∼1K); achieving 84% F1-score in early detection of high-risk investment projects",
// 				],
// 			},
// 			{
// 				title: "Data Scientist Intern",
// 				duration: "Jun 2020 – Dec 2020",
// 				type: "Internship",
// 				description: [
// 					"Expanded financial forecasting platform with 5+ predictive models and technical indicators; built Grafana dashboards for comparative model evaluation across assets, supporting trading decisions that yielded ~$15K in gains",
// 					"Developed 10+ Airflow pipelines to retrieve, clean, and ingest time-series data into PostgreSQL, essential for market scanning and trading strategies",
// 					"Evaluated AI performance across multiple tasks and domains, compiling benchmark data and aggregating metrics over time and generating visual reports on Google Sheets, for Stanford HAI - AI Index Report 2021",
// 				],
// 			},
// 		],
// 	},
// ];

// export default experienceData;
