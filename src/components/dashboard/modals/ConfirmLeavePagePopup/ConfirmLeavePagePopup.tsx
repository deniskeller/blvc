import { BaseButtonApp, BasePopup, BaseTitleApp } from '@base/index';
import React from 'react';
import s from './ConfirmLeavePagePopup.module.scss';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmLeavePagePopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title} type="h2">
        Are you sure you want to leave this page?
      </BaseTitleApp>

      <div className={s.Subtitle}>
        <p>
          If you close the window before the product is published, all data will
          be deleted.
        </p>
      </div>

      <div className={s.Buttons}>
        <BaseButtonApp
          type="secondary"
          className={s.Button}
          onClick={() => onClick(false)}
        >
          Cancel
        </BaseButtonApp>

        <BaseButtonApp className={s.Button} onClick={onClick2}>
          Ok
        </BaseButtonApp>
      </div>
    </BasePopup>
  );
};

export default ConfirmLeavePagePopup;
