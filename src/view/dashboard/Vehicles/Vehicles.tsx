import React, { useState } from 'react';
import s from './Vehicles.module.scss';
import {
  FilterButton,
  ResetFilterButton,
  VehiclesCard,
} from 'components/dashboard/content';
import { InviteUserPopup } from 'components/dashboard/modals';
import { BaseButtonApp, BaseSelectApp } from '@base/index';

const vehicles_list = [
  {
    id: 1,
    status: 'Hidden',
    image: '/pictures/image/test-car.jpg',
    availability: false,
    name: 'Audi S5 Cabriolet TFSI',
    tags: [
      '2018',
      '249 HP',
      'Petrol',
      'Automatic',
      '249 HP',
      'Petrol',
      'Automatic',
    ],
    total_price: '€184.790,00',
    monthly_payment: '€20.344,50',
  },
  {
    id: 2,
    status: 'Published',
    image: '/pictures/image/test-car.jpg',
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
  status: 'Published',
  image: '/pictures/image/test-car.jpg',
  availability: true,
  name: 'Audi S5 Cabriolet TFSI',
  tags: ['2018', '249 HP', 'Petrol', 'Automatic'],
  total_price: '€184.790,00',
  monthly_payment: '€20.344,50',
};

for (let i = 1; i < 3; i++) {
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
            //  onClick={() => setPartners([])}
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

        <div className={s.Content}>
          {vehicles_list?.map((item, index) => {
            return (
              <VehiclesCard
                item={item}
                key={index}
                onClick={() => alert('go to carrent page')}
              />
            );
          })}
        </div>
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
