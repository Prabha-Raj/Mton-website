import React from 'react';
import { ArrowRight, Flame, MessageCircle } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function ConversionSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#07080a] text-white border-b border-gold-dark/40">
      {/* Background with Dark Cinematic Handi visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dish-handi.jpg"
          alt="MTON Specialty Dish"
          className="w-full h-full object-cover object-center opacity-1 brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-[#07080a]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151e]/90 border border-gold-metallic/40 text-xs text-white uppercase tracking-widest shadow-lg backdrop-blur-md">
          <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>Section 17 • The Next Step</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight">
          YOUR MUTTON CRAVING <br />
          <span className="text-gold-metallic">HAS A NAME.</span>
        </h2>

        <div className="space-y-2 text-base sm:text-xl text-gray-200 font-light">
          <p className="text-white font-medium">Make your next meal a MTON moment.</p>
          <p className="text-gray-400">
            Explore the menu. Choose your favourite. Enjoy the flavour.
          </p>
        </div>

        {/* High contrast Gold CTA */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#menu-section"
            className="w-full sm:w-auto btn-gold px-10 py-4 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Explore Menu & Order</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20from%20your%20mutton%20specialty%20menu.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#1b2b20] hover:bg-[#233829] text-emerald-300 border border-emerald-500/40 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
