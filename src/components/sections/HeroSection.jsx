import React, { useState } from 'react';
import { Flame, ArrowRight, MessageCircle, Copy, Check, Clock, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function HeroSection() {
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('PUREMTON15');
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-10 pb-20 lg:py-24 border-b border-gold-dark/40 bg-gradient-to-b from-[#11141c] via-[#090b0e] to-[#07080a]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand & Tagline */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Brand Emblem & Badges */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-600/15 to-red-600/10 border border-gold-metallic/40 text-xs shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="font-extrabold text-amber-300 tracking-wider">
                {BRAND.name}™ MUTTON SPECIALTY
              </span>
              <span className="text-gray-600">|</span>
              <span className="text-gray-300 font-medium">For the Love of Mutton</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] font-serif">
              NOT JUST A MEAL. <br />
              <span className="text-gold-metallic">A MUTTON OBSESSION.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Every cut. Every spice. Every bite — crafted for those who truly love mutton. Experience traditional clay <strong className="text-amber-300 font-semibold">Handi Mutton</strong>, royal aromatic <strong className="text-amber-300 font-semibold">Mutton Biryani</strong>, and comforting <strong className="text-amber-300 font-semibold">Mutton Soup</strong>, along with fresh butchery cuts.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#menu-section"
                className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl"
              >
                <Flame className="w-4 h-4 fill-black text-black" />
                <span>Explore Specialty Menu</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Coupon Box */}
              <div
                onClick={handleCopyCode}
                className="w-full sm:w-auto flex items-center justify-between gap-3 bg-[#131620] border border-gold-metallic/50 hover:border-amber-400 px-4 py-2.5 rounded-xl cursor-pointer group transition-all"
                title="Click to copy coupon code"
              >
                <div className="text-left">
                  <div className="text-[10px] text-gray-400">Coupon For 15% OFF:</div>
                  <div className="font-mono font-bold text-amber-300 text-sm">PUREMTON15</div>
                </div>
                <button className="text-gray-400 group-hover:text-amber-300 p-1">
                  {copiedCode ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Order */}
              <a
                href={`https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20from%20your%20mutton%20specialty%20menu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-[#1b2b20] hover:bg-[#233829] text-emerald-300 border border-emerald-500/40 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800/80 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">100%</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Certified Artisanal Halal</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono">4.9 ★</div>
                <div className="text-[11px] text-gray-400 mt-0.5">1,200+ Gourmet Feasts</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-white font-mono">0° - 4°C</div>
                <div className="text-[11px] text-gray-400 mt-0.5">Cold Chain & Handi Fresh</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold-metallic/50 shadow-[0_0_50px_rgba(212,175,55,0.25)] group">
              <img
                src="/images/hero.jpg"
                alt="MTON Signature Gourmet Mutton"
                className="w-full h-[360px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-black/25 to-transparent" />

              {/* Floating Brand Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2.5 bg-black/85 backdrop-blur-md border border-gold-metallic/40 px-3.5 py-1.5 rounded-xl shadow-lg">
                <img
                  src={BRAND.logo}
                  alt="MTON Logo"
                  className="w-8 h-8 object-contain rounded"
                />
                <div className="text-left">
                  <div className="text-[10px] font-extrabold text-amber-300 tracking-wider font-serif">
                    MTON RESERVE
                  </div>
                  <div className="text-[9px] text-gray-300">Pure Mutton • Pure Taste</div>
                </div>
              </div>

              {/* Floating Live Delivery Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0e1117]/95 backdrop-blur-md border border-gold-metallic/40 p-3.5 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-gold-metallic/40 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>Express Delivery in 90 Mins</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    </div>
                    <div className="text-[11px] text-gray-400">
                      Vacuum packed with food-grade chilling gel pads
                    </div>
                  </div>
                </div>
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Live Dispatch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
