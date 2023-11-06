import React, { useEffect, useState } from 'react';
import s from './WebsiteForms.module.scss';
import {
  WebsiteFormsParametersPopup,
  WebsiteFormsRequestDetailsPopup,
} from 'components/dashboard/modals';
import {
  FilterButton,
  Pagination,
  SearchByInput,
} from 'components/dashboard/content';
import { BaseButtonApp, BaseIcon, BaseSelectApp } from '@base/index';
import toast from 'react-hot-toast';
import { ALL_ICONS } from '@constants/icons';

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
  const [openedWebsiteFormsParametersPopup, setWebsiteFormsParametersPopup] =
    useState(false);

  const [
    openedWebsiteFormsRequestDetailsPopup,
    setWebsiteFormsRequestDetailsPopup,
  ] = useState(false);

  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);

  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

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
            searchValue={filters.search}
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

          {/* <FilterButton
            className={s.Filters_Mobile}
            counter={1}
            onClick={() => setWebsiteFormsParametersPopup(true)}
          /> */}

          {/* <BaseButtonApp type="empty" onClick={() => setPartners([])}>
            default
          </BaseButtonApp> */}

          <BaseIcon
            viewBox="0 0 28 24"
            icon={ALL_ICONS.FILTER}
            className={s.Filters_Popup}
            onClick={() => setWebsiteFormsParametersPopup(true)}
          />

          {filters != initialFiltersState ? (
            <BaseIcon
              viewBox="0 0 24 24"
              icon={ALL_ICONS.FILTER_RESET}
              className={s.Filters_Reset}
              onClick={() => {
                setPartners([]);
                setFilters({
                  search: '',
                  sortBy: 'by_name',
                  forms: [{ value: 'all_forms', label: 'All forms' }],
                });
              }}
            />
          ) : null}
        </div>

        {partners?.length == 0 ? (
          <div className={s.EmptyCart}>
            <div className={s.EmptyCart_Decor}>
              <svg
                viewBox="0 0 309 358"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={s.Icon}
              >
                <path
                  d="M303.631 227.312C306.128 258.253 307.019 289.729 307.465 320.759C307.554 331.102 307.644 341.535 307.554 351.878C307.554 354.286 305.593 356.247 303.185 356.247C253.608 354.732 204.121 351.789 154.544 354.642C123.781 356.069 92.3942 356.515 61.6316 356.961C42.9957 357.228 24.3597 357.318 5.7238 357.05C2.95962 357.05 0.730469 354.732 0.730469 351.967L0.997959 336.542C1.44379 316.568 1.9788 294.901 2.7813 274.927C5.54548 213.045 6.08048 212.599 8.93382 274.927C10.0038 299.983 10.628 326.822 10.9847 351.878L5.90215 346.796C24.4489 346.528 43.0848 346.617 61.6316 346.885C92.4834 347.242 123.781 347.777 154.544 349.203C204.121 352.057 253.608 349.114 303.185 347.598L298.816 351.967C298.549 326.198 299.083 299.894 299.975 274.125C300.599 258.52 301.313 243.005 302.65 227.401C302.65 227.134 302.918 226.955 303.185 226.955C303.453 226.866 303.631 227.134 303.631 227.312Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M5.36658 132.689C2.8699 101.124 1.97824 69.4692 1.5324 37.8149C1.44324 27.2932 1.35407 16.7714 1.5324 6.16056C1.5324 3.75305 3.49407 1.79137 5.90159 1.79137C55.4785 3.39637 104.966 6.24972 154.543 3.39638C178.529 2.32637 204.744 1.61303 228.819 1.34553C253.608 0.899696 278.485 0.632195 303.274 0.899696C306.038 0.899696 308.356 3.21804 308.267 6.07139L308 21.854C307.554 37.1907 307.376 54.0433 306.751 69.2909C305.949 90.4235 305.146 111.467 303.541 132.51C303.541 132.778 303.274 132.956 303.006 132.956C302.739 132.956 302.56 132.778 302.56 132.51C301.758 121.989 301.223 111.467 300.688 100.856C299.172 69.5583 298.37 37.369 297.924 5.98222L303.095 11.1539C266.269 11.5997 228.463 10.7972 191.637 9.99474C154.454 8.83556 117.36 6.69556 80.1778 7.6764C55.3893 8.2114 30.6009 9.99474 5.90159 10.3514L10.2708 5.98222C10.5383 37.6365 9.82493 69.2017 8.39825 100.856C7.86325 111.378 7.32826 121.899 6.43659 132.51C6.43659 132.778 6.16909 132.956 5.90159 132.956C5.54492 133.134 5.36658 132.956 5.36658 132.689Z"
                  fill="#AEAEAE"
                />
                <path
                  d="M32.3848 132.689C32.0281 112.537 31.1365 72.0553 30.7798 51.9036C30.7798 50.7444 31.6715 49.8527 32.8306 49.8527L92.6617 48.8719C148.213 48.6044 216.604 45.8402 271.798 47.5344C274.295 47.4452 276.346 49.4961 276.257 51.9927C275.722 72.2337 274.919 92.3854 273.671 112.537C273.314 119.225 272.779 126.001 272.244 132.689C272.244 132.956 271.977 133.135 271.709 133.135C271.442 133.135 271.263 132.956 271.263 132.689C270.728 126.001 270.193 119.225 269.837 112.537C268.588 92.3854 267.875 72.1445 267.251 51.9927L271.709 56.4511C237.291 57.6994 187.268 56.6294 152.315 55.9161C122.622 55.5594 62.6124 54.6677 32.9198 54.0436L34.9706 51.9927C34.7031 72.1445 33.8115 112.626 33.3656 132.778C33.3656 133.046 33.0981 133.224 32.8306 133.224C32.6523 133.224 32.3848 132.956 32.3848 132.689Z"
                  fill="#AEAEAE"
                />
              </svg>

              <div className={s.Title}>
                <p>Nothing found</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={s.Table}>
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
                        onClick={() => setWebsiteFormsRequestDetailsPopup(true)}
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
            </div>
          </>
        )}
        {partners?.length != 0 ? <Pagination /> : null}
      </section>

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <WebsiteFormsParametersPopup
        opened={openedWebsiteFormsParametersPopup}
        onClick={setWebsiteFormsParametersPopup}
        onClick2={(e) => {
          e.preventDefault();
          setWebsiteFormsParametersPopup(false);
          setFilters({
            search: 'sdfsdfsd',
            sortBy: 'by_name',
            forms: [{ value: 'all_forms', label: 'All forms' }],
          });
        }}
      />

      {/* ДОБАВЛЕНИЕ ПАРТНЕРА */}
      <WebsiteFormsRequestDetailsPopup
        opened={openedWebsiteFormsRequestDetailsPopup}
        onClick={setWebsiteFormsRequestDetailsPopup}
        onClick2={() => {
          setWebsiteFormsRequestDetailsPopup(false);
          setTimeout(() => {
            toast.success('All changes saved', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />
    </>
  );
};

export default WebsiteForms;
