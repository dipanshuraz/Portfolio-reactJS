"use client";

import { resumeData } from "./resumeData";
import { useEffect, useMemo, useState } from "react";
import MatrixText from "./MatrixText";
import SkillsCloud from "./SkillsCloud";

const navItems = [
  { id: "home", label: "Home", jp: "ホーム" },
  { id: "experience", label: "Experience", jp: "経験" },
  { id: "skills", label: "Skills", jp: "技能" },
  { id: "certs", label: "Certificates", jp: "資格" },
  { id: "education", label: "Education", jp: "学歴" },
  { id: "contact", label: "Contact", jp: "連絡" }
];

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function Sections() {
  const [activeId, setActiveId] = useState("home");
  const format2 = (value: number) => value.toFixed(2);

  const activeMeta = useMemo(() => {
    return navItems.find((item) => item.id === activeId) ?? navItems[0];
  }, [activeId]);

  const activeIndex = useMemo(() => {
    const index = navItems.findIndex((item) => item.id === activeId);
    return index === -1 ? 0 : index;
  }, [activeId]);

  const progress = ((activeIndex + 1) / navItems.length) * 100;

  useEffect(() => {
    const items = document.querySelectorAll(
      ".timeline-node, .project-row, .award-list div"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section-id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section-id") ?? "home";
            setActiveId(id);
          }
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateSky = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      doc.style.setProperty("--sky-darken", progress.toFixed(3));
    };
    updateSky();
    window.addEventListener("scroll", updateSky, { passive: true });
    window.addEventListener("resize", updateSky);
    return () => {
      window.removeEventListener("scroll", updateSky);
      window.removeEventListener("resize", updateSky);
    };
  }, []);


  return (
    <div className="overlay">
      <div className="hud">
        <div className="hud-panel">
          <div className="hud-title">Energy</div>
          <div className="hud-value">{format2(progress)}%</div>
          <div className="hud-progress">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
        <div className="hud-panel hud-coords">
          <div className="hud-title">Coords</div>
          <div className="hud-value">
            {String(activeIndex + 1).padStart(2, "0")} / {String(navItems.length).padStart(2, "0")}
          </div>
          <div className="hud-sub">
            x: {format2(activeIndex * 14)} · y: {format2(progress)} · z: {format2(activeIndex * 6)}
          </div>
        </div>
        <div className="hud-panel hud-combat">
          <div className="hud-title">Sentinel</div>
          <div className="hud-value">Focus Lock · {format2(71 + activeIndex * 2)}%</div>
          <div className="hud-sub">Vector: {format2(18 + activeIndex * 1.6)}°</div>
          <div className="hud-sub">Range: {format2(3.1 + activeIndex * 0.4)} km</div>
        </div>
        <div className="hud-panel hud-combat">
          <div className="hud-title">Pulse</div>
          <div className="hud-value">Core Sync · {format2(82 + activeIndex * 1.5)}%</div>
          <div className="hud-sub">Latency: {format2(12 - activeIndex * 0.6)} ms</div>
          <div className="hud-sub">Drift: {format2(0.18 + activeIndex * 0.04)}°</div>
        </div>
        <div className="hud-panel hud-combat">
          <div className="hud-title">Flow</div>
          <div className="hud-value">Momentum · {format2(64 + activeIndex * 2.6)}%</div>
          <div className="hud-sub">Energy: {format2(progress)}%</div>
          <div className="hud-sub">Output: {format2(220 + activeIndex * 18)} ops</div>
        </div>
      </div>
      <aside className="side-nav">
        <div className="side-nav__title">Index</div>
        <nav className="side-nav__list">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`side-nav__link ${activeId === item.id ? "is-active" : ""}`}
            >
              <span className="side-nav__num">{String(index + 1).padStart(2, "0")}</span>
              <span>{item.label}</span>
              <span className="side-nav__jp jp-text">{item.jp}</span>
            </a>
          ))}
        </nav>
      </aside>
      <div className="content">
        <div className="topline">
          <span className="index">
            {String(navItems.findIndex((item) => item.id === activeId) + 1).padStart(2, "0")}.{" "}
            {activeMeta.label.toUpperCase()}
          </span>
          <span className="jp-text">{activeMeta.jp}</span>
          <span className="index">{activeMeta.label.toUpperCase()}</span>
        </div>
        <section
          className={`hero screen-section ${activeId === "home" ? "is-active" : ""}`}
          data-section
          data-section-id="home"
          id="home"
        >
          <div className="hero-meta">
            <span>100% LOADED</span>
            <span className="jp-text">深度 · WEB3 / FULL-STACK</span>
          </div>
          <div className="hero-title">
            <div className="hero-title-row">
             <div className="hero-flag">
               <svg className="flag-3d" viewBox="0 0 48 24" role="img" aria-label="India flag">
                <defs>
                  <linearGradient id="flagShade" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
                  </linearGradient>
                  <clipPath id="flagCircle">
                    <circle cx="24" cy="12" r="11.5" />
                  </clipPath>
                </defs>
                <g clipPath="url(#flagCircle)">
                  <rect x="1" y="1" width="46" height="7.5" fill="#FF9933" />
                  <rect x="1" y="8.5" width="46" height="7.5" fill="#ffffff" />
                  <rect x="1" y="16" width="46" height="7.5" fill="#0B6623" />
                  <circle cx="24" cy="12" r="3.2" fill="none" stroke="#2a4fbf" strokeWidth="1.2" />
                  <circle cx="24" cy="12" r="0.7" fill="#2a4fbf" />
                  <rect x="1" y="1" width="46" height="22" fill="url(#flagShade)" />
                </g>
                <circle cx="24" cy="12" r="11.5" fill="none" stroke="#0b0b0b" strokeWidth="1" />
              </svg>
             </div>
              <MatrixText
                className="matrix-title"
                phrases={["Deepanshu Prajapati", "दीपांशु प्रजापति", "ディーパンシュ・プラジャパティ"]}
              />
            </div>
            <span>{resumeData.title}</span>
          </div>
          <p className="hero-copy">{resumeData.summary}</p>
          <div className="jp-text jp-subtle">挑戦 · DESIGN · ENGINEERING</div>
          <div className="hero-social">
            <a
              className="social-link"
              href="https://www.linkedin.com/in/codersadhu/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5ZM.3 8.1h4.4V23H.3V8.1Zm7.4 0h4.2v2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.4 3 5.4 6.9V23h-4.4v-6.6c0-1.6 0-3.6-2.2-3.6s-2.6 1.7-2.6 3.5V23H7.7V8.1Z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              className="social-link"
              href="https://github.com/dipanshuraz/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.4 3.44 9.98 8.2 11.6.6.12.82-.27.82-.6 0-.3-.01-1.1-.02-2.2-3.34.75-4.04-1.66-4.04-1.66-.54-1.42-1.32-1.8-1.32-1.8-1.08-.76.08-.75.08-.75 1.2.09 1.83 1.27 1.83 1.27 1.06 1.87 2.78 1.33 3.46 1.02.11-.8.41-1.33.74-1.63-2.66-.31-5.46-1.36-5.46-6.03 0-1.33.46-2.42 1.23-3.27-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.25a11.2 11.2 0 0 1 6 0C17.7 5.42 18.7 5.75 18.7 5.75c.65 1.69.24 2.94.12 3.25.76.85 1.23 1.94 1.23 3.27 0 4.68-2.8 5.71-5.48 6.02.42.37.8 1.1.8 2.22 0 1.6-.01 2.9-.01 3.3 0 .34.22.73.83.6 4.75-1.63 8.19-6.2 8.19-11.6C24 5.5 18.63 0 12 0Z" />
              </svg>
              <span>GitHub</span>
            </a>
          </div>
          <div className="cta-row">
            <a
              className="btn primary"
              href={`mailto:${resumeData.email}?subject=${encodeURIComponent(
                "Project Inquiry — [Your Company/Project]"
              )}&body=${encodeURIComponent(
                "Hi Deepanshu,\n\nI’m [Your Name] from [Company]. We’re looking for help with [Project/Role].\n\nDetails:\n- Project overview:\n- Timeline:\n- Budget range:\n- Tech stack:\n\nAttachments:\n- [Attach brief / spec / deck]\n\nBest,\n[Your Name]\n[Title]\n[Phone / LinkedIn]"
              )}`}
            >
              Start a conversation
            </a>
          <a
            className="btn secondary"
            href="https://docs.google.com/document/d/1qaDXb4MWGePlOtO8lg-ZIKgzzFgJyDKHnIBgaiehkCU/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>
          </div>
          <div className="hero-footer">
            <span>{resumeData.location}</span>
            <span>{resumeData.phone}</span>
            <span>{resumeData.email}</span>
          </div>
        </section>

        <section
          className={`section-card screen-section ${activeId === "experience" ? "is-active" : ""}`}
          id="experience"
          data-section
          data-section-id="experience"
        >
          <div className="section-head">
            <span className="index">2. EXPERIENCE</span>
            <span className="tag">Experience</span>
          </div>
          <h2>6+ Years of Product Delivery</h2>
          <div className="project-links">
            <span className="project-links__label">Projects</span>
            {resumeData.experience.slice(0, 4).map((role) => (
              <a key={role.company} className="project-link" href={`#exp-${slugify(role.company)}`}>
                {role.company}
              </a>
            ))}
          </div>
          <div className="timeline-rail">
            {resumeData.experience.map((role, index) => (
              <div
                key={role.company}
                id={`exp-${slugify(role.company)}`}
                className={`timeline-node ${index % 2 ? "is-right" : "is-left"}`}
              >
                <div className="timeline-date">{role.period}</div>
                <div className="timeline-dot" aria-hidden />
                <div className="timeline-card">
                  <h3>
                    {role.role} ·{" "}
                    <a className="experience-link" href={role.url} target="_blank" rel="noreferrer">
                      {role.company}
                    </a>
                  </h3>
                  <p>{role.summary}</p>
                  <ul>
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="timeline-stack">{role.stack}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`section-card screen-section ${activeId === "skills" ? "is-active" : ""}`}
          id="skills"
          data-section
          data-section-id="skills"
        >
          <div className="section-head">
            <span className="index">3. SKILLS</span>
            <span className="tag">Skills</span>
          </div>
          <SkillsCloud />
        </section>

        <section
          className={`section-card screen-section ${activeId === "certs" ? "is-active" : ""}`}
          id="certs"
          data-section
          data-section-id="certs"
        >
          <div className="section-head">
            <span className="index">4. CREDENTIALS</span>
            <span className="tag">Credentials</span>
          </div>
          <h2>Certificates</h2>
          <div className="timeline certs-list">
            {resumeData.certificates.map((cert) => (
              <div key={cert.title} className="timeline-node is-left">
                <a className="experience-link" href={cert.url} target="_blank" rel="noreferrer">
                  {cert.title}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`section-card screen-section ${activeId === "education" ? "is-active" : ""}`}
          id="education"
          data-section
          data-section-id="education"
        >
          <div className="section-head">
            <span className="index">5. EDUCATION</span>
            <span className="tag">Education</span>
          </div>
          <h2>Academic Foundation</h2>
          <div className="timeline-rail">
            {resumeData.education.map((edu, index) => (
              <div key={edu.school} className={`timeline-node ${index % 2 ? "is-right" : "is-left"}`}>
                <div className="timeline-dot" aria-hidden />
                <div className="timeline-card">
                  <h3>{edu.degree}</h3>
                  <p>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className={`footer screen-section ${activeId === "contact" ? "is-active" : ""}`}
          data-section
          data-section-id="contact"
          id="contact"
        >
          <p>
            Available for high-impact Web3, platform, and analytics work. Reach out at{" "}
            <strong>{resumeData.email}</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
