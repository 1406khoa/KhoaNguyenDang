import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface Responsibility {
  title: string;
  items: string[];
}

interface ProjectResponsibilitiesProps {
  responsibilities: Responsibility[];
}

const ProjectResponsibilities = ({ responsibilities }: ProjectResponsibilitiesProps) => {
  return (
    <div className="space-y-8 mb-12">
      <motion.h2
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Key Responsibilities
      </motion.h2>

      <div className="space-y-6">
        {responsibilities.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 mt-1 text-gray-700 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectResponsibilities;