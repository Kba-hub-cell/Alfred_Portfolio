import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-heading font-bold text-primary-800">404</h1>
          <h2 className="text-2xl font-heading font-bold text-primary-700 mt-4 mb-6">
            Page Not Found
          </h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button size="lg">
              Return to Homepage
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;