import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './LandingPage.css';

const PARALLAX_STRENGTH = 12;
const PARALLAX_CAP = 0.6;
const HILL_FACTORS = { 1: 1, 2: 0.5, 3: 0.5, 4: 0.25, cloud: 0.5 };
const PARALLAX_KEYS = [1, 2, 3, 4, 'cloud'];

const LandingPage = () => {
  const sectionRef = useRef(null);
  const hillRefs = useRef({});

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const quickTos = {};
    PARALLAX_KEYS.forEach((i) => {
      const el = hillRefs.current[i];
      if (el) {
        quickTos[i] = {
          x: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power2.out' }),
          y: gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power2.out' }),
        };
      }
    });

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      let normX = (e.clientX - centerX) / (rect.width / 2);
      let normY = (e.clientY - centerY) / (rect.height / 2);
      normX = Math.max(-PARALLAX_CAP, Math.min(PARALLAX_CAP, normX));
      normY = Math.max(-PARALLAX_CAP, Math.min(PARALLAX_CAP, normY));

      PARALLAX_KEYS.forEach((i) => {
        const factor = HILL_FACTORS[i];
        const q = quickTos[i];
        if (q) {
          q.x(normX * PARALLAX_STRENGTH * factor);
          q.y(normY * PARALLAX_STRENGTH * factor);
        }
      });
    };

    section.addEventListener('mousemove', onMouseMove);
    return () => section.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <section className="landing-page" ref={sectionRef}>
      <div className="landing-parallax">
        <div className="landing-hill landing-hill-4" ref={(el) => (hillRefs.current[4] = el)}>
          <img src="/Landscape%20assets/4.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-hill landing-hill-3" ref={(el) => (hillRefs.current[3] = el)}>
          <img src="/Landscape%20assets/3.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-hill landing-hill-2" ref={(el) => (hillRefs.current[2] = el)}>
          <img src="/Landscape%20assets/2.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-cloud" ref={(el) => (hillRefs.current.cloud = el)}>
          <div className="landing-cloud-inner">
            <img src="/Landscape%20assets/clouds/cloudhill.svg" alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="landing-hill landing-hill-1" ref={(el) => (hillRefs.current[1] = el)}>
          <img src="/Landscape%20assets/1.svg" alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

