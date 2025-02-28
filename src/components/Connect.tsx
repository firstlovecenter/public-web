import { useEffect } from 'react';
import flLogo from '../assets/images/FL-Logo.png';

const Connect = () => {
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="relative py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,0),rgb(17,24,39),rgb(0,0,0))]"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Connect with us
            </h1>
            <p className="text-xl text-gray-400">
              Catch the latest sermon from the First Love Center
            </p>
          </div>

          {/* App Links and Logo */}
          <div className="mt-16 flex flex-col items-center">
            <div className="grid grid-cols-3 items-center gap-8 w-full max-w-2xl mx-auto">
              {/* iOS Link */}
              <a
                href="https://podcasts.apple.com/us/podcast/dag-heward-mills/id1560919244"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white text-center font-medium transition-all duration-300"
              >
                iOS
              </a>

              {/* Logo */}
              <div className="flex justify-center items-center">
                <div className="w-32 h-32 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
                  <img 
                    src={flLogo} 
                    alt="First Love Logo" 
                    className="relative w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Android Link */}
              <a
                href="https://daghewardmillsfirstlove.podbean.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg text-white text-center font-medium transition-all duration-300"
              >
                ANDROID
              </a>
            </div>
          </div>

          {/* Connect Online Section */}
          <div className="mt-32 text-center space-y-8">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold">
                Connect with us Online
              </h2>
              <p className="text-xl text-gray-400">
                First Love Center
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center items-center gap-8">
              <a
                href="https://www.facebook.com/firstlovecenter/"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/images/social/facebook.png" 
                    alt="Facebook" 
                    className="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://www.youtube.com/channel/UCEBUZZ9Gyaek_l92J728Yuw"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-[#FF0000] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/images/social/youtube.png" 
                    alt="YouTube" 
                    className="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/firstlovecenter"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/images/social/instagram.png" 
                    alt="Instagram" 
                    className="w-8 h-8"
                  />
                </div>
              </a>
              <a
                href="https://x.com/FirstLoveCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="w-16 h-16 bg-[#1DA1F2] rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                  <img 
                    src="/images/social/twitter.png" 
                    alt="Twitter" 
                    className="w-8 h-8"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect; 