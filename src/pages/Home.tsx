import React from 'react';
import { 
  Calculator, 
  BarChart2, 
  History, 
  GitCompare, 
  DollarSign, 
  Settings,
  TrendingUp,
  Users,
  FileText,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const quickActions = [
  {
    title: 'Nova Simulação SAC',
    description: 'Sistema de Amortização Constante',
    icon: Calculator,
    path: '/',
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600'
  },
  {
    title: 'Nova Simulação Price',
    description: 'Tabela Price com parcelas fixas',
    icon: BarChart2,
    path: '/price',
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600'
  },
  {
    title: 'Histórico',
    description: 'Ver simulações salvas',
    icon: History,
    path: '/history',
    color: 'bg-purple-500',
    hoverColor: 'hover:bg-purple-600'
  },
  {
    title: 'Comparar',
    description: 'Comparar simulações',
    icon: GitCompare,
    path: '/comparison',
    color: 'bg-orange-500',
    hoverColor: 'hover:bg-orange-600'
  }
];

const stats = [
  {
    title: 'Simulações Criadas',
    value: '24',
    icon: FileText,
    change: '+12%',
    changeType: 'positive'
  },
  {
    title: 'Comparações Feitas',
    value: '8',
    icon: GitCompare,
    change: '+5%',
    changeType: 'positive'
  },
  {
    title: 'Tempo Médio',
    value: '3.2min',
    icon: Clock,
    change: '-8%',
    changeType: 'positive'
  },
  {
    title: 'Taxa de Uso',
    value: '89%',
    icon: TrendingUp,
    change: '+15%',
    changeType: 'positive'
  }
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">
              Bem-vindo ao AxHub! 👋
            </h2>
            <p className="text-blue-100 text-lg">
              Seu hub completo de ferramentas financeiras da Axory
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  stat.changeType === 'positive' 
                    ? 'text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-900/20' 
                    : 'text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/20'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                {stat.value}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {stat.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Ações Rápidas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                to={action.path}
                className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 ${action.color} ${action.hoverColor} rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {action.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {action.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
          Atividade Recente
        </h3>
        <div className="space-y-4">
          {[
            {
              action: 'Simulação SAC criada',
              details: 'Financiamento de R$ 250.000 em 360 meses',
              time: '2 horas atrás',
              icon: Calculator,
              color: 'text-blue-600'
            },
            {
              action: 'Comparação realizada',
              details: 'SAC vs Price - Financiamento habitacional',
              time: '5 horas atrás',
              icon: GitCompare,
              color: 'text-orange-600'
            },
            {
              action: 'Pró-labore calculado',
              details: 'Empresa XYZ Ltda - R$ 8.500',
              time: '1 dia atrás',
              icon: DollarSign,
              color: 'text-green-600'
            }
          ].map((activity, index) => {
            const Icon = activity.icon;
            return (
              <div key={index} className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                <div className="p-2 bg-gray-50 dark:bg-gray-600 rounded-lg shadow-sm">
                  <Icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white">
                    {activity.action}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {activity.details}
                  </p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {activity.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Todas as Ferramentas
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            to="/pro-labore"
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
              Calculadora de Pró-labore
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Calcule o valor ideal do pró-labore baseado no faturamento da empresa
            </p>
          </Link>

          <Link
            to="/pro-labore-template"
            className="group bg-gray-50 dark:bg-gray-800/50 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-12 h-12 bg-purple-500 hover:bg-purple-600 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 group-hover:scale-110">
              <Settings className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
              Template de Relatórios
            </h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Configure templates personalizados para relatórios de pró-labore
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}