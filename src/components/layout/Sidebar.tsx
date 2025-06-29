import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Logo } from './sidebar/Logo';
import { DateTime } from './sidebar/DateTime';
import { Navigation } from './sidebar/Navigation';
import { Footer } from './sidebar/Footer';
import { ThemeToggle } from './ThemeToggle';

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="relative h-full">
      {/* Sidebar - altura total da tela menos padding */}
      <div
        className={`bg-white dark:bg-[#151515] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-900 transition-all duration-300 ease-in-out flex flex-col overflow-hidden h-full ${
          isCollapsed ? 'w-24' : 'w-60'
        }`}
      >
        {/* Logo - No topo */}
        <div className="flex-shrink-0">
          <Logo isCollapsed={isCollapsed} />
        </div>

        {/* Date Time - SEM MARGEM SUPERIOR - DIRETO APÓS O LOGO */}
        <div className="flex-shrink-0">
          <DateTime isCollapsed={isCollapsed} />
        </div>

        {/* Navigation - COM MARGEM SUPERIOR PEQUENA E SCROLL SE NECESSÁRIO */}
        <div className="flex-1 pt-2 overflow-y-auto">
          <Navigation isCollapsed={isCollapsed} />
        </div>

        {/* Theme Toggle - Mais espaçamento */}
        <div className="flex-shrink-0 mt-4">
          <ThemeToggle isCollapsed={isCollapsed} />
        </div>

        {/* Footer - Espaçamento otimizado */}
        <div className="flex-shrink-0">
          <Footer isCollapsed={isCollapsed} />
        </div>
      </div>

      {/* Collapse Button - POSICIONADO EXATAMENTE NA METADE DA BORDA */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-8 w-8 h-8 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 z-[99999] ${
          isCollapsed 
            ? 'left-[96px]' // Quando colapsada: 96px (sidebar width)
            : 'left-[240px]' // Quando expandida: 240px (sidebar width)
        }`}
        style={{
          transform: 'translateX(-50%)', // Move o botão 50% para a esquerda, ficando metade dentro/metade fora
          outline: 'none', // Remove outline padrão
          WebkitTapHighlightColor: 'transparent', // Remove highlight no mobile
        }}
        onFocus={(e) => e.target.blur()} // Remove foco imediatamente
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        <ChevronLeft
          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform duration-300 ${
            isCollapsed ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Backdrop for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-15 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};