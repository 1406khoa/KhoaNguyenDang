import { motion } from 'framer-motion';
import { Calendar, User, School, UserCheck } from 'lucide-react';

interface ProjectOverviewProps {
  duration: string;
  role: string;
  institution: string;
  mentor: string;
}

const ProjectOverview = ({ duration, role, institution, mentor }: ProjectOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-cream-100 rounded-xl p-6 mb-8">
      <motion.div
        className="flex items-start space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Calendar className="w-5 h-5 mt-1 text-gray-700" />
        <div>
          <h3 className="font-medium text-gray-900">Duration</h3>
          <p className="text-gray-600">{duration}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <User className="w-5 h-5 mt-1 text-gray-700" />
        <div>
          <h3 className="font-medium text-gray-900">Role</h3>
          <p className="text-gray-600">{role}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <School className="w-5 h-5 mt-1 text-gray-700" />
        <div>
          <h3 className="font-medium text-gray-900">Institution</h3>
          <p className="text-gray-600">{institution}</p>
        </div>
      </motion.div>

      <motion.div
        className="flex items-start space-x-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <UserCheck className="w-5 h-5 mt-1 text-gray-700" />
        <div>
          <h3 className="font-medium text-gray-900">Mentor</h3>
          <p className="text-gray-600">{mentor}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectOverview;