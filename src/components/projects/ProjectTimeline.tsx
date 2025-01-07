import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ProjectTimelineProps {
  responsibilities: {
    title: string;
    items: string[];
  }[];
}

const ProjectTimeline = ({ responsibilities }: ProjectTimelineProps) => {
  return (
    <div className="py-16">
      <motion.h2
        className="text-3xl font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Project Journey
      </motion.h2>

      <div className="space-y-12">
        {responsibilities.map((phase, phaseIndex) => (
          <motion.div
            key={phaseIndex}
            className="relative pl-8 border-l-2 border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
          >
            <div className="absolute -left-3 top-0">
              <div className="w-4 h-4 rounded-full bg-gray-800" />
            </div>
            <div className="bg-cream-100 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
              <ul className="space-y-3">
                {phase.items.map((item, itemIndex) => (
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
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;