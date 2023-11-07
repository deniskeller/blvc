import React, { SyntheticEvent } from 'react';
import s from './FilterResetButton.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className?: string;
  onClick?: (e: SyntheticEvent<Element, Event>) => void;
}

const FilterResetButton: React.FC<Props> = ({ className = '', onClick }) => {
  return (
    <>
      <BaseIcon
        viewBox="0 0 24 24"
        icon={ALL_ICONS.FILTER_RESET}
        className={`${s.Reset} ${className}`}
        onClick={onClick}
      />
    </>
  );
};

export default FilterResetButton;
