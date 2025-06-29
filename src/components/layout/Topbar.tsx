import React from 'react';
import { Bell, User, ChevronDown } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Topbar: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div className="bg-white dark:bg-[#151515] rounded-2xl shadow-xl border border-gray-200 dark:border-gray-900 h-24 flex items-center justify-between px-6">
      {/* Lado esquerdo - Título da página atual */}
      <div className="flex items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            AxHub
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Bem-vindo(a) ao AxHub, um hub de ferramentas da Axory
          </p>
        </div>
      </div>

      {/* Lado direito - Perfil e notificações */}
      <div className="flex items-center gap-4">
        {/* Notificações */}
        <button className="relative p-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 group">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
          {/* Badge de notificação */}
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
          </span>
        </button>

        {/* Divisor */}
        <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

        {/* Perfil do usuário */}
        <div className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-xl transition-all duration-300 cursor-pointer group">
          {/* Avatar */}
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
            <User className="w-5 h-5 text-white" />
          </div>
          
          {/* Informações do usuário */}
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">
              João Silva
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Administrador
            </p>
          </div>

          {/* Seta dropdown */}
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-all duration-300 group-hover:rotate-180" />
        </div>
      </div>
    </div>
  );
};