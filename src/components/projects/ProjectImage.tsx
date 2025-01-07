import { motion } from 'framer-motion';

interface ProjectImageProps {
  image: string;
  title: string;
}

const ProjectImage = ({ image, title }: ProjectImageProps) => {
  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-auto"
      />
    </motion.div>
  );
};

export default ProjectImage;