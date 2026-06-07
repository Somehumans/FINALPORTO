import React from "react";
import { Link } from "react-router-dom";
import "./FieldMice.css";

const CARDS = Array.from({ length: 11 }, (_, i) => ({
  num: i + 1,
  src: `/fieldmice/card-${i + 1}.png`,
  alt: `Field Mice card ${i + 1}`,
}));

const TAGS = [
  "Game Design",
  "Development",
  "Illustration",
  "JavaScript",
  "Multiplayer",
];

const FieldMice = () => {
  return (
    <div className="fm-page">
      <section className="fm-hero">
        <div className="fm-hero-inner">
          <div className="fm-logo-wrap">
            <img
              src="/fieldmice/logo.svg"
              alt="Field Mice - 21 logo"
              className="fm-logo"
            />
          </div>
          <p className="fm-lede">
            A free browser card game starring field mice. Hit or stay to reach 21,
            play trump cards, bet Micecoin, visit the in-match shop, and battle
            friends online — no download required.
          </p>
          <div className="fm-tags">
            {TAGS.map((tag) => (
              <span key={tag} className="fm-tag">
                {tag}
              </span>
            ))}
          </div>
          <a
            href="https://fieldmice.org"
            className="fm-play-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Play at fieldmice.org
          </a>
        </div>
      </section>

      <div className="fm-body">
        <section className="fm-section">
          <h2 className="fm-heading">Overview</h2>
          <p className="fm-text">
            Field Mice - 21 reimagines a classic hitting game with illustrated
            mouse characters, rising stakes, and special trump cards that twist
            each round. I designed and built the full experience — from the card
            art direction and lobby flow to online rooms, practice mode, and a
            Micecoin economy where winning rounds actually pays you back.
          </p>
          <p className="fm-text">
            The deck runs 1 through 11, each card its own little scene in a
            bold, flat illustrated style. Trump cards add modifiers and actions;
            the shop lets you spend MC mid-match. Create a room, share a code,
            or practice against AI until you are ready to play for real.
          </p>
        </section>

        <section className="fm-section">
          <h2 className="fm-heading">The deck</h2>
          <p className="fm-text fm-text--center">
            Eleven numbered cards — each a field mouse in its own moment — plus
            trump power cards for modifiers and rule-bending actions.
          </p>
          <ul className="fm-card-grid">
            {CARDS.map((card) => (
              <li key={card.num} className="fm-card-item">
                <img src={card.src} alt={card.alt} className="fm-card-img" />
              </li>
            ))}
            <li className="fm-card-item fm-card-item--trump">
              <img
                src="/fieldmice/trump-back.png"
                alt="Field Mice trump card back"
                className="fm-card-img"
              />
              <span className="fm-card-label">Trump cards</span>
            </li>
          </ul>
        </section>

        <nav className="fm-nav" aria-label="Case study navigation">
          <Link to="/" className="fm-nav-link">
            Back to home
          </Link>
          <Link to="/casestudy-joey" className="fm-nav-link fm-nav-link--next">
            Next: Joey
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default FieldMice;
