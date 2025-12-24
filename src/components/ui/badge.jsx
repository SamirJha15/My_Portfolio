import React from 'react';

const Badge = ({ children, className = '' }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${className}`}>
    {children}
  </span>
);

export { Badge };
