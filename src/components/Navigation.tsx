import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Navigation = () => {
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    // Điều kiện đặc biệt cho Resume
    if (sectionId === 'resume') {
      window.open(
        "https://drive.google.com/file/d/1yaM3yrpWxK--HAKEfFg5zNpgcrM6Z6lv/view?usp=sharing",
        "_blank"
      );
      return;
    }

    if (sectionId === 'about') {
      navigate('/about');
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Certificates', id: 'certificates' },
    { label: 'About', id: 'about' },
    { label: 'Résumé', id: 'resume' },
  ];

  return (
    <motion.nav 
      className="fixed top-4 w-11/12 max-w-3xl mx-auto bg-cream-200/80 backdrop-blur-sm rounded-full px-6 py-3 z-50 flex justify-between items-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
      style={{border: '2px solid #E8D7B1'}}
    >
      <div onClick={scrollToTop} className="cursor-pointer">
        <Logo />
      </div>
      <ul className="hidden md:flex space-x-8 text-gray-800">
        {navItems.map((item) => (
          <motion.li 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer hover:text-gray-600"
          >
            {item.label}
          </motion.li>
        ))}
      </ul>
      
      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden text-gray-800 p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const mobileMenu = document.getElementById('mobile-menu');
          mobileMenu?.classList.toggle('hidden');
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden fixed top-16 right-4 bg-cream-200/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <motion.li 
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer hover:text-gray-600 px-4 py-2"
            >
              {item.label}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navigation;