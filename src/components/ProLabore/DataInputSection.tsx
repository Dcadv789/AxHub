import React from 'react';
import { RevenueSection } from './RevenueSection';
import { FixedCostsSection } from './FixedCostsSection';
import { VariableCostsSection } from './VariableCostsSection';

interface DataInputSectionProps {
  revenue: {
    services: number;
    products: number;
    others: number;
  };
  fixedCosts: {
    monthly: number;
    proLabore: number;
  };
  variableCosts: {
    sales: number;
    taxes: number;
    cardFees: number;
    returns: number;
    commission: number;
    others: number;
  };
  onRevenueChange: (key: string, value: number) => void;
  onFixedCostChange: (key: string, value: number) => void;
  onVariableCostChange: (key: string, value: number) => void;
}

export const DataInputSection: React.FC<DataInputSectionProps> = ({
  revenue,
  fixedCosts,
  variableCosts,
  onRevenueChange,
  onFixedCostChange,
  onVariableCostChange
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white dark:bg-[#151515] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-900">
        <div className="bg-gray-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Faturamento</h2>
          <p className="text-gray-300 text-sm">Registre suas fontes de receita</p>
        </div>
        <div className="p-6">
          <RevenueSection
            revenue={revenue}
            onRevenueChange={onRevenueChange}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-900">
        <div className="bg-gray-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Custos Fixos</h2>
          <p className="text-gray-300 text-sm">Despesas mensais recorrentes</p>
        </div>
        <div className="p-6">
          <FixedCostsSection
            costs={fixedCosts}
            onCostChange={onFixedCostChange}
          />
        </div>
      </div>

      <div className="bg-white dark:bg-[#151515] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-900">
        <div className="bg-gray-800 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">Custos Variáveis</h2>
          <p className="text-gray-300 text-sm">Despesas proporcionais à receita</p>
        </div>
        <div className="p-6">
          <VariableCostsSection
            costs={variableCosts}
            onCostChange={onVariableCostChange}
          />
        </div>
      </div>
    </div>
  );
};