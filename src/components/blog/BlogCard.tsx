import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import { Blog } from '../../types/blog';
import Card from '../ui/Card';

interface BlogCardProps {
  blog: Blog;
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
    >
      <Card hoverable className="h-full flex flex-col">
        <Link to={`/blog/${blog.id}`} className="block h-full">
          {blog.coverImage && (
            <div className="h-48 overflow-hidden">
              <img 
                src={blog.coverImage} 
                alt={blog.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
              />
            </div>
          )}
          <div className="p-6 flex-grow">
            <div className="flex items-center text-sm text-neutral-500 mb-2">
              <span>{formatDate(blog.date)}</span>
              <span className="mx-2">•</span>
              <span>{blog.readTime} min read</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-primary-800 mb-2 hover:text-accent-400 transition-colors">
              {blog.title}
            </h3>
            <p className="text-neutral-600 mb-4">
              {blog.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {blog.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </Card>
    </motion.div>
  );
};

export default BlogCard;