import { BaseButtonApp, BasePopup, BaseTitleApp } from '@base/index';
import React from 'react';
import s from './ConfirmPopup.module.scss';

interface Props {
  title: string;
  subtitle?: string;
  success_btn_title?: string;
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmPopup: React.FC<Props> = ({
  opened,
  title,
  subtitle,
  success_btn_title = 'ok',
  onClick,
  onClick2,
}) => {
  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title} type="h2">
        {title}
      </BaseTitleApp>

      {subtitle ? (
        <div className={s.Subtitle}>
          <p>{subtitle}</p>
        </div>
      ) : null}

      <div className={s.Buttons}>
        <BaseButtonApp
          type="secondary"
          className={s.Button}
          onClick={() => onClick(false)}
        >
          Cancel
        </BaseButtonApp>

        <BaseButtonApp className={s.Button} onClick={onClick2}>
          {success_btn_title}
        </BaseButtonApp>
      </div>
    </BasePopup>
  );
};

export default ConfirmPopup;
