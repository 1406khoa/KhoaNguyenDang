import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, MessageCircle, Presentation, Users, Lightbulb, Code2, Database, GitBranch, Smartphone, Globe, Palette, Cpu } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  isSoftSkills?: boolean;
}

const SkillCategory = ({ title, skills, isSoftSkills = false }: SkillCategoryProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const softSkillIcons = {
    'Critical thinking': Brain,
    'Communication skills': MessageCircle,
    'Public speaking skills': Presentation,
    'Teamwork': Users,
    'Problems solving': Lightbulb,
  };

  const getTechIcon = (title: string) => {
    switch (title) {
      case "Frontend Development":
        return Globe;
      case "Backend Development":
        return Database;
      case "Tools and Version Control":
        return GitBranch;
      case "Mobile Development":
        return Smartphone;
      default:
        return Code2;
    }
  };

  if (isSoftSkills) {
    return (
      <motion.div
        ref={ref}
        className="bg-cream-100 p-8 rounded-2xl"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <h3 className="text-2xl font-bold mb-6 text-center">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => {
            const Icon = softSkillIcons[skill as keyof typeof softSkillIcons];
            return (
              <motion.div
                key={index}
                className="bg-white p-4 rounded-xl text-center"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {Icon && <Icon className="w-6 h-6 mx-auto mb-2 text-gray-800" />}
                <span className="text-sm font-medium">{skill}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    );
  }

  const Icon = getTechIcon(title);

  return (
    <motion.div
      ref={ref}
      className="bg-cream-100 p-8 rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-white rounded-lg">
          <Icon className="w-6 h-6 text-gray-800" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {skills.map((skill, index) => (
          <motion.li
            key={index}
            className="flex items-center space-x-3 bg-white p-3 rounded-lg"
            variants={itemVariants}
            whileHover={{ x: 10 }}
          >
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
            <span className="text-gray-800">{skill}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SkillCategory;