import { useEffect, useRef } from 'react';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  ArcElement,
  RadialLinearScale,
  Tooltip, 
  Legend,
  ChartOptions,
  ChartData
} from 'chart.js';
import { Line, Bar, Pie, PolarArea } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  ArcElement,
  RadialLinearScale,
  Tooltip, 
  Legend
);

type ChartType = 'line' | 'bar' | 'pie' | 'polarArea';

interface ProjectChartProps {
  type: ChartType;
  data: ChartData<any>;
  options?: ChartOptions<any>;
  title?: string;
  description?: string;
}

const ProjectChart = ({ 
  type, 
  data, 
  options = {}, 
  title,
  description 
}: ProjectChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Default chart options
  const defaultOptions: ChartOptions<any> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        backgroundColor: 'rgba(44, 116, 179, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        bodySpacing: 4,
        padding: 12,
        boxPadding: 3,
        usePointStyle: true,
      },
    },
    scales: type !== 'pie' && type !== 'polarArea' ? {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        beginAtZero: true,
      },
    } : undefined,
    animation: {
      duration: 2000,
      easing: 'easeOutQuart',
    },
  };

  // Merge default options with passed options
  const mergedOptions = { ...defaultOptions, ...options };

  // Render appropriate chart based on type
  const renderChart = () => {
    switch (type) {
      case 'line':
        return <Line data={data} options={mergedOptions} />;
      case 'bar':
        return <Bar data={data} options={mergedOptions} />;
      case 'pie':
        return <Pie data={data} options={mergedOptions} />;
      case 'polarArea':
        return <PolarArea data={data} options={mergedOptions} />;
      default:
        return <Line data={data} options={mergedOptions} />;
    }
  };

  return (
    <div ref={chartRef} className="bg-white p-4 rounded-lg shadow-md mb-8">
      {title && <h3 className="text-lg font-heading font-semibold text-primary-700 mb-2">{title}</h3>}
      {description && <p className="text-neutral-600 mb-4 text-sm">{description}</p>}
      <div className="p-2">
        {renderChart()}
      </div>
    </div>
  );
};

export default ProjectChart;