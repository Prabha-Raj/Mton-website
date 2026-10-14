import React from 'react';
import { BRAND } from '../../data/products';

export default function BrandStatementSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-[#0a0c10] text-white border-b border-gold-dark/40">
      {/* Background with Dark Subtle Handi Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/dish-biryani.jpg"
          alt="MTON Signature Craft"
          className="w-full h-full object-cover object-center opacity-20 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/90 to-[#0a0c10]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
          <span>Section 10 • Signature Statement</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif tracking-tight leading-[1.15]">
          NOT FOR EVERY CRAVING.
          <br />
          <span className="text-gold-metallic">FOR THE MUTTON CRAVING.</span>
        </h2>

        <p className="text-base sm:text-xl text-gray-300 font-light max-w-2xl mx-auto">
          MTON is where mutton lovers find a menu that speaks their language.
        </p>

        <div className="pt-4 flex items-center justify-center gap-3 text-xs tracking-widest uppercase font-semibold text-amber-400">
          <span>{BRAND.taglinePureMutton}</span>
          <span className="text-rose-500">•</span>
          <span className="text-rose-400">{BRAND.taglinePureTaste}</span>
        </div>
      </div>
    </section>
  );
}
