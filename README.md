# Sales Insights Dashboard

Un panel interactivo moderno que muestra métricas de ventas ficticias con visualizaciones de datos profesionales.

## Características

- **Dashboard Interactivo**: Métricas en tiempo real con KPIs destacados
- **Visualizaciones de Datos**: Gráficas de línea, barras y donut charts
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Fluidas**: Efectos de entrada escalonados y microinteracciones
- **Arquitectura Limpia**: Componentes modulares y reutilizables
- **TypeScript**: Type-safe para mejor mantenibilidad

## Tecnologías

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Recharts** - Data Visualization
- **Lucide React** - Icons

## Estructura del Proyecto

```
src/
  components/
    layout/       # Layout components (Header, Layout)
    dashboard/    # Dashboard components (KPI cards, filters)
    charts/       # Chart components (Line, Bar, Pie)
    ui/           # Reusable UI components (Button, Card)

  data/           # Mock data and constants

  hooks/          # Custom React hooks

  types/          # TypeScript type definitions

  utils/          # Utility functions

```

## Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para Producción

```bash
npm run build
```

### Preview de Producción

```bash
npm run preview
```

## Componentes Principales

### Layout
- `Layout.tsx` - Wrapper principal con efectos de fondo animados
- `Header.tsx` - Header con branding y selector de fecha

### Dashboard
- `KpiCard.tsx` - Card individual para métricas
- `KpiGrid.tsx` - Grid de 4 KPIs principales
- `FilterBar.tsx` - Barra de filtros de rango de fechas
- `StatsFooter.tsx` - Estadísticas adicionales

### Charts
- `SalesLineChart.tsx` - Tendencia de ventas mensuales
- `RegionBarChart.tsx` - Ventas por región geográfica
- `ConversionPieChart.tsx` - Ratio de conversión
- `ChartContainer.tsx` - Wrapper reutilizable para charts
- `CustomTooltip.tsx` - Tooltip personalizado

### UI Components
- `Button.tsx` - Botón con variantes
- `Card.tsx` - Card base con glassmorphism

## Características de Diseño

- **Glassmorphism** - Efectos de vidrio esmerilado con backdrop blur
- **Gradientes Dinámicos** - Combinación de emerald y teal
- **Animaciones Escalonadas** - Entrada progresiva de elementos
- **Hover Effects** - Microinteracciones en cards y botones
- **Dark Theme** - Paleta de colores oscuros profesional

## Licencia

MIT

## Autor

Nestor Rivas, desarrollado como proyecto personal para portfolio uwu
