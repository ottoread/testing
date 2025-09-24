import React from 'react';
import { 
  Zap, 
  GraduationCap, 
  Users, 
  Coffee, 
  Car, 
  Wine, 
  Home, 
  Cigarette, 
  Leaf, 
  Search, 
  ShoppingCart, 
  Scissors, 
  Package, 
  CreditCard, 
  Apple, 
  Droplets, 
  DollarSign, 
  UserCheck, 
  TrendingDown,
  Lightbulb
} from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { EconomicStat } from '../types';

export const MicroPage: React.FC = () => {
  const microStats: EconomicStat[] = [
    // Negative Externalities
    {
      title: 'Air Pollution Deaths',
      value: '11',
      unit: '% globally',
      type: 'Market failure / Negative externalities',
      category: 'micro',
      change: '$21bn healthcare cost',
      changeType: 'negative'
    },
    {
      title: 'CO₂ from Product Use',
      value: '85',
      unit: '%',
      type: 'Market failure / Negative externalities',
      category: 'micro',
      change: '10% production, 5% disposal',
      changeType: 'negative'
    },
    {
      title: 'Lost Working Days',
      value: '1.2',
      unit: 'billion globally',
      type: 'Market failure / Negative externalities',
      category: 'micro',
      changeType: 'negative'
    },

    // Positive Externalities
    {
      title: 'Education External Return',
      value: '11',
      unit: '% annually',
      type: 'Market failure / Positive externalities',
      category: 'micro',
      change: '£11k higher graduate earnings',
      changeType: 'positive'
    },
    {
      title: 'UK Tuition Cap',
      value: '£9,250',
      type: 'Market failure / Positive externalities',
      category: 'micro',
      changeType: 'neutral'
    },
    {
      title: 'No In-Work Training',
      value: '48',
      unit: '% of workers',
      type: 'Market failure / Positive externalities',
      category: 'micro',
      change: '36% managers more likely to leave',
      changeType: 'negative'
    },

    // Government Intervention - Tax
    {
      title: 'Sugary Drinks Tax',
      value: '24p',
      unit: 'per litre',
      type: 'Government intervention / Taxation',
      category: 'micro',
      change: '£350m annual revenue',
      changeType: 'positive'
    },
    {
      title: 'Sugar Tax Elasticity',
      value: '-0.8',
      unit: 'to -0.9',
      type: 'Government intervention / Taxation',
      category: 'micro',
      changeType: 'neutral'
    },

    // Government Intervention - Subsidy
    {
      title: 'Automotive Subsidies',
      value: '£4.5',
      unit: 'billion total',
      type: 'Government intervention / Subsidies',
      category: 'micro',
      change: '100k potential jobs',
      changeType: 'positive'
    },
    {
      title: 'Tata Gigafactory',
      value: '£4',
      unit: 'billion investment',
      type: 'Government intervention / Subsidies',
      category: 'micro',
      change: '4,000 jobs',
      changeType: 'positive'
    },

    // Price Controls
    {
      title: 'Scotland Alcohol Min Price',
      value: '50p',
      unit: 'per unit',
      type: 'Government intervention / Price controls',
      category: 'micro',
      change: '150 fewer deaths/year',
      changeType: 'positive'
    },
    {
      title: 'Alcohol Deaths Reduction',
      value: '13',
      unit: '% fall',
      type: 'Government intervention / Price controls',
      category: 'micro',
      change: '4% drop hospital admissions',
      changeType: 'positive'
    },
    {
      title: 'Sweden Rent Control Wait',
      value: '9',
      unit: 'years average',
      type: 'Government intervention / Price controls',
      category: 'micro',
      change: '57% privately owned',
      changeType: 'negative'
    },
    {
      title: 'Hiring Difficulties',
      value: '20',
      unit: '% of employers',
      type: 'Government intervention / Price controls',
      category: 'micro',
      changeType: 'negative'
    },

    // Information Provision
    {
      title: 'Cigarette Packaging Impact',
      value: '0.5',
      unit: '% smoking fall',
      type: 'Government intervention / Information',
      category: 'micro',
      changeType: 'positive'
    },
    {
      title: 'Stoptober Quit Attempts',
      value: '2.3',
      unit: 'million',
      type: 'Government intervention / Information',
      category: 'micro',
      changeType: 'positive'
    },

    // Pollution Permits
    {
      title: 'CO₂ Reduction (ETS)',
      value: '106',
      unit: 'million tonnes',
      type: 'Government intervention / Pollution permits',
      category: 'micro',
      change: '236m → 130m tonnes',
      changeType: 'positive'
    },
    {
      title: 'Free Permits Value',
      value: '£190',
      unit: 'million',
      type: 'Government intervention / Pollution permits',
      category: 'micro',
      change: 'ExxonMobil & Shell',
      changeType: 'neutral'
    },

    // Market Structures - Monopoly
    {
      title: 'Google Search Share',
      value: '92',
      unit: '% worldwide',
      type: 'Market structures / Monopoly',
      category: 'micro',
      change: '30% higher ad costs',
      changeType: 'negative'
    },
    {
      title: 'Google EU Fine',
      value: '€2.4',
      unit: 'billion',
      type: 'Market structures / Monopoly',
      category: 'micro',
      changeType: 'negative'
    },

    // Market Structures - Oligopoly
    {
      title: 'Supermarket Concentration',
      value: '66',
      unit: '% (5-firm ratio)',
      type: 'Market structures / Oligopoly',
      category: 'micro',
      change: '£50m price fixing fines',
      changeType: 'negative'
    },
    {
      title: 'Construction Cartel Fine',
      value: '£15',
      unit: 'million',
      type: 'Market structures / Oligopoly',
      category: 'micro',
      changeType: 'negative'
    },

    // Market Structures - Monopolistic Competition
    {
      title: 'Hair & Beauty Businesses',
      value: '46,000',
      type: 'Market structures / Monopolistic competition',
      category: 'micro',
      change: '£6.6bn UK contribution',
      changeType: 'positive'
    },

    // Market Structures - Perfect Competition
    {
      title: 'Etsy Sellers',
      value: '7.5',
      unit: 'million',
      type: 'Market structures / Perfect competition',
      category: 'micro',
      change: '74% shop failure rate',
      changeType: 'negative'
    },

    // Price Discrimination
    {
      title: 'Railcard Discounts',
      value: '33',
      unit: '% discount',
      type: 'Pricing strategies / Price discrimination',
      category: 'micro',
      changeType: 'positive'
    },
    {
      title: 'Uber Surge Pricing',
      value: '300',
      unit: '% increase',
      type: 'Pricing strategies / Price discrimination',
      category: 'micro',
      changeType: 'negative'
    },

    // Business Objectives
    {
      title: 'Apple CEO Compensation',
      value: '£45',
      unit: 'million',
      type: 'Business objectives / Corporate governance',
      category: 'micro',
      change: '25% profits as dividends',
      changeType: 'neutral'
    },

    // Privatisation
    {
      title: 'Water Industry Dividends',
      value: '£57',
      unit: 'billion (1991-2019)',
      type: 'Government policy / Privatisation',
      category: 'micro',
      change: '40% rise in bills',
      changeType: 'negative'
    },

    // Labour Markets
    {
      title: 'National Living Wage',
      value: '£11.44',
      type: 'Labour markets / Minimum wage',
      category: 'micro',
      change: '1.6m workers affected',
      changeType: 'positive'
    },
    {
      title: 'Min Wage Sectors',
      value: '45',
      unit: '% retail/hospitality',
      type: 'Labour markets / Minimum wage',
      category: 'micro',
      changeType: 'neutral'
    },

    // Trade Unions
    {
      title: 'Aslef Strike Workers',
      value: '33,000',
      unit: 'in 2017',
      type: 'Labour markets / Trade unions',
      category: 'micro',
      changeType: 'negative'
    },
    {
      title: 'Public Sector Union Rate',
      value: '48.6',
      unit: '% membership',
      type: 'Labour markets / Trade unions',
      category: 'micro',
      change: '12.3% private sector',
      changeType: 'neutral'
    },

    // Income Distribution
    {
      title: 'Absolute Poverty (pre-housing)',
      value: '13',
      unit: '%',
      type: 'Income distribution / Poverty',
      category: 'micro',
      change: '17% after housing costs',
      changeType: 'negative'
    },
    {
      title: 'UK Gini Coefficient',
      value: '0.36',
      unit: '(2021/22)',
      type: 'Income distribution / Inequality',
      category: 'micro',
      change: '0.24 → 0.34 in 1980s',
      changeType: 'negative'
    },
    {
      title: 'Top 10% GCSE Success',
      value: '70',
      unit: '% achieve 5 good GCSEs',
      type: 'Income distribution / Educational inequality',
      category: 'micro',
      change: '<30% bottom 10%',
      changeType: 'negative'
    },
    {
      title: 'Wealth Concentration',
      value: '43',
      unit: '% held by richest 10%',
      type: 'Income distribution / Wealth inequality',
      category: 'micro',
      changeType: 'negative'
    },
    {
      title: 'Inheritance Tax Rate',
      value: '40',
      unit: '%',
      type: 'Income distribution / Taxation',
      category: 'micro',
      change: '£325k-£500k threshold',
      changeType: 'neutral'
    },

    // Behavioural Economics
    {
      title: 'Pension Auto-Enrolment',
      value: '5.4',
      unit: 'million more savers',
      type: 'Behavioural economics / Nudges',
      category: 'micro',
      changeType: 'positive'
    },
    {
      title: 'Tax Revenue Nudge',
      value: '£300',
      unit: 'million brought forward',
      type: 'Behavioural economics / Nudges',
      category: 'micro',
      changeType: 'positive'
    }
  ];

  const getIconForStat = (title: string) => {
    if (title.includes('Air Pollution') || title.includes('CO₂')) return <Zap className="w-6 h-6" />;
    if (title.includes('Education') || title.includes('Tuition') || title.includes('GCSE')) return <GraduationCap className="w-6 h-6" />;
    if (title.includes('Training') || title.includes('Working')) return <Users className="w-6 h-6" />;
    if (title.includes('Sugar') || title.includes('Drinks')) return <Coffee className="w-6 h-6" />;
    if (title.includes('Automotive') || title.includes('Tata') || title.includes('Gigafactory')) return <Car className="w-6 h-6" />;
    if (title.includes('Alcohol')) return <Wine className="w-6 h-6" />;
    if (title.includes('Rent') || title.includes('Housing')) return <Home className="w-6 h-6" />;
    if (title.includes('Cigarette') || title.includes('Smoking') || title.includes('Stoptober')) return <Cigarette className="w-6 h-6" />;
    if (title.includes('CO₂') || title.includes('ETS') || title.includes('Permits')) return <Leaf className="w-6 h-6" />;
    if (title.includes('Google') || title.includes('Search')) return <Search className="w-6 h-6" />;
    if (title.includes('Supermarket') || title.includes('Construction')) return <ShoppingCart className="w-6 h-6" />;
    if (title.includes('Hair') || title.includes('Beauty')) return <Scissors className="w-6 h-6" />;
    if (title.includes('Etsy')) return <Package className="w-6 h-6" />;
    if (title.includes('Railcard') || title.includes('Uber')) return <CreditCard className="w-6 h-6" />;
    if (title.includes('Apple') || title.includes('CEO')) return <Apple className="w-6 h-6" />;
    if (title.includes('Water')) return <Droplets className="w-6 h-6" />;
    if (title.includes('Wage') || title.includes('Min Wage')) return <DollarSign className="w-6 h-6" />;
    if (title.includes('Union') || title.includes('Aslef') || title.includes('Strike')) return <UserCheck className="w-6 h-6" />;
    if (title.includes('Poverty') || title.includes('Gini') || title.includes('Wealth') || title.includes('Inheritance')) return <TrendingDown className="w-6 h-6" />;
    if (title.includes('Pension') || title.includes('Nudge') || title.includes('Tax Revenue')) return <Lightbulb className="w-6 h-6" />;
    return <Package className="w-6 h-6" />;
  };

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Microeconomic Indicators</h2>
        <p className="text-gray-400">Market structures, government intervention, and individual economic behavior</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {microStats.map((stat, index) => (
          <div
            key={stat.title}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 50}ms`,
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