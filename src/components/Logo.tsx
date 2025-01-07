import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
    >
      <Code2 className="text-gray-800" size={24} />
      <span className="font-bold text-xl">KDN</span>
    </motion.div>
  );
};

export default Logo;