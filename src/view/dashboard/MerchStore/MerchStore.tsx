import React, { useState } from 'react';
import s from './MerchStore.module.scss';
import {
  FilterButton,
  FilterResetButton,
  MerchCard,
  Pagination,
} from 'components/dashboard/content';
import {
  ConfirmPopup,
  CreateMerchPopup,
  MerchStoreParametersPopup,
} from 'components/dashboard/modals';
import { BaseButtonApp, BaseSelectApp } from '@base/index';
import toast from 'react-hot-toast';

const merch_list = [
  {
    id: 1,
    status: 'hidden',
    image: '/pictures/images/test-merch.png',
    availability: false,
    name: 'T-shirt Loose Fit Logo Black',
    tags: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    price: '€30',
  },
  {
    id: 2,
    status: 'published',
    image: '/pictures/images/test-merch.png',
    availability: true,
    name: 'T-shirt Loose Fit Logo Black',
    tags: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    price: '€30',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let product = {
  id: 3,
  status: 'hidden',
  image: '/pictures/images/test-merch.png',
  availability: false,
  name: 'T-shirt Loose Fit Logo Black',
  tags: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
  price: '€30',
};

for (let i = 1; i < 30; i++) {
  merch_list.push({
    ...product,
    id: i,
    name: product.name + ' ' + i,
  });
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

const MerchStore: React.FC = () => {
  //ДОБАВЛЕНИЕ ТОВАРА
  const [openedCreateMerchPopup, setOpenedCreateMerchPopup] = useState(false);
  // ПОДТВЕРЖДЕНИЕ ЗАКРЫТИЕ МОДАЛКИ ДОБАВЛЕНИЯ ТОВАРА
  const [openedConfirmLeavePagePopup, setOpenedConfirmLeavePagePopup] =
    useState(false);
  // ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ТОВАРА
  const [openedConfirmDeleteItemPopup, setOpenedConfirmDeleteItemPopup] =
    useState(false);

  // фильтры
  const [filters, setFilters] = useState<IFiltersState>(initialFiltersState);
  const setNewValue = (
    value: IFilterItem | IFilterItem[] | string,
    prop: keyof IFiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };
  //мобильный фильтр
  const [openedMerchStoreParametersPopup, setOpenedMerchStoreParametersPopup] =
    useState(false);

  // товары
  const [merchList, setMerchList] = useState(merch_list);

  // обработка покидания страницы
  const confirmLeavePageHandler = () => {
    setOpenedConfirmLeavePagePopup(false);
    setOpenedCreateMerchPopup(false);
  };

  //табы
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section className={s.MerchStore}>
        <div className={s.Header}>
          <h1 className={s.Header_Title}>Merch store</h1>
        </div>

        <div className={s.Filters}>
          <ul className={s.Tabs}>
            <li
              className={`${s.Tabs_Item} ${
                activeTab == 0 ? s.Tabs_Item_Active : ''
              }`}
              onClick={() => setActiveTab(0)}
            >
              <span>Men</span>
            </li>
            <li
              className={`${s.Tabs_Item} ${
                activeTab == 1 ? s.Tabs_Item_Active : ''
              }`}
              onClick={() => setActiveTab(1)}
            >
              <span>Women</span>
            </li>
            <li
              className={`${s.Tabs_Item} ${
                activeTab == 2 ? s.Tabs_Item_Active : ''
              }`}
              onClick={() => setActiveTab(2)}
            >
              <span>Accessories </span>
            </li>
          </ul>

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

          {filters != initialFiltersState || activeTab != 0 ? (
            <FilterResetButton
              className={s.Filters_Reset}
              onClick={() => {
                setMerchList([]);
                setFilters({
                  date: [
                    { value: 'old_to_recent', label: 'Date (old → recent)' },
                  ],
                  price: [{ value: 'min_to_max', label: 'Price (min → max)' }],
                  status: [{ value: 'all_forms', label: 'All forms' }],
                });
                setActiveTab(0);
              }}
            />
          ) : null}

          <FilterButton
            className={s.Filters_Burger}
            counter={1}
            onClick={() => setOpenedMerchStoreParametersPopup(true)}
          />

          <BaseButtonApp
            className={s.Filters_AddProduct}
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

        {merchList?.length == 0 ? (
          <div className={s.EmptyCart}>
            <div className={s.EmptyCart_Decor}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="213"
                height="165"
                viewBox="0 0 213 165"
                fill="none"
                className={s.Icon}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M134.082 50.6128L142.032 54.0377C142.948 54.4324 143.615 55.2714 143.833 56.2383C143.917 56.6113 143.935 57.0035 143.874 57.3966L142.935 63.8448C142.62 66.0505 142.672 68.2548 143.06 70.3826C143.119 70.7031 143.185 71.0219 143.258 71.3387C144.197 75.3731 146.355 79.084 149.511 81.9412C160.236 91.5759 171.766 102.059 175.347 105.774C182.488 113.252 207.76 144.085 212.237 153.479L212.253 153.513C212.447 153.899 212.593 154.294 212.701 154.694C213.628 157.936 212.289 161.52 209.199 163.151C209.123 163.192 209.046 163.232 208.967 163.271C205.356 165.058 200.985 163.565 199.265 159.927L199.265 159.925L199.131 159.59L199.131 159.589L199.105 159.523C199.104 159.523 199.104 159.522 199.104 159.521C198.751 158.662 198.392 157.806 198.026 156.952C194.589 148.923 190.589 141.125 185.897 133.665C180.753 125.431 174.895 117.559 168.466 110.11C162.037 102.66 155.103 95.6058 147.758 88.9875C147.743 88.9497 147.707 88.9204 147.665 88.8865C147.632 88.86 147.596 88.8306 147.564 88.7923C133.485 76.2085 115.675 68.5359 96.8585 66.9485C96.8207 66.9635 96.7745 66.9573 96.721 66.9501C96.6793 66.9446 96.6331 66.9384 96.583 66.9412C86.7281 66.1501 76.8385 65.9568 67.0082 66.4019C57.1779 66.847 47.4336 67.9977 37.9163 69.9148C28.352 71.8117 19.0682 74.6094 10.0518 78.0794C7.13389 79.1624 3.74242 78.3699 1.83889 75.9342C0.111323 73.7497 -0.170684 71.1253 0.628094 68.9075C1.04901 67.7201 1.77757 66.6471 2.75873 65.8129C2.72494 65.8332 2.69331 65.8532 2.66406 65.8722C3.11508 65.4706 3.61717 65.1478 4.16066 64.8792C4.37821 64.7683 4.60345 64.6673 4.83601 64.5768C4.90325 64.5501 4.96543 64.5351 5.0276 64.5201C5.08978 64.5051 5.15196 64.4901 5.2192 64.4633C15.2564 61.2102 55.1575 58.3424 65.4773 58.4424C70.4289 58.4584 85.255 59.6083 99.2547 60.7365C106.577 61.3281 113.604 57.9483 117.775 51.8892L120.672 47.6215C121.494 46.3599 123.141 45.8994 124.504 46.4865L131.374 49.4464C132.063 47.2358 132.832 45.0541 133.628 42.8971C133.925 42.0779 134.813 41.569 135.672 41.7722C136.344 41.8944 137.063 42.0368 137.761 42.2262C138.05 42.2671 138.351 42.313 138.651 42.3589C138.952 42.4049 139.252 42.4508 139.541 42.4916C139.759 42.5021 140.099 42.5229 140.438 42.5437C140.777 42.5645 141.116 42.5853 141.335 42.5958C145.185 42.5829 149.149 42.1737 152.694 40.4134C156.507 38.546 159.463 34.9168 160.653 30.8609C162.229 25.5225 161.172 19.0504 158.272 14.4023C154.487 8.31472 147.709 4.39167 140.453 4.16303C137.148 4.0762 133.814 4.70149 130.499 6.05916C130.365 6.11266 130.224 6.05192 130.217 5.93769C130.19 5.87045 130.184 5.75622 130.271 5.68248C135.77 0.418623 144.688 -0.753819 151.69 2.26261C159.055 5.21254 164.134 12.6933 164.717 20.5217C165.026 24.3318 164.098 28.1664 162.459 31.5832C159.714 37.3091 154.853 42.5137 149.07 45.2037C146.656 46.2809 143.961 46.8469 141.32 46.7681C139.757 46.6815 138.04 46.4775 136.523 46.0152C135.741 47.5594 134.933 49.0969 134.082 50.6128Z"
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
              {merchList?.map((item, index) => {
                return (
                  <MerchCard
                    item={item}
                    key={index}
                    onClick={() => alert('go to Details')}
                    onClick2={() => alert('Change?')}
                    onClick3={() => setOpenedConfirmDeleteItemPopup(true)}
                  />
                );
              })}
            </div>
          </>
        )}
        {merchList?.length != 0 ? <Pagination /> : null}
      </section>

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

      {/* ПОДТВЕРЖДЕНИЕ УДАЛЕНИЯ ТОВАРА */}
      <ConfirmPopup
        success_btn_title="delete"
        title="Do you want to delete this item?"
        opened={openedConfirmDeleteItemPopup}
        onClick={setOpenedConfirmDeleteItemPopup}
        onClick2={() => {
          setOpenedConfirmDeleteItemPopup(false);
          setTimeout(() => {
            toast.success('Item has been deleted', {
              duration: 3000,
              className: 'dashboard',
            });
          }, 500);
        }}
      />

      {/* МОБИЛЬНЫЙ ФИЛЬТР */}
      <MerchStoreParametersPopup
        opened={openedMerchStoreParametersPopup}
        onClick={setOpenedMerchStoreParametersPopup}
        onClick2={(e) => {
          e.preventDefault();
          setOpenedMerchStoreParametersPopup(false);
        }}
      />
    </>
  );
};

export default MerchStore;
