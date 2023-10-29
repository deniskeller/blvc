import React, { useState } from 'react';
import s from './Team.module.scss';
import { PartnerCard } from 'components/dashboard/content';
import {
  EnterNewEmailPopup,
  InviteUserPopup,
  PhoneVerificationCodePopup,
  UserDetailsPopup,
  UserDetailsSupervizorPopup,
} from 'components/dashboard/modals';

const partner_list = [
  {
    id: 1,
    status: 'active',
    name: 'Maria Newman',
    job_title: 'Supervisor',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
  {
    id: 2,
    status: 'blocked',
    name: 'Maria Newman2',
    job_title: 'Supervisor (it’s me)',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
  {
    id: 3,
    status: 'invited',
    name: 'Maria Newman3',
    job_title: 'UX designer',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
  {
    id: 4,
    status: 'active',
    name: 'Maria Newman',
    job_title: 'Supervisor (it’s me)',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
  {
    id: 5,
    status: 'active',
    name: 'Maria Newman',
    job_title: 'Supervisor (it’s me)',
    email: 'marianewman@gmail.com',
    phone: '+79393034057',
  },
];

///УВЕЛИЧИВАЕМ КОЛ-ВО ЭЛЕЕНТОВ(УДАЛИТЬ)
let partner = {
  id: 6,
  status: 'active',
  name: 'Maria Newman',
  job_title: 'Supervisor (it’s me)',
  email: 'marianewman@gmail.com',
  phone: '+79393034057',
};

for (let i = 1; i < 3; i++) {
  partner_list.push({
    ...partner,
    id: i,
    name: partner.name + ' ' + i,
  });
}

const Team: React.FC = () => {
  const [openedInviteUserPopup, setOpenedInviteUserPopup] = useState(false);
  const [openedUserDetailsSupervizorPopup, setUserDetailsSupervizorPopup] =
    useState(false);
  const [openedUserDetailsPopup, setUserDetailsPopup] = useState(false);
  const [openedEnterNewEmailPopup, setEnterNewEmailPopup] = useState(false);
  const [openedPhoneVerificationCodePopup, setPhoneVerificationCodePopup] =
    useState(false);

  return (
    <>
      <section className={s.Team}>
        <div className={s.Header}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 111 29"
            fill="none"
            className={s.Header_Icon}
          >
            <path
              d="M0.5 0.675781H12.2544C13.8305 0.675781 15.2744 0.843379 16.5861 1.1818C17.8979 1.51699 19.026 1.994 19.9703 2.60638C20.9114 3.21875 21.6463 3.95683 22.1717 4.81737C22.697 5.67792 22.9581 6.63516 22.9581 7.68587C22.9581 8.3337 22.8872 8.93318 22.7454 9.48432C22.6035 10.0355 22.3715 10.5544 22.0492 11.041C21.7269 11.5245 21.2982 11.9918 20.7664 12.4334C20.2346 12.8749 19.5771 13.3294 18.7971 13.7871C19.6061 14.0417 20.3442 14.3833 21.0178 14.8055C21.6914 15.231 22.2748 15.7273 22.7647 16.301C23.2546 16.8747 23.6381 17.5064 23.9153 18.1994C24.1925 18.8923 24.3279 19.6304 24.3279 20.4104C24.3279 21.4869 24.0829 22.4892 23.5898 23.4207C23.0967 24.3489 22.3973 25.1579 21.4884 25.8444C20.5795 26.5309 19.4901 27.0724 18.217 27.4688C16.9439 27.8653 15.5322 28.0651 13.9852 28.0651H0.5V0.675781ZM7.22646 12.5526H11.6485C12.3608 12.5526 12.9989 12.4431 13.5565 12.2207C14.1141 11.9983 14.5879 11.6889 14.9714 11.2924C15.3549 10.896 15.6482 10.4222 15.8481 9.86786C16.0511 9.31672 16.151 8.71724 16.151 8.06941C16.151 7.35712 16.0221 6.70285 15.7675 6.10981C15.5129 5.51677 15.1197 5.00753 14.5943 4.58532C14.069 4.15988 13.4018 3.83113 12.596 3.59585C11.7871 3.36057 10.833 3.24131 9.72753 3.24131H7.22324V12.5526H7.22646ZM7.22646 25.2578H10.9426C12.032 25.2578 12.9763 25.1418 13.7692 24.9033C14.5621 24.668 15.2196 24.3457 15.7385 23.9332C16.2574 23.5238 16.6409 23.0307 16.8891 22.457C17.1373 21.8865 17.263 21.2613 17.263 20.5877C17.263 19.8206 17.1469 19.1083 16.9181 18.4572C16.6893 17.803 16.3154 17.2357 15.7965 16.749C15.2776 16.2656 14.5975 15.8885 13.7563 15.6177C12.9151 15.347 11.887 15.2149 10.6751 15.2149H7.22002V25.2546L7.22646 25.2578Z"
              fill="#1A1A1A"
              fillOpacity="0.9"
            />
            <path
              d="M29.916 0.675781H36.6425V25.2578H50.6208V28.0651H29.916V0.675781Z"
              fill="#1A1A1A"
              fillOpacity="0.9"
            />
            <path
              d="M56.8385 0.675781L65.8888 19.6014L74.288 0.675781H78.5907L66.2691 28.468H63.1395L49.8896 0.675781H56.8385Z"
              fill="#1A1A1A"
              fillOpacity="0.9"
            />
            <path
              d="M89.1314 14.3522C89.1314 16.1313 89.4022 17.6977 89.9404 19.0578C90.4787 20.4179 91.1909 21.5589 92.0805 22.4806C92.9701 23.4024 93.9918 24.105 95.1521 24.5821C96.3091 25.0591 97.5145 25.2976 98.7683 25.2976C99.7255 25.2976 100.615 25.1332 101.443 24.8012C102.272 24.4725 103.045 24.0245 103.767 23.4572C104.486 22.8932 105.163 22.2389 105.798 21.4976C106.429 20.7563 107.035 19.9763 107.616 19.1545L110.423 21.214C109.817 22.1841 109.085 23.1188 108.231 24.0212C107.377 24.9237 106.417 25.7166 105.353 26.4031C104.289 27.0896 103.132 27.6375 101.879 28.05C100.625 28.4594 99.3001 28.6656 97.8981 28.6656C95.542 28.6656 93.3697 28.3208 91.3843 27.6343C89.3989 26.9478 87.6843 25.9776 86.2436 24.7239C84.8029 23.4701 83.6781 21.9682 82.8691 20.2084C82.0601 18.4518 81.6572 16.4955 81.6572 14.3393C81.6572 12.1831 82.0408 10.333 82.8079 8.58293C83.5749 6.83283 84.6546 5.32122 86.0502 4.04813C87.4426 2.77503 89.1121 1.78234 91.0588 1.07005C93.0055 0.357756 95.1553 0 97.5113 0C99.0874 0 100.528 0.186936 101.833 0.554361C103.139 0.92501 104.328 1.43747 105.398 2.08852C106.468 2.7428 107.425 3.52277 108.267 4.43167C109.108 5.34056 109.852 6.3397 110.5 7.43231L107.674 9.41125C107.093 8.58938 106.465 7.81585 105.785 7.08744C105.105 6.35904 104.38 5.7241 103.613 5.17941C102.845 4.63472 102.036 4.20283 101.189 3.88697C100.341 3.57112 99.458 3.41319 98.5427 3.41319C97.2889 3.41319 96.0964 3.64847 94.9587 4.11903C93.8209 4.5896 92.8218 5.28899 91.958 6.21078C91.0943 7.13257 90.4078 8.27352 89.8985 9.63364C89.3861 10.9938 89.1314 12.5634 89.1314 14.3393V14.3522Z"
              fill="#1A1A1A"
              fillOpacity="0.9"
            />
          </svg>
          <h1 className={s.Header_Title}>team</h1>
        </div>

        <div className={s.Content}>
          {partner_list?.map((item, index) => {
            return (
              <PartnerCard
                item={item}
                key={index}
                onClick={() => setUserDetailsSupervizorPopup(true)}
              />
            );
          })}

          <div
            className={s.AddPartner}
            onClick={() => setOpenedInviteUserPopup(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <path
                d="M7.62467 2.83203V12.1654M12.2913 7.4987L2.95801 7.4987"
                stroke="#A61613"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span>Invite user</span>
          </div>

          {/* УДАЛИТЬ ссылку на модалку */}
          <span
            style={{ cursor: 'pointer' }}
            onClick={() => setUserDetailsPopup(true)}
          >
            modal user Details 2
          </span>
        </div>
      </section>

      {/* ДОБАВЛЕНИЕ ПАРТНЕРА */}
      <InviteUserPopup
        opened={openedInviteUserPopup}
        onClick={setOpenedInviteUserPopup}
        onClick2={() => alert('Invite user')}
      />
      {/* ДЕТАЛИ ЮЗЕРА СУПЕРВАЙЗЕР */}
      <UserDetailsSupervizorPopup
        opened={openedUserDetailsSupervizorPopup}
        onClick={setUserDetailsSupervizorPopup}
        onClick2={() => alert('Delete user?')}
        onClick3={() => alert('Save changes')}
      />
      {/* ДЕТАЛИ ЮЗЕРА  */}
      <UserDetailsPopup
        opened={openedUserDetailsPopup}
        onClick={setUserDetailsPopup}
        onClick2={() => setEnterNewEmailPopup(true)}
        onClick3={() => setPhoneVerificationCodePopup(true)}
      />

      {/* ИЗМЕНЕНИЕ ЕМЕЙЛА */}
      <EnterNewEmailPopup
        opened={openedEnterNewEmailPopup}
        onClick={setEnterNewEmailPopup}
        onClick2={() => {}}
      />

      {/* ПРОВЕРОЧНЫЙ КОД */}
      <PhoneVerificationCodePopup
        opened={openedPhoneVerificationCodePopup}
        onClick={setPhoneVerificationCodePopup}
        onClick2={() => {}}
      />
    </>
  );
};

export default Team;
