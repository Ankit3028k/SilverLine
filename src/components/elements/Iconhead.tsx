import React from 'react';

interface IconheadProps {
  text?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function Iconhead({
  text = 'Heading Text',
  icon = '',
  className = '',
  style
}: IconheadProps) {
  return (
    <p className={`display-2 primary2 ${className || ''}`} style={style}>
      {icon && <i className={icon}></i>}
      <span className="ml-2">{text}</span>
    </p>
  );
}