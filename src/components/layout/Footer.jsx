import React from 'react';
import { ShieldCheck, Flame, Clock, Award, Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#060709] border-t border-gold-dark/40 pt-16 pb-12 text-gray-400 relative overflow-hidden">
      {/* Subtle gold radial background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-amber-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand Info & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND.logo}
                alt={BRAND.name}
                className="h-16 w-auto object-contain rounded-xl border border-gold-metallic/40 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              />
              <div>
                <span className="text-xl font-extrabold text-gold-metallic tracking-wider font-serif">
                  {BRAND.name}
                </span>
                <span className="text-xs text-amber-500/80 font-bold ml-1">TM</span>
                <div className="text-[11px] font-semibold tracking-wider flex items-center gap-1">
                  <span className="text-amber-300">{BRAND.taglinePureMutton}</span>
                  <span className="text-rose-500">{BRAND.taglinePureTaste}</span>
                </div>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              India's premier artisanal butchery & mutton specialty kitchen. Hand-trimmed pasture-raised mutton, slow-cooked clay handis, and royal dum biryani.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/40 border border-gold-metallic/30 rounded-full text-xs text-amber-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                100% Certified Artisanal Halal
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2 font-serif">
              <Flame className="w-4 h-4 text-rose-500" />
              Menu & Specialities
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#cuts-section" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Fresh Hand-Trimmed Cuts</span>
                  <span className="text-[10px] text-gray-500 font-mono">Raw</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Traditional Handi Mutton</span>
                  <span className="text-[10px] text-amber-400 font-mono">Bestseller</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>Royal Awadhi Mutton Biryani</span>
                  <span className="text-[10px] text-amber-400 font-mono">Dum Special</span>
                </a>
              </li>
              <li>
                <a href="#menu-section" className="hover:text-amber-300 transition-colors flex items-center justify-between">
                  <span>MTON Mutton Pepper Soup</span>
                  <span className="text-[10px] text-gray-500 font-mono">Slow Broth</span>
                </a>
              </li>
              <li>
                <a href="#gallery-section" className="hover:text-amber-300 transition-colors">
                  <span>Visual Food Gallery</span>
                </a>
              </li>
              <li>
                <a href="#location-section" className="hover:text-amber-300 transition-colors">
                  <span>Visit Location & Directions</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Quality Commitments */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2 font-serif">
              <Award className="w-4 h-4 text-amber-400" />
              The MTON Standard
            </h4>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Zero frozen storage. Cut & cooked fresh against confirmed orders.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>0°C - 4°C sterile temperature control during vacuum packing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Slow-cooked in clay handis over gentle charcoal embers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span>Naturally pasture-fed young stock with balanced tender fat.</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Butcher Helpline & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2 font-serif">
              <Clock className="w-4 h-4 text-amber-400" />
              Master Butcher Support
            </h4>
            <div className="bg-[#0d0f15] border border-gold-metallic/30 rounded-2xl p-4 space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-500">Order Hotline:</div>
                  <a href={`tel:${BRAND.phone}`} className="text-sm font-bold text-amber-300 hover:underline font-mono">
                    {BRAND.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-500">Gourmet Assistance:</div>
                  <a href={`mailto:${BRAND.supportEmail}`} className="text-xs text-gray-300 hover:text-white">
                    {BRAND.supportEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-rose-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-gray-500">Operating Hours:</div>
                  <div className="text-xs font-semibold text-gray-200">12:00 PM – 11:30 PM (Daily)</div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-gray-500">
              Payment Options: UPI, Credit/Debit Cards, Cash On Delivery, NetBanking.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-dark/30 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 2026 <strong className="text-amber-400 font-serif">MTON™</strong> — {BRAND.taglinePureMutton} {BRAND.taglinePureTaste} For the Love of Mutton. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-gray-400 hover:text-amber-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
