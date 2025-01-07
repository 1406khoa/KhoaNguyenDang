import { motion } from 'framer-motion';
import { ArrowLeft, Github, Rss  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProjectNavigationProps {
  githubUrl: string;
  demoUrl: string;
}

const ProjectNavigation = ({ githubUrl, demoUrl }: ProjectNavigationProps) => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/', { replace: true });
    // Add a small delay to ensure the navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        <motion.button
          onClick={handleReturn}
          className="group"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ x: 5 }}
        >
          <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 group-hover:bg-gray-700 transition-colors">
            <ArrowLeft size={24} />
            <span className="font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
              Return to Projects
            </span>
          </div>
        </motion.button>

        <motion.a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 group-hover:bg-gray-700 transition-colors">
            <Github size={24} />
            <span className="font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
              View on GitHub
            </span>
          </div>
        </motion.a>

        <motion.a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          whileHover={{ y: -5 }}
        >
          <div className="bg-gray-800 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 group-hover:bg-gray-700 transition-colors">
            <Rss size={24} />
            <span className="font-medium opacity-0 max-w-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden">
              View live demo
            </span>
          </div>
        </motion.a>

        
      </div>
    </div>
  );
};

export default ProjectNavigation;