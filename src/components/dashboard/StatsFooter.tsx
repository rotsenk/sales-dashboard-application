import React from 'react';
import { footerStats } from '../../data/mockData';
import { useAnimations } from '../../hooks/useAnimations';
import { ANIMATION_DELAYS } from '../../data/constants';

export const StatsFooter: React.FC = () => {
  const isVisible = useAnimations(ANIMATION_DELAYS.footer);

  return (
    <div 
      className={`grid grid-cols-1 sm:grid-cols-3 gap-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${ANIMATION_DELAYS.footer}ms` }}
    >
      {footerStats.map((stat, index) => (
        <div 
          key={index}
          className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm"
        >
          <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">
            {stat.label}
          </p>
          <p className="text-2xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};
