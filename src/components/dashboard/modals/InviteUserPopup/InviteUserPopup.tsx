import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseTitleApp,
} from '@base/index';
import React from 'react';
import s from './InviteUserPopup.module.scss';
import { PhoneInput } from 'components/dashboard/content';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
}

interface IFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  job_title: string;
}

const InviteUserPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const [value, setValue] = React.useState<IFormData>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    job_title: '',
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
      <BaseTitleApp className={s.Title}>Invite user</BaseTitleApp>

      <form className={s.Form}>
        <ul>
          <li className={s.Form_Input}>
            <BaseInputApp
              name="first_name"
              label="First name"
              value={value.first_name}
              onChange={(val: string) => setNewValue(val, 'first_name')}
            />
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="last_name"
              label="Last name"
              value={value.last_name}
              onChange={(val: string) => setNewValue(val, 'last_name')}
            />
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="email"
              label="Email"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
            />
          </li>

          <li>
            <PhoneInput
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              // disabled={editPhone}
            />
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="job_title"
              label="Job title"
              value={value.job_title}
              onChange={(val: string) => setNewValue(val, 'job_title')}
            />
          </li>
        </ul>
      </form>
    </BasePopup>
  );
};

export default InviteUserPopup;
