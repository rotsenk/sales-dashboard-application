import { MonthlyData, RegionData, ConversionData, StatData } from '../types/dashboard.types';

export const monthlyData: MonthlyData[] = [
  { month: 'Ene', ventas: 12400, usuarios: 890 },
  { month: 'Feb', ventas: 15200, usuarios: 1100 },
  { month: 'Mar', ventas: 18900, usuarios: 1450 },
  { month: 'Abr', ventas: 16300, usuarios: 1280 },
  { month: 'May', ventas: 22100, usuarios: 1820 },
  { month: 'Jun', ventas: 24800, usuarios: 2010 },
  { month: 'Jul', ventas: 21500, usuarios: 1890 },
  { month: 'Ago', ventas: 26400, usuarios: 2240 },
];

export const regionData: RegionData[] = [
  { region: 'América', ventas: 45600 },
  { region: 'Europa', ventas: 38200 },
  { region: 'Asia', ventas: 52300 },
  { region: 'África', ventas: 18900 },
  { region: 'Oceanía', ventas: 12400 },
];

export const conversionData: ConversionData[] = [
  { name: 'Convertidos', value: 68, color: '#10b981' },
  { name: 'Abandonados', value: 32, color: '#ef4444' },
];

export const footerStats: StatData[] = [
  { label: 'Ticket Promedio', value: '$74.68' },
  { label: 'Nuevos Clientes', value: '1,456' },
  { label: 'Retención', value: '89.2%' },
];
