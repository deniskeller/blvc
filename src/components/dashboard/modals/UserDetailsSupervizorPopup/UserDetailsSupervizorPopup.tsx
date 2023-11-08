import {
  BaseButtonApp,
  BaseIcon,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './UserDetailsSupervizorPopup.module.scss';
import { PhoneInput } from 'components/dashboard/content';
import { ALL_ICONS } from '@constants/icons';

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
            <BaseIcon
              viewBox="0 0 24 24"
              icon={ALL_ICONS.DELETE}
              className={s.Delete_Icon}
            />
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
