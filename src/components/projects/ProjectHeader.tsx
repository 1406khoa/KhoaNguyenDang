import { motion } from 'framer-motion';

interface ProjectHeaderProps {
  title: string;
  description: string;
  demoUrl: string;
}

const ProjectHeader = ({ title, description, demoUrl }: ProjectHeaderProps) => {
  return (
    <div className="mb-12">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {description}
      </motion.p>

      
      
    </div>
  );
};

export default ProjectHeader;