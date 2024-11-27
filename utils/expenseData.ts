import { twMerge } from 'tailwind-merge';

export type ExpenseCategory = 'Accommodation' | 'Food' | 'Transportation' | 'Utilities' | 'Healthcare' | 'Books and Supplies' | 'Personal Expenses';
export type AccommodationType = 'On-Campus' | 'Off-Campus';
export type Season = 'Winter' | 'Spring' | 'Summer' | 'Fall';

export interface ExpenseData {
  category: ExpenseCategory;
  accommodationType: AccommodationType;
  season: Season;
  month: string;
  amount: number;
}

export const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const seasons: Season[] = ['Winter', 'Spring', 'Summer', 'Fall'];

export const accommodationTypes: AccommodationType[] = ['On-Campus', 'Off-Campus'];

export const expenseCategories: ExpenseCategory[] = [
  'Accommodation', 'Food', 'Transportation', 'Utilities',
  'Healthcare', 'Books and Supplies', 'Personal Expenses'
];

export const currencyCodes = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CNY', 'INR'];

export const expenseData: ExpenseData[] = [
  ...generateSeasonData('Winter', ['December', 'January', 'February']),
  ...generateSeasonData('Spring', ['March', 'April', 'May']),
  ...generateSeasonData('Summer', ['June', 'July', 'August']),
  ...generateSeasonData('Fall', ['September', 'October', 'November']),
];

function generateSeasonData(season: Season, months: string[]): ExpenseData[] {
  const data: ExpenseData[] = [];

  for (const month of months) {
    for (const accommodationType of accommodationTypes) {
      const isOnCampus = accommodationType === 'On-Campus';

      data.push(
        { 
          category: 'Accommodation', 
          accommodationType, 
          season, 
          month, 
          amount: isOnCampus ? 2805 : getRandomAmount(1000, 2000) 
        },
        { 
          category: 'Food', 
          accommodationType, 
          season, 
          month, 
          amount: isOnCampus ? 570 : getRandomAmount(200, 300) 
        },
        { 
          category: 'Transportation', 
          accommodationType, 
          season, 
          month, 
          amount: getRandomAmount(75, 100) 
        },
        { 
          category: 'Utilities', 
          accommodationType, 
          season, 
          month, 
          amount: isOnCampus ? 0 : getRandomAmount(165, 280) 
        },
        { 
          category: 'Healthcare', 
          accommodationType, 
          season, 
          month, 
          amount: 190.5
        },
        { 
          category: 'Books and Supplies', 
          accommodationType, 
          season, 
          month, 
          amount: season === 'Fall' || season === 'Spring' ? 600 : 100
        },
        { 
          category: 'Personal Expenses', 
          accommodationType, 
          season, 
          month, 
          amount: getRandomAmount(50, 150) 
        },
      );
    }
  }

  return data;
}

function getRandomAmount(min: number, max: number): number {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}

export const filterData = (
  data: ExpenseData[],
  filters: {
    accommodationType?: AccommodationType;
    season?: Season;
    month?: string;
    categories?: ExpenseCategory[];
  }
): ExpenseData[] => {
  return data.filter(item => {
    if (filters.accommodationType && item.accommodationType !== filters.accommodationType) return false;
    if (filters.season && item.season !== filters.season) return false;
    if (filters.month && item.month !== filters.month) return false;
    if (filters.categories && filters.categories.length > 0 && !filters.categories.includes(item.category)) return false;
    return true;
  });
};

export const convertCurrency = (amount: number, fromCurrency: string, toCurrency: string): number => {
  const exchangeRates: { [key: string]: number } = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 110.14,
    CAD: 1.25,
    AUD: 1.34,
    CNY: 6.47,
    INR: 74.38,
  };

  const amountInUSD = fromCurrency === 'USD' ? amount : amount / exchangeRates[fromCurrency];
  return toCurrency === 'USD' ? amountInUSD : amountInUSD * exchangeRates[toCurrency];
};
