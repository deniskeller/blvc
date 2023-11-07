import React, { useState, useRef } from 'react';
import s from './HeaderFilterVehicle.module.scss';
import { BaseButtonApp, BaseSelectApp } from '@base/index';
import { FilterButton, FilterResetButton } from '..';
import { VehicleParametersPopup } from 'components/dashboard/modals';
import { useRouter } from 'next/router';

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

const HeaderFilterVehicle: React.FC<Props> = ({}) => {
  const router = useRouter();
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

  const [isFocus, setIsFocus] = useState(false);
  const refVehicleSearchInput = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (refVehicleSearchInput.current !== null) {
      refVehicleSearchInput.current.focus();
    }
  };

  // МОБИЛЬНЫЙ ФИЛЬТР
  const [openedParametersPopup, setOpenedParametersPopup] = useState(false);

  return (
    <>
      <div className={`${s.Filter} ${scroll >= 189 ? s.Filter_Visible : ''}`}>
        <div
          className={`${s.Content} ${visibleFilter ? s.Content_Visible : ''}`}
        >
          <>
            <div className={s.Search}>
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
                        strokeOpacity={
                          !filters.search && !isFocus ? '0.6' : '1'
                        }
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
          </>
        </div>

        <FilterButton
          className={`${s.Burger} ${scroll >= 189 ? s.Burger_Visible : ''} ${
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
          className={`${s.Burger} ${scroll >= 189 ? s.Burger_Visible : ''} ${
            s.Burger_Mobile
          }`}
          counter={1}
          onClick={() => setOpenedParametersPopup(true)}
        />

        <BaseButtonApp
          className={`${s.AddProduct} ${
            scroll >= 189 ? s.AddProduct_Visible : ''
          }`}
          onClick={() => router.push('/dashboard/create-vehicle')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
          >
            <path
              d="M6.99967 2.33398V11.6673M11.6663 7.00065L2.33301 7.00065"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Add car
        </BaseButtonApp>
      </div>

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <VehicleParametersPopup
        opened={openedParametersPopup}
        onClick={setOpenedParametersPopup}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedParametersPopup(false);
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

export default HeaderFilterVehicle;
