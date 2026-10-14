import React from 'react';
import { ShieldCheck, ThermometerSnowflake, Clock, Sparkles, Award } from 'lucide-react';

const ICONS = {
  ShieldCheck,
  ThermometerSnowflake,
  Clock,
  Sparkles,
  Award,
};

export default function FeatureCard({ feature }) {
  const IconComponent = ICONS[feature.icon] || Sparkles;

  return (
    <div className="bg-gradient-to-b from-[#13161f] to-[#0a0b0e] border border-gold-dark/30 hover:border-gold-500/50 p-6 rounded-2xl flex flex-col justify-between transition-all group hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(212,175,55,0.15)]">
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-gold-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-transform">
          <IconComponent className="w-6 h-6 stroke-[1.8]" />
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500">
            {feature.subtitle}
          </span>
          <h4 className="text-base font-bold text-gray-100 mt-0.5 group-hover:text-amber-300 transition-colors">
            {feature.title}
          </h4>
          <p className="text-xs text-gray-400 mt-2 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-gray-800/80 flex items-center gap-1.5 text-[11px] text-amber-400/90 font-medium">
        <span>Verified MTON Standard</span>
        <span className="text-gray-600">•</span>
        <span className="text-gray-400">Lab Tested</span>
      </div>
    </div>
  );
}
