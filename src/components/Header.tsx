import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Github, Linkedin } from 'lucide-react';
import Navigation from './Navigation';
import ScrollArrow from './ScrollArrow';
import TypeWriter from './common/TypeWriter';
import CodeSnippet from './common/CodeSnippet';

const Header = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <header className="relative w-full min-h-screen bg-cream-100 flex flex-col items-center justify-center overflow-hidden">
      <Navigation />
      
      <div className="w-full min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid md:grid-cols-2 items-center w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="px-4 md:px-12 lg:px-20"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                HELLO, I'M KHOA.
                <br />
                <TypeWriter 
                  text="Front End Developer"
                  className="text-3xl md:text-4xl lg:text-5xl text-gray-700"
                />
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl text-gray-700 max-w-2xl mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                As a final-year student majoring in Information Technology at
                Hoa Sen University, I have been developing my proficiency with
                technologies like ReactJS, Tailwind CSS, and JavaScript to
                craft seamless user experiences.
              </motion.p>
            </div>

            <motion.div
              className="flex space-x-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { icon: Github, href: "https://github.com/1406khoa" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/khoa-nguyen-dang-learning/" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full border-2 border-gray-800 flex items-center justify-center text-gray-800 hover:bg-gray-800 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-full"
          >
            <CodeSnippet />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ScrollArrow />
      </div>
    </header>
  );
};

export default Header;