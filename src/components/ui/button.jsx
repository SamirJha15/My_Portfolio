import React from 'react';

const Button = ({ children, onClick, variant = 'primary', className = '', ...props }) => {
  const baseClass = 'font-medium rounded-lg transition-all duration-200 cursor-pointer';
  
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
