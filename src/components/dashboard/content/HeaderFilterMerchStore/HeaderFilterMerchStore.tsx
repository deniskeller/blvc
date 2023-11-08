import React, { useState, useRef } from 'react';
import s from './HeaderFilterMerchStore.module.scss';
import { BaseButtonApp, BaseSelectApp } from '@base/index';
import { FilterButton, FilterResetButton } from '..';
import {
  ConfirmPopup,
  CreateMerchPopup,
  MerchStoreParametersPopup,
  VehicleParametersPopup,
} from 'components/dashboard/modals';
import { useRouter } from 'next/router';

interface IFilterItem {
  label: string;
  value: string;
}

interface IFiltersState {
  tabs: IFilterItem[];
  date: IFilterItem[];
  price: IFilterItem[];
  status: IFilterItem[];
}

const initialFiltersState = {
  tabs: [{ value: 'men', label: 'Men' }],
  date: [{ value: 'old_to_recent', label: 'Date (old → recent)' }],
  price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
  status: [{ value: 'all_forms', label: 'All forms' }],
};

interface Props {}

const HeaderFilterMerchStore: React.FC<Props> = ({}) => {
  const router = useRouter();
  //ЛОГИКА ДЛЯ ФИЛЬТРОВ ПРИ СКРОЛЕ
  const [scroll, setScroll] = useState(0);
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScroll(scrollTop);
  });

  // фильтры
  const [filters, setFilters] = useState<IFiltersState>(initialFiltersState);
  const [visibleFilter, setVisibleFilter] = useState<boolean>(false);

  const setNewValue = (
    value: IFilterItem | IFilterItem[] | string,
    prop: keyof IFiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  // МОБИЛЬНЫЙ ФИЛЬТР
  const [openedParametersPopup, setOpenedParametersPopup] = useState(false);

  //ДОБАВЛЕНИЕ ТОВАРА
  const [openedCreateMerchPopup, setOpenedCreateMerchPopup] = useState(false);
  // ПОДТВЕРЖДЕНИЕ ЗАКРЫТИЕ МОДАЛКИ ДОБАВЛЕНИЯ ТОВАРА
  const [openedConfirmLeavePagePopup, setOpenedConfirmLeavePagePopup] =
    useState(false);

  // обработка покидания страницы
  const confirmLeavePageHandler = () => {
    setOpenedConfirmLeavePagePopup(false);
    setOpenedCreateMerchPopup(false);
  };

  return (
    <>
      <div className={`${s.Filter} ${scroll >= 189 ? s.Filter_Visible : ''}`}>
        <div
          className={`${s.Content} ${visibleFilter ? s.Content_Visible : ''}`}
        >
          <>
            <div className={s.Tabs}>
              <BaseSelectApp
                name="tabs"
                value={filters.tabs}
                placeholder="Tabs"
                options={[
                  { value: 'men', label: 'Men' },
                  { value: 'women', label: 'Women' },
                  { value: 'accessories', label: 'Accessories' },
                ]}
                onChange={(val: IFilterItem[] | IFilterItem) =>
                  setNewValue(val, 'tabs')
                }
                onClear={() => {}}
                onBlur={() => {}}
                className={s.Tabs_Select}
              />
            </div>
            <div className={s.Date}>
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
                className={s.Date_Select}
              />
            </div>

            <div className={s.Price}>
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
                className={s.Price_Select}
              />
            </div>

            <div className={s.Status}>
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
                className={s.Status_Select}
              />
            </div>

            <FilterResetButton
              className={`${s.Reset} ${
                filters !== initialFiltersState ? s.Reset_Visible : ''
              }`}
              onClick={() => {
                setFilters({
                  tabs: [{ value: 'men', label: 'Men' }],
                  date: [
                    { value: 'old_to_recent', label: 'Date (old → recent)' },
                  ],
                  price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
                  status: [{ value: 'all_forms', label: 'All forms' }],
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
              tabs: [{ value: 'men', label: 'Men' }],
              date: [{ value: 'old_to_recent', label: 'Date (old → recent)' }],
              price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
              status: [{ value: 'all_forms', label: 'All forms' }],
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
          onClick={() => setOpenedCreateMerchPopup(true)}
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
          Add product
        </BaseButtonApp>
      </div>

      {/* ДОБАВЛЕНИЕ ТОВАРА */}
      <CreateMerchPopup
        opened={openedCreateMerchPopup}
        onClick={setOpenedCreateMerchPopup}
        onClick2={() => setOpenedConfirmLeavePagePopup(true)}
      />

      {/* ПОДТВЕРЖДЕНИЕ ЗАКРЫТИЕ МОДАЛКИ ДОБАВЛЕНИЯ ТОВАРА */}
      <ConfirmPopup
        title="Are you sure you want to leave this window?"
        subtitle="If you close the window before the product is published, all data will be deleted."
        opened={openedConfirmLeavePagePopup}
        onClick={setOpenedConfirmLeavePagePopup}
        onClick2={confirmLeavePageHandler}
      />

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <MerchStoreParametersPopup
        isHeader
        opened={openedParametersPopup}
        onClick={setOpenedParametersPopup}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedParametersPopup(false);
          setFilters({
            tabs: [{ value: 'men', label: 'Men' }],
            date: [{ value: 'old_to_recent', label: 'Date (old → recent)' }],
            price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
            status: [{ value: 'all_forms', label: 'All forms' }],
          });
        }}
      />
    </>
  );
};

export default HeaderFilterMerchStore;
