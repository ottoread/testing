import React from 'react';
import { BarChart3, Clock } from 'lucide-react';

interface HeaderProps {
  lastUpdate: Date;
}

export const Header: React.FC<HeaderProps> = ({ lastUpdate }) => {
  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              UK Economic Dashboard
            </h1>
            <p className="text-gray-400 mt-1">Real-time economic indicators and statistics</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">
            Last updated: {lastUpdate.toLocaleTimeString()}
          </span>
        </div>
      </div>
    </header>
  );
};