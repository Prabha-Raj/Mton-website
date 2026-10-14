import React, { useState, useMemo } from 'react';
import { Flame, Sparkles, Search, X } from 'lucide-react';
import ProductCard from '../common/ProductCard';
import CategoryCard from '../common/CategoryCard';
import { CATEGORIES, PRODUCTS } from '../../data/products';

export default function FreshCutsSection({ searchQuery, setSearchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    const rawQuery = (searchQuery || '').trim().toLowerCase();
    const queryTokens = rawQuery.split(/\s+/).filter(Boolean);

    return PRODUCTS.filter((item) => {
      // Category Match
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;

      if (!rawQuery) {
        return matchesCategory;
      }

      // Smart Search Match (checks name, description, cutType, cookingNote, keywords)
      const searchableText = [
        item.name,
        item.description,
        item.cutType,
        item.cookingNote || '',
        item.category,
        ...(item.keywords || []),
      ]
        .join(' ')
        .toLowerCase();

      // Check if full query matches, or if any meaningful token (>= 3 chars) matches
      const matchesSearch =
        searchableText.includes(rawQuery) ||
        queryTokens.some((token) => token.length >= 3 && searchableText.includes(token));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="cuts-section" className="py-20 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gold-dark/40">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 mb-1">
            <Flame className="w-4 h-4 text-rose-500" />
            <span>Master Butchery Cuts</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif">
            Fresh Artisanal <span className="text-gold-metallic">MTON™ Cuts</span>
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-xl font-light">
            Every cut is hand-carved to precise culinary standards. Select between 500g and 1kg portion sizes with instant price calculation.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
          {searchQuery && (
            <div className="text-xs bg-amber-500/15 border border-gold-metallic/40 text-amber-300 px-3 py-1.5 rounded-xl flex items-center gap-2">
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Search: <strong>"{searchQuery}"</strong></span>
              <button
                type="button"
                onClick={() => setSearchQuery && setSearchQuery('')}
                className="hover:text-white p-0.5 ml-1 text-gray-400"
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          <div className="text-xs text-gray-400 bg-[#12151e] border border-gold-dark/40 px-3.5 py-2 rounded-xl flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Showing <strong className="text-white">{filteredProducts.length}</strong> Fresh Cuts</span>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-8">
        {CATEGORIES.map((cat) => (
          <CategoryCard
            key={cat.id}
            category={cat}
            isActive={selectedCategory === cat.id}
            onClick={() => setSelectedCategory(cat.id)}
          />
        ))}
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-[#0f1117] border border-gold-dark/40 rounded-3xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-gold-metallic/30 flex items-center justify-center mx-auto text-amber-400">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white font-serif">No cuts match "{searchQuery}"</h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
            Try resetting your category or search term to browse all our fresh young mutton cuts.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => {
                setSelectedCategory('all');
                if (setSearchQuery) setSearchQuery('');
              }}
              className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Reset Filters
            </button>
            <a
              href="#menu-section"
              className="bg-[#181b24] hover:bg-[#202534] border border-gold-metallic/30 text-amber-300 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Check Cooked Menu
            </a>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
