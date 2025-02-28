import { useRef, useEffect } from 'react';

const Events = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const events = [
    {
      day: 'Sunday',
      events: [
        {
          name: 'Holy Ghost Encounter Service',
          time: '8:30 AM',
          image: '/images/events/HGE.png',
          description: 'Start your Sunday with a powerful encounter with the Holy Spirit'
        },
        {
          name: 'The First Love Experience Service',
          time: '12:00 PM',
          image: '/images/events/Experience.png',
          description: 'Experience the presence of God'
        }
      ]
    },
    {
      day: 'Monday',
      events: [
        {
          name: 'First Love Conversations',
          time: '7:00 PM',
          image: '/images/events/Convo.png',
          description: 'Join us for enriching conversations'
        }
      ]
    },
    {
      day: 'Tuesday',
      events: [
        {
          name: 'Flow Prayer',
          time: '4:00 AM',
          image: '/images/events/prayer.png',
          description: 'Early morning prayer time with Bishop Dag Heward-Mills'
        }
      ]
    },
    {
      day: 'Wednesday',
      events: [
        {
          name: 'Preventing the Dawn',
          time: '5:00 AM',
          image: '/images/events/prevent.png',
          description: 'Rise before dawn in worship'
        }
      ]
    },
    {
      day: 'Thursday',
      events: [
        {
          name: 'Feed the FLOC',
          time: '7:00 PM',
          image: '/images/events/flock.png',
          description: 'Nourishing the flock with the Word'
        }
      ]
    },
    {
      day: 'Friday',
      events: [
        {
          name: 'Flow Prayer',
          time: '4:00 AM',
          image: '/images/events/prayer.png',
          description: 'Early morning prayer time with Bishop Dag Heward-Mills'
        }
      ]
    }
  ];

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
    <section ref={sectionRef} className="relative min-h-screen bg-black pt-40 pb-20 overflow-hidden">
      {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/events-bg.jpg" 
          alt="Events Background"
          className="w-full h-full object-cover object-center opacity-50"
        />
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
      </div>

      {/* Additional Ambient Light */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-8 max-w-3xl mx-auto mb-20 animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Weekly Events
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 rounded-full mx-auto"></div>
          </div>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
            Join us throughout the week for various events and services
          </p>
        </div>
        
        {/* Events Grid */}
        <div className="mt-16 grid gap-8">
          {events.map((day, dayIndex) => (
            <div 
              key={day.day}
              className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000"
              style={{ transitionDelay: `${dayIndex * 100}ms` }}
            >
              {/* Day Header */}
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-3xl font-bold text-white">{day.day}</h3>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>

              {/* Events for the Day */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {day.events.map((event) => (
                  <div 
                    key={event.name}
                    className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    {/* Event Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>

                    {/* Event Details */}
                    <div className="relative p-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {event.name}
                        </h4>
                        <p className="text-white/70">{event.description}</p>
                      </div>
                      <div className="flex items-center space-x-2 text-purple-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{event.time}</span>
        </div>
      </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
        </div>
          </div>
          ))}
        </div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/20 via-blue-900/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </section>
  );
};

export default Events; 