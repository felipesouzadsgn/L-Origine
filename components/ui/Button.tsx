import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick, 
  href 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 font-body";
  
  const variants = {
    primary: "bg-primary text-white shadow-lg hover:bg-opacity-90 hover:shadow-primary/30 border border-transparent",
    secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-black",
    ghost: "text-textMain hover:text-secondary px-4 bg-transparent border-none",
  };

  if (href) {
    return (
      <a 
        href={href}
        className={`${baseStyle} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;