import { BaseButtonApp, BaseInputApp, BasePopup } from '@base/index';
import React, { useState, useEffect, useRef } from 'react';
import s from './PhoneVerificationCodePopup.module.scss';
import VerificationInput from 'react-verification-input';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (value: boolean) => void;
}

const PhoneVerificationCodePopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [repeatSending, setRepeatSending] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [counter, setCounter] = useState(10);

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!value) {
      setError(true);
    } else {
      setRepeatSending(true);
      setError(false);
    }
    // onClick(false);
    // onClick2(true);
  };

  useEffect(() => {
    if (repeat) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
    if (counter == 0) {
      setRepeat(false);
      setCounter(10);
    }
  }, [counter, repeat]);

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
        <p>Please enter the 6 digit code received on your phone number</p>
      </div>

      <form className={s.Form}>
        <div className={s.Form_VerificationCode}>
          <VerificationInput
            placeholder=" "
            value={value}
            onChange={(value) => setValue(value)}
            autoFocus={focus}
            classNames={{
              container: 'VerificationCode',
              character: `${!error ? 'Input' : 'Input Error'}`,
              characterInactive: 'Inactive',
              characterSelected: 'Selected',
            }}
          />
          {error ? (
            <div className={s.Error}>
              <p>Please, enter the code</p>
            </div>
          ) : null}

          {repeatSending && !error ? (
            <div className={s.RepeatSending}>
              <p>
                Didn’t get the code?&nbsp;
                {repeat && counter != 0 ? (
                  <span>{counter}</span>
                ) : (
                  <span onClick={() => setRepeat(true)}>Resend</span>
                )}
              </p>
            </div>
          ) : null}
        </div>

        <BaseButtonApp className={s.Form_Button} onClick={submitHandler}>
          Submit
        </BaseButtonApp>
      </form>
    </BasePopup>
  );
};

export default PhoneVerificationCodePopup;
