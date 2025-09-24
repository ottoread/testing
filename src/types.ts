export interface EconomicStat {
  title: string;
  value: string | number;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  unit?: string;
  lastUpdated?: string;
  loading?: boolean;
  error?: string;
  type: string;
  category: 'macro' | 'micro';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error?: string;
}