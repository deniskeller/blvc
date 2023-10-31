import React, { MutableRefObject, ReactNode } from 'react';
import s from './ResetFilterButton.module.scss';

interface Props {
  ref?: MutableRefObject<null>;
  disabled?: boolean;
  className?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const ResetFilterButton: React.FC<Props> = ({
  disabled = false,
  className = '',
  ref,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${s.Button} ${className}`}
      ref={ref}
    >
      Default
    </button>
  );
};

export default ResetFilterButton;
