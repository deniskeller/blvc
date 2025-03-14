import React, { ReactNode } from 'react';
import s from './BaseTitleApp.module.scss';

interface Props {
	children?: ReactNode | ReactNode[];
	type?: string;
	className?: string;
}

const BaseTitleApp: React.FC<Props> = ({
	children,
	type = 'h1',
	className = '',
}) => {
	if (type == 'h1') {
		return (
			<div className={`${className}`}>
				<h1 className={`${s.Title} ${s['Title_' + type]}`}>{children}</h1>
			</div>
		);
	} else if (type == 'h2') {
		return (
			<div className={`${className}`}>
				<h2 className={`${s.Title} ${s['Title_' + type]}`}>{children}</h2>
			</div>
		);
	} else {
		return null;
	}
};

export default BaseTitleApp;
