import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getLogoMorphProgress,
  easeInOutQuart,
} from '../utils/logoMorph';
import './Navbar.css';

const SCROLL_BG = 50;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [logoPhase, setLogoPhase] = useState('hidden'); // hidden | morphing | settled
  const brandRef = useRef(null);
  const anchorRef = useRef(null);
  const navLogoMetricsRef = useRef(null);
  const morphCaptureRef = useRef(null);
  const logoPhaseRef = useRef('hidden');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    let rafId = 0;
    const brand = () => brandRef.current;

    const clearBrandMorphStyles = (el) => {
      el.style.position = '';
      el.style.left = '';
      el.style.top = '';
      el.style.zIndex = '';
      el.style.opacity = '';
      el.style.transform = '';
    };

    const measureNavWidth = (brandImg) => {
      if (navLogoMetricsRef.current) return navLogoMetricsRef.current.width;
      if (!brandImg?.naturalWidth) return null;
      const style = window.getComputedStyle(brandImg);
      const height = parseFloat(style.height) || 32;
      const width = height * (brandImg.naturalWidth / brandImg.naturalHeight);
      navLogoMetricsRef.current = { width };
      return width;
    };

    const setPhase = (next) => {
      if (logoPhaseRef.current === next) return;
      logoPhaseRef.current = next;
      setLogoPhase(next);
    };

    const updateScroll = () => {
      rafId = 0;
      const y = window.scrollY;
      const el = brand();
      setScrolled(y > SCROLL_BG);

      if (!el) return;

      if (location.pathname !== '/') {
        morphCaptureRef.current = null;
        setPhase('settled');
        clearBrandMorphStyles(el);
        return;
      }

      const rawProgress = getLogoMorphProgress(y);
      const progress = easeInOutQuart(rawProgress);
      const anchor = anchorRef.current;
      const brandImg = el.querySelector('.navbar-logo');

      if (rawProgress <= 0) {
        morphCaptureRef.current = null;
        setPhase('hidden');
        clearBrandMorphStyles(el);
        return;
      }

      if (rawProgress >= 1) {
        morphCaptureRef.current = null;
        setPhase('settled');
        clearBrandMorphStyles(el);
        return;
      }

      setPhase('morphing');

      const heroImg = document.querySelector('.landing-logo img');
      if (!heroImg || !anchor || !brandImg) return;

      if (!morphCaptureRef.current) {
        const heroRect = heroImg.getBoundingClientRect();
        const navWidth = measureNavWidth(brandImg) || heroRect.width * 0.28;
        if (heroRect.width > 0) {
          morphCaptureRef.current = {
            startX: heroRect.left + heroRect.width / 2,
            startY: heroRect.top + heroRect.height / 2,
            scaleStart: heroRect.width / navWidth,
          };
        }
      }

      if (!morphCaptureRef.current) return;

      const anchorRect = anchor.getBoundingClientRect();
      const endX = anchorRect.left + anchorRect.width / 2;
      const endY = anchorRect.top + anchorRect.height / 2;
      const { startX, startY, scaleStart } = morphCaptureRef.current;

      const x = startX + (endX - startX) * progress;
      const morphY = startY + (endY - startY) * progress;
      const scale = scaleStart + (1 - scaleStart) * progress;

      el.style.position = 'fixed';
      el.style.left = `${x}px`;
      el.style.top = `${morphY}px`;
      el.style.zIndex = '10001';
      el.style.opacity = '1';
      el.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateScroll);
    };

    const onResize = () => {
      navLogoMetricsRef.current = null;
      morphCaptureRef.current = null;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateScroll);
    };

    const onLogoLoad = () => {
      navLogoMetricsRef.current = null;
      morphCaptureRef.current = null;
      updateScroll();
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    brand()?.querySelector('.navbar-logo')?.addEventListener('load', onLogoLoad);

    return () => {
      navLogoMetricsRef.current = null;
      morphCaptureRef.current = null;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      brand()?.querySelector('.navbar-logo')?.removeEventListener('load', onLogoLoad);
      if (rafId) cancelAnimationFrame(rafId);
      const el = brand();
      if (el) clearBrandMorphStyles(el);
    };
  }, [location.pathname]);

  const goHome = () => {
    if (!isHome) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (id) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const logoVisible = !isHome || logoPhase !== 'hidden';

  return (
    <nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''} ${isHome ? 'navbar--hero' : ''}`}
    >
      <div className="navbar-inner">
        <span ref={anchorRef} className="navbar-logo-anchor" aria-hidden="true" />

        <div className="navbar-side navbar-side--left">
          <button type="button" className="navbar-link" onClick={() => scrollToSection('case-studies')}>
            Work
          </button>
          <a
            className="navbar-link"
            href="https://fieldmice.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Game
          </a>
        </div>

        <div className={`navbar-center ${logoVisible ? 'navbar-center--visible' : ''}`}>
          <button
            ref={brandRef}
            type="button"
            className={[
              'navbar-brand',
              logoVisible && 'navbar-brand--visible',
              logoPhase === 'morphing' && 'navbar-brand--morphing',
            ].filter(Boolean).join(' ')}
            onClick={goHome}
            aria-label="Rehan Punjani home"
            aria-hidden={!logoVisible}
            tabIndex={logoVisible ? 0 : -1}
          >
            <img src="/Landscape%20assets/logo.svg" alt="" className="navbar-logo" />
          </button>
        </div>

        <div className="navbar-side navbar-side--right">
          <button type="button" className="navbar-link" onClick={() => scrollToSection('about-me')}>
            About me
          </button>
          <a className="navbar-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
