import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

interface ProjectChallengesProps {
  challenges: Challenge[];
}

const ProjectChallenges = ({ challenges }: ProjectChallengesProps) => {
  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ rotate: -180, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-block mb-4"
          >
            <Lightbulb className="w-12 h-12 text-gray-800" />
          </motion.div>
          <h2 className="text-3xl font-bold">Challenges & Solutions</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-cream-100 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-600">{challenge.problem}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Solution:</h4>
                  <p className="text-gray-600">{challenge.solution}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectChallenges;