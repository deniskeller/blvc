import React from 'react';
import s from './StepBack.module.scss';

interface Props {
  className?: string;
  onClick: (ev: React.MouseEvent<HTMLDivElement>) => void;
}

const StepBack: React.FC<Props> = ({ className = '', onClick }) => {
  return (
    <div className={`${s.Back} ${className}`} onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 10"
        fill="none"
        className={s.Back_Icon}
      >
        <path
          opacity="0.5"
          d="M-3.8147e-06 5L7.5 9.33013V0.669873L-3.8147e-06 5ZM60 4.25L6.75 4.25V5.75L60 5.75V4.25Z"
          fill="#1A1A1A"
          fillOpacity="0.3"
        />
      </svg>

      <span className={s.Back_Label}>Back</span>
    </div>
  );
};

export default StepBack;
