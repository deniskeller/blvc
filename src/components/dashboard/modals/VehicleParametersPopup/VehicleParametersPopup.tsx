import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useRef } from 'react';
import s from './VehicleParametersPopup.module.scss';
import { SearchByInput } from 'components/dashboard/content';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface FilterItem {
  label: string;
  value: string;
}

interface FiltersState {
  sortBy: string;
  search: string;
  forms: FilterItem[];
}

const initialFiltersState = {
  search: '',
  sortBy: 'by_name',
  forms: [{ value: 'all_forms', label: 'All forms' }],
};

const VehicleParametersPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  const [isFocus, setIsFocus] = useState(false);
  const refVehicleSearchInput = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (refVehicleSearchInput.current !== null) {
      refVehicleSearchInput.current.focus();
    }
  };

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title}>Parameters</BaseTitleApp>

      <form className={s.Form}>
        <ul className={s.Form_Inputs}>
          <li className={s.Search}>
            <div className={s.Search_Field}>
              <div className={s.Search_Field_IconSearch} onClick={focusInput}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <g clipPath="url(#clip0_10581_22632)">
                    <path
                      d="M18.4509 17.4509L22.5423 21.5423M12.465 19.9299C7.78989 19.9299 4 16.1401 4 11.465C4 6.78989 7.78989 3 12.465 3C17.1401 3 20.9299 6.78989 20.9299 11.465C20.9299 16.1401 17.1401 19.9299 12.465 19.9299Z"
                      stroke={isFocus ? '#A61613' : '#1A1A1A'}
                      strokeOpacity={!filters.search && !isFocus ? '0.6' : '1'}
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
                ref={refVehicleSearchInput}
                value={filters.search}
                type="text"
                placeholder="Search by name"
                className={s.Search_Field_Input}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setNewValue(e.target.value, 'search')
                }
              />
            </div>
          </li>

          <li className={s.Select}>
            <BaseSelectApp
              name="forms"
              value={filters.forms}
              placeholder="Forms"
              options={[
                { value: 'all_forms', label: 'All forms' },
                { value: 'published', label: 'Published' },
                { value: 'hidden', label: 'Hidden' },
              ]}
              onChange={(val: FilterItem[] | FilterItem) =>
                setNewValue(val, 'forms')
              }
              onClear={() => {}}
              onBlur={() => {}}
              className={s.Filters_Forms}
            />
          </li>
        </ul>

        <div className={s.Form_Buttons}>
          <BaseButtonApp
            type="secondary"
            className={s.Button}
            onClick={(e) => {
              e.preventDefault();
              onClick(false);
            }}
          >
            Cancel
          </BaseButtonApp>

          <BaseButtonApp className={s.Button} onClick={onClick2}>
            apply
          </BaseButtonApp>
        </div>
      </form>
    </BasePopup>
  );
};

export default VehicleParametersPopup;
