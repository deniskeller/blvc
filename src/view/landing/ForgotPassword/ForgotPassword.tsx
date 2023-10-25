import { BaseButtonApp, BaseInputApp } from '@base/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import s from './ForgotPassword.module.scss';

const ForgotPassword: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [confirm, setConfirm] = useState(false);

  const submitFormHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <section className={s.ForgotPassword}>
      <div className={s.Content}>
        <form className={s.Form}>
          <div className={s.Form_Title}>
            {!confirm ? <h1>введите свой e-mail</h1> : <h1>Проверьте почту</h1>}
          </div>

          <div className={s.Form_Subtitle}>
            {!confirm ? (
              <p>
                Мы вышлем ссылку для сброса вашего пароля на ваш электронный
                адрес
              </p>
            ) : (
              <p>
                Пожалуйста, перейдите по ссылке, которую мы отправили по адресу
                &nbsp;{email}&nbsp;чтобы продолжить процедуру сброса пароля
              </p>
            )}
          </div>

          {!confirm ? (
            <BaseInputApp
              name="email"
              placeholder="Введите свой e-mail"
              type="text"
              value={email}
              onChange={(val: string) => setEmail(val)}
              className={s.Form_Input}
            />
          ) : null}

          {!confirm ? (
            <BaseButtonApp
              disabled={email == ''}
              title="Продолжить"
              className={s.Form_Button}
              onClick={submitFormHandler}
            />
          ) : (
            <BaseButtonApp
              title="Вернуться на главную"
              className={s.Form_Button}
              onClick={() => router.push('/')}
            />
          )}
        </form>

        {!confirm ? (
          <Link href="/" className={s.BtnBack}>
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

            <span>На сайт</span>
          </Link>
        ) : null}

        {/* УДАЛИТЬ
					ССЫЛКА ДЛЯ ПРОВЕРКИ СТРАНИЦЫ */}
        <Link
          href="/change-password"
          style={{ position: 'absolute', top: 0, right: 0 }}
        >
          Change password page(временная ссылка - удалить)
        </Link>
      </div>
    </section>
  );
};

export default ForgotPassword;
