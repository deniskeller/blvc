import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './UserDetailsSupervizorPopup.module.scss';
import { PhoneInput } from 'components/dashboard/content';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
  onClick3: (value: boolean) => void;
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

const UserDetailsSupervizorPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
  onClick3,
}) => {
  const [value, setValue] = useState<IFormData>(initialState);

  const setNewValue = (
    value: IStatus | IStatus[] | string,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    if (value.first_name) {
      setDisabled(false);
    }
  }, [value.first_name]);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClick3(true);
  };

  //ОЧИСТКМ МУЛЬТИСЕЛЕКТА
  const onClearHandler = (
    e: { stopPropagation: () => void },
    type: keyof IFormData
  ) => {
    e.stopPropagation();
    setNewValue([], type);
  };

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
              disabled
            />
          </li>

          <li className={s.Form_Input}>
            <PhoneInput
              value={value.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              disabled
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
              onClear={(e) => {
                onClearHandler(e, 'status');
              }}
              onBlur={() => {}}
              // multiple
              // withCounter
              // error
              withLabel
            />
          </li>
        </ul>

        <div className={s.Form_Buttons}>
          <BaseButtonApp
            type="secondary"
            className={s.Delete}
            onClick={(e) => {
              e.preventDefault();
              onClick2(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_11156_27146)">
                <path
                  d="M9.5 9V18M14.5 9V18M8.5 4.5H2.5V4.75L2.74 5.8C3.90961 10.9169 4.49999 16.1491 4.5 21.398V22.5H19.5V21.398C19.5 16.149 20.09 10.918 21.26 5.8L21.5 4.75V4.5H15.5M8.5 4.5V4C8.5 3.54037 8.59053 3.08525 8.76642 2.66061C8.94231 2.23597 9.20012 1.85013 9.52513 1.52513C9.85013 1.20012 10.236 0.942313 10.6606 0.766422C11.0852 0.59053 11.5404 0.5 12 0.5C12.4596 0.5 12.9148 0.59053 13.3394 0.766422C13.764 0.942313 14.1499 1.20012 14.4749 1.52513C14.7999 1.85013 15.0577 2.23597 15.2336 2.66061C15.4095 3.08525 15.5 3.54037 15.5 4V4.5M8.5 4.5H15.5"
                  stroke="#A61613"
                  strokeWidth="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_11156_27146">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </BaseButtonApp>

          <BaseButtonApp
            className={s.Button}
            disabled={disabled}
            onClick={submitHandler}
          >
            Save changes
          </BaseButtonApp>
        </div>

        <BaseButtonApp
          className={s.RemoveInvitation}
          type="secondary"
          onClick={(e) => {
            e.preventDefault();
            alert('Revoke invitation?');
          }}
        >
          Revoke invitation
        </BaseButtonApp>
      </form>
    </BasePopup>
  );
};

export default UserDetailsSupervizorPopup;
