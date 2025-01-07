import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './footer/SocialLinks';

const Footer = () => {
  return (
    <footer className="bg-cream-100 py-20" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-gray-700 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Have a question or want to work together? Feel free to reach out!
            </motion.p>
            <SocialLinks />
          </div>
          <ContactForm />
        </div>
        <div className="mt-12 text-center text-gray-600">
          <p>© 2024 Nguyen Dang Khoa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;