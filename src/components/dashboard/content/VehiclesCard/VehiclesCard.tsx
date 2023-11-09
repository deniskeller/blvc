import Image from 'next/image';
import React, { useState } from 'react';
import s from './VehiclesCard.module.scss';
import { ALL_ICONS } from '@constants/icons';
import { BaseIcon } from '@base/index';
import Skeleton from 'react-loading-skeleton';

interface IItem {
  id: number;
  status: string;
  image: string;
  availability: boolean;
  name: string;
  tags: string[];
  total_price: string;
  monthly_payment: string;
}

interface Props {
  item: IItem;
  type?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  onClick2?: (e: React.SyntheticEvent) => void;
  onClick3?: (e: React.SyntheticEvent) => void;
}

const VehiclesCard: React.FC<Props> = ({
  item,
  onClick,
  onClick2,
  onClick3,
}) => {
  const {
    id,
    status,
    image,
    availability,
    name,
    tags,
    total_price,
    monthly_payment,
  } = item as IItem;

  const [skeleton, setSkeleton] = useState(false);
  setTimeout(() => {
    setSkeleton(true);
  }, 2000);

  const computedDecorStyle = (status: string) => {
    if (status == 'hidden') return 'Hidden';
    if (status == 'published') return 'Published';
  };

  const computedBackground = (status: string) => {
    if (status == 'hidden') return '#5A5A5A';
    if (status == 'published') return '#1A1A1A';
  };

  if (!skeleton) {
    return <Skeleton className={s.SkeletonCard} />;
  }

  return (
    <div className={s.VehiclesCard}>
      <div
        className={s.Border}
        style={{
          background: computedBackground(status),
        }}
      ></div>

      <div
        className={`${s.Status} ${s['Status_' + computedDecorStyle(status)]}`}
        style={{
          background: computedBackground(status),
        }}
      >
        <span>{status}</span>
      </div>

      <div className={s.Change} onClick={onClick2}>
        <BaseIcon
          viewBox="0 0 22 22"
          icon={ALL_ICONS.EDIT}
          className={s.Change_Icon}
        />
      </div>

      <div className={s.Delete} onClick={onClick3}>
        <BaseIcon
          viewBox="0 0 24 24"
          icon={ALL_ICONS.DELETE}
          className={s.Delete_Icon}
        />
      </div>

      <div className={s.Image}>
        <Image src={image} alt="vehicle image" width={351} height={272} />

        {availability ? (
          <div className={s.Availability}>
            <span>Сurrently unavailable</span>
          </div>
        ) : null}
      </div>

      <div className={s.Info}>
        <div className={s.Info_Name}>
          <span>{name}</span>
        </div>

        <div className={s.Info_Tags}>
          {tags?.map((tag, index) => {
            return (
              <div className={s.Tag} key={index}>
                <span>{tag}</span>
              </div>
            );
          })}
        </div>

        <div className={s.Info_TotalPrice}>
          <span>Total price from {total_price}</span>

          <div className={s.Tooltip}>
            <BaseIcon
              viewBox="0 0 13 13"
              icon={ALL_ICONS.TOOLTIP}
              className={s.Tooltip_Icon}
            />
          </div>

          <div className={s.Popup}>
            <p>
              Further information on the official fuel consumption and the
              official specific CO₂
            </p>
          </div>
        </div>

        <div className={s.Info_MonthlyPayment}>
          <span>{monthly_payment}/month</span>

          <div className={s.Tooltip}>
            <BaseIcon
              viewBox="0 0 13 13"
              icon={ALL_ICONS.TOOLTIP}
              className={s.Tooltip_Icon}
            />
          </div>

          <div className={s.Popup}>
            <p>
              Further information on the official fuel consumption and the
              official specific CO₂
            </p>
          </div>
        </div>

        <div className={s.Info_Details} onClick={onClick}>
          <span>Details</span>
        </div>
      </div>
    </div>
  );
};

export default VehiclesCard;
