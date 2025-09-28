import { type Experience } from "@/components/features/profile/types/experiences";

export const EXPERIENCES: Experience[] = [
	{
		id: "usc-isi",
		companyName: "USC Information Sciences Institute",
		positions: [
			{
				id: "usc-isi-pos-1",
				title: "Software Engineer - AI",
				employmentPeriod: { start: "Feb 2025" },
				location: "Marina del Rey, CA (Remote)",
				employmentType: "Part-time",
				isExpanded: true,
				icon: "code",
				description: `
- Built an **AI teaching companion** that monitored expert workflows and delivered contextual assistance in **Jupyter notebooks** via RAG pipeline (ElasticSearch, FAISS) with 400ms retrieval latency and 90%+ relevance 
- Designed and integrated GenAI features - Q&A generation, summarization, search, personalized responses leveraging GPT-4o, LLaMA-2, Mistral-7B, and PEFT-finetuned models for improved domain accuracy by 10%
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
		isCurrentEmployer: true,
	},
	// 	{
	// 		id: "usc",
	// 		companyName: "University of Southern California",
	// 		positions: [
	// 			{
	// 				id: "usc-pos-1",
	// 				title: "Course Producer & Grader",
	// 				employmentPeriod: { start: "Aug 2023", end: "Dec 2024" },
	// 				location: "Los Angeles, CA (Remote)",
	// 				employmentType: "Part-time",
	// 				icon: "idea",
	// 				description: `
	// *Automation Expert* - DSCI 510: Principles of Programming for Data Science

	// - Orchestrated **GitHub Actions Workflow** to automate testing, linting, and reporting for 70+ assignments within 10 minutes on GitHub Classrooms
	// - Crafted test cases and Flake8 plugins to enforce assignment guidelines, utilizing **Pytest**, **Flake8**, and **Bash** for workflow efficiency
	// - Designed challenging coding assignments, tests, and projects, ensuring alignment with course objectives and learning outcomes
	//         `,
	// 				skills: ["Python", "GitHub Actions", "Pytest", "Flake8", "Bash", "CI/CD", "Automation"],
	// 			},
	// 		],
	// 		isCurrentEmployer: false,
	// 	},
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
- Analyzed spatiotemporal satellite data by integrating **ECOSTRESS Thermal Infrared** and **Sentinel-1 SAR** measurements to identify high-potential lithium brine sites in California, utilizing soil evaporation, topography analysis, and clustering algorithms (**DBSCAN, Spectral**) for resource optimization  
- Designed an automated data processing and annotation pipeline for **2TB** of 3D imagery data, converting swath to gridded **GeoTIFFs**, reducing storage by 80% per image  
- Improved data quality by integrating image cropping, cloud cover removal, and denoising techniques, ensuring high-fidelity datasets for ML models  
- Experimented with image data fusion models to merge multi-spectral satellite images to enhance spatial and spectral resolution for more accurate analysis
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
**Green Commodities Trading**  
- Developed **cross-cloud** pipeline streaming *carbon credits* & *trading data* from GCP Pub/Sub into AWS (S3, Glue, DynamoDB) via **Kafka**, implementing decoding, bookkeeping, replay, and failover to sustain thousands of msgs/sec  
- Curated and prepared a dataset for *carbon offsets price forecasting*, integrating *financial data (commodities, stock indices)* and applying statistical analysis, enhancing feature coverage with 10 new features and improving prediction accuracy  
- Led end-to-end automation of *carbon registry data* ingestion using **Selenium**, **BeautifulSoup**, and **GCP**; built scalable **Python ETL** pipelines, streamlining workflows and reducing manual effort by 40%  
- Designed a **Looker Studio dashboard** linking CRM, emissions, and *energy trade data* to surface real-time sales KPIs and carbon impact trends, improving carbon footprint reporting efficiency by 30%
- Formulated a trading strategy using technical indicators (**RSI, moving averages**), time-series models (**ARIMA, Prophet, RNNs, LSTMs**), and improved forecast accuracy by 4% through pattern recognition and trend analysis
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
**Energy Demand & Load Forecasting**
- Designed an **event-driven** pipeline on **GCP (Pub/Sub, Cloud Functions, Dataflow)** to ingest power grid data from **GCS** into **BigQuery**, with processing time of ∼5 min and 60% lower cloud costs compared to real-time streaming
- Analyzed *power consumption patterns* across 5M+ households and industries using BigQuery, defining KPIs (peak load, daily usage, load factor) to surface insights for **demand forecasting and energy trading** decisions
- Automated ML pipelines for *15-min grid balancing forecasts* on GCP (**Beam, BigQuery, MLflow, Prefect**); enabled daily retraining and metric-triggered with updated SCADA features, improving forecast accuracy by 3% and reducing turn-around time by 10%  
- Engineered a **data lakehouse** using BigQuery and Cloud Storage in **dbt**, optimizing query performance for analytics platform through partitioning, materialized views, and stored procedures, reducing data scanning by 30%  
- Migrated *SCADA data* (MongoDB → BigQuery) via **Apache Beam**, ensuring zero downtime and reducing storage costs by 60%  
- Refactored *weather data* pipelines integrating data validation and *anomaly detection*, automating workflows with **Dagster**, improving maintainability, and reducing pipeline failures by 70%  
- Organized 2 sessions on source control and scripting practices, giving an overview of **Data and Machine Learning Operations Systems** for the company’s products
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
- Enabled system-wide observability using **Kibana + Logstash**, tracking pipeline health, data coverage, ingestion trends, and operational issues for faster debugging and resolution  
- Authored comprehensive product documentation encompassing **product-wide schema**, meticulous naming conventions, problem-solving solutions, and in-depth insights into the design process  
- Created video documentation and comprehensive **WIKI resources** to onboard new team members and provide insights into core design concepts and development practices
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
- Built and scaled **infrastructure intelligence platform**, ingesting and unifying 60+ yrs of global public contracts data and $15T+ in project value, powering semantic discovery, demand indices, and procurement risk analytics  
- Engineered a **semantic search & recommendation system** using custom BERT embeddings and cosine similarity with heuristic re-ranking, achieving 65% Precision@10 and 0.8 MRR improving relevance and diversity in discovery workflows 
- Fine-tuned BERT embeddings for **NER & Key-phrase extraction** to enhance document tagging and enrichment, reducing missing values by 27% and improving text-based entity recognition by 20% 
- Orchestrated & automated **data pipelines** with **Argo Workflows** on **AWS EKS (Fargate)** using **Terraform, Docker, GitLab CI/CD**, reducing manual work by 60% and saving 120+ hrs/month  
- Designed scalable **hot/cold storage strategy**, optimized S3 for cost-efficient back-filling, and leveraged **Elasticsearch** for fast retrieval across 50M+ documents, reducing retrieval costs by 20%  
- Modeled a **Common Data Model** with a hybrid data schema and built quality checks, improving consistency and reducing discrepancies by 30%
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
- Developed BERT-based **weakly supervised classifier** for sector-subsector labeling (~300 classes) across 100K+ records, achieving 80% macro F1, organizing data for improving categorization, search, and analytics  
- Engineered a **reusable ETL framework** with abstractions, deployment configs, and fault-tolerant features (checkpointing, restart logic, logging), standardizing pipeline builds, and cutting delivery time by 50%  
- Developed 20+ end-to-end **data pipelines** to scrape and process public contracts data from diverse government and multilateral sources, generating embeddings and indexing in GCS and Elasticsearch, enabling search and analytics  
- Trained a **voting-based ensemble** (XGBoost, RF, NNs) for investment risk profiling from static & temporal data; achieved 84% F1-score  
- Built inference pipelines with **SHAP explainability**, integrated into analytics APIs, surfacing top 10 risk drivers from 1K+ features, delivering 80%+ coverage in investment risk decisions
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
- Expanded **financial forecasting toolkit** with predictive models & technical indicators; built **Grafana dashboards** comparative model evaluation across assets, supporting trading decisions that yielded ~$15K gains  
- Developed 10+ **Airflow pipelines** to ingest time-series data into **PostgreSQL**, essential for market scanning & trading strategies  
- Evaluated AI performance across multiple tasks/domains, compiled benchmark data & metrics, generating reports for **Stanford HAI – AI Index Report 2021**
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
