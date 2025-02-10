import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

const About = () => {
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
      { 
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const openGoogleMaps = () => {
    window.open('https://maps.google.com/?q=First+Love+Church+East+Legon', '_blank');
  };

  return (
    <section id="who-we-are" ref={sectionRef} className="py-32 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20 animate-on-scroll transition-all duration-1000 opacity-0 translate-y-10">
          <h2 className="text-5xl md:text-6xl font-bold text-[#38bdf8] mb-6 leading-tight">
            The First Love Center
          </h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl text-gray-800 font-semibold mb-6 leading-relaxed">
              We believe in Jesus, soul winning and{' '}
              <br className="hidden sm:block" />
              working for the Lord all day long.
            </h3>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <div className="animate-on-scroll transition-all duration-1000 delay-300 opacity-0 translate-y-10">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="mb-6 leading-relaxed">
                In 2012, our founder Bishop Dag Heward-Mills was led by the Holy Spirit to begin a 
                new denomination which he called the First Love Church. In a small chapel on the 
                University of Ghana, Legon Campus, he gathered a few students and began a small 
                church.
              </p>
              <p className="mb-6 leading-relaxed">
                A few years down the line, Pastor Joshua, with the blessing of his father, started a 
                new branch of First Love Church in East Legon where the headquarters stands 
                today.
              </p>
              <p className="mb-6 leading-relaxed">
                A few years later, God has increased us into one of the largest churches in our city. 
                With over 10,000 members and in our new state of the art auditorium, we are even 
                more determined to see the name of Jesus lifted in the city of Accra.
              </p>
              <p className="mb-6 leading-relaxed">
                Today, thousands of young people gather as we preach holiness. We believe that 
                everyone is welcome into the house of God. In a place where soulwinning is our 
                passion, we have seen countless lives changed, saved and renewed in our church.
              </p>
              <p className="leading-relaxed">
                Join us for a life changing encounter with the Word of God, Worship and the Holy 
                Spirit. A Sunday at the First Love Center is more than just a church service, it's an 
                experience!
              </p>
            </div>
          </div>

          {/* Right Column - Pastor Info */}
          <div className="flex flex-col items-center justify-center space-y-6 animate-on-scroll transition-all duration-1000 delay-500 opacity-0 translate-y-10 md:mt-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-b from-white via-white to-white/50 opacity-50 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 blur-sm"></div>
              <div className="relative w-40 h-48 overflow-hidden ring-2 ring-white rounded-xl">
                <img
                  src="/images/pastor.jpg"
                  alt="Joshua Dag Heward-Mills"
                  className="object-cover w-full h-full transform transition duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="text-center space-y-2">
              <h4 className="text-xl font-bold text-gray-800">Joshua Dag Heward-Mills</h4>
              <p className="text-base text-gray-600">Lead Pastor</p>
            </div>
            <button 
              onClick={openGoogleMaps}
              className="inline-flex items-center px-6 py-3 mt-4 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition duration-300 transform hover:scale-105 group"
            >
              <MapPin className="w-5 h-5 mr-2 text-red-600 group-hover:animate-bounce" />
              <span className="font-medium">LOCATE THE FIRST LOVE CENTER</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 