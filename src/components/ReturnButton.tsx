import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ReturnButtonProps {
  onClick?: () => void;
}

const ReturnButton = ({ onClick }: ReturnButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/', { state: { scrollToProjects: true } });
    }
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed left-8 top-8 z-50 group"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ x: 5 }}
    >
      <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 group-hover:bg-gray-700 transition-colors">
        <ArrowLeft size={24} />
        <span className="font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
          Return
        </span>
      </div>
    </motion.button>
  );
};

export default ReturnButton;