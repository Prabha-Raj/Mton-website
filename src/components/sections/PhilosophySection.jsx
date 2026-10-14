import React from 'react';
import { Quote, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function PhilosophySection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-[#07080a] text-white border-b border-gold-dark/40">
      {/* Background Image & Cinematic Gradient Overlays like Section 17 & 08 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/dish-philosophy.jpg"
          alt="The MTON Artisanal Mutton Philosophy"
          className="w-full h-full object-cover object-center opacity-40 brightness-95 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/65 to-[#07080a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#07080a_85%)]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151e]/90 border border-gold-metallic/40 text-xs text-white uppercase tracking-widest shadow-xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Section 05 • The MTON Philosophy</span>
        </div>

        <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-gold-metallic/40 flex items-center justify-center mx-auto text-amber-400 shadow-xl backdrop-blur-sm">
          <Quote className="w-7 h-7 text-amber-400/90" />
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif leading-tight tracking-tight">
          LESS ORDINARY. <br />
          <span className="text-gold-metallic">MORE MUTTON.</span>
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-3xl mx-auto">
          <p>
            We believe a memorable meal is about far more than simply filling a plate. It is about aroma, patience, authentic heat, and that unmistakable first bite you keep coming back to.
          </p>
          <p className="text-gray-300">
            That is the pure founding idea behind <strong className="text-white font-semibold">MTON™</strong>: put ethical young mutton at the very heart of the culinary experience and give every single cut and preparation its own reason to be celebrated.
          </p>
          <div className="pt-2">
            <span className="text-amber-300 font-serif italic text-lg sm:text-xl font-medium bg-black/60 px-5 py-2 rounded-xl border border-gold-metallic/30 inline-block backdrop-blur-sm">
              “No shortcuts. No distractions. Just pure uncompromised mutton passion.”
            </span>
          </div>
        </div>

        <div className="pt-6 flex flex-col items-center">
          <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4" />
          <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wider">
            {BRAND.name} • <span className="text-gold-metallic">For the Love of Mutton</span>
          </span>
        </div>
      </div>
    </section>
  );
}
