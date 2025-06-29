import React, { useState } from 'react';
import { CompanyDataSection } from '../components/ProLabore/CompanyDataSection';
import { DataInputSection } from '../components/ProLabore/DataInputSection';
import { ResultsSection } from '../components/ProLabore/ResultsSection';
import { Save } from 'lucide-react';
import { Notification } from '../components/Notification';

export default function ProLabore() {
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [revenue, setRevenue] = useState({
    services: 0,
    products: 0,
    others: 0
  });

  const [fixedCosts, setFixedCosts] = useState({
    monthly: 0,
    proLabore: 0
  });

  const [variableCosts, setVariableCosts] = useState({
    sales: 0,
    taxes: 0,
    cardFees: 0,
    returns: 0,
    commission: 0,
    others: 0
  });

  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success');

  const handleRevenueChange = (key: string, value: number) => {
    setRevenue(prev => ({ ...prev, [key]: value }));
  };

  const handleFixedCostChange = (key: string, value: number) => {
    setFixedCosts(prev => ({ ...prev, [key]: value }));
  };

  const handleVariableCostChange = (key: string, value: number) => {
    setVariableCosts(prev => ({ ...prev, [key]: value }));
  };

  const validateData = () => {
    if (!companyName.trim()) {
      return 'O nome da empresa é obrigatório';
    }

    if (companyName.trim().length < 3) {
      return 'O nome da empresa deve ter pelo menos 3 caracteres';
    }

    const cnpjNumbers = cnpj.replace(/\D/g, '');
    if (cnpjNumbers.length !== 14) {
      return 'O CNPJ deve ter 14 dígitos';
    }

    const totalRevenue = Object.values(revenue).reduce((a, b) => a + b, 0);
    if (totalRevenue <= 0) {
      return 'É necessário informar pelo menos uma fonte de receita';
    }

    return null;
  };

  const calculateResults = () => {
    const totalRevenue = Object.values(revenue).reduce((a, b) => a + b, 0);
    const totalVariableCosts = Object.values(variableCosts).reduce((a, b) => a + b, 0) / 100;
    const totalFixedCosts = fixedCosts.monthly;

    const maximumRecommended = (totalRevenue * (1 - totalVariableCosts)) - totalFixedCosts;
    const preliminaryCalculation = maximumRecommended;

    return {
      preliminaryCalculation,
      maximumRecommended,
      currentProLabore: fixedCosts.proLabore,
      userName: companyName || 'Usuário',
      monthlyFixedCosts: totalFixedCosts
    };
  };

  const handleSaveCalculation = () => {
    const validationError = validateData();
    if (validationError) {
      setNotificationMessage(validationError);
      setNotificationType('error');
      setShowNotification(true);
      return;
    }

    const calculation = {
      revenue,
      fixedCosts,
      variableCosts,
      companyName,
      cnpj,
      ...calculateResults()
    };

    localStorage.setItem('lastProLaboreCalculation', JSON.stringify(calculation));
    localStorage.setItem('companyName', companyName);
    localStorage.setItem('cnpj', cnpj);
    
    setNotificationMessage('Cálculo salvo com sucesso!');
    setNotificationType('success');
    setShowNotification(true);
  };

  const results = calculateResults();

  return (
    <div className="space-y-8">
      {showNotification && (
        <Notification
          message={notificationMessage}
          onClose={() => setShowNotification(false)}
          type={notificationType}
        />
      )}

      <CompanyDataSection
        companyName={companyName}
        cnpj={cnpj}
        onCompanyNameChange={setCompanyName}
        onCnpjChange={setCnpj}
      />

      <DataInputSection
        revenue={revenue}
        fixedCosts={fixedCosts}
        variableCosts={variableCosts}
        onRevenueChange={handleRevenueChange}
        onFixedCostChange={handleFixedCostChange}
        onVariableCostChange={handleVariableCostChange}
      />

      <div className="bg-white dark:bg-[#151515] rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-900">
        <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-8 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-white">Resultados da Análise</h2>
            <p className="text-indigo-100 text-sm">Recomendações baseadas nos dados informados</p>
          </div>
          <button
            onClick={handleSaveCalculation}
            className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors shadow-sm"
          >
            <Save size={20} className="mr-2" />
            Salvar Cálculo
          </button>
        </div>
        <div className="p-8">
          <ResultsSection {...results} />
        </div>
      </div>
    </div>
  );
}