import { BaseButtonApp, BaseInputApp, BasePopup } from '@base/index';
import React, { useState, useEffect } from 'react';
import s from './EnterNewEmailPopup.module.scss';
import toast from 'react-hot-toast';
import { StepBack } from 'components/dashboard/content';

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
      <StepBack onClick={() => onClick(false)} className={s.Back} />

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
