import React, { useState, useMemo } from 'react';
import { MessageCircle, Flame, Sparkles, Search, X } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS } from '../../data/menuData';

export default function MenuSection({ searchQuery, setSearchQuery }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = useMemo(() => {
    const rawQuery = (searchQuery || '').trim().toLowerCase();
    const queryTokens = rawQuery.split(/\s+/).filter(Boolean);

    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;

      if (!rawQuery) {
        return matchesCategory;
      }

      const searchableText = [
        item.name,
        item.description,
        item.recommended || '',
        item.portions,
        item.category,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch =
        searchableText.includes(rawQuery) ||
        queryTokens.some((token) => token.length >= 3 && searchableText.includes(token));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="menu-section" className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Section 06 • Full Menu Discovery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
              A Closer Look at <br />
              <span className="text-gold-metallic">The MTON Menu.</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-xl font-light">
              Find Your Kind of Craving. Prepared fresh with pasture-raised mutton and whole fragrant spices.
            </p>
          </div>

          {/* Direct Ordering Notice */}
          <div className="bg-[#12151e] border border-gold-metallic/30 p-3.5 rounded-2xl flex items-center gap-3">
            <div className="p-2 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-400">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <div className="text-white font-bold">Fast Ordering Channel</div>
              <div className="text-gray-400">Click any dish to order directly on WhatsApp</div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-none mb-10">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${activeCategory === cat.id
                  ? 'btn-gold shadow-md'
                  : 'bg-[#12151e] text-gray-400 border border-gray-800 hover:text-white hover:border-gold-metallic/40'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#0f1117] border border-gold-dark/40 rounded-3xl p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-gold-metallic/30 flex items-center justify-center mx-auto text-amber-400">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white font-serif">No cooked dishes match "{searchQuery}"</h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
              Try resetting your category or search term to see all our kitchen specialties.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((dish) => (
              <div
                key={dish.id}
                className="gold-border-card rounded-3xl overflow-hidden flex flex-col justify-between group shadow-xl"
              >
                {/* Dish Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#151821]">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e1017] via-transparent to-transparent opacity-85" />

                  <div className="absolute top-3 left-3">
                    <span className="bg-rose-950/90 border border-rose-500/40 text-rose-300 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md">
                      {dish.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-gray-300">
                    <span className="bg-black/60 px-2.5 py-0.5 rounded border border-white/10 font-mono">
                      {dish.portions}
                    </span>
                  </div>
                </div>

                {/* Dish Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {dish.name}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 leading-relaxed font-light">
                      {dish.description}
                    </p>

                    <div className="mt-3 text-[11px] text-amber-300/90 italic bg-black/40 p-2.5 rounded-lg border border-gold-metallic/20">
                      💡 {dish.recommended}
                    </div>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-4 border-t border-gray-800/80 flex items-center justify-between gap-2">
                    <div>
                      <div className="text-lg font-extrabold text-gold-bright font-mono">
                        {dish.price}
                      </div>
                      <div className="text-[10px] text-gray-400">
                        Full Pot: {dish.fullPrice}
                      </div>
                    </div>

                    {/* WhatsApp Order Button */}
                    <a
                      href={`https://wa.me/919876543210?text=Hi%20MTON!%20I%20would%20like%20to%20order%20${encodeURIComponent(dish.name)}%20(${encodeURIComponent(dish.portions)}).`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-black" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
