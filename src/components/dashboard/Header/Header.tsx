import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import s from './Header.module.scss';
import { Logo } from '../content';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <header className={s.Header}>
        <Logo className={s.Header_Logo} />

        <div className={s.Header_Filter}></div>

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
          />
        </div>
      </header>
    </>
  );
};

export default Header;
