import { BaseButtonApp, BaseInputApp } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import s from './ForgotPassword.module.scss';
import Image from 'next/image';

interface IFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const router = useRouter();

  const [value, setValue] = useState<IFormData>({
    email: '',
  });

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    alert('kek');
  };

  useEffect(() => {
    console.log('value: ', value);
  }, [value]);

  return (
    <section className={s.ForgotPassword}>
      <Image
        src={'/pictures/images/forgot-password-bg-min.jpg'}
        alt="forgot-password background image"
        fill
        priority
        quality={100}
        className={s.ForgotPassword_Background}
      />

      <div className={s.ForgotPassword_Content}>
        <div className={s.Decor}></div>

        <form className={s.Form}>
          <div className={s.Form_Title}>
            <h1>Password reset</h1>
          </div>

          <div className={s.Form_Description}>
            <p>Please, enter your email and we will send pass reset link.</p>
          </div>

          <ul>
            <li>
              <BaseInputApp
                theme="light"
                name="email"
                label="Email"
                type="text"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
              />
            </li>
          </ul>

          <BaseButtonApp
            // title="Log in"
            className={s.Form_Button}
            onClick={submitFormHandler}
          >
            Log in
          </BaseButtonApp>
        </form>

        <Link href="/" className={s.Back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="17"
            viewBox="0 0 65 17"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 9H79.8984V8H1V9Z"
              fill="white"
            />
            <path d="M8.53125 14.4219L0.530285 8.41646" stroke="white" />
            <path d="M0.53125 8.5L8.53125 2.5" stroke="white" />
          </svg>

          <span>to website</span>
        </Link>
      </div>

      <div className={s.Copyright}>
        <p>All rights reserved © 2023 © BLVC</p>
      </div>
    </section>
  );
};

export default ForgotPassword;
