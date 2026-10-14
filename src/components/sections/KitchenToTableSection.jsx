import React from 'react';
import { KITCHEN_TO_TABLE } from '../../data/menuData';

export default function KitchenToTableSection() {
  return (
    <section className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <span>Section 07 • The Culinary Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            From Kitchen to Table. <br />
            <span className="text-gold-metallic">Attention to Every Detail.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Good food is never rushed. How we craft our mutton from source to plate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KITCHEN_TO_TABLE.map((item) => (
            <div
              key={item.step}
              className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <span className="font-serif font-black text-4xl text-amber-400/40 group-hover:text-amber-400 transition-colors">
                  {item.step}
                </span>

                <div className="mt-4">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-serif mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800/80 text-[11px] text-gray-400 font-mono">
                MTON Kitchen Standard
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
