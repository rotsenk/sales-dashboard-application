import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartContainer } from './ChartContainer';
import { CustomTooltip } from './CustomTooltip';
import { monthlyData } from '../../data/mockData';
import { ANIMATION_DELAYS } from '../../data/constants';

export const SalesLineChart: React.FC = () => {
  return (
    <ChartContainer
      title="Tendencia de Ventas"
      subtitle="Evolución mensual de ingresos"
      delay={ANIMATION_DELAYS.chart1}
      className="lg:col-span-2"
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={monthlyData}>
          <defs>
            <linearGradient id="colorVentas" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
          <XAxis dataKey="month" stroke="#94a3b8" style={{ fontSize: '12px' }} />
          <YAxis stroke="#94a3b8" style={{ fontSize: '12px' }} />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="ventas" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            fill="url(#colorVentas)"
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};