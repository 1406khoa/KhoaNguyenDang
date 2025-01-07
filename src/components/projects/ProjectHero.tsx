import { motion } from 'framer-motion';
import type { Project } from '../../data/projects';

interface ProjectHeroProps {
  project: Project;
}

const ProjectHero = ({ project }: ProjectHeroProps) => {
  return (
    <div className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/90 to-cream-50" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed max-w-4xl">
            {project.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectHero;