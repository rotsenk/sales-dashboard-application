import React from 'react';
import { TrendingUp, LucideIcon } from 'lucide-react';
import { useAnimations } from '../../hooks/useAnimations';

interface KpiCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: string;
  delay?: number;
}

export const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  delay = 0 
}) => {
  const isVisible = useAnimations(delay);

  return (
    <div 
      className={`bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-500/30">
          <Icon className="w-6 h-6 text-emerald-400" />
        </div>
        {trend && (
          <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            {trend}
          </div>
        )}
      </div>
      <div className="space-y-1">
        <p className="text-slate-400 text-sm font-medium tracking-wide uppercase">{title}</p>
        <p className="text-4xl font-bold text-white tracking-tight">{value}</p>
        {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
      </div>
    </div>
  );
};
