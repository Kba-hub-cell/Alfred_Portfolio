import { motion } from 'framer-motion';
import { Code2, PieChartIcon as ChartPieIcon, Database, BrainCircuit } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const features = [
  {
    icon: <Database size={32} />,
    title: "Data Analysis",
    description: "Extracting insights from complex datasets using statistical methods and exploratory analysis techniques."
  },
  {
    icon: <ChartPieIcon size={32} />,
    title: "Data Visualization",
    description: "Creating compelling visualizations that communicate data stories and facilitate decision-making."
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "Machine Learning",
    description: "Building predictive models and algorithms to solve complex problems and provide actionable insights."
  },
  {
    icon: <Code2 size={32} />,
    title: "Data Engineering",
    description: "Developing robust data pipelines and infrastructure to support analytics and machine learning workflows."
  }
];

const FeatureCard = ({ icon, title, description, index }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div className="h-14 w-14 bg-accent-50 rounded-lg flex items-center justify-center text-accent-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-primary-800 mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </motion.div>
  );
};

const FeatureHighlights = () => {
  return (
    <section id="highlights" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Core Capabilities"
          subtitle="Leveraging data science techniques to transform raw data into actionable insights"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;