import React, { useState } from 'react';
import { Search, MapPin, Zap, ChevronDown, Check } from 'lucide-react';

const DELIVERY_AREAS = [
  'South Ext Part 1 & 2, New Delhi',
  'Defence Colony, New Delhi',
  'Greater Kailash (GK 1 & 2)',
  'Hauz Khas & Green Park',
  'Saket & Malviya Nagar',
  'Vasant Kunj & Shanti Niketan',
  'Lajpat Nagar & Nizamuddin',
];

const POPULAR_SEARCHES = [
  'Handi Mutton',
  'Mutton Biryani',
  'Curry Cut',
  'Lamb Chops',
  'Mutton Soup',
  'Keema',
];

export default function DeliverySearchBar({ searchQuery, setSearchQuery }) {
  const [selectedArea, setSelectedArea] = useState(DELIVERY_AREAS[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="relative -mt-6 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
      <div className="gold-border-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(212,175,55,0.18)] bg-[#0e1017] border border-gold-metallic/35">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          {/* Location & Delivery Badge (Left 5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 bg-[#141722] border border-gold-metallic/30 hover:border-gold-metallic/60 p-3 sm:p-3.5 rounded-2xl cursor-pointer transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-gold-metallic/40 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>

              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-amber-400 text-amber-400" />
                    Office Locations
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white truncate group-hover:text-amber-300 transition-colors">
                  {selectedArea}
                </div>
              </div>

              <ChevronDown className={`w-4 h-4 text-amber-400 transition-transform duration-200 shrink-0 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {/* Area Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#12151f] border border-gold-metallic/40 rounded-2xl p-2 shadow-2xl z-50 space-y-1">
                <div className="text-[10px] uppercase font-bold text-gray-400 px-3 py-1.5 border-b border-gray-800">
                  Select Delivery Zone (South Delhi)
                </div>
                {DELIVERY_AREAS.map((area) => (
                  <button
                    key={area}
                    type="button"
                    onClick={() => {
                      setSelectedArea(area);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left text-xs px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${selectedArea === area
                      ? 'bg-amber-500/20 text-amber-300 font-bold'
                      : 'text-gray-300 hover:bg-[#1a1e2c] hover:text-white'
                      }`}
                  >
                    <span>{area}</span>
                    {selectedArea === area && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Search Bar Input (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative">
              <Search className="w-5 h-5 text-amber-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tender goat curry cut, handi mutton, biryani, keema, soup..."
                value={searchQuery || ''}
                onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
                className="w-full bg-[#141722] border border-gold-metallic/35 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-xs sm:text-sm text-white placeholder-gray-400 pl-12 pr-10 py-3.5 rounded-2xl outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery && setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white bg-gray-800/80 w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Quick Popular Searches Tags */}
        <div className="mt-4 pt-3.5 border-t border-gray-800/80 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-[11px] font-semibold text-gray-400">Popular Searches:</span>
          {POPULAR_SEARCHES.map((term) => (
            <button
              key={term}
              type="button"
              onClick={() => {
                if (setSearchQuery) setSearchQuery(term);
                // Smooth scroll to either cuts or menu
                const cutsEl = document.getElementById('cuts-section');
                if (cutsEl) cutsEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[11px] bg-[#141722] hover:bg-amber-500/20 text-gray-300 hover:text-amber-300 border border-gold-dark/40 hover:border-gold-metallic/60 px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
            >
              {term}
            </button>
          ))}
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery && setSearchQuery('')}
              className="text-[11px] text-rose-400 hover:text-rose-300 underline ml-auto cursor-pointer"
            >
              Clear Search ("{searchQuery}")
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
