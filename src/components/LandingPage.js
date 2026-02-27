import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './LandingPage.css';

const PARALLAX_STRENGTH = 12;
const PARALLAX_CAP      = 0.6;
const SCROLL_RANGE      = 500; // px of scroll to complete exit

const HILL_FACTORS = {
  1: 1, 2: 0.5, 3: 0.5, 4: 0.25,
  cloud: 0.5, cloudForeground: 0.5,
  logo: 0.15, cloudLogo: 0.2, cloudBehindLogo: 0.12,
  cloudTopLeft: 0.3, cloudTopRight: 0.25,
};

const PARALLAX_KEYS = [1, 2, 3, 4, 'cloud', 'cloudForeground', 'logo', 'cloudLogo', 'cloudBehindLogo', 'cloudTopLeft', 'cloudTopRight'];

// Where each element ends up at scroll progress = 1
const SCROLL_EXITS = {
  3:              { x: -450, y: 0   },
  2:              { x:  450, y: 0   },
  4:              { x:  0,   y: 260 },
  cloud:          { x:  600, y: 0   },
  cloudForeground:{ x: -600, y: 0   },
  cloudTopLeft:   { x: -600, y: 0   },
  cloudTopRight:  { x:  600, y: 0   },
  cloudBehindLogo:{ x:  500, y: 0   },
  cloudLogo:      { x: -500, y: 0   },
  logo:           { x: 0,    y: 400 }, // follows hill 1 down
  1:              { x: 0,    y: 400 }, // slides down and off screen
};

// Elements whose opacity fades as the scene exits (logo stays opaque — it slides off naturally)
const FADE_KEYS = [3, 2, 4, 'cloud', 'cloudForeground', 'cloudTopLeft', 'cloudTopRight', 'cloudBehindLogo', 'cloudLogo'];

const LandingPage = () => {
  const sectionRef  = useRef(null);
  const hillRefs    = useRef({});
  const logoImgRef  = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const r = hillRefs.current;

    // Ensure hill 1 is always fully opaque (never fades)
    gsap.set(r[1], { opacity: 1 });

    // — Transform quickTos (mouse parallax + scroll combined) —
    const quickTos = {};
    PARALLAX_KEYS.forEach((key) => {
      const el = r[key];
      if (el) quickTos[key] = {
        x: gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power2.out' }),
        y: gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power2.out' }),
      };
    });

    // — Opacity quickTos for scroll fade —
    const opacityQTs = {};
    FADE_KEYS.forEach((key) => {
      const el = r[key];
      if (el) opacityQTs[key] = gsap.quickTo(el, 'opacity', { duration: 0.25 });
    });

    // Shared state
    const state = { scrollP: 0, normX: 0, normY: 0 };

    const updateTransforms = () => {
      const { scrollP, normX, normY } = state;
      PARALLAX_KEYS.forEach((key) => {
        const q = quickTos[key];
        if (!q) return;
        const factor = HILL_FACTORS[key] || 0;
        const exit   = SCROLL_EXITS[key] || { x: 0, y: 0 };
        q.x(normX * PARALLAX_STRENGTH * factor + exit.x * scrollP);
        q.y(normY * PARALLAX_STRENGTH * factor + exit.y * scrollP);
      });
    };

    const onMouseMove = (e) => {
      const rect    = section.getBoundingClientRect();
      const centerX = rect.left + rect.width  / 2;
      const centerY = rect.top  + rect.height / 2;
      let normX = (e.clientX - centerX) / (rect.width  / 2);
      let normY = (e.clientY - centerY) / (rect.height / 2);
      normX = Math.max(-PARALLAX_CAP, Math.min(PARALLAX_CAP, normX));
      normY = Math.max(-PARALLAX_CAP, Math.min(PARALLAX_CAP, normY));
      state.normX = normX;
      state.normY = normY;
      updateTransforms();
    };

    const onScroll = () => {
      state.scrollP = Math.min(Math.max(window.scrollY / SCROLL_RANGE, 0), 1);
      updateTransforms();
      const opacity = 1 - state.scrollP;
      FADE_KEYS.forEach((key) => {
        if (opacityQTs[key]) opacityQTs[key](opacity);
      });
    };

    // — Looping drift animations (on inner wrappers, no conflict) —
    const driftConfigs = [
      ['cloudTopLeftDrift',    300, 18, 0],
      ['cloudTopRightDrift',  -300, 18, 2],
      ['cloudDrift',           -70, 11, 1],
      ['cloudForegroundDrift', 400, 20, 3],
      ['cloudLogoDrift',      -180, 10, 0.5],
    ];
    const driftAnims = driftConfigs.map(([key, x, dur, delay]) =>
      gsap.to(r[key], { x, duration: dur, repeat: -1, yoyo: true, ease: 'sine.inOut', delay })
    );

    const behindLogoDrift = gsap.to(r.cloudBehindLogoDrift, {
      x: 300, duration: 20, repeat: -1, yoyo: true, ease: 'power1.inOut',
    });

    const verticalAnims = [
      gsap.to(r.cloudDrift,         { y: -10, duration: 9,  repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5 }),
      gsap.to(r.cloudForegroundDrift,{ y: -8, duration: 11, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2   }),
    ];

    // — Entrance animation (plays once; listeners start after it finishes) —
    const cloudPopEls = [r.cloud, r.cloudForeground, r.cloudTopLeft, r.cloudTopRight, r.cloudBehindLogo, r.cloudLogo];

    gsap.fromTo(r[3], { x: -450, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0 });
    gsap.fromTo(r[2], { x:  450, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.25 });
    gsap.fromTo(r[4], { y:  220, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: 'power3.out', delay: 0.5 });
    cloudPopEls.forEach((el, i) => {
      if (el) gsap.fromTo(el,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(1.6)', delay: 0.9 + i * 0.08 }
      );
    });
    gsap.fromTo(logoImgRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'back.out(1.8)', delay: 1.0 }
    );

    // Add interaction listeners after entrance finishes (~2s)
    let listenersAdded = false;
    const timer = setTimeout(() => {
      section.addEventListener('mousemove', onMouseMove);
      window.addEventListener('scroll', onScroll);
      listenersAdded = true;
    }, 2000);

    return () => {
      clearTimeout(timer);
      if (listenersAdded) {
        section.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('scroll', onScroll);
      }
      driftAnims.forEach((a) => a.kill());
      verticalAnims.forEach((a) => a.kill());
      behindLogoDrift.kill();
    };
  }, []);

  return (
    <section className="landing-page" ref={sectionRef}>
      <div className="landing-parallax">
        <div className="landing-hill landing-hill-4" ref={(el) => (hillRefs.current[4] = el)} style={{ opacity: 0 }}>
          <img src="/Landscape%20assets/4.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-hill landing-hill-3" ref={(el) => (hillRefs.current[3] = el)} style={{ opacity: 0 }}>
          <img src="/Landscape%20assets/3.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-hill landing-hill-2" ref={(el) => (hillRefs.current[2] = el)} style={{ opacity: 0 }}>
          <img src="/Landscape%20assets/2.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-cloud" ref={(el) => (hillRefs.current.cloud = el)} style={{ opacity: 0 }}>
          <div className="landing-cloud-inner">
            <div ref={(el) => (hillRefs.current.cloudDrift = el)}>
              <img src="/Landscape%20assets/clouds/cloudhill.svg" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="landing-hill landing-hill-1" ref={(el) => (hillRefs.current[1] = el)}>
          <img src="/Landscape%20assets/1.svg" alt="" aria-hidden="true" />
        </div>
        <div className="landing-cloud landing-cloud-foreground" ref={(el) => (hillRefs.current.cloudForeground = el)} style={{ opacity: 0 }}>
          <div className="landing-cloud-inner landing-cloud-foreground-inner">
            <div ref={(el) => (hillRefs.current.cloudForegroundDrift = el)}>
              <img src="/Landscape%20assets/clouds/cloud%20foreground.svg" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="landing-cloud-behind-logo-wrap">
          <div className="landing-cloud-behind-logo" ref={(el) => (hillRefs.current.cloudBehindLogo = el)} style={{ opacity: 0 }}>
            <div ref={(el) => (hillRefs.current.cloudBehindLogoDrift = el)}>
              <img src="/Landscape%20assets/clouds/cloudbehindlogo.svg" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="landing-logo-wrap">
          <div className="landing-logo" ref={(el) => (hillRefs.current.logo = el)}>
            <img src="/Landscape%20assets/logo.svg" alt="Rp logo" ref={logoImgRef} style={{ opacity: 0 }} />
          </div>
        </div>
        <div className="landing-cloud-logo-wrap">
          <div className="landing-cloud-logo" ref={(el) => (hillRefs.current.cloudLogo = el)} style={{ opacity: 0 }}>
            <div ref={(el) => (hillRefs.current.cloudLogoDrift = el)}>
              <img src="/Landscape%20assets/clouds/cloud%20logo.svg" alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="landing-cloud-top landing-cloud-top-left" ref={(el) => (hillRefs.current.cloudTopLeft = el)} style={{ opacity: 0 }}>
          <div ref={(el) => (hillRefs.current.cloudTopLeftDrift = el)}>
            <img src="/Landscape%20assets/clouds/cloudtop.svg" alt="" aria-hidden="true" />
          </div>
        </div>
        <div className="landing-cloud-top landing-cloud-top-right" ref={(el) => (hillRefs.current.cloudTopRight = el)} style={{ opacity: 0 }}>
          <div ref={(el) => (hillRefs.current.cloudTopRightDrift = el)}>
            <img src="/Landscape%20assets/clouds/cloud.svg" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
