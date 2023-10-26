import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { sidebarSlice } from '@store/sidebar/reducer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import s from './Sidebar.module.scss';
import { Logo } from '../content';

type Props = {
  className?: string;
  pages: {
    name: string;
    path: string;
  }[];
};

const Sidebar: React.FC<Props> = ({ pages, className = '' }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.sidebar.visible);
  const { setVisibleSidebar } = sidebarSlice.actions;

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
  }, [isVisible]);

  const computedIcon = (name: string) => {
    if (name == 'vehicles') return ALL_ICONS.VEHICLES;
    if (name == 'team') return ALL_ICONS.TEAM;
    if (name == 'website-forms') return ALL_ICONS.WEBSITE_FORMS;
    if (name == 'merch-store') return ALL_ICONS.MERCH_STORE;
    return ALL_ICONS.VEHICLES;
  };

  const logoutHandler = () => {
    router.push('/auth');
  };

  const closeSidebar = useCallback(() => {
    if (isVisible) {
      dispatch(setVisibleSidebar({ visible: false }));
    }
  }, [dispatch, isVisible, setVisibleSidebar]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      closeSidebar();
    });
    return () => {
      window.removeEventListener('resize', closeSidebar);
    };
  }, [closeSidebar, isVisible]);

  return (
    <div className={`${s.Wrapper} ${isVisible ? s.Visible : ''} ${className}`}>
      <div className={s.Sidebar}>
        <div className={s.Sidebar_Header}>
          <Logo className={s.Logo} />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            className={s.Close}
            onClick={() => dispatch(setVisibleSidebar({ visible: false }))}
          >
            <path
              d="M20 20L4 4M20 4L4 20"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className={s.Sidebar_User}>
          <BaseIcon
            viewBox="0 0 28 27"
            icon={ALL_ICONS.USER_ICON}
            className={s.Icon}
          />

          <div className={s.Name}>
            <span>Maria Newman</span>
          </div>
        </div>

        <ul className={`${s.Sidebar_Navbar}`}>
          {pages?.map((page, index) => {
            return (
              <li key={index}>
                <Link
                  href={page.path}
                  className={`${
                    router.pathname.split('/')[2] === page.path.split('/')[2]
                      ? s.Item_Active
                      : ''
                  } ${s.Item}`}
                  onClick={() =>
                    dispatch(setVisibleSidebar({ visible: false }))
                  }
                >
                  <BaseIcon
                    icon={`${computedIcon(page.path.split('/')[2])}`}
                    viewBox="0 0 30 29"
                    className={s.Item_Icon}
                  />

                  <div className={s.Item_Label}>
                    <span>{page.name}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className={s.Sidebar_Logout} onClick={logoutHandler}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 26"
            fill="none"
            className={s.Icon}
          >
            <path
              d="M18.0588 1.80469C18.473 1.80469 18.8088 1.4689 18.8088 1.05469C18.8088 0.640474 18.473 0.304688 18.0588 0.304688V1.80469ZM1.75 24.366V1.92425H0.25V24.366H1.75ZM1.86957 1.80469H18.0588V0.304688H1.86957V1.80469ZM18.0588 24.4856H1.86956V25.9856H18.0588V24.4856ZM0.25 24.366C0.25 25.2605 0.975102 25.9856 1.86956 25.9856V24.4856C1.80353 24.4856 1.75 24.432 1.75 24.366H0.25ZM1.75 1.92425C1.75 1.85822 1.80353 1.80469 1.86957 1.80469V0.304688C0.975104 0.304688 0.25 1.02979 0.25 1.92425H1.75Z"
              fill="#A61613"
            />
            <path
              d="M11.875 11.8203C11.4608 11.8203 11.125 12.1561 11.125 12.5703C11.125 12.9845 11.4608 13.3203 11.875 13.3203V11.8203ZM29.6774 13.1006C29.9703 12.8077 29.9703 12.3329 29.6774 12.04L24.9044 7.26701C24.6115 6.97412 24.1367 6.97412 23.8438 7.26701C23.5509 7.5599 23.5509 8.03478 23.8438 8.32767L28.0864 12.5703L23.8438 16.813C23.5509 17.1058 23.5509 17.5807 23.8438 17.8736C24.1367 18.1665 24.6115 18.1665 24.9044 17.8736L29.6774 13.1006ZM11.875 13.3203H29.1471V11.8203H11.875V13.3203Z"
              fill="#A61613"
            />
          </svg>

          <span className={s.Label}>Log out</span>
        </div>

        <div className={s.Sidebar_Copyright}>
          <p>All rights reserved © 2023 © BLVC</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
