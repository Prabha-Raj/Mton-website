import React, { useState } from 'react';
import { PhoneCall, Menu, X, MessageCircle } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Fresh Cuts', href: '#cuts-section' },
    { label: 'Cooked Menu', href: '#menu-section' },
    { label: 'Specialities', href: '#specialties-section' },
    { label: 'Why MTON', href: '#why-mton-section' },
    { label: 'Gallery', href: '#gallery-section' },
    { label: 'Location', href: '#location-section' },
  ];

  return (
    <header className="sticky top-0 z-40 glass-header transition-all">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={BRAND.logo}
                  alt="MTON Pure Mutton Pure Taste"
                  className="h-14 sm:h-16 w-auto object-contain rounded-xl border border-gold-metallic/40 shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:border-gold-metallic group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all"
                />
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-wider text-gold-metallic font-serif">
                    {BRAND.name}
                  </span>
                  <span className="text-[10px] font-bold text-amber-500/80 -mt-2">TM</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] tracking-widest font-semibold uppercase">
                  <span className="text-amber-300">{BRAND.taglinePureMutton}</span>
                  <span className="text-rose-500">{BRAND.taglinePureTaste}</span>
                </div>
              </div>
            </a>
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-gray-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick CTAs (Right) */}
          <div className="flex items-center gap-3">
            {/* Direct Order Line */}
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#131620] hover:bg-[#1a1e2c] border border-gold-metallic/40 text-amber-300 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>{BRAND.phone}</span>
            </a>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20from%20your%20mutton%20specialty%20menu.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <MessageCircle className="w-4 h-4 text-black" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-amber-400 p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gold-500/20 flex flex-col gap-3 text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-amber-300 py-1.5 px-2 rounded-lg hover:bg-[#131620]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-gold-dark/40 flex flex-col gap-2">
              <a
                href={`tel:${BRAND.phone}`}
                className="flex items-center gap-2 text-amber-300 py-1"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call Hotline: {BRAND.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
