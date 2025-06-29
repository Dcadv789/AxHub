import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Calculator, 
  BarChart2, 
  History, 
  GitCompare, 
  DollarSign, 
  Settings,
  Home,
  ChevronDown,
  ChevronRight,
  TrendingUp,
  FileDown
} from 'lucide-react';

interface NavigationProps {
  isCollapsed: boolean;
}

interface MenuItem {
  icon: React.ComponentType<any>;
  label: string;
  path?: string;
  children?: MenuItem[];
  autoNavigate?: boolean; // Nova propriedade para navegação automática
}

const navigationItems: MenuItem[] = [
  { icon: Home, label: 'Início', path: '/home' },
  { 
    icon: TrendingUp, 
    label: 'Simul. Financ.',
    children: [
      { icon: Calculator, label: 'Tabela SAC', path: '/' },
      { icon: BarChart2, label: 'Tabela Price', path: '/price' },
      { icon: History, label: 'Simulações Salvas', path: '/history' },
      { icon: GitCompare, label: 'Comparação', path: '/comparison' }
    ]
  },
  { 
    icon: DollarSign, 
    label: 'Pró-Labore',
    autoNavigate: true, // Navega automaticamente para a primeira página
    children: [
      { icon: DollarSign, label: 'Cálculo', path: '/pro-labore' },
      { icon: FileDown, label: 'Exportação', path: '/pro-labore-template' }
    ]
  }
];

export const Navigation: React.FC<NavigationProps> = ({ isCollapsed }) => {
  const [openMenus, setOpenMenus] = useState<string[]>(['Simul. Financ.']); // Menu aberto por padrão
  const navigate = useNavigate();

  const toggleMenu = (label: string, item: MenuItem) => {
    if (isCollapsed) return; // Não permite toggle quando colapsado
    
    // Se o item tem autoNavigate, navega para a primeira página filha
    if (item.autoNavigate && item.children && item.children.length > 0) {
      const firstChild = item.children[0];
      if (firstChild.path) {
        navigate(firstChild.path);
      }
    }
    
    setOpenMenus(prev => 
      prev.includes(label) 
        ? prev.filter(menuItem => menuItem !== label)
        : [...prev, label]
    );
  };

  const renderMenuItem = (item: MenuItem, level: number = 0) => {
    const Icon = item.icon;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openMenus.includes(item.label);
    const isSubItem = level > 0;

    if (hasChildren) {
      // Menu com submenu
      return (
        <div key={item.label}>
          <button
            onClick={() => toggleMenu(item.label, item)}
            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-300 group text-left ${
              isCollapsed ? 'justify-center px-0' : ''
            } text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400`}
          >
            <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
              isCollapsed ? 'mx-auto' : ''
            }`} />
            <span className={`font-medium transition-all duration-300 flex-1 ${
              isCollapsed ? 'opacity-0 w-0 overflow-hidden absolute' : 'opacity-100'
            }`}>
              {item.label}
            </span>
            {!isCollapsed && (
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`} />
            )}
          </button>
          
          {/* Submenu */}
          {!isCollapsed && isOpen && item.children && (
            <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
              {item.children.map(child => renderMenuItem(child, level + 1))}
            </div>
          )}
        </div>
      );
    } else {
      // Item normal com link
      return (
        <NavLink
          key={item.path}
          to={item.path!}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 rounded-xl transition-all duration-300 group ${
              isActive
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400'
            } ${
              isCollapsed ? 'justify-center px-0' : 'px-3'
            } ${
              isSubItem ? 'text-sm' : ''
            }`
          }
        >
          <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
            isCollapsed ? 'mx-auto' : ''
          } ${isSubItem ? 'w-4 h-4' : ''}`} />
          <span className={`font-medium transition-all duration-300 ${
            isCollapsed ? 'opacity-0 w-0 overflow-hidden absolute' : 'opacity-100'
          } ${isSubItem ? 'text-sm' : ''}`}>
            {item.label}
          </span>
        </NavLink>
      );
    }
  };

  return (
    <nav className="px-4 py-2 h-full">
      <div className="space-y-2">
        {navigationItems.map(item => renderMenuItem(item))}
      </div>
    </nav>
  );
};