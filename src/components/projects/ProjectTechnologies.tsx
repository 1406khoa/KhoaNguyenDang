import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface ProjectTechnologiesProps {
  technologies: string[];
}

const ProjectTechnologies = ({ technologies }: ProjectTechnologiesProps) => {
  return (
    <div className="bg-cream-100 rounded-xl p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Code2 className="text-gray-800" size={24} />
        <h2 className="text-2xl font-bold">Technologies Used</h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 px-3 py-1.5 bg-cream-200/50 border border-gray-200 text-gray-700 rounded-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="w-2 h-2 bg-gray-800 rounded-full" />
            <span className="text-sm font-medium">{tech}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTechnologies;