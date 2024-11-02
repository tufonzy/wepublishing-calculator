import React, { useState, useEffect } from 'react';
import { Calculator, BookOpen, DollarSign, Percent, Sparkles, ArrowRight, Target } from 'lucide-react';
import { marketplaces } from './types/marketplace';
import { InputField } from './components/InputField';
import { ResultCard } from './components/ResultCard';
import { FormatSelector } from './components/FormatSelector';

function App() {
  const [pageCount, setPageCount] = useState<number>(200);
  const [listPrice, setListPrice] = useState<number>(14.99);
  const [selectedMarket, setSelectedMarket] = useState<string>('US');
  const [selectedFormat, setSelectedFormat] = useState<string>('6x9');
  const [royalty, setRoyalty] = useState<number>(0);
  const [printingCost, setPrintingCost] = useState<number>(0);

  const calculateRoyalty = () => {
    const market = marketplaces[selectedMarket];
    const { costPerPage, fixedCost } = market.printingCosts[selectedFormat];
    const totalPrintingCost = (pageCount * costPerPage) + fixedCost;
    setPrintingCost(totalPrintingCost);
    
    const royaltyAmount = (listPrice - totalPrintingCost) * market.royaltyRate;
    setRoyalty(Math.max(0, royaltyAmount));
  };

  useEffect(() => {
    calculateRoyalty();
  }, [pageCount, listPrice, selectedMarket, selectedFormat]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Amazon Paperback Royalty Calculator</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Marketplace
                </label>
                <select
                  value={selectedMarket}
                  onChange={(e) => setSelectedMarket(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {Object.entries(marketplaces).map(([key, market]) => (
                    <option key={key} value={key}>
                      {market.name} ({market.currency})
                    </option>
                  ))}
                </select>
              </div>

              <FormatSelector
                selectedFormat={selectedFormat}
                onChange={setSelectedFormat}
              />

              <InputField
                label="Page Count"
                icon={BookOpen}
                type="number"
                value={pageCount}
                onChange={(value) => setPageCount(Math.max(24, value || 0))}
                min={24}
              />

              <InputField
                label="List Price"
                icon={DollarSign}
                type="number"
                value={listPrice}
                onChange={setListPrice}
                step="0.01"
                min={marketplaces[selectedMarket].minPrice}
                max={marketplaces[selectedMarket].maxPrice}
                suffix={marketplaces[selectedMarket].currency}
              />
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Calculation Results</h2>
              
              <div className="space-y-4">
                <ResultCard
                  label="Printing Cost"
                  value={`${marketplaces[selectedMarket].currency}${printingCost.toFixed(2)}`}
                />

                <ResultCard
                  label="Royalty Rate"
                  value={`${(marketplaces[selectedMarket].royaltyRate * 100).toFixed(0)}%`}
                  icon={Percent}
                />

                <ResultCard
                  label="Your Royalty"
                  value={`${marketplaces[selectedMarket].currency}${royalty.toFixed(2)}`}
                  highlight={true}
                />
              </div>

              <p className="text-sm text-gray-500 mt-6">
                Note: This calculator provides an estimate. Actual royalties may vary based on Amazon's 
                current rates and policies.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Scopri WeBooksAI</h2>
          </div>
          
          <p className="text-lg mb-6">
            Scrivi il tuo libro in meno di 30 minuti con l'intelligenza artificiale. 
            Trasforma le tue idee in bestseller con pochi click!
          </p>

          <a 
            href="https://bit.ly/contattawp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Accedi Ora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Scopri AutomADS</h2>
          </div>
          
          <p className="text-lg mb-6">
            Gestisci le tue Amazon ADS in modo automatico con l'intelligenza artificiale. 
            Ottimizza le tue campagne pubblicitarie con il nostro algoritmo proprietario!
          </p>

          <a 
            href="https://bit.ly/contattawp" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            Accedi Ora
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;