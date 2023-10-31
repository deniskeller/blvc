import React, { useEffect, useState } from 'react';
import s from './WebsiteForms.module.scss';
import { InviteUserPopup } from 'components/dashboard/modals';
import {
  FilterButton,
  Pagination,
  ResetFilterButton,
  SearchByInput,
} from 'components/dashboard/content';
import { BaseSelectApp } from '@base/index';

const partner_list = [
  {
    id: 1,
    date: '28/08/2023',
    form: 'Contact us',
    full_name: 'Adam Courtney',
    email: 'marianewman@gmail.com',
    status: 'Incoming',
  },
  {
    id: 2,
    date: '28/08/2023',
    form: 'Contact us',
    full_name: 'Thomassdfsdf Fergussonsdfsdf sdfgdfgfdgfd',
    email: 'marianewman@gmail.com',
    status: 'Completed',
  },
  {
    id: 3,
    date: '28/08/2023',
    form: 'Contact us',
    full_name: 'Thomas Fergusson',
    email: 'marianewman@gmail.com',
    status: 'In progress',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let partner = {
  id: 4,
  date: '28/08/2023',
  form: 'Contact us',
  full_name: 'Thomas Fergusson',
  email: 'marianewman@gmail.com',
  status: 'In progress',
};

for (let i = 1; i < 30; i++) {
  partner_list.push({
    ...partner,
    id: i,
    full_name: partner.full_name + ' ' + i,
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

const WebsiteForms: React.FC = () => {
  const [openedInviteUserPopup, setOpenedInviteUserPopup] = useState(false);

  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  // useEffect(() => {
  //   console.log('filters: ', filters);
  // }, [filters]);

  const [partners, setPartners] = useState(partner_list);

  const computedStatusBackground = (status: string) => {
    if (status == 'Incoming') return '#338AF3';
    if (status == 'Completed') return '#217C51';
    if (status == 'In progress') return '#0052B4';
  };

  return (
    <>
      <section className={s.WebsiteForms}>
        <div className={s.Header}>
          <h1 className={s.Header_Title}>Website forms</h1>
        </div>

        <div className={s.Filters}>
          <SearchByInput
            initialValue="by name"
            options={[
              { value: 'by_name', label: 'by name' },
              { value: 'by_email', label: 'by email' },
            ]}
            onSelect={(val: string) => setNewValue(val, 'sortBy')}
            onChange={(val: string) => setNewValue(val, 'search')}
            className={s.Filters_Search}
          />

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

          <FilterButton className={s.Filters_Mobile} counter={1} />

          <ResetFilterButton />
        </div>

        <div className={s.Table}>
          {partners?.length == 0 ? (
            <div className={s.EmptyCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                className={s.EmptyCart_Icon}
              >
                <circle
                  cx="38.3337"
                  cy="38.3337"
                  r="31.6667"
                  stroke="#E8ECF4"
                  strokeWidth="4"
                />
                <path
                  d="M61.667 61.667L73.3337 73.3337"
                  stroke="#E8ECF4"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              <div className={s.EmptyCart_Title}>
                <p>По вашему запросу ничего не найдено</p>
              </div>
              <div className={s.EmptyCart_Subtitle}>
                <p>
                  Измените параметры или вернитесь к предыдущим&nbsp;
                  <span onClick={() => setPartners(partner_list)}>
                    параметрам поиска
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className={s.ScrollWrapper}>
                <div className={s.THead}>
                  <div className={s.THead_Column}>
                    <span>Date</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={s.IconSortBy}
                    >
                      <path
                        d="M6.875 12.5L10 15.625L13.125 12.5M6.875 7.5L10 4.375L13.125 7.5"
                        stroke="#6E7079"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Form</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Full name</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Email</span>
                  </div>

                  <div className={s.THead_Column}>
                    <span>Status</span>
                  </div>
                </div>

                <div className={s.TBody}>
                  {partners?.map((item, index) => {
                    return (
                      <div
                        className={s.TBody_Row}
                        key={index}
                        // onClick={() =>
                        //   router.push(`/dashboard/admin/partners/` + item.id)
                        // }
                      >
                        <div className={s.TBody_Row_Column}>
                          <span className={s.Date}>{item.date}</span>
                        </div>

                        <div className={s.TBody_Row_Column}>
                          <span className={s.Form}>{item.form}</span>
                        </div>

                        <div className={s.TBody_Row_Column}>
                          <span className={s.Name}>{item.full_name}</span>
                        </div>

                        <div className={s.TBody_Row_Column}>
                          <span className={s.Email}>{item.email}</span>
                        </div>

                        <div className={s.TBody_Row_Column}>
                          <span
                            className={s.Marker}
                            style={{
                              background: computedStatusBackground(item.status),
                            }}
                          ></span>
                          <span className={s.Status}>{item.status}</span>

                          <div className={s.New}>
                            <span>New</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {partners?.length != 0 ? <Pagination /> : null}
        </div>
      </section>

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <InviteUserPopup
        opened={openedInviteUserPopup}
        onClick={setOpenedInviteUserPopup}
        onClick2={() => alert('Invite user')}
      />
    </>
  );
};

export default WebsiteForms;
