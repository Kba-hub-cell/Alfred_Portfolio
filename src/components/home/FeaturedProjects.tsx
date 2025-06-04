import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '../../data/projects';

const FeaturedProjects = () => {
  // Get only featured projects (limit to 3)
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <SectionHeading
            title="Featured Projects"
            subtitle="A selection of my most significant data science work"
            className="md:mb-0"
          />
          <Link to="/projects">
            <Button 
              variant="outline" 
              rightIcon={<ArrowRight size={16} />}
            >
              View All Projects
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card hoverable className="h-full flex flex-col">
                <Link to={`/projects/${project.id}`} className="block h-full">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.coverImage} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-primary-50 text-primary-600 text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-primary-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {project.summary}
                    </p>
                    <div className="text-accent-400 font-medium flex items-center mt-auto">
                      View Project <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;