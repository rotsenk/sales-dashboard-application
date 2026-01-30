import React from 'react';
import { Layout } from './components/layout/Layout';
import { Header } from './components/layout/Header';
import { KpiGrid } from './components/dashboard/KpiGrid';
import { FilterBar } from './components/dashboard/FilterBar';
import { StatsFooter } from './components/dashboard/StatsFooter';
import { SalesLineChart } from './components/charts/SalesLineChart';
import { ConversionPieChart } from './components/charts/ConversionPieChart';
import { RegionBarChart } from './components/charts/RegionBarChart';
import { useDateFilter } from './hooks/useDateFilter';

const App: React.FC = () => {
  const { dateRange, setDateRange } = useDateFilter('6m');

  return (
    <Layout>
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* KPI Cards */}
        <KpiGrid />

        {/* Date Filters */}
        <FilterBar selectedRange={dateRange} onRangeChange={setDateRange} />

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SalesLineChart />
          <ConversionPieChart />
        </div>

        {/* Region Chart */}
        <RegionBarChart />

        {/* Footer Stats */}
        <StatsFooter />
      </main>
    </Layout>
  );
};

export default App;
