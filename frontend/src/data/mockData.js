// Mock data for Data Engineering Portfolio

export const personalInfo = {
  name: 'Poorna Sai Dumpa',
  title: 'Senior Data Engineer',
  email: 'poornasai1312@gmail.com',
  phone: '+1 309-315-1817',
  linkedin: 'linkedin.com/in/purnasai-pd',
  github: 'github.com/purnasai1312',
  website: 'poorna-de.com',
  location: 'United States',
  summary: 'Data Engineer with 5 years of progressive experience delivering end-to-end data pipelines and analytics across AWS, GCP, and Azure. Proven track record in decision-making, clear communication with technical and business stakeholders, and structured problem-solving for complex ETL/ELT, warehousing, and BI challenges.',
  yearsOfExperience: 5,
  projectsCompleted: 15,
  cloudPlatforms: 3,
  domainsWorked: 4
};

export const achievements = [
  {
    id: 1,
    title: 'Performance Optimization Expert',
    description: 'Enhanced query performance by 35% across large-scale healthcare datasets',
    icon: 'trophy',
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 2,
    title: 'Cost Efficiency Leader',
    description: 'Reduced manual data preparation efforts by 50% through automation',
    icon: 'target',
    color: 'from-emerald-500 to-green-500'
  },
  {
    id: 3,
    title: 'Production Reliability',
    description: 'Achieved 99.9% pipeline reliability processing multi-terabyte data',
    icon: 'shield',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Cross-Cloud Expertise',
    description: 'Successfully led migrations across AWS, GCP, and Azure platforms',
    icon: 'cloud',
    color: 'from-purple-500 to-pink-500'
  }
];

export const techStackTimeline = [
  {
    year: '2019-2020',
    cloud: 'AWS',
    company: 'Tesco',
    role: 'Data Analyst (Internship)',
    domain: 'Retail/E-commerce',
    mainTech: ['AWS Glue', 'Airflow', 'DBT', 'Snowflake']
  },
  {
    year: '2020-2022',
    cloud: 'GCP',
    company: 'Denken Software Solution (PNC Bank)',
    role: 'Data Engineer',
    domain: 'Banking/Payments/Fraud',
    mainTech: ['BigQuery', 'Dataflow', 'PySpark', 'DBT']
  },
  {
    year: '2023-2024',
    cloud: 'Azure',
    company: 'Rockwell Automations',
    role: 'Data Engineer',
    domain: 'Manufacturing/Industrial IoT',
    mainTech: ['Databricks', 'Azure Data Factory', 'Power BI']
  },
  {
    year: '2024-2025',
    cloud: 'GCP',
    company: 'Mayo Clinic',
    role: 'Data Engineer',
    domain: 'Healthcare (CMS/Medicare)',
    mainTech: ['BigQuery', 'PySpark', 'Airflow', 'DBT']
  }
];

export const skills = {
  'Programming & Scripting': [
    { name: 'Python', proficiency: 95 },
    { name: 'SQL', proficiency: 95 },
    { name: 'Java', proficiency: 75 },
    { name: 'Scala', proficiency: 70 },
    { name: 'Shell Scripting', proficiency: 85 }
  ],
  'Cloud Platforms': [
    { name: 'AWS', proficiency: 85 },
    { name: 'GCP', proficiency: 90 },
    { name: 'Azure', proficiency: 85 }
  ],
  'Data Engineering': [
    { name: 'PySpark', proficiency: 90 },
    { name: 'Airflow', proficiency: 90 },
    { name: 'DBT', proficiency: 90 },
    { name: 'Databricks', proficiency: 85 },
    { name: 'Kafka', proficiency: 75 }
  ],
  'Data Warehousing': [
    { name: 'BigQuery', proficiency: 95 },
    { name: 'Snowflake', proficiency: 90 },
    { name: 'Azure Synapse', proficiency: 80 }
  ],
  'Databases': [
    { name: 'PostgreSQL', proficiency: 85 },
    { name: 'MySQL', proficiency: 85 },
    { name: 'MongoDB', proficiency: 75 },
    { name: 'SQL Server', proficiency: 80 }
  ],
  'DevOps & IaC': [
    { name: 'Terraform', proficiency: 85 },
    { name: 'GitHub Actions', proficiency: 85 },
    { name: 'Azure DevOps', proficiency: 80 },
    { name: 'Jenkins', proficiency: 75 }
  ],
  'Data Visualization': [
    { name: 'Power BI', proficiency: 90 },
    { name: 'Tableau', proficiency: 85 },
    { name: 'Looker', proficiency: 85 }
  ]
};

export const projects = [
  {
    id: 1,
    title: 'Healthcare Risk Adjustment & Clinical Analytics Platform',
    company: 'Mayo Clinic',
    duration: 'February 2024 – Oct 2025',
    domain: 'Healthcare (CMS/Medicare)',
    cloud: 'GCP',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    description: 'Engineered high-performance, cloud-native data pipelines using BigQuery and PySpark, processing CMS and Medicare datasets while ensuring HIPAA compliance.',
    achievements: [
      'Reduced manual data preparation efforts by 50%',
      'Enhanced query performance by 35% across large-scale healthcare datasets',
      'Processed multi-terabyte data pipelines with 99.9% reliability'
    ],
    techStack: ['BigQuery', 'PySpark', 'Python', 'Airflow', 'DBT', 'Power BI', 'Tableau', 'Looker', 'Snowflake', 'Azure Synapse', 'GitHub Actions', 'Terraform'],
    responsibilities: [
      'Engineered high-performance, cloud-native data pipelines using BigQuery and PySpark',
      'Developed scalable ETL & ELT frameworks and automated workflows with Airflow, DBT, and Python',
      'Designed and deployed advanced Power BI dashboards integrating BigQuery and Synapse',
      'Led CI/CD implementation with GitHub Actions and Terraform',
      'Transformed legacy data warehouses into BigQuery with enhanced star/snowflake schemas'
    ]
  },
  {
    id: 2,
    title: 'Smart Manufacturing & Predictive Maintenance Analytics Platform',
    company: 'Rockwell Automations',
    duration: 'July 2023 – January 2024',
    domain: 'Manufacturing/Industrial IoT',
    cloud: 'Azure',
    image: 'https://images.unsplash.com/photo-1667984390538-3dea7a3fe33d',
    description: 'Architected comprehensive CI/CD pipelines and established batch and streaming ETL pipelines in Azure Databricks and Data Factory.',
    achievements: [
      'Improved reporting efficiency by 35%',
      'Improved production efficiency and asset utilization by 25%',
      'Implemented real-time operational insights and predictive maintenance analytics'
    ],
    techStack: ['Azure Databricks', 'Azure Data Factory', 'Power BI', 'GitHub Actions', 'Jenkins', 'Terraform', 'PySpark', 'Spark Structured Streaming', 'Azure Key Vault'],
    responsibilities: [
      'Architected comprehensive CI/CD pipelines using Azure DevOps, GitHub Actions, Terraform',
      'Established batch and streaming ETL pipelines in Azure Databricks and Data Factory',
      'Optimized star and snowflake schema models for Power BI dashboards',
      'Designed watermark/windowing strategy in Spark Structured Streaming for out-of-order events',
      'Executed secure data governance frameworks using Azure Key Vault and IAM controls'
    ]
  },
  {
    id: 3,
    title: 'Digital Payments & Fraud Detection Platform',
    company: 'Denken Software Solution (PNC Bank)',
    duration: 'February 2020 – November 2022',
    domain: 'Banking/Payments/Fraud',
    cloud: 'GCP',
    image: 'https://images.unsplash.com/photo-1667984390527-850f63192709',
    description: 'Led comprehensive ETL pipelines for financial transactions and claims datasets using PySpark, SQL, Hive, and Snowflake on GCP BigQuery.',
    achievements: [
      'Reduced processing time by 30% with incremental ingestion workflows',
      'Cut reconciliation effort by 50% with deterministic DBT models',
      'Reduced manual report cycles by 50% with automated dashboards'
    ],
    techStack: ['PySpark', 'SQL', 'Hive', 'Snowflake', 'GCP BigQuery', 'Dataflow', 'DBT', 'Python', 'Power BI', 'Spark SQL'],
    responsibilities: [
      'Led comprehensive ETL pipelines for financial transactions and claims datasets',
      'Architected incremental ingestion workflows with Change Data Capture (CDC)',
      'Partnered with finance SMEs to translate ambiguous rules into deterministic DBT models',
      'Applied modular Python frameworks for claims adjudication and transaction normalization',
      'Delivered interactive dashboards in Power BI with automated reconciliation'
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
    description: 'Achieved Engineering ETL pipelines using AWS Glue, Airflow, and DBT, enhancing data reliability and enabling automated reporting.',
    achievements: [
      'Boosted strategic insights by 30% with interactive dashboards',
      'Reduced query runtime by 25% with optimized SQL transformations',
      'Achieved 99%+ uptime for production data systems'
    ],
    techStack: ['AWS Glue', 'Airflow', 'DBT', 'Snowflake', 'SQL', 'Python', 'Power BI', 'Tableau', 'Jenkins', 'GitHub'],
    responsibilities: [
      'Achieved Engineering ETL pipelines using AWS Glue, Airflow, and DBT',
      'Crafted interactive Power BI and Tableau dashboards for KPI tracking',
      'Executed complex SQL and Python transformations on structured and unstructured datasets',
      'Cooperated with product managers to design dimensional data models',
      'Implemented CI/CD pipelines with Jenkins and GitHub'
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: 'Mayo Clinic',
    role: 'Data Engineer',
    duration: 'February 2024 – Oct 2025',
    location: 'United States',
    domain: 'Healthcare (CMS/Medicare)',
    cloud: 'GCP (BigQuery)',
    description: 'Leading healthcare analytics initiatives processing CMS and Medicare datasets with HIPAA compliance.'
  },
  {
    id: 2,
    company: 'Rockwell Automations',
    role: 'Data Engineer',
    duration: 'July 2023 – January 2024',
    location: 'United States',
    domain: 'Manufacturing/Industrial IoT',
    cloud: 'Azure (Databricks, ADF)',
    description: 'Architected CI/CD pipelines and streaming ETL for smart manufacturing and predictive maintenance.'
  },
  {
    id: 3,
    company: 'Denken Software Solution',
    role: 'Data Engineer',
    duration: 'February 2020 – November 2022',
    location: 'United States',
    client: 'PNC Bank',
    domain: 'Banking/Payments/Fraud',
    cloud: 'GCP (BigQuery, Dataflow)',
    description: 'Led ETL pipelines for financial transactions and fraud detection with CDC implementation.'
  },
  {
    id: 4,
    company: 'Tesco',
    role: 'Data Analyst (Internship)',
    duration: 'July 2019 - January 2020',
    location: 'United States',
    domain: 'Retail/E-commerce',
    cloud: 'AWS (Glue)',
    description: 'Built ETL pipelines and interactive dashboards for retail sales intelligence.'
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
    duration: 'December 2021 - December 2023',
    status: 'Completed'
  },
  {
    id: 3,
    degree: "Bachelor's of Technology – Computer Science & Engineering",
    institution: 'Jawaharlal Nehuru Technology University',
    location: 'Kakinada, India',
    duration: 'June 2016 - December 2020',
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