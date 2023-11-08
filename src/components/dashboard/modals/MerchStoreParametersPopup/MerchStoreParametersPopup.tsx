import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './MerchStoreParametersPopup.module.scss';
import { SearchByInput } from 'components/dashboard/content';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IFilterItem {
  label: string;
  value: string;
}

interface IFiltersState {
  date: IFilterItem[];
  price: IFilterItem[];
  status: IFilterItem[];
}

const initialFiltersState = {
  date: [{ value: 'old_to_recent', label: 'Date (old → recent)' }],
  price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
  status: [{ value: 'all_forms', label: 'All forms' }],
};

const MerchStoreParametersPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  const [filters, setFilters] = useState<IFiltersState>(initialFiltersState);
  const setNewValue = (
    value: IFilterItem | IFilterItem[] | string,
    prop: keyof IFiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title}>Parameters</BaseTitleApp>

      <form className={s.Form}>
        <ul className={s.Form_Inputs}>
          <li>
            <BaseSelectApp
              name="date"
              value={filters.date}
              placeholder="Date"
              options={[
                { value: 'old_to_recent', label: 'Date (old → recent)' },
                { value: 'recent_to_old', label: 'Date (recent → old)' },
              ]}
              onChange={(val: IFilterItem[] | IFilterItem) =>
                setNewValue(val, 'date')
              }
              onClear={() => {}}
              onBlur={() => {}}
              className={s.Date}
            />
          </li>

          <li>
            <BaseSelectApp
              name="price"
              value={filters.price}
              placeholder="Price"
              options={[
                { value: 'min_to_max', label: 'Price (min → max)' },
                { value: 'max_to_min', label: 'Price (max → min)' },
              ]}
              onChange={(val: IFilterItem[] | IFilterItem) =>
                setNewValue(val, 'price')
              }
              onClear={() => {}}
              onBlur={() => {}}
              className={s.Price}
            />
          </li>

          <li>
            <BaseSelectApp
              name="status"
              value={filters.status}
              placeholder="Status"
              options={[
                { value: 'all_forms', label: 'All forms' },
                { value: 'published', label: 'Published' },
                { value: 'hidden', label: 'Hidden' },
              ]}
              onChange={(val: IFilterItem[] | IFilterItem) =>
                setNewValue(val, 'status')
              }
              onClear={() => {}}
              onBlur={() => {}}
              className={s.Status}
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

export default MerchStoreParametersPopup;
