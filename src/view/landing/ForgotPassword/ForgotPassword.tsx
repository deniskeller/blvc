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

  return <section className={s.ForgotPassword}></section>;
};

export default ForgotPassword;
