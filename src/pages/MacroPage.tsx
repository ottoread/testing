import React from 'react';
import { 
  TrendingUp, 
  Users, 
  UserX, 
  PieChart, 
  CreditCard, 
  Percent, 
  DollarSign,
  ArrowUpDown,
  Scale,
  GraduationCap,
  Building,
  Calculator,
  Receipt,
  Shield
} from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { useEconomicData } from '../hooks/useEconomicData';

export const MacroPage: React.FC = () => {
  const { stats, loading, error, refreshData } = useEconomicData();

  const macroStats = stats.filter(stat => stat.category === 'macro');

  const getIconForStat = (title: string) => {
    switch (title) {
      case 'GDP Growth': return <TrendingUp className="w-6 h-6" />;
      case 'Unemployment Rate': return <Users className="w-6 h-6" />;
      case 'Economic Inactivity': return <UserX className="w-6 h-6" />;
      case 'Inflation (CPI)': return <PieChart className="w-6 h-6" />;
      case 'Government Debt': return <CreditCard className="w-6 h-6" />;
      case 'Corporation Tax': return <Calculator className="w-6 h-6" />;
      case 'Income Tax': return <Receipt className="w-6 h-6" />;
      case 'National Insurance': return <Shield className="w-6 h-6" />;
      case 'Bank Interest Rate': return <Percent className="w-6 h-6" />;
      case 'QT Asset Holdings': return <Building className="w-6 h-6" />;
      case 'Education Spending': return <GraduationCap className="w-6 h-6" />;
      case 'Infrastructure Spending': return <Building className="w-6 h-6" />;
      case 'Balance of Payments': return <Scale className="w-6 h-6" />;
      case 'Exchange Rate': return <DollarSign className="w-6 h-6" />;
      case 'Trade Balance': return <ArrowUpDown className="w-6 h-6" />;
      default: return <TrendingUp className="w-6 h-6" />;
    }
  };

  if (loading && macroStats.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Macroeconomic Indicators</h2>
        <p className="text-gray-400">National-level economic statistics and policy measures</p>
      </div>

      {error && (
        <div className="mb-8 p-4 bg-red-900/50 border border-red-500/50 rounded-xl">
          <p className="text-red-200">{error}</p>
          <button 
            onClick={refreshData}
            className="mt-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {macroStats.map((stat, index) => (
          <div
            key={stat.title}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <StatCard 
              stat={stat} 
              icon={getIconForStat(stat.title)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};