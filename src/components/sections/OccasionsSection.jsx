import React from 'react';
import { OCCASIONS } from '../../data/menuData';

export default function OccasionsSection() {
  return (
    <section className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <span>Section 09 • Gatherings & Dining</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Made for <span className="text-gold-metallic">Every Occasion.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Whether gathering around the table or ordering a comforting bowl at home.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OCCASIONS.map((occ, idx) => (
            <div
              key={idx}
              className="gold-border-card p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider bg-amber-500/15 border border-gold-metallic/35 px-2.5 py-1 rounded-md">
                  {occ.highlight}
                </span>

                <h3 className="text-xl font-bold text-white font-serif mt-4 group-hover:text-amber-300 transition-colors">
                  {occ.title}
                </h3>
                <p className="text-xs font-semibold text-amber-400/90 mt-1 italic">
                  "{occ.tagline}"
                </p>
                <p className="text-xs text-gray-300 mt-3 leading-relaxed font-light">
                  {occ.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-gray-800/80 text-[11px] text-gray-400 font-mono">
                MTON Dining Moments
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
