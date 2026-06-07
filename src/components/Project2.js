import React from 'react';
import { Link } from 'react-router-dom';
import './Joey.css';
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
      <section className="joey-hero-main">
        <div className="joey-hero-content">
          <div className="joey-hero-card">
            <img
              src="/dinocodeassets/hero.png"
              alt="DinoCode app - Logo and mobile app screens showing lessons, challenges, and progress"
              className="joey-hero-image"
            />
          </div>
          <div className="joey-hero-text">
            <p className="joey-description">
              [Project description placeholder: one or two sentences about what this platform is, who it’s for, and the goal.]
            </p>
            <div className="joey-tags">
              {tags.map((tag, index) => (
                <span key={index} className="joey-tag">{tag}</span>
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
                Our team set out to solve a simple but familiar problem: beginners often lose motivation when learning front-end coding due to dry or overwhelming resources. We believed there was a better way. DinoCode reimagines how people learn HTML, CSS, and JavaScript by combining short-form lessons, a fun quiz system, and light social features to make coding stick.
              </p>
              <div className="overview-tags">
                <span className="overview-tag">Lead Designer</span>
                <span className="overview-tag">8 weeks</span>
                <span className="overview-tag">Team Project</span>
              </div>
            </div>
            <div className="overview-visual">
              <img
                src="/dinocodeassets/overview.png"
                alt="DinoCode HTML and CSS course screens on mobile"
                className="overview-image"
              />
            </div>
          </div>
        </section>

        <section className="joey-section my-role-section">
          <div className="section-content-split">
            <div className="my-role-text">
              <h2 className="section-title-white">My role</h2>
              <div className="role-category">
                <h3 className="role-subtitle">Led UI design &amp; flow</h3>
                <ul className="role-list">
                  <li>Built quiz and lesson flow layouts from scratch</li>
                  <li>Designed the onboarding proficiency test</li>
                </ul>
              </div>
              <div className="role-category">
                <h3 className="role-subtitle">Collaborated on branding</h3>
                <ul className="role-list">
                  <li>Helped define DinoCode&apos;s personality and tone</li>
                </ul>
              </div>
              <div className="role-category">
                <h3 className="role-subtitle">Iterated &amp; shipped assets</h3>
                <ul className="role-list">
                  <li>Adjusted UI components and user flows based on testing</li>
                </ul>
              </div>
            </div>
            <div className="my-role-image">
              <img
                src="/dinocodeassets/myrole.png"
                alt="DinoCode team — Bruno, Diego, Rehan, and Reagan"
                className="role-image"
              />
            </div>
          </div>
        </section>

        <section className="project-prompt-banner p2-prompt-banner">
          <div className="banner-content">
            <p className="banner-text">
              Design and develop a web/mobile learning platform for beginner coders that uses gamified challenges to build consistent habits.
            </p>
          </div>
        </section>

        <section className="joey-section white-bg problem-core-hop">
          <div className="problem-row">
            <div className="case-study-media case-study-media--lg">
              <img
                src="/dinocodeassets/problem.png"
                alt="Frustrated dinosaur at a computer showing a coding error"
                className="problem-image"
              />
            </div>
            <div className="problem-text">
              <h2 className="problem-title">What&apos;s the problem?</h2>
              <h3 className="problem-subtitle">Learning to code feels confusing &amp; boring</h3>
              <p className="problem-description">
                Many new learners quit early not because of difficulty, but because of a lack of clear progress or feedback. They don&apos;t know where to start, what to expect, or if they&apos;re improving. Without motivation and clarity, engagement drops fast.
              </p>
            </div>
          </div>
          <div className="core-hop-row">
            <div className="core-insight-block">
              <h2 className="problem-title">The core insight</h2>
              <h3 className="problem-subtitle">Make coding feel like winning</h3>
              <p className="problem-description">
                Instead of creating another tutorial-heavy platform, I designed around what makes people feel progress: small wins, visual feedback, and friendly pacing. DinoCode doesn&apos;t remove the work, it makes the process rewarding.
              </p>
            </div>
            <div className="p2-hop-block case-study-media case-study-media--lg">
              <img
                src="/dinocodeassets/hopto.png"
                alt="DinoCode logo and app home screen showing daily challenge and lesson progress"
                className="p2-hop-image"
              />
            </div>
          </div>
        </section>

        <section className="p2-ask-people-section">
          <img
            src="/dinocodeassets/ask-for-help.svg"
            alt="Let's ask the people for some help — user interviews and usability testing with beginners on what stops consistent learning"
            className="p2-ask-for-help-svg"
          />
        </section>

        <section className="what-search-section">
          <h2 className="what-search-title">What my search revealed</h2>
          <ul className="what-search-list">
            <li><strong>Coding feels too confusing</strong> Syntax, terminology, and abstract concepts overwhelmed beginners.</li>
            <li><strong>It&apos;s not fun</strong> Learning felt like homework, not an engaging activity.</li>
            <li><strong>It&apos;s too hard</strong> Tutorials moved too fast, leaving users lost and frustrated.</li>
            <li><strong>I don&apos;t know if I&apos;m improving</strong> No clear progress indicators or celebration of small wins.</li>
            <li><strong>I&apos;m scared to mess up</strong> Fear of errors and not knowing where to get help stopped them from trying.</li>
            <li><strong>I want to know what I&apos;ll learn</strong> Learners needed upfront clarity on lesson objectives and outcomes.</li>
          </ul>
        </section>

        <section className="research-graph-section">
          <div className="research-graph-row">
            <div className="research-graph-panel">
              <h3 className="research-graph-panel-title">Learning barriers</h3>
              <p className="research-graph-panel-subtitle">Why beginners quit coding (% of users)</p>
              <div className="research-graph-bars">
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Too confusing (syntax, terminology)</span>
                    <span className="research-bar-count">11/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--purple-92" style={{ width: '92%' }}><span>92%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Too hard / moves too fast</span>
                    <span className="research-bar-count">10/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--purple-83" style={{ width: '83%' }}><span>83%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Feels intimidating or scary</span>
                    <span className="research-bar-count">9/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--purple-75" style={{ width: '75%' }}><span>75%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Not fun / feels like homework</span>
                    <span className="research-bar-count">8/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--purple-67" style={{ width: '67%' }}><span>67%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Don&apos;t know if I&apos;m making progress</span>
                    <span className="research-bar-count">7/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--purple-58" style={{ width: '58%' }}><span>58%</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="research-graph-panel">
              <h3 className="research-graph-panel-title">Motivation factors</h3>
              <p className="research-graph-panel-subtitle">Rated as important or essential (%)</p>
              <div className="research-graph-bars">
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Clear lesson goals before starting</span>
                    <span className="research-bar-count">12/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--green-100" style={{ width: '100%' }}><span>100%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Visual progress tracking (XP, streaks)</span>
                    <span className="research-bar-count">12/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--green-100" style={{ width: '100%' }}><span>100%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Instant feedback on quiz answers</span>
                    <span className="research-bar-count">11/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--green-92" style={{ width: '92%' }}><span>92%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Friendly tone / encouraging mascot</span>
                    <span className="research-bar-count">10/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--green-83 research-bar-fill--dark-text" style={{ width: '83%' }}><span>83%</span></div>
                  </div>
                </div>
                <div className="research-bar-item">
                  <div className="research-bar-top">
                    <span className="research-bar-label">Ability to replay lessons for mastery</span>
                    <span className="research-bar-count">9/12</span>
                  </div>
                  <div className="research-bar-track">
                    <div className="research-bar-fill research-bar-fill--green-75 research-bar-fill--dark-text" style={{ width: '75%' }}><span>75%</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="key-takeaways-section">
          <h2 className="key-takeaways-title">Key takeaways from my research</h2>
          <img
            src="/dinocodeassets/takeaways.png"
            alt="Key takeaways: progress is motivation, clarity reduces friction, and guidance beats scoring"
            className="p2-key-takeaways-svg"
          />
        </section>

        <section className="who-is-joey-section">
          <h2 className="who-is-joey-title">So who is DinoCode for?</h2>
          <img
            src="/dinocodeassets/alex.svg"
            alt="Alex, beginner learner — wants coding to feel approachable with clear lesson goals, obvious navigation, and fast wins"
            className="p2-who-is-for-svg"
          />
        </section>

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

        <section className="p2-lofi-section">
          <img
            src="/dinocode-lofi-screens.svg"
            alt="Lo-fi wireframes: Welcome, Daily Challenge, Lessons, Code Challenge, Profile screens"
            className="p2-lofi-svg"
          />
        </section>

        <section className="p2-what-went-wrong-section">
          <img
            src="/dinocodeassets/what-went-wrong.svg"
            alt="What went wrong — context on early HiFi design and feedback on unclear labels, confusing flow, weak hierarchy, and hidden navigation"
            className="p2-what-went-wrong-svg"
          />
        </section>

        <section className="p2-original-design-section">
          <h2 className="p2-original-design-title">Original design</h2>
          <img
            src="/dinocode-original-design.svg"
            alt="Original design: Home Page, Lessons, Quizzes, and Settings screens with feedback labels"
            className="p2-original-design-svg"
          />
        </section>

        <section className="p2-design-changed-section">
          <div className="p2-design-changed-inner">
            <div className="p2-design-changed-visual">
              <img
                src="/dinocodeassets/feedback.png"
                alt="Before and after DinoCode home screen mockups showing clearer daily challenge CTA and progress layout"
                className="p2-design-changed-image"
              />
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

        <section className="design-change-section">
          <div className="design-change-block design-change-block--text-left">
            <div className="design-change-text">
              <h3 className="design-change-subtitle">Homepage</h3>
              <p className="design-change-body">Users weren&apos;t sure where to start, and the main CTA was easy to miss.</p>
              <p className="design-change-label">What I changed</p>
              <ul className="design-change-list">
                <li>Made &quot;Go to lessons&quot; the primary CTA</li>
                <li>Made waves/background more subtle</li>
                <li>Added Profile + Search on the home screen</li>
              </ul>
            </div>
            <div className="design-change-phone">
              <div className="design-change-phone-frame">
                <img src="/dinocode-iphone-homepage.png" alt="DinoCode homepage on iPhone: Hi David, Daily Challenge, In Progress" className="design-change-phone-img" />
              </div>
            </div>
          </div>

          <div className="design-change-block design-change-block--phone-left">
            <div className="design-change-phone">
              <div className="design-change-phone-frame">
                <img src="/dinocode-iphone-lessons.png" alt="DinoCode lesson details on iPhone: HTML Fundamentals, lesson list" className="design-change-phone-img" />
              </div>
            </div>
            <div className="design-change-text">
              <h3 className="design-change-subtitle">Lesson Details</h3>
              <p className="design-change-body">Beginners wanted clearer structure and needed to know what they&apos;d learn before starting.</p>
              <p className="design-change-label">What I changed</p>
              <ul className="design-change-list">
                <li>Added lesson objectives / &quot;What you&apos;ll learn&quot;</li>
                <li>Improved hierarchy (spacing + headings)</li>
                <li>Made prompts clearer so input feels obvious</li>
              </ul>
            </div>
          </div>

          <div className="design-change-block design-change-block--text-left">
            <div className="design-change-text">
              <h3 className="design-change-subtitle">Lessons List</h3>
              <p className="design-change-body">The course list needed to be easier to scan and feel more structured.</p>
              <p className="design-change-label">What I changed</p>
              <ul className="design-change-list">
                <li>Organized lessons into a clearer roadmap</li>
                <li>Added progress/completion cues</li>
                <li>Cleaned up card layout + spacing</li>
              </ul>
            </div>
            <div className="design-change-phone">
              <div className="design-change-phone-frame">
                <img src="/dinocode-iphone-lessons-list.png" alt="DinoCode lessons list on iPhone: HTML course cards" className="design-change-phone-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="outcome-section">
          <div className="outcome-two-col">
            <div className="outcome-left">
              <h2 className="outcome-title">Outcome &amp; what I learned</h2>
              <p className="outcome-body">
                This project reinforced a simple lesson: the learning content can be great, but UX decides whether people ever reach it. The biggest wins came from tightening the &apos;in-between moments&apos; — onboarding clarity, navigation, and the way we explain features like friends.
              </p>
            </div>
            <div className="outcome-right">
              <div className="case-study-media case-study-media--lg">
                <img
                  src="/dinocodeassets/dinois.png"
                  alt="DinoCode is a gamified, beginner-friendly way to learn front-end coding"
                  className="p2-outcome-dinois-image"
                />
              </div>
            </div>
          </div>
        </section>

        <nav className="p2-case-nav" aria-label="Case study navigation">
          <Link to="/" className="p2-nav-link">Back to home</Link>
          <Link to="/casestudy-nutribeli" className="p2-nav-link p2-nav-link-next">Next: NutriBeli</Link>
        </nav>
      </div>
    </div>
  );
};

export default Project2;
