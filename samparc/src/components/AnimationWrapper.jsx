import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimationWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const wrapperElement = wrapperRef.current;
      if (wrapperElement) {
        const rect = wrapperElement.getBoundingClientRect();
        setIsVisible(rect.top <= window.innerHeight * 0.6);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: -1500 });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      className="animation-wrapper"
      ref={wrapperRef}
      animate={controls}
      transition={{ type:"tween",duration:0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
