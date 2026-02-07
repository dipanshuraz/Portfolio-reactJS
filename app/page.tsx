import Sections from "./components/Sections";
import Loader from "./components/Loader";
import SketchfabEmbed from "./components/SketchfabEmbed";
import AudioPlayer from "./components/AudioPlayer";

export default function HomePage() {
  return (
    <main>
      <Loader />
      <div className="earth-horizon" aria-hidden />
      <SketchfabEmbed />
      <div className="sketchfab-mask" aria-hidden />
      <div className="viewport-fade viewport-fade--top" aria-hidden />
      <div className="viewport-fade viewport-fade--bottom" aria-hidden />
      <div className="top-controls">
        <AudioPlayer />
      </div>
      <Sections />
      <div className="scroll-hint">Scroll / スクロール</div>
    </main>
  );
}
