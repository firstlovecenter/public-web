import { useRef, useEffect } from 'react';
import flmBg from '../assets/images/FLM.jpeg';
import flmLogo from '../assets/images/FL_white.png';

const FirstLoveMusic = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleStreamingClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="firstlovemusic" ref={sectionRef} className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={flmBg}
          alt=""
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
      </div>

      {/* Additional Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center md:text-left space-y-10 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
            <div className="space-y-6">
              <img 
                src={flmLogo} 
                alt="First Love Music"
                className="h-24 md:h-32 lg:h-40 w-auto mb-8 mx-auto md:mx-0 filter drop-shadow-2xl"
              />
              <div className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-blue-400 to-purple-500 rounded-full md:mx-0 mx-auto"></div>
            </div>

            <p className="text-2xl md:text-3xl text-white/90 leading-relaxed font-light max-w-xl">
              Experience worship like never before. Stream our music on your favorite platform.
            </p>
            
            {/* Streaming Platform Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-8">
              {/* Apple Music */}
              <div 
                onClick={() => handleStreamingClick('https://music.apple.com/bw/artist/first-love-music/1541756750')}
                className="group cursor-pointer"
              >
                <div className="flex items-center px-8 py-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:scale-105 transform hover:shadow-xl hover:shadow-blue-500/20">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03a12.5 12.5 0 001.57-.1c.822-.106 1.596-.35 2.295-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.045-1.773-.6-1.943-1.536a1.88 1.88 0 011.038-2.022c.323-.16.67-.25 1.018-.324.378-.082.758-.153 1.134-.24.274-.063.457-.23.51-.516a.904.904 0 00.02-.193c0-1.815 0-3.63-.002-5.443a.725.725 0 00-.026-.185c-.04-.15-.15-.243-.304-.234-.16.01-.318.035-.475.066-.76.15-1.52.303-2.28.456l-2.325.47-1.374.278c-.016.003-.032.01-.048.013-.277.077-.377.203-.39.49-.002.042 0 .086 0 .13-.002 2.602 0 5.204-.003 7.805 0 .42-.047.836-.215 1.227-.278.64-.77 1.04-1.434 1.233-.35.1-.71.16-1.075.172-.96.036-1.755-.6-1.92-1.544-.14-.812.23-1.685 1.154-2.075.357-.15.73-.232 1.108-.31.287-.06.575-.116.86-.177.383-.083.583-.323.6-.714v-.15c0-2.96 0-5.922.002-8.882 0-.123.013-.25.042-.37.07-.285.273-.448.546-.518.255-.066.515-.112.774-.165.733-.15 1.466-.296 2.2-.444l2.27-.46c.67-.134 1.34-.27 2.01-.403.22-.043.442-.088.663-.106.31-.025.523.17.554.482.008.073.012.148.012.223.002 1.91.002 3.822 0 5.732z"/>
                  </svg>
                  <span className="text-lg text-white font-semibold tracking-wide">Apple Music</span>
                </div>
              </div>

              {/* Spotify */}
              <div 
                onClick={() => handleStreamingClick('https://open.spotify.com/artist/2416FtiudAa79lko2LIVii')}
                className="group cursor-pointer"
              >
                <div className="flex items-center px-8 py-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:scale-105 transform hover:shadow-xl hover:shadow-green-500/20">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  <span className="text-lg text-white font-semibold tracking-wide">Spotify</span>
                </div>
              </div>

              {/* Deezer */}
              <div 
                onClick={() => handleStreamingClick('https://www.deezer.com/en/artist/93221382')}
                className="group cursor-pointer"
              >
                <div className="flex items-center px-8 py-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 transition-all duration-300 hover:bg-white/20 hover:border-white/20 hover:scale-105 transform hover:shadow-xl hover:shadow-purple-500/20">
                  <svg className="w-10 h-10 text-white mr-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.189V8.38h-5.19zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.189v-3.027h-5.19zm6.271 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.189v-3.03h-5.19zm6.271 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z"/>
                  </svg>
                  <span className="text-lg text-white font-semibold tracking-wide">Deezer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="relative max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] mx-auto md:-mr-32 lg:-mr-48 xl:-mr-64">
              <div className="relative group">
                <img
                  src={flmBg}
                  alt="First Love Music"
                  className="w-full h-auto rounded-3xl transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Glow Effects */}
              <div className="absolute -inset-8 bg-blue-600/20 blur-2xl rounded-full -z-10 animate-pulse"></div>
              <div className="absolute -inset-16 bg-purple-600/20 blur-3xl rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 via-purple-900/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
};

export default FirstLoveMusic; 