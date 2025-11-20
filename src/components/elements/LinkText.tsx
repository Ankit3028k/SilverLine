import React from 'react';
import { Link } from 'react-router-dom';

interface LinkTextProps {
  to?: string;
  text?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function LinkText({
  to = '#',
  text = 'Link Text',
  className = '',
  style
}: LinkTextProps) {
  return (
    <Link 
      to={to} 
      className={`footer-link ${className || ''}`} 
      style={style}
    >
      {text}
    </Link>
  );
}