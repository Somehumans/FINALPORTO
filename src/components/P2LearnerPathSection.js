import React from "react";
import "./P2LearnerPathSection.css";

/**
 * New learner path (first-time) flowchart.
 * Copy the SVG from Ref folder to public/new-learner-path.svg (or update src below).
 */
const P2LearnerPathSection = () => (
  <section className="p2-learner-path-section">
    <h2 className="p2-learner-path-title">New learner path (first-time)</h2>
    <div className="p2-learner-path-wrap">
      <img
        src="/new-learner-path.svg"
        alt="Flowchart: Landing page → Continue as guest / Sign up → Pick program → Quick skill check → Pick learning goals → Home / Dashboard → Choose a lesson → Lesson intro → Practice questions → Instant feedback → End-of-lesson summary → XP reward + streak update → Back to Home"
        className="p2-learner-path-svg"
      />
    </div>
  </section>
);

export default P2LearnerPathSection;
