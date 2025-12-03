import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => (
  <div 
    className={`p-6 md:p-8 rounded-2xl transition-all duration-300 bg-bgCard ${className}`}
    style={{ 
      border: highlight ? `1px solid #F3C27A` : `1px solid #2A2A33`,
      boxShadow: highlight ? `0 10px 40px -10px rgba(243, 194, 122, 0.1)` : 'none'
    }}
  >
    {children}
  </div>
);

export default Card;