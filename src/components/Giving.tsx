import { useRef, useEffect } from 'react';

const Giving = () => {
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

  return (
    <section id="giving" ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-black via-black to-[#001829] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
      
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 rounded-full blur-[120px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* Heading */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 mb-8">
            <h2 className="text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Giving
            </h2>
            <div className="relative h-1 w-24 mx-auto overflow-hidden rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 animate-drift"></div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-16 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-100">
            <p className="text-2xl text-white/80 leading-relaxed font-light">
              You can give to the First Love Church if you've been blessed by 
              any of our services in person or online. God bless you!
            </p>
          </div>

          {/* Button */}
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
            <a
              href="https://paystack.com/pay/firstlovecenter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-2xl text-white font-medium transition-all duration-300"
            >
              <span>CLICK HERE TO GIVE</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Giving; 