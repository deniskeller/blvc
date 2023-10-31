import Image from 'next/image';
import React, { useState } from 'react';
import s from './VehiclesCard.module.scss';

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
}

const VehiclesCard: React.FC<Props> = ({ item, onClick }) => {
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

  return (
    <div className={s.VehiclesCard} onClick={onClick}>
      <div className={s.PartnerCard_Name}>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default VehiclesCard;
