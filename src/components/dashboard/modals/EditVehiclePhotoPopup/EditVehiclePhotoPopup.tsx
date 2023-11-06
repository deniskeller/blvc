import { BaseButtonApp, BasePopup, BaseTitleApp } from '@base/index';
import React from 'react';
import s from './EditVehiclePhotoPopup.module.scss';

interface Props {
  opened: boolean;
  onClick: (value: boolean) => void;
  onClick2: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const EditVehiclePhotoPopup: React.FC<Props> = ({
  opened,
  onClick,
  onClick2,
}) => {
  return (
    <BasePopup opened={opened} onClick={onClick} className={s.Popup}>
      <BaseTitleApp className={s.Title}>Edit photo</BaseTitleApp>

      <div className={s.Edit}></div>

      <div className={s.Buttons}>
        <BaseButtonApp
          type="secondary"
          className={s.Button}
          onClick={() => onClick(false)}
        >
          Cancel
        </BaseButtonApp>

        <BaseButtonApp className={s.Button} onClick={onClick2}>
          SAve
        </BaseButtonApp>
      </div>
    </BasePopup>
  );
};

export default EditVehiclePhotoPopup;
