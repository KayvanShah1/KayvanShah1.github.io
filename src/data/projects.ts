import type { Project } from "./types/projects";

export const PROJECTS: Project[] = [
	{
		id: "vivi-commercial-vehicle-search",
		title: "Vivi: Conversational Commercial Vehicle Search",
		period: { start: "Aug 2026", end: "Sep 2026" },
		tags: ["AI", "NLP", "Search"],
		skills: ["Python", "OpenAI Agents SDK", "Groq", "MotherDuck", "Streamlit"],
		link: "https://github.com/KayvanShah1/conversational-commercial-vehicle-search",
		summary: "A voice and text assistant for buyers comparing used commercial vehicles in India.",
		description: `A buyer might ask for a truck under a certain budget, switch to diesel, then ask about “the second one.” I built Vivi so the buyer can make those changes in English or Hinglish and keep the rest of the shortlist criteria intact.

- The agent turns each request into typed changes to the search. A catalog query applies hard limits such as price and payload, ranks eligible vehicles, and checks the results before the assistant describes them.
- I built a catalog of **1,000 synthetic listings** and tested the full conversation, including voice transcription, tool selection, and whether every recommendation met the active filters.
- Vivi passed **51 of 52 cases** across 46 text and six recorded voice scenarios. The remaining case exposed a Bangalore/Bengaluru naming mismatch that excluded a valid result.

[Try Vivi](https://conversational-commercial-vehicle-search.onrender.com/) · [Read the evaluation](https://github.com/KayvanShah1/conversational-commercial-vehicle-search/blob/main/docs/EVALUATION.md)`,
	},
	{
		id: "gridledger",
		title: "GridLedger: Renewable Curtailment Platform",
		tags: ["Energy", "Data Engineering", "Analytics"],
		skills: ["Python", "Polars", "BigQuery", "dbt", "Dagster", "GCP"],
		summary:
			"How much wind and solar generation is lost to curtailment, and how much could a battery actually recover?",
		description: `I built GridLedger around Brazilian grid operator ONS data. A monthly total can show a large volume of curtailed energy while hiding whether it arrived in short bursts or over several consecutive hours. That difference matters when sizing storage.

- Built Python connectors to discover ONS datasets, archive the source files in GCS, normalize them to Parquet, and load BigQuery. Cloud SQL records which resources have already been processed.
- Modeled curtailment at **30-minute intervals**. The reference-generation assumption and conversion from power to MWh are explicit, so plant and regional estimates can be compared on the same basis.
- Simulated **2-, 4-, 8-, and 12-hour batteries**, carrying state of charge from one interval to the next. The outputs show recovered energy, utilization, and stretches when there was too little surplus to serve a load.`,
	},
	{
		id: "settlesentry",
		title: "SettleSentry: Payment Collection AI Agent",
		period: { start: "Apr 2026", end: "May 2026" },
		tags: ["AI", "Finance", "Backend"],
		skills: ["Python", "LangGraph", "Pydantic AI", "OpenRouter", "Pytest"],
		link: "https://github.com/KayvanShah1/settlesentry-payment-collection-agent",
		summary:
			"A payment collection assistant that verifies the customer, discloses the balance, and waits for explicit payment approval.",
		description: `I built SettleSentry to test how much of a collection call a language model could handle. The difficult turns were the ones where a customer corrected an amount, changed their mind, or tried to skip verification.

- Used LangGraph to track the verified account, amount, and confirmation. Each tool checks the current state before it can disclose a balance or call the simulated payment API.
- Compared four versions of the same workflow, from fixed rules through model-directed tool calls. Keeping the scenarios constant let me compare the effect of giving the model more control.
- Across **15 simulated scenarios**, the evaluation recorded no private-data disclosures or premature payment calls. Completed conversations averaged **8.6 turns** and **74 seconds**.`,
	},
	{
		id: "b2b-ecommerce-data-platform",
		title: "B2B e-Commerce Data Platform",
		period: { start: "Mar 2026", end: "May 2026" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["Python", "Dagster", "dbt", "PostgreSQL", "Polars", "MotherDuck", "MinIO"],
		link: "https://github.com/KayvanShah1/b2b-ecommerce-platform",
		summary: "A B2B commerce warehouse that can recover an interrupted load without counting an order twice.",
		description: `I wanted to test an incremental pipeline against a business that keeps changing. I generated customers, products, orders, leads, and web activity over time so a second run had new and updated records to deal with.

- Processed **10M+ rows across nine datasets**. Watermarks select what changed, manifests record the inputs, and checkpoints let a failed run resume. Writes are idempotent, including when an input arrives twice.
- Used Dagster to orchestrate the loads and dbt to turn source records into sales, product, customer, and funnel models in DuckDB/MotherDuck. Warehouse checks catch inconsistent records before they reach reporting.`,
	},
	{
		id: "btm-bess-market-optimizer",
		title: "Swedish Industrial Battery Dispatch & Market Optimizer",
		period: { start: "Jul 2026", end: "Oct 2026" },
		tags: ["Energy", "Analytics"],
		skills: ["Python", "Battery Dispatch", "Scenario Analysis", "Streamlit"],
		link: "https://github.com/KayvanShah1/btm-bess-market-optimizer",
		summary:
			"An hourly dispatch model for a Swedish factory deciding how to share one battery between peak savings and reserve markets.",
		description: `A factory can use its battery to reduce its own peak demand or reserve capacity for the grid. Both uses draw on the same state of charge. I modeled a representative day for a **1 MW / 2 MWh** battery alongside factory load and solar generation.

- The scheduler allocates energy for the site, then tests how much capacity remains for FCR-N and mFRR commitments. The dashboard shows the hourly schedule and which operating constraint limits each decision.
- Compared reserve prices and activation scenarios. Adding mFRR paid off under low activation. More frequent calls used energy the factory needed later, making FCR-N alone more valuable in the base and high-activation cases.

[Explore the dispatch dashboard](https://btm-bess-market-optimizer.onrender.com/)`,
	},
	{
		id: "climate-transition-risk",
		title: "Climate Transition Risk Assessment",
		period: { start: "Apr 2026", end: "Apr 2026" },
		tags: ["AI", "Finance", "Research"],
		skills: ["LlamaIndex", "AlloyDB", "Document AI", "vLLM", "System Design"],
		summary:
			"A system design for letting a portfolio reviewer trace a climate-risk rating back to the policy or market evidence behind it.",
		description: `I designed a workflow for two exposures that need different evidence: a change in carbon pricing and a shift in demand. A reviewer needs to see which passage supports an indicator and how that indicator affected the rating.

- The design combines exact policy-term matches, semantic retrieval, metadata filters, and reranking before an agent extracts structured indicators from the selected passages.
- Deterministic scoring rules turn those indicators into a rating. The design retains the passages, extracted values, and scoring history so a reviewer can revisit a decision when a policy changes.`,
	},
	{
		id: "electric-mobility-intelligence",
		title: "Electric Mobility Intelligence Platform",
		tags: ["Data Engineering", "Analytics", "Energy"],
		skills: ["PySpark", "H3", "dbt", "Databricks", "Delta Lake", "Tableau"],
		summary:
			"A Databricks lakehouse for investigating where a fleet drives, where it charges, and how efficiently it uses energy.",
		description: `A trip, a charging session, and a telemetry reading describe the same fleet at different levels of detail. I modeled them separately so joining a long stream of readings to a trip would not inflate a trip count or charging total.

- Used PySpark and dbt to build incremental fact and dimension tables in Delta Lake. Partitioning and Z-Ordering support repeated queries over trips and charging activity.
- Assigned H3 cells to trip coordinates so analysts could compare areas without querying individual GPS points. Tableau dashboards use the curated models for fleet efficiency, charger utilization, and trip behavior.`,
	},
	{
		id: "bfsi-reputation-intelligence",
		title: "BFSI Reputation Intelligence",
		period: { start: "Jun 2026", end: "Jun 2026" },
		tags: ["NLP", "Analytics", "Finance"],
		skills: ["Python", "Pydantic", "Parquet", "Streamlit"],
		link: "https://github.com/KayvanShah1/bfsi-reputation-intelligence",
		summary:
			"A dashboard that takes a change in a financial brand’s reputation back to the mentions that caused it.",
		description: `The same story can appear in several news feeds, while a review may mention a bank without saying anything about its service. I built a pipeline to resolve both cases before calculating sentiment or counting reputation drivers.

- Normalized source records, removed duplicates, and filtered for relevance. Clear cases follow explicit classification rules, with an optional language-model step for ambiguous mentions.
- Each retained record carries its driver, sentiment, and audit fields into Parquet. In Streamlit a reviewer can start with a chart, narrow it by source or theme, and read the evidence behind the count.`,
	},
	{
		id: "coretrail",
		title: "CoreTrail",
		period: { start: "Oct 2026", end: "Nov 2026" },
		tags: ["Education", "Frontend"],
		skills: ["Jekyll", "Markdown", "GitHub Pages"],
		link: "https://kayvanshah1.github.io/coretrail/",
		summary: "My interview revision handbook for the questions I kept coming back to.",
		description: `After a few interviews, the explanation I wanted was usually somewhere in a long chat or a pile of Markdown notes. I built CoreTrail to give those explanations a place I could find again.

- Organized lessons by subject across SQL, data engineering, machine learning, AI, and software engineering. I keep the question with the explanation so I can revisit the reasoning before the next interview.
- Built the handbook in Jekyll and publish it to GitHub Pages. The same lessons work on a phone for a quick review and on a desktop for a longer session.`,
	},
	{
		id: "neuromorph-tree",
		title: "Neuromorph Tree",
		period: { start: "Mar 2026", end: "Nov 2026" },
		tags: ["Generative Art", "Frontend"],
		skills: ["TypeScript", "Canvas 2D", "React"],
		link: "https://github.com/KayvanShah1/luminous-grove",
		summary: "The branching circuit tree on this site, packaged as a reusable Canvas 2D renderer.",
		description: `I wanted the tree to grow differently each time and respond when someone touched it. I built the branching, movement, and signal animation into a rendering engine that can run independently of the portfolio.

- Procedural growth determines where new branches emerge. Pulses travel along connected paths, and pointer input sends movement through the existing structure.
- Published the TypeScript package so this React site and the standalone demo use the same engine. The portfolio initializes it when the hero mounts and releases it when the component unmounts.

[Interact with the tree](https://kayvanshah1.github.io/luminous-grove/)`,
	},
	{
		id: "mediflow",
		title: "MediFlow: Healthcare Data Integration & Analytics",
		period: { start: "Sep 2025", end: "Sep 2025" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["Airflow", "dbt", "Snowflake", "Python"],
		link: "https://github.com/KayvanShah1/mediflow",
		summary: "A Medicare data warehouse for comparing provider activity, cost of care, and readmission patterns.",
		description: `I used public CMS data to work through how claims and provider records become reporting tables. A single claim is useful for spending analysis, while comparing providers or admissions needs a different unit of analysis.

- Airflow runs separate ingestion jobs for claims and providers and coordinates them through a master DAG. Snowflake stores the staged data.
- dbt builds claim and admission facts, patient and provider dimensions, and separate marts for cost of care, utilization, and readmissions. Schema and SQL tests check the modeled tables before analysis.`,
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
		summary: "A task manager that accepts a plain-language request and applies it to a user’s task list.",
		description: `I built Taskaza so a request such as “remind me to follow up with the supplier” can become a task from the same interface used to edit, complete, or find existing work.

- The conversational AskBar uses FastMCP and OpenRouter to call task operations exposed by a FastAPI backend. Related-task lookup helps resolve which task a request refers to.
- Implemented per-user API keys, JWT authentication, and a PostgreSQL data layer. The REST endpoints can also be exercised directly through the [API documentation](https://taskaza.onrender.com/docs).`,
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
		summary:
			"My portfolio brings together engineering work, research, and the interactive tree I built for its home page.",
		description: `I wanted a recruiter to be able to skim what I worked on and an engineer to be able to open the same entry and see how it worked.

- Built the site with React, TypeScript, and Tailwind. Project filters support topics in combination, and each project or role opens into its technical details and supporting links.
- The home page uses the Canvas 2D engine from [Luminous Grove](https://github.com/KayvanShah1/luminous-grove). GitHub Actions checks and builds the site before publishing it to Pages.

[Portfolio source](https://github.com/KayvanShah1/KayvanShah1.github.io)`,
		logo: "https://kayvanshah1.github.io/dark-logo/favicon-32x32.png",
	},
	{
		id: "google-workspace-token-activity-audit-pipeline",
		title: "Google Workspace Security Audit Pipeline",
		period: { start: "May 2025", end: "Dec 2025" },
		tags: ["Data Engineering", "Cloud", "Analytics", "Security"],
		skills: ["Python", "Polars", "Dagster", "dbt", "DuckDB", "MotherDuck"],
		link: "https://github.com/KayvanShah1/gws-audit-analytics-pipeline",
		summary:
			"A five-feed audit warehouse for investigating sign-ins, token use, administrative changes, and Drive activity.",
		description: `The Google Workspace Reports API can return an event after its time window has already been collected. I built the fetcher to revisit recent windows without counting an event twice.

- Each feed maintains its own cursor. Parallel workers reread overlapping windows for token, login, SAML, admin, and Drive activity, while snapshots record exactly what each run fetched.
- Polars normalizes the events and expands token scopes. Dagster loads the processed records into DuckDB/MotherDuck and triggers incremental dbt models for investigative queries.
- The pipeline handled **over a million events across five feeds**. Per-run state and snapshots make it possible to trace a missing event back through collection, processing, and loading.`,
	},
	{
		id: "drive-access-analysis",
		title: "Google Drive Access Analyzer",
		period: { start: "Jun 2025", end: "Jun 2025" },
		tags: ["Security", "Research"],
		skills: ["Access Control", "Data Modeling", "Google Drive"],
		link: "https://github.com/KayvanShah1/gdrive-access-analyzer",
		summary:
			"A design study of how a person can gain access to a Google Drive file through more than one sharing path.",
		description: `Checking the names on a file can miss the permission that matters. A user might inherit access from a folder, belong to a group, or have access through a shared drive or public link.

- Mapped files, folders, shared drives, principals, and roles. Worked through direct grants and inherited permissions, including how shared-drive ownership changes the analysis.
- Documented access scenarios and threat models so a reviewer can explain which grant makes a file accessible and where to investigate an unexpected result.`,
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
		summary:
			"Replay a simulated equipment sensor stream after readings arrive late, go missing, or fall outside the expected range.",
		description: `I modeled an industrial temperature feed where interruptions leave gaps in an aggregate. I wanted to rebuild the affected interval from an event log without having to restart the entire stream.

- Persisted timestamped readings in JSONL and used a heap to restore chronological order during replay. Tracking reprocessed events prevents a second replay from counting the same observation twice.
- Injected missing and out-of-range readings to exercise recovery. The simulator can generate synthetic values for gaps, so reconstructed data can be evaluated separately from the original observations.`,
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
		summary: "A reproducible fraud-detection pipeline evaluated on Capital One transaction data.",
		description: `Repeated card swipes and reversed charges can resemble fraud in a raw transaction file. I worked through those cases before comparing classifiers so the model would learn from cleaner examples.

- Normalized transaction features and used bootstrapped undersampling to address class imbalance. Compared random forests, gradient boosting, and XGBoost with MLflow. Gradient boosting reached **0.91 F-beta** in the project evaluation.
- Versioned data and pipeline stages with DVC, packaged the workflow in Docker, and exposed inference through FastAPI. A change to preprocessing or training can be traced to the resulting model.`,
		// "description": "Designed a real-time anomaly detection system to flag suspicious financial transactions, combining scalable data engineering with production-grade ML.\n\n* **Streaming Pipeline** - Built end-to-end ingestion and detection workflow (~1M+ tx/day) with deduplication, replay handling, and class balancing.\n* **Risk Scoring Service** - Deployed FastAPI microservice delivering explainable predictions (85% recall) using statistical features + ML models (XGBoost, logistic regression).\n* **MLOps + Reliability** - Tracked experiments in MLflow, versioned data/models with DVC, packaged in Docker, and deployed via AWS Lambda for reproducibility and scalability.\n* **Monitoring & Dashboards** - Integrated alerts and dashboards to reduce manual fraud reviews by 30%."
	},
	{
		id: "productivity-caffeine-sleep",
		description: `Our research methods team asked whether the daily habits students associate with a productive day actually show up together in survey responses.

- We designed the survey around caffeine consumption, physical activity, sleep quality, and perceived productivity, then analyzed the responses and visualized how those measures varied together.
- Because participants reported their own habits, we interpreted the results as associations. The repository includes the study design, analysis, and reports from each phase.`,
		title: "Study on Effects of Lifestyle Habits on Productivity",
		link: "https://github.com/KayvanShah1/usc-dsci517-rmaus-fall24",
		period: { start: "Sep 2024", end: "Dec 2024" },
		skills: ["Python", "Data Analysis", "Statistics"],
		tags: ["Research", "Analytics"],
		summary:
			"A USC survey study of how caffeine, physical activity, and sleep relate to self-reported productivity.",
	},
	{
		id: "onenet-1d-unet",
		title: "OneNet: A Channel-Wise 1D Convolutional U-Net",
		period: { start: "Sep 2024", end: "Nov 2024" },
		skills: ["Deep Learning", "PyTorch", "Computer Vision", "CNN"],
		tags: ["Deep Learning", "Research", "Computer Vision"],
		link: "https://github.com/shbyun080/OneNet",
		summary: "A smaller U-Net for segmentation, co-authored and presented at IEEE IPTA 2025.",
		description: `We investigated whether a U-Net could retain enough spatial detail to draw a segmentation mask while using fewer parameters. The main design decision was how to keep neighboring pixels connected when replacing 2D convolutions.

- Pixel unshuffle moves neighboring pixels into channels before a 1D convolution. Pixel shuffle restores the spatial layout as the decoder builds the mask.
- Compared variants against U-Net baselines on segmentation datasets. On the MSD Heart task, we retained comparable accuracy with **47% fewer parameters**. The trade-off depended on how much wider spatial context the task required.

[Read the paper](https://arxiv.org/abs/2411.09838) · [Watch the presentation](https://www.youtube.com/watch?v=ufhQdo-_Hh4)`,
	},
	{
		id: "steam-sales-analysis",
		description: `Steam supplies store details, while SteamSpy provides audience estimates. We brought the two sources together so someone comparing games could work from one dataset and distinguish a market estimate from a reported sale.

- Built a Python ETL package to retrieve game records, validate and transform them, and load the results into MySQL on Aiven. Prefect orchestrates the workflow.
- Published the package as **steamstore-etl** and built Tableau dashboards on the warehouse so the collection workflow and the analysis can be used separately.`,
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
		summary: "A reusable pipeline that joins Steam catalog data with SteamSpy estimates for game-market analysis.",
	},
	{
		id: "unifaq-llm-faq",
		description: `For a prospective MSCS student, a question about eligibility can have a different answer at every school. Our team investigated whether a model could turn one program’s requirements into relevant questions and answers.

- We compiled a list of 150 US universities and collected admissions text and existing FAQs with BeautifulSoup. The published FAQs provided a reference for evaluating generated questions.
- Compared T5, BART, Mistral, and Llama models, using parameter-efficient fine-tuning to fit larger models on limited hardware. We evaluated generated FAQs with ROUGE and reviewed their relevance to the source. Llama 2 and Llama 3 were the strongest models in our comparison.`,
		link: "https://github.com/KayvanShah1/UniFAQ",
		title: "UniFAQ: Fine-Tuned LLM based FAQ Generation for University Admissions",
		period: { start: "May 2024", end: "Jun 2024" },
		skills: ["NLP", "PyTorch", "LLM", "Python", "Web Scraping"],
		tags: ["AI", "NLP"],
		summary: "Generating graduate admissions FAQs from the requirements each university actually publishes.",
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
		description: `VirtuTA is an AI-powered **virtual teaching assistant** that enhances university learning by delivering context-aware, multimodal, and automated support for students and instructors. As part of Final project for *DSCI 560 - Data Science Professional Practicum* @ *USC*.
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
		description: `I built two predictors because agreement between past reviewers is informative for an established business, while a sparsely reviewed business has fewer shared ratings to work with.

- The item-based predictor computes Pearson similarity from common reviewers and combines ratings from the 15 closest neighbors. The second uses XGBoost with features from profiles, businesses, reviews, tips, and photos.
- Combined the predictions and evaluated them on held-out user–business pairs. The hybrid submission placed **ninth in the course competition**.`,
		link: "https://github.com/KayvanShah1/YelpR8-Business-Recommendations-System",
		title: "YelpR8: Business Recommendations System",
		period: { start: "May 2024", end: "May 2024" },
		skills: ["PySpark", "Data Mining", "Python", "Machine Learning"],
		tags: ["Data Engineering", "ML", "Analytics"],
		summary: "A hybrid recommender that predicts how a Yelp user would rate a business.",
	},
	{
		id: "quizgenie-ai-quiz",
		description: `Our team built QuizGenie for the point in a study session when a student has read the material and wants to see what they can recall. The source can be a textbook chapter or a paper they upload.

- Used LangChain and ChromaDB to retrieve relevant passages for Gemini. That keeps the generated questions tied to the student’s document and gives the model context for its explanations.
- The Streamlit app presents the quiz, accepts answers, and gives immediate feedback with the reasoning behind the correct choice.`,
		link: "https://github.com/KayvanShah1/QuizGenie",
		title: "QuizGenie: AI-powered and RAG-based quiz generation tool",
		period: { start: "Mar 2024", end: "Apr 2024" },
		skills: ["GCP", "NLP", "Python", "LLM", "Data Engineering", "MLOps"],
		tags: ["AI", "NLP", "Data Engineering"],
		summary: "Practice quizzes and answer explanations generated from the PDF a student is studying.",
	},
	{
		id: "hmm-pos-tagging",
		title: "Part-of-Speech Tagging with Hidden Markov Models",
		period: { start: "Nov 2023", end: "Dec 2023" },
		tags: ["NLP", "Research"],
		skills: ["Python", "Hidden Markov Models", "Viterbi Decoding"],
		link: "https://github.com/KayvanShah1/pos-tagging-hmm-adversarial-learning",
		summary: "An experiment comparing how two decoders assign part-of-speech tags to the same sentence.",
		description: `For a USC optimization course, I trained a hidden Markov model on Wall Street Journal text. The comparison was between picking the most likely tag one word at a time and finding the most likely tag sequence for the whole sentence.

- Implemented both greedy and Viterbi decoding so they could share the same transition and emission estimates.
- Evaluated tag accuracy on held-out text and compared the standard model with an adversarially trained variant. Keeping the dataset and decoder explicit made the experiments reproducible.`,
	},
	{
		id: "static-analysis-llm",
		description: `Our team tested Code Llama 7B on Python and C++ examples from XLCoST. A useful comparison depended on extracting the generated function cleanly, since a repeated prompt or duplicate function could produce a misleading diagnostic.

- Ran Flake8 and Cppcheck on generated code and supplied the diagnostics to the model for another attempt. We tracked which errors persisted or disappeared after feedback.
- Built preference pairs from accepted and rejected outputs to test direct preference optimization alongside inference-time feedback. The evaluation counted observed static errors for each language and approach.`,
		title: "Not Too Bad Code Generation: Static Analysis for Code LLMs",
		link: "https://github.com/KayvanShah1/static_analysis_codegen_llms",
		period: { start: "Sep 2023", end: "Nov 2023" },
		tags: ["AI", "Research", "NLP", "Analytics"],
		skills: ["NLP", "PyTorch", "Python", "LLM", "Data Analysis", "Machine Learning"],
		summary:
			"A USC experiment on whether compiler and linter feedback can improve the code a language model generates.",
	},
	{
		id: "personalized-email-gen",
		description: `I built a small app where someone could describe the email they needed and get a draft back in the browser. It also gave me a way to take a model API integration through testing and deployment.

- The React form sends the request through API Gateway to a FastAPI service on Lambda. The backend handles the OpenAI request and returns the draft to the interface. Amplify hosts the frontend.
- Used Terraform and GitHub Actions for infrastructure, tests, linting, container publishing, and deployment so changes followed the same release process.`,
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
		summary: "A prompt-based email drafting app with a React interface and a serverless Python backend.",
	},
	{
		id: "landmark-classification",
		description: `I used a shared EfficientNetB0 backbone and two output branches. That gave me separate measures of whether the model could recognize the type of scene and whether it could identify the individual landmark.

- Started from pretrained weights and augmented the training images to account for a limited labeled set.
- On unseen images, the category branch reached **94.99% F1** and the landmark branch reached **81.50% F1**. Keeping both scores visible shows where the finer identification task was harder.`,
		title: "Landmark & Category Classification using Transfer Learning",
		period: { start: "Apr 2023", end: "May 2023" },
		skills: ["TensorFlow", "Python", "CNN", "Computer Vision", "Deep Learning"],
		tags: ["Deep Learning", "Computer Vision"],
		summary: "One image model predicts both the landmark in a photo and the broader category it belongs to.",
	},
	{
		id: "firebase-emulator",
		title: "Firebase Realtime Database Emulator",
		period: { start: "Feb 2023", end: "Apr 2023" },
		skills: ["Web Development", "Data Warehousing", "Docker", "Python", "GitHub Actions", "FastAPI", "MongoDB"],
		tags: ["Backend"],
		link: "https://github.com/KayvanShah1/firebase-realtime-db-emulator",
		summary: "A local implementation of Firebase Realtime Database’s REST interface backed by MongoDB.",
		description: `I built the emulator so an application could exercise Firebase-style reads and writes locally. The interesting part was preserving the meaning of a nested path when the underlying database stores documents.

- Mapped root paths to collections and used nested updates and upserts for child paths. Implemented reads, writes, updates, and deletes through FastAPI and the asynchronous Motor client.
- Added ordering by key, value, or child, along with range, equality, and limit filters. Docker Compose, API documentation, and endpoint checks let another developer run and inspect the same behavior.`,
	},
	{
		id: "carbon-market-trading",
		title: "Carbon Market Trading & Analytics Pipeline (Climate Connect Digital)",
		period: { start: "Nov 2022", end: "Dec 2022" },
		tags: ["Data Engineering", "Cloud", "Finance", "Energy"],
		skills: ["Python", "Pub/Sub", "SNS/SQS", "AWS Lambda", "DynamoDB", "Terraform"],
		summary:
			"A cross-cloud trade-event pipeline for carbon futures pricing, audit, and replay at Climate Connect Digital.",
		description: `A price analyst needs the latest market state. Someone reconciling a trade needs the original message and the order in which updates arrived. I built the pipeline to keep both views available.

- Bridged GCP Pub/Sub to AWS SNS/SQS through Cloud Functions. Lambda decoded events, S3 retained the raw messages, and DynamoDB held operational state for fast lookups.
- Tracked event identities and instrument sequence numbers so retries would not count a trade twice and gaps could be investigated. Failed messages could be replayed from the archive.
- Combined CME carbon futures with commodity and market indicators to prepare features for the pricing workflow.`,
	},
	{
		id: "greenfield-datacenter",
		description: `I brought zoning, available land, and nearby power infrastructure into a common geographic view. A parcel could look promising on one layer and become impractical once the others were considered.

- Collected and organized location records across cities and assessed power infrastructure within a **100 km** study radius.
- Built choropleth maps to compare candidate areas and narrow the list for a closer feasibility review. The output was a shortlist for investigation, with the underlying geographic constraints visible.`,
		title: "Green-Field Data Center Site Feasibility Analysis",
		period: { start: "Jul 2021", end: "Aug 2021" },
		tags: ["Data Engineering", "Analytics"],
		skills: ["GeoPandas", "Folium", "Python", "Geospatial Analysis", "ETL"],
		summary: "Map-based screening of potential data-center sites across more than four cities.",
	},
	{
		id: "thomasnet-scraper",
		link: "https://github.com/KayvanShah1/thomasnet-scraper",
		description: `I built this for hardware sourcing, where a buyer might start with a term such as “hydraulic cylinder” and need a table of suppliers to compare.

- The scraper takes a product keyword and its Thomasnet category identifier. The category keeps similarly named products in different headings from being mixed together.
- Collected supplier results and exported cleaned CSVs by product. The command-line inputs let the same workflow run for another hardware category without editing the scraper.`,
		title: "Thomasnet Scraper",
		period: { start: "Jul 2021", end: "Jul 2021" },
		skills: ["Python", "Web Scraping", "ETL", "Data Engineering"],
		tags: ["Data Engineering"],
		summary: "A command-line tool that turns Thomasnet supplier searches into cleaned CSV files.",
	},
	{
		id: "commonlit-rating",
		description: `In the CommonLit challenge, the prediction target was the difficulty of a passage. I treated it as a regression problem so an estimate could be close to the reference score even when it was imperfect.

- Trained and ensembled RoBERTa models on labeled passages and evaluated the size of the prediction errors using root mean squared error.
- The submission reached **0.463 RMSE**, placing in the **top 24%** of the Kaggle leaderboard.`,
		title: "CommonLit: Rating Literary Passage Complexity",
		summary: "A readability model that estimates how difficult an English passage will be to read.",
		period: { start: "May 2021", end: "Jul 2021" },
		skills: ["Python", "TensorFlow", "RoBERTa", "Ensemble Learning", "NLP"],
		tags: ["Deep Learning", "NLP", "Analytics"],
	},
	{
		id: "social-media-comment-classification",
		link: "https://github.com/KayvanShah1/Jigsaw_multilingual_toxic_comment_classification",
		description: `I used the Jigsaw datasets to study how well a classifier trained on English comments transfers to Wikipedia discussion pages in other languages.

- Prepared Wikipedia and Civil Comments text for transformer models and compared multilingual representations, including BERT and XLM-RoBERTa. Training on Kaggle TPUs made it practical to run several configurations.
- Compared individual models and blended predictions across languages. The repository includes the results by model so readers can inspect the spread behind the chosen approach.`,
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
		summary: "Multilingual toxicity classification for discussion comments, trained from English-labeled examples.",
	},
	{
		id: "ml-billing-inventory",
		description: `For our final-year project, we wanted shoppers to see their total while shopping and retailers to get an inventory record from the same transaction. We built the cart prototype around a Raspberry Pi 3 and a camera.

- Used OpenCV to read product barcodes and look up items in the product database. A separate object-detection step checked items placed in the cart against the scanning workflow.
- Built a cart-facing billing interface and connected the checkout record to inventory and sales dashboards. That let the retailer review what sold and which items needed replenishing.`,
		title: "Machine Learning based Automated Product Billing and Inventory Management System",
		period: { start: "Aug 2020", end: "Apr 2021" },
		skills: ["SQL", "TensorFlow", "OpenCV", "Python", "CNN", "Computer Vision", "Machine Learning", "ETL"],
		tags: ["Computer Vision", "Deep Learning", "Full Stack", "IoT"],
		summary:
			"A camera-equipped shopping cart that builds the bill as items are scanned and updates the retailer’s inventory.",
	},
	{
		id: "wheelchair-vision-assist",
		link: "https://github.com/KayvanShah1/Eye-and-Face-Direction-Detection",
		description: `I wanted to see whether eye and facial movements could give a wheelchair user an alternative to a joystick. The challenge was deciding when a glance was a steering instruction. A model can recognize the direction of a person’s gaze correctly and still react to a movement they never intended as a command.

- Used OpenCV and MediaPipe Face Mesh to track the eyes and face. I kept the landmarks that carried directional information and used them to recognize a small set of navigation inputs.
- Calibrated movement thresholds to ignore small shifts and abrupt changes. This let me tune how readily the controls responded independently of the gaze classifier.
- Optimized the model for Raspberry Pi inference with ONNX and quantization. In validation across lighting conditions and head poses, gaze-direction accuracy reached **98.5%**. Model inference took about **9 ms**.

[Eye and face direction notebooks](https://github.com/KayvanShah1/Eye-and-Face-Direction-Detection) · [Eye image dataset](https://www.kaggle.com/kayvanshah/eye-dataset)`,
		title: "Wheelchair Mobility with Computer Vision Assistance",
		period: { start: "Oct 2019", end: "Mar 2020" },
		skills: ["Python", "OpenCV", "MediaPipe Face Mesh", "TensorFlow", "ONNX", "Raspberry Pi"],
		tags: ["Computer Vision", "Deep Learning", "IoT"],
		summary:
			"Hands-free wheelchair control using eye and facial movements, with gaze inference running on a Raspberry Pi.",
	},
	{
		id: "automated-irrigation",
		description: `I built this to see whether a small irrigation system could decide when to water from field conditions and still let someone inspect how much water it used.

- Connected moisture and temperature sensors to an Arduino Uno. A model used crop watering patterns and incoming readings to trigger flow control.
- Sent readings and water-volume data over Wi-Fi to a Tableau dashboard for remote monitoring. In the project evaluation, the automated setup improved water efficiency by **about 19%**.`,
		title: "Automated Irrigation System",
		period: { start: "Jun 2019", end: "Dec 2019" },
		skills: ["Python", "Machine Learning", "Arduino", "C/C++"],
		tags: ["IoT", "ML"],
		summary: "An Arduino irrigation prototype that adjusts watering from soil and temperature readings.",
	},
];
