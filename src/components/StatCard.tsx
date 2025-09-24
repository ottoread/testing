import React from 'react';
import { TrendingUp, TrendingDown, Minus, RefreshCw } from 'lucide-react';
import { EconomicStat } from '../types';

interface StatCardProps {
  stat: EconomicStat;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, icon }) => {
  const getTrendIcon = () => {
    if (stat.loading) return <RefreshCw className="w-4 h-4 animate-spin text-purple-400" />;
    
    switch (stat.changeType) {
      case 'positive':
        return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'negative':
        return <TrendingDown className="w-4 h-4 text-red-400" />;
      default:
        return <Minus className="w-4 h-4 text-gray-400" />;
    }
  };

  const getChangeColor = () => {
    switch (stat.changeType) {
      case 'positive':
        return 'text-green-400';
      case 'negative':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  if (stat.error) {
    return (
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold text-lg">{stat.title}</h3>
          {icon && <div className="text-red-400">{icon}</div>}
        </div>
        <p className="text-red-400 text-sm">Failed to load data</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-purple-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 hover:border-purple-400/30 group">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-lg group-hover:text-purple-200 transition-colors">
          {stat.title}
        </h3>
        {icon && <div className="text-purple-400 group-hover:text-purple-300 transition-colors">{icon}</div>}
      </div>
      
      <div className="mb-3">
        <span className="text-xs text-purple-300/70 bg-purple-900/30 px-2 py-1 rounded-full">
          {stat.type}
        </span>
      </div>
      
      <div className="mb-3">
        {stat.loading ? (
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-16"></div>
          </div>
        ) : (
          <>
            <div className="text-3xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors">
              {stat.value}
              {stat.unit && <span className="text-lg ml-1 text-purple-300">{stat.unit}</span>}
            </div>
            
            {stat.change && (
              <div className={`flex items-center space-x-1 ${getChangeColor()}`}>
                {getTrendIcon()}
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            )}
          </>
        )}
      </div>
      
      {stat.lastUpdated && !stat.loading && (
        <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
          Updated: {new Date(stat.lastUpdated).toLocaleDateString()}
        </div>
      )}
    </div>
  );
};