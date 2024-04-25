import React, {  useEffect, useRef } from 'react';

const SectionWithObserver = ({ id, content }) => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.location.hash = `#${id}`;
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );
    observer.observe(sectionRef.current);
    return () => {
      observer.disconnect(); 
    };
  }, [id]);
  return (
    <div ref={sectionRef}>
      {content}
    </div>
  );
};

export default SectionWithObserver;
