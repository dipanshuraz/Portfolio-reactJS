import { resumeData } from "./resumeData";

const toneClasses = [
  "tone-saffron",
  "tone-blue",
  "tone-graphite",
  "tone-crimson",
  "tone-emerald",
  "tone-violet",
  "tone-cobalt",
  "tone-amber"
];

export default function SkillsCloud() {
  const rows = [
    { label: "Language", items: resumeData.skills.languages },
    { label: "Frontend & UI Engineering", items: resumeData.skills.frontend },
    { label: "Backend & APIs", items: resumeData.skills.backend },
    { label: "Web3 & Blockchain", items: resumeData.skills.tools },
    { label: "Testing", items: resumeData.skills.testing },
    { label: "Database", items: resumeData.skills.database },
    { label: "Cloud & DevOps", items: resumeData.skills.infra },
    { label: "Productivity & Collab Tools", items: resumeData.skills.product }
  ];

  return (
    <div className="skills-panel">
      {rows.map((row, rowIndex) => (
        <div key={row.label} className="skills-row">
          <div className="skills-label">{row.label}:</div>
          <div className="skills-pills">
            {row.items.map((item, index) => (
              <span
                key={`${row.label}-${item}`}
                className={`skill-chip ${toneClasses[(index + rowIndex) % toneClasses.length]}`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
