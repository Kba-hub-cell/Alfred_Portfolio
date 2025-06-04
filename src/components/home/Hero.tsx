import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center">
      <ParticleBackground />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block py-1 px-3 bg-accent-50 text-accent-400 rounded-full text-sm font-medium mb-6"
          >
            Data Scientist & Analyst
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-800 leading-tight mb-6"
          >
            Transforming Data into <span className="text-accent-300">Valuable Insights</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl"
          >
            I specialize in analyzing complex datasets and building machine learning models 
            to solve real-world problems and drive data-informed decisions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              rightIcon={<ArrowRight size={18} />}
              onClick={() => window.location.href = '/projects'}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Me
            </Button>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="animate-bounce"
        >
          <a 
            href="#highlights" 
            className="flex flex-col items-center text-neutral-500 hover:text-accent-300 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path 
                d="M12 5V19M12 19L19 12M12 19L5 12" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;