import React, { useState } from 'react';
import { Star, Flame, Sparkles, Clock, Users, CheckCircle, MessageCircle } from 'lucide-react';

export default function ProductCard({ product }) {
  const [selectedWeight, setSelectedWeight] = useState('500g');

  // Calculate dynamic price based on selected weight
  const priceMultiplier = selectedWeight === '1kg' ? 1.9 : 1;
  const currentPrice = Math.round(product.price * priceMultiplier);
  const currentOriginalPrice = Math.round(product.originalPrice * priceMultiplier);
  const savings = currentOriginalPrice - currentPrice;

  /* =========================================================================
     CART SYSTEM & ADD TO CART (TEMPORARILY COMMENTED OUT AS REQUESTED)
  =========================================================================
  const itemKey = `${product.id}-${selectedWeight}`;
  const existingCartItem = cartItems?.find((item) => item.itemKey === itemKey);

  const handleAdd = () => {
    addToCart(product, selectedWeight);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1200);
  };
  ========================================================================= */

  const whatsappOrderUrl = `https://wa.me/919876543210?text=Hello%20MTON!%20I%20would%20like%20to%20order%20${encodeURIComponent(product.name)}%20(${selectedWeight}%20at%20₹${currentPrice}).`;

  return (
    <div className="gold-border-card rounded-2xl overflow-hidden flex flex-col group relative">
      {/* Badges Bar */}
      <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
        {product.badgeText ? (
          <span className="bg-gradient-to-r from-red-600 to-rose-700 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md shadow-md border border-red-400/30 flex items-center gap-1">
            <Flame className="w-3 h-3 fill-white" />
            {product.badgeText}
          </span>
        ) : <span />}

        <span className="bg-[#0b0d12]/85 backdrop-blur-md text-amber-300 border border-gold-metallic/40 font-mono text-xs font-bold px-2 py-0.5 rounded shadow">
          {product.discount}
        </span>
      </div>

      {/* Image Container with Zoom effect */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#151821]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent opacity-85" />

        {/* Freshness banner at bottom of image */}
        <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px]">
          <span className="text-gray-300 bg-black/60 backdrop-blur-sm px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {product.freshness}
          </span>
          <div className="flex items-center gap-1 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded border border-gold-metallic/30 text-amber-300 font-bold">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{product.rating}</span>
            <span className="text-gray-500 font-normal">({product.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Cut Type */}
          <div className="text-[11px] font-semibold text-amber-400/90 uppercase tracking-widest flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            {product.cutType}
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-gray-100 text-sm sm:text-base mt-1 line-clamp-1 group-hover:text-amber-300 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-400 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Specs / Meta */}
          <div className="flex items-center gap-3 mt-2.5 text-[11px] text-gray-400">
            <span className="bg-[#141720] border border-gray-800 px-2 py-0.5 rounded flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-500" />
              {product.pieces}
            </span>
            <span className="bg-[#141720] border border-gray-800 px-2 py-0.5 rounded flex items-center gap-1">
              <Users className="w-3 h-3 text-gray-500" />
              Serves {product.serves}
            </span>
          </div>
        </div>

        {/* Weight Selector Tabs */}
        <div>
          <div className="text-[11px] text-gray-400 mb-1.5 flex justify-between">
            <span>Select Portion:</span>
            <span className="text-amber-400 font-mono text-[10px]">Save ₹{savings}</span>
          </div>
          <div className="grid grid-cols-2 gap-2 p-1 bg-[#090b0e] border border-gold-dark/40 rounded-xl">
            <button
              type="button"
              onClick={() => setSelectedWeight('500g')}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                selectedWeight === '500g'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/30 text-amber-300 border border-gold-metallic/50 shadow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              500g (Standard)
            </button>
            <button
              type="button"
              onClick={() => setSelectedWeight('1kg')}
              className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all relative ${
                selectedWeight === '1kg'
                  ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/30 text-amber-300 border border-gold-metallic/50 shadow'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              1 KG (Family Pack)
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] px-1 rounded font-normal">
                Value
              </span>
            </button>
          </div>
        </div>

        {/* Pricing & Availability */}
        <div className="pt-3 border-t border-gold-dark/30 flex items-center justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-extrabold text-gold-bright font-mono">
                ₹{currentPrice}
              </span>
              <span className="text-xs text-gray-500 line-through font-mono">
                ₹{currentOriginalPrice}
              </span>
            </div>
            <div className="text-[10px] text-gray-400">
              Fresh Cut • Vacuum Chilled
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 bg-amber-500/10 border border-gold-metallic/30 text-amber-300 px-2.5 py-1.5 rounded-xl text-[11px] font-semibold">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              <span>Ready</span>
            </span>

            {/* Direct Order Link */}
            <a
              href={whatsappOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-3.5 py-2 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow"
            >
              <MessageCircle className="w-3.5 h-3.5 text-black" />
              <span>Order</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
