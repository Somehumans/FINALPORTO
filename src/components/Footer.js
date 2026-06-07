import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const goTo = (id) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goHome = () => {
    if (!isHome) {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <img
        src="/footer.svg"
        alt=""
        className="footer-shape"
        aria-hidden="true"
        draggable="false"
      />

      <div className="footer-body">
        <div className="footer-inner">
          <div className="footer-cta">
            <h2 className="footer-headline">
              UX, marketing, &amp; brand with a little{' '}
              <span className="footer-headline-accent">magic in every leap.</span>
            </h2>

            <p className="footer-lede">
              Student designer and developer building beautiful, functional experiences.
              Feel free to{' '}
              <a className="footer-inline-link" href="mailto:hello@rehanpunjani.com">
                send a message
              </a>{' '}
              — I&apos;d love to hear from you.
            </p>
          </div>

          <div className="footer-bottom">
            <div className="footer-brand">
              <button type="button" className="footer-logo-btn" onClick={goHome}>
                <img
                  src="/Landscape%20assets/logo.svg"
                  alt="Rehan Punjani"
                  className="footer-logo"
                />
              </button>
              <p className="footer-copy">&copy; 2026 Rehan Punjani. All Rights Reserved.</p>
            </div>

            <nav className="footer-nav" aria-label="Footer">
              <div className="footer-nav-col">
                <h3 className="footer-nav-heading">Connect</h3>
                <a className="footer-nav-link" href="mailto:hello@rehanpunjani.com">
                  Send a Message
                </a>
                <a
                  className="footer-nav-link"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>

              <div className="footer-nav-col">
                <h3 className="footer-nav-heading">Work</h3>
                <button type="button" className="footer-nav-link" onClick={() => goTo('case-studies')}>
                  Projects
                </button>
                <a className="footer-nav-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </div>

              <div className="footer-nav-col">
                <h3 className="footer-nav-heading">More</h3>
                <button type="button" className="footer-nav-link" onClick={() => goTo('about-me')}>
                  About
                </button>
                <button type="button" className="footer-nav-link" onClick={() => goTo('artwork')}>
                  Drawings
                </button>
                <a
                  className="footer-nav-link"
                  href="https://fieldmice.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Game
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
