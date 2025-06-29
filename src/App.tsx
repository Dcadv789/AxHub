import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Sidebar } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import Home from './pages/Home';
import SACSimulation from './pages/SACSimulation';
import PriceSimulation from './pages/PriceSimulation';
import SimulationHistory from './pages/SimulationHistory';
import Comparison from './pages/Comparison';
import ProLabore from './pages/ProLabore';
import ProLaboreTemplate from './pages/ProLaboreTemplate';

// Componente para obter o título da página atual
function PageTitle() {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/home':
        return {
          title: 'Início',
          description: 'Visão geral e acesso rápido às ferramentas'
        };
      case '/':
        return {
          title: 'Tabela SAC',
          description: 'Sistema de Amortização Constante - parcelas decrescentes'
        };
      case '/price':
        return {
          title: 'Tabela Price',
          description: 'Parcelas fixas durante todo o período do financiamento'
        };
      case '/history':
        return {
          title: 'Simulações Salvas',
          description: 'Histórico de todas as suas simulações'
        };
      case '/comparison':
        return {
          title: 'Comparação entre Sistemas',
          description: 'Compare diferentes simulações para encontrar a melhor opção'
        };
      case '/pro-labore':
        return {
          title: 'Cálculo de Pró-labore',
          description: 'Calcule o valor ideal do seu pró-labore com base no faturamento e custos da sua empresa'
        };
      case '/pro-labore-template':
        return {
          title: 'Exportação de Pró-labore',
          description: 'Configure e exporte relatórios de pró-labore'
        };
      default:
        return {
          title: 'AxHub',
          description: 'Hub de ferramentas da Axory'
        };
    }
  };

  const { title, description } = getPageTitle();

  // Título estilizado especial para pró-labore
  if (location.pathname === '/pro-labore') {
    return (
      <div className="mb-6">
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white overflow-hidden">
          {/* Barra azul decorativa */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-300"></div>
          
          {/* Padrão de fundo sutil */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-4 right-12 w-12 h-12 border border-white/20 rounded-full"></div>
            <div className="absolute top-8 right-20 w-6 h-6 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-3">
              {title}
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Título padrão para outras páginas
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
}

function AppContent() {
  return (
    <div className="h-screen bg-white dark:bg-black transition-colors duration-300 overflow-hidden">
      <div className="h-full flex justify-center">
        <div className="w-full max-w-[1920px] flex gap-6 p-6 h-full">
          <div className="flex-shrink-0 h-full">
            <Sidebar />
          </div>
          
          <div className="flex-1 min-w-0 flex flex-col gap-6 h-full">
            <div className="flex-shrink-0">
              <Topbar />
            </div>
            
            {/* Container principal do conteúdo */}
            <div className="flex-1 min-h-0 flex flex-col">
              {/* Título da página - FIXO, fora do scroll */}
              <div className="flex-shrink-0 px-6">
                <PageTitle />
              </div>
              
              {/* Conteúdo das páginas - COM SCROLL INTERNO */}
              <main className="flex-1 min-h-0 overflow-hidden">
                <div className="h-full overflow-y-auto px-6 pb-6">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<SACSimulation />} />
                    <Route path="/price" element={<PriceSimulation />} />
                    <Route path="/history" element={<SimulationHistory />} />
                    <Route path="/comparison" element={<Comparison />} />
                    <Route path="/pro-labore" element={<ProLabore />} />
                    <Route path="/pro-labore-template" element={<ProLaboreTemplate />} />
                  </Routes>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;