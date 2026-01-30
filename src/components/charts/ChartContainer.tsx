import React from 'react';
import { useAnimations } from '../../hooks/useAnimations';

interface ChartContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ 
  title, 
  subtitle, 
  children,
  icon,
  delay = 0,
  className = ''
}) => {
  const isVisible = useAnimations(delay);

  return (
    <div 
      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{title}</h2>
          <p className="text-slate-400 text-sm">{subtitle}</p>
        </div>
        {icon && <div>{icon}</div>}
      </div>
      {children}
    </div>
  );
};
