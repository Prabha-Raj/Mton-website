import React from 'react';
import { Flame, Utensils, Crown, Sparkles, ChefHat, Award } from 'lucide-react';

const ICON_MAP = {
  Flame: Flame,
  Utensils: Utensils,
  Crown: Crown,
  Sparkles: Sparkles,
  ChefHat: ChefHat,
  Award: Award,
};

export default function CategoryCard({ category, isActive, onClick }) {
  const IconComponent = ICON_MAP[category.icon] || Flame;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 border whitespace-nowrap cursor-pointer select-none ${
        isActive
          ? 'bg-gradient-to-r from-amber-500/20 via-amber-600/30 to-amber-500/20 text-amber-300 border-gold-metallic shadow-[0_0_15px_rgba(212,175,55,0.25)] scale-105'
          : 'bg-[#12151d] text-gray-400 border-gold-dark/40 hover:text-white hover:border-gold-500/40 hover:bg-[#181c26]'
      }`}
    >
      <IconComponent
        className={`w-4 h-4 ${
          isActive ? 'text-amber-400' : 'text-gray-500 group-hover:text-amber-400'
        }`}
      />
      <span>{category.name}</span>
      <span
        className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
          isActive
            ? 'bg-amber-400/20 text-amber-300'
            : 'bg-gray-800 text-gray-500'
        }`}
      >
        {category.count}
      </span>
    </button>
  );
}
