import { ALL_ICONS } from '@constants/icons';
import React, { MutableRefObject } from 'react';
import { BaseIcon } from '..';
import s from './BaseButtonApp.module.scss';

interface Props {
	title?: string;
	ref?: MutableRefObject<null>;
	type?: string;
	size?: string;
	disabled?: boolean;
	withIcon?: boolean;
	className?: string;
	style?: object;
	onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButtonApp: React.FC<Props> = ({
	title = '',
	type = '',
	size = '',
	disabled = false,
	withIcon = false,
	className = '',
	style,
	ref,
	onClick,
}) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${className} ${s.Button} ${s['Button_' + type]} ${
				s['Button_' + size]
			}`}
			style={style}
			ref={ref}
		>
			{withIcon ? (
				<BaseIcon
					viewBox='0 0 21 20'
					icon={ALL_ICONS.PLUS}
					className={s.IconPlus}
				/>
			) : null}

			{title == 'bin' ? (
				<BaseIcon viewBox='0 0 24 24' icon={ALL_ICONS.BIN} className={s.Icon} />
			) : (
				<span className={s.Title}>{title}</span>
			)}
		</button>
	);
};

export default BaseButtonApp;
