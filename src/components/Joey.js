import React from 'react';
import { Link } from 'react-router-dom';
import './Joey.css';

const Joey = () => {
  const tags = [
    'Marketing',
    'Design',
    'Development',
    'Animation',
    'Character Design',
    'SEO/SEM',
    'Video Editing'
  ];

  return (
    <div className="joey-page">
      {/* Hero Section - Outside Document */}
      <section className="joey-hero-main">
        <div className="joey-hero-content">
          <div className="joey-hero-image-placeholder"></div>
          <div className="joey-hero-text">
            <p className="joey-description">
              Joey is an AI-powered platform that connects homeowners with skilled tradespeople 
              through clear profiles, trustworthy portfolios, and simpler job posting. The goal 
              is to remove friction, reduce uncertainty, and create a more direct, transparent 
              way for people to hire and get hired.
            </p>
            <div className="joey-tags">
              {tags.map((tag, index) => (
                <span key={index} className="joey-tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Document Container */}
      <div className="case-study-document">
        
        {/* Overview Section */}
        <section className="joey-section white-bg">
          <div className="overview-header">
            <h2 className="overview-title">Overview</h2>
            <div className="overview-content-layout">
              <div className="overview-text">
                <p className="overview-description">
                  Four months ago, our team was asked to design a solution that 
                  supports underrepresented trades by helping them to present into 
                  their industry. Through extensive user research, we kept clear: 
                  unclear pay are often workplace problems, not individual problems. 
                  That pushed us toward a different angle; reduce reliance on "the 
                  middleman," improve transparency, and build a platform directly 
                  with homeowners, with trust built into the experience.
                </p>
                <div className="overview-tags">
                  <span className="overview-tag">Lead Designer</span>
                  <span className="overview-tag">8 weeks</span>
                  <span className="overview-tag">Team Project</span>
                </div>
              </div>
              <div className="overview-visual">
                <div className="phone-mockup-showcase">
                  <div className="phone-mockup"></div>
                  <div className="phone-mockup"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* My Role Section */}
        <section className="joey-section my-role-section">
          <div className="section-content-split">
            <div className="my-role-text">
              <h2 className="section-title-white">My role</h2>
              
              <div className="role-category">
                <h3 className="role-subtitle">Led design & branding</h3>
                <ul className="role-list">
                  <li>Led Joey's UX/UI and overall brand direction</li>
                  <li>Created the logo and visual system</li>
                </ul>
              </div>

              <div className="role-category">
                <h3 className="role-subtitle">Designed product flows</h3>
                <ul className="role-list">
                  <li>Designed the worker verification + profile flow</li>
                  <li>Designed an AI-assisted job posting experience</li>
                </ul>
              </div>

              <div className="role-category">
                <h3 className="role-subtitle">Iterated & shipped assets</h3>
                <ul className="role-list">
                  <li>Produced marketing assets</li>
                  <li>Iterated key screens using research insights and critique feedback</li>
                </ul>
              </div>
            </div>
            <div className="my-role-image">
              <div className="role-image-placeholder"></div>
            </div>
          </div>
        </section>

        {/* Project Prompt Banner */}
        <section className="project-prompt-banner">
          <div className="banner-content">
            <p className="banner-text">
              Design and develop a web/mobile digital solution for underrepresented 
              people in trades that leverages Artificial Intelligence.
            </p>
            <span className="banner-tag">
              <span className="banner-tag-dot"></span>
              BCIT D3 Project 2 prompt
            </span>
          </div>
        </section>

        {/* Problem + Core Insight + Hop To It (design layout) */}
        <section className="joey-section white-bg problem-core-hop">
          {/* Row 1: Image left | What's the problem? right */}
          <div className="problem-row">
            <div className="problem-image-placeholder"></div>
            <div className="problem-text">
              <h2 className="problem-title">What's the problem?</h2>
              <h3 className="problem-subtitle">Trust & clarity are missing.</h3>
              <p className="problem-description">
                The trades hiring experience breaks down on trust and clarity. For homeowners, 
                hiring often feels like guessing: Do I have the right trade? Is the quote fair? 
                Who is coming into my home? Will the final price
              </p>
              <p className="problem-description">
                For tradesworkers, the "workplace pipeline" can be a bottleneck: inconsistent 
                job access, limited control over schedules, wage pressure, and higher exposure 
                to discrimination or harassment on job sites.
              </p>
            </div>
          </div>

          {/* Row 2: Core insight left | Hop To It orange block right */}
          <div className="core-hop-row">
            <div className="core-insight-block">
              <h2 className="problem-title">The core insight</h2>
              <h3 className="problem-subtitle">Remove the workplace gatekeeper</h3>
              <p className="problem-description">
                If the workplace is what drives these issues, then designing around the workplace 
                only reinforces the problem. Skilled tradesworkers need a way to present themselves 
                as independent professionals, and homeowners need clarity they can trust. Joey becomes 
                the layer that enables direct connection, without the workplace acting as the gatekeeper.
              </p>
            </div>
            <div className="hop-to-it-block">
              <span className="hop-text hop-left">Hop</span>
              <div className="hop-phones">
                <div className="hop-phone-placeholder"></div>
                <div className="hop-phone-placeholder"></div>
              </div>
              <span className="hop-text hop-right">To It.</span>
            </div>
          </div>
        </section>

        {/* Lets ask the people card (Ref Frame 362) */}
        <section className="ask-people-card">
          <div className="ask-people-inner">
            <div className="ask-people-content">
              <h2 className="ask-people-title">Lets ask the people for some help</h2>
              <p className="ask-people-desc">
                I combined user surveys and secondary research to turn vague "trust issues" into design requirements.
              </p>
              <ul className="ask-people-list">
                <li className="ask-people-list-title"><strong>Who we learned from</strong></li>
                <li>30 homeowners (client survey)</li>
                <li>8 tradesworkers (worker survey)</li>
              </ul>
            </div>
            <div className="ask-people-fox-placeholder"></div>
          </div>
        </section>

        {/* What my search revealed */}
        <section className="what-search-section">
          <h2 className="what-search-title">What my search revealed</h2>
          <ul className="what-search-list">
            <li>Most homeowners rated reviews/photos of work as important or higher.</li>
            <li>Direct hiring creates trust and risk questions. Homeowners worry about scams, incomplete jobs, and permit responsibility, so proof and clarity need to be built in.</li>
            <li>Workers can feel pressure to accept unsafe or low-paying work, especially when status or job security is uncertain. Transparent scope, terms, and pricing matters.</li>
            <li>58% of Immigrant tradesworkers already rely on online job search.</li>
          </ul>
        </section>

        {/* Research graph - SVG from Ref/New/Container.svg */}
        <section className="research-graph-section">
          <img
            src="/research-graph.svg"
            alt="Homeowner trust signals and Tradesworker priorities bar charts showing survey results"
            className="research-graph-img"
          />
        </section>

        {/* Key takeaways from my research (Ref Frame 413) */}
        <section className="key-takeaways-section">
          <h2 className="key-takeaways-title">Key takeaways from my research</h2>
          <div className="key-takeaways-card">
            <div className="takeaway-item">
              <div className="takeaway-icon" aria-hidden="true">
                <span className="takeaway-icon-symbol">👁</span>
              </div>
              <h3 className="takeaway-heading">Trust is visual</h3>
              <p className="takeaway-line1">People trust what they can see.</p>
              <p className="takeaway-line2">Photos, past work, and clear profiles reduce hesitation</p>
            </div>
            <div className="takeaway-item">
              <div className="takeaway-icon" aria-hidden="true">
                <span className="takeaway-icon-symbol">📄</span>
              </div>
              <h3 className="takeaway-heading">Clarity reduces conflict</h3>
              <p className="takeaway-line1">The biggest risk is ambiguity.</p>
              <p className="takeaway-line2">Jobs need enough detail that both sides agree on expectations.</p>
            </div>
            <div className="takeaway-item">
              <div className="takeaway-icon" aria-hidden="true">
                <span className="takeaway-icon-symbol">🛡</span>
              </div>
              <h3 className="takeaway-heading">Safety builds trust</h3>
              <p className="takeaway-line1">Direct-to-consumer work only works with safeguards.</p>
              <p className="takeaway-line2">Verification, offers, and payment protection</p>
              <p className="takeaway-line2">make independence feel credible.</p>
            </div>
          </div>
        </section>

      {/* So who is Joey for? (Ref Frame 417 + Frame 374 paths) */}
      <section className="who-is-joey-section">
        <h2 className="who-is-joey-title">So who is Joey for?</h2>
        <img
          src="/who-is-joey-for.svg"
          alt="Two user personas: Armiya (Homeowner) and Maya (Tradesworker) with descriptions"
          className="who-is-joey-svg"
        />
        <img
          src="/user-paths.svg"
          alt="Homeowner path and Tradesworker path flowcharts: steps from sign up to job completion or ready to receive requests"
          className="who-is-joey-paths-svg"
        />
      </section>

      {/* Tradesworker journey – LOFI mobile screens (Ref Frame 422) */}
      <section className="tradesworker-lofi-section">
        <h2 className="tradesworker-lofi-title">Tradesworker journey</h2>
        <img
          src="/tradesworker-lofi-screens.svg"
          alt="Five LOFI mobile screens: Verifying you, Your Portfolio, Profile Preview, AI help, Welcome dashboard"
          className="tradesworker-lofi-svg"
        />
      </section>

      {/* How my design changed with research & feedback (Ref: Trust/Job/Pay phone SVGs) */}
      <section className="design-change-section">
        <h2 className="design-change-main-title">How my design changed with research & feedback:</h2>

        <div className="design-change-block design-change-block--text-left">
          <div className="design-change-text">
            <h3 className="design-change-subtitle">Worker creates a profile that builds trust</h3>
            <p className="design-change-body">
              Research showed homeowners make decisions using proof, not promises. I designed the profile preview to surface credibility at a glance, with a clear identity, role, and space for past work so homeowners can choose with confidence.
            </p>
          </div>
          <div className="design-change-phone">
            <div className="design-change-phone-frame">
              <img src="/trust-phone.png" alt="Profile Preview screen: Maya, Drywaller, ratings and credibility badges" className="design-change-phone-img" />
            </div>
          </div>
        </div>

        <div className="design-change-block design-change-block--phone-left">
          <div className="design-change-phone">
            <div className="design-change-phone-frame">
              <img src="/job-phone.png" alt="AI help screen: structured job request with Title, Description, Price range, Possible pictures" className="design-change-phone-img" />
            </div>
          </div>
          <div className="design-change-text">
            <h3 className="design-change-subtitle">AI Help turns a vague post into a clear job request</h3>
            <p className="design-change-body">
              Early AI output felt like a blob of text. I redesigned it into structured sections so homeowners see exactly what the AI suggested and can add each part to their listing.
            </p>
            <p className="design-change-label">What I changed</p>
            <ul className="design-change-list">
              <li>Structured output into Title, Description, Price range</li>
              <li>Added Add to listing actions so the user stays in control</li>
              <li>Added a &quot;Possible pictures&quot; section so the AI can request missing visuals</li>
              <li>Added a space for follow-up questions to improve accuracy</li>
            </ul>
          </div>
        </div>

        <div className="design-change-block design-change-block--text-left">
          <div className="design-change-text">
            <h3 className="design-change-subtitle">Escrow style payment that protects both sides</h3>
            <p className="design-change-body">
              Research highlighted that workers often don’t get paid on time—or at all. I designed payment to be held upfront but released only after job completion, so the worker knows the money is secured and the homeowner isn’t charged until they’re satisfied.
            </p>
            <p className="design-change-body">
              This keeps pricing fair, reduces disputes, and reinforces trust for both sides.
            </p>
          </div>
          <div className="design-change-phone">
            <div className="design-change-phone-frame">
              <img src="/pay-phone.png" alt="Payment screen: Summary, payment methods, Pay button" className="design-change-phone-img" />
            </div>
          </div>
        </div>
      </section>

      {/* Hop to it. Results – HIFI screens (Ref: HIFI.svg) */}
      <section className="hifi-results-section">
        <h2 className="hifi-results-title">Hop to it. Results</h2>
        <img
          src="/hifis-screens.png"
          alt="Five HIFI Joey app screens: Welcome Maya dashboard, Jobs list, Describe your issue to AI, Listing detail, Account profile"
          className="hifi-results-svg"
        />
        <p className="hifi-results-caption">
          While this was a school project, feedback consistently pointed to improvements after iteration: the profile became easier to trust at a glance, the AI output became easier to read and act on, the offer stage reduced ambiguity around price and terms, more tag options for filtering, stripe payment, better performance results, and many more changes that shaped joey into a fully designed app.
        </p>
      </section>

      {/* Outcome & what I learned (Ref: Frame 425.svg) */}
      <section className="outcome-section">
        <div className="outcome-two-col">
          <div className="outcome-left">
            <h2 className="outcome-title">Outcome & what I learned</h2>
            <p className="outcome-body">
              This project also reinforced something I do not get when designing solo. Product design only becomes real when it can be built, and that means staying aligned with developers from the start. I had to think beyond screens and consider how components, states, and data would actually work in a live system, then adjust designs so they were easier to implement and less fragile on the backend.
            </p>
            <p className="outcome-body">
              My wonderful dev team brought my designs to life in a fully working prototype. Joey was connected end-to-end with a real backend, and our AI features were functional in the build, not just mocked up.
            </p>
            <a href="#watch-video" className="outcome-watch-btn" aria-label="Watch Joey video">
              <span className="outcome-play-icon" aria-hidden="true" />
              Watch Video
            </a>
          </div>
          <div className="outcome-right">
            <h3 className="outcome-joey-is">Joey is...</h3>
            <div className="outcome-phone-wrap">
              <div className="outcome-phone-mockup" aria-hidden="true" />
            </div>
            <p className="outcome-tagline">An AI platform that connects homeowners &amp; skilled workers.</p>
          </div>
        </div>
      </section>

      {/* Case study nav: back to home / next case study */}
      <nav className="case-study-nav" aria-label="Case study navigation">
        <Link to="/" className="case-study-nav-link case-study-nav-link--home">
          Back to home
        </Link>
        <Link to="/casestudy-project2" className="case-study-nav-link case-study-nav-link--next">
          Next case study
        </Link>
      </nav>

      </div>
      {/* End Case Study Document Container */}
    </div>
  );
};

export default Joey;
