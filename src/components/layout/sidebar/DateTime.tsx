import React, { useState, useEffect } from 'react';

interface DateTimeProps {
  isCollapsed: boolean;
}

export const DateTime: React.FC<DateTimeProps> = ({ isCollapsed }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayName = days[date.getDay()];
    const dateStr = date.toLocaleDateString('pt-BR');
    const timeStr = date.toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'America/Sao_Paulo'
    });
    
    return { dayName, dateStr, timeStr };
  };

  const { dayName, dateStr, timeStr } = formatDate(currentTime);

  if (isCollapsed) return null;

  return (
    <div className="px-4 py-4 border-b border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {dayName}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {dateStr} | {timeStr}
        </p>
      </div>
    </div>
  );
};