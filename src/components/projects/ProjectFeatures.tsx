import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface ProjectFeaturesProps {
  features: string[];
}

const ProjectFeatures = ({ features }: ProjectFeaturesProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-cream-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-8"
        >
          <Star className="w-8 h-8 text-gray-800" />
          <h2 className="text-3xl font-bold">Key Features</h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700">{feature}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectFeatures;