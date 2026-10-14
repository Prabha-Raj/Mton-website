import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../../data/menuData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-24 bg-[#0a0c10] text-gray-200 border-b border-gold-dark/40 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest text-amber-400">
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Section 14 • Clarity & Assistance</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif">
            Frequently Asked <span className="text-gold-metallic">Questions.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Everything you need to know about MTON dining, menu, portions, and takeaway.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="gold-border-card rounded-2xl overflow-hidden transition-all shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#151822] transition-colors"
                >
                  <h3 className="text-base sm:text-lg font-bold text-white font-serif">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed font-light border-t border-gray-800/80">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
