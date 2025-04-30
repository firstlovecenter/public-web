import { useState, useEffect } from 'react';
import { X, Download, Play } from 'lucide-react';

interface AlbumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MusicLink {
  name: string;
  url: string;
  icon: string;
}

const AlbumModal = ({ isOpen, onClose }: AlbumModalProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateCover, setAnimateCover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile on mount and on resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Add a slight delay before starting the cover animation
      setTimeout(() => {
        setAnimateCover(true);
      }, 300);
    } else {
      setAnimateCover(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  }, [isOpen]);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling
    onClose();
  };

  if (!isOpen && !isVisible) return null;

  const musicLinks: MusicLink[] = [
    { 
      name: "First Love Music Website", 
      url: "https://firstlovemusic.org/album/let-the-weary-rest/",
      icon: "/images/first-love-music.webp"
    },
    { 
      name: "Apple Music", 
      url: "https://music.apple.com/us/album/let-the-weary-rest/1809536777",
      icon: "/images/apple_music.webp"
    },
    { 
      name: "Spotify", 
      url: "https://open.spotify.com/album/6sKhgEJxvmQCVXOoxecTp6",
      icon: "/images/spotify.webp"
    },
    { 
      name: "YouTube Music", 
      url: "https://music.youtube.com/playlist?list=OLAK5uy_mbS98EqIaGkwNXZnxGpNDZ-2nrATL-I5Y",
      icon: "/images/youtube-music.webp"
    },
    { 
      name: "Tidal", 
      url: "https://tidal.com/browse/album/431016571",
      icon: "/images/tidal.webp"
    },
    { 
      name: "Download", 
      url: "https://firstlovemusic.org/?sdm_process_download=1&download_id=2988",
      icon: "download" // Using Lucide icon for download
    },
  ];

  // Only show 4 streaming platforms on mobile
  const displayedLinks = isMobile 
    ? musicLinks.filter((link) => link.name !== "First Love Music Website" && link.name !== "Download")
    : musicLinks.filter(link => link.name !== "Download");

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      ></div>
      
      <div 
        className={`relative bg-gradient-to-br from-gray-900/90 to-black/95 rounded-xl sm:rounded-2xl w-full max-w-[95%] sm:max-w-5xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto overflow-x-hidden shadow-2xl transition-all duration-500 ${
          isOpen ? 'scale-100 translate-y-0' : 'scale-95 translate-y-10'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks on modal from closing it
      >
        {/* Background image with parallax effect */}
        <div className="absolute inset-0 opacity-15 overflow-hidden">
          <div className={`w-full h-full transition-transform duration-1000 ${animateCover ? 'scale-110' : 'scale-100'}`}>
            <img 
              src="/images/let-the-weary-rest.webp" 
              alt="Let The Weary Rest Album Background"
              className="w-full h-full object-cover filter blur-sm"
            />
          </div>
        </div>
        
        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)]"></div>
        
        {/* Animated particles - hide on mobile for performance */}
        <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none hidden sm:block">
          <div className="particles-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-400 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/70 hover:text-white z-30 transition-all duration-300 p-1.5 sm:p-2 hover:bg-white/10 rounded-full"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 sm:w-6 sm:h-6" />
        </button>

        <div className="relative z-20 flex flex-col md:flex-row p-3 sm:p-5 md:p-8 gap-3 sm:gap-6 md:gap-12">
          {/* Album artwork */}
          <div className="w-full md:w-2/5 flex items-center justify-center">
            <div className={`relative group max-w-[150px] sm:max-w-[220px] md:max-w-none w-full mx-auto ${animateCover ? 'animate-album-appear' : ''}`}>
              {/* Animated record behind album - hide on mobile */}
              <div className="absolute inset-0 w-full h-full rounded-full bg-black opacity-80 transform -translate-x-1/2 -translate-y-1/2 scale-0 hidden sm:block group-hover:scale-[0.9] transition-all duration-700 left-1/2 top-1/2 z-0 group-hover:opacity-100"></div>
              
              {/* Album cover */}
              <div className="relative z-10 transition-all duration-500 transform sm:group-hover:translate-y-[-2%]">
                <div className="absolute -inset-1 bg-gradient-to-br from-purple-600/40 to-blue-600/40 rounded-xl opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 hidden sm:block"></div>
                <img 
                  src="/images/let-the-weary-rest.webp" 
                  alt="Let The Weary Rest Album"
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-lg sm:shadow-2xl transform sm:group-hover:scale-[1.01] transition-all duration-500"
                />
              </div>
              
              {/* Play button overlay - hide on mobile */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hidden sm:flex group-hover:opacity-100 transition-all duration-500 z-20">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40 transform scale-75 group-hover:scale-100 transition-all duration-500">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Album information */}
          <div className="w-full md:w-3/5 flex flex-col justify-center space-y-3 sm:space-y-6 mt-2 md:mt-0">
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2 mb-1 sm:mb-3">
                <div className="px-2 sm:px-3 py-0.5 sm:py-1 bg-purple-500/30 text-purple-300 rounded-full text-xs sm:text-sm font-medium backdrop-blur-md">
                  New Release
                </div>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-purple-400 animate-pulse"></div>
                <div className="text-purple-300/80 text-xs sm:text-sm">2025</div>
              </div>
              
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Let The Weary Rest
              </h2>
              <p className="text-base sm:text-xl text-purple-300/90 mt-0.5 sm:mt-2 font-medium">First Love Music</p>
            </div>
            
            <p className="text-white/80 text-sm sm:text-lg">Available on all major streaming platforms.</p>
            
            {/* Streaming platforms section */}
            <div className="mt-2 sm:mt-6">
              <h3 className="text-white/70 text-xs sm:text-sm uppercase tracking-wider mb-2 sm:mb-4 font-medium">Listen On</h3>
              
              {/* Streaming icons in a better grid layout */}
              <div className="grid grid-cols-4 md:grid-cols-5 gap-1.5 sm:gap-4">
                {displayedLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-center group"
                    aria-label={`Listen on ${link.name}`}
                  >
                    <div className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-1 sm:mb-2 transition-all duration-300 hover:scale-110 hover:shadow-lg group-hover:shadow-purple-500/20">
                      <img 
                        src={link.icon} 
                        alt={`${link.name} icon`}
                        className="h-5 w-5 sm:h-7 sm:w-7 md:h-8 md:w-8 object-contain p-1"
                      />
                    </div>
                    <span className="text-white/80 text-[8px] sm:text-xs group-hover:text-purple-300 transition-colors duration-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Release information */}
            <div className="mt-2 sm:mt-8 pt-2 sm:pt-6 border-t border-white/10">
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed hidden sm:block">
                Experience God's tangible presence with every note as you listen to the First Love Music's latest release.
              </p>
              <div className="mt-2 sm:mt-4 flex gap-2 sm:gap-4">
                <button 
                  onClick={() => window.open(musicLinks[5].url, '_blank')}
                  className="px-3 sm:px-6 py-1.5 sm:py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:shadow-lg group flex items-center gap-1 sm:gap-2"
                >
                  <Download className="w-3 h-3 sm:w-4 sm:h-4 text-purple-300 group-hover:text-purple-200 transition-colors duration-300" /> 
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlbumModal; 