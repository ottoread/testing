import { useState, useEffect, useCallback } from 'react';
import { EconomicStat } from '../types';
import { EconomicDataService } from '../services/apiService';

export const useEconomicData = () => {
  const [stats, setStats] = useState<EconomicStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [error, setError] = useState<string | null>(null);

  const apiService = EconomicDataService.getInstance();

  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const [
        gdpData,
        unemploymentData,
        inactivityData,
        inflationData,
        debtData,
        interestRatesData,
        exchangeRatesData,
        tradeData,
        balanceData,
        educationData,
        qtData
      ] = await Promise.all([
        apiService.getGDPGrowth(),
        apiService.getUnemploymentRate(),
        apiService.getEconomicInactivity(),
        apiService.getInflationRate(),
        apiService.getGovernmentDebt(),
        apiService.getInterestRates(),
        apiService.getExchangeRates(),
        apiService.getTradeData(),
        apiService.getBalanceOfPayments(),
        apiService.getEducationSpending(),
        apiService.getQuantitativeTightening()
      ]);

      const newStats: EconomicStat[] = [
        { title: 'GDP Growth', type: 'Economic growth / National output', category: 'macro', ...gdpData },
        { title: 'Unemployment Rate', type: 'Labour market / Employment', category: 'macro', ...unemploymentData },
        { title: 'Economic Inactivity', type: 'Labour market / Employment', category: 'macro', ...inactivityData },
        { title: 'Inflation (CPI)', type: 'Price stability / Inflation', category: 'macro', ...inflationData },
        { title: 'Government Debt', type: 'Fiscal policy / Public finance', category: 'macro', ...debtData },
        { title: 'Bank Interest Rate', type: 'Monetary policy', category: 'macro', ...interestRatesData },
        { title: 'Exchange Rate', type: 'External sector / Monetary / FX', category: 'macro', ...exchangeRatesData },
        { title: 'Trade Balance', type: 'Trade / International economics', category: 'macro', ...tradeData },
        { title: 'Balance of Payments', type: 'External sector / International accounts', category: 'macro', ...balanceData },
        { title: 'Education Spending', type: 'Supply-side policy / Human capital', category: 'macro', ...educationData },
        { title: 'QT Asset Holdings', type: 'Monetary policy', category: 'macro', ...qtData }
      ];

      setStats(newStats);
      setLastUpdate(new Date());
    } catch (err) {
      setError('Failed to fetch economic data');
      console.error('Data fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [apiService]);

  useEffect(() => {
    fetchAllData();

    // Set up auto-refresh every 5 minutes
    const interval = setInterval(fetchAllData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [fetchAllData]);

  const refreshData = useCallback(() => {
    fetchAllData();
  }, [fetchAllData]);

  return {
    stats,
    loading,
    error,
    lastUpdate,
    refreshData
  };
};