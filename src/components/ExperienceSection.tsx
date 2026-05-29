import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiBriefcase, HiLocationMarker, HiCalendar, HiChartBar, HiCode, HiTable, HiDatabase, HiCloud, HiCog, HiServer } from 'react-icons/hi';
import { SiPython } from 'react-icons/si';

const experiences = [
  {
    title: 'AI/ML Engineer',
    company: 'HCA Healthcare',
    location: 'Indianapolis, IN',
    period: 'May 2024 - Present',
    bullets: [
      'Built clinical document classification models with Python, TensorFlow, PyTorch, and Scikit-learn to sort provider notes, intake forms, and operational records, improving AI-assisted review accuracy by 18%.',
      'Reduced manual documentation review effort by 32% by developing NLP pipelines with SpaCy, NLTK, BERT, GPT models, and Hugging Face Transformers to extract clinical terms, diagnosis patterns, and document intent.',
      'Created RAG workflows with LangChain, LlamaIndex, OpenAI API, FAISS, AWS S3, and FastAPI to help clinical and business teams search internal healthcare knowledge, cutting average information lookup time by 40%.',
      'Improved validated answer relevance by 27% through document chunking, text embeddings, metadata filters, prompt templates, and retrieval scoring for healthcare policy and knowledge content.',
      'Prepared model-ready datasets from 1M+ structured and unstructured healthcare records using Pandas, NumPy, SQL, Spark, and Kafka event inputs, improving data consistency for model training and batch scoring.',
      'Deployed real-time inference services using AWS SageMaker, FastAPI, REST APIs, Docker, Kubernetes, TensorFlow Serving, and CI/CD for ML workflows, enabling healthcare applications to receive sub-second prediction outputs.',
      'Implemented MLflow experiment tracking and model registry workflows to log parameters, metrics, artifacts, and deployment stages, improving traceability across model versions and release candidates.',
      'Added model monitoring checks with MLflow outputs, PyTest validation scripts, and performance logs to track drift, data quality, latency, and confidence-score changes before user impact.',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'AWS', 'MLflow'],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Aguar Talent Care | Client: Abu Dhabi National Oil Company',
    location: 'India',
    period: 'Jun 2020 - Oct 2022',
    bullets: [
      'Developed predictive maintenance models with Python, Scikit-learn, Pandas, and NumPy using asset service history and equipment trend data, helping operations teams identify likely failures earlier.',
      'Increased asset risk detection by 24% through Random Forest, XGBoost, classification, and regression models that scored equipment health, ranked maintenance priority, and flagged operational exceptions.',
      'Cleaned and prepared 750K+ structured operational records with SQL, Python, and Pandas, improving training-data quality for asset risk modeling and batch prediction workflows.',
      'Engineered time-series features from rolling averages, lag variables, sensor trends, and service intervals, improving maintenance risk prediction accuracy by 19%.',
      'Reduced validation rework by 22% by tuning models with GridSearchCV, cross-validation, precision, recall, and F1-score analysis during model review cycles.',
      'Created anomaly detection workflows with clustering, statistical thresholds, and Python validation logic to identify unusual equipment readings for faster engineering investigation.',
      'Exposed asset risk scores through Flask-based REST APIs, reducing manual Python script dependency by 30% for operations and analytics users.',
      'Automated recurring data preparation and batch model scoring with Python scripts, SQL queries, and scheduled workflows, cutting manual reporting effort by 28% for analytics teams.',
    ],
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Pandas', 'Flask', 'SQL'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const techIcons: { [key: string]: React.ElementType } = {
    'Python': SiPython,
    'TensorFlow': HiCode,
    'PyTorch': HiCode,
    'LangChain': HiCode,
    'AWS': HiCloud,
    'MLflow': HiCog,
    'Scikit-learn': HiCode,
    'XGBoost': HiChartBar,
    'Pandas': HiTable,
    'Flask': HiServer,
    'SQL': HiDatabase,
  };

  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-10" />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle mx-auto">
            Building data-driven solutions that deliver measurable results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-gold transform md:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ originY: 0 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 shadow-glow z-10"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.2 }}
              />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <motion.div
                  className="glass rounded-2xl p-6 md:p-8 card-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className={`mb-6 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="flex items-center gap-2 mb-2 flex-wrap justify-start md:justify-start">
                      <HiBriefcase className="text-primary text-xl" />
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-primary">
                        {exp.title}
                      </h3>
                    </div>
                    <p className="text-lg text-primary font-semibold mb-2">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <HiLocationMarker className="text-primary" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <HiCalendar className="text-primary" />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6 text-left">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        className="flex items-start gap-3 text-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.6 + bulletIndex * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm md:text-base">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => {
                      const Icon = techIcons[tech];
                      return (
                        <motion.span
                          key={techIndex}
                          className="tech-badge flex items-center gap-1.5"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {Icon && <Icon className="text-xs" />}
                          {tech}
                        </motion.span>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
