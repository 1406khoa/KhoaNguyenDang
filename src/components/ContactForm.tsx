import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.target as HTMLFormElement;

    try {
      await emailjs.sendForm(
        'service_acp6hdf',
        'template_hxtg5yl',
        form,
        'IBluMuu2uXKCNRgT0'
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('Failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="max-w-lg w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cream-200"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cream-200"
          required
          disabled={isSubmitting}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cream-200"
          required
          disabled={isSubmitting}
        />
      </div>

      {submitStatus === 'success' && (
        <motion.p
          className="text-green-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Message sent successfully!
        </motion.p>
      )}

      {submitStatus === 'error' && (
        <motion.p
          className="text-red-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Failed to send message. Please try again.
        </motion.p>
      )}

      <motion.button
        type="submit"
        className="bg-gray-800 text-white px-6 py-2 rounded-lg flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={isSubmitting}
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        <Send size={18} />
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;