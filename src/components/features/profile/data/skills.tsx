import { SiGooglepubsub, SiPolars, SiRender } from "@icons-pack/react-simple-icons"; // external pkg if needed
import { type ComponentType } from "react";
import { MdFunctions } from "react-icons/md"; // placeholder for Lambda/Cloud Functions
import {
	SiAmazonec2,
	SiAmazons3,
	SiAmazonwebservices,
	SiApacheairflow,
	SiApachekafka,
	SiApachespark,
	SiArgo,
	SiDjango,
	SiDocker,
	SiDuckdb,
	SiElasticsearch,
	SiFastapi,
	SiFlask,
	SiGithubactions,
	SiGooglebigquery,
	SiGooglecloud,
	SiGooglecloudcomposer,
	SiGooglecloudstorage,
	SiGrafana,
	SiHuggingface,
	SiJavascript,
	SiJupyter,
	SiKibana,
	SiKubernetes,
	SiLangchain,
	SiLogstash,
	SiMlflow,
	SiMysql,
	SiNextdotjs,
	SiNumpy,
	SiOpenapiinitiative,
	SiOpencv,
	SiPandas,
	SiPostgresql,
	SiPrefect,
	SiPytest,
	SiPython,
	SiPytorch,
	SiReact,
	SiScikitlearn,
	SiSnowflake,
	SiSqlalchemy,
	SiSqlite,
	SiTailwindcss,
	SiTensorflow,
	SiTerraform,
	SiTypescript,
	SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

export type Skill = {
	name: string;
	icon: ComponentType<{ className?: string }>;
	domain: string;
};

export const SKILLS: Skill[] = [
	// Languages & Libraries
	{ name: "Python", icon: SiPython, domain: "Languages & Libraries" },
	{ name: "TypeScript", icon: SiTypescript, domain: "Languages & Libraries" },
	{ name: "JavaScript", icon: SiJavascript, domain: "Languages & Libraries" },
	{ name: "Pandas", icon: SiPandas, domain: "Languages & Libraries" },
	{ name: "NumPy", icon: SiNumpy, domain: "Languages & Libraries" },
	{ name: "Polars", icon: SiPolars, domain: "Languages & Libraries" },
	{ name: "OpenCV", icon: SiOpencv, domain: "Languages & Libraries" },
	{ name: "Jupyter", icon: SiJupyter, domain: "Languages & Libraries" },
	{ name: "SQL", icon: TbSql, domain: "Languages & Libraries" },

	// Databases & Warehouses
	{ name: "PostgreSQL", icon: SiPostgresql, domain: "Databases & Warehouses" },
	{ name: "MySQL", icon: SiMysql, domain: "Databases & Warehouses" },
	{ name: "SQLite", icon: SiSqlite, domain: "Databases & Warehouses" },
	{ name: "DuckDB", icon: SiDuckdb, domain: "Databases & Warehouses" },
	{ name: "BigQuery", icon: SiGooglebigquery, domain: "Databases & Warehouses" },
	{ name: "Snowflake", icon: SiSnowflake, domain: "Databases & Warehouses" },
	{ name: "Elasticsearch", icon: SiElasticsearch, domain: "Databases & Warehouses" },

	// Data Engineering & Orchestration
	{ name: "Airflow", icon: SiApacheairflow, domain: "Data Engineering & Orchestration" },
	{ name: "Argo Workflows", icon: SiArgo, domain: "Data Engineering & Orchestration" },
	{ name: "Kafka", icon: SiApachekafka, domain: "Data Engineering & Orchestration" },
	{ name: "PySpark", icon: SiApachespark, domain: "Data Engineering & Orchestration" },
	{ name: "Prefect", icon: SiPrefect, domain: "Data Engineering & Orchestration" },
	{ name: "MLflow", icon: SiMlflow, domain: "Data Engineering & Orchestration" },

	// Machine Learning & LLMs
	{ name: "scikit-learn", icon: SiScikitlearn, domain: "Machine Learning & LLMs" },
	{ name: "PyTorch", icon: SiPytorch, domain: "Machine Learning & LLMs" },
	{ name: "TensorFlow", icon: SiTensorflow, domain: "Machine Learning & LLMs" },
	{ name: "Hugging Face", icon: SiHuggingface, domain: "Machine Learning & LLMs" },
	{ name: "LangChain", icon: SiLangchain, domain: "Machine Learning & LLMs" },

	// Backend & APIs
	{ name: "FastAPI", icon: SiFastapi, domain: "Backend & APIs" },
	{ name: "Django REST Framework", icon: SiDjango, domain: "Backend & APIs" },
	{ name: "Flask", icon: SiFlask, domain: "Backend & APIs" },
	{ name: "OpenAPI / Redoc", icon: SiOpenapiinitiative, domain: "Backend & APIs" },
	{ name: "SQLAlchemy", icon: SiSqlalchemy, domain: "Backend & APIs" },
	{ name: "Pytest", icon: SiPytest, domain: "Backend & APIs" },

	// Cloud & Infrastructure
	{ name: "AWS S3", icon: SiAmazons3, domain: "Cloud & Infrastructure" },
	{ name: "AWS EC2", icon: SiAmazonec2, domain: "Cloud & Infrastructure" },
	{ name: "Google Cloud", icon: SiGooglecloud, domain: "Cloud & Infrastructure" },
	{ name: "Google Cloud Storage", icon: SiGooglecloudstorage, domain: "Cloud & Infrastructure" },
	{ name: "Amazon Web Services", icon: SiAmazonwebservices, domain: "Cloud & Infrastructure" },
	{ name: "Google Cloud Pub/Sub", icon: SiGooglepubsub, domain: "Cloud & Infrastructure" },
	{ name: "Google Cloud Composer", icon: SiGooglecloudcomposer, domain: "Cloud & Infrastructure" },
	{ name: "Cloud Functions / Lambda", icon: MdFunctions, domain: "Cloud & Infrastructure" },
	{ name: "Docker", icon: SiDocker, domain: "Cloud & Infrastructure" },
	{ name: "Kubernetes", icon: SiKubernetes, domain: "Cloud & Infrastructure" },
	{ name: "Terraform", icon: SiTerraform, domain: "Cloud & Infrastructure" },
	{ name: "Render", icon: SiRender, domain: "Cloud & Infrastructure" },
	{ name: "Vercel", icon: SiVercel, domain: "Cloud & Infrastructure" },

	// Frontend
	{ name: "React", icon: SiReact, domain: "Frontend" },
	{ name: "Next.js", icon: SiNextdotjs, domain: "Frontend" },
	{ name: "Tailwind CSS", icon: SiTailwindcss, domain: "Frontend" },

	// Observability & Ops
	{ name: "Grafana", icon: SiGrafana, domain: "Observability & Ops" },
	{ name: "Kibana", icon: SiKibana, domain: "Observability & Ops" },
	{ name: "Logstash", icon: SiLogstash, domain: "Observability & Ops" },
	{ name: "GitHub Actions", icon: SiGithubactions, domain: "Observability & Ops" },
];
