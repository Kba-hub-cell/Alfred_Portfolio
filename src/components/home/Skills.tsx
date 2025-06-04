import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

type Skill = {
  name: string;
  level: number; // 0-100
  color: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 90, color: "#3776AB" },
      { name: "R", level: 85, color: "#276DC3" },
      { name: "SQL", level: 80, color: "#F29111" },
      { name: "JavaScript", level: 70, color: "#F7DF1E" }
    ]
  },
  {
    name: "Data Science & ML",
    skills: [
      { name: "Pandas", level: 90, color: "#150458" },
      { name: "Scikit-Learn", level: 85, color: "#F89939" },
      { name: "TensorFlow", level: 75, color: "#FF6F00" },
      { name: "PyTorch", level: 70, color: "#EE4C2C" }
    ]
  }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
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
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ backgroundColor: skill.color }}
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Technical Skills"
          subtitle="A snapshot of my technical expertise and proficiency levels"
          centered
        />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
            >
              <h3 className="text-xl font-heading font-bold text-primary-800 mb-6">
                {category.name}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="/skills"
            className="inline-block text-accent-400 font-medium hover:text-accent-500 transition-colors"
          >
            View all skills →
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Skills;