import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TrendingUp, Building2 } from 'lucide-react';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="mb-8">
      <div className="flex items-center justify-center space-x-1 bg-gradient-to-r from-gray-900/60 to-purple-900/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-2">
        <Link
          to="/macro"
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
            isActive('/macro') || location.pathname === '/'
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span className="font-semibold">Macroeconomics</span>
        </Link>
        <Link
          to="/micro"
          className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
            isActive('/micro')
              ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg'
              : 'text-gray-300 hover:text-white hover:bg-purple-600/20'
          }`}
        >
          <Building2 className="w-5 h-5" />
          <span className="font-semibold">Microeconomics</span>
        </Link>
      </div>
    </nav>
  );
};