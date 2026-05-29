import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  SiTableau,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSnowflake,
  SiDatabricks,
  SiJira,
  SiConfluence,
  SiGit,
} from 'react-icons/si';
import {
  HiChartBar,
  HiCode,
  HiDatabase,
  HiCloud,
  HiCog,
  HiLightningBolt,
  HiDocumentReport,
  HiTrendingUp,
  HiServer,
  HiCollection,
  HiShare,
  HiClipboardList,
  HiTable,
} from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Programming & AI Development',
    icon: HiCode,
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'SQL', icon: HiDatabase },
      { name: 'NumPy', icon: HiCode },
      { name: 'Pandas', icon: HiCode },
      { name: 'Scikit-learn', icon: HiCode },
      { name: 'TensorFlow', icon: HiCode },
      { name: 'PyTorch', icon: HiCode },
      { name: 'Keras', icon: HiCode },
      { name: 'OpenCV', icon: HiCode },
      { name: 'FastAPI', icon: HiCode },
      { name: 'Flask', icon: HiCode },
    ],
  },
  {
    title: 'Machine Learning & Predictive Modeling',
    icon: HiTrendingUp,
    skills: [
      { name: 'Regression', icon: HiTrendingUp },
      { name: 'Classification', icon: HiTrendingUp },
      { name: 'Clustering', icon: HiTrendingUp },
      { name: 'Random Forest', icon: HiTrendingUp },
      { name: 'XGBoost', icon: HiTrendingUp },
      { name: 'Feature Engineering', icon: HiTrendingUp },
      { name: 'Model Evaluation', icon: HiTrendingUp },
      { name: 'Cross-Validation', icon: HiTrendingUp },
      { name: 'Hyperparameter Tuning', icon: HiTrendingUp },
      { name: 'Time-Series Modeling', icon: HiTrendingUp },
    ],
  },
  {
    title: 'Deep Learning & NLP',
    icon: HiLightningBolt,
    skills: [
      { name: 'CNN', icon: HiLightningBolt },
      { name: 'RNN', icon: HiLightningBolt },
      { name: 'LSTM', icon: HiLightningBolt },
      { name: 'Transformers', icon: HiLightningBolt },
      { name: 'BERT', icon: HiLightningBolt },
      { name: 'GPT Models', icon: HiLightningBolt },
      { name: 'Hugging Face Transformers', icon: HiLightningBolt },
      { name: 'SpaCy', icon: HiLightningBolt },
      { name: 'NLTK', icon: HiLightningBolt },
      { name: 'Text Classification', icon: HiLightningBolt },
      { name: 'Named Entity Recognition', icon: HiLightningBolt },
    ],
  },
  {
    title: 'Generative AI & RAG',
    icon: HiCode,
    skills: [
      { name: 'OpenAI API', icon: HiCode },
      { name: 'LangChain', icon: HiCode },
      { name: 'LlamaIndex', icon: HiCode },
      { name: 'Prompt Engineering', icon: HiCode },
      { name: 'Retrieval-Augmented Generation', icon: HiCode },
      { name: 'LLM Evaluation', icon: HiCode },
      { name: 'Prompt Testing', icon: HiCode },
      { name: 'AI Response Validation', icon: HiCode },
    ],
  },
  {
    title: 'Vector Search & Embeddings',
    icon: HiDatabase,
    skills: [
      { name: 'FAISS', icon: HiDatabase },
      { name: 'ChromaDB', icon: HiDatabase },
      { name: 'Text Embeddings', icon: HiDatabase },
      { name: 'Vector Databases', icon: HiDatabase },
      { name: 'Semantic Search', icon: HiDatabase },
      { name: 'Similarity Search', icon: HiDatabase },
      { name: 'Document Chunking', icon: HiDatabase },
      { name: 'Retrieval Optimization', icon: HiDatabase },
    ],
  },
  {
    title: 'MLOps & Model Deployment',
    icon: HiCog,
    skills: [
      { name: 'AWS SageMaker', icon: HiCog },
      { name: 'MLflow', icon: HiCog },
      { name: 'Experiment Tracking', icon: HiCog },
      { name: 'Model Registry', icon: HiCog },
      { name: 'Model Monitoring', icon: HiCog },
      { name: 'Drift Detection', icon: HiCog },
      { name: 'Model Versioning', icon: HiCog },
      { name: 'TensorFlow Serving', icon: HiCog },
      { name: 'Docker', icon: HiCog },
      { name: 'Kubernetes', icon: HiCog },
      { name: 'CI/CD for ML', icon: HiCog },
    ],
  },
  {
    title: 'Cloud & Data Platforms',
    icon: HiCloud,
    skills: [
      { name: 'AWS S3', icon: HiCloud },
      { name: 'AWS Lambda', icon: HiCloud },
      { name: 'AWS Glue', icon: HiCloud },
      { name: 'AWS Step Functions', icon: HiCloud },
      { name: 'Apache Spark', icon: HiCloud },
      { name: 'Apache Kafka', icon: HiCloud },
    ],
  },
  {
    title: 'Databases, APIs & Reporting',
    icon: HiServer,
    skills: [
      { name: 'PostgreSQL', icon: HiServer },
      { name: 'REST APIs', icon: HiServer },
      { name: 'Microservices', icon: HiServer },
      { name: 'Power BI', icon: HiChartBar },
      { name: 'Model Performance Dashboards', icon: HiChartBar },
    ],
  },
  {
    title: 'Collaboration & AI Governance',
    icon: HiShare,
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'JIRA', icon: SiJira },
      { name: 'Agile', icon: HiShare },
      { name: 'Scrum', icon: HiShare },
      { name: 'PyTest', icon: HiShare },
      { name: 'Unit Testing', icon: HiShare },
      { name: 'Explainable AI', icon: HiShare },
      { name: 'Bias Monitoring', icon: HiShare },
      { name: 'Responsible AI', icon: HiShare },
    ],
  },
];

const topSkills = [
  { name: 'Python', level: 95 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Deep Learning', level: 88 },
  { name: 'Generative AI & RAG', level: 85 },
  { name: 'MLOps', level: 85 },
];

const ProgressRing = ({ progress, size = 80, strokeWidth = 6 }: { progress: number; size?: number; strokeWidth?: number }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg className="progress-ring" width={size} height={size}>
      <circle
        className="stroke-muted"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <motion.circle
        className="stroke-primary progress-ring-circle"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        initial={{ strokeDashoffset: circumference }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          strokeDasharray: `${circumference} ${circumference}`,
        }}
      />
    </svg>
  );
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle mx-auto">
            Comprehensive expertise across the modern data stack
          </p>
        </motion.div>

        {/* Top Skills with Progress Rings */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {topSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <div className="relative">
                <ProgressRing progress={skill.level} />
                <span className="absolute inset-0 flex items-center justify-center font-bold text-lg text-primary">
                  {skill.level}%
                </span>
              </div>
              <span className="mt-3 font-medium text-foreground">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="glass rounded-2xl p-6 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-primary">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-muted/50 hover:bg-primary/10 transition-all cursor-default group/skill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover/skill:rotate-12 transition-transform" />
                    <span className="text-sm text-foreground">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
