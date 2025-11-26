// Mock data for Data Engineering Portfolio

export const personalInfo = {
  name: 'Poorna Sai Dumpa',
  title: 'Data Engineer',
  email: 'poornasai1312@outlook.com',
  phone: '+1 507-403-8664',
  linkedin: 'linkedin.com/in/purnasai-pd',
  github: 'github.com/purnasai1312',
  website: 'poorna-de.com',
  location: 'Minneapolis, MN',
  summary: 'Results-driven Data Engineer with 5+ years of experience designing scalable, automated, and cost-efficient data platforms for AWS and Azure. Proven record of reducing data latency by 40%, cutting compute costs by 20%, and delivering ROI-focused analytics solutions for healthcare, fintech, and retail enterprises. Skilled in PySpark, Airflow, dbt, Terraform, and modern cloud data warehousing, with a strong focus on data reliability, automation, and business impact.',
  yearsOfExperience: 5,
  projectsCompleted: 15,
  cloudPlatforms: 2,
  domainsWorked: 4
};

export const achievements = [
  {
    id: 1,
    title: 'Data Latency Reduction',
    description: 'Reduced data latency by 40% through optimized pipeline architecture',
    icon: 'zap',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 2,
    title: 'Cost Optimization',
    description: 'Cut compute costs by 20% through query optimization and resource management',
    icon: 'target',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 3,
    title: 'Pipeline Reliability',
    description: 'Achieved 99.5% SLA reliability with automated failure recovery',
    icon: 'shield',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Real-Time Processing',
    description: 'Reduced fraud-alert latency from 15 minutes to under 90 seconds',
    icon: 'award',
    color: 'from-amber-500 to-orange-500'
  }
];

export const techStackTimeline = [
  {
    year: '2019-2020',
    cloud: 'AWS',
    company: 'Tesco',
    role: 'Data Analyst Intern',
    domain: 'Retail/E-commerce',
    mainTech: ['AWS Glue', 'Airflow', 'dbt', 'Tableau']
  },
  {
    year: '2020-2022',
    cloud: 'AWS',
    company: 'Razorpay',
    role: 'Data Engineer',
    domain: 'FinTech/Payments/Fraud',
    mainTech: ['AWS Glue', 'Kinesis', 'Lambda', 'Redshift', 'Terraform']
  },
  {
    year: '2023-2024',
    cloud: 'Azure',
    company: 'Fidelity Investments',
    role: 'Data Engineer',
    domain: 'FinTech/Investment & Trading',
    mainTech: ['Azure Synapse', 'ADF', 'Databricks', 'dbt', 'Event Hub']
  },
  {
    year: '2024-2025',
    cloud: 'Azure',
    company: 'Mayo Clinic',
    role: 'Data Engineer',
    domain: 'Healthcare/Clinical Analytics',
    mainTech: ['Azure Databricks', 'ADF', 'Synapse', 'dbt', 'Terraform']
  }
];

export const skills = {
  'Programming & Scripting': [
    { name: 'Python', proficiency: 95 },
    { name: 'SQL', proficiency: 95 },
    { name: 'PySpark', proficiency: 90 },
    { name: 'Shell', proficiency: 85 },
    { name: 'Scala', proficiency: 70 },
    { name: 'Java', proficiency: 70 }
  ],
  'Cloud Platforms': [
    { name: 'AWS', proficiency: 90 },
    { name: 'Azure', proficiency: 90 },
    { name: 'GCP', proficiency: 65 }
  ],
  'Data Engineering': [
    { name: 'Apache Airflow', proficiency: 90 },
    { name: 'dbt', proficiency: 90 },
    { name: 'AWS Glue', proficiency: 90 },
    { name: 'Azure Data Factory', proficiency: 90 },
    { name: 'AWS Step Functions', proficiency: 85 }
  ],
  'Data Warehousing': [
    { name: 'Amazon Redshift', proficiency: 90 },
    { name: 'Azure Synapse', proficiency: 90 },
    { name: 'Snowflake', proficiency: 85 },
    { name: 'BigQuery', proficiency: 65 },
    { name: 'Databricks SQL', proficiency: 85 }
  ],
  'Databases': [
    { name: 'Athena', proficiency: 85 },
    { name: 'Presto', proficiency: 80 },
    { name: 'Delta Lake', proficiency: 85 },
    { name: 'Apache Hudi', proficiency: 75 }
  ],
  'DevOps & IaC': [
    { name: 'Terraform', proficiency: 90 },
    { name: 'AWS CloudFormation', proficiency: 85 },
    { name: 'Docker', proficiency: 85 },
    { name: 'GitHub Actions', proficiency: 85 },
    { name: 'Jenkins', proficiency: 80 }
  ],
  'Data Visualization': [
    { name: 'Power BI', proficiency: 90 },
    { name: 'Tableau', proficiency: 85 },
    { name: 'QuickSight', proficiency: 80 },
    { name: 'Looker', proficiency: 70 }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'Healthcare Risk Adjustment & Clinical Analytics Platform',
    company: 'Mayo Clinic',
    duration: 'February 2024 – October 2025',
    domain: 'Healthcare/Clinical Analytics',
    cloud: 'Azure',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Engineered scalable ELT architecture on Azure (ADF + Databricks + Synapse) to integrate CMS/Medicare datasets with full HIPAA compliance, supporting near-real-time risk adjustment and cost-of-care analytics for 10M+ patient records.',
    achievements: [
      'Improved data latency by 35% and reduced compute cost by 18%',
      'Cut manual workflows by 50% and accelerated clinical reporting cycles',
      'Achieved 99% pipeline reliability across environments',
      'Enhanced care decision-making speed by 60% through self-serve analytics'
    ],
    techStack: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Synapse Analytics', 'dbt', 'Power BI', 'Terraform', 'Azure DevOps'],
    responsibilities: [
      'Engineered a scalable ELT architecture on Azure (ADF + Databricks + Synapse) with full HIPAA compliance',
      'Optimized Synapse queries through star/snowflake modeling, dynamic partitioning, and caching',
      'Automated transformations with dbt and orchestration through ADF pipelines',
      'Implemented Infrastructure-as-Code using Terraform + Azure DevOps',
      'Collaborated with data scientists, analysts, and clinicians to deliver Power BI dashboards',
      'Mentored 4 junior engineers on Databricks and dbt standards'
    ]
  },
  {
    id: 2,
    title: 'Investment Portfolio Performance & Market Risk Analytics Platform',
    company: 'Fidelity Investments',
    duration: 'Jan 2023 – June 2024',
    domain: 'FinTech/Investment & Trading',
    cloud: 'Azure',
    image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d',
    description: 'Engineered high-volume ETL pipelines in ADF + Databricks to process daily trade and market-feed data, reducing ingestion latency by 40% and ensuring real-time portfolio visibility.',
    achievements: [
      'Reduced ingestion latency by 40% for real-time portfolio visibility',
      'Cut data-processing errors by 30% while improving pipeline reliability',
      'Lowered compute cost by $25K annually delivering ~13% ROI improvement',
      'Enhanced decision communication for faster market response'
    ],
    techStack: ['Azure Synapse', 'Azure Data Factory', 'Databricks', 'PySpark', 'dbt', 'Event Hub', 'Power BI', 'Terraform'],
    responsibilities: [
      'Engineered high-volume ETL pipelines in ADF + Databricks to process daily trade and market-feed data',
      'Solved complex schema-drift and scaling challenges using PySpark and Event Hub streaming',
      'Optimized Synapse data models and dbt transformations',
      'Championed internal hackathons to enhance ADF pipeline observability and alerting',
      'Partnered with investment strategists and risk teams to translate portfolio KPIs into Power BI dashboards',
      'Presented project outcomes to senior engineering and investment leaders'
    ]
  },
  {
    id: 3,
    title: 'Real-Time Transaction Analytics & Fraud Detection Platform',
    company: 'Razorpay',
    duration: 'February 2020 – November 2022',
    domain: 'FinTech/Payments/Fraud',
    cloud: 'AWS',
    image: 'https://images.unsplash.com/photo-1667984390527-850f63192709',
    description: 'Built high-throughput event-driven pipelines on Kinesis + Lambda + Glue, processing 2B+ payment transactions daily and cutting fraud-alert latency from 15 minutes to under 90 seconds.',
    achievements: [
      'Cut fraud-alert latency from 15 minutes to under 90 seconds',
      'Achieved 99.5% SLA reliability with automated failure recovery',
      'Reduced ETL failures by 30% using CDC patterns and Great Expectations',
      'Saved ₹65L annually in compute costs through optimization'
    ],
    techStack: ['AWS Glue', 'AWS Step Functions', 'Kinesis', 'Lambda', 'Redshift', 'Athena', 'Terraform', 'S3', 'KMS', 'QuickSight'],
    responsibilities: [
      'Built high-throughput event-driven pipelines processing 2B+ payment transactions daily',
      'Orchestrated complex workflows via Step Functions + Glue Workflows',
      'Resolved schema drift and data-quality gaps using CDC patterns and Great Expectations',
      'Optimized Redshift (sort/dist keys) and Athena partitioning reducing query time by 25%',
      'Led a 6-member squad through agile sprints partnering with Data Science & Product',
      'Collaborated with product, risk, and compliance teams to enforce PCI-DSS policies'
    ]
  },
  {
    id: 4,
    title: 'Retail Sales Intelligence & Customer Analytics Platform',
    company: 'Tesco',
    duration: 'July 2019 - January 2020',
    domain: 'Retail/E-commerce',
    cloud: 'AWS',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3',
    description: 'Built ETL pipelines in AWS Glue + Airflow, improving sales data refresh by 30% and enabling automated KPI delivery.',
    achievements: [
      'Improved sales data refresh by 30% with automated KPI delivery',
      'Drove 15% improvement in forecasting accuracy with interactive dashboards',
      'Cut ad-hoc report requests by 40%',
      'Ensured 100% compliance with retail privacy standards'
    ],
    techStack: ['AWS Glue', 'Airflow', 'dbt', 'Tableau', 'Power BI', 'SQL', 'Python'],
    responsibilities: [
      'Built ETL pipelines in AWS Glue + Airflow improving sales data refresh',
      'Developed interactive Power BI/Tableau dashboards tracking revenue and retention KPIs',
      'Collaborated with product and business teams to translate reporting needs into data models',
      'Validated SKU-level data lineage and ensure compliance with retail privacy standards'
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: 'Mayo Clinic',
    role: 'Data Engineer (Azure)',
    duration: 'February 2024 – October 2025',
    location: 'Rochester, Minnesota',
    domain: 'Healthcare/Clinical & Risk Adjustment Analytics',
    cloud: 'Azure (ADF, Databricks, Synapse)',
    description: 'Engineered scalable ELT architecture on Azure to integrate CMS/Medicare datasets with HIPAA compliance, supporting risk adjustment and cost-of-care analytics for 10M+ patient records.'
  },
  {
    id: 2,
    company: 'Fidelity Investments',
    role: 'Data Engineer (Azure)',
    duration: 'Jan 2023 – June 2024',
    location: 'Cincinnati, Ohio',
    domain: 'FinTech/Investment & Trading Analytics',
    cloud: 'Azure (Synapse, ADF, Databricks)',
    description: 'Engineered high-volume ETL pipelines to process daily trade and market-feed data, reducing ingestion latency by 40% and ensuring real-time portfolio visibility.'
  },
  {
    id: 3,
    company: 'Razorpay',
    role: 'Data Engineer (AWS)',
    duration: 'February 2020 – November 2022',
    location: 'Hyderabad, India',
    domain: 'FinTech/Payments/Fraud Analytics',
    cloud: 'AWS (Glue, Kinesis, Lambda, Redshift)',
    description: 'Built high-throughput event-driven pipelines processing 2B+ payment transactions daily, cutting fraud-alert latency from 15 minutes to under 90 seconds.'
  },
  {
    id: 4,
    company: 'Tesco',
    role: 'Data Analyst Intern (AWS)',
    duration: 'July 2019 - January 2020',
    location: 'Hyderabad, India',
    domain: 'Retail/E-commerce',
    cloud: 'AWS (Glue, Airflow)',
    description: 'Built ETL pipelines improving sales data refresh by 30% and developed interactive dashboards driving 15% improvement in forecasting accuracy.'
  }
];

export const education = [
  {
    id: 1,
    degree: 'Master of Business Administration – Information Technology',
    institution: 'Tennessee Wesleyan University',
    location: 'Athens, Tennessee',
    duration: 'June 2024 - May 2025',
    status: 'Completed'
  },
  {
    id: 2,
    degree: 'Master of Science in Applied Statistics and Decision Analysis',
    institution: 'Western Illinois University',
    location: 'Macomb, Illinois',
    duration: 'Completed 2023',
    status: 'Completed'
  },
  {
    id: 3,
    degree: "Bachelor's of Technology – Computer Science & Engineering",
    institution: 'JNTU Kakinada',
    location: 'Guntur, India',
    duration: 'Completed 2020',
    status: 'Completed'
  }
];

export const certifications = [
  {
    id: 1,
    name: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    icon: 'azure'
  },
  {
    id: 2,
    name: 'AWS Certified: AWS Data Engineer Associate',
    issuer: 'Amazon Web Services',
    icon: 'aws'
  }
];

export const codeSnippets = [
  {
    id: 1,
    title: 'PySpark Data Pipeline',
    language: 'python',
    code: `from pyspark.sql import SparkSession
from pyspark.sql.functions import col, when, current_timestamp

# Initialize Spark Session
spark = SparkSession.builder \
    .appName("Healthcare Data Pipeline") \
    .config("spark.sql.adaptive.enabled", "true") \
    .getOrCreate()

# Read data from BigQuery
df = spark.read \
    .format("bigquery") \
    .option("table", "healthcare.cms_claims") \
    .load()

# Data Transformation
transformed_df = df \
    .filter(col("claim_status") == "APPROVED") \
    .withColumn("processed_at", current_timestamp()) \
    .withColumn("risk_score", 
        when(col("total_amount") > 10000, "HIGH")
        .when(col("total_amount") > 5000, "MEDIUM")
        .otherwise("LOW"))

# Write to Data Warehouse
transformed_df.write \
    .format("bigquery") \
    .option("table", "analytics.processed_claims") \
    .mode("append") \
    .save()`
  },
  {
    id: 2,
    title: 'DBT Data Modeling',
    language: 'sql',
    code: `-- models/analytics/fact_transactions.sql
{{ config(
    materialized='incremental',
    unique_key='transaction_id',
    partition_by={'field': 'transaction_date', 'data_type': 'date'},
    cluster_by=['customer_id', 'merchant_id']
) }}

WITH source_data AS (
    SELECT
        transaction_id,
        customer_id,
        merchant_id,
        transaction_amount,
        transaction_date,
        transaction_status,
        created_at
    FROM {{ source('raw', 'transactions') }}
    {% if is_incremental() %}
    WHERE created_at > (SELECT MAX(created_at) FROM {{ this }})
    {% endif %}
),

enriched_data AS (
    SELECT
        s.*,
        c.customer_segment,
        m.merchant_category,
        CASE
            WHEN s.transaction_amount > 1000 THEN 'HIGH'
            WHEN s.transaction_amount > 100 THEN 'MEDIUM'
            ELSE 'LOW'
        END AS transaction_tier
    FROM source_data s
    LEFT JOIN {{ ref('dim_customers') }} c ON s.customer_id = c.customer_id
    LEFT JOIN {{ ref('dim_merchants') }} m ON s.merchant_id = m.merchant_id
)

SELECT * FROM enriched_data`
  },
  {
    id: 3,
    title: 'Airflow DAG',
    language: 'python',
    code: `from airflow import DAG
from airflow.providers.google.cloud.operators.bigquery import BigQueryInsertJobOperator
from airflow.operators.python import PythonOperator
from datetime import datetime, timedelta

default_args = {
    'owner': 'data-engineering',
    'depends_on_past': False,
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
}

with DAG(
    'healthcare_analytics_pipeline',
    default_args=default_args,
    description='Daily healthcare analytics processing',
    schedule_interval='0 2 * * *',
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['healthcare', 'analytics'],
) as dag:

    extract_claims = BigQueryInsertJobOperator(
        task_id='extract_claims_data',
        configuration={
            "query": {
                "query": "{% include 'sql/extract_claims.sql' %}",
                "useLegacySql": False,
            }
        },
    )

    transform_data = PythonOperator(
        task_id='transform_claims',
        python_callable=transform_healthcare_data,
    )

    load_analytics = BigQueryInsertJobOperator(
        task_id='load_to_analytics',
        configuration={
            "query": {
                "query": "{% include 'sql/load_analytics.sql' %}",
                "useLegacySql": False,
            }
        },
    )

    extract_claims >> transform_data >> load_analytics`
  }
];