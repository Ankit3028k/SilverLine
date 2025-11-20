import React from 'react';

interface CardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

export default function Card({ title, description, icon, className = '' }: CardProps) {
  return (
    <div className={`feature-card ${className}`}>
      {icon && <span className="feature-icon">{icon}</span>}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </div>
  );
}