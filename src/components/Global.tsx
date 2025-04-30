import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMapPin, IconPhone, IconSearch, IconX } from '@tabler/icons-react';
import Globe from './Globe';

interface Location {
  country: string;
  cities: string[];
  count: number;
  region: string;
}

interface SearchResult extends Location {
  relevance: number;
  matches: {
    type: 'country' | 'city' | 'region';
    text: string;
    index: number;
  }[];
}

const locations: Location[] = [
  {
    country: "Ghana",
    cities: ["Accra", "Kumasi", "Sunyani", "Ho", "Koforidua", "Bolgatanga", "Tamale", "Navrongo", "WA", "Cape Coast", "Takoradi", "Winneba", "Tarkwa"],
    count: 28,
    region: "West Africa"
  },
  {
    country: "China",
    cities: ["Changchun", "Fushun", "Maanshan", "Nanjing", "Shenyang"],
    count: 5,
    region: "Asia"
  },
  {
    country: "Tahiti",
    cities: ["Papeete"],
    count: 1,
    region: "Pacific"
  },
  {
    country: "United Kingdom",
    cities: ["Aberdeen", "London", "Birmingham", "Bedfordshire", "Brighton", "Bradford", "Buckingham", "Coventry", "Leeds", "Derby", "Edinburgh", "Essex", "Huddersfield", "Hull", "Kent", "Liverpool", "Lincoln", "Manchester", "Milton Keynes", "Northampton", "Nottingham", "Oxford Brookes", "Plymouth", "Portsmouth", "Reading", "Sheffield", "Southampton", "Surrey", "York", "Leicester"],
    count: 32,
    region: "Europe"
  },
  {
    country: "Switzerland",
    cities: ["Basel", "Bern", "Geneva", "Lussane", "Zurich"],
    count: 5,
    region: "Europe"
  },
  {
    country: "Sweden",
    cities: ["Malmo"],
    count: 1,
    region: "Europe"
  },
  {
    country: "Portugal",
    cities: ["Lisbon"],
    count: 1,
    region: "Europe"
  },
  {
    country: "Ukraine",
    cities: ["Ternopil", "Zaporozhye"],
    count: 2,
    region: "Europe"
  },
  {
    country: "USA",
    cities: ["Evansville", "Melbourne", "Frostburg", "Atlanta", "Boston", "Chicago", "Grand Rapids", "Las Vegas", "Missouri", "Murfreesboro", "Richmond", "Rolla", "San Juan", "Toledo", "DC", "Yale", "Dallas", "Memphis", "Cincinnati", "Houston", "Univ of MN", "Mass Central"],
    count: 22,
    region: "North America"
  },
  {
    country: "Canada",
    cities: ["Toronto"],
    count: 1,
    region: "North America"
  },
  {
    country: "Dominica",
    cities: ["Roseau"],
    count: 1,
    region: "Caribbean"
  },
  {
    country: "Guadeloupe",
    cities: ["Point at Pitre"],
    count: 1,
    region: "Caribbean"
  },
  {
    country: "Grenada",
    cities: ["St Georges"],
    count: 1,
    region: "Caribbean"
  },
  {
    country: "Dominica republic",
    cities: ["Santodomingo"],
    count: 1,
    region: "Caribbean"
  },
  {
    country: "Belize",
    cities: ["Belize City"],
    count: 1,
    region: "Central America"
  },
  {
    country: "Sierra Leone",
    cities: ["Freetown", "Jui", "Makeni", "Bo", "Kenema"],
    count: 5,
    region: "West Africa"
  },
  {
    country: "Nigeria",
    cities: ["Lagos", "Abuja", "Ogbomosho"],
    count: 3,
    region: "West Africa"
  },
  {
    country: "Liberia",
    cities: ["Monrovia"],
    count: 2,
    region: "West Africa"
  },
  {
    country: "Cape Verde",
    cities: ["Praia"],
    count: 1,
    region: "West Africa"
  },
  {
    country: "Guinea-Bissau",
    cities: ["Canchungo"],
    count: 1,
    region: "West Africa"
  },
  {
    country: "Botswana",
    cities: ["Bobonong", "Francistown", "Gaborone", "Kasane", "Molepolole", "Palapye", "Tati Siding"],
    count: 12,
    region: "Southern Africa"
  },
  {
    country: "Zambia",
    cities: ["Chingola", "Chipata", "Kawambwa", "Kitwe", "Livingston", "Lusaka", "Mansa", "Ndola"],
    count: 10,
    region: "Southern Africa"
  },
  {
    country: "Seychelles",
    cities: ["Anse Boileau", "Victoria", "Praslin"],
    count: 3,
    region: "East Africa"
  },
  {
    country: "Uganda",
    cities: ["Gulu"],
    count: 1,
    region: "East Africa"
  },
  {
    country: "Zimbabwe",
    cities: ["Harare", "Masvingo", "Mutare", "Victoria falls"],
    count: 4,
    region: "Southern Africa"
  },
  {
    country: "Malawi",
    cities: ["Chichiri", "Likubula", "Lilongwe"],
    count: 4,
    region: "Southern Africa"
  },
  {
    country: "Cameroon",
    cities: ["Yaounde"],
    count: 1,
    region: "Central Africa"
  },
  {
    country: "Dr Congo",
    cities: ["Kinshasa"],
    count: 4,
    region: "Central Africa"
  },
  {
    country: "Kenya",
    cities: ["Kakamega", "Nairobi"],
    count: 2,
    region: "East Africa"
  },
  {
    country: "Philippines",
    cities: ["Baguio", "Manila"],
    count: 2,
    region: "Asia"
  }
];

const Global = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Get unique regions
  const regions = useMemo(() => {
    const uniqueRegions = Array.from(new Set(locations.map(loc => loc.region)));
    return uniqueRegions.sort();
  }, []);

  // Enhanced search with better fuzzy matching, highlighting, and sorting
  const filteredLocations = useMemo(() => {
    const results: SearchResult[] = locations
      .filter(location => {
        if (selectedRegion && location.region !== selectedRegion) {
          return false;
        }
        return true;
      })
      .map(location => {
        const searchResult: SearchResult = {
          ...location,
          relevance: 0,
          matches: []
        };

        if (!searchQuery) {
          return searchResult;
        }

        const searchLower = searchQuery.toLowerCase();
        const searchTerms = searchLower.split(' ').filter(term => term.length > 0);

        // Search in country name
        const countryLower = location.country.toLowerCase();
        searchTerms.forEach(term => {
          if (countryLower.includes(term)) {
            searchResult.relevance += 10; // Higher weight for country matches
            searchResult.matches.push({
              type: 'country',
              text: location.country,
              index: countryLower.indexOf(term)
            });
          }
        });

        // Search in cities
        location.cities.forEach(city => {
          const cityLower = city.toLowerCase();
          searchTerms.forEach(term => {
            if (cityLower.includes(term)) {
              searchResult.relevance += 5; // Medium weight for city matches
              searchResult.matches.push({
                type: 'city',
                text: city,
                index: cityLower.indexOf(term)
              });
            }
          });
        });

        // Search in region
        const regionLower = location.region.toLowerCase();
        searchTerms.forEach(term => {
          if (regionLower.includes(term)) {
            searchResult.relevance += 3; // Lower weight for region matches
            searchResult.matches.push({
              type: 'region',
              text: location.region,
              index: regionLower.indexOf(term)
            });
          }
        });

        // Fuzzy matching for country name
        if (searchResult.matches.length === 0) {
          searchTerms.forEach(term => {
            let differences = 0;
            for (let i = 0; i < Math.min(term.length, countryLower.length); i++) {
              if (term[i] !== countryLower[i]) differences++;
            }
            if (differences <= 1) {
              searchResult.relevance += 2;
              searchResult.matches.push({
                type: 'country',
                text: location.country,
                index: 0
              });
            }
          });
        }

        return searchResult;
      })
      .filter(result => !searchQuery || result.matches.length > 0)
      .sort((a, b) => b.relevance - a.relevance);

    return results;
  }, [searchQuery, selectedRegion]);

  // Calculate statistics for search results
  const searchStats = useMemo(() => {
    const totalLocations = filteredLocations.reduce((total, loc) => total + loc.count, 0);
    const totalCountries = filteredLocations.length;
    const matchedRegions = Array.from(new Set(filteredLocations.map(loc => loc.region))).length;

    return { totalLocations, totalCountries, matchedRegions };
  }, [filteredLocations]);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      {/* Hero Section with Globe */}
      <div className="relative min-h-[80vh] flex items-center">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <img 
            src="/images/firstloveuk.webp" 
            alt="First Love Church Service" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.2)_0%,transparent_70%)] z-20"></div>
        </div>
        
        <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
                  Global Presence
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>
                <p className="text-xl text-[#94A3B8] max-w-2xl leading-relaxed font-light">
                  First Love Church is present in <span className="text-white font-medium">{locations.length} countries</span> with over <span className="text-white font-medium">{locations.reduce((total, loc) => total + loc.count, 0)} locations</span> worldwide, spreading the message of Jesus Christ and making disciples of all nations.
                </p>
              </motion.div>
            </div>
            <div className="relative lg:h-[700px] flex items-center justify-center">
              <Globe />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Locations Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search Bar and Region Filter */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200"
          >
            Find a First Love Church Near You
          </motion.h2>
          
          {/* Search Input */}
          <div className="relative">
            <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a country or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-[#111111] border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <IconX className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedRegion(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedRegion === null
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-[#111111] text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
              }`}
            >
              All Regions
            </button>
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region === selectedRegion ? null : region)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#111111] text-gray-400 hover:text-white hover:bg-[#1a1a1a]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

          {/* Enhanced Search Results Count */}
          <div className="text-gray-400 text-sm text-center space-y-2">
            <div>
              Found <span className="text-purple-400 font-medium">{searchStats.totalLocations}</span> locations in{' '}
              <span className="text-purple-400 font-medium">{searchStats.totalCountries}</span> countries
              {searchStats.matchedRegions > 0 && (
                <span> across <span className="text-purple-400 font-medium">{searchStats.matchedRegions}</span> regions</span>
              )}
            </div>
            {searchQuery && (
              <div className="text-sm">
                Showing results for "<span className="text-purple-400 font-medium">{searchQuery}</span>"
                {selectedRegion && <span> in <span className="text-purple-400 font-medium">{selectedRegion}</span></span>}
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filteredLocations.map((location, index) => (
              <motion.div
                key={location.country}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedLocation(location === selectedLocation ? null : location)}
                className="group relative overflow-hidden rounded-xl bg-[#111111] border border-purple-500/10 p-6 hover:bg-[#1a1a1a] hover:border-purple-500/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-white group-hover:text-purple-300 transition-colors">
                      {location.country}
                      {searchQuery && location.matches.some(m => m.type === 'country') && (
                        <span className="ml-2 text-xs text-purple-400">★</span>
                      )}
                    </h3>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {location.region}
                      {searchQuery && location.matches.some(m => m.type === 'region') && (
                        <span className="ml-2 text-xs text-purple-400">★</span>
                      )}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-purple-500/10 rounded-full text-purple-300 text-sm font-medium">
                    {location.count} locations
                  </span>
                </div>
                
                <AnimatePresence>
                  {(selectedLocation === location || location.matches.some(m => m.type === 'city')) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 space-y-2"
                    >
                      {location.cities.map((city) => {
                        const isMatch = searchQuery && location.matches.some(m => m.type === 'city' && m.text === city);
                        return (
                          <div 
                            key={city} 
                            className={`flex items-center text-sm transition-colors ${
                              isMatch 
                                ? 'text-purple-300 font-medium' 
                                : 'text-gray-400 group-hover:text-gray-300'
                            }`}
                          >
                            <IconMapPin className={`w-4 h-4 mr-2 ${isMatch ? 'text-purple-400' : 'text-purple-500/50'}`} />
                            {city}
                            {isMatch && <span className="ml-2 text-xs text-purple-400">★</span>}
                          </div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200"
          >
            Need Help Finding a Church?
          </motion.h2>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="https://wa.me/233246389779"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-[#111111] hover:bg-[#1a1a1a] border border-purple-500/20 hover:border-purple-500/40 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                <IconPhone className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">+233 24 638 9779</span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300">WhatsApp us for directions</span>
              </div>
            </a>
            <div className="h-8 w-px bg-purple-500/20 hidden sm:block"></div>
            <a
              href="mailto:admin@firstlovecenter.com"
              className="group flex items-center gap-3 px-6 py-4 bg-[#111111] hover:bg-[#1a1a1a] border border-purple-500/20 hover:border-purple-500/40 rounded-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
                <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium">Email Us</span>
                <span className="text-sm text-gray-400 group-hover:text-gray-300">admin@firstlovecenter.com</span>
              </div>
            </a>
          </div>
          <p className="text-gray-400 text-sm max-w-xl text-center mt-4">
            Our team is available to help you find the nearest First Love Church location and provide any information you need about our services and activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Global; 