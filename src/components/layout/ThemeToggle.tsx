import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface ThemeToggleProps {
  isCollapsed: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isCollapsed }) => {
  const { isDark, toggleTheme } = useTheme();

  if (isCollapsed) {
    // SIDEBAR COLAPSADA - Botão simples com ícone
    return (
      <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center group"
            style={{
              outline: 'none',
              WebkitTapHighlightColor: 'transparent',
            }}
            onFocus={(e) => e.target.blur()}
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 transition-colors duration-300" />
            ) : (
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-yellow-500 transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>
    );
  }

  // SIDEBAR EXPANDIDA - Toggle original com slider
  return (
    <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Light
          </span>
        </div>
        
        <button
          onClick={toggleTheme}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 focus:outline-none ${
            isDark ? 'bg-blue-600' : 'bg-gray-300'
          }`}
          style={{
            outline: 'none',
            WebkitTapHighlightColor: 'transparent',
          }}
          onFocus={(e) => e.target.blur()}
          aria-label="Toggle theme"
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
              isDark ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Dark
          </span>
          <Moon className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        </div>
      </div>
    </div>
  );
};