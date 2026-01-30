import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-x-hidden">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};
