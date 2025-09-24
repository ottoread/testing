import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { BarChart3, Clock } from 'lucide-react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { MacroPage } from './pages/MacroPage';
import { MicroPage } from './pages/MicroPage';
import { useEconomicData } from './hooks/useEconomicData';

function App() {
  const { lastUpdate } = useEconomicData();

  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-950/20 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 py-8">
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

          <Navigation />

          <Routes>
            <Route path="/" element={<Navigate to="/macro" replace />} />
            <Route path="/macro" element={<MacroPage />} />
            <Route path="/micro" element={<MicroPage />} />
          </Routes>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-purple-500/20">
            <div className="text-center text-gray-400">
              <p className="mb-2">Data sources: ONS, Bank of England, HMRC, DfE</p>
              <p className="text-sm">Economic data updates every 5 minutes • Built with React & TypeScript</p>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
}

export default App;