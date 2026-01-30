import React from 'react';
import { Calendar } from 'lucide-react';
import { useAnimations } from '../../hooks/useAnimations';

export const Header: React.FC = () => {
  const isVisible = useAnimations(0);

  return (
    <header 
      className={`border-b border-slate-800/50 backdrop-blur-xl bg-slate-900/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sales Insights Dashboard
              </h1>
              <p className="text-slate-400 text-sm mt-1">Panel de métricas</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-xl border border-slate-700">
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">Enero 2025</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
