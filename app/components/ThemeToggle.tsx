"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const initial: Theme = stored === "light" ? "light" : "dark";
    setTheme(initial);
    document.body.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.body.dataset.theme = next;
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden>
          <path
            d="M12 3l2 3.2 3.8.4-2.8 2.6.8 3.7-3.8-1.9-3.8 1.9.8-3.7-2.8-2.6 3.8-.4z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden>
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 19v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M2 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M19 12h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M4.5 4.5l2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M17.3 17.3l2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M19.5 4.5l-2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M6.7 17.3l-2.2 2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )}
    </button>
  );
}
