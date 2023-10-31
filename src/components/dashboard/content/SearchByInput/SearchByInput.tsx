import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React, { useState } from 'react';
import s from './SearchByInput.module.scss';

interface Props {
  label?: string;
  className?: string;
  initialValue?: string;
  options: ISelectItem[];
  onSelect: (value: string) => void;
  onChange(value: string): void;
}

interface ISelectItem {
  value: string;
  label: string;
}

const SearchByInput: React.FC<Props> = ({
  label,
  className,
  initialValue,
  options,
  onSelect,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(initialValue);
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    const item = options.filter((item) => {
      return item.value == value;
    })[0].label;
    setSelectedOption(item);
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <div className={`${s.SearchByInput} ${className}`} ref={selectContainerRef}>
      <div className={s.SearchByInput_IconSearch}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22" fill="none">
          <g clipPath="url(#clip0_10581_22632)">
            <path
              d="M18.4509 17.4509L22.5423 21.5423M12.465 19.9299C7.78989 19.9299 4 16.1401 4 11.465C4 6.78989 7.78989 3 12.465 3C17.1401 3 20.9299 6.78989 20.9299 11.465C20.9299 16.1401 17.1401 19.9299 12.465 19.9299Z"
              stroke={isFocus ? '#A61613' : '#1A1A1A'}
              strokeOpacity={!value && !isFocus ? '0.6' : '1'}
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_10581_22632">
              <rect width="23" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <input
        type="text"
        placeholder="Search"
        className={s.SearchByInput_Input}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
      />

      <div
        className={`${s.SearchByInput_Select}  ${
          isOpen ? s.SearchByInput_Select_Focus : ''
        }`}
        onClick={toggling}
      >
        <p
          className={`${selectedOption ? s.NotEmpty : ''}`}
          style={{ position: label ? 'absolute' : 'static' }}
        >
          {selectedOption || label}
        </p>

        <BaseIcon
          icon={ALL_ICONS.SELECT_CHEVRON_DASHBOARD}
          viewBox="0 0 11 6"
          className={`${s.Chevron} ${isOpen ? s.Chevron_Active : null}`}
        />
      </div>

      {isOpen && (
        <ul className={s.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={`${s.ListItem} ${
                selectedOption === option.label ? s.ListItem_Active : ''
              }`}
              onClick={onOptionClicked(option.value)}
              key={option.value}
            >
              <span className={s.ListItemTitle}>{option.label}</span>

              {selectedOption === option.label && (
                <BaseIcon
                  icon={ALL_ICONS.SELECT_CHECK}
                  viewBox="0 0 26 19"
                  className={s.ListItem_IconCheck}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchByInput;
