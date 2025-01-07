import { motion } from 'framer-motion';
import { Play, Code2, ArrowRight } from 'lucide-react';

interface Animation {
  title: string;
  description: string;
  features: string[];
}

interface ProjectAnimationsProps {
  animations: Animation[];
}

const ProjectAnimations = ({ animations }: ProjectAnimationsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-20 bg-cream-100">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-4"
          >
            <Code2 className="w-12 h-12 text-gray-800" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Interactive Animations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our dynamic visualizations that bring algorithms to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {animations.map((animation, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Play className="w-8 h-8 text-gray-800" />
                <h3 className="text-2xl font-semibold">{animation.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{animation.description}</p>
              
              <ul className="space-y-4">
                {animation.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <ArrowRight className="w-5 h-5 text-gray-800 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectAnimations;