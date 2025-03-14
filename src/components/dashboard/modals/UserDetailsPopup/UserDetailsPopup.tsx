import {
  BaseButtonApp,
  BaseIcon,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './UserDetailsPopup.module.scss';
import { PhoneInput } from 'components/dashboard/content';
import { ALL_ICONS } from '@constants/icons';
import toast from 'react-hot-toast';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (e: React.SyntheticEvent) => void;
}

interface IFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  job_title: string;
  status: IStatus[];
}

interface IStatus {
  label: string;
  value: string;
}

const initialState = {
  first_name: 'Joe',
  last_name: 'Copperfield',
  email: 'jcopperfield@gmail.com',
  phone: '+7 960 200 22 86',
  job_title: 'Head manager',
  status: [{ label: 'Blocked', value: 'Blocked' }],
};

const UserDetailsPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const [value, setValue] = useState<IFormData>(initialState);
  const [phone, setPhone] = useState('edit');

  const setNewValue = (
    value: IStatus | IStatus[] | string,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [disabledPhone, setDisabledPhone] = useState(true);
  const [disabledEmail, setDisabledEmail] = useState(true);

  return (
    <BasePopup opened={opened} onClick={onClick}>
      <BaseTitleApp className={s.Title}>user Details</BaseTitleApp>

      <form className={s.Form}>
        <ul>
          <li className={s.Form_Input}>
            <BaseInputApp
              name="first_name"
              label="First name"
              value={value.first_name}
              onChange={(val: string) => setNewValue(val, 'first_name')}
              disabled
            />
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="last_name"
              label="Last name"
              value={value.last_name}
              onChange={(val: string) => setNewValue(val, 'last_name')}
              disabled
            />
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="email"
              label="Email"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
              disabled={disabledEmail}
            />

            <BaseIcon
              viewBox="0 0 22 22"
              icon={ALL_ICONS.EDIT}
              className={s.Edit}
              onClick={onClick2}
            />
          </li>

          <li className={s.Form_Input}>
            <PhoneInput
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              disabled={disabledPhone}
            />

            {phone == 'edit' ? (
              <BaseIcon
                viewBox="0 0 22 22"
                icon={ALL_ICONS.EDIT}
                className={s.Edit}
                onClick={() => {
                  setDisabledPhone(false);
                  setPhone('save');
                }}
              />
            ) : phone == 'save' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 22 22"
                fill="none"
                className={s.Save}
                onClick={() => {
                  setDisabledPhone(true);
                  setPhone('edit');
                  setTimeout(() => {
                    toast.success('Your phone has been successfully changed', {
                      duration: 3000,
                      className: 'dashboard',
                    });
                  }, 500);
                }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.375 1H16C17.1415 3.11999 18.88 4.85846 21 6V11V20C21 20.5523 20.5523 21 20 21H2C1.44772 21 1 20.5523 1 20V2C1 1.44772 1.44772 1 2 1H6.625H7.625H11H14.375H15.375ZM14.375 2H11H7.625V5C7.625 5.55228 8.07272 6 8.625 6H13.375C13.9273 6 14.375 5.55228 14.375 5V2ZM6.625 2H2V20H20V11V6.58168C18.1186 5.45545 16.5446 3.8814 15.4183 2H15.375V5C15.375 6.10457 14.4796 7 13.375 7H8.625C7.52043 7 6.625 6.10457 6.625 5V2ZM11 15.5C12.3807 15.5 13.5 14.3807 13.5 13C13.5 11.6193 12.3807 10.5 11 10.5C9.61929 10.5 8.5 11.6193 8.5 13C8.5 14.3807 9.61929 15.5 11 15.5ZM11 16.5C12.933 16.5 14.5 14.933 14.5 13C14.5 11.067 12.933 9.5 11 9.5C9.067 9.5 7.5 11.067 7.5 13C7.5 14.933 9.067 16.5 11 16.5Z"
                  fill="#1A1A1A"
                  fillOpacity="0.6"
                />
              </svg>
            ) : null}
          </li>

          <li className={s.Form_Input}>
            <BaseInputApp
              name="job_title"
              label="Job title"
              value={value.job_title}
              onChange={(val: string) => setNewValue(val, 'job_title')}
              disabled
            />
          </li>

          <li className={s.Form_Input}>
            <BaseSelectApp
              name="status"
              value={value.status}
              placeholder="Status"
              options={[
                { value: 'Active', label: 'Active' },
                { value: 'Invited', label: 'Invited' },
                { value: 'Blocked', label: 'Blocked' },
              ]}
              onChange={(val: IStatus[] | IStatus) =>
                setNewValue(val, 'status')
              }
              onClear={() => {}}
              onBlur={() => {}}
              withLabel
              disabled
            />
          </li>
        </ul>
      </form>
    </BasePopup>
  );
};

export default UserDetailsPopup;
