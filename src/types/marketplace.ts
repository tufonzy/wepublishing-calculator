export interface MarketplaceType {
  name: string;
  royaltyRate: number;
  minPrice: number;
  maxPrice: number;
  currency: string;
  printingCosts: {
    [key: string]: {
      costPerPage: number;
      fixedCost: number;
    };
  };
}

export const marketplaces: Record<string, MarketplaceType> = {
  US: {
    name: 'United States',
    royaltyRate: 0.60,
    minPrice: 0.99,
    maxPrice: 250,
    currency: '$',
    printingCosts: {
      '5x8': { costPerPage: 0.012, fixedCost: 0.85 },
      '6x9': { costPerPage: 0.013, fixedCost: 0.88 },
      '8.5x11': { costPerPage: 0.015, fixedCost: 0.92 }
    }
  },
  UK: {
    name: 'United Kingdom',
    royaltyRate: 0.60,
    minPrice: 0.99,
    maxPrice: 250,
    currency: '£',
    printingCosts: {
      '5x8': { costPerPage: 0.010, fixedCost: 0.70 },
      '6x9': { costPerPage: 0.011, fixedCost: 0.73 },
      '8.5x11': { costPerPage: 0.013, fixedCost: 0.77 }
    }
  },
  EU: {
    name: 'European Union',
    royaltyRate: 0.60,
    minPrice: 0.99,
    maxPrice: 250,
    currency: '€',
    printingCosts: {
      '5x8': { costPerPage: 0.011, fixedCost: 0.75 },
      '6x9': { costPerPage: 0.012, fixedCost: 0.78 },
      '8.5x11': { costPerPage: 0.014, fixedCost: 0.82 }
    }
  }
};