import React from 'react';
import { ArrowRight, Flame, Sparkles } from 'lucide-react';
import { SIGNATURE_SPECIALTIES } from '../../data/menuData';

export default function SignatureSpecialties() {
  return (
    <section id="specialties-section" className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>Section 03 • Curated Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Our Signature <span className="text-gold-metallic">Specialities.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light leading-relaxed">
            Crafted for people who believe a great meal begins with uncompromised flavour.
          </p>
        </div>

        {/* 4 Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SIGNATURE_SPECIALTIES.map((item) => (
            <div
              key={item.num}
              className="gold-border-card rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              {/* Dish Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#151821]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-90" />

                {/* Number Badge & Dish Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-serif font-black text-2xl text-amber-300 tracking-wider bg-black/75 backdrop-blur-md px-3 py-1 rounded-xl border border-gold-metallic/40 shadow">
                    {item.num}
                  </span>
                  <span className="bg-rose-950/85 border border-rose-600/50 text-rose-300 font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-md shadow">
                    {item.badge}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300/90 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.spiceLevel}</span>
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                    {item.num}. {item.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-400/90 mt-1 italic">
                    "{item.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                  <span className="text-gray-300 font-medium">{item.audience}</span>
                  <a
                    href="#menu-section"
                    className="text-amber-400 hover:text-white font-bold flex items-center gap-1 transition-colors"
                  >
                    <span>View in Menu</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a
            href="#menu-section"
            className="btn-gold inline-flex items-center gap-2 px-9 py-4 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl"
          >
            <span>Explore the Full Menu</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
