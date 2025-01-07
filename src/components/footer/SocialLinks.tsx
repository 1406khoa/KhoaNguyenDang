import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';
import CVDownload from './CVDownload';

const SocialLinks = () => {

  return (
    <motion.div 
      className="flex flex-wrap gap-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <AnimatedButton
        icon={Github}
        text="GitHub"
        href="https://github.com/1406khoa"
      />
      <AnimatedButton
        icon={Linkedin}
        text="LinkedIn"
        href="https://www.linkedin.com/in/khoa-nguyen-dang-learning/"
      />
      <CVDownload />
    </motion.div>
  );
};

export default SocialLinks;