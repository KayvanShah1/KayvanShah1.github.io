// type Role = {
// 	title: string;
// 	duration: string;
// 	type?: string; // Internship, Full-time etc.
// 	description: string[];
// };

type SimpleRole = {
	title: string;
	duration: string;
	type?: string;
	description: string[]; // flat bullet list
};

type ProjectRole = {
	title: string;
	duration: string;
	type?: string;
	projects: {
		name: string;
		bullets: string[];
	}[];
};

type Role = SimpleRole | ProjectRole;

type Experience = {
	id: string;
	company: string;
	location?: string;
	locationType?: "Remote" | "Onsite" | "Hybrid";
	roles: Role[];
};

const experienceData: Experience[] = [
	{
		id: "usc-isi",
		company: "USC Information Sciences Institute",
		location: "Marina del Rey, CA",
		locationType: "Remote",
		roles: [
			{
				title: "Software Engineer - AI",
				duration: "Feb 2025 – Present",
				// type: "Full-time",
				description: [
					"Developing KNIC (Knowledge Needed In Context), a system that captures, structures, and transfers expert knowledge using LLMs, ElasticSearch, and vector databases, making task-specific insights easily accessible",
					"Implementing AI-driven pipelines that analyze Jupyter sessions in real-time, extract contextual knowledge, and enable intelligent recommendations through FAISS and RAG (retrieval-augmented generation), bridging the gap between novice and expert users",
				],
			},
		],
	},
	{
		id: "usc",
		company: "University of Southern California",
		location: "Los Angeles, CA",
		locationType: "Remote",
		roles: [
			{
				title: "Course Producer & Grader - DSCI 510: Principles of Programming for Data Science",
				duration: "Aug 2023 – Dec 2024",
				description: [
					"Orchestrated GitHub Actions Workflow to automate testing, linting, and reporting for 70+ assignments within 10-minutes submitted on GitHub Classrooms",
					"Crafted test cases and Flake8 plugins to enforce assignment guidelines, utilizing Pytest, Flake8, and Bash for workflow efficiency",
				],
			},
		],
	},
	{
		id: "workup",
		company: "WorkUp",
		location: "Los Angeles, CA",
		locationType: "Remote",
		roles: [
			{
				title: "Machine Learning Engineer Intern",
				duration: "Jun 2024 – Jul 2024",
				// type: "Internship",
				description: [
					"Feature-engineered and preprocessed large datasets via NVTabular workflows and RAPIDS cuDF for the 'For-You' video recommendation system, optimizing performance with NVIDIA GPUs, achieving 3x faster processing",
					"Trained DLRM, DCN, and DCNv2 models to predict user interest, achieving a ROC-AUC of 71% with NVIDIA Merlin and TensorFlow",
					"Deployed models on AWS SageMaker with NVIDIA Triton server, establishing inference pipeline using AWS Lambda and API Gateway",
				],
			},
		],
	},
	{
		id: "lisus",
		company: "Lisus",
		location: "Los Angeles, CA",
		locationType: "Remote",
		roles: [
			{
				title: "Data Science Intern",
				duration: "Jun 2023 – Jul 2023",
				// type: "Internship",
				description: [
					"Analyzed spatiotemporal satellite data by integrating ECOSTRESS Thermal Infrared and Sentinel-1 SAR measurements to identify high-potential lithium brine sites in California, utilizing soil evaporation, topography analysis, and clustering algorithms (DBSCAN, Spectral) for resource optimization",
					"Designed an automated data processing and annotation pipeline for 2TB of 3D imagery data, converting swath to gridded GeoTIFFs, reducing storage by 80% per image",
					"Improved data quality by integrating image cropping, cloud cover removal, and denoising techniques, ensuring high-fidelity datasets for ML models",
					"Experimented with image data fusion models to merge multi-spectral satellite images to enhance spatial and spectral resolution for more accurate analysis",
				],
			},
		],
	},
	{
		id: "climate-connect-digital",
		company: "Climate Connect Digital",
		location: "Pune, Maharashtra, India",
		locationType: "Hybrid",
		roles: [
			{
				title: "Data Engineer",
				duration: "Feb 2022 – Dec 2022",
				type: "Full-time",
				projects: [
					{
						name: "Green Commodities Trading",
						bullets: [
							"Formulated a trading strategy using technical indicators (RSI, moving averages), time-series models (ARIMA, Prophet, RNNs, LSTMs), and improved forecast accuracy by 4% through pattern recognition and trend analysis",
							"Developed cross-cloud real-time pipeline to stream carbon credits data (GCP Pub/Sub to AWS SNS/SQS, S3, Glue, DynamoDB), with event decoding, replay and failover mechanisms for emissions trading",
							"Curated and prepared a dataset for carbon offsets price forecasting, integrating financial data (commodities, stock indices) and applying statistical analysis, enhancing feature coverage with 10 new features and improving prediction accuracy",
							"Led end-to-end automation of carbon registry data ingestion using Selenium, BeautifulSoup, and GCP; built scalable Python ETL pipelines, streamlining workflows and reducing manual effort by 40%",
							// "Orchestrated a dynamic dashboard in Looker Studio to monitor key metrics, patterns and trends in real-time helping the sales team to improve carbon footprint reporting by 30%",
							"Designed a Looker Studio dashboard linking CRM, emissions, and energy trade data to surface real-time sales KPIs and carbon impact trends, improving carbon footprint reporting efficiency by 30%",
						],
					},
					{
						name: "Energy Demand & Load Forecasting",
						bullets: [
							"Designed an event-driven micro-batch pipeline to ingest power grid data from GCS into BigQuery using Pub/Sub, Cloud Functions, and Dataflow; reduced end-to-end latency from 15 to 5 minutes and cut cloud costs by 60%",
							"Automated end-to-end ML pipelines for 15-min grid balancing forecasts on GCP (Beam, BigQuery, MLflow, Prefect); enabled daily retraining with updated SCADA features, improving forecast accuracy by 3% and reducing turn-around time by 10%",
							"Engineered a data lakehouse using BigQuery and Cloud Storage, optimizing query performance for analytics platform through partitioning, materialized views and stored procedures, reducing data scanning by 30%",
							"Migrated SCADA data (MongoDB to BigQuery) via Apache Beam, ensuring zero downtime and reducing storage costs by 60%",
							"Refactored weather data pipelines integrating data validation and anomaly detection, automating workflows with Dagster, improving maintainability, and reducing pipeline failures by 70%",
							"Organized 2 sessions on source control and scripting practices, giving an overview of Data and Machine Learning Operations Systems for the company’s products",
						],
					},
				],
			},
		],
	},
	{
		id: "taiyo",
		company: "Taiyō.AI",
		location: "San Francisco, CA",
		locationType: "Remote",
		roles: [
			{
				title: "Consultant - Data & Machine Learning",
				duration: "Jan 2022 – Apr 2022",
				type: "Part-time",
				description: [
					"Enabled system-wide observability using Kibana + Logstash, tracking pipeline health, data coverage, ingestion trends, data completeness across key dimensions, and operational issues for faster debugging and resolution",
					"Authored comprehensive product documentation encompassing product-wide schema, meticulous naming conventions, nuanced problem-solving solutions, and in-depth insights into the design process, reflecting meticulous attention to detail and thoughtful engineering strategies",
					"Created video documentation and comprehensive WIKI resources to onboard new team members and provide insights into core product concepts and development practices",
				],
			},
			{
				title: "Data & Machine Learning Engineer",
				duration: "Jul 2021 – Dec 2021",
				type: "Full-time",
				description: [
					"Built and scaled infrastructure intelligence platform, ingesting and unifying 60+ yrs of global public contracts data and $15T+ in project value, powering semantic discovery, demand indices, and procurement risk analytics",
					"Engineered a semantic search and recommendation system using custom BERT embeddings and cosine similarity with heuristic re-ranking, achieving 65% Precision@10 and 0.8 MRR, improving relevance diversity in discovery workflows",
					"Fine-tuned BERT embeddings for NER and Key-phrase extraction to enhance document tagging and data enrichment, reducing missing values by 27% and improving text-based entity recognition by 20%",
					"Orchestrated and automated data pipelines with Argo Workflows on AWS EKS with Fargate leveraging Terraform, Docker, and GitLab CI/CD, reducing manual work by 60% and saving 120+ hrs/month on data product delivery",
					"Designed scalable data infrastructure using hot and cold storage strategy, optimized S3 for cost-efficient back-filling, and leveraged Elasticsearch for fast retrieval across 50M+ documents, reducing retrieval costs by 20%",
					"Modeled a hybrid data schema and quality checks, standardizing diverse sources into a Common Data Model, improving data consistency, and reducing analytical discrepancies by 30%",
				],
			},
			{
				title: "Data Scientist",
				duration: "Jan 2021 – Jun 2021",
				type: "Part-time",
				description: [
					"Developed BERT-based weakly supervised classifier for sector-subsector labeling (~300 classes) across 100K+ records, achieving 80% macro F1,  organizing data for improving categorization, search, and analytics",
					"Engineered modular ETL framework with parallel processing, powering 20+ pipelines across web/API sources; clean, validate, and enabled transformations (semantic, spatial, standardization), reducing dev and ingestion time by 50%",
					// "Built reusable training and inference pipeline and integrated SHAP into analytics dashboards to highlight top 10 risk drivers from 1K+ features, improving model transparency and guiding stakeholder decisions",
					// "Trained a voting-based ensemble (XGBoost, RF, NNs) for investment risk profiling from static and temporal data, handling complexity and imbalance; achieved 84% F1-score for early identification of high-risk projects",
					"Built inference pipelines with SHAP explainability, integrated into analytics APIs to surface top 10 risk drivers from 1K+ features, delivering over 80% explainability coverage in investment risk decisions",
					"Trained a voting ensemble (XGBoost, RF, NNs) on static and temporal data, addressing class imbalance and complexity applying feature reduction (10K+ → ∼1K); achieving 84% F1-score in early detection of high-risk investment projects",
				],
			},
			{
				title: "Data Scientist Intern",
				duration: "Jun 2020 – Dec 2020",
				type: "Internship",
				description: [
					"Expanded financial forecasting platform with 5+ predictive models and technical indicators; built Grafana dashboards for comparative model evaluation across assets, supporting trading decisions that yielded ~$15K in gains",
					"Developed 10+ Airflow pipelines to retrieve, clean, and ingest time-series data into PostgreSQL, essential for market scanning and trading strategies",
					"Evaluated AI performance across multiple tasks and domains, compiling benchmark data and aggregating metrics over time and generating visual reports on Google Sheets, for Stanford HAI - AI Index Report 2021",
				],
			},
		],
	},
];

export default experienceData;
