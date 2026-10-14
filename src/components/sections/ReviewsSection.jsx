import React from 'react';
import { Star, Quote, MessageSquarePlus, ExternalLink } from 'lucide-react';
import { REVIEWS } from '../../data/menuData';

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-[#07080a] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Section 13 • Community Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Good Food Is Better <br />
            <span className="text-gold-metallic">When It's Shared.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Tried MTON? Share your experience with your favourite dish and help other mutton lovers discover their next meal.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="gold-border-card p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-400/30 mb-3" />

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic font-light">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-gray-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">{review.name}</h4>
                  <p className="text-[11px] text-amber-400">{review.role}</p>
                </div>
                <span className="text-[10px] text-amber-300 bg-black/60 px-2.5 py-1 rounded-md border border-gold-metallic/25">
                  Ordered: {review.dish}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-lg"
          >
            <span>Read Customer Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12151e] hover:bg-[#1a1e2a] text-white border border-gold-metallic/40 px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors shadow"
          >
            <MessageSquarePlus className="w-4 h-4 text-amber-400" />
            <span>Leave a Review</span>
          </a>
        </div>
      </div>
    </section>
  );
}
