import React from 'react';
import { Link } from 'react-router-dom';
import './Project2.css';

const Project2 = () => {
  const tags = [
    'Marketing',
    'Design',
    'Development',
    'Animation',
    'Character Design',
    'SEO/SEM',
    'Video Editing',
  ];

  return (
    <div className="p2-page">
      {/* Header */}
      <header className="p2-header">
        <span className="p2-logo">DinoCode</span>
        <nav className="p2-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Container 1: Hero – like Joey (whole box: visual + description + tags) */}
      <section className="p2-hero">
        <div className="p2-hero-content">
          <div className="p2-hero-visual">
            <div className="p2-hero-visual-inner">
              <div className="p2-hero-logo-wrap">
                <div className="p2-dino-icon" aria-hidden="true" />
                <span className="p2-hero-logo-divider" aria-hidden="true" />
                <span className="p2-logo-text">DinoCode</span>
              </div>
              <div className="p2-hero-phones-wrap">
                <div className="p2-hero-phone p2-hero-phone--back" aria-hidden="true" />
                <div className="p2-hero-phone p2-hero-phone--front" aria-hidden="true" />
              </div>
            </div>
          </div>
          <div className="p2-hero-text">
            <p className="p2-hero-description">
              [Project description placeholder: one or two sentences about what this platform is, who it’s for, and the goal.]
            </p>
            <div className="p2-hero-tags">
              {tags.map((tag, index) => (
                <span key={index} className="p2-hero-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Container 2: Case study document (like Joey’s case-study-document) */}
      <div className="p2-case-study-document">
        {/* First section: audience pills + Overview + 2 phone mockups (graphic placeholders) */}
        <section className="p2-section p2-first-section">
          <div className="p2-audience-pills">
            <button type="button" className="p2-pill p2-pill--light">For a Quick Skim</button>
            <button type="button" className="p2-pill p2-pill--dark">For Creative Leads</button>
            <button type="button" className="p2-pill p2-pill--dark">For Marketing Leads</button>
          </div>
          <div className="p2-overview-row">
            <div className="p2-overview-text">
              <h2 className="p2-overview-title">Overview</h2>
              <p className="p2-body">
                Our team set out to solve a simple but familiar problem: beginners often lose motivation when learning front-end coding due to dry or overwhelming resources. We believed there was a better way. DinoCode reimagines how people learn HTML, CSS, and JavaScript by combining short-form lessons, a fun quiz system, and light social features to make coding stick.
              </p>
              <div className="p2-overview-tags">
                <span className="p2-overview-tag">Lead Designer</span>
                <span className="p2-overview-tag">8 weeks</span>
                <span className="p2-overview-tag">Team Project</span>
              </div>
            </div>
            <div className="p2-green-box p2-phones-box">
              <div className="p2-graphic-placeholder p2-phone-mockup" title="HTML course screen (add graphic from Ref)" aria-hidden="true" />
              <div className="p2-graphic-placeholder p2-phone-mockup" title="CSS course screen (add graphic from Ref)" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* My role: black box, text left + logo & team placeholders right */}
        <section className="p2-myrole-block">
          <div className="p2-myrole-content">
            <div className="p2-myrole-text">
              <h2 className="p2-myrole-title">My role</h2>
              <div className="p2-role-category">
                <h3 className="p2-role-subtitle">Led UI design &amp; flow</h3>
                <ul className="p2-role-list">
                  <li>Built quiz and lesson flow layouts from scratch</li>
                  <li>Designed the onboarding proficiency test</li>
                </ul>
              </div>
              <div className="p2-role-category">
                <h3 className="p2-role-subtitle">Collaborated on branding</h3>
                <ul className="p2-role-list">
                  <li>Helped define DinoCode&apos;s personality and tone</li>
                </ul>
              </div>
              <div className="p2-role-category">
                <h3 className="p2-role-subtitle">Iterated &amp; shipped assets</h3>
                <ul className="p2-role-list">
                  <li>Adjusted UI components and user flows based on testing</li>
                </ul>
              </div>
            </div>
            <div className="p2-myrole-visual">
              <div className="p2-graphic-placeholder p2-logo-panel" title="DinoCode logo (add graphic from Ref)" aria-hidden="true" />
              <div className="p2-team-row">
                <div className="p2-team-member"><div className="p2-graphic-placeholder p2-avatar" aria-hidden="true" /><span>Bruno</span></div>
                <div className="p2-team-member"><div className="p2-graphic-placeholder p2-avatar" aria-hidden="true" /><span>Diego</span></div>
                <div className="p2-team-member"><div className="p2-graphic-placeholder p2-avatar" aria-hidden="true" /><span className="p2-name-highlight">Rehan</span></div>
                <div className="p2-team-member"><div className="p2-graphic-placeholder p2-avatar" aria-hidden="true" /><span>Reagan</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Project prompt banner – same as Joey, different colour, no tag */}
        <section className="project-prompt-banner p2-prompt-banner">
          <div className="banner-content">
            <p className="banner-text">
              Design and develop a web/mobile learning platform for beginner coders that uses gamified challenges to build consistent habits.
            </p>
          </div>
        </section>

        {/* What's the problem? + The core insight + DinoCode mockup block (same structure as Joey, placeholders) */}
        <section className="p2-problem-core-hop">
          <div className="p2-problem-row">
            <div className="p2-problem-image-placeholder" title="Problem image (add graphic from Ref)" aria-hidden="true" />
            <div className="p2-problem-text">
              <h2 className="p2-problem-title">What&apos;s the problem?</h2>
              <h3 className="p2-problem-subtitle">Learning to code feels confusing &amp; boring</h3>
              <p className="p2-problem-description">
                Many new learners quit early not because of difficulty, but because of a lack of clear progress or feedback. They don&apos;t know where to start, what to expect, or if they&apos;re improving. Without motivation and clarity, engagement drops fast.
              </p>
            </div>
          </div>
          <div className="p2-core-hop-row">
            <div className="p2-core-insight-block">
              <h2 className="p2-problem-title">The core insight</h2>
              <h3 className="p2-problem-subtitle">Make coding feel like winning</h3>
              <p className="p2-problem-description">
                Instead of creating another tutorial-heavy platform, I designed around what makes people feel progress: small wins, visual feedback, and friendly pacing. DinoCode doesn&apos;t remove the work, it makes the process rewarding.
              </p>
            </div>
            <div className="p2-hop-block">
              <div className="p2-hop-logo" aria-hidden="true">
                <span className="p2-hop-dino" />
                <span className="p2-hop-brand">DinoCode</span>
              </div>
              <div className="p2-hop-phone-placeholder" title="App mockup (add graphic from Ref)" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Lets ask the people for some help (same structure as Joey, creature placeholder from Ref) */}
        <section className="p2-ask-people-card">
          <div className="p2-ask-people-inner">
            <div className="p2-ask-people-content">
              <h2 className="p2-ask-people-title">Lets ask the people for some help</h2>
              <p className="p2-ask-people-desc">
                I ran informal user interviews and usability testing with beginner-level designers and developers. We wanted to know: what stops you from learning consistently?
              </p>
            </div>
            <div className="p2-ask-people-creature" title="Creature illustration (add SVG from Ref)" aria-hidden="true" />
          </div>
        </section>

        {/* What my search revealed – two columns, bold phrase + text */}
        <section className="p2-what-search-section">
          <h2 className="p2-what-search-title">What my search revealed</h2>
          <ul className="p2-what-search-list">
            <li><strong>Coding feels too confusing</strong> Syntax, terminology, and abstract concepts overwhelmed beginners.</li>
            <li><strong>It&apos;s not fun</strong> Learning felt like homework, not an engaging activity.</li>
            <li><strong>It&apos;s too hard</strong> Tutorials moved too fast, leaving users lost and frustrated.</li>
            <li><strong>I don&apos;t know if I&apos;m improving</strong> No clear progress indicators or celebration of small wins.</li>
            <li><strong>I&apos;m scared to mess up</strong> Fear of errors and not knowing where to get help stopped them from trying.</li>
            <li><strong>I want to know what I&apos;ll learn</strong> Learners needed upfront clarity on lesson objectives and outcomes.</li>
          </ul>
        </section>

        {/* Research graph – Learning barriers & Motivation factors (Ref: SVG in Ref) */}
        <section className="p2-graph-section">
          <div className="p2-graph-row">
            <div className="p2-graph-panel">
              <h3 className="p2-graph-panel-title">Learning barriers</h3>
              <p className="p2-graph-panel-subtitle">Why beginners quit coding (% of users)</p>
              <div className="p2-graph-bars">
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Too confusing (syntax, terminology)</span>
                    <span className="p2-bar-count">11/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--purple-92" style={{ width: '92%' }}><span>92%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Too hard / moves too fast</span>
                    <span className="p2-bar-count">10/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--purple-83" style={{ width: '83%' }}><span>83%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Feels intimidating or scary</span>
                    <span className="p2-bar-count">9/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--purple-75" style={{ width: '75%' }}><span>75%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Not fun / feels like homework</span>
                    <span className="p2-bar-count">8/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--purple-67" style={{ width: '67%' }}><span>67%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Don&apos;t know if I&apos;m making progress</span>
                    <span className="p2-bar-count">7/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--purple-58" style={{ width: '58%' }}><span>58%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p2-graph-panel">
              <h3 className="p2-graph-panel-title">Motivation factors</h3>
              <p className="p2-graph-panel-subtitle">Rated as important or essential (%)</p>
              <div className="p2-graph-bars">
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Clear lesson goals before starting</span>
                    <span className="p2-bar-count">12/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--green-100" style={{ width: '100%' }}><span>100%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Visual progress tracking (XP, streaks)</span>
                    <span className="p2-bar-count">12/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--green-100" style={{ width: '100%' }}><span>100%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Instant feedback on quiz answers</span>
                    <span className="p2-bar-count">11/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--green-92" style={{ width: '92%' }}><span>92%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Friendly tone / encouraging mascot</span>
                    <span className="p2-bar-count">10/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--green-83 p2-bar-fill--dark-text" style={{ width: '83%' }}><span>83%</span></div>
                  </div>
                </div>
                <div className="p2-bar-item">
                  <div className="p2-bar-top">
                    <span className="p2-bar-label">Ability to replay lessons for mastery</span>
                    <span className="p2-bar-count">9/12</span>
                  </div>
                  <div className="p2-bar-track">
                    <div className="p2-bar-fill p2-bar-fill--green-75 p2-bar-fill--dark-text" style={{ width: '75%' }}><span>75%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key takeaways from my research – single dark green container, 3 cards (Ref) */}
        <section className="p2-key-takeaways-section">
          <h2 className="p2-key-takeaways-title">Key takeaways from my research</h2>
          <div className="p2-key-takeaways-card">
            <div className="p2-takeaway-item">
              <div className="p2-takeaway-icon" aria-hidden="true">
                <span className="p2-takeaway-icon-symbol" aria-hidden="true">🔥</span>
              </div>
              <h3 className="p2-takeaway-heading">Progress is motivation</h3>
              <p className="p2-takeaway-line1">Learners stay when they can see progress.</p>
              <p className="p2-takeaway-line2">Progress bars, streaks, and clear &quot;what&apos;s next&quot; cues keep beginners moving.</p>
            </div>
            <div className="p2-takeaway-item">
              <div className="p2-takeaway-icon" aria-hidden="true">
                <span className="p2-takeaway-icon-symbol" aria-hidden="true">💡</span>
              </div>
              <h3 className="p2-takeaway-heading">Clarity reduces friction</h3>
              <p className="p2-takeaway-line1">Beginners learn faster when the next step is obvious.</p>
              <p className="p2-takeaway-line2">Clear lesson goals, visible CTAs, and readable prompts prevent users from getting stuck.</p>
            </div>
            <div className="p2-takeaway-item">
              <div className="p2-takeaway-icon" aria-hidden="true">
                <span className="p2-takeaway-icon-symbol" aria-hidden="true">🧭</span>
              </div>
              <h3 className="p2-takeaway-heading">Guidance beats scoring</h3>
              <p className="p2-takeaway-line1">Feedback builds confidence more than a grade.</p>
              <p className="p2-takeaway-line2">Explain why an answer was wrong and what to do next, then link back to the right lesson.</p>
            </div>
          </div>
        </section>

        {/* So who is DinoCode for? – persona (Ref: SVG in ref folder) */}
        <section className="p2-who-is-for-section">
          <h2 className="p2-who-is-for-title">So who is DinoCode for?</h2>
          <div className="p2-persona-entry">
            <div className="p2-persona-avatar" title="Persona avatar (Ref SVG)" aria-hidden="true" />
            <div className="p2-persona-content">
              <p className="p2-persona-name">Alex</p>
              <p className="p2-persona-role">Beginner learner</p>
              <p className="p2-persona-desc">Wants coding to feel approachable. Needs clear lesson goals, obvious navigation, and fast wins without getting lost.</p>
            </div>
          </div>
        </section>

        {/* New learner path (first-time) – flowchart (Ref: SVG in ref folder) */}
        <section className="p2-learner-path-section">
          <div className="p2-learner-path-panel">
            <h3 className="p2-learner-path-panel-title">New learner path (first-time)</h3>
            <div className="p2-learner-path-steps">
              <div className="p2-path-step">Landing page</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Continue as guest / Sign up</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Pick program (HTML / CSS / JS)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Quick skill check (placement quiz)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Pick learning goals (time/day + focus)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Home / Dashboard</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Choose a lesson</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Lesson Intro (What you&apos;ll learn)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Practice questions</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Instant feedback (hints/kudos)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">End-of-lesson summary (why + next step)</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">XP reward + streak update</div>
              <div className="p2-path-arrow" aria-hidden="true">↓</div>
              <div className="p2-path-step">Back to Home</div>
            </div>
          </div>
        </section>

        {/* LOFI (tradesworker) – wireframe screens */}
        <section className="p2-lofi-section">
          <img
            src="/dinocode-lofi-screens.svg"
            alt="Lo-fi wireframes: Welcome, Daily Challenge, Lessons, Code Challenge, Profile screens"
            className="p2-lofi-svg"
          />
        </section>

        {/* What went wrong – context + feedback box (Ref: character SVG in ref folder) */}
        <section className="p2-what-went-wrong-section">
          <h2 className="p2-what-went-wrong-title">What went wrong</h2>
          <h3 className="p2-what-went-wrong-subtitle">Context</h3>
          <p className="p2-what-went-wrong-context">
            At the time, I were still inexperienced as a designer, so my first HiFi leaned more on a &quot;cool concept&quot; rather than usable UX.
          </p>
          <div className="p2-feedback-box">
            <div className="p2-feedback-inner">
              <div className="p2-feedback-content">
                <h4 className="p2-feedback-heading">The feedback we received:</h4>
                <ul className="p2-feedback-list">
                  <li>
                    <span className="p2-feedback-item-title">Unclear UI labels:</span>
                    <span className="p2-feedback-item-desc">key actions like &quot;Start Lesson&quot; and &quot;Continue Learning&quot; weren&apos;t obvious.</span>
                  </li>
                  <li>
                    <span className="p2-feedback-item-title">Confusing flow:</span>
                    <span className="p2-feedback-item-desc">Users weren&apos;t sure where to go after completing a lesson, and paths like the progress tracker felt disconnected.</span>
                  </li>
                  <li>
                    <span className="p2-feedback-item-title">Weak visual hierarchy:</span>
                    <span className="p2-feedback-item-desc">Too many elements competed for attention (ex: colorful badges / thick progress bars / low-contrast text), so important content didn&apos;t stand out.</span>
                  </li>
                  <li>
                    <span className="p2-feedback-item-title">Hidden navigation:</span>
                    <span className="p2-feedback-item-desc">Core pages like Profile, Achievements, and Progress were hard to find.</span>
                  </li>
                </ul>
              </div>
              <div className="p2-feedback-character" title="Character illustration (add SVG from Ref)" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* Original design – four screen mockups with feedback (Ref: Ref/New/Frame 441.svg → public/dinocode-original-design.svg) */}
        <section className="p2-original-design-section">
          <h2 className="p2-original-design-title">Original design</h2>
          <img
            src="/dinocode-original-design.svg"
            alt="Original design: Home Page, Lessons, Quizzes, and Settings screens with feedback labels"
            className="p2-original-design-svg"
          />
        </section>

        {/* How my design changed – left: phone mockups (Ref: Frame 447.svg), right: feedback text */}
        <section className="p2-design-changed-section">
          <div className="p2-design-changed-inner">
            <div className="p2-design-changed-visual">
              <div className="p2-design-changed-placeholder" title="Two phone mockups (add Ref/New/Frame 447.svg to public/dinocode-design-changed.svg)" aria-hidden="true" />
            </div>
            <div className="p2-design-changed-content">
              <h2 className="p2-design-changed-title">How my design changed with research &amp; feedback</h2>
              <p className="p2-design-changed-intro">After testing, we realized we couldn&apos;t just patch the old version, we needed to restart from scratch.</p>
              <div className="p2-design-changed-block">
                <h3 className="p2-design-changed-subtitle">What I kept</h3>
                <p className="p2-design-changed-item"><strong>Brand vibe:</strong> Playful, mascot-led, friendly.</p>
                <p className="p2-design-changed-item"><strong>Core features:</strong> Lessons, quizzes, daily challenges, progress tracking.</p>
              </div>
              <div className="p2-design-changed-block">
                <h3 className="p2-design-changed-subtitle">What I changed</h3>
                <p className="p2-design-changed-item"><strong>Clear next-step actions:</strong> Made &quot;Go to lessons&quot; the primary CTA and simplified the Home layout.</p>
                <p className="p2-design-changed-item"><strong>Stronger hierarchy + consistency:</strong> Cleaner spacing, clearer typography levels, consistent rounding.</p>
                <p className="p2-design-changed-item"><strong>Better learning guidance:</strong> Added lesson objectives + a lesson roadmap, clearer prompts, more meaningful feedback.</p>
                <p className="p2-design-changed-item"><strong>Safer practice:</strong> Added reset/undo so mistakes feel recoverable.</p>
                <p className="p2-design-changed-item"><strong>Optional social:</strong> Clarified or de-emphasized friends/leaderboard so learning stays the priority.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Homepage – text left, phone right */}
        <section className="p2-design-change-section">
          <div className="p2-design-change-block p2-design-change-block--text-left">
            <div className="p2-design-change-text">
              <h3 className="p2-design-change-subtitle">Homepage</h3>
              <p className="p2-design-change-body">Users weren&apos;t sure where to start, and the main CTA was easy to miss.</p>
              <p className="p2-design-change-label">What I changed</p>
              <ul className="p2-design-change-list">
                <li>Made &quot;Go to lessons&quot; the primary CTA</li>
                <li>Made waves/background more subtle</li>
                <li>Added Profile + Search on the home screen</li>
              </ul>
            </div>
            <div className="p2-design-change-phone">
              <div className="p2-design-change-phone-frame">
                <img src="/dinocode-iphone-homepage.png" alt="DinoCode homepage on iPhone: Hi David, Daily Challenge, In Progress" className="p2-design-change-phone-img" />
              </div>
            </div>
          </div>

          <div className="p2-design-change-block p2-design-change-block--phone-left">
            <div className="p2-design-change-phone">
              <div className="p2-design-change-phone-frame">
                <img src="/dinocode-iphone-lessons.png" alt="DinoCode lesson details on iPhone: HTML Fundamentals, lesson list" className="p2-design-change-phone-img" />
              </div>
            </div>
            <div className="p2-design-change-text">
              <h3 className="p2-design-change-subtitle">Lesson Details</h3>
              <p className="p2-design-change-body">Beginners wanted clearer structure and needed to know what they&apos;d learn before starting.</p>
              <p className="p2-design-change-label">What I changed</p>
              <ul className="p2-design-change-list">
                <li>Added lesson objectives / &quot;What you&apos;ll learn&quot;</li>
                <li>Improved hierarchy (spacing + headings)</li>
                <li>Made prompts clearer so input feels obvious</li>
              </ul>
            </div>
          </div>

          <div className="p2-design-change-block p2-design-change-block--text-left">
            <div className="p2-design-change-text">
              <h3 className="p2-design-change-subtitle">Lessons List</h3>
              <p className="p2-design-change-body">The course list needed to be easier to scan and feel more structured.</p>
              <p className="p2-design-change-label">What I changed</p>
              <ul className="p2-design-change-list">
                <li>Organized lessons into a clearer roadmap</li>
                <li>Added progress/completion cues</li>
                <li>Cleaned up card layout + spacing</li>
              </ul>
            </div>
            <div className="p2-design-change-phone">
              <div className="p2-design-change-phone-frame">
                <img src="/dinocode-iphone-lessons-list.png" alt="DinoCode lessons list on iPhone: HTML course cards" className="p2-design-change-phone-img" />
              </div>
            </div>
          </div>
        </section>

        {/* Who We Are + Features */}
        <section className="p2-section">
          <div className="p2-who-row">
            <div className="p2-image-placeholder p2-wide" aria-hidden="true" />
            <div className="p2-who-text">
              <h2 className="p2-section-title">Who We Are</h2>
              <p className="p2-body">[Who we are paragraph.]</p>
            </div>
            <div className="p2-green-box p2-single-phone">
              <div className="p2-phone-placeholder p2-phone-angled" />
            </div>
          </div>
          <h2 className="p2-subhead">Key Features</h2>
          <div className="p2-outline-box">
            <p className="p2-placeholder-text">[Features placeholder]</p>
            <div className="p2-mascot" aria-hidden="true" />
          </div>
        </section>

        {/* Our Impact */}
        <section className="p2-section">
          <h2 className="p2-section-title">Our Impact</h2>
          <div className="p2-impact-cols">
            <div className="p2-impact-col">
              <div className="p2-progress-item"><span>Feature 1</span><span>75%</span><div className="p2-progress-bar p2-progress-purple" /></div>
              <div className="p2-progress-item"><span>Feature 2</span><span>60%</span><div className="p2-progress-bar p2-progress-purple" /></div>
              <div className="p2-progress-item"><span>Feature 3</span><span>90%</span><div className="p2-progress-bar p2-progress-purple" /></div>
            </div>
            <div className="p2-impact-col">
              <div className="p2-progress-item"><span>Feature A</span><span>80%</span><div className="p2-progress-bar p2-progress-teal" /></div>
              <div className="p2-progress-item"><span>Feature B</span><span>70%</span><div className="p2-progress-bar p2-progress-teal" /></div>
              <div className="p2-progress-item"><span>Feature C</span><span>85%</span><div className="p2-progress-bar p2-progress-teal" /></div>
            </div>
          </div>
          <h2 className="p2-section-title">How DinoCode Benefits</h2>
          <div className="p2-benefits-row">
            <div className="p2-green-block p2-benefit-card">
              <div className="p2-benefit-icon">+</div>
              <p className="p2-green-text">Benefit 1</p>
            </div>
            <div className="p2-green-block p2-benefit-card">
              <div className="p2-benefit-icon">👤</div>
              <p className="p2-green-text">Benefit 2</p>
            </div>
            <div className="p2-green-block p2-benefit-card">
              <div className="p2-benefit-icon">$</div>
              <p className="p2-green-text">Benefit 3</p>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="p2-section">
          <h2 className="p2-section-title">Contact Us</h2>
          <div className="p2-contact-row">
            <div className="p2-contact-details">
              <div className="p2-avatar p2-large" />
              <p>Name, Title, Email</p>
            </div>
            <div className="p2-green-block p2-form-block">
              <h2 className="p2-green-title">Contact Form</h2>
              <div className="p2-form-field" />
              <div className="p2-form-field" />
              <div className="p2-form-field p2-form-field-tall" />
              <div className="p2-form-buttons">
                <button type="button" className="p2-btn">Submit</button>
                <button type="button" className="p2-btn">Reset</button>
              </div>
            </div>
          </div>
        </section>

        {/* User Interface */}
        <section className="p2-section">
          <h2 className="p2-subhead">User Interface</h2>
          <div className="p2-phones-row">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p2-phone-wireframe" />
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="p2-section">
          <h2 className="p2-section-title">Tech Stack</h2>
          <div className="p2-outline-box">
            <p className="p2-placeholder-text">[Tech stack placeholder]</p>
            <div className="p2-mascot" aria-hidden="true" />
          </div>
        </section>

        {/* Application Screenshots */}
        <section className="p2-section">
          <h2 className="p2-subhead">Application Screenshots</h2>
          <div className="p2-phones-row">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="p2-phone-placeholder" />
            ))}
          </div>
          <div className="p2-impl-row">
            <div className="p2-two-phones">
              <div className="p2-phone-placeholder" />
              <div className="p2-phone-placeholder" />
            </div>
            <div className="p2-impl-text">
              <h3 className="p2-section-title">Implementation Details</h3>
              <p className="p2-body">[Implementation details paragraph.]</p>
            </div>
          </div>
        </section>

        {/* Business Model & Monetization */}
        <section className="p2-section">
          <div className="p2-split">
            <div>
              <h2 className="p2-section-title">Business Model</h2>
              <p className="p2-body">[Business model text.]</p>
            </div>
            <div className="p2-phone-placeholder p2-single" />
          </div>
          <div className="p2-split">
            <div>
              <h2 className="p2-section-title">Monetization</h2>
              <p className="p2-body">[Monetization text.]</p>
            </div>
            <div className="p2-phone-placeholder p2-single p2-phone-red" />
          </div>
        </section>

        {/* Problem / Solution */}
        <section className="p2-section">
          <div className="p2-split">
            <div>
              <h2 className="p2-section-title">Problem / Solution</h2>
              <p className="p2-body">[Problem / solution text.]</p>
            </div>
            <div className="p2-phone-placeholder p2-single p2-phone-red" />
          </div>
        </section>

        {/* Download The App */}
        <section className="p2-section">
          <h2 className="p2-subhead">Download The App</h2>
          <p className="p2-body">[Download CTA text.]</p>
          <div className="p2-download-buttons">
            <button type="button" className="p2-btn p2-btn-outline">App Store</button>
            <button type="button" className="p2-btn p2-btn-outline">Google Play</button>
          </div>
          <div className="p2-green-box p2-download-phone">
            <div className="p2-phone-placeholder p2-phone-angled" />
          </div>
        </section>

        {/* Case study nav */}
        <nav className="p2-case-nav" aria-label="Case study navigation">
          <Link to="/" className="p2-nav-link">Back to home</Link>
          <Link to="/casestudy-joey" className="p2-nav-link p2-nav-link-next">Next case study</Link>
        </nav>
      </div>
    </div>
  );
};

export default Project2;
