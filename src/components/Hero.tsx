import { useState, useEffect } from 'react';
import { ArrowDown, MapPin, Clock, X } from 'lucide-react';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error);
      });
    }
    setTimeout(() => setIsContentVisible(true), 500);
  }, []);

  const scrollToNextSection = () => {
    const whoWeAreSection = document.querySelector('#who-we-are');
    if (whoWeAreSection) {
      whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=First+Love+Church+East+Legon', '_blank');
  };

  return (
    <div className="relative h-screen bg-black">
      {/* Background Video with Enhanced Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] z-30"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute w-full h-full object-cover ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          } transition-opacity duration-1000`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="/videos/background-video-1.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Animated Particles Overlay */}
      <div className="absolute inset-0 z-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] animate-drift"></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden z-20 pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-40 flex flex-col items-center justify-center h-full text-center px-4 transition-all duration-1000 ${
        isContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}>
        <div className="max-w-5xl space-y-8">
          {/* Main Heading with Enhanced Animation */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
              <span className="block transform hover:scale-105 transition-transform duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-white via-purple-200 to-white">
                First Love Church
              </span>
          </h1>

            {/* Animated Line */}
            <div className="relative h-1 w-48 md:w-64 mx-auto overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-drift"></div>
            </div>

            {/* Subtitle with Gradient */}
            <p className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white font-medium">
              Welcome Home
            </p>
          </div>

          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group relative w-64 sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10"></div>
              <span className="relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
                Join Us This Weekend
              </span>
            </button>

            <a 
              href="https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw"
              target="_blank"
              rel="noopener noreferrer" 
              className="group relative w-64 sm:w-auto px-8 py-4 bg-transparent border border-white/20 rounded-xl overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 text-lg font-medium text-white group-hover:text-white transition-colors duration-300">
              Watch Online
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Service Info Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-lg" onClick={() => setIsModalOpen(false)}></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[95vw] sm:max-w-2xl md:max-w-4xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white z-10 transition-colors duration-300"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <div className="flex flex-col md:grid md:grid-cols-2">
              {/* Left Column - Service Times */}
              <div className="p-4 sm:p-8 md:p-12 bg-white/5 backdrop-blur-xl">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">Join Us This Weekend</h3>
                
                <div className="space-y-6 sm:space-y-8">
                  {/* Saturday Services */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white/90 flex items-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      Saturday Services
                    </h4>
                    <div className="space-y-3 sm:space-y-4 pl-6 sm:pl-7">
                      <div className="group">
                        <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                          8:30 AM - Anagkazo Encounter
                        </p>
                        <p className="text-white/70 text-base">Great Hall, Anagkazo Campus</p>
                      </div>
                      <div className="group">
                        <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                          6:30 PM - Gospel Encounter
                        </p>
                        <p className="text-white/70 text-base">First Love Center</p>
                      </div>
                    </div>
                  </div>

                  {/* Sunday Services */}
                  <div className="space-y-3 sm:space-y-4">
                    <h4 className="text-lg sm:text-xl font-semibold text-white/90 flex items-center gap-2">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      Sunday Services
                    </h4>
                    <div className="space-y-3 sm:space-y-4 pl-6 sm:pl-7">
                      <div className="group">
                        <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                          8:30 AM - Holy Ghost Encounter
                        </p>
                        <p className="text-white/70 text-base">First Love Center</p>
                      </div>
                      <div className="group">
                        <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                          12:00 PM - The First Love Experience
                        </p>
                        <p className="text-white/70 text-base">First Love Center</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Locations */}
              <div className="p-4 sm:p-8 md:p-12 bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl border-t border-white/10 md:border-t-0 md:border-l">
                <h4 className="text-lg sm:text-xl font-semibold text-white/90 flex items-center gap-2 mb-4 sm:mb-6">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                  Our Locations
                </h4>
                
                <div className="space-y-6 mb-8">
                  <div className="group">
                    <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                      First Love Center
                    </p>
                    <p className="text-white/70 text-base">East Legon, Accra, Ghana</p>
                  </div>
                  <div className="group">
                    <p className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors duration-300">
                      Anagkazo Campus
                    </p>
                    <p className="text-white/70 text-base">Great Hall</p>
                  </div>
                </div>

                <button
                  onClick={openGoogleMaps}
                  className="group relative w-full bg-purple-500/10 text-white py-4 rounded-xl font-medium transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Get Directions
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Scroll Indicator */}
      <div 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer group"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300">
            Scroll Down
          </span>
          <ArrowDown className="w-6 h-6 text-white/80 animate-bounce group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Hero;