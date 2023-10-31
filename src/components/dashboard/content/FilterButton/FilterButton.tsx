import React from 'react';
import s from './FilterButton.module.scss';

interface Props {
  className?: string;
  counter: number;
  title?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const FilterButton: React.FC<Props> = ({
  title = 'Filter/search',
  className = '',
  counter,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${s.Button}`}
      style={{
        borderColor: counter >= 1 ? '#A61613' : 'rgba(26, 26, 26, 0.2)',
      }}
    >
      <span style={{ color: counter >= 1 ? '#121212' : '#454545' }}>
        {title} {counter >= 1 ? ' ' + '(' + counter + ')' : null}
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
        fill="none"
      >
        <path
          d="M1 4C1 3.44772 1.44772 3 2 3H18C18.5523 3 19 3.44772 19 4V6.58579C19 6.851 18.8946 7.10536 18.7071 7.29289L12.2929 13.7071C12.1054 13.8946 12 14.149 12 14.4142V17L8 21V14.4142C8 14.149 7.89464 13.8946 7.70711 13.7071L1.29289 7.29289C1.10536 7.10536 1 6.851 1 6.58579V4Z"
          stroke="#1A1A1A"
          strokeOpacity="0.3"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FilterButton;
