import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChartContainer } from './ChartContainer';
import { CustomTooltip } from './CustomTooltip';
import { conversionData } from '../../data/mockData';
import { ANIMATION_DELAYS } from '../../data/constants';

export const ConversionPieChart: React.FC = () => {
  return (
    <ChartContainer
      title="Conversión"
      subtitle="Ratio de éxito"
      delay={ANIMATION_DELAYS.chart2}
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={conversionData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {conversionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center gap-6 mt-4">
        {conversionData.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
            <span className="text-sm text-slate-300">{entry.name}: {entry.value}%</span>
          </div>
        ))}
      </div>
    </ChartContainer>
  );
};