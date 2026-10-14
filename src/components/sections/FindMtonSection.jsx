import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation } from 'lucide-react';
import { BRAND } from '../../data/products';

export default function FindMtonSection() {
  return (
    <section id="location-section" className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 15 • Visit & Plan Your Feast</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Your Next Favourite Mutton Meal <br />
            <span className="text-gold-metallic">Starts Here.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Looking for a place to satisfy your mutton cravings? Find MTON, explore the menu and plan your next visit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Visit MTON */}
          <div className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-gold-metallic/35 flex items-center justify-center text-amber-400">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">Visit MTON</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Plot 14, Royal Gourmet Lane, South Extension Part 2, New Delhi - 110049
              </p>
              <p className="text-xs text-amber-400">
                Landmark: Near South City Club & Metro Gate 3
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800/80">
              <a
                href="https://maps.google.com/?q=South+Extension+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Opening Hours */}
          <div className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-gold-metallic/35 flex items-center justify-center text-amber-400">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">Opening Hours</h3>
              <div className="space-y-2 text-sm text-gray-300 font-light">
                <div className="flex justify-between py-1 border-b border-gray-800/60">
                  <span>Monday – Sunday:</span>
                  <span className="font-bold text-white">12:00 PM – 11:30 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-gray-800/60">
                  <span>Dine-In Seating:</span>
                  <span className="text-amber-400">Available with Group Seating</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Delivery & Takeaway:</span>
                  <span className="text-emerald-400">Piping Hot Till 11:30 PM</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800/80">
              <a
                href={`tel:${BRAND.phone}`}
                className="bg-[#141722] hover:bg-[#1c2130] text-white border border-gold-metallic/40 w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call MTON Hotline</span>
              </a>
            </div>
          </div>

          {/* Card 3: Contact & Orders */}
          <div className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all group shadow-xl">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-gold-metallic/35 flex items-center justify-center text-amber-400">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-serif">Contact & Orders</h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light">
                Direct phone inquiries, bulk handi mutton orders, and quick WhatsApp messaging.
              </p>
              <div className="p-3 bg-black/50 rounded-xl border border-gold-metallic/20 text-xs">
                <div className="text-gray-400">Direct Butcher Line:</div>
                <a href={`tel:${BRAND.phone}`} className="text-base font-bold text-amber-300 hover:underline font-mono">
                  {BRAND.phone}
                </a>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-800/80">
              <a
                href={`https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20from%20your%20mutton%20specialty%20menu.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#1b2b20] hover:bg-[#233829] text-emerald-300 border border-emerald-500/40 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
