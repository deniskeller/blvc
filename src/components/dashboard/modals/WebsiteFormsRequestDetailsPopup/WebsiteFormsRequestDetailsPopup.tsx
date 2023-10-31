import {
  BaseButtonApp,
  BaseInputApp,
  BasePopup,
  BaseSelectApp,
  BaseTextareaApp,
  BaseTitleApp,
} from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './WebsiteFormsRequestDetailsPopup.module.scss';
import { PhoneInput } from 'components/dashboard/content';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
}

interface IFormData {
  form: string;
  name: string;
  surname: string;
  email: string;
  blvc_account_number: string;
  company_name: string;
  address: string;
  website: string;
  message: string;
  status: IStatus[];
}
interface IStatus {
  label: string;
  value: string;
}

const initialFiltersState = {
  form: 'Join the club',
  name: 'Jake',
  surname: 'Ottinger',
  email: 'jakepeterottinger@gmail.com',
  blvc_account_number: '000000000',
  company_name: 'ABC Group',
  address: '9218 New Road, Darlington, DL86 9VM',
  website: '000000000',
  message:
    'I am happy to join your great team and become a member of BLVC family',
  status: [{ value: 'incoming', label: 'Incoming' }],
};

const WebsiteFormsRequestDetailsPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  const [value, setValue] = useState<IFormData>(initialFiltersState);

  const setNewValue = (
    value: IStatus | IStatus[] | string,
    prop: keyof IFormData
  ) => {
    setValue((prev) => ({ ...prev, [prop]: value }));
  };

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClick2(true);
  };

  return (
    <BasePopup opened={opened} onClick={onClick}>
      <BaseTitleApp className={s.Title}>Request details</BaseTitleApp>

      <form className={s.Form}>
        <ul className={s.Form_Inputs}>
          <li className={s.Input}>
            <BaseInputApp
              name="form"
              label="Form"
              value={value.form}
              onChange={(val: string) => setNewValue(val, 'form')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="name"
              label="Name"
              value={value.name}
              onChange={(val: string) => setNewValue(val, 'name')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="surname"
              label="Surname"
              value={value.surname}
              onChange={(val: string) => setNewValue(val, 'surname')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="email"
              label="Email"
              value={value.email}
              onChange={(val: string) => setNewValue(val, 'email')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="blvc_account_number"
              label="BLVC Account number"
              value={value.blvc_account_number}
              onChange={(val: string) =>
                setNewValue(val, 'blvc_account_number')
              }
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="company_name"
              label="Company name"
              value={value.company_name}
              onChange={(val: string) => setNewValue(val, 'company_name')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="address"
              label="Address"
              value={value.address}
              onChange={(val: string) => setNewValue(val, 'address')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseInputApp
              name="website"
              label="Website"
              value={value.website}
              onChange={(val: string) => setNewValue(val, 'website')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseTextareaApp
              name="message"
              label="Message"
              value={value.message}
              onChange={(val: string) => setNewValue(val, 'message')}
              disabled
            />
          </li>

          <li className={s.Input}>
            <BaseSelectApp
              name="forms"
              value={value.status}
              placeholder="Forms"
              options={[
                { value: 'incoming', label: 'Incoming' },
                { value: 'in_progress', label: 'In progress' },
                { value: 'completed', label: 'Completed' },
              ]}
              onChange={(val: IStatus[] | IStatus) =>
                setNewValue(val, 'status')
              }
              onClear={() => {}}
              onBlur={() => {}}
              className={s.Filters_Forms}
            />
          </li>
        </ul>

        <div className={s.Form_Buttons}>
          <BaseButtonApp
            type="secondary"
            className={s.Button}
            onClick={(e) => {
              e.preventDefault();
              onClick(false);
            }}
          >
            Close
          </BaseButtonApp>

          <BaseButtonApp className={s.Button} onClick={submitHandler}>
            Update status
          </BaseButtonApp>
        </div>
      </form>
    </BasePopup>
  );
};

export default WebsiteFormsRequestDetailsPopup;
