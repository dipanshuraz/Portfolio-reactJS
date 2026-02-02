"use client";

import { useEffect, useRef, useState } from "react";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };
    attemptAutoplay();

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        // Autoplay blocked; user can tap again.
      }
    } else {
      audio.pause();
    }
  };

  return (
    <div className="audio-player">
      <button
        type="button"
        className="audio-btn"
        onClick={toggle}
        aria-label={isPlaying ? "Sound on" : "Sound off"}
        title={isPlaying ? "Sound on" : "Sound off"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M5 10v4h4l5 4V6l-5 4H5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M16 9c1.4 1 1.4 5 0 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            <path d="M18.5 7c2.4 2 2.4 8 0 10" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden>
            <path d="M5 10v4h4l5 4V6l-5 4H5z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
            <path d="M16 9l4 6M20 9l-4 6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        )}
      </button>
      <audio ref={audioRef} src="/music.mp3" loop />
    </div>
  );
}
