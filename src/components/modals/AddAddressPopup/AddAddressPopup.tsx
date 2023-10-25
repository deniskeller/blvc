import {
	BaseButtonApp,
	BaseInputApp,
	BasePopup,
	BaseTitleApp,
} from '@base/index';
import React from 'react';
import s from './AddAddressPopup.module.scss';

interface Props {
	opened: boolean;
	onClick: (value: boolean) => void;
	onClick2: (value: boolean) => void;
}

interface IFormData {
	country: string;
	city: string;
	street: string;
	building: string;
	postcode: string;
}

const AddAddressPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
	const [value, setValue] = React.useState<IFormData>({
		country: '',
		city: '',
		street: '',
		building: '',
		postcode: '',
	});

	const setNewValue = (val: string | number, key: string) => {
		setValue((prev) => ({ ...prev, [key]: val }));
	};

	const submitHandler = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		onClick2(true);
	};

	return (
		<BasePopup opened={opened} onClick={onClick}>
			<BaseTitleApp className={s.Title}>адрес доставки</BaseTitleApp>

			<form className={s.Form}>
				<ul>
					<li className={s.Form_Input}>
						<BaseInputApp
							name='country'
							label='Страна'
							value={value.country}
							onChange={(val: string) => setNewValue(val, 'country')}
						/>
					</li>

					<li className={s.Form_Input}>
						<BaseInputApp
							name='city'
							label='Город'
							value={value.city}
							onChange={(val: string) => setNewValue(val, 'city')}
						/>
					</li>

					<li className={s.Form_Input}>
						<BaseInputApp
							name='street'
							label='Улица'
							value={value.street}
							onChange={(val: string) => setNewValue(val, 'street')}
						/>

						<BaseInputApp
							name='building'
							label='Дом/Строение'
							value={value.building}
							onChange={(val: string) => setNewValue(val, 'building')}
						/>
					</li>

					<li className={s.Form_Input}>
						<BaseInputApp
							name='postcode'
							label='Индекс'
							value={value.postcode}
							onChange={(val: string) => setNewValue(val, 'postcode')}
						/>
					</li>
				</ul>

				<div className={s.Form_Buttons}>
					<BaseButtonApp
						title='bin'
						type='destructive'
						className={s.Button1}
						onClick={submitHandler}
					/>
					<BaseButtonApp
						title='Редактировать'
						type='empty'
						className={s.Button2}
						onClick={submitHandler}
					/>

					<BaseButtonApp
						title='Сохранить'
						className={s.Button3}
						onClick={submitHandler}
					/>
				</div>
			</form>
		</BasePopup>
	);
};

export default AddAddressPopup;
