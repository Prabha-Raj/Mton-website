import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export default function MuttonMomentSection() {
  return (
    <section className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Section 08 • The Mutton Lover's Moment</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif leading-tight">
          That First Bite <br />
          <span className="text-gold-metallic">Says It All.</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-lg text-gray-300 font-light leading-relaxed">
          <p>
            The aroma of the spices. The richness of the gravy. The satisfaction of a dish made for your cravings.
          </p>
          <p>
            Some meals are just meals. <span className="text-white font-medium">Others become the reason you return.</span>
          </p>
          <p className="text-xl sm:text-2xl font-serif text-white font-bold pt-2">
            "If Mutton Is Your Love Language, Welcome to MTON."
          </p>
        </div>

        <div className="pt-6">
          <a
            href="#menu-section"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-xl"
          >
            <span>Explore What's Cooking</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
