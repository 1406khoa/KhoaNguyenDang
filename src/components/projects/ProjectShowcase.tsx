import { motion } from 'framer-motion';
import { Star, Lightbulb } from 'lucide-react';

interface ProjectShowcaseProps {
  features: string[];
  challenges: {
    title: string;
    problem: string;
    solution: string;
  }[];
}

const ProjectShowcase = ({ features, challenges }: ProjectShowcaseProps) => {
  return (
    <div className="py-16">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Star className="w-6 h-6 text-gray-800" />
            <h2 className="text-2xl font-bold">Key Features</h2>
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-cream-100 rounded-xl p-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-700">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-6">
            <Lightbulb className="w-6 h-6 text-gray-800" />
            <h2 className="text-2xl font-bold">Challenges</h2>
          </div>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                className="bg-cream-100 rounded-xl p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-4">{challenge.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600">{challenge.problem}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600">{challenge.solution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectShowcase;