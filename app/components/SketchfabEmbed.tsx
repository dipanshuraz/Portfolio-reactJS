export default function SketchfabEmbed() {
  return (
    <div className="sketchfab-embed-wrapper" aria-hidden>
      <iframe
        title="Ambush"
        frameBorder={0}
        allowFullScreen
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/d5c605231fe04f53a38a13b8fdde59da/embed?autostart=1&ui_theme=dark&ui_controls=0&ui_infos=0&ui_hint=0&ui_help=0&ui_settings=0&ui_watermark=0&ui_watermark_link=0&ui_inspector=0&ui_ar=0"
      />
    </div>
  );
}
