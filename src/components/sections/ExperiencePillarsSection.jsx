import React from 'react';
import { GREAT_MEAL_PILLARS } from '../../data/menuData';

export default function ExperiencePillarsSection() {
  return (
    <section className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <span>Section 12 • The Four Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            What Makes a Great Mutton Meal? <br />
            <span className="text-gold-metallic">It's All in the Experience.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            At MTON, the goal is simple: make choosing your next mutton meal something to look forward to.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {GREAT_MEAL_PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <span className="text-xs font-mono font-bold text-amber-400 tracking-widest">
                  PILLAR 0{idx + 1}
                </span>

                <h3 className="text-2xl font-bold text-white font-serif mt-3 group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800/80 text-[11px] text-gray-400 font-mono">
                The MTON Experience
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
