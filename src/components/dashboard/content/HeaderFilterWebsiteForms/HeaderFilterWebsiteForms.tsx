import React, { SyntheticEvent, useState } from 'react';
import s from './HeaderFilterWebsiteForms.module.scss';
import { BaseIcon, BaseSelectApp } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { FilterButton, FilterResetButton, SearchByInput } from '..';
import { WebsiteFormsParametersPopup } from 'components/dashboard/modals';

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

interface Props {}

const HeaderFilterWebsiteForms: React.FC<Props> = ({}) => {
  //ЛОГИКА ДЛЯ ФИЛЬТРОВ ПРИ СКРОЛЕ
  const [scroll, setScroll] = useState(0);
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScroll(scrollTop);
  });

  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);

  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  // МОБИЛЬНЫЙ ФИЛЬТР
  const [openedParametersPopup, setParametersPopup] = useState(false);

  return (
    <>
      <div className={`${s.Filter} ${scroll >= 300 ? s.Filter_Visible : ''}`}>
        <div
          className={`${s.Content} ${visibleFilter ? s.Content_Visible : ''}`}
        >
          <div className={s.Search}>
            <SearchByInput
              initialValue="by name"
              searchValue={filters.search}
              options={[
                { value: 'by_name', label: 'by name' },
                { value: 'by_email', label: 'by email' },
              ]}
              onSelect={(val: string) => setNewValue(val, 'sortBy')}
              onChange={(val: string) => setNewValue(val, 'search')}
              className={s.Search_Field}
            />
          </div>

          <div className={s.Forms}>
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
              className={s.Forms_Field}
            />
          </div>

          <FilterResetButton
            className={`${s.Reset} ${
              filters !== initialFiltersState ? s.Reset_Visible : ''
            }`}
            onClick={() => {
              setFilters({
                search: '',
                sortBy: 'by_name',
                forms: [{ value: 'all_forms', label: 'All forms' }],
              });
            }}
          />
        </div>

        <FilterButton
          className={`${s.Burger} ${scroll >= 300 ? s.Burger_Visible : ''} ${
            s.Burger_Desktop
          }`}
          counter={1}
          onClick={() => setVisibleFilter(!visibleFilter)}
        />

        <FilterResetButton
          className={`${s.Reset} ${
            filters !== initialFiltersState ? s.Reset_Visible : ''
          } ${s.Reset_Mobile}`}
          onClick={() => {
            setFilters({
              search: '',
              sortBy: 'by_name',
              forms: [{ value: 'all_forms', label: 'All forms' }],
            });
          }}
        />

        <FilterButton
          className={`${s.Burger} ${scroll >= 300 ? s.Burger_Visible : ''} ${
            s.Burger_Mobile
          }`}
          counter={1}
          onClick={() => setParametersPopup(true)}
        />
      </div>

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <WebsiteFormsParametersPopup
        opened={openedParametersPopup}
        onClick={setParametersPopup}
        onClick2={(e) => {
          e.preventDefault();
          setParametersPopup(false);
          setFilters({
            search: 'sdfsdfsd',
            sortBy: 'by_name',
            forms: [{ value: 'all_forms', label: 'All forms' }],
          });
        }}
      />
    </>
  );
};

export default HeaderFilterWebsiteForms;
