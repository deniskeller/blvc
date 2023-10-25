import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { sidebarSlice } from '@store/sidebar/reducer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { SelectLanguage } from '../content';
import s from './Sidebar.module.scss';

type Props = {
	className?: string;
	pages?: {
		name: string;
		path: string;
	}[];
};

const Sidebar: React.FC<Props> = ({ pages, className = '' }) => {
	const router = useRouter();
	const [showFlap, setShowFlap] = useState(true);
	const [showSidebar, setSidebar] = useState(true);
	const [language, setLanguage] = useState('руc');
	const dispatch = useAppDispatch();
	const isVisible = useAppSelector((state) => state.sidebar.visible);
	const { setVisibleSidebar } = sidebarSlice.actions;

	useEffect(() => {
		return () => {};
	}, [pages]);

	const computedIcon = (name: string) => {
		if (name == 'partners') return ALL_ICONS.PARTNERS;
		if (name == 'team') return ALL_ICONS.TEAM;
		if (name == 'orders') return ALL_ICONS.ORDERS;
		if (name == 'catalog') return ALL_ICONS.CATALOG;
		return ALL_ICONS.PARTNERS;
	};

	return (
		<div
			className={`${s.Sidebar} ${className} ${
				isVisible ? s.Sidebar_Visible : ''
			}`}
		>
			<BaseIcon
				viewBox='0 0 24 24'
				icon={ALL_ICONS.CLOSE_DASHBOARD}
				className={s.Sidebar_IconClose}
				onClick={() => dispatch(setVisibleSidebar({ visible: false }))}
			/>

			<ul
				className={`${s.Sidebar_Navbar} ${
					showFlap ? s.Sidebar_Navbar_ShowFlap : ''
				} `}
			>
				<div className={s.Sidebar_Flap} onClick={() => setShowFlap(!showFlap)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						style={{
							transform: showFlap ? 'rotateY(0deg)' : 'rotateY(180deg)',
						}}
					>
						<path
							d='M7.5 4.16699L12.5 10.0003L7.5 15.8337'
							stroke='#1B2454'
							strokeOpacity='0.85'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</div>

				{pages?.map((page, index) => {
					return (
						<li key={index}>
							<Link
								href={page.path}
								className={`${
									router.pathname.split('/')[3] === page.path.split('/')[3]
										? s.Item_Active
										: ''
								} ${s.Item}`}
								onClick={() => dispatch(setVisibleSidebar({ visible: false }))}
							>
								<BaseIcon
									icon={`${computedIcon(page.path.split('/')[3])}`}
									viewBox='0 0 20 20'
									className={s.Item_Icon}
								/>

								<div
									className={`${s.Item_Label} ${
										showFlap ? s.Item_Label_ShowFlap : ''
									}`}
								>
									<span>{page.name}</span>
								</div>

								{page.path.split('/')[3] == 'partners' ? (
									<div
										className={`${s.Item_Counter} ${
											showFlap ? s.Item_Counter_ShowFlap : ''
										}`}
									>
										<span>2</span>
									</div>
								) : null}
							</Link>
						</li>
					);
				})}
			</ul>

			<SelectLanguage
				onChange={(val: string) => setLanguage(val)}
				className={s.Sidebar_SelectLanguage}
				options={[
					{
						label: 'руc',
						value: 'ru',
					},
					{
						label: 'en',
						value: 'en',
					},
				]}
				defaultValue={language}
			/>

			<div className={s.Sidebar_UserActions}>
				<div className={s.User}>
					<BaseIcon
						viewBox='0 0 25 24'
						icon={ALL_ICONS.USER}
						className={s.User_Icon}
					/>

					<div className={s.User_Name}>иванов м.</div>
				</div>

				<BaseIcon
					viewBox='0 0 24 24'
					icon={ALL_ICONS.LOGOUT}
					className={s.Logout}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
