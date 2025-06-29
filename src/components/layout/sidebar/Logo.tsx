import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

interface LogoProps {
  isCollapsed: boolean;
}

export const Logo: React.FC<LogoProps> = ({ isCollapsed }) => {
  const { isDark } = useTheme();

  // URLs das imagens baseadas no tema e estado da sidebar
  const getLogoUrl = () => {
    if (isCollapsed) {
      // Sidebar colapsada - usar símbolos
      return isDark 
        ? 'https://res.cloudinary.com/ducd9j4tx/image/upload/v1751168925/Ativo_27_-_Simbolo_Branco_w6eknh.svg'
        : 'https://res.cloudinary.com/ducd9j4tx/image/upload/v1751168925/Ativo_28_-_Simbolo_Azul_zxisyj.svg';
    } else {
      // Sidebar expandida - usar logo completa
      return 'https://res.cloudinary.com/ducd9j4tx/image/upload/v1751168925/Ativo_26_-_Azul_branco_x3quzd.svg';
    }
  };

  return (
    <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="flex justify-center">
        <img
          src={getLogoUrl()}
          alt="Logo"
          className={`transition-all duration-300 object-contain ${
            isCollapsed ? 'w-12 h-8' : 'w-45 h-17.5'
          }`}
          style={{
            maxWidth: isCollapsed ? '48px' : '180px',
            maxHeight: isCollapsed ? '32px' : '70px'
          }}
        />
      </div>
    </div>
  );
};