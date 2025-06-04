import { motion } from 'framer-motion';
import { Database, PieChartIcon as ChartPieIcon, Code2, BrainCircuit, ServerIcon, FileCheck } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';

interface SkillGroup {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number; // 0-100
    color?: string;
  }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Python", level: 95 },
      { name: "R", level: 90 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Java", level: 60 },
      { name: "Scala", level: 50 }
    ]
  },
  {
    title: "Data Science & Machine Learning",
    icon: <BrainCircuit size={24} />,
    skills: [
      { name: "Scikit-Learn", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Keras", level: 85 },
      { name: "XGBoost", level: 80 },
      { name: "NLP", level: 75 },
      { name: "Computer Vision", level: 70 }
    ]
  },
  {
    title: "Data Analysis & Manipulation",
    icon: <Database size={24} />,
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "SQL Queries", level: 90 },
      { name: "ETL Pipelines", level: 85 },
      { name: "Data Cleaning", level: 90 },
      { name: "Feature Engineering", level: 85 }
    ]
  },
  {
    title: "Data Visualization",
    icon: <ChartPieIcon size={24} />,
    skills: [
      { name: "Matplotlib", level: 90 },
      { name: "Seaborn", level: 85 },
      { name: "Plotly", level: 80 },
      { name: "Tableau", level: 85 },
      { name: "Power BI", level: 75 },
      { name: "D3.js", level: 60 }
    ]
  },
  {
    title: "Big Data Technologies",
    icon: <ServerIcon size={24} />,
    skills: [
      { name: "Apache Spark", level: 80 },
      { name: "Hadoop", level: 70 },
      { name: "Databricks", level: 75 },
      { name: "Kafka", level: 65 },
      { name: "MongoDB", level: 70 },
      { name: "Snowflake", level: 75 }
    ]
  },
  {
    title: "Professional Skills",
    icon: <FileCheck size={24} />,
    skills: [
      { name: "Project Management", level: 85 },
      { name: "Technical Documentation", level: 80 },
      { name: "Data Storytelling", level: 90 },
      { name: "Team Leadership", level: 85 },
      { name: "Stakeholder Communication", level: 90 },
      { name: "Agile Methodologies", level: 80 }
    ]
  }
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number; color?: string }; index: number }) => {
  const defaultColors = [
    "#2C74B3", // primary blue
    "#57C5B6", // accent teal
    "#144272", // darker blue
    "#0A2647", // deepest blue
  ];
  const color = skill.color || defaultColors[index % defaultColors.length];

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-primary-800">{skill.name}</span>
        <span className="text-sm text-neutral-500">{skill.level}%</span>
      </div>
      <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
};

const SkillGroup = ({ group, index }: { group: SkillGroup; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      <div className="flex items-center mb-6">
        <div className="bg-accent-50 p-2 rounded-md text-accent-400 mr-3">
          {group.icon}
        </div>
        <h3 className="text-xl font-heading font-bold text-primary-800">
          {group.title}
        </h3>
      </div>
      <div>
        {group.skills.map((skill, idx) => (
          <SkillBar key={skill.name} skill={skill} index={idx} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsPage = () => {
  return (
    <div className="pt-28 pb-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="A comprehensive overview of my skills and expertise in data science, machine learning, and programming"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillGroups.map((group, index) => (
            <SkillGroup key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;