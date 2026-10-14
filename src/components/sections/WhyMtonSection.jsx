import React from 'react';
import { Flame, Sparkles, Users, Award } from 'lucide-react';
import { WHY_MTON } from '../../data/menuData';

const ICONS = {
  Flame,
  Sparkles,
  Users,
  Award,
};

export default function WhyMtonSection() {
  return (
    <section id="why-mton-section" className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>Section 04 • The MTON Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Made for People Who <br />
            <span className="text-gold-metallic">Know Their Mutton.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl mx-auto">
            A menu built around the dishes mutton lovers seek, not generic crowd-pleasers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WHY_MTON.map((item, idx) => {
            const Icon = ICONS[item.icon] || Flame;
            return (
              <div
                key={idx}
                className="gold-border-card p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-gold-metallic/35 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/25 transition-all">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white font-serif mt-1 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 mt-2.5 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-gray-800/80 flex items-center gap-2 text-[11px] text-gray-400 font-mono">
                  <span className="text-amber-400 font-bold">0{idx + 1}</span>
                  <span className="text-gray-600">—</span>
                  <span className="text-gray-400">Guaranteed Craft</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
