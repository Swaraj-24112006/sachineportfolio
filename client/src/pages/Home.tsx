import { useState, type FormEvent } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Handshake,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Megaphone,
  Phone,
  Send,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const heroArtwork = "/manus-storage/async-images/XTpa5bsgXD00FQHgikvwHG/image-1.webp";
const contactEmail = "rubyraina25@gmail.com";
const phoneNumber = "7006312560";
const resumePath = "/Sachin_Raina_Resume.pdf";

const focusAreas = [
  "Event coordination",
  "Teamwork & collaboration",
  "Communication",
  "Time management",
  "Leadership",
  "Volunteer management",
  "Problem solving",
  "Event planning",
  "On-ground coordination",
];

const projects = [
  {
    number: "01",
    title: "CRESA Induction Programme",
    type: "Campus event · Participant experience",
    description:
      "Supported participant management and on-ground coordination to help the department induction run smoothly.",
    icon: Users,
    tone: "lilac",
  },
  {
    number: "02",
    title: "Techno-Insights Symposium",
    type: "Technical event · Speaker programme",
    description:
      "Contributed to event coordination and participant management for a symposium with industry and academic speakers.",
    icon: Sparkles,
    tone: "mint",
  },
  {
    number: "03",
    title: "LLM Hands-on Workshop",
    type: "Technology · Workshop operations",
    description:
      "Helped coordinate a hands-on session covering Large Language Models, machine learning, inference frameworks, and quantization.",
    icon: Code2,
    tone: "peach",
  },
  {
    number: "04",
    title: "CHAKAVA — The Lost Warrior",
    type: "Treasure hunt · 170+ participants",
    description:
      "Supported participant management and event coordination for a multi-round department competition with 170+ participants.",
    icon: Target,
    tone: "blue",
  },
  {
    number: "05",
    title: "Department Tech Fest",
    type: "Campus promotion · Inter-college outreach",
    description:
      "Contributed to organizing the department tech fest and visited other colleges to promote the event and encourage student participation.",
    icon: Megaphone,
    tone: "yellow",
  },
];

const timeline = [
  {
    label: "CRESA · PCCOE",
    title: "Event Management Team Member",
    date: "Department-level activities",
    body: "Participated in planning and executing student events—supporting venue setup, registrations, participant coordination, volunteer communication, and on-ground operations.",
  },
  {
    label: "INTER-COLLEGE OUTREACH",
    title: "Tech Fest Promotion",
    date: "Campus outreach",
    body: "Visited other colleges to promote PCCOE’s department tech fest and encourage student participation—an experience that shaped my interest in college partnerships.",
  },
  {
    label: "TECHNICAL LEARNING",
    title: "Academic projects & workshops",
    date: "AI · ML · IoT",
    body: "Participated in technical projects, presentations, and collaborative activities while exploring artificial intelligence, machine learning, IoT, and software development.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<"idle" | "ready">("idle");

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = `Internship enquiry from ${name}`;
    const body = `Hi Sachin,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setFormState("ready");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Sachin Raina, home">
          <span className="brand-mark" aria-hidden="true">S<span>.</span></span>
          <span className="brand-name">Sachin Raina<span>PORTFOLIO · 2026</span></span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="availability"><span className="availability-dot" /> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <div className="hero-profile">
            <img className="hero-profile-photo" src="/sachin-raina-photo.webp" alt="Portrait of Sachin Raina" width={56} height={56} />
            <div className="hero-profile-copy"><span className="hero-profile-name">SACHIN RAINA</span><span className="hero-profile-meta">COMPUTER ENGINEERING · PCCOE, PUNE</span></div>
          </div>
          <h1 id="hero-title">Tech-minded.<br /><em>People-first.</em></h1>
          <p className="hero-lede">
            I’m Sachin Raina, a third-year Computer Engineering student who enjoys bringing people, ideas, and technology together.
          </p>
          <div className="role-pills" aria-label="Internship interests">
            <span><Megaphone size={15} /> Marketing Intern</span>
            <span><Handshake size={15} /> College Partnerships</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Start a conversation <ArrowUpRight size={17} /></a>
            <a className="button button-quiet" href={resumePath} download="Sachin_Raina_Resume.pdf"><Download size={16} /> Download resume</a>
          </div>
          <div className="hero-meta"><MapPin size={15} /> Pune, India <span className="meta-divider" /> PCCOE · B.Tech Computer Engineering</div>
        </div>
        <div className="hero-visual" style={{ backgroundImage: `url('${heroArtwork}')` }} aria-label="Abstract technology and digital marketing illustration" role="img">
          <div className="visual-topline"><span>TECH × COMMUNITY</span><span className="visual-pulse"><span /> ACTIVE</span></div>
          <div className="visual-caption">
            <p>Where technology meets people.</p>
            <span>Curious by nature. Collaborative by choice.</span>
          </div>
          <div className="visual-float"><div className="float-icon"><Users size={17} /></div><div><strong>170+</strong><span>participants supported</span></div><ArrowUpRight className="float-arrow" size={16} /></div>
          <div className="visual-index">01 <span>—</span> 05</div>
          <span className="visual-orbit orbit-one" aria-hidden="true" /><span className="visual-orbit orbit-two" aria-hidden="true" />
        </div>
        <div className="hero-bottomline"><span>STUDENT · EVENT COORDINATOR · FUTURE MARKETER</span><a href="#about">SCROLL TO EXPLORE <ArrowDownRight size={15} /></a></div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-wrap about-grid">
          <div className="section-heading">
            <SectionEyebrow>01 / A LITTLE ABOUT ME</SectionEyebrow>
            <h2>Curiosity in tech.<br /><span>Energy in a room.</span></h2>
          </div>
          <div className="about-copy">
            <p className="about-lede">I’m studying Computer Engineering at PCCOE, where I’m exploring AI, machine learning, IoT, and software development—and finding just as much value in the teamwork that makes good ideas happen.</p>
            <p>As a CRESA event management team member, I’ve helped with department events from registrations and volunteer coordination to participant experience. Promoting our tech fest at other colleges sparked a particular interest in digital marketing and building meaningful campus partnerships.</p>
            <a className="text-link" href="#experience">More about my experience <ArrowRight size={16} /></a>
          </div>
          <div className="about-stamp"><span>ENGINEERING</span><span className="stamp-plus">+</span><span>COMMUNITY</span><span className="stamp-dot" /></div>
        </div>
      </section>

      <section className="roles-section section-wrap" aria-labelledby="roles-title">
        <div className="section-topline"><SectionEyebrow>02 / WHERE I CAN CONTRIBUTE</SectionEyebrow><span className="section-index">TWO DIRECTIONS · ONE MINDSET</span></div>
        <div className="roles-heading"><h2 id="roles-title">The work I’m<br /><em>looking toward.</em></h2><p>My campus experience has given me a foundation in coordination and communication. I’m ready to grow those skills in a real-world internship.</p></div>
        <div className="role-cards">
          <article className="role-card role-card-marketing">
            <div className="role-card-top"><span className="role-icon"><Megaphone size={20} /></span><span>01 — MARKETING</span></div>
            <h3>Marketing<br />Intern</h3>
            <p>Interested in helping brands and communities connect through thoughtful communication, event promotion, and audience-first ideas.</p>
            <div className="role-tags"><span>Digital marketing</span><span>Content & outreach</span><span>Audience engagement</span></div>
            <a href="#contact" aria-label="Discuss a Marketing Intern opportunity">Let’s explore <ArrowUpRight size={17} /></a>
          </article>
          <article className="role-card role-card-partnerships">
            <div className="role-card-top"><span className="role-icon"><Handshake size={20} /></span><span>02 — PARTNERSHIPS</span></div>
            <h3>College<br />Partnership Intern</h3>
            <p>Drawn to the relationship-building side of campus outreach—connecting student communities, coordinating events, and making collaboration easy.</p>
            <div className="role-tags"><span>College outreach</span><span>Event coordination</span><span>Volunteer teamwork</span></div>
            <a href="#contact" aria-label="Discuss a College Partnership Intern opportunity">Let’s explore <ArrowUpRight size={17} /></a>
          </article>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="section-wrap experience-inner">
          <div className="experience-intro"><SectionEyebrow>03 / EXPERIENCE & LEARNING</SectionEyebrow><h2>Making things<br /><em>happen together.</em></h2><p>My experience so far is rooted in campus life: showing up, coordinating the details, and helping a team deliver a good experience.</p><div className="experience-note"><CalendarDays size={17} /><span>Learning by doing, one event at a time.</span></div></div>
          <div className="timeline" aria-label="Experience and learning">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-marker"><span>{index === 0 ? "●" : ""}</span></div>
                <div className="timeline-content"><div className="timeline-label">{item.label}</div><div className="timeline-titleline"><h3>{item.title}</h3><span>{item.date}</span></div><p>{item.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-wrap" id="work">
        <div className="section-topline"><SectionEyebrow>04 / PROJECTS & CAMPUS EVENTS</SectionEyebrow><span className="section-index">A FEW THINGS I’VE HELPED BRING TO LIFE</span></div>
        <div className="work-heading"><h2>Good work is<br /><em>always a team effort.</em></h2><p>Campus events have been my classroom for planning, communication, and collaboration.</p></div>
        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            return <article className="project-row" key={project.number}>
              <span className="project-number">{project.number}</span>
              <span className={`project-icon ${project.tone}`}><Icon size={19} /></span>
              <div className="project-main"><h3>{project.title}</h3><span>{project.type}</span></div>
              <p className="project-description">{project.description}</p>
              <ArrowUpRight className="project-arrow" size={19} aria-hidden="true" />
            </article>;
          })}
        </div>
      </section>

      <section className="education-section" id="education">
        <div className="section-wrap education-inner">
          <div><SectionEyebrow>05 / EDUCATION</SectionEyebrow><h2>Building a strong<br /><em>technical foundation.</em></h2></div>
          <article className="education-card">
            <span className="education-icon"><GraduationCap size={22} /></span>
            <div className="education-copy"><span className="education-date">2024 — 2028</span><h3>B.Tech in Computer Engineering</h3><p>Pimpri Chinchwad College of Engineering (PCCOE) · Pune</p><div className="education-details"><span>Third year</span><span className="education-separator" /><span>CGPA 8.5</span></div></div>
            <span className="education-card-mark">PCCOE</span>
          </article>
          <div className="skills-block"><div><span className="skills-label">CORE STRENGTHS</span><div className="skill-tags">{focusAreas.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div><span className="skills-label">TECHNICAL INTERESTS</span><div className="skill-tags skill-tags-tech"><span>Artificial Intelligence</span><span>Machine Learning</span><span>IoT</span><span>Software Development</span></div></div></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="section-wrap contact-inner">
          <div className="contact-copy"><SectionEyebrow>06 / LET’S CONNECT</SectionEyebrow><h2>Have an opportunity<br />in mind? <em>Let’s talk.</em></h2><p>I’m open to conversations about marketing, campus partnerships, and internships where I can learn, contribute, and help a team move forward.</p>
            <div className="contact-details">
              <a href={`mailto:${contactEmail}`}><span className="contact-detail-icon"><Mail size={17} /></span><span><small>EMAIL</small>{contactEmail}</span><ArrowUpRight size={15} /></a>
              <a href={`tel:+91${phoneNumber}`}><span className="contact-detail-icon"><Phone size={17} /></span><span><small>PHONE</small>{phoneNumber}</span><ArrowUpRight size={15} /></a>
            </div>
            <div className="social-links"><span>PROFILE LINKS</span><a className="social-pending" href="https://www.linkedin.com/in/sachin-raina1125/" target="_blank" rel="noopener noreferrer" aria-label="Sachin Raina on LinkedIn, opens in a new tab"><Linkedin size={16} /> LinkedIn <small>View profile ↗</small></a><a className="social-pending" href="https://github.com/sachin-raina1125" target="_blank" rel="noopener noreferrer" aria-label="Sachin Raina on GitHub, opens in a new tab"><Github size={16} /> GitHub <small>View profile ↗</small></a></div>
          </div>
          <form className="contact-form" onSubmit={handleContact}>
            <div className="form-heading"><span><Send size={17} /></span><div><h3>Send a note</h3><p>Your email app will open with your message ready.</p></div></div>
            <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" placeholder="How should I address you?" required />
            <label htmlFor="contact-email">Your email</label><input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
            <label htmlFor="contact-message">What would you like to discuss?</label><textarea id="contact-message" name="message" rows={4} placeholder="Tell me about the opportunity…" required />
            <button className="button button-form" type="submit">Prepare email <ArrowUpRight size={17} /></button>
            {formState === "ready" && <p className="form-confirmation" role="status">Your email app should open with a draft addressed to Sachin.</p>}
            <p className="form-note">This form opens your email app; nothing is stored on this website.</p>
          </form>
        </div>
        <footer className="site-footer section-wrap"><a className="footer-brand" href="#home"><span className="brand-mark" aria-hidden="true">S<span>.</span></span> SACHIN RAINA</a><span>COMPUTER ENGINEERING · PCCOE · PUNE</span><a href={resumePath} download="Sachin_Raina_Resume.pdf">Download resume <Download size={14} /></a><span>© 2026 · MADE WITH INTENTION</span></footer>
      </section>

      <a className="back-to-top" href="#home" aria-label="Back to top"><ArrowUpRight size={17} /></a>
    </main>
  );
}
