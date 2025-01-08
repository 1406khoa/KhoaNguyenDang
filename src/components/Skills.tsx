import { motion } from 'framer-motion';
import SkillCategory from './skills/SkillCategory';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        'HTML, CSS, JavaScript, TypeScript',
        'ReactJS, Tailwind CSS (Responsive Design, Custom Themes)',
        'Basic Animations with Framer Motion'
      ]
    },
    {
      title: "Backend Development",
      skills: [
        'RESTful API',
        'Node.js, ASP.NET',
        'SQL (MySQL)',
        'NoSQL Databases (MongoDB, Neo4j, Redis)'
      ]
    },
    {
      title: "Tools and Version Control",
      skills: [
        'Git, GitHub (Branching, Merging, Version Control)',
      ]
    },
    {
      title: "Mobile Development",
      skills: [
        'React Native'
      ]
    }
  ];

  const softSkills = {
    title: "Soft Skills",
    skills: [
      'Communication skills',
      'Critical thinking',
      'Public speaking skills',
      'Teamwork',
      'Problems solving'
    ]
  };

  return (
    <section className="py-20 bg-cream-200">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Full Width Soft Skills */}
        <SkillCategory
          title={softSkills.title}
          skills={softSkills.skills}
          isSoftSkills={true}
        />
      </div>
    </section>
  );
};

export default Skills;