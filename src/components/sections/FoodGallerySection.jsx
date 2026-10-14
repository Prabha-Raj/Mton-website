import React, { useState } from 'react';
import { Eye, X, ZoomIn, Sparkles } from 'lucide-react';
import { FOOD_GALLERY } from '../../data/menuData';

export default function FoodGallerySection() {
  const [activeImage, setActiveImage] = useState(null);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[230px]">
          {FOOD_GALLERY.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(item)}
              className={`relative rounded-3xl overflow-hidden border border-gold-metallic/30 hover:border-gold-metallic/80 group shadow-xl cursor-pointer transition-all duration-300 hover:shadow-[0_10px_30px_rgba(212,175,55,0.2)] ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Hover Zoom Icon Badge */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-gold-metallic/40 flex items-center justify-center text-amber-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] uppercase font-bold text-amber-300 tracking-wider bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gold-metallic/35 inline-block mb-2">
                  {item.tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-serif leading-tight">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs text-gray-300/90 font-light mt-1 line-clamp-1 group-hover:text-amber-200/90 transition-colors">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0e1017] border border-gold-metallic/50 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 border border-gold-metallic/40 flex items-center justify-center text-gray-300 hover:text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-cover max-h-[70vh]"
              />
            </div>
            <div className="p-6 bg-[#0f1118] border-t border-gold-dark/40 flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  {activeImage.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mt-1">
                  {activeImage.title}
                </h3>
                {activeImage.subtitle && (
                  <p className="text-sm text-gray-400 mt-1">
                    {activeImage.subtitle}
                  </p>
                )}
              </div>
              <a
                href="#menu-section"
                onClick={() => setActiveImage(null)}
                className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 ml-4"
              >
                Order This Dish
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
