import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import TypeWriter from '../common/TypeWriter';

const AboutHero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-200 to-cream-50">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      <div className="w-full">
        <div className="flex items-center justify-center">
          {/* Content Column */}
          <motion.div
            className="text-center px-4 md:px-12 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
            >
              <User className="w-16 h-16 text-gray-800" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Me
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 mb-8">
              <TypeWriter 
                text="Front End Developer"
                className="font-semibold"
              />
            </div>
            
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              I’m a developer with a focus on building efficient, user-friendly web applications. 
              My work emphasizes optimizing performance, crafting clean interfaces, and implementing 
              essential interactions and basic animations to enhance usability.
            </p>

            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-4">
              While my primary focus is on frontend development, I also have experience with backend 
              technologies such as Node.js, ASP.NET, and databases like MySQL, MongoDB, Neo4j 
              at an pre-intermediate level. My current direction involves developing with ReactJS and React Native, 
              aiming to create scalable and intuitive web and mobile applications.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
