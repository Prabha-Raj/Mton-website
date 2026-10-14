import React from 'react';
import { Quote } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function PhilosophySection() {
  return (
    <section className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative overflow-hidden">
      {/* Decorative center ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
          <span>Section 05 • The MTON Philosophy</span>
        </div>

        <Quote className="w-10 h-10 text-amber-400/40 mx-auto" />

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif leading-tight">
          Less Ordinary. <span className="text-gold-metallic">More Mutton.</span>
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
          <p>
            We believe a memorable meal is about more than filling a plate. It's about flavour, aroma, anticipation and that first bite you can't stop thinking about.
          </p>
          <p>
            That's the idea behind <strong className="text-white font-semibold">MTON</strong>: put mutton at the heart of the experience and give every dish its own reason to be remembered.
          </p>
          <p className="text-amber-300 font-medium italic">
            No distractions. Just a menu with a clear passion.
          </p>
        </div>

        <div className="pt-4 flex flex-col items-center">
          <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mb-4" />
          <span className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wider">
            {BRAND.name} • <span className="text-gold-metallic">For the Love of Mutton</span>
          </span>
        </div>
      </div>
    </section>
  );
}
