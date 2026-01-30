import React from 'react';
import { Button } from '../ui/Button';
import { DateRange } from '../../types/dashboard.types';
import { DATE_RANGE_OPTIONS } from '../../data/constants';
import { useAnimations } from '../../hooks/useAnimations';
import { ANIMATION_DELAYS } from '../../data/constants';

interface FilterBarProps {
  selectedRange: DateRange;
  onRangeChange: (range: DateRange) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ selectedRange, onRangeChange }) => {
  const isVisible = useAnimations(ANIMATION_DELAYS.filters);

  return (
    <div 
      className={`flex items-center gap-3 flex-wrap transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${ANIMATION_DELAYS.filters}ms` }}
    >
      <span className="text-slate-400 text-sm font-medium">Rango:</span>
      {DATE_RANGE_OPTIONS.map((option) => (
        <Button
          key={option.value}
          variant="primary"
          active={selectedRange === option.value}
          onClick={() => onRangeChange(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};
