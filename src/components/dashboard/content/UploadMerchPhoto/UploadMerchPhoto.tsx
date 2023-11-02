import React from 'react';
import s from './UploadMerchPhoto.module.scss';

interface Props {
  className?: string;
}

const UploadMerchPhoto: React.FC<Props> = ({ className = '' }) => {
  return (
    <div className={`${s.UploadMerchPhoto} ${className}`}>
      <div className={s.Label}>
        <p>Photo (max 10 photos - JPG, PNG, PDF up to 10 MB)</p>
      </div>
    </div>
  );
};

export default UploadMerchPhoto;
