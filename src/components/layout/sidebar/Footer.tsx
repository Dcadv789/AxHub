import React from 'react';

interface FooterProps {
  isCollapsed: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isCollapsed }) => {
  // Obter o ano atual dinamicamente
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
      <div className="text-center">
        {/* Nome da empresa com mais espaçamento */}
        <div className="py-2">
          {isCollapsed ? (
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed">
              <div className="mb-1">{currentYear}</div>
              <div className="text-xs">©AXORY</div>
            </div>
          ) : (
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-wide">
              © {currentYear} AXORY
            </p>
          )}
        </div>
      </div>
    </div>
  );
};