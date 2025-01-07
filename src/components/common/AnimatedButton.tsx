import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  icon: LucideIcon;
  text: string;
  onClick?: () => void;
  href?: string;
}

const AnimatedButton = ({ icon: Icon, text, onClick, href }: AnimatedButtonProps) => {
  const ButtonContent = () => (
    <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 group-hover:bg-gray-700 transition-colors">
      <Icon size={24} />
      <span className="font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
        {text}
      </span>
    </div>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
      >
        <ButtonContent />
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className="group"
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
    >
      <ButtonContent />
    </motion.button>
  );
};

export default AnimatedButton;