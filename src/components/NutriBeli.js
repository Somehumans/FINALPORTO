import React from "react";
import { Link } from "react-router-dom";
import "./Joey.css";
import "./NutriBeli.css";

const NutriBeli = () => {
  const tags = [
    "UX Design",
    "Speculative Design",
    "Figma",
    "FigBuild 2026",
    "Health Tech",
  ];

  return (
    <div className="nb-page">
      <section className="joey-hero-main">
        <div className="joey-hero-content">
          <div className="joey-hero-card">
            <img
              src="/nutribeli/cover.png"
              alt="NutriBeli cover — quantifying the sense your body has always had"
              className="joey-hero-image"
            />
          </div>
          <div className="joey-hero-text">
            <p className="joey-description">
              NutriBeli is a speculative wearable health platform that translates
              your body&apos;s internal signals into clear, actionable nutritional
              guidance. A passive biosensor wristband and intelligent companion app
              eliminate the guesswork of traditional nutrition tracking — giving you
              the one insight that matters most, right when you need it.
            </p>
            <div className="joey-tags">
              {tags.map((tag) => (
                <span key={tag} className="joey-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="case-study-document">
        <section className="joey-section white-bg">
          <div className="overview-content-layout">
            <div className="overview-text">
              <h2 className="overview-title">Overview</h2>
              <p className="overview-description">
                At its core, NutriBeli continuously tracks over 26 vitamins and
                minerals in real time, identifies what your body is missing, and
                immediately pairs that insight with personalised food recommendations
                to fix it. Not supplements. Not generic advice. Specific, tailored
                meals and ingredients matched to your deficiencies, your
                preferences, and your life.
              </p>
              <p className="overview-description">
                One in four people globally are iron deficient. Most have no idea.
                They just know they are tired. NutriBeli exists because the gap
                between feeling off and knowing why — and knowing exactly what to
                eat to feel better — is entirely solvable with the right technology.
              </p>
              <div className="overview-tags">
                <span className="overview-tag">FigBuild 2026</span>
                <span className="overview-tag">Team Project</span>
                <span className="overview-tag">Speculative Design</span>
              </div>
            </div>
            <div className="overview-visual">
              <img
                src="/aboutme/Nutribeli.svg"
                alt="NutriBeli logo — Beli character with NutriBeli wordmark"
                className="overview-image"
              />
            </div>
          </div>
        </section>

        <section className="joey-section my-role-section">
          <div className="section-content-split">
            <div className="my-role-text">
              <h2 className="section-title-white">The team</h2>
              <div className="role-category">
                <h3 className="role-subtitle">Speculative product design</h3>
                <ul className="role-list">
                  <li>Designed the passive biosensor wristband + companion app system</li>
                  <li>Built the full UI flow in Figma — dashboard, analytics, food recs</li>
                </ul>
              </div>
              <div className="role-category">
                <h3 className="role-subtitle">Companion-led UX</h3>
                <ul className="role-list">
                  <li>Created Beli — a warm in-app guide surfacing one priority insight per day</li>
                  <li>Used Rey&apos;s story to make iron deficiency relatable before naming the science</li>
                </ul>
              </div>
              <div className="role-category">
                <h3 className="role-subtitle">Team</h3>
                <ul className="role-list">
                  <li>Rehan Punjani, Angel Hsieh, Sarah J.X. Wang, Mateusz Matyskiewicz</li>
                </ul>
              </div>
            </div>
            <div className="my-role-image">
              <img
                src="/aboutme/Nutribeli.svg"
                alt="NutriBeli logo — Beli character with NutriBeli wordmark"
                className="role-image"
              />
            </div>
          </div>
        </section>

        <section className="project-prompt-banner nb-prompt-banner">
          <div className="banner-content">
            <p className="banner-text">
              Stop Guessing. Start Knowing. — Design a speculative wearable health
              platform that turns passive nutritional signals into clear, actionable
              food guidance with zero manual logging.
            </p>
            <span className="banner-tag">
              <span className="banner-tag-dot" />
              FigBuild 2026
            </span>
          </div>
        </section>

        <section className="joey-section white-bg problem-core-hop">
          <div className="problem-row nb-text-row">
            <div className="problem-text">
              <h2 className="problem-title">Inspiration</h2>
              <h3 className="problem-subtitle">
                Why do so many people feel consistently off?
              </h3>
              <p className="problem-description">
                It started with a feeling most of us know but rarely question — that
                low-grade exhaustion, the brain fog you chalk up to a bad sleep, the
                sense of running at half capacity you eventually accept as normal. The
                answer kept coming back to nutrition: the nutrients people are silently
                missing without ever knowing it.
              </p>
              <p className="problem-description">
                The problem was not a lack of caring. It was a lack of legibility.
                Your body constantly generates data about its nutritional state through
                interoception — but that signal is blunt, vague, and easy to dismiss.
                What if you could actually read what your body was trying to tell you?
              </p>
            </div>
          </div>
        </section>

        <section className="what-search-section">
          <h2 className="what-search-title">What we learned</h2>
          <ul className="what-search-list">
            <li>
              <strong>Nutrition is underleveraged in wearables</strong> Fitness trackers
              monitor cardiovascular metrics but almost entirely ignore what fuels those
              metrics in the first place.
            </li>
            <li>
              <strong>Friction kills nutrition apps</strong> Manual logging is tedious,
              inconsistent, and easy to abandon. Effortless tracking changes the entire
              value proposition.
            </li>
            <li>
              <strong>Interoception is the key sense</strong> Your body already knows
              something is wrong — NutriBeli extends interoception so you can read that
              signal clearly and act on it.
            </li>
          </ul>
        </section>

        <section className="joey-section white-bg problem-core-hop">
          <div className="problem-row nb-text-row">
            <div className="problem-text">
              <h2 className="problem-title">How we built it</h2>
              <h3 className="problem-subtitle">The wristband</h3>
              <p className="problem-description">
                The wristband sits passively on the wrist and uses biosensors to
                detect nutritional compounds from food as it is consumed. No
                scanning. No photographing. No input of any kind. It runs
                continuously in the background and syncs data to the companion app
                in real time.
              </p>
            </div>
          </div>
        </section>

        <section className="nb-slide-section">
          <img
            src="/nutribeli/band.png"
            alt="The NutriBeli band reads the nutritional composition of food as you eat through embedded biosensors"
            className="nb-slide-image"
          />
        </section>

        <section className="joey-section white-bg problem-core-hop">
          <div className="problem-row nb-text-row">
            <div className="problem-text">
              <h2 className="problem-title">The companion app</h2>
              <h3 className="problem-subtitle">One priority insight per day</h3>
              <p className="problem-description">
                All user interaction happens in the app, designed around Beli — a
                warm, encouraging in-app companion who surfaces insights without
                overwhelming the user. The one thing that matters most right now,
                explained simply, with a clear action attached.
              </p>
              <p className="problem-description">
                We designed the full user flow covering the home dashboard, analytics
                views, food recommendations, allergy and preference logging, and the
                expanded food detail screen. Every screen was built around the
                principle that more data should never mean more noise.
              </p>
            </div>
          </div>
        </section>

        <section className="nb-slide-section">
          <img
            src="/nutribeli/app.png"
            alt="The NutriBeli app tells you exactly what's missing and exactly what to eat to fix it"
            className="nb-slide-image"
          />
        </section>

        <section className="what-search-section">
          <h2 className="what-search-title">Challenges</h2>
          <ul className="what-search-list">
            <li>
              <strong>Designing for a sense people do not know they have</strong>{" "}
              Interoception is unfamiliar to most users. We grounded the concept in
              Rey&apos;s relatable iron-deficiency story before naming the science.
            </li>
            <li>
              <strong>Balancing depth with simplicity</strong> Over twenty-six
              vitamins and minerals each have different targets and symptom profiles.
              Beli filters the noise — one priority insight per day, not a firehose.
            </li>
            <li>
              <strong>Designing for vulnerability</strong> NutriBeli is for people who
              are genuinely unwell and do not know why. Beli had to feel supportive
              without clinical, informative without alarming.
            </li>
          </ul>
        </section>

        <section className="outcome-section">
          <div className="outcome-two-col">
            <div className="outcome-left">
              <h2 className="outcome-title">Outcome &amp; what we learned</h2>
              <p className="outcome-body">
                NutriBeli reinforced that the best health tool is one you never have
                to think about. Passive tracking, a single daily insight, and food
                recommendations matched to real deficiencies — not generic advice —
                became the through-line across wristband and app.
              </p>
              <p className="outcome-body">
                Built with Figma as a speculative design project for FigBuild 2026.
              </p>
              <a
                href="https://devpost.com/software/nutribeli-automatic-nutrition-zero-effort"
                className="outcome-watch-btn nb-devpost-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Devpost
              </a>
            </div>
            <div className="outcome-right">
              <div className="case-study-media case-study-media--lg">
                <img
                  src="/aboutme/Nutribeli.svg"
                  alt="NutriBeli — automatic nutrition, zero effort"
                  className="nb-outcome-image"
                />
              </div>
            </div>
          </div>
        </section>

        <nav className="nb-case-nav" aria-label="Case study navigation">
          <Link to="/" className="nb-nav-link">
            Back to home
          </Link>
          <Link to="/casestudy-fieldmice" className="nb-nav-link nb-nav-link-next">
            Next: Field Mice
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default NutriBeli;
