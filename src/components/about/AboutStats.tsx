import { motion } from 'framer-motion';
import { Code2, Coffee, Star, Users } from 'lucide-react';

const stats = [
  { icon: Code2, value: '3+', label: 'Years of Experience' },
  { icon: Star, value: '15+', label: 'Projects Completed' },
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-2xl p-6 text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -5 }}
        >
          <motion.div
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 + index * 0.1 }}
          >
            <div className="p-3 bg-cream-100 rounded-xl">
              <stat.icon className="w-6 h-6 text-gray-800" />
            </div>
          </motion.div>
          <h4 className="text-3xl font-bold mb-2">{stat.value}</h4>
          <p className="text-gray-600">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutStats;