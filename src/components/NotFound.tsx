const NotFound = () => {
  return (
    <div className="relative py-60 bg-black flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <img
          src="/images/notfound-bg.jpg"
          alt="Not Found Background"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90"></div>
      </div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-lg text-center border border-white/20">
        <h1 className="text-5xl font-bold text-white mb-6">404 - Oops!</h1>
        <p className="text-lg text-white/80 mb-4">
          When things go sideways, it's either the sound crew vibing too hard or social media doing its thing. Either way, we've got you covered!
        </p>
        <p className="text-xs text-white/80">
          Don't worry, you're still loved. ❤️
        </p>
        <div className="mt-6">
          <p className="text-amber-300 mb-4">
            Take me back to familiar territory.
          </p>
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all duration-200 border border-white/30"
          >
            Go Back Home
          </a>
        </div>
      </div>

     
    </div>
  );
};

export default NotFound;
