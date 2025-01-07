import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import ProjectStats from './ProjectStats';
import ProjectTechnologies from './ProjectTechnologies';

interface ProjectContentProps {
  techCount: number;
  featureCount: number;
  technologies: string[];
}

const ProjectContent = ({ techCount, featureCount, technologies }: ProjectContentProps) => {
  return (
    <div>
      <ProjectStats techCount={techCount} featureCount={featureCount} />
      
      <div className="flex space-x-4 mb-8">
        <motion.a
          href="#"
          className="flex items-center px-6 py-2 bg-gray-800 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ExternalLink size={20} className="mr-2" />
          Live Demo
        </motion.a>
        <motion.a
          href="#"
          className="flex items-center px-6 py-2 border border-gray-800 rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Github size={20} className="mr-2" />
          Github
        </motion.a>
      </div>

      <ProjectTechnologies technologies={technologies} />
    </div>
  );
};

export default ProjectContent;