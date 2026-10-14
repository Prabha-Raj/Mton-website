import React from 'react';
import { Eye } from 'lucide-react';
import { FOOD_GALLERY } from '../../data/menuData';

export default function FoodGallerySection() {
  return (
    <section id="gallery-section" className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <Eye className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 11 • Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            A Feast for <span className="text-gold-metallic">The Eyes.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Real food photography capturing the depth, aroma, and rich textures of MTON specialities.
          </p>
        </div>

        {/* Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOOD_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl overflow-hidden border border-gold-metallic/30 hover:border-gold-metallic/80 group shadow-xl ${item.span} min-h-[260px]`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-black/25 to-transparent opacity-85" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-gold-metallic/35">
                    {item.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif mt-2">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
