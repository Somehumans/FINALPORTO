import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './CustomCursor.css';

const CLICKABLE =
  'a, button, [role="button"], label, summary, input[type="checkbox"], input[type="radio"], select, .navbar-link, .navbar-brand, .project-card, .project-card-link, .landing-scroll-hint, .case-study-nav-link, .p2-nav-link';

const TEXT_INPUT =
  'input[type="text"], input[type="email"], input[type="search"], input[type="url"], input[type="password"], textarea';

const FROG_PATH =
  'M44.7053 5.71133C48.3089 0.494948 55.0753 -1.52394 60.6799 1.23769C66.6757 4.1923 69.1423 11.5344 66.3918 17.8852C70.5306 26.6517 72.4124 37.488 71.925 46.3119C71.3631 56.4822 68.5567 63.7113 62.9435 63.7113H9.05682C3.44369 63.7113 0.637237 56.4822 0.0753717 46.3119C-0.412086 37.4879 1.46867 26.6508 5.6076 17.8842C2.85796 11.5336 5.32584 4.19202 11.3215 1.23769C16.9259 -1.52368 23.6915 0.495134 27.2951 5.71133H44.7053Z';

const FrogIcon = ({ className, fill = '#1a1008' }) => (
  <svg
    className={className}
    viewBox="0 0 72 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d={FROG_PATH} fill={fill} />
  </svg>
);

const getCursorLabel = (el) => {
  if (!el) return '';
  const tagged = el.closest('[data-cursor-label]');
  return tagged?.getAttribute('data-cursor-label')?.trim() || '';
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const labelTextRef = useRef(null);
  const hoveringRef = useRef(false);
  const labelRef = useRef(false);
  const hiddenRef = useRef(false);
  const pos = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!finePointer.matches) return undefined;

    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const setHovering = (next) => {
      if (hoveringRef.current === next) return;
      hoveringRef.current = next;
      cursorRef.current?.classList.toggle('custom-cursor--hover', next);
    };

    const setLabel = (text) => {
      const hasLabel = !!text;
      if (labelRef.current === hasLabel && (!hasLabel || labelTextRef.current?.textContent === text)) {
        return;
      }
      labelRef.current = hasLabel;
      cursorRef.current?.classList.toggle('custom-cursor--label', hasLabel);
      if (labelTextRef.current) labelTextRef.current.textContent = text;
    };

    const setHidden = (next) => {
      if (hiddenRef.current === next) return;
      hiddenRef.current = next;
      cursorRef.current?.classList.toggle('custom-cursor--hidden', next);
    };

    const updateInteraction = (target) => {
      if (!(target instanceof Element)) return;

      const isText = !!target.closest(TEXT_INPUT);
      setHidden(isText);

      if (isText) {
        setHovering(false);
        setLabel('');
        return;
      }

      const clickable = target.closest(CLICKABLE);
      setHovering(!!clickable);
      setLabel(getCursorLabel(clickable));
    };

    const paintFrame = () => {
      rafId.current = 0;
      cursorRef.current?.style.setProperty(
        'transform',
        `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      );
    };

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      updateInteraction(e.target);
      if (!rafId.current) rafId.current = requestAnimationFrame(paintFrame);
    };

    const onLeave = () => setHidden(true);

    const onEnter = () => setHidden(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!enabled) return null;

  return createPortal(
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span className="custom-cursor__dot" />
      <FrogIcon className="custom-cursor__frog" />
      <span className="custom-cursor__label">
        <span ref={labelTextRef} className="custom-cursor__label-text" />
      </span>
    </div>,
    document.body
  );
};

export default CustomCursor;
