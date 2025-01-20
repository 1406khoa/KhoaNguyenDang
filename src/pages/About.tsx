import { motion } from 'framer-motion';
import { Code2, GraduationCap, Cpu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ReturnButton from '../components/ReturnButton';
import AboutHero from '../components/about/AboutHero';
import AboutSection from '../components/about/AboutSection';
import ScrollToTopButton from '../components/common/ScrollToTopButton';
import Footer from '../components/Footer';

const About = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/', { replace: true });
  };

  return (
    <>
      <div className="min-h-screen bg-cream-50">
        <ReturnButton onClick={handleReturn} />
        <AboutHero />
        
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            <AboutSection icon={Code2} title="Professional Journey">
              <div className="prose prose-lg">
                <p>
                  As a front-end developer, I focus on building efficient and user-friendly web applications. My journey in development began during my university years, where I developed a strong interest in creating responsive and functional user interfaces.
                </p>
                <p>
                  Throughout my studies at Hoa Sen University, I've worked on various projects that enhanced my skills in ReactJS, React Native, and foundational backend technologies. These experiences have helped me build a solid understanding of modern web development, balancing performance, usability, and scalability.
                </p>
              </div>
            </AboutSection>

            <AboutSection icon={GraduationCap} title="Education">
              <div className="space-y-6">
                <div className="p-4 bg-cream-100 rounded-xl">
                  <h4 className="text-xl font-semibold">Hoa Sen University</h4>
                  <p className="text-gray-600 mt-1">Bachelor's in Information Technology</p>
                  <p className="text-gray-500 mt-1">2021 - Present</p>
                  <div className="mt-2 flex items-center">
                    <span className="text-gray-700 font-medium">GPA:</span>
                    <span className="ml-2 text-gray-800 font-bold">3.11/4.0</span>
                  </div>
                </div>
              </div>
            </AboutSection>

            <AboutSection icon={Cpu} title="Technical Skills" className="md:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <ul className="space-y-2">
                    {[
                      'HTML5, CSS3, JavaScript (ES6+)',
                      'ReactJS, React Native',
                      'Tailwind CSS, Framer Motion',
                      'Responsive Design, UI/UX Principles'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">Backend & Tools</h4>
                  <ul className="space-y-2">
                    {[
                      'Node.js, ASP.NET Core',
                      'MySQL, MongoDB, Redis',
                      'Git, GitHub',
                      'RESTful APIs, GraphQL'
                    ].map((skill, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gray-800 rounded-full" />
                        <span className="text-gray-700">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AboutSection>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
      <Footer />
    </>
  );
};

export default About;