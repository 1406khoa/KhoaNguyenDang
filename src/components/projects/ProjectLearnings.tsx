import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import type { Project } from '../../data/projects';

interface ProjectLearningsProps {
  project: Project;
}

const ProjectLearnings = ({ project }: ProjectLearningsProps) => {
 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.8,
      rotateY: -180,
      opacity: 0 
    },
    visible: {
      scale: 1,
      rotateY: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
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
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ rotate: -180, scale: 0 }}
            whileInView={{ rotate: 0, scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              duration: 0.8 
            }}
            className="inline-block mb-4"
          >
            <BookOpen className="w-12 h-12 text-gray-800" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">Learning Outcomes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Key skills and knowledge gained through the development of this project
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {project.learnings?.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="bg-cream-100 rounded-xl p-8 shadow-lg transform-gpu"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <category.icon className="w-10 h-10 text-gray-800 mb-6" />
              </motion.div>
              
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              
              <motion.ul 
                variants={containerVariants}
                className="space-y-4"
              >
                {category.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    variants={itemVariants}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-gray-800 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectLearnings;