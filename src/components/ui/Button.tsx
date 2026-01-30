import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  active?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'secondary',
  active = false,
  className = '' 
}) => {
  const baseStyles = 'px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300';
  
  const variantStyles = {
    primary: active
      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700',
    secondary: 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
