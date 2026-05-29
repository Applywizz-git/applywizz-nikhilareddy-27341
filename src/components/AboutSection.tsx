import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiChartBar, HiDatabase, HiLightningBolt, HiCode, HiCloud, HiCog, HiTrendingUp, HiUser } from 'react-icons/hi';

const highlights = [
  { icon: HiLightningBolt, label: 'Generative AI', description: 'LLMs & RAG' },
  { icon: HiDatabase, label: 'Machine Learning', description: 'Predictive Modeling' },
  { icon: HiCloud, label: 'Deep Learning', description: 'NLP & Computer Vision' },
  { icon: HiCog, label: 'MLOps', description: 'Deployment & Monitoring' },
  { icon: HiCode, label: 'Programming', description: 'Python & PyTorch' },
  { icon: HiChartBar, label: 'Data Engineering', description: 'Spark & SQL' },
];

const counters = [
  { value: 10, suffix: '+', label: 'Projects' },
  { value: 4, suffix: '+', label: 'Years Experience' },
  { value: 32, suffix: '%', label: 'Effort Reduction' },
];

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Deep Learning', level: 88 },
  { name: 'Generative AI & RAG', level: 85 },
  { name: 'MLOps', level: 85 },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <div ref={ref} className="counter-value font-bold text-2xl text-primary">
      {count}{suffix}
    </div>
  );
};

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-gold-soft opacity-20" />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle mx-auto">
            Delivering AI-driven solutions through Machine Learning and Generative AI
          </p>
        </motion.div>

        {/* About Content - Centered */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="space-y-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-foreground leading-relaxed text-xl md:text-2xl">
                AI/ML Engineer with 4+ years of experience developing <span className="text-primary font-semibold">machine learning, deep learning, NLP, and Generative AI solutions</span> across healthcare and energy analytics environments.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                I specialize in building predictive models, clinical document classification workflows, RAG applications, and model monitoring frameworks using <span className="font-medium text-foreground">Python, PyTorch, TensorFlow, and AWS</span>, reducing manual documentation review effort by up to <span className="text-primary font-semibold">32%</span>. I have a proven track record of deploying scalable inference APIs and implementing robust MLOps practices.
              </p>
            </motion.div>

            {/* Counters - Centered */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {counters.map((counter, index) => (
                <motion.div
                  key={counter.label}
                  className="p-8 glass rounded-3xl card-hover flex flex-col justify-center items-center border border-primary/10 shadow-lg"
                  whileHover={{ y: -10, borderColor: 'rgba(212, 175, 55, 0.4)' }}
                >
                  <Counter target={counter.value} suffix={counter.suffix} />
                  <p className="text-muted-foreground text-xs mt-3 font-bold uppercase tracking-widest">{counter.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Skill Bars */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Core Competencies</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.5, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8 text-center">Expertise Highlights</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                className="group p-6 glass rounded-xl text-center hover-glow cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-10 h-10 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
