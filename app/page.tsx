import Sections from "./components/Sections";
import Loader from "./components/Loader";
import SketchfabEmbed from "./components/SketchfabEmbed";
import AudioPlayer from "./components/AudioPlayer";
import ThemeToggle from "./components/ThemeToggle";

export default function HomePage() {
  return (
    <main>
      <Loader />
      <div className="earth-horizon" aria-hidden />
      <SketchfabEmbed />
      <div className="top-controls">
        <AudioPlayer />
        <ThemeToggle />
      </div>
      <Sections />
      <div className="scroll-hint">Scroll / スクロール</div>
    </main>
  );
}
