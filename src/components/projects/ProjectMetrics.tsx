import { motion } from 'framer-motion';
import { Calendar, User, School, UserCheck, Code2 } from 'lucide-react';

interface ProjectMetricsProps {
  duration: string;
  role: string;
  institution: string;
  mentor: string;
  technologies: string[];
}

const ProjectMetrics = ({ duration, role, institution, mentor, technologies }: ProjectMetricsProps) => {
  return (
    <div className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Project Info */}
        <motion.div
          className="col-span-2 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-6">
            <MetricItem icon={Calendar} title="Duration" value={duration} />
            <MetricItem icon={User} title="Role" value={role} />
            <MetricItem icon={School} title="Institution" value={institution} />
            <MetricItem icon={UserCheck} title="Mentor" value={mentor} />
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div
          className="bg-cream-100 rounded-xl p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center space-x-3 mb-4">
            <Code2 className="w-6 h-6 text-gray-800" />
            <h3 className="text-lg font-semibold">Technologies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const MetricItem = ({ icon: Icon, title, value }) => (
  <div className="flex items-start space-x-3 bg-cream-100 rounded-xl p-4">
    <Icon className="w-5 h-5 mt-1 text-gray-700" />
    <div>
      <h3 className="font-medium text-gray-900">{title}</h3>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

export default ProjectMetrics;