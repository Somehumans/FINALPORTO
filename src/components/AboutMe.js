import React from 'react';
import './AboutMe.css';

const ICONS = [
  { src: '/skillsloop/adobe-animate.svg',      alt: 'Adobe Animate' },
  { src: '/skillsloop/adobe-illustrator.svg',  alt: 'Adobe Illustrator' },
  { src: '/skillsloop/adobe-photoshop.svg',    alt: 'Adobe Photoshop' },
  { src: '/skillsloop/indesign.svg',           alt: 'Adobe InDesign' },
  { src: '/skillsloop/adobe-after-effects.svg',alt: 'Adobe After Effects' },
  { src: '/skillsloop/adobe-premiere.svg',     alt: 'Adobe Premiere' },
  { src: '/skillsloop/figma.svg',              alt: 'Figma' },
  { src: '/skillsloop/css3.svg',               alt: 'CSS3' },
  { src: '/skillsloop/html5.svg',              alt: 'HTML5' },
  { src: '/skillsloop/javascript.svg',         alt: 'JavaScript' },
  { src: '/skillsloop/maya.svg',               alt: 'Maya' },
  { src: '/skillsloop/blender.svg',            alt: 'Blender' },
];

const IconRow = ({ size, reverse }) => (
  <div className="skills-ticker-wrap">
    <div className={`skills-ticker ${reverse ? 'skills-ticker--reverse' : ''}`}>
      {[...ICONS, ...ICONS].map((icon, i) => (
        <img
          key={i}
          src={icon.src}
          alt={icon.alt}
          className="ticker-icon"
          style={{ width: size, height: size }}
          draggable="false"
        />
      ))}
    </div>
  </div>
);

const AboutMe = () => (
  <section id="about-me" className="about-me">

    <IconRow size={112} reverse={false} />

    <div className="about-content">
      <div className="about-text">
        <h2 className="about-heading">
          About <span className="about-highlight">me</span>
        </h2>
        <p>
          I'm a passionate student developer and designer with a love for creating
          beautiful and functional digital experiences. My journey in tech combines
          creativity with technical skills, allowing me to build projects that are
          both visually appealing and user-friendly.
        </p>
        <p>
          Currently expanding my portfolio and exploring new technologies. I'm
          proficient in a wide range of design and development tools, from Adobe
          Creative Suite to web technologies and 3D modeling software.
        </p>
        <div className="skill-tags">
          <span className="skill-tag">Marketing</span>
          <span className="skill-tag">Design</span>
          <span className="skill-tag">Development</span>
          <span className="skill-tag">Animation</span>
          <span className="skill-tag">Character Design</span>
          <span className="skill-tag">SEO/SEM</span>
          <span className="skill-tag">Video Editing</span>
        </div>
      </div>

      <div className="about-photo-wrap">
        <img
          src="/skillsloop/profileimg.png"
          alt="Profile"
          className="about-photo"
        />
      </div>
    </div>

    <IconRow size={112} reverse={true} />

  </section>
);

export default AboutMe;
