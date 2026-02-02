"use client";

import { resumeData } from "./resumeData";
import { useEffect, useMemo, useState } from "react";
import MatrixText from "./MatrixText";

const navItems = [
  { id: "home", label: "Home", jp: "ホーム" },
  { id: "awards", label: "Achievements", jp: "実績" },
  { id: "highlights", label: "Highlights", jp: "要約" },
  { id: "experience", label: "Experience", jp: "経験" },
  { id: "skills", label: "Skills", jp: "技能" },
  { id: "certs", label: "Certificates", jp: "資格" },
  { id: "education", label: "Education", jp: "学歴" }
];

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
      { threshold: 0.55 }
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

  useEffect(() => {
    const section = document.getElementById("skills");
    if (!section) return;
    const track = section.querySelector<HTMLElement>(".skills-scroll");
    if (!track) return;

    const onWheel = (event: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView =
        rect.top <= window.innerHeight * 0.2 &&
        rect.bottom >= window.innerHeight * 0.8;
      if (!inView) return;

      const max = track.scrollWidth - track.clientWidth;
      if (max <= 0) return;

      const next = Math.min(max, Math.max(0, track.scrollLeft + event.deltaY));
      if (next !== track.scrollLeft) {
        track.scrollLeft = next;
        event.preventDefault();
      }
    };

    section.addEventListener("wheel", onWheel, { passive: false });
    return () => section.removeEventListener("wheel", onWheel);
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
        <section className="hero" data-section data-section-id="home" id="home">
          <div className="hero-meta">
            <span>100% LOADED</span>
            <span className="jp-text">深度 · WEB3 / FULL-STACK</span>
          </div>
          <div className="hero-title">
            <div className="hero-title-row">
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
              <MatrixText
                className="matrix-title"
                phrases={["Deepanshu Prajapati", "दीपांशु प्रजापति", "ディーパンシュ・プラジャパティ"]}
              />
            </div>
            <span>{resumeData.title}</span>
          </div>
          <p className="hero-copy">{resumeData.summary}</p>
          <div className="jp-text jp-subtle">挑戦 · DESIGN · ENGINEERING</div>
          <MatrixText />
          <div className="cta-row">
            <a className="btn primary" href={`mailto:${resumeData.email}`}>
              Start a conversation
            </a>
          <a className="btn secondary" href="/Deepanshu_Resume.pdf" download>
            Download Resume
          </a>
          </div>
          <div className="hero-footer">
            <span>{resumeData.location}</span>
            <span>{resumeData.phone}</span>
            <span>{resumeData.email}</span>
          </div>
        </section>

        <section className="section-card awards" id="awards" data-section data-section-id="awards">
          <div className="section-head">
            <span className="index">2. RECOGNITION</span>
            <span className="tag">Awards</span>
          </div>
          <div className="award-grid">
            <div>
              <h3>Proof of Impact</h3>
              <p>
                Reduced AWS costs by 20%-50%, scaled trading infrastructure, and delivered analytics
                platforms with measurable engagement lifts.
              </p>
            </div>
            <div className="award-list">
              {resumeData.highlights.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-card" id="highlights" data-section data-section-id="highlights">
          <div className="section-head">
            <span className="index">3. HIGHLIGHTS</span>
            <span className="tag">Impact</span>
          </div>
          <h2>Highlights</h2>
          <div className="grid">
            {resumeData.highlights.map((item) => (
              <div key={item} className="timeline-node is-left is-visible">
                {item}
              </div>
            ))}
          </div>
          <div className="section-head" style={{ marginTop: 36 }}>
            <span className="index">3.1 STRENGTHS</span>
            <span className="tag">Strengths</span>
          </div>
          <div className="grid">
            {resumeData.strengths.map((item) => (
              <div key={item} className="timeline-node is-left is-visible">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-card" id="experience" data-section data-section-id="experience">
          <div className="section-head">
            <span className="index">4. EXPERIENCE</span>
            <span className="tag">Experience</span>
          </div>
          <h2>6+ Years of Product Delivery</h2>
          <div className="timeline-rail">
            {resumeData.experience.map((role, index) => (
              <div key={role.company} className={`timeline-node ${index % 2 ? "is-right" : "is-left"}`}>
                <div className="timeline-date">{role.period}</div>
                <div className="timeline-dot" aria-hidden />
                <div className="timeline-card">
                  <h3>
                    {role.role} · {role.company}
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
          <div className="section-head" style={{ marginTop: 40 }}>
            <span className="index">4.1 PROJECTS</span>
            <span className="tag">Platforms & Products</span>
          </div>
          <div className="project-list">
            {resumeData.experience.slice(0, 4).map((role, index) => (
              <div key={role.company} className="project-row">
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <div className="project-content">
                  <h3>{role.company}</h3>
                  <p>{role.summary}</p>
                  <span className="project-meta">{role.stack}</span>
                </div>
                <a className="btn ghost" href="#experience">
                  View
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="section-card" id="skills" data-section data-section-id="skills">
          <div className="section-head">
            <span className="index">5. SKILLS</span>
            <span className="tag">Skills</span>
          </div>
          <h2>Tooling and Platforms</h2>
          <div className="skills-scroll">
            <div className="skills-panel">
              <h3>Languages</h3>
              <div className="skills">
                {resumeData.skills.languages.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Frontend</h3>
              <div className="skills">
                {resumeData.skills.frontend.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Backend</h3>
              <div className="skills">
                {resumeData.skills.backend.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Testing</h3>
              <div className="skills">
                {resumeData.skills.testing.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Databases</h3>
              <div className="skills">
                {resumeData.skills.database.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Infrastructure</h3>
              <div className="skills">
                {resumeData.skills.infra.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Product Management</h3>
              <div className="skills">
                {resumeData.skills.product.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="skills-panel">
              <h3>Tools</h3>
              <div className="skills">
                {resumeData.skills.tools.map((skill) => (
                  <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

        <section className="section-card" id="certs" data-section data-section-id="certs">
          <div className="section-head">
            <span className="index">6. CREDENTIALS</span>
            <span className="tag">Credentials</span>
          </div>
          <h2>Certificates</h2>
          <div className="timeline">
            {resumeData.certificates.map((cert) => (
              <div key={cert} className="timeline-node is-left">
                {cert}
              </div>
            ))}
          </div>
        </section>

        <section className="section-card" id="education" data-section data-section-id="education">
          <div className="section-head">
            <span className="index">7. EDUCATION</span>
            <span className="tag">Education</span>
          </div>
          <h2>Academic Foundation</h2>
          <div className="timeline-rail">
            {resumeData.education.map((edu, index) => (
              <div key={edu.school} className={`timeline-node ${index % 2 ? "is-right" : "is-left"}`}>
                <div className="timeline-date">{edu.period}</div>
                <div className="timeline-dot" aria-hidden />
                <div className="timeline-card">
                  <h3>{edu.degree}</h3>
                  <p>{edu.school}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="footer" data-section>
          <p>
            Available for high-impact Web3, platform, and analytics work. Reach out at{" "}
            <strong>{resumeData.email}</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
