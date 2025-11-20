import React from 'react';
// @ts-ignore
import styles from './Input.module.css';

interface InputProps {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  icon?: string;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  id = 'input',
  type = 'text',
  placeholder = '',
  label = 'Input',
  icon = '',
  className = '',
  style,
  value,
  onChange
}: InputProps) {
  return (
    <div className={`${styles.input} ${className || ''}`} style={style}>
      <input 
        id={id} 
        type={type} 
        placeholder=" " 
        value={value}
        onChange={onChange}
        className="form-control"
      />
      <label htmlFor={id}>
        {icon && <i className={icon}></i>}
        {label}
      </label> 
    </div>
  );
}