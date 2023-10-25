import { BaseButtonApp, BaseInputApp } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import s from './Auth.module.scss';
import Image from 'next/image';

interface IFormData {
  email: string;
  password: string;
}

const Auth: React.FC = () => {
  const router = useRouter();

  const [value, setValue] = React.useState<IFormData>({
    email: '',
    password: '',
  });

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  useEffect(() => {
    console.log('value: ', value);
  }, [value]);

  return (
    <section className={s.Auth}>
      <Image
        src={'/pictures/images/auth-bg-min.jpg'}
        alt="auth background image"
        fill
        priority
        quality={100}
        className={s.Auth_Background}
      />

      <div className={s.Auth_Content}>
        <div className={s.Decor}></div>
        <form className={s.Form}>
          <div className={s.Form_Title}>
            <h1>Log in</h1>
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

            <li className={s.Password}>
              <BaseInputApp
                theme="light"
                name="password"
                label="Password"
                type="password"
                autocomplete="new-password"
                value={value.password}
                onChange={(val: string) => setNewValue(val, 'password')}
                className={s.Password_Input}
              />
              <Link href="/forgot-password" className={s.Link}>
                <span>Forgot password?</span>
              </Link>
            </li>
          </ul>

          {/* <Link
            href="/forgot-password"
            className={`${s.Form_ForgotPassword} ${s.Form_Link}`}
          >
            Забыли пароль?
          </Link>

          <BaseButtonApp
            title="Войти"
            className={s.Form_Button}
            onClick={submitFormHandler}
          />

          <div className={s.Form_Register}>
            <span>Ещё не зарегистрированы?</span>&nbsp;
            <Link href="/register" className={s.Form_Link}>
              Стать партнёром
            </Link>
          </div> */}
        </form>

        {/* <Link href="/" className={s.BtnBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 16"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.2227 8.5H-15.6758V7.5H63.2227V8.5Z"
              fill="white"
            />
            <path d="M55.9688 13.9219L63.9697 7.91646" stroke="white" />
            <path d="M63.9688 8L55.9687 2" stroke="white" />
          </svg>

          <span>to website</span>
        </Link> */}
      </div>
    </section>
  );
};

export default Auth;
