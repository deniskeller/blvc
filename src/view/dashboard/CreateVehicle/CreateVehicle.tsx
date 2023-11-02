import React, { useState } from 'react';
import s from './CreateVehicle.module.scss';
import { useRouter } from 'next/router';
import { StepBack } from 'components/dashboard/content';

const CreateVehicle: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <section className={s.CreateVehicle}>
        <StepBack
          onClick={() => router.back()}
          className={s.CreateVehicle_Back}
        />
      </section>
    </>
  );
};

export default CreateVehicle;
