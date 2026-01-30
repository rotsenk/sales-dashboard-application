import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { MapPin } from 'lucide-react';
import { ChartContainer } from './ChartContainer';
import { CustomTooltip } from './CustomTooltip';
import { regionData } from '../../data/mockData';
import { ANIMATION_DELAYS } from '../../data/constants';

export const RegionBarChart: React.FC = () => {
  return (
    <ChartContainer
      title="Ventas por Región"
      subtitle="Distribución geográfica de ingresos"
      icon={<MapPin className="w-6 h-6 text-emerald-400" />}
      delay={ANIMATION_DELAYS.chart3}
    >
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={regionData}>
          <defs>
            <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity={1}/>
              <stop offset="100%" stopColor="#14b8a6" stopOpacity={0.7}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
          <XAxis dataKey="region" stroke="#bdc4cf" style={{ fontSize: '12px' }} />
          <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="ventas" 
            fill="url(#colorBar)" 
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};