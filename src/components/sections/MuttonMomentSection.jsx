import React from 'react';
import { ArrowRight, Heart, Sparkles, MessageCircle } from 'lucide-react';

export default function MuttonMomentSection() {
  return (
    <section className="relative py-28 md:py-32 overflow-hidden bg-[#07080a] text-white border-b border-gold-dark/40">
      {/* Cinematic Feast Background Image & Gradient Overlay like Section 17 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/images/dish-moment.jpg"
          alt="The Ultimate MTON Mutton Lover Feast"
          className="w-full h-full object-cover object-center opacity-40 brightness-95 scale-105"
        />
        {/* Multi-stop deep obsidian gradients for cinematic depth & readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-[#07080a]/65 to-[#07080a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#07080a_85%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#12151e]/90 border border-gold-metallic/40 text-xs text-white uppercase tracking-widest shadow-xl backdrop-blur-md">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>Section 08 • The Mutton Lover's Moment</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif leading-tight tracking-tight">
          THAT FIRST BITE <br />
          <span className="text-gold-metallic">SAYS IT ALL.</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-4 text-sm sm:text-lg text-gray-200 font-light leading-relaxed">
          <p>
            The aroma of the slow-roasted whole spices. The rich, silky rogan of the gravy. The sheer satisfaction of tender, fall-apart mutton crafted specifically for true lovers of pure meat.
          </p>
          <p className="text-gray-300">
            Some meals are just meals. <span className="text-white font-medium">Others become the reason you return time and time again.</span>
          </p>

          <div className="pt-4">
            <div className="inline-block px-6 py-3 rounded-2xl bg-[#0e1017]/85 border border-gold-metallic/35 backdrop-blur-md shadow-2xl">
              <p className="text-lg sm:text-2xl font-serif text-white font-bold tracking-wide">
                <span className="text-amber-400">“</span>If Mutton Is Your Love Language, Welcome to MTON.<span className="text-amber-400">”</span>
              </p>
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <a
            href="#menu-section"
            className="w-full sm:w-auto btn-gold px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl"
          >
            <span>Explore What's Cooking</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href={`https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20for%20a%20family%20mutton%20feast.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#1b2b20]/90 hover:bg-[#233829] text-emerald-300 border border-emerald-500/40 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-lg backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Feast On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
