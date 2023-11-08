import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import s from './BaseTextareaApp.module.scss';

interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
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
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);

  const onBlur = () => {
    if (refTextarea.current != null) {
      const scrollHeight = refTextarea.current.scrollHeight;
      refTextarea.current.style.height = scrollHeight + 'px';
    }
  };

  useEffect(() => {
    if (refTextarea.current != null) {
      refTextarea.current.style.height = 'inherit';
      refTextarea.current.style.height =
        refTextarea.current.scrollHeight + 'px';
    }

    setTimeout(() => {
      if (refTextarea.current != null && value.length > 1) {
        refTextarea.current.style.height = 'initial';
        refTextarea.current.style.height =
          refTextarea.current.scrollHeight + 'px';
      }
    }, 10);
  }, [value]);

  return (
    <div className={`${s.BaseTextarea} ${className}`}>
      <textarea
        ref={refTextarea}
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
        onBlur={onBlur}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          {label}
        </label>
      ) : null}

      {maxLength ? (
        <span className={s.Counter}>
          {value.length}/{maxLength}
        </span>
      ) : null}
    </div>
  );
};
export default BaseTextareaApp;
