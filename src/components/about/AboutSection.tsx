import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const AboutSection = ({ icon: Icon, title, children, className = '' }: AboutSectionProps) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-8 shadow-lg ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-cream-100 rounded-xl">
          <Icon className="w-6 h-6 text-gray-800" />
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </motion.div>
  );
};

export default AboutSection;