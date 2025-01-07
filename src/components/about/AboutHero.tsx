import { motion } from 'framer-motion';
import { Code2, User } from 'lucide-react';
import TypeWriter from '../common/TypeWriter';

const AboutHero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-cream-200 to-cream-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
      
      <div className="w-full">
        <div className="grid md:grid-cols-2 items-center">
          {/* Image Column - Full width on the left */}
          <motion.div
            className="order-2 md:order-1 h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full">
              {/* Main Image */}
              <motion.div
                className="relative h-full"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Profile"
                  className="w-full h-[80vh] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            className="order-1 md:order-2 text-center md:text-left px-4 md:px-12 lg:px-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex justify-center md:justify-start mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
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
            
            <p className="text-lg text-gray-700 max-w-2xl">
I’m a developer with a focus on building efficient, user-friendly web applications. My work emphasizes optimizing performance, crafting clean interfaces, and implementing essential interactions and basic animations to enhance usability.
            </p>

            <p className="text-lg text-gray-700 max-w-2xl">
While my primary focus is on frontend development, I also have experience with backend technologies such as Node.js, ASP.NET, and databases like MySQL, MongoDB, Neo4j, and Redis at an intermediate level. My current direction involves developing with ReactJS and React Native, aiming to create scalable and intuitive web and mobile applications.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;