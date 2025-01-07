import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ScrollArrow = () => {
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      className="cursor-pointer bg-gray-800 text-white p-4 rounded-full hover:bg-gray-700"
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={scrollToSkills}
      whileHover={{ scale: 1.1 }}
    >
      <ChevronDown size={24} />
    </motion.div>
  );
};

export default ScrollArrow;