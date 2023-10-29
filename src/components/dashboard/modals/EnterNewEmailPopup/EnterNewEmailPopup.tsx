import { BaseButtonApp, BaseInputApp, BasePopup } from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './EnterNewEmailPopup.module.scss';
import toast from 'react-hot-toast';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
}

const EnterNewEmailPopup: React.FC<Props> = ({ opened, onClick, onClick2 }) => {
  const [email, setEmail] = useState<string>('');

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClick(false);
    // onClick2(true);
    setTimeout(() => {
      toast.success('Your email address has been successfully changed', {
        duration: 3000,
        className: 'dashboard',
      });
    }, 500);
  };

  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <div className={s.Back} onClick={() => onClick(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="10"
          viewBox="0 0 60 10"
          fill="none"
          className={s.Back_Icon}
        >
          <path
            opacity="0.5"
            d="M-3.8147e-06 5L7.5 9.33013V0.669873L-3.8147e-06 5ZM60 4.25L6.75 4.25V5.75L60 5.75V4.25Z"
            fill="#1A1A1A"
            fillOpacity="0.3"
          />
        </svg>

        <span className={s.Back_Label}>Back</span>
      </div>

      <div className={s.Description}>
        <p>Please enter a new email address</p>
      </div>

      <form className={s.Form}>
        <BaseInputApp
          name="email"
          label="Email"
          value={email}
          onChange={(email: string) => setEmail(email)}
          className={s.Form_Input}
        />

        <BaseButtonApp className={s.Form_Button} onClick={submitHandler}>
          Submit
        </BaseButtonApp>
      </form>
    </BasePopup>
  );
};

export default EnterNewEmailPopup;
