import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const stages = [
  { label: "IDEA", date: "MAR", slide: 2, icon: "💡" },
  { label: "PARTNERSHIP", date: "APR — JUL", slide: 3, icon: "🎓" },
  { label: "ENGAGEMENT", date: "AUG", slide: 5, icon: "🤝" },
  { label: "INNOVATION", date: "AUG — SEP", slide: 6, icon: "🧠" },
  { label: "SELECTION", date: "SEP", slide: 8, icon: "🏆" },
  { label: "LAUNCH", date: "OCT", slide: 9, icon: "🚀" },
];

const screens = [
  { id: "video", label: "AI Lab" },
  { id: "timeline", label: "Timeline" },
  { id: "cases", label: "Case Studies" },
];

const caseStudies = [
  {
    track: "TRACK 01",
    title: "KOHLER AI Bathroom Designer & Planner",
    objective: "Build an interactive AI design assistant that takes a customer's constraints and automates personalized product bundle recommendations.",
  },
  {
    track: "TRACK 02",
    title: "Commercial Smart Facility & Sustainability Manager",
    objective: "Build a real-time IoT monitoring and predictive dispatch platform for high-footfall environments such as airports, hospitals, and universities.",
  },
  {
    track: "TRACK 03",
    title: "Kohler Unified Enterprise AI Agent",
    objective: "Build an enterprise-grade conversational AI agent that answers complex queries across internal and external domains, with dynamic output formatting.",
  },
];

const slideTitles = [
  "KOHLER × MIT-WPU AI Lab",
  "One Idea. Seven Months. One AI Lab.",
  "March 2026 — The Idea",
  "April 2026 — Finding the Right Partner",
  "May–July 2026 — Turning the Idea Into a Program",
  "August 2026 — From Partnership to People",
  "August–September 2026 — From Students to Problem Solvers",
  "How We Evaluated Innovation",
  "30 September 2026 — Selecting the Cohort",
  "October 2026 — From Selection to Launch",
  "The Lab Has Already Started Creating Outcomes",
  "This Is Bigger Than a Lab",
  "October Is Not the Finish Line",
];

const slideStages = [0, 0, 0, 1, 1, 2, 3, 3, 4, 5, 3, 5, 5];

const criteria = [
  ["01", "Academic strength", "Strong engineering and AI / technology ecosystem"],
  ["02", "Student talent", "Access to high-potential technical students"],
  ["03", "Innovation mindset", "A culture of experimentation and research"],
  ["04", "Long-term potential", "Ability to build a sustainable partnership"],
];

const buildBlocks = [
  ["LEGAL", "Partnership framework"],
  ["TAX", "Financial & compliance structure"],
  ["T&C", "Program terms & governance"],
  ["DESIGN", "Lab experience & physical environment"],
  ["BUDGET", "Infrastructure & investment planning"],
  ["PROCESS", "Student selection & program operations"],
];

const evaluationCriteria = [
  ["Technical depth", "Understanding of AI / ML concepts and architecture"],
  ["Problem understanding", "How well the business problem was understood"],
  ["Solution quality", "Functionality, relevance and effectiveness"],
  ["Innovation", "Creativity and originality of approach"],
  ["Execution", "Ability to turn an idea into a working prototype"],
  ["Communication", "Ability to explain the solution and its impact"],
];

function Header({ activeScreen }) {
  return (
    <header className="site-header">
      <a className="brand" href="#video" aria-label="Kohler MIT-WPU AI Lab, video">
        <span className="brand-kohler">KOHLER</span>
        <span className="brand-divider" />
        <span className="brand-partner">MIT-WPU</span>
        <span className="brand-lab">AI LAB</span>
      </a>
      <nav className="page-nav" aria-label="Main navigation">
        <a href="#video" aria-current={activeScreen === "video" ? "page" : undefined}>AI Lab</a>
        <a href="#timeline" aria-current={activeScreen === "timeline" ? "page" : undefined}>Timeline</a>
        <a href="#cases" aria-current={activeScreen === "cases" ? "page" : undefined}>Case Studies</a>
      </nav>
    </header>
  );
}

function ScreenNavigator({ activeScreen, navigate }) {
  const activeIndex = screens.findIndex((screen) => screen.id === activeScreen);
  const activeLabel = screens[activeIndex]?.label ?? screens[0].label;

  return (
    <nav className="screen-navigator" aria-label="Screen navigation">
      <button
        type="button"
        onClick={() => navigate((activeIndex - 1 + screens.length) % screens.length)}
        aria-label="Previous screen"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 12H5m0 0 7-7m-7 7 7 7" />
        </svg>
      </button>
      <span aria-live="polite">{activeLabel}</span>
      <button
        type="button"
        onClick={() => navigate((activeIndex + 1) % screens.length)}
        aria-label="Next screen"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14m0 0-7-7m7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}

function Eyebrow({ children, light = false }) {
  return <p className={`eyebrow${light ? " light" : ""}`}><span />{children}</p>;
}

function SlideHeading({ act, date, title, subtitle, light = false }) {
  return (
    <div className={`slide-heading${light ? " light" : ""}`}>
      <div className="heading-meta">
        <Eyebrow light={light}>{act}</Eyebrow>
        {date && <span className="heading-date">{date}</span>}
      </div>
      <h2>{title}</h2>
      {subtitle && <p className="slide-subtitle">{subtitle}</p>}
    </div>
  );
}

function Cover() {
  return (
    <section className="slide cover-slide" id="slide-0" aria-label="Slide 1: Cover">
      <div className="cover-image" />
      <div className="cover-content">
        <h1>KOHLER <span>×</span><br />MIT-WPU <em>AI Lab</em></h1>
        <MilestoneTimeline />
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="slide overview-slide" id="slide-1" aria-label="Slide 2: The journey at a glance">
      <SlideHeading
        act="THE JOURNEY AT A GLANCE"
        title={<>One Idea. Seven Months.<br /><em>One AI Lab.</em></>}
      />
      <div className="overview-journey">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.label}>
            <a className="overview-stage" href={`#slide-${stage.slide}`}>
              <span className="overview-icon">{stage.icon}</span>
              <span className="overview-stage-name">{stage.label}</span>
              <span className="overview-stage-date">{stage.date}</span>
            </a>
            {index < stages.length - 1 && <span className="journey-arrow" aria-hidden="true">→</span>}
          </React.Fragment>
        ))}
      </div>
      <blockquote className="overview-quote">
        What started as an idea in March is now becoming a platform for
        student-led AI innovation.
      </blockquote>
      <p className="progression">IDEA <i>→</i> PARTNERSHIP <i>→</i> ENGAGEMENT <i>→</i> INNOVATION <i>→</i> SELECTION <i>→</i> LAUNCH</p>
    </section>
  );
}

function IdeaSlide() {
  return (
    <section className="slide content-slide idea-slide" id="slide-2" aria-label="Slide 3: Idea">
      <SlideHeading act="ACT 1 · BUILDING THE FOUNDATION" date="MARCH 2026" title={<>What if students could<br /><em>solve real KOHLER problems using AI?</em></>} />
      <div className="idea-layout">
        <div>
          <h3 className="section-label">THE VISION</h3>
          <ul className="check-list">
            <li>Create a dedicated AI innovation program with MIT-WPU</li>
            <li>Give students exposure to <strong>real business challenges</strong></li>
            <li>Move beyond classroom learning into <strong>hands-on AI experimentation</strong></li>
            <li>Build a pipeline of <strong>AI talent, ideas and prototypes</strong></li>
          </ul>
        </div>
        <div className="ambition-card">
          <span className="card-index">THE AMBITION</span>
          <p>Learn AI.<br /><em>Build with AI.</em><br />Solve with AI.</p>
          <span className="card-spark">✳</span>
        </div>
      </div>
      <div className="transformation">
        {["AI Education", "Real Problems", "Student Innovation", "Business Impact"].map((item, index) => (
          <React.Fragment key={item}>
            <span>{item}</span>
            {index < 3 && <b>→</b>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function PartnerSlide() {
  return (
    <section className="slide content-slide partner-slide" id="slide-3" aria-label="Slide 4: University outreach">
      <SlideHeading act="ACT 1 · BUILDING THE FOUNDATION" date="APRIL 2026" title={<>Finding the <em>right partner.</em></>} subtitle="A considered search for a university partner with the potential to grow with us." />
      <div className="partner-content">
        <div className="criteria-grid">
          {criteria.map(([number, title, description]) => (
            <article className="criteria-card" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="shortlist">
          <p className="section-label">UNIVERSITY OUTREACH</p>
          <div className="shortlist-count"><span>7</span><i>→</i><strong>2</strong></div>
          <p>universities considered <b>·</b> shortlisted</p>
          <div className="partner-result"><span>PARTNER SELECTED</span><strong>MIT-WPU</strong></div>
        </div>
      </div>
    </section>
  );
}

function BuildSlide() {
  return (
    <section className="slide content-slide build-slide" id="slide-4" aria-label="Slide 5: Building the program">
      <SlideHeading act="ACT 1 · BUILDING THE FOUNDATION" date="MAY — JULY 2026" title={<>From concept to<br /><em>operating model.</em></>} subtitle="The behind-the-scenes work that turned a promising idea into a program ready to run." />
      <div className="build-grid">
        {buildBlocks.map(([label, description], index) => (
          <article className="build-card" key={label}>
            <span className="build-number">0{index + 1}</span>
            <h3>{label}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <div className="agreement">
        <span>24 JULY 2026</span>
        <i>📜</i>
        <strong>PARTNERSHIP FORMALIZED</strong>
      </div>
    </section>
  );
}

function EngagementSlide() {
  const steps = ["Roadshow", "Orientation", "Registration", "Assessment", "Case study"];
  return (
    <section className="slide content-slide engagement-slide" id="slide-5" aria-label="Slide 6: Student engagement">
      <SlideHeading act="ACT 2 · FINDING THE TALENT" date="AUGUST 2026" title={<>From partnership<br /><em>to people.</em></>} subtitle="The AI Lab journey begins with the students." />
      <div className="funnel">
        {steps.map((step, index) => (
          <div className="funnel-step" key={step}>
            <span className="funnel-number">0{index + 1}</span>
            <strong>{step}</strong>
            {index < steps.length - 1 && <span className="funnel-down">↓</span>}
          </div>
        ))}
      </div>
      <blockquote className="feature-quote">
        We didn’t just invite students to join.<br />
        <em>We challenged them to demonstrate what they could build.</em>
      </blockquote>
    </section>
  );
}

function InnovationSlide() {
  const challenges = [
    ["01", "Enterprise Knowledge", "Can AI make KOHLER knowledge easier to access?", "RAG · ENTERPRISE KNOWLEDGE"],
    ["02", "AI Bathroom Designer", "Can AI transform the way bathrooms are designed?", "AI · GENERATIVE DESIGN"],
    ["03", "Water Intelligence", "Can AI help us understand and optimize water usage?", "AI · ANALYTICS"],
  ];
  return (
    <section className="slide content-slide innovation-slide" id="slide-6" aria-label="Slide 7: Innovation challenge">
      <SlideHeading act="ACT 2 · FINDING THE TALENT" date="AUGUST — SEPTEMBER 2026" title={<>Real KOHLER problems.<br /><em>Real AI solutions.</em></>} subtitle="An innovation challenge—not a conventional test." />
      <div className="challenge-grid">
        {challenges.map(([number, title, question, type]) => (
          <article className="challenge-card" key={number}>
            <span className="challenge-number">{number}</span>
            <span className="challenge-symbol">{number === "01" ? "⌘" : number === "02" ? "◌" : "≈"}</span>
            <span className="challenge-type">{type}</span>
            <h3>{title}</h3>
            <p>{question}</p>
          </article>
        ))}
      </div>
      <div className="research-flow">
        {["Research", "Ideate", "Build", "Test", "Iterate"].map((step, index) => (
          <React.Fragment key={step}>
            <span>{step}</span>{index < 4 && <i>→</i>}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function EvaluationSlide() {
  return (
    <section className="slide content-slide evaluation-slide" id="slide-7" aria-label="Slide 8: Evaluation">
      <SlideHeading act="ACT 2 · FINDING THE TALENT" title={<>How we evaluated<br /><em>innovation.</em></>} subtitle="Looking beyond the final answer to understand how students think, build and communicate." />
      <div className="evaluation-grid">
        {evaluationCriteria.map(([title, description], index) => (
          <article className="evaluation-card" key={title}>
            <span>0{index + 1}</span>
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
      <blockquote className="evaluation-quote">
        We weren’t looking for students who knew the most AI.<br />
        <em>We were looking for students who could use AI to solve problems.</em>
      </blockquote>
    </section>
  );
}

function SelectionSlide() {
  const steps = ["Student registration", "Assessment", "AI case study", "L1 interview", "L2 interview", "Final cohort"];
  return (
    <section className="slide content-slide selection-slide" id="slide-8" aria-label="Slide 9: Selection">
      <SlideHeading act="ACT 2 · FINDING THE TALENT" date="30 SEPTEMBER 2026" title={<>Selecting the<br /><em>AI Lab cohort.</em></>} subtitle="A structured journey from registration through two interview rounds." />
      <div className="selection-journey">
        {steps.map((step, index) => (
          <div className={`selection-step${index === steps.length - 1 ? " selected" : ""}`} key={step}>
            <span className="selection-node">{index === steps.length - 1 ? "✦" : `0${index + 1}`}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
      <div className="selection-footer">
        <span>REGISTRATION <i>→</i> ASSESSMENT <i>→</i> CASE STUDY <i>→</i> L1 <i>→</i> L2 <i>→</i> COHORT</span>
        <p>Selection is not the end of the journey.<br /><em>It’s the beginning of the Lab.</em></p>
      </div>
    </section>
  );
}

function LabSlide() {
  const pillars = [
    ["REAL PROBLEMS", "KOHLER business challenges"],
    ["AI TECHNOLOGY", "AI infrastructure, tools & platforms"],
    ["STUDENT TALENT", "Curiosity, creativity & technical skills"],
    ["MENTORSHIP", "KOHLER + MIT-WPU expertise"],
  ];
  return (
    <section className="slide content-slide lab-slide" id="slide-9" aria-label="Slide 10: The AI Lab">
      <SlideHeading act="ACT 3 · BUILDING THE FUTURE" date="OCTOBER 2026" title={<>The <em>KOHLER AI Lab.</em></>} subtitle="A new environment for students to turn real challenges into meaningful innovation." />
      <div className="lab-equation">
        <div className="lab-pillars">
          {pillars.map(([title, description]) => (
            <article className="lab-pillar" key={title}>
              <span>{title}</span><p>{description}</p>
            </article>
          ))}
        </div>
        <span className="equation-symbol">↓</span>
        <strong className="innovation-word">INNOVATION</strong>
        <span className="equation-symbol">↓</span>
        <div className="outcomes">
          {["Prototypes", "POCs", "Business solutions"].map((outcome, index) => (
            <React.Fragment key={outcome}>
              <span>{outcome}</span>{index < 2 && <i>→</i>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="inauguration-note">KOHLER AI LAB INAUGURATION <span>·</span> MIT-WPU, PUNE</div>
    </section>
  );
}

function OutcomesSlide() {
  const outcomes = [
    ["⌘", "Knowledge Intelligence", "RAG / Enterprise Knowledge"],
    ["◌", "Generative Bathroom Designer", "AI / Generative Design"],
    ["≈", "Water Intelligence", "AI / Analytics"],
  ];
  return (
    <section className="slide content-slide outcomes-slide" id="slide-10" aria-label="Slide 11: Early explorations">
      <SlideHeading act="ACT 3 · BUILDING THE FUTURE" title={<>A glimpse of what<br /><em>students can create.</em></>} subtitle="Early prototype explorations across three real-world challenge areas." />
      <div className="outcomes-grid">
        {outcomes.map(([symbol, title, category], index) => (
          <article className="outcome-card" key={title}>
            <div className="outcome-card-top"><span>0{index + 1} / EXPLORATION</span><span>{symbol}</span></div>
            <div className={`outcome-visual outcome-visual-${index + 1}`}><span>{symbol}</span></div>
            <h3>{title}</h3>
            <p>{category}</p>
          </article>
        ))}
      </div>
      <blockquote className="outcomes-note">
        These are not finished products. They are a glimpse of what students can create when given real problems and the right environment.
      </blockquote>
    </section>
  );
}

function BiggerPictureSlide() {
  const pipeline = ["Students", "Real KOHLER problems", "Experimentation", "AI prototypes", "Business value"];
  return (
    <section className="slide content-slide bigger-slide" id="slide-11" aria-label="Slide 12: The bigger picture">
      <SlideHeading act="ACT 3 · BUILDING THE FUTURE" title={<>This is <em>bigger than a lab.</em></>} subtitle="A continuous innovation pipeline—connecting student potential to business value." />
      <div className="value-pipeline">
        {pipeline.map((item, index) => (
          <React.Fragment key={item}>
            <div className={`pipeline-step${index === pipeline.length - 1 ? " pipeline-end" : ""}`}>
              <span>0{index + 1}</span><strong>{item}</strong>
            </div>
            {index < pipeline.length - 1 && <i>↓</i>}
          </React.Fragment>
        ))}
      </div>
      <div className="ecosystem">
        <span>A CONTINUOUS INNOVATION PIPELINE</span>
        <strong>Talent <i>→</i> Ideas <i>→</i> Experiments <i>→</i> Solutions</strong>
      </div>
      <blockquote className="bigger-quote">
        The goal isn’t to build one AI solution.<br />
        <em>The goal is to build an ecosystem that keeps creating them.</em>
      </blockquote>
    </section>
  );
}

function ClosingSlide() {
  const journey = ["IDEA", "PARTNERSHIP", "ENGAGEMENT", "INNOVATION", "SELECTION", "LAUNCH", "BUILD", "EXPERIMENT", "SCALE"];
  return (
    <section className="slide closing-slide" id="slide-12" aria-label="Slide 13: The journey continues">
      <div className="closing-image" />
      <div className="closing-content">
        <Eyebrow light>ACT 3 · BUILDING THE FUTURE</Eyebrow>
        <p className="closing-date">OCTOBER 2026 <span>·</span> THE NEXT CHAPTER</p>
        <h2>October is not<br /><em>the finish line.</em></h2>
        <div className="extended-journey">
          {journey.map((stage, index) => (
            <React.Fragment key={stage}>
              <span className={index < 6 ? "journey-done" : ""}>{stage}</span>
              {index < journey.length - 1 && <i>→</i>}
            </React.Fragment>
          ))}
        </div>
        <p className="closing-line">We started with an idea. We built the partnership. We found the students. We challenged them to innovate.</p>
        <strong className="closing-next">Now we’re ready to build.</strong>
        <div className="closing-signature">KOHLER × MIT-WPU AI LAB <span>·</span> OCTOBER 2026</div>
      </div>
    </section>
  );
}

const slideComponents = [
  Cover,
  Overview,
  IdeaSlide,
  PartnerSlide,
  BuildSlide,
  EngagementSlide,
  InnovationSlide,
  EvaluationSlide,
  SelectionSlide,
  LabSlide,
  OutcomesSlide,
  BiggerPictureSlide,
  ClosingSlide,
];

function MilestoneTimeline() {
  return (
    <ol className="milestone-timeline" aria-label="AI Lab milestones">
      {stages.map((stage) => (
        <li key={stage.label}>
          <span className="milestone-date">{stage.date}</span>
          <span className="milestone-node" aria-hidden="true" />
          <span className="milestone-label">{stage.label}</span>
        </li>
      ))}
    </ol>
  );
}

function VideoScreen({ onEnded, background }) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [playError, setPlayError] = useState("");

  const startVideo = async () => {
    if (!videoRef.current) return;
    try {
      await videoRef.current.play();
      setHasStarted(true);
      setPlayError("");
    } catch {
      setPlayError("The video could not be played. Please try again.");
    }
  };

  return (
    <section className="video-screen" aria-label="AI Lab video" style={{ "--video-background": background }}>
      <div className="video-frame">
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}assets/KxMIT.mp4`}
          poster={`${import.meta.env.BASE_URL}assets/thumbnail.png`}
          controls={hasStarted}
          playsInline
          preload="metadata"
          onEnded={onEnded}
        />
        {!hasStarted && (
          <button className="video-play" type="button" onClick={startVideo} aria-label="Play AI Lab video">
            <span aria-hidden="true">▶</span>
          </button>
        )}
        {playError && <p className="video-error" role="alert">{playError}</p>}
      </div>
    </section>
  );
}

function CaseStudiesScreen() {
  return (
    <section
      className="case-studies-screen"
      aria-labelledby="case-studies-title"
      style={{
        "--case-studies-background": `url("${import.meta.env.BASE_URL}assets/bg1.avif")`,
      }}
    >
      <div className="case-studies-background" aria-hidden="true" />
      <div className="case-studies-heading">
        <p className="case-studies-eyebrow">STUDENT EVALUATION</p>
        <h1 id="case-studies-title">Case Study Challenge</h1>
      </div>
      <div className="case-study-grid">
        {caseStudies.map((study) => (
          <article className="case-study-card" key={study.track}>
            <p className="case-study-track">{study.track}</p>
            <h2>{study.title}</h2>
            <section className="case-study-section">
              <h3>OBJECTIVE</h3>
              <p>{study.objective}</p>
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [activeScreen, setActiveScreen] = useState(() => (
    window.location.hash === "#timeline"
      ? "timeline"
      : window.location.hash === "#cases" ? "cases" : "video"
  ));

  useEffect(() => {
    const syncScreen = () => {
      setActiveScreen(
        window.location.hash === "#timeline"
          ? "timeline"
          : window.location.hash === "#cases" ? "cases" : "video",
      );
    };
    window.addEventListener("hashchange", syncScreen);
    return () => window.removeEventListener("hashchange", syncScreen);
  }, []);

  const navigateScreen = (index) => {
    const nextScreen = screens[index];
    if (!nextScreen) return;
    window.location.hash = nextScreen.id;
    setActiveScreen(nextScreen.id);
  };

  return (
    <>
      <Header activeScreen={activeScreen} />
      <main className="presentation">
        {activeScreen === "video"
          ? <VideoScreen
              onEnded={() => navigateScreen(1)}
              background={`url("${import.meta.env.BASE_URL}assets/bg2.avif")`}
            />
          : activeScreen === "timeline" ? <Cover /> : <CaseStudiesScreen />}
      </main>
      <ScreenNavigator
        activeScreen={activeScreen}
        navigate={navigateScreen}
      />
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>,
);
