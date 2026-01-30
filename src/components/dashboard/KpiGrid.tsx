import React from 'react';
import { Users, DollarSign, Target, TrendingUp } from 'lucide-react';
import { KpiCard } from './KpiCard';
import { ANIMATION_DELAYS } from '../../data/constants';

export const KpiGrid: React.FC = () => {
  const kpis = [
    {
      title: 'Usuarios Activos',
      value: '2,245',
      subtitle: '↑ 245 desde ayer',
      icon: Users,
      trend: '+12.5%',
      delay: ANIMATION_DELAYS.card1,
    },
    {
      title: 'Ventas Totales',
      value: '$167.4K',
      subtitle: 'Este mes',
      icon: DollarSign,
      trend: '+18.3%',
      delay: ANIMATION_DELAYS.card2,
    },
    {
      title: 'Tasa Conversión',
      value: '68%',
      subtitle: 'Promedio mensual',
      icon: Target,
      trend: '+5.2%',
      delay: ANIMATION_DELAYS.card3,
    },
    {
      title: 'Crecimiento',
      value: '+24.8%',
      subtitle: 'vs. mes anterior',
      icon: TrendingUp,
      trend: '+3.1%',
      delay: ANIMATION_DELAYS.card4,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpis.map((kpi, index) => (
        <KpiCard key={index} {...kpi} />
      ))}
    </div>
  );
};
