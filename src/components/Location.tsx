import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Location = () => {
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

  const handleGetDirections = () => {
    window.open('https://www.google.com/maps/place/First+Love+Center/@5.6559482,-0.1696172,795m/data=!3m2!1e3!4b1!4m6!3m5!1s0xfdf9ca2ca7fbd09:0xc0bcf27c1cc313f1!8m2!3d5.6559482!4d-0.1670423!16s%2Fg%2F11c54clznj', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/images/location.webp" 
            alt="First Love Location" 
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
              LOCATION
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
            <p className="text-xl text-[#94A3B8] leading-relaxed font-light">
              Visit us at First Love Center
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative py-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,0),rgb(17,24,39),rgb(0,0,0))]"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.1)_0%,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Map */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden h-[500px] animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0475743843187!2d-0.16704230000000002!3d5.655948199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9ca2ca7fbd09%3A0xc0bcf27c1cc313f1!2sFirst%20Love%20Center!5e0!3m2!1sen!2sgh!4v1708890675044!5m2!1sen!2sgh"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="First Love Center Location"
              ></iframe>
            </div>

            {/* Location Information */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                <h2 className="text-2xl font-bold mb-6">Main Location</h2>
                <div className="space-y-4">
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">Address:</span>
                    First Love Center<br />
                    Trinity Avenue<br />
                    Accra, Ghana
                  </p>
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">Hours:</span>
                    Open 24 hours
                  </p>
                  <p className="text-gray-400">
                    <span className="block font-medium text-white">Phone:</span>
                    050 231 5693
                  </p>
                  <button
                    onClick={handleGetDirections}
                    className="mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    Get Directions
                  </button>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                <h2 className="text-2xl font-bold mb-6">Service Times</h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-white">Saturday Services</p>
                    <p className="text-gray-400">8:30 AM - Anagkazo Encounter</p>
                    <p className="text-gray-400">6:30 PM - Gospel Encounter</p>
                  </div>
                  <div>
                    <p className="font-medium text-white">Sunday Services</p>
                    <p className="text-gray-400">8:30 AM - Holy Ghost Encounter</p>
                    <p className="text-gray-400">12:00 PM - First Love Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location; 