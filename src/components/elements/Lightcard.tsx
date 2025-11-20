import React from 'react';

interface LightcardProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Lightcard({
  children,
  className = '',
  style
}: LightcardProps) {
  return (
    <div 
      className={`lightcard ${className || ''}`} 
      style={{
        borderRadius: '16px',
        backgroundColor: 'var(--light-bg)',
        boxShadow: 'var(--shadow-light)',
        border: '1px solid var(--light-surface-3)',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        ...style,
      }}
    >
      {children}
    </div>
  );
}