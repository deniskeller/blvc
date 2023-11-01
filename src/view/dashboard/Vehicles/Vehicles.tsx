import React, { useState } from 'react';
import s from './Vehicles.module.scss';
import {
  FilterButton,
  Pagination,
  ResetFilterButton,
  VehiclesCard,
} from 'components/dashboard/content';
import { InviteUserPopup } from 'components/dashboard/modals';
import { BaseButtonApp, BaseSelectApp } from '@base/index';

const vehicles_list = [
  {
    id: 1,
    status: 'hidden',
    image: '/pictures/images/test-car.jpg',
    availability: false,
    name: 'Audi S5 Cabriolet TFSI',
    tags: ['2018', '249 HP', 'Petrol', 'Automatic'],
    total_price: '€184.790,00',
    monthly_payment: '€20.344,50',
  },
  {
    id: 2,
    status: 'published',
    image: '/pictures/images/test-car.jpg',
    availability: true,
    name: 'Audi S5 Cabriolet TFSI',
    tags: ['2018', '249 HP', 'Petrol', 'Automatic'],
    total_price: '€184.790,00',
    monthly_payment: '€20.344,50',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let vehicle = {
  id: 3,
  status: 'hidden',
  image: '/pictures/images/test-car.jpg',
  availability: false,
  name: 'Audi S5 Cabriolet TFSI',
  tags: ['2018', '249 HP', 'Petrol', 'Automatic'],
  total_price: '€184.790,00',
  monthly_payment: '€20.344,50',
};

for (let i = 1; i < 30; i++) {
  vehicles_list.push({
    ...vehicle,
    id: i,
    name: vehicle.name + ' ' + i,
  });
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

const Vehicles: React.FC = () => {
  const [openedInviteUserPopup, setOpenedInviteUserPopup] = useState(false);

  const [isFocus, setIsFocus] = useState(false);

  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  const [vehicles, setVehicles] = useState(vehicles_list);

  return (
    <>
      <section className={s.Vehicles}>
        <div className={s.Header}>
          <h1 className={s.Header_Title}>Vehicles</h1>
        </div>

        <div className={s.Filters}>
          <div className={s.Filters_Search}>
            <div className={s.Filters_Search_IconSearch}>
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
              value={filters.search}
              type="text"
              placeholder="Search by name"
              className={s.Filters_Search_Input}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setNewValue(e.target.value, 'search')
              }
            />
          </div>

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

          <FilterButton
            className={s.Filters_Mobile}
            counter={1}
            // onClick={() => setWebsiteFormsParametersPopup(true)}
          />

          <ResetFilterButton
            className={s.Filters_Reset}
            onClick={() => setVehicles([])}
          />

          <BaseButtonApp
            className={s.Filters_AddCar}
            onClick={() => alert('add car')}
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

        {vehicles?.length == 0 ? (
          <div className={s.EmptyCart}>
            <div className={s.EmptyCart_Decor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="454"
                height="156"
                viewBox="0 0 454 156"
                fill="none"
                className={s.Icon}
              >
                <path
                  d="M434.728 58.6452C421.179 58.6452 407.05 67.5484 401.825 72.9677C396.599 78.3871 388.276 72.9677 388.276 72.9677C388.276 72.9677 369.115 33.2903 354.212 18.1935C339.308 3.09676 271.954 0 227.05 0C182.147 0 114.792 2.90321 99.8891 18.1935C84.9859 33.2903 65.8246 72.9677 65.8246 72.9677C65.8246 72.9677 57.5021 78.3871 52.2762 72.9677C47.0504 67.5484 32.9214 58.6452 19.373 58.6452C5.82464 58.6452 -9.65925 73.3548 9.88914 82.8387C29.4375 92.3226 35.0504 82.0645 42.7924 84.1935C32.1472 95.2258 19.5666 96.5806 16.2762 117.097C12.9859 137.613 18.7924 156 18.7924 156C18.7924 156 18.0182 126.774 22.0827 115.355C26.5343 103.161 53.244 86.129 77.0504 81.0968C100.857 76.0645 190.47 75.4839 190.47 75.4839C164.728 72.9677 129.115 71.6129 105.696 70.8387C107.631 67.5484 111.502 61.7419 115.76 59.4193C121.76 56.129 226.857 55.1613 226.857 55.1613C226.857 55.1613 331.954 56.129 337.954 59.4193C342.212 61.7419 345.889 67.5484 348.018 70.8387C324.599 71.6129 288.986 72.9677 263.244 75.4839C263.244 75.4839 352.857 76.0645 376.663 81.0968C400.47 86.129 427.373 103.161 431.631 115.355C435.696 126.774 434.921 156 434.921 156C434.921 156 440.728 137.806 437.438 117.097C434.147 96.5806 421.566 95.2258 410.921 84.1935C418.47 82.0645 424.276 92.3226 443.825 82.8387C463.76 73.3548 448.276 58.6452 434.728 58.6452ZM364.47 70.4516C356.341 62.9032 345.696 51.871 338.341 51.871C330.212 51.871 227.438 49.3548 227.438 49.3548C227.438 49.3548 124.47 51.871 116.534 51.871C109.179 51.871 98.5343 62.9032 90.4053 70.4516C85.5666 70.258 82.6633 70.2581 82.6633 70.2581C87.3085 45.871 102.405 24.9677 119.631 17.2258C136.663 9.48386 227.631 5.61289 227.631 5.61289C227.631 5.61289 318.599 9.48386 335.631 17.2258C352.663 24.9677 367.954 45.871 372.599 70.2581C372.212 70.2581 369.308 70.258 364.47 70.4516Z"
                  fill="#1A1A1A"
                  fillOpacity="0.3"
                />
              </svg>

              <div className={s.Title}>
                <p>Nothing found</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={s.Content}>
              {vehicles?.map((item, index) => {
                return (
                  <VehiclesCard
                    item={item}
                    key={index}
                    onClick={() => alert('go to carrent page')}
                  />
                );
              })}
            </div>
          </>
        )}
        {vehicles?.length != 0 ? <Pagination /> : null}
      </section>

      {/* ДОБАВЛЕНИЕ ПАРТНЕРА */}
      <InviteUserPopup
        opened={openedInviteUserPopup}
        onClick={setOpenedInviteUserPopup}
        onClick2={() => alert('Invite user')}
      />
    </>
  );
};

export default Vehicles;
