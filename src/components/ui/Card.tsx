import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card = ({ children, className = '', onClick, hoverable = false }: CardProps) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -5 } : {}}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverable ? 'cursor-pointer hover:shadow-lg transition-shadow duration-300' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card;