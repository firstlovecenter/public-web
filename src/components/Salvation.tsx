import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Salvation = () => {
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
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/images/Evangelism_In_Africa_Dag_Heward_Mills_Healing_Jesus_Campaign_Bangui_Central_Africa14.webp" 
            alt="Healing Evangelist" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6">
              SALVATION
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
            <p className="text-xl text-[#94A3B8] leading-relaxed font-light">
              Who He is and What His Love means to us
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,0),rgb(17,24,39),rgb(0,0,0))]"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>
        
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <div className="prose prose-lg prose-invert">
                <blockquote className="text-xl text-[#94A3B8] italic border-l-4 border-purple-500 pl-4 relative">
                  <div className="absolute -inset-2 bg-purple-500/5 blur-lg -z-10 rounded-lg"></div>
                  "The great love of God will change your life forever. This love is greater than anything found on Earth... Your mother may love you, your father may love you, but none of them will die for you. Your boyfriend may love you, your girlfriend may love you, but none will die for you."
                </blockquote>
                <p className="text-lg text-[#94A3B8] relative">
                  <div className="absolute -inset-4 bg-blue-500/5 blur-xl -z-10 rounded-lg"></div>
                  What Jesus is, is the embodiment of unconditional, all consuming Love. The kind of love that assures that you will live forever. Jesus' love was so deep, that he sought to spend eternity being with us, but the Bible says in Romans 3:23, that ALL have sinned and come short of the Glory of God..." To remedy this, Jesus gave His life for us so we could have eternal life, and be with him forever.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
              <div className="prose prose-lg prose-invert">
                <div className="space-y-6 relative">
                  <div className="absolute -inset-4 bg-purple-500/5 blur-xl -z-10 rounded-lg"></div>
                  <p className="text-lg text-[#94A3B8]">
                    There is not a love, quantifiable, that exists on this earth, greater than the love of God that caused Him to sacrifice his only son for us. It cannot be topped.
                  </p>
                  <p className="text-lg text-[#94A3B8]">
                    When you open up your heart to receive this great love, you will be Born Again. If you open up your heart to this great love from God, you will become a new creation and live a totally different life. If you open up your heart to this great love from God, you will escape your punishment in Hell.
                  </p>
                  <p className="text-lg text-[#94A3B8]">
                    The love of Jesus has lasted throughout the centuries. It has persisted until it reached you and me.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prayer Section */}
          <div className="mt-20 max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-3xl -z-10"></div>
            <div className="text-center mb-12 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                A new beginning...
              </h2>
              <p className="text-lg text-[#94A3B8]">
                Jesus loves you, and He wants to spend eternity loving you. If you want to spend eternity with Him repeat this prayer, and believe it in your heart and you will be saved. Say:
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 space-y-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-purple-500/20"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative space-y-8">
                <p className="text-2xl font-medium text-white tracking-wide">Lord Jesus,</p>
                <div className="space-y-4">
                  <p className="text-lg text-white/95 leading-relaxed">I come to you today, just as I am.</p>
                  <p className="text-lg text-white/95 leading-relaxed">I am a Sinner. Please forgive me of all my Sins</p>
                  <p className="text-lg text-white/95 leading-relaxed">Please write my name in the Book of Life.</p>
                  <p className="text-lg text-white/95 leading-relaxed">From today, I belong to you. I will love you. I will serve you,</p>
                  <p className="text-lg text-white/95 leading-relaxed">All the days of my life!</p>
                </div>
                <div className="space-y-4 pt-2">
                  <p className="text-lg text-white/95 leading-relaxed font-medium">Satan! I will no longer serve you! I am not yours to command!</p>
                  <p className="text-lg text-white/95 leading-relaxed">I love you Jesus!</p>
                  <p className="text-lg text-white/95 leading-relaxed">Thank you for saving my soul!</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 bg-white/5 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10"></div>
              <form className="relative space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">I PRAYED THIS PRAYER</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salvation; 