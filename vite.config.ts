import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/ons': {
        target: 'https://api.ons.gov.uk/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ons/, ''),
        secure: true,
      },
      '/api/boe': {
        target: 'https://www.bankofengland.co.uk/-/media/boe/files/statistics/research-datasets',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/boe/, ''),
        secure: true,
      },
      '/api/hmrc': {
        target: 'https://www.uktradeinfo.com/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hmrc/, ''),
        secure: true,
      },
      '/api/education': {
        target: 'https://explore-education-statistics.service.gov.uk/api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/education/, ''),
        secure: true,
      }
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
