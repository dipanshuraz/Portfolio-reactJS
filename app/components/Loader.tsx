"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const next = Math.min(100, Math.round((elapsed / 1200) * 100));
      setProgress(next);
      if (next >= 100) {
        setReady(true);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className={`loader ${ready ? "loader--done" : ""}`}>
      <div className="loader__inner">
        <div className="loader__label">SYSTEM BOOT</div>
        <div className="jp-text jp-subtle">起動中 · please wait</div>
        <div className="loader__value">{progress}%</div>
        <div className="loader__bar">
          <span style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}
