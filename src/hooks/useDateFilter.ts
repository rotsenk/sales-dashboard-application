import { useState } from 'react';
import { DateRange } from '../types/dashboard.types';

// Hook to manage date range filter state
export const useDateFilter = (initialRange: DateRange = '6m') => {
  const [dateRange, setDateRange] = useState<DateRange>(initialRange);

  const handleRangeChange = (range: DateRange) => {
    setDateRange(range);
    console.log(`Date range changed to: ${range}`);
  };

  return {
    dateRange,
    setDateRange: handleRangeChange,
  };
};
