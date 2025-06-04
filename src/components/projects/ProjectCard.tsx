import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
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
              {project.tags.length > 3 && (
                <span className="px-2 py-1 bg-neutral-100 text-neutral-500 text-xs font-medium rounded">
                  +{project.tags.length - 3}
                </span>
              )}
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
  );
};

export default ProjectCard;