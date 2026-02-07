"use client";

import { useEffect, useMemo, useState } from "react";

const GLYPHS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン";

const DEFAULT_PHRASES = [
  "α · Α · a",
  "β · Β · b",
  "δ · Δ · d",
  "λ · Λ · l",
  "σ · Σ · s",
  "ω · Ω · o"
];

type MatrixTextProps = {
  phrases?: string[];
  className?: string;
};

export default function MatrixText({ phrases = DEFAULT_PHRASES, className = "" }: MatrixTextProps) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  const target = useMemo(() => {
    return phrases[index % phrases.length];
  }, [index, phrases]);

  useEffect(() => {
    let frame = 0;
    let step = 0;
    const maxSteps = 18;

    const tick = () => {
      const reveal = Math.floor((step / maxSteps) * target.length);
      let out = "";
      for (let i = 0; i < target.length; i += 1) {
        if (i < reveal) {
          out += target[i];
        } else if (target[i] === " ") {
          out += " ";
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      step += 1;
      if (step <= maxSteps) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    const swap = window.setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3200);

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(swap);
    };
  }, [target]);

  return (
    <div className={`matrix-text ${className}`.trim()} aria-live="polite">
      <span>{display}</span>
    </div>
  );
}
