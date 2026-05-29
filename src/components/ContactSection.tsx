import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { HiMail, HiUser, HiChat, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaLandmark, FaLocationArrow, FaSearchLocation } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { toast } from 'sonner';

const socialLinks = [
  { icon: FaEnvelope, label: 'nikhilagaddam3536@gmail.com', href: 'mailto:nikhilagaddam3536@gmail.com' },
  { icon: FaPhone, label: '+1 (913) 995-9444' },
  { icon: FaSearchLocation, label: 'Overland Park, KS' },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5D98A', '#8C7A5B'],
    });

    toast.success('Message sent successfully!', {
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form after delay
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background: 'radial-gradient(circle at 20% 80%, hsl(43 67% 52% / 0.1) 0%, transparent 50%)',
        }}
      />

      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle mx-auto">
            Let's discuss how I can help with your data challenges
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 items-start max-w-5xl mx-auto">

          {/* Contact Info & Social */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Info Card */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-heading font-bold text-primary mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, opportunities, or partnerships.
                Whether you need help with data analytics, dashboard development, or business intelligence solutions,
                feel free to reach out!
              </p>

              {/* Social Links */}
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      if (social.label.startsWith('+1')) {
                        e.preventDefault();
                        navigator.clipboard.writeText(social.label);
                        toast.success('Phone number copied!');
                      }
                    }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <social.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
