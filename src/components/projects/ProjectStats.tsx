import { motion } from 'framer-motion';
import { Code2, Star } from 'lucide-react';

interface ProjectStatsProps {
  techCount: number;
  featureCount: number;
}

const ProjectStats = ({ techCount, featureCount }: ProjectStatsProps) => {
  return (
    <div className="flex space-x-6 mb-8">
      <motion.div
        className="flex items-center space-x-2 bg-cream-100 px-4 py-2 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Code2 size={20} className="text-gray-800" />
        <span className="font-bold">{techCount}</span>
        <span className="text-gray-600">Total Technology</span>
      </motion.div>
      <motion.div
        className="flex items-center space-x-2 bg-cream-100 px-4 py-2 rounded-lg"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Star size={20} className="text-gray-800" />
        <span className="font-bold">{featureCount}</span>
        <span className="text-gray-600">Main Features</span>
      </motion.div>
    </div>
  );
};

export default ProjectStats;