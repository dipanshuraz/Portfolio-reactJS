"use client";

import { useEffect, useState, type ReactNode } from "react";

type IconEntry = {
  label: string;
  svg: ReactNode;
};

type IconMap = Record<string, IconEntry>;

const ICONS: IconMap = {
  home: {
    label: "Meta Human",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Meta human wireframe">
        <g fill="none" stroke="#f2f2f2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M210 40c48 18 74 52 74 98 0 48-30 92-78 116-18 10-34 14-46 14-36 0-70-20-92-50-20-26-30-52-30-78 0-44 22-76 52-94 28-16 80-22 120-6z" />
          <path d="M84 86c22-26 60-40 98-38 54 2 96 36 110 84" />
          <path d="M66 126c30-24 70-36 118-34 58 2 98 26 122 60" />
          <path d="M56 170c36-18 78-24 126-18 48 6 86 24 110 46" />
          <path d="M62 214c38-10 82-8 132 6 36 10 64 26 86 44" />
          <path d="M86 256c32-6 64-2 94 10 24 10 44 22 58 36" />
          <path d="M120 286c18 0 36 6 52 18 8 6 14 12 20 18" />
          <path d="M96 114c10-18 30-28 54-30 18-2 36 2 50 10" />
          <path d="M92 148c14-8 30-12 48-12 20 0 38 4 52 12" />
          <path d="M98 180c16-6 34-8 52-6 18 2 34 6 46 14" />
          <path d="M110 210c16-4 32-4 48 0 10 2 20 6 28 10" />
          <path d="M120 106c8-10 20-14 34-12 10 2 20 8 26 14" />
          <path d="M126 132c10-6 22-6 34-2 8 4 14 10 18 18" />
          <path d="M130 154c10-2 20 0 28 6" />
          <path d="M122 244c6 12 18 22 34 28 16 6 32 4 46-4" />
          <path d="M92 236c8 20 22 38 42 50 16 10 34 16 54 18" />
          <path d="M76 228c-6 18-6 34 0 48 8 18 22 30 44 38" />
          <path d="M160 26v308" />
          <path d="M64 98l192 174" />
          <path d="M248 68L66 212" />
          <path d="M200 72c-8 16-8 34 2 50 8 14 22 22 40 24" />
          <path d="M212 110c10-2 20 0 28 6" />
          <path d="M218 140c10-2 20 0 28 6" />
          <path d="M198 96c-8 8-12 18-12 30" />
          <path d="M186 126c0 10 2 20 8 28" />
          <path d="M96 280c-10 18-10 36 0 54" />
          <path d="M126 290c-6 12-6 26 0 38" />
          <path d="M202 286c8 12 10 26 6 40" />
          <path d="M86 316c24-10 50-12 76-8 22 4 42 12 58 24" />
        </g>
      </svg>
    )
  },
  achievements: {
    label: "Achievements",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Achievements">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="160" cy="140" r="72" />
          <path d="M120 228l-28 92 68-42 68 42-28-92" />
          <path d="M108 96l-40-10 18-40" />
          <path d="M212 96l40-10-18-40" />
        </g>
      </svg>
    )
  },
  highlights: {
    label: "Highlights",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Highlights">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="60" y="80" width="200" height="160" rx="24" />
          <path d="M90 130h140" />
          <path d="M90 170h90" />
          <path d="M90 210h60" />
          <circle cx="230" cy="180" r="22" />
        </g>
      </svg>
    )
  },
  experience: {
    label: "Experience",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Experience">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="60" y="90" width="200" height="130" rx="18" />
          <path d="M110 90v-24h100v24" />
          <path d="M100 140h120" />
          <path d="M100 178h80" />
          <circle cx="200" cy="178" r="10" />
        </g>
      </svg>
    )
  },
  projects: {
    label: "Projects",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Projects">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="60" y="70" width="80" height="80" rx="16" />
          <rect x="180" y="70" width="80" height="80" rx="16" />
          <rect x="60" y="180" width="80" height="80" rx="16" />
          <rect x="180" y="180" width="80" height="80" rx="16" />
        </g>
      </svg>
    )
  },
  skills: {
    label: "Skills",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Skills">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="160,60 198,120 270,130 218,182 230,255 160,220 90,255 102,182 50,130 122,120" />
        </g>
      </svg>
    )
  },
  certs: {
    label: "Certificates",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Certificates">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="70" y="70" width="180" height="220" rx="20" />
          <circle cx="160" cy="170" r="32" />
          <path d="M145 200l-20 60 35-20 35 20-20-60" />
        </g>
      </svg>
    )
  },
  education: {
    label: "Education",
    svg: (
      <svg viewBox="0 0 320 360" role="img" aria-label="Education">
        <g fill="none" stroke="#f2f2f2" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M60 150l100-60 100 60-100 60-100-60z" />
          <path d="M100 190v40c0 20 30 40 60 40s60-20 60-40v-40" />
        </g>
      </svg>
    )
  }
};

type MorphTotemProps = {
  activeId?: string;
};

export default function MorphTotem({ activeId = "home" }: MorphTotemProps) {
  const [current, setCurrent] = useState(activeId);
  const [prev, setPrev] = useState<string | null>(null);

  useEffect(() => {
    if (activeId === current) return;
    setPrev(current);
    setCurrent(activeId);
    const timer = window.setTimeout(() => setPrev(null), 500);
    return () => clearTimeout(timer);
  }, [activeId, current]);

  const currentIcon = ICONS[current] || ICONS.home;
  const prevIcon = prev ? ICONS[prev] : null;

  return (
    <div className="morph-totem">
      {prevIcon && (
        <div className="morph-totem__layer is-prev">
          {prevIcon.svg}
          <div className="morph-label">{prevIcon.label}</div>
        </div>
      )}
      <div className="morph-totem__layer is-current">
        {currentIcon.svg}
        <div className="morph-label">{currentIcon.label}</div>
      </div>
    </div>
  );
}
