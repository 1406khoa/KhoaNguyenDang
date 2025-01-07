import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import BinaryTreeImage from '../images/BinaryTree.png';
import HumanBenchmarkImage from '../images/13.webp';

const ProjectCard = ({ project, isReversed }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${isReversed ? 'md:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {isReversed ? (
        <>
          <motion.div
            className="relative order-2 md:order-1"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
            <p className="text-gray-700 mb-8">{project.description}</p>
            <div className="flex space-x-4">
              <Link to={`/project/${project.id}`}>
                <motion.div
                  className="group relative inline-flex items-center overflow-hidden rounded-full bg-gray-800 px-8 py-3 text-white transition-transform hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-4">View Details</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-700 to-gray-900"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
            <p className="text-gray-700 mb-8">{project.description}</p>
            <div className="flex space-x-4">
              <Link to={`/project/${project.id}`}>
                <motion.div
                  className="group relative inline-flex items-center overflow-hidden rounded-full bg-gray-800 px-8 py-3 text-white transition-transform hover:bg-gray-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-4">View Details</span>
                  <motion.span
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ArrowRight size={20} />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-700 to-gray-900"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
             
            </div>
          </div>
          <motion.div
            className="relative"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 'binary-tree',
      title: "BINARY TREE VISUALIZATION",
      
      description: "This project is a web application built with Blazor Web App to visualize tree structures such as Binary Tree, BST, and AVL, featuring algorithms including DFS, BFS, Shortest Path, and AVL rotations. As the team leader, I set up the project, created the code base, and managed timelines while implementing core features like tree visualization, animations for algorithms, and advanced functionalities like Add Node and AVL rotations. The project was completed in 10 weeks, achieving a Lighthouse score of 98 and receiving positive feedback for its performance and user-friendly interface.",
      
      image: BinaryTreeImage
    },
    {
      id: 'humanbenchmark-clones',
      title: "HUMAN BENCHMARK CLONES",
      description: "A cognitive testing application built with React that helps users measure and improve their cognitive abilities through various interactive games and challenges.",
      image: HumanBenchmarkImage

    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default Projects;