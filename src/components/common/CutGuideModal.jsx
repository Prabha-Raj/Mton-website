import React from 'react';
import { X, BookOpen, Flame, Clock, Sparkles, ChefHat } from 'lucide-react';

export default function CutGuideModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const CUT_GUIDES = [
    {
      title: 'Curry Cut (Hand Trimmed)',
      bestFor: 'Slow-cooked Curries, Rogan Josh, Nihari',
      cookTime: '45 - 60 mins',
      fatContent: 'Medium (Juicy & Flavorful)',
      tip: 'The mix of bone-in and tender shoulder melts collagen into the gravy, creating a rich natural thick sauce.',
    },
    {
      title: 'Royal Dum Biryani Cut',
      bestFor: 'Hyderabadi & Awadhi Dum Biryani',
      cookTime: '50 - 70 mins',
      fatContent: 'Balanced Marbled',
      tip: 'Cut in large generous pieces so that the meat stays juicy, tender, and fragrant inside the sealed dough pot.',
    },
    {
      title: 'French Trimmed Lamb Chops',
      bestFor: 'Pan-seared, Tandoor & Charcoal Grill',
      cookTime: '6 - 8 mins (Medium)',
      fatContent: 'High Marbling',
      tip: 'Sear over high heat with butter, garlic, and fresh rosemary. Rest for 5 mins before serving to lock juices in.',
    },
    {
      title: 'Artisanal Goat Keema (Mince)',
      bestFor: 'Kebabs, Keema Matar, Samosas, Koftas',
      cookTime: '20 - 25 mins',
      fatContent: '15% Fat (Juicy Bind)',
      tip: 'Double minced on clean order. The ideal fat-to-meat ratio ensures kebabs bind tightly and stay soft.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-[#0d0f15] border border-gold-metallic/40 rounded-2xl max-w-2xl w-full p-6 shadow-2xl z-10 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gold-dark/30">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-gold-500/30 text-amber-400">
              <ChefHat className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>MTON Master Butcher's Guide</span>
                <span className="text-[10px] bg-red-600 text-white px-2 py-0.5 rounded uppercase font-mono">
                  Pro Tips
                </span>
              </h3>
              <p className="text-xs text-amber-300/80">
                How to select and cook each cut to gourmet perfection
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cut Items */}
        <div className="space-y-4 my-5">
          {CUT_GUIDES.map((guide, idx) => (
            <div
              key={idx}
              className="bg-[#131620] border border-gold-dark/30 rounded-xl p-4 hover:border-gold-500/40 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
                  <Flame className="w-4 h-4 text-rose-500" />
                  {guide.title}
                </h4>
                <div className="flex items-center gap-2 text-[11px] text-gray-400">
                  <span className="flex items-center gap-1 bg-black/50 px-2 py-0.5 rounded border border-gray-800">
                    <Clock className="w-3 h-3 text-amber-400" />
                    {guide.cookTime}
                  </span>
                  <span className="bg-black/50 px-2 py-0.5 rounded border border-gray-800 text-gray-300 font-mono">
                    {guide.fatContent}
                  </span>
                </div>
              </div>

              <div className="mt-2 text-xs text-gray-300">
                <strong className="text-gray-400">Best For:</strong> {guide.bestFor}
              </div>

              <p className="mt-2 text-xs text-gray-400 bg-[#0a0b0e] p-2.5 rounded-lg border border-gold-500/10 italic">
                💡 <span className="text-gray-300 font-medium">Chef's Secret:</span> {guide.tip}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gold-dark/30 flex justify-end">
          <button
            onClick={onClose}
            className="btn-gold px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Got It, Back To Shop
          </button>
        </div>
      </div>
    </div>
  );
}
