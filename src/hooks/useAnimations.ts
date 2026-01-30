import { useState, useEffect } from 'react';

/**
 * Hook to handle staggered entrance animations
 */
export const useAnimations = (delay: number = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};
