import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

const CertificateCard = ({ certificate }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start space-x-4">
        <Award className="text-gray-800 w-8 h-8 mt-1" />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
          <p className="text-gray-600 mb-2">{certificate.issuer}</p>
          <p className="text-gray-500 text-sm mb-4">{certificate.date}</p>
          {certificate.description && (
            <p className="text-gray-700 mb-4">{certificate.description}</p>
          )}
          {certificate.url && (
            <motion.a
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-gray-800 hover:text-gray-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">View Certificate</span>
              <ExternalLink size={16} />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const certificates = [
    {
      title: "Aptis English Certificate",
      issuer: "British Council",
      date: "September 2022",
      description: "Achieved a B2 level in English proficiency through the Aptis test, a globally recognized assessment by the British Council for evaluating practical communication skills.",
      url: "https://drive.google.com/file/d/17kmk5vnwg2hCOfn34_4L89oO1LToRNFx/view?usp=sharing"
    },

    {
      title: "Critical Thinking",
      issuer: "Youth Cultural Center of Ho Chi Minh City",
      date: "October 2024",
      description: "Critical thinking empowers individuals to evaluate information logically, fostering better problem-solving, decision-making, and adaptability in complex situations.",
      url: "https://drive.google.com/file/d/1rB51YI4Flo6_spmGjw0haLif0ZFu4mBp/view?usp=drive_link"
    },
    {
      title: "Speak confidently in public",
      issuer: "Youth Cultural Center of Ho Chi Minh City",
      date: "November 2024",
      description: "Public speaking is a valuable skill that can help you communicate ideas clearly and effectively, whether you're giving a presentation or speaking in a meeting.",
      url: "https://drive.google.com/file/d/1QIuu3yDkqDz8yf7VnSt4MjnnbrCh40Ix/view?usp=drive_link"
    },
    {
      title: "The Complete React Native + Hooks Course",
      issuer: "Udemy",
      date: "January 2025",
      description: "Learn how to build mobile applications using React Native, a popular JavaScript framework for building native mobile applications.",
      url: "https://drive.google.com/file/d/1kwBY7iv7MFYSvoMdv5KzsEcKCHMwtqjC/view?usp=drive_link"
    },

    {
      title: "Web Fullstack Development (Web23S)",
      issuer: "ITSS Training Center",
      date: "March 2023",
      description: "Learned and practiced the basics of web technologies such as HTML, CSS, JavaScript, as well as frameworks like Angular and NgRx.",
      url: "https://drive.google.com/file/d/1mt8ve8lj21WbHJUC_FSBlZvEvUIhbG02/view?usp=drive_link"
    }
  ];

  return (
    <section className="py-20 bg-cream-100" id="certificates">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certificates & Achievements
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;