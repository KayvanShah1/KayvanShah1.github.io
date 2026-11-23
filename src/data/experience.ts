import type { Experience } from "./types/experiences";

export const EXPERIENCES: Experience[] = [
	{
		id: "mercor-intelligence",
		companyName: "Mercor Intelligence",
		positions: [
			{
				id: "mi-1",
				title: "AI/ML Evaluation Engineer",
				employmentPeriod: { start: "May 2026", end: "Jul 2026" },
				location: "Remote",
				employmentType: "Contract",
				isExpanded: false,
				icon: "code",
				description: `
- Built Docker environments and test harnesses to evaluate AI-generated changes against repository-level tasks.
- Compared test results, runtime behavior, and task requirements to identify where coding agents repeatedly produced incorrect or incomplete changes.
`,
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
				title: "Senior Data Engineer",
				employmentPeriod: { start: "Apr 2026" },
				location: "Remote",
				employmentType: "Freelance",
				isExpanded: false,
				icon: "code",
				description: ``,
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
				title: "AI Engineer",
				employmentPeriod: { start: "Feb 2025", end: "Feb 2026" },
				location: "Marina del Rey, CA (Remote)",
				employmentType: "Volunteer",
				isExpanded: true,
				icon: "code",
				description: `
Built retrieval and inference services for an assistant that helps researchers work inside Jupyter notebooks.

- Indexed documentation and code in Elasticsearch and served it through Flask. A FAISS cache with relevance thresholds filtered out 40% of irrelevant results and brought top-k relevance to 85% on offline checks.
- Persisted notebook execution state so the assistant could use earlier cells and outputs across a multi-step analysis. RabbitMQ events made backend failures easier to trace.
- Served models through GPU-scheduled vLLM endpoints at about five seconds per response on average. Evaluated task-specific prompts and QLoRA adapters on notebook assistance tasks.
`,
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
				title: "Course Producer & Grader (Grading Automation)",
				employmentPeriod: { start: "Aug 2023", end: "Dec 2024" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Part-time",
				icon: "code",
				description: `
For DSCI 510, Principles of Programming for Data Science, the teaching team spent roughly 20 hours a week running student code, checking it against the rubric, and handling regrades. I led four graders and automated that work across 70+ assignments.

- Built a GitHub Classroom pipeline that dispatched private tests to 100+ isolated GitHub Actions evaluations. Each run checked code with Pytest and Flake8 and preserved its results for review.
- Brought the full weekly batch, including regrades, down to about **10 minutes**. Students received individual feedback and the teaching team received a consolidated CSV in Slack.
- Used the time we recovered to design more challenging assignments and answer more questions on the student forum. Instructors teaching similar courses adopted the workflow.
`,
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
				title: "Machine Learning Engineer Intern",
				employmentPeriod: { start: "Jun 2024", end: "Jul 2024" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `
- Feature-engineered and preprocessed large datasets via **NVTabular workflows** and **RAPIDS cuDF** for the 'For-You' video recommendation system, optimizing performance with NVIDIA GPUs, achieving 3× faster processing  
- Trained **DLRM, DCN, and DCNv2** models to predict user interest, achieving a ROC-AUC of 71% with **NVIDIA Merlin** and **TensorFlow**  
- Deployed models on **AWS SageMaker** with **NVIDIA Triton server**, establishing inference pipeline using **AWS Lambda** and **API Gateway**
        `,
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
				title: "Data Science Intern",
				employmentPeriod: { start: "Jun 2023", end: "Jul 2023" },
				location: "Los Angeles, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `
- Processed 2 TB of satellite imagery into georeferenced grids for lithium-brine exploration in California. Cropping, cloud masking, and denoising made measurements comparable across locations.
- Combined ECOSTRESS thermal and Sentinel-1 radar measurements with terrain data. Used DBSCAN and spectral clustering to identify candidate regions, then checked them against elevation, land cover, and evapotranspiration, filtering out about a quarter of the initial candidates.
`,
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
				title: "Data Engineer",
				employmentPeriod: { start: "Nov 2022", end: "Dec 2022" },
				location: "Pune, Maharashtra, India (Hybrid)",
				employmentType: "Freelance",
				icon: "code",
				description: `
Built the data pipeline behind carbon-market pricing and trade reconciliation.

- Bridged GCP Pub/Sub and AWS SNS/SQS with Cloud Functions. Lambda decoded trade events, retained raw messages in S3, and recorded processing state in DynamoDB so failed events could be replayed.
- Combined CME carbon futures data with market indicators and prepared time-series features for the pricing workflow. Automated carbon registry ingestion and built Looker Studio reporting for the commercial team.
`,
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
				title: "Data Engineer",
				employmentPeriod: { start: "Feb 2022", end: "Oct 2022" },
				location: "Pune, Maharashtra, India (Hybrid)",
				employmentType: "Full-time",
				icon: "code",
				description: `
Led data engineering and MLOps for grid forecasting and renewable-site analytics.

- Moved live SCADA publishing from AWS MSK to Pub/Sub and added a GCS batch path for replay and reconciliation. Pipeline cloud spend fell about **60% over a quarter**.
- Migrated telemetry from MongoDB to BigQuery with parallel ingestion and historical backfills. Existing consumers stayed online throughout. Modeled readings by site, asset, and tag in dbt, reducing query scans by 30%.
- Built reusable Dataflow jobs for telemetry exports and model results across **20+ sites**. Terraform-managed Cloud Functions launched scheduled and on-demand runs.
- Automated the ML team's **15-minute load forecasts across five power plants** with Dagster, FastAPI, and MLflow. Monitoring actual load and triggering retraining on drift helped improve accuracy by about 3% and lower deviation penalties by about 10%.
- Rebuilt weather ingestion as configurable Dagster jobs with validation and retries, reducing pipeline failures by 70%.
`,
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
				title: "Consultant - Data & Machine Learning",
				employmentPeriod: { start: "Jan 2022", end: "Apr 2022" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Part-time",
				description: `
- Used Kibana and Logstash to trace recurring ingestion and indexing failures. Error rates fell 40% over three months.
- Documented schemas, naming conventions, and operating procedures so new engineers could trace a record from its source to the search index.
`,
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
				title: "Data & Machine Learning Engineer",
				icon: "idea",
				employmentPeriod: { start: "Jul 2021", end: "Dec 2021" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Full-time",
				description: `
Led data infrastructure and retrieval for an investment research platform where analysts could find comparable projects across **50M+ infrastructure records**.

- Built semantic search and similar-project recommendations with domain-adapted BERT embeddings and heuristic reranking. The system reached **85% Precision@10 and 0.7 MRR**.
- Reconciled duplicate records across sources while preserving source-specific fields. Extracted entities and keyphrases from text and scanned documents, and ran embedding generation and indexing in parallel to keep search aligned with the underlying records. Enrichment closed 27% of project data gaps.
- Standardized 35+ multistage pipelines with reusable Argo Workflows on AWS Fargate and Terraform. Onboarding a source took half as long, and data-product release cycles shortened by 60%.
- Organized historical data in S3 and tuned Elasticsearch field mappings and indexes, reducing search latency by 20%.
`,
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
				title: "Data Scientist",
				employmentPeriod: { start: "Jan 2021", end: "Jun 2021" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Part-time",
				icon: "code",
				description: `
- Built pipelines for government and multilateral contract data and a reusable ETL framework with checkpoints and restart logic.
- Trained a weakly supervised BERT classifier to assign sector and subsector labels across roughly 300 classes, reaching 0.80 macro F1 on 100K+ records.
- Developed investment-risk and survival models using XGBoost and LSTMs. The risk classifier reached 0.84 F1. Django APIs returned predictions and the ten leading SHAP risk drivers in two to five seconds so analysts could investigate a flagged project.
`,
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
				title: "Data Scientist Intern",
				employmentPeriod: { start: "Jun 2020", end: "Dec 2020" },
				location: "San Francisco, CA (Remote)",
				employmentType: "Internship",
				icon: "code",
				description: `
- Built Airflow pipelines for financial and economic data used by the market scanner. The sources covered more than 60 years of history and supplied ongoing updates.
- Extended the forecasting toolkit and built Grafana dashboards to compare model performance across assets.
- Compiled benchmark results for the Stanford HAI AI Index Report 2021.
`,
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
				title: "Backend Developer Intern",
				location: "Mumbai, Maharashtra, India (Onsite)",
				employmentPeriod: { start: "Dec 2019", end: "Jan 2020" },
				employmentType: "Internship",
				icon: "code",
				description: `
- Built **Django REST Framework** endpoints for secure doc upload, job status, and results; normalized outputs to EHR-friendly JSON
- Wired an async OCR pipeline using **Tesseract OCR** with **OpenCV** pre-processing (de-skew/denoise) via Celery workers
- Set up **AWS S3** storage with server-side encryption; added basic RBAC and audit logging for PHI
- Added processing updates via **Firebase Cloud Messaging** and webhooks for review notifications
		`,
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
