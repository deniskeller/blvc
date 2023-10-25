import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import Image from 'next/image';
import React, { useState } from 'react';
import s from './CatalogCard.module.scss';

interface IItem {
	id: number;
	image: string;
	article: string;
	name: string;
	price: string;
	availability?: boolean;
}

interface Props {
	item: IItem;
	type?: string;
	onClick?: (e: React.SyntheticEvent) => void;
}

const CatalogCard: React.FC<Props> = ({ item, onClick, type = 'partner' }) => {
	const { id, image, article, name, price, availability } = item as IItem;

	const [visible, setVisible] = useState(false);

	const clickHandler = (e: { stopPropagation: () => void }) => {
		e.stopPropagation();
		setVisible(true);
	};

	const [quantity, setQuantity] = useState(0);
	const countPlus = () => {
		setQuantity(quantity + 1);
	};

	const countMinus = () => {
		if (quantity >= 1) {
			setQuantity(quantity - 1);
		} else {
			setQuantity(0);
		}
	};

	return (
		<div className={s.CatalogCard} onClick={onClick}>
			<div className={s.CatalogCard_Image}>
				<Image
					src={image}
					alt='catalog cart image'
					width={180}
					height={180}
					loading='lazy'
				/>
			</div>

			<div className={s.CatalogCard_Info}>
				<div className={s.CatalogCard_Info_Article}>
					<span>{article}</span>
				</div>

				<div className={s.CatalogCard_Info_Name}>
					<span>{name}</span>
				</div>

				<div className={s.CatalogCard_Info_Footer}>
					<div className={s.Price}>
						<span>
							{price}&nbsp;
							<span
								style={{
									fontFamily: 'Inter, sans-serif',
									fontSize: 'inherit',
								}}
							>
								₽
							</span>
						</span>
					</div>
					{type == 'partner' ? (
						<>
							{!availability ? (
								<div
									className={s.NotAvailable}
									onClick={(e) => e.stopPropagation()}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 21'
										fill='none'
										className={s.NotAvailable_Icon}
									>
										<path
											d='M15.417 5.08398L4.58367 15.9171'
											stroke='#4570FD'
											strokeLinecap='round'
										/>
										<circle
											cx='10.0003'
											cy='10.4993'
											r='8.33333'
											stroke='#4570FD'
										/>
									</svg>

									<div className={s.NotAvailable_Tooltip}>
										<p>Нет в наличии</p>
									</div>
								</div>
							) : (
								<div className={s.Button}>
									<div className={s.Button_ToCart} onClick={clickHandler}>
										<BaseIcon
											viewBox='0 0 21 20'
											icon={ALL_ICONS.PLUS}
											className={s.Icon}
										/>
									</div>

									<div
										className={s.Button_Counter}
										onClick={(e) => e.stopPropagation()}
										style={{
											right: visible ? '0' : '-100%',
											opacity: visible ? '1' : '0',
											pointerEvents: visible ? 'initial' : 'none',
										}}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 10 1'
											fill='none'
											className={s.Minus}
											onClick={countMinus}
										>
											<path
												d='M9 0.500001L1 0.5'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>

										<div className={s.Value}>
											<span>{quantity}</span>
										</div>

										<svg
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 10 9'
											fill='none'
											className={s.Plus}
											onClick={countPlus}
										>
											<path
												d='M5 0.5V8.5M9 4.5L1 4.5'
												stroke='white'
												strokeLinecap='round'
												strokeLinejoin='round'
											/>
										</svg>
									</div>
								</div>
							)}
						</>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default CatalogCard;
