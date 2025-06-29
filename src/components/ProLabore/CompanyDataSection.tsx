import React from 'react';

interface CompanyDataSectionProps {
  companyName: string;
  cnpj: string;
  onCompanyNameChange: (value: string) => void;
  onCnpjChange: (value: string) => void;
}

export const CompanyDataSection: React.FC<CompanyDataSectionProps> = ({
  companyName,
  cnpj,
  onCompanyNameChange,
  onCnpjChange
}) => {
  const formatCnpj = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, '$1.$2.$3/$4-$5').substring(0, 18);
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCnpj = formatCnpj(e.target.value);
    onCnpjChange(formattedCnpj);
  };

  return (
    <div className="bg-white dark:bg-[#151515] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-900">
      <div className="bg-gray-800 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">Dados da Empresa</h2>
        <p className="text-gray-300 text-sm">Informações básicas da empresa</p>
      </div>
      <div className="p-6 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Nome da Empresa
          </label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => onCompanyNameChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="Digite o nome da empresa"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            CNPJ
          </label>
          <input
            type="text"
            value={cnpj}
            onChange={handleCnpjChange}
            maxLength={18}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
            placeholder="00.000.000/0001-00"
          />
        </div>
      </div>
    </div>
  );
};