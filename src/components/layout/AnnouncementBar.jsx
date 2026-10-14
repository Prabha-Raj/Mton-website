import React from 'react';
import { ShieldCheck, Zap, PhoneCall, Sparkles } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-[#140808] via-[#1a1408] to-[#140808] border-b border-gold-metallic/30 text-xs py-2 px-4 transition-all">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
        {/* Left badges */}
        <div className="flex items-center gap-4 text-gray-300">
          <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            100% Certified Artisanal Halal
          </span>
          <span className="hidden sm:inline-block text-gray-600">|</span>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-rose-400">
            <Zap className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
            90-Min Chilled Express Delivery
          </span>
        </div>

        {/* Center promo code */}
        <div className="inline-flex items-center gap-2">
          <span className="text-gray-400">First Order Code:</span>
          <span className="bg-gold-500/20 text-amber-300 border border-gold-metallic/50 px-2 py-0.5 rounded font-mono font-bold tracking-wide">
            PUREMTON15
          </span>
          <span className="text-gray-400 hidden lg:inline">for 15% OFF your order</span>
        </div>

        {/* Right Phone Hotline */}
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <a
            href={`tel:${BRAND.phone}`}
            className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Order Line: <strong className="text-amber-300 font-mono">{BRAND.phone}</strong></span>
          </a>
        </div>
      </div>
    </div>
  );
}
