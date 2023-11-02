import { BaseButtonApp, BasePopup, BaseTitleApp } from '@base/index';
import React from 'react';
import s from './ConfirmDeleteItemPopup.module.scss';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmDeleteItemPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title} type="h2">
        Do you want to delete this item?
      </BaseTitleApp>

      <div className={s.Buttons}>
        <BaseButtonApp
          type="secondary"
          className={s.Button}
          onClick={() => onClick(false)}
        >
          Cancel
        </BaseButtonApp>

        <BaseButtonApp className={s.Button} onClick={onClick2}>
          Delete
        </BaseButtonApp>
      </div>
    </BasePopup>
  );
};

export default ConfirmDeleteItemPopup;
