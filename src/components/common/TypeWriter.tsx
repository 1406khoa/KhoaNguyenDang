import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypeWriter = ({ text, delay = 3000, className = '' }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    const handleTyping = () => {
      const i = loopNum % text.length;
      const fullText = text;

      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        
        if (displayText === fullText) {
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    timer = setTimeout(handleTyping, displayText.length === text.length ? delay : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, text, delay]);

  return (
    <motion.span 
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {displayText}
      <span className="animate-pulse">|</span>
    </motion.span>
  );
};

export default TypeWriter;