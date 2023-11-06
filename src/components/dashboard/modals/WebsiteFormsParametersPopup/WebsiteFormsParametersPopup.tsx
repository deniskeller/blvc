import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './WebsiteFormsParametersPopup.module.scss';
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

const WebsiteFormsParametersPopup: React.FC<Props> = ({
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

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title}>Parameters</BaseTitleApp>

      <form className={s.Form}>
        <ul className={s.Form_Inputs}>
          <li className={s.Search}>
            <SearchByInput
              searchValue={filters.search}
              initialValue="by name"
              options={[
                { value: 'by_name', label: 'by name' },
                { value: 'by_email', label: 'by email' },
              ]}
              onSelect={(val: string) => setNewValue(val, 'sortBy')}
              onChange={(val: string) => setNewValue(val, 'search')}
              className={s.Filters_Search}
            />
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

export default WebsiteFormsParametersPopup;
