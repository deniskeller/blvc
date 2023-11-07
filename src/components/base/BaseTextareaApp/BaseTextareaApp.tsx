import React, { useRef, useState, useEffect } from 'react';
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
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);
  const [height, setHeight] = useState(50);

  useEffect(() => {
    if (refTextarea.current != null) {
      const scrollHeight = refTextarea.current.scrollHeight;
      refTextarea.current.style.height = scrollHeight + 'px';
    }
    // setHeight(0);
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
        onBlur={() => setHeight(0)}
        style={{
          height: refTextarea.current?.scrollHeight + 'px',
        }}
      />

      {label ? (
        <label className={`${s.Label} ${value ? s.NoEmpty : ''}`}>
          {label}
        </label>
      ) : null}

      <span className={s.Counter}>
        {length}/{maxLength}
      </span>
    </div>
  );
};
export default BaseTextareaApp;
