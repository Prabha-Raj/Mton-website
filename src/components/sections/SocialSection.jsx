import React from 'react';
import { MapPin, MessageCircle, ArrowRight, Share2 } from 'lucide-react';
import { BRAND } from '../../data/products';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function SocialSection() {
  const SOCIAL_CHANNELS = [
    {
      name: 'Instagram',
      handle: '@mton.official',
      desc: 'Food reels, slow-cooked clay handi videos and signature dish reveals.',
      icon: InstagramIcon,
      url: 'https://instagram.com',
      cta: 'Follow on Instagram',
      color: 'from-purple-900/40 to-pink-900/30 text-pink-300',
    },
    {
      name: 'Facebook',
      handle: 'MTON Mutton Specialty',
      desc: 'Weekly special cuts, festival offers, and customer community feasts.',
      icon: FacebookIcon,
      url: 'https://facebook.com',
      cta: 'Join Community',
      color: 'from-blue-900/40 to-indigo-900/30 text-blue-300',
    },
    {
      name: 'Google Business Profile',
      handle: 'MTON South Extension',
      desc: 'Verified location directions, customer reviews, and live dine-in hours.',
      icon: MapPin,
      url: 'https://maps.google.com',
      cta: 'View on Maps',
      color: 'from-amber-900/40 to-yellow-900/30 text-amber-300',
    },
    {
      name: 'WhatsApp Community',
      handle: '+91 XXXXX 43210',
      desc: 'Direct priority ordering, daily handi availability, and group bookings.',
      icon: MessageCircle,
      url: 'https://wa.me/919876543210',
      cta: 'Chat on WhatsApp',
      color: 'from-emerald-900/40 to-teal-900/30 text-emerald-300',
    },
  ];

  return (
    <section className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 16 • Stay in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Follow the <span className="text-gold-metallic">Flavour.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Follow MTON for food photography, menu highlights, new dishes, special offers and a closer look at the brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SOCIAL_CHANNELS.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <div
                key={idx}
                className="gold-border-card p-7 rounded-3xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ch.color} border border-white/10 flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif">{ch.name}</h3>
                    <p className="text-xs font-semibold text-amber-400 mt-0.5">{ch.handle}</p>
                    <p className="text-xs text-gray-300 mt-2.5 leading-relaxed font-light">
                      {ch.desc}
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-800/80">
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-white hover:text-amber-300 flex items-center justify-between group-hover:translate-x-0.5 transition-all"
                  >
                    <span>{ch.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
