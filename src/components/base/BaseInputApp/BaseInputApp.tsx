import React from 'react';
import s from './BaseInputApp.module.scss';

interface Props {
  type?: string;
  theme?: string;
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInputApp: React.FC<Props> = ({
  theme,
  value,
  label,
  type = 'text',
  error,
  name,
  min,
  max,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  return (
    <div
      className={`${s.BaseInput} ${className} ${
        theme == 'light' ? s.BaseInput_Light : ''
      }`}
    >
      <input
        value={value}
        type={type}
        className={`${s.Input} ${error ? s.Error : ''}`}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          <span>{label}</span>
        </label>
      ) : null}
    </div>
  );
};
export default BaseInputApp;
