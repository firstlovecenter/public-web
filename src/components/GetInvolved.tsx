import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { IconChevronRight, IconStars, IconMicrophone, IconCamera } from '@tabler/icons-react';
import type { Icon } from '@tabler/icons-react';

type Section = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
  icon: Icon;
  color: string;
};

const GetInvolved = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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

  const sections: Section[] = [
    {
      id: 'dancing-stars',
      title: 'The Dancing Stars',
      subtitle: 'Express Worship Through Movement',
      description: 'Join our dynamic dance ministry where we express our worship through choreographed movements. The Dancing Stars are dedicated to glorifying God through the art of dance.',
      images: ['DStars1.jpg', 'DStars2.jpg', 'DStars3.jpg', 'DStars4.jpg'],
      icon: IconStars,
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'glgc',
      title: 'The Greater Love Gospel Choir',
      subtitle: 'Voices United in Praise',
      description: "Be part of our award-winning choir that leads worship and ministers through powerful gospel music. GLGC is more than a choir; it's a family united in praise.",
      images: ['GLGC1.jpg', 'GLGC2.jpg', 'GLGC3.jpg', 'GLGC4.jpg'],
      icon: IconMicrophone,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'film-stars',
      title: 'The Film Stars',
      subtitle: "Capturing God's Story Through Film",
      description: 'Join our creative film ministry where we produce compelling content that shares the gospel through the power of visual storytelling.',
      images: ['FILM1.webp', 'FILM2.webp', 'FILM3.webp', 'FILM4.webp'],
      icon: IconCamera,
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center">
        {/* Background Collage Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {/* First Image - Left */}
          <div className="absolute top-0 left-0 w-1/3 h-full">
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10"></div>
            <img 
              src="/images/DStarsBG.jpg"
              alt="Dancing Stars Background"
              className="w-full h-full object-cover object-center scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black z-20"></div>
          </div>

          {/* Second Image - Center */}
          <div className="absolute top-0 left-1/3 w-1/3 h-full">
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10"></div>
            <img 
              src="/images/GLGCBG.JPG"
              alt="GLGC Background"
              className="w-full h-full object-cover object-center scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-20"></div>
          </div>

          {/* Third Image - Right */}
          <div className="absolute top-0 right-0 w-1/3 h-full">
            <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-10"></div>
            <img 
              src="/images/FILMBG.webp"
              alt="Film Stars Background"
              className="w-full h-full object-cover object-center scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black z-20"></div>
          </div>

          {/* Overlay Effects */}
          <div className="absolute inset-0 bg-black/50 z-30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80 z-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.3)_0%,transparent_70%)] z-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px] z-30"></div>
          
          {/* Bottom Glow Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-30"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-32 bg-[radial-gradient(ellipse_at_center,rgba(88,28,135,0.15)_0%,transparent_70%)] blur-2xl z-30"></div>
        </div>

        <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Get Involved
            </h1>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full mb-8"></div>
            <p className="text-xl text-[#94A3B8] max-w-3xl mx-auto leading-relaxed font-light">
              Join our creative ministries and use your talents to serve God. Whether you dance, sing, or create visual content, there's a place for you in our community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Ministry Sections */}
      <div className="relative py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0,0,0),rgb(17,24,39),rgb(0,0,0))]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {sections.map((section, index) => (
              <div 
                key={section.id}
                className={`relative rounded-3xl overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Background Image */}
                <div className="absolute inset-0 -mx-4 sm:-mx-6 lg:-mx-8">
                  {/* Backdrop Blur and Overlay */}
                  <div className="absolute inset-0 backdrop-blur-[2px] mix-blend-luminosity z-10"></div>
                  <div className="absolute inset-0 bg-black/40 z-10"></div>
                  
                  {/* Background Image */}
                  <img 
                    src={`/images/${section.id === 'dancing-stars' ? 'DStarsBG.jpg' : 
                          section.id === 'glgc' ? 'GLGCBG.JPG' : 
                          'FILMBG.webp'}`}
                    alt={section.title}
                    className="w-full h-full object-cover object-center transform scale-105"
                  />
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
                  
                  {/* Additional Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-10 mix-blend-overlay z-10`}></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.4)_0%,transparent_70%)] z-10"></div>
                </div>

                {/* Content */}
                <div className="relative z-20 grid lg:grid-cols-2 gap-12 items-center py-24 px-4 sm:px-6 lg:px-8">
                  {/* Text Content */}
                  <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
                    <div className="space-y-6 backdrop-blur-sm bg-black/20 p-8 rounded-2xl border border-white/5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${section.color} flex items-center justify-center shadow-xl`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-4xl font-bold text-white drop-shadow-lg">{section.title}</h2>
                      <p className="text-xl text-purple-200 drop-shadow-lg">{section.subtitle}</p>
                      <p className="text-lg text-white/90 leading-relaxed drop-shadow">
                        {section.description}
                      </p>
                      <button
                        onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                        className={`group flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 border border-white/10 hover:border-white/20`}
                      >
                        <span>Learn More</span>
                        <IconChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="relative group animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 delay-200">
                    <div className="grid grid-cols-2 gap-4">
                      {section.images.map((image, i) => (
                        <div 
                          key={i}
                          className={`relative rounded-xl overflow-hidden shadow-2xl ${
                            section.images.length === 4 && i >= 2 ? 'col-span-1' : 
                            section.images.length === 3 && i === 2 ? 'col-span-2' : ''
                          } group/image`}
                        >
                          <img
                            src={`/images/${image}`}
                            alt={`${section.title} ${i + 1}`}
                            className="w-full h-full object-cover transform group-hover/image:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover/image:opacity-30 transition-opacity duration-300"></div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Glow Effects */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${section.color} opacity-20 blur-2xl -z-10 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>
                </div>

                {/* Expanded Content */}
                {activeSection === section.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-20 mt-12 bg-black/30 backdrop-blur-md rounded-2xl p-8 mx-4 sm:mx-6 lg:mx-8 border border-white/5"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">How to Join</h3>
                        <ul className="space-y-4 text-[#94A3B8]">
                          <li className="flex items-start gap-3">
                            <span className="text-purple-400">01.</span>
                            Fill out the interest form below
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold mb-4">Requirements</h3>
                        <ul className="space-y-4 text-[#94A3B8]">
                          <li className="flex items-start gap-3">
                            <IconChevronRight className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            Must be born again
                          </li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="mt-32 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                Join Our Creative Family
              </h2>
              <p className="text-lg text-[#94A3B8]">
                Fill out this form to express your interest in joining any of our creative ministries.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Which ministry interests you? *</label>
                  <select
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Select a ministry</option>
                    <option value="dancing-stars">The Dancing Stars</option>
                    <option value="glgc">The Greater Love Gospel Choir</option>
                    <option value="film-stars">The Film Stars</option>
                    <option value="other">Other Creative Arts</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved; 