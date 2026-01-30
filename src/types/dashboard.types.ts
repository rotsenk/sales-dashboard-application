export interface KpiData {
  title: string;
  value: string;
  subtitle?: string;
  icon: React.ComponentType<{ className?: string }>;
  trend?: string;
}

export interface MonthlyData {
  month: string;
  ventas: number;
  usuarios: number;
}

export interface RegionData {
  region: string;
  ventas: number;
}

export interface ConversionData {
  name: string;
  value: number;
  color: string;
}

export interface StatData {
  label: string;
  value: string;
}

export type DateRange = '1m' | '3m' | '6m' | '1y';

export interface FilterOption {
  value: DateRange;
  label: string;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}
