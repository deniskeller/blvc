import React, { SyntheticEvent } from 'react';
import s from './FilterButton.module.scss';

interface Props {
  className?: string;
  counter: number;
  onClick?: (e: SyntheticEvent<Element, Event>) => void;
}

const FilterButton: React.FC<Props> = ({
  className = '',
  counter,
  onClick,
}) => {
  return (
    <div className={`${className} ${s.Filter}`}>
      <div className={s.Filter_Counter}>
        <span>{counter}</span>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 27 27"
        fill="none"
        className={s.Filter_Icon}
        onClick={onClick}
      >
        <path
          d="M1.6875 6.52539L25.3125 6.52539"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
          strokeLinecap="round"
        />
        <path
          d="M1.6875 13.2754L25.3125 13.2754"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
          strokeLinecap="round"
        />
        <path
          d="M1.6875 20.0254L25.3125 20.0254"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
          strokeLinecap="round"
        />
        <circle
          data-key="1"
          cx="11.418"
          cy="13.2188"
          r="2.25"
          fill="#EFEFEF"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
        />
        <circle
          data-key="2"
          cx="20.5312"
          cy="6.46875"
          r="2.25"
          fill="#EFEFEF"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
        />
        <circle
          data-key="3"
          cx="20.5312"
          cy="19.9688"
          r="2.25"
          fill="#EFEFEF"
          stroke="#1A1A1A"
          strokeWidth="1.6875"
        />
      </svg>
    </div>
  );
};

export default FilterButton;
