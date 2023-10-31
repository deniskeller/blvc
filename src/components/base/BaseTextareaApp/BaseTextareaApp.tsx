import React from 'react';
import s from './BaseTextareaApp.module.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  value: string | number;
  maxLength?: number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseTextareaApp: React.FC<Props> = ({
  value,
  label,
  error,
  name,
  maxLength,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={`${s.BaseTextarea} ${className}`}>
      <textarea
        value={value}
        className={`${s.Textarea} ${error ? s.Error : ''}`}
        name={name}
        maxLength={maxLength}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default BaseTextareaApp;
