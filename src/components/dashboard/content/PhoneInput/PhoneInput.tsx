import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import s from './PhoneInput.module.scss';

interface Props {
	placeholder?: string;
	className?: string;
	error?: string | boolean;
	value: string;
	disabled?: boolean;
	onChange(value: string | number): void;
}

const PhoneInput2: React.FC<Props> = ({
	value,
	error,
	placeholder,
	className = '',
	onChange,
	disabled = false,
}) => {
	return (
		<div
			className={`${s.BaseInput} ${className} ${
				disabled ? s.BaseInput_Disabled : ''
			}`}
		>
			<PhoneInput
				placeholder={placeholder}
				country={'ru'}
				value={value}
				onChange={onChange}
				enableSearch
				searchPlaceholder='Поиск'
				searchNotFound='Ничего не найдено'
				inputClass={error ? 'phone-input-error' : ''}
				disabled={disabled}
			/>

			{error ? (
				<div className={s.ErrorText}>
					<span>{error}</span>
				</div>
			) : (
				''
			)}
		</div>
	);
};
export default PhoneInput2;
