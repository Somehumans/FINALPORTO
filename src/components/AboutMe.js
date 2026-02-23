import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  // Placeholder icons (8 grey cubes)
  const icons = Array(8).fill(null);

  return (
    <section className="about-me">
      <h2 className="section-title">
        About <span className="highlight">me</span>
      </h2>

      {/* Top scrolling icons */}
      <div className="icons-scroll-container">
        <div className="icons-scroll">
          {icons.map((_, index) => (
            <div key={`icon-top-${index}`} className="icon-placeholder"></div>
          ))}
          {/* Duplicate for seamless loop */}
          {icons.map((_, index) => (
            <div key={`icon-top-dup-${index}`} className="icon-placeholder"></div>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate student designer with a focus on UI/UX design and visual storytelling. 
            With a keen eye for aesthetics and user experience, I bring ideas to life through 
            digital experiences. My journey is fueled by creativity, innovation and a drive to 
            constantly learn and grow.
          </p>
          <p>
            Currently expanding my portfolio and exploring new technologies to create meaningful 
            and beautiful designs. I'm particularly interested in motion graphics, interactive 
            web experiences and brand identity design.
          </p>
          <div className="skills">
            <span className="skill-tag">Marketing</span>
            <span className="skill-tag">Design</span>
            <span className="skill-tag">Development</span>
            <span className="skill-tag">Branding</span>
            <span className="skill-tag">Graphic Design</span>
            <span className="skill-tag">3D/CGI</span>
            <span className="skill-tag">Video Editing</span>
          </div>
        </div>
        <div className="about-image-placeholder"></div>
      </div>

      {/* Bottom scrolling icons */}
      <div className="icons-scroll-container">
        <div className="icons-scroll reverse">
          {icons.map((_, index) => (
            <div key={`icon-bottom-${index}`} className="icon-placeholder"></div>
          ))}
          {/* Duplicate for seamless loop */}
          {icons.map((_, index) => (
            <div key={`icon-bottom-dup-${index}`} className="icon-placeholder"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

