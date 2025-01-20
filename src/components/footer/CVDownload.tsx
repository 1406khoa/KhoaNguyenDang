import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import AnimatedButton from '../common/AnimatedButton';

const CVDownload = () => {
  const handleDownloadCV = () => {
    // Đường dẫn đến file CV (PDF hoặc file hình ảnh hợp lệ)
    const cvUrl = '/khoa-resume.pdf'; // Đặt đường dẫn tĩnh tại public folder

    // Kiểm tra file tồn tại và tải xuống
    fetch(cvUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('File not found');
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement('a');
        const url = window.URL.createObjectURL(blob);
        link.href = url;
        link.download = 'KhoaNguyenDangCV.pdf';
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        alert('Failed to download CV. Please try again later.');
        console.error('Download error:', error);
      });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-wrap gap-4"

    >
      <AnimatedButton
        icon={Download}
        text="Download CV"
        onClick={handleDownloadCV}
      />
    </motion.div>
  );
};

export default CVDownload;