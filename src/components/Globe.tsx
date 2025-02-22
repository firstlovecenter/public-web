const Globe = () => {
  return (
    <div className="w-full h-full relative">
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <iframe
          title="Earth Rotation"
          className="w-[120%] h-[120%] -mt-32 -ml-[10%]"
          style={{
            border: 'none',
            transform: 'scale(1.5)',
            pointerEvents: 'none',
            transformOrigin: 'center center',
          }}
          allowFullScreen
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/c60e261df7334f6e9a2d8d44f7b6f123/embed?autospin=1&autostart=1&transparent=1&ui_controls=0&ui_infos=0&ui_watermark=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_annotations=0&ui_stop=0&ui_vr=0&ui_fullscreen=0&ui_ar=0&ui_loading=0&ui_theme=dark&preload=1&camera=0&scrollwheel=0&gyro=0&orbit=0&dnt=1"
        />
      </div>
    </div>
  );
};

export default Globe; 