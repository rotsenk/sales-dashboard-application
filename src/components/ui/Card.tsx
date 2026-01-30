import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  animate = false,
  delay = 0 
}) => {
  const animationClass = animate 
    ? 'opacity-0 translate-y-4 animate-fade-in' 
    : '';

  return (
    <div 
      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm ${animationClass} ${className}`}
      style={animate ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};
