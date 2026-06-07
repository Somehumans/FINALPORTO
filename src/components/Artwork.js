import React, { useEffect, useRef, useState } from 'react';
import './Artwork.css';

export const ARTWORK = [
  { id: 1, src: '/artwork/frieren-field.png', alt: 'Frieren standing in a bright green field' },
  { id: 2, src: '/artwork/fantasy-battle.png', alt: 'Fantasy battle scene with a masked sorcerer' },
  { id: 3, src: '/artwork/me4.png', alt: 'Satoru Gojo flying through a tunnel' },
  { id: 4, src: '/artwork/me1.png', alt: 'Ryomen Sukuna collage with fiery orange accents' },
  { id: 5, src: '/artwork/me2.png', alt: 'Gurren Lagann mechs in an explosive action scene' },
  { id: 6, src: '/artwork/me3.png', alt: 'Surreal illustration of a figure floating among crying cherubs' },
  { id: 7, src: '/artwork/me5.png', alt: 'Mahito and Yuji Itadori in a dramatic face-off' },
];

const PAN_SPEED = 28; // px per second — slow drift

const Artwork = () => {
  const trackRef = useRef(null);
  const [panDuration, setPanDuration] = useState(120);
  const pieces = [...ARTWORK, ...ARTWORK];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const update = () => {
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        setPanDuration(halfWidth / PAN_SPEED);
      }
    };

    update();

    const images = track.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.complete) img.addEventListener('load', update, { once: true });
    });

    const observer = new ResizeObserver(update);
    observer.observe(track);
    window.addEventListener('resize', update);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="artwork" className="artwork">
      <div className="artwork-inner">
        <div className="artwork-header">
          <h2 className="artwork-title">
            Drawings I did <span className="artwork-highlight">for fun</span>
          </h2>
        </div>
      </div>

      <div className="artwork-track-wrap">
        <div
          ref={trackRef}
          className="artwork-track"
          style={{ animationDuration: `${panDuration}s` }}
        >
          {pieces.map((piece, i) => (
            <article key={`${piece.id}-${i}`} className="artwork-card">
              <img
                src={piece.src}
                alt={piece.alt}
                className="artwork-card-img"
                loading="lazy"
                draggable="false"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Artwork;
