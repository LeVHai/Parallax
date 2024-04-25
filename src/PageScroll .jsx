import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import "./PageScroll.css";
import SectionWithObserver from "./SectionWithObserver";

const PageScroll = ({ sections }) => {
  const containerRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true); 

  const handleWheel = (event) => {

    if (!canScroll) return; 

    if (event.deltaY > 0 && currentSection < sections.length - 1) {
      
      setCurrentSection(currentSection + 1);

    } else if (event.deltaY < 0 && currentSection > 0) {

      setCurrentSection(currentSection - 1);

    }

    setCanScroll(false); 

    setTimeout(() => {
      setCanScroll(true);
    }, 500); 

    event.preventDefault();
  };

  useEffect(() => {
    containerRef.current.addEventListener("wheel", handleWheel);
    return () => {
      containerRef.current.removeEventListener("wheel", handleWheel);
    };
  }, [handleWheel]);

  return (
    <div className="full-page-scroll-container" ref={containerRef}>
      {sections.map((section, index) => (
        <div
          key={section.id}
          style={{
            transform: `translateY(${-currentSection * 100}vh)`, 
            transition: "transform 0.8s ease",
          }}
        >
          <SectionWithObserver id={section.id} content={section.content} />
        </div>
      ))}
    </div>
  );
};

export default PageScroll;
