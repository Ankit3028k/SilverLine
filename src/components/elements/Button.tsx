import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  block?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'medium',
  block = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const sizeClasses = size === 'small' ? 'btn-small' : size === 'large' ? 'btn-large' : '';
  const blockClass = block ? 'btn-block' : '';
  
  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${blockClass} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}