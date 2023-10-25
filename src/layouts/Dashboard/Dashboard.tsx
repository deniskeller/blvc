import { BaseToast } from '@base/index';
import Header from 'components/dashboard/Header/Header';
import Sidebar from 'components/dashboard/Sidebar/Sidebar';
import { useRouter } from 'next/router';
import React from 'react';
import s from './Dashboard.module.scss';

const pages = [
  {
    name: 'Партнеры',
    path: '/dashboard/admin/partners',
  },
  {
    name: 'Команда',
    path: '/dashboard/admin/team',
  },
  {
    name: 'Заказы',
    path: '/dashboard/admin/orders',
  },
  {
    name: 'Каталог',
    path: '/dashboard/admin/catalog',
  },
];

interface Props {
  children: JSX.Element;
}

const Dashboard: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <div className={s.Dashboard}>
        <Header />
        <div className={s.Dashboard_Body}>
          {/* <Sidebar pages={pages} className={s.Sidebar} /> */}
          <div className={s.Content}>{children}</div>
        </div>
      </div>
      <BaseToast />
    </>
  );
};

export default Dashboard;
