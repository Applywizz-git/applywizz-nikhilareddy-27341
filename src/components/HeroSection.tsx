import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-gold-soft opacity-50" />
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-secondary/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Centered Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="flex flex-col items-center"
          >
            <motion.p
              className="text-primary font-medium mb-4 tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 }}
            >
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1 }}
            >
              <span className="text-primary">NIKHILA</span>
              {" "}
              <span className="text-gradient-gold">REDDY</span>
            </motion.h1>

            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 3.2 }}
            >
              <span className="px-6 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-semibold text-xl">
                AI/ML Engineer
              </span>
            </motion.div>

            <motion.p
              className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.3 }}
            >
              AI/ML Engineer with 4+ years of experience developing machine learning, deep learning, NLP, Generative AI, and MLOps solutions across healthcare and energy analytics environments. Skilled in building predictive models, clinical document classification workflows, RAG applications, model monitoring frameworks, and scalable inference APIs.
            </motion.p>

            {/* View Projects and Download Resume Buttons */}
            <motion.div
              className="mt-10 flex gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.5 }}
            >
              {/* View Projects Button */}
              <Link
                to="projects" // Section ID to scroll to
                smooth
                duration={500}
              >
                <button className="px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                  View Projects
                </button>
              </Link>

              {/* Download Resume Button */}
              <a href="/resume.pdf" download>
                <button className="px-8 py-4 bg-secondary text-white font-bold rounded-full hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-secondary/20">
                  Download Resume
                </button>
              </a>
            </motion.div>

            {/* Stats/Badges */}
            <motion.div
              className="flex gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">4+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">32%</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Effort Reduction</span>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-primary">10+</span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">Projects</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5 }}
        >
          <Link to="about" smooth duration={500} className="cursor-pointer">
            <motion.div
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <HiChevronDown className="text-2xl" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
