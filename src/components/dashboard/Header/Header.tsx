import { BaseIcon, BaseSelectApp } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import s from './Header.module.scss';
import {
  FilterButton,
  FilterResetButton,
  Logo,
  SearchByInput,
} from '../content';
import { sidebarSlice } from '@store/sidebar/reducer';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

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

const Header = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.sidebar.visible);
  const { setVisibleSidebar } = sidebarSlice.actions;

  const logoutHandler = () => {
    router.push('/auth');
  };

  //заголовок страницы
  const [title, setTitle] = useState('Vehicles');
  useEffect(() => {
    if (router.pathname.split('/')[2] === 'vehicles') {
      setTitle('Vehicles');
    }
    if (router.pathname.split('/')[2] === 'team') {
      setTitle('Team');
    }
    if (router.pathname.split('/')[2] === 'website-forms') {
      setTitle('Website forms');
    }
    if (router.pathname.split('/')[2] === 'merch-store') {
      setTitle('Merch store');
    }
  }, [router.pathname]);

  const [filters, setFilters] = useState<FiltersState>(initialFiltersState);
  const [visiblefilter, setVisiblefilter] = useState<boolean>(false);

  const setNewValue = (
    value: FilterItem | FilterItem[] | string,
    prop: keyof FiltersState
  ) => {
    setFilters((prev) => ({ ...prev, [prop]: value }));
  };

  //ЛОГИКА ДЛЯ ФИЛЬТРОВ ПРИ СКРОЛЕ
  const [scroll, setScroll] = useState(0);
  window.addEventListener('scroll', function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    setScroll(scrollTop);
  });

  useEffect(() => {}, []);

  return (
    <>
      <header className={s.Header}>
        <Logo className={s.Header_Logo} />

        <div className={`${s.Header_Filter}`}>
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

          {filters !== initialFiltersState ? (
            <FilterResetButton
              className={s.Reset}
              onClick={() => {
                setFilters({
                  search: '',
                  sortBy: 'by_name',
                  forms: [{ value: 'all_forms', label: 'All forms' }],
                });
              }}
            />
          ) : null}

          <FilterButton
            className={`${s.Burger} ${scroll >= 300 ? s.Burger_Visible : ''}`}
            counter={1}
            onClick={() => setVisiblefilter(true)}
          />
        </div>

        <div className={s.Header_User}>
          <BaseIcon
            viewBox="0 0 28 27"
            icon={ALL_ICONS.USER_ICON}
            className={s.UserIcon}
          />

          <div className={s.Name}>
            <span>Maria Newman</span>
          </div>

          <BaseIcon
            viewBox="0 0 22 23"
            icon={ALL_ICONS.USER_LOGOUT}
            className={s.LogoutIcon}
            onClick={logoutHandler}
          />
        </div>

        <div className={s.Header_Title}>
          {router.pathname.split('/')[2] === 'team' ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="110"
              height="29"
              viewBox="0 0 110 29"
              fill="none"
              className={s.Logo}
            >
              <path
                d="M0 0.675781H11.7544C13.3305 0.675781 14.7744 0.843379 16.0861 1.1818C17.3979 1.51699 18.526 1.994 19.4703 2.60638C20.4114 3.21875 21.1463 3.95683 21.6717 4.81737C22.197 5.67792 22.4581 6.63516 22.4581 7.68587C22.4581 8.3337 22.3872 8.93318 22.2454 9.48432C22.1035 10.0355 21.8715 10.5544 21.5492 11.041C21.2269 11.5245 20.7982 11.9918 20.2664 12.4334C19.7346 12.8749 19.0771 13.3294 18.2971 13.7871C19.1061 14.0417 19.8442 14.3833 20.5178 14.8055C21.1914 15.231 21.7748 15.7273 22.2647 16.301C22.7546 16.8747 23.1381 17.5064 23.4153 18.1994C23.6925 18.8923 23.8279 19.6304 23.8279 20.4104C23.8279 21.4869 23.5829 22.4892 23.0898 23.4207C22.5967 24.3489 21.8973 25.1579 20.9884 25.8444C20.0795 26.5309 18.9901 27.0724 17.717 27.4688C16.4439 27.8653 15.0322 28.0651 13.4852 28.0651H0V0.675781ZM6.72646 12.5526H11.1485C11.8608 12.5526 12.4989 12.4431 13.0565 12.2207C13.6141 11.9983 14.0879 11.6889 14.4714 11.2924C14.8549 10.896 15.1482 10.4222 15.3481 9.86786C15.5511 9.31672 15.651 8.71724 15.651 8.06941C15.651 7.35712 15.5221 6.70285 15.2675 6.10981C15.0129 5.51677 14.6197 5.00753 14.0943 4.58532C13.569 4.15988 12.9018 3.83113 12.096 3.59585C11.2871 3.36057 10.333 3.24131 9.22753 3.24131H6.72324V12.5526H6.72646ZM6.72646 25.2578H10.4426C11.532 25.2578 12.4763 25.1418 13.2692 24.9033C14.0621 24.668 14.7196 24.3457 15.2385 23.9332C15.7574 23.5238 16.1409 23.0307 16.3891 22.457C16.6373 21.8865 16.763 21.2613 16.763 20.5877C16.763 19.8206 16.6469 19.1083 16.4181 18.4572C16.1893 17.803 15.8154 17.2357 15.2965 16.749C14.7776 16.2656 14.0975 15.8885 13.2563 15.6177C12.4151 15.347 11.387 15.2149 10.1751 15.2149H6.72002V25.2546L6.72646 25.2578Z"
                fill="#1A1A1A"
                fillOpacity="0.9"
              />
              <path
                d="M29.416 0.675781H36.1425V25.2578H50.1208V28.0651H29.416V0.675781Z"
                fill="#1A1A1A"
                fillOpacity="0.9"
              />
              <path
                d="M56.3385 0.675781L65.3888 19.6014L73.788 0.675781H78.0907L65.7691 28.468H62.6395L49.3896 0.675781H56.3385Z"
                fill="#1A1A1A"
                fillOpacity="0.9"
              />
              <path
                d="M88.6314 14.3522C88.6314 16.1313 88.9022 17.6977 89.4404 19.0578C89.9787 20.4179 90.6909 21.5589 91.5805 22.4806C92.4701 23.4024 93.4918 24.105 94.6521 24.5821C95.8091 25.0591 97.0145 25.2976 98.2683 25.2976C99.2255 25.2976 100.115 25.1332 100.943 24.8012C101.772 24.4725 102.545 24.0245 103.267 23.4572C103.986 22.8932 104.663 22.2389 105.298 21.4976C105.929 20.7563 106.535 19.9763 107.116 19.1545L109.923 21.214C109.317 22.1841 108.585 23.1188 107.731 24.0212C106.877 24.9237 105.917 25.7166 104.853 26.4031C103.789 27.0896 102.632 27.6375 101.379 28.05C100.125 28.4594 98.8001 28.6656 97.3981 28.6656C95.042 28.6656 92.8697 28.3208 90.8843 27.6343C88.8989 26.9478 87.1843 25.9776 85.7436 24.7239C84.3029 23.4701 83.1781 21.9682 82.3691 20.2084C81.5601 18.4518 81.1572 16.4955 81.1572 14.3393C81.1572 12.1831 81.5408 10.333 82.3079 8.58293C83.0749 6.83283 84.1546 5.32122 85.5502 4.04813C86.9426 2.77503 88.6121 1.78234 90.5588 1.07005C92.5055 0.357756 94.6553 0 97.0113 0C98.5874 0 100.028 0.186936 101.333 0.554361C102.639 0.92501 103.828 1.43747 104.898 2.08852C105.968 2.7428 106.925 3.52277 107.767 4.43167C108.608 5.34056 109.352 6.3397 110 7.43231L107.174 9.41125C106.593 8.58938 105.965 7.81585 105.285 7.08744C104.605 6.35904 103.88 5.7241 103.113 5.17941C102.345 4.63472 101.536 4.20283 100.689 3.88697C99.8411 3.57112 98.958 3.41319 98.0427 3.41319C96.7889 3.41319 95.5964 3.64847 94.4587 4.11903C93.3209 4.5896 92.3218 5.28899 91.458 6.21078C90.5943 7.13257 89.9078 8.27352 89.3985 9.63364C88.8861 10.9938 88.6314 12.5634 88.6314 14.3393V14.3522Z"
                fill="#1A1A1A"
                fillOpacity="0.9"
              />
            </svg>
          ) : null}

          <h1>{title}</h1>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 18"
          fill="none"
          className={s.Header_Burger}
          onClick={() => dispatch(setVisibleSidebar({ visible: !isVisible }))}
        >
          <g filter="url(#filter0_i_10576_35437)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 1C24 1.55228 23.5523 2 23 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447716 0 1 0H23C23.5523 0 24 0.447715 24 1ZM24 9C24 9.55229 23.5523 10 23 10H1C0.447715 10 0 9.55229 0 9C0 8.44771 0.447716 8 1 8H23C23.5523 8 24 8.44771 24 9ZM23 18C23.5523 18 24 17.5523 24 17C24 16.4477 23.5523 16 23 16H1C0.447716 16 0 16.4477 0 17C0 17.5523 0.447715 18 1 18H23Z"
              fill="#1A1A1A"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_10576_35437"
              x="0"
              y="0"
              width="24"
              height="18"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.727273" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_10576_35437"
              />
            </filter>
          </defs>
        </svg>
      </header>
    </>
  );
};

export default Header;
