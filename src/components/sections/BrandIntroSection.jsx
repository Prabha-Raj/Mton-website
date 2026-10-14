import React from 'react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function BrandIntroSection() {
  return (
    <section id="about" className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual: Chef Serving from Handi */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold-metallic/35 shadow-[0_0_40px_rgba(212,175,55,0.15)] group">
              <img
                src="/images/dish-chef.jpg"
                alt="Chef serving slow-cooked Handi Mutton at MTON"
                className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent opacity-85" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#0f1117]/95 backdrop-blur-md border border-gold-metallic/30 p-4 rounded-2xl flex items-center gap-3.5 shadow-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-gold-metallic/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-amber-400 tracking-wider font-serif">
                    Authentic Clay Pot Simmer
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Master butchery meets slow-fire traditional culinary craft
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy: Where Mutton Takes Centre Stage */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>Section 02 • Brand Introduction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif leading-tight">
              Where Mutton Takes <br />
              <span className="text-gold-metallic">Centre Stage.</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              <p>
                At <strong className="text-amber-300 font-semibold">MTON</strong>, mutton isn't just another item on the menu — <span className="text-white font-medium">it's the star of the table</span>.
              </p>
              <p>
                From the deep, comforting flavours of traditional handi mutton to the irresistible aroma of freshly prepared mutton biryani, every dish celebrates the love of good food.
              </p>
              <p>
                Whether you're here for a satisfying meal, a comforting bowl of soup or a feast worth sharing, MTON brings your mutton cravings to the forefront.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-gray-200 bg-[#12151e] border border-gold-dark/40 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Zero Frozen Short-cuts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-200 bg-[#12151e] border border-gold-dark/40 p-3.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Whole Spices & Pure Desi Ghee</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#specialties-section"
                className="btn-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                <span>Discover the MTON Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
