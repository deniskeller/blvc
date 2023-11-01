export enum OthersIcons {
  LOGO = 'LOGO',
  USER_ICON = 'USER_ICON',
  USER_LOGOUT = 'USER_LOGOUT',
  VEHICLES = 'VEHICLES',
  TEAM = 'TEAM',
  WEBSITE_FORMS = 'WEBSITE_FORMS',
  MERCH_STORE = 'MERCH_STORE',
  TOOLTIP = 'TOOLTIP',
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}

export const othersIcons = {
  //DASHBOARD
  [OthersIcons.LOGO]: (
    <>
      <path
        d="M3 1H15.8259C17.5457 1 19.1212 1.18357 20.5525 1.55425C21.9839 1.92139 23.2148 2.44387 24.2452 3.11462C25.2722 3.78536 26.074 4.59379 26.6472 5.53636C27.2205 6.47894 27.5053 7.52742 27.5053 8.67828C27.5053 9.38786 27.428 10.0445 27.2732 10.6482C27.1185 11.2518 26.8653 11.8202 26.5136 12.3533C26.1619 12.8828 25.6942 13.3947 25.1139 13.8783C24.5336 14.362 23.8162 14.8597 22.9651 15.361C23.8478 15.6399 24.6532 16.0141 25.3882 16.4766C26.1232 16.9426 26.7598 17.4862 27.2943 18.1146C27.8289 18.743 28.2474 19.4349 28.5498 20.1939C28.8523 20.9529 29 21.7614 29 22.6157C29 23.7948 28.7327 24.8927 28.1946 25.9129C27.6566 26.9296 26.8934 27.8157 25.9017 28.5677C24.9099 29.3196 23.7212 29.9127 22.3321 30.3469C20.9429 30.7811 19.4025 31 17.7145 31H3V1ZM10.3396 14.0089H15.1648C15.942 14.0089 16.6383 13.8889 17.2467 13.6453C17.8551 13.4017 18.3721 13.0628 18.7906 12.6286C19.2091 12.1944 19.5292 11.6755 19.7472 11.0683C19.9688 10.4646 20.0778 9.80795 20.0778 9.09838C20.0778 8.31819 19.9371 7.60155 19.6593 6.95199C19.3814 6.30242 18.9524 5.74465 18.3791 5.28218C17.8059 4.81619 17.0779 4.45611 16.1987 4.1984C15.316 3.94069 14.275 3.81007 13.0687 3.81007H10.3361V14.0089H10.3396ZM10.3396 27.9252H14.3946C15.5833 27.9252 16.6137 27.7981 17.4788 27.5368C18.344 27.2791 19.0614 26.9261 19.6276 26.4742C20.1938 26.0259 20.6123 25.4858 20.8831 24.8574C21.1539 24.2325 21.2911 23.5477 21.2911 22.8098C21.2911 21.9696 21.1645 21.1895 20.9148 20.4763C20.6651 19.7597 20.2571 19.1384 19.6909 18.6053C19.1247 18.0758 18.3827 17.6627 17.4648 17.3662C16.5469 17.0697 15.425 16.9249 14.1027 16.9249H10.3326V27.9216L10.3396 27.9252Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M35 1H42.4721V27.9252H58V31H35V1Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M64.7476 1L74.8381 21.4291L84.2027 1H89L75.2621 31H71.7728L57 1H64.7476Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M100.292 15.5209C100.292 17.4449 100.593 19.1389 101.19 20.6097C101.787 22.0806 102.577 23.3145 103.564 24.3113C104.551 25.3082 105.685 26.068 106.972 26.5839C108.256 27.0997 109.593 27.3577 110.984 27.3577C112.046 27.3577 113.033 27.1799 113.952 26.8209C114.871 26.4654 115.729 25.9809 116.53 25.3674C117.328 24.7575 118.078 24.0499 118.783 23.2483C119.484 22.4466 120.156 21.6031 120.8 20.7143L123.914 22.9415C123.242 23.9907 122.43 25.0015 121.483 25.9774C120.535 26.9533 119.469 27.8108 118.289 28.5532C117.109 29.2956 115.826 29.8881 114.435 30.3343C113.044 30.7769 111.574 31 110.019 31C107.405 31 104.995 30.6271 102.792 29.8846C100.589 29.1422 98.6868 28.0931 97.0884 26.7372C95.49 25.3814 94.242 23.7571 93.3445 21.8541C92.447 19.9545 92 17.8388 92 15.507C92 13.1752 92.4255 11.1745 93.2766 9.28188C94.1276 7.38925 95.3255 5.75455 96.8738 4.37778C98.4186 3.00101 100.271 1.92748 102.431 1.15718C104.59 0.38689 106.976 0 109.589 0C111.338 0 112.936 0.202159 114.385 0.599505C115.833 1.00034 117.152 1.55453 118.339 2.2586C119.527 2.96616 120.589 3.80965 121.522 4.79256C122.455 5.77547 123.281 6.85597 124 8.03755L120.864 10.1776C120.22 9.28885 119.523 8.45233 118.769 7.66461C118.014 6.87688 117.21 6.19024 116.358 5.60119C115.507 5.01214 114.61 4.54509 113.669 4.20351C112.729 3.86193 111.749 3.69114 110.734 3.69114C109.343 3.69114 108.02 3.94558 106.757 4.45446C105.495 4.96335 104.387 5.7197 103.428 6.71655C102.47 7.7134 101.708 8.94727 101.143 10.4181C100.575 11.889 100.292 13.5865 100.292 15.507V15.5209Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M19 44.9927C19 43.2327 20.1939 42 21.8401 42C22.7721 42 23.5578 42.3927 24 43.1636L23.4456 43.5673C23.068 42.9745 22.4796 42.6945 21.8401 42.6945C20.6361 42.6945 19.7517 43.6145 19.7517 44.9927C19.7517 46.3709 20.6327 47.2909 21.8401 47.2909C22.4796 47.2909 23.0646 47.0218 23.4456 46.4291L24 46.8327C23.5612 47.5964 22.7755 48 21.8401 48C20.1939 48 19 46.7564 19 44.9964V44.9927Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M31 44.2887V47.9454H30.2279V47.0249C29.8676 47.6289 29.1654 48 28.1765 48C26.8272 48 26 47.305 26 46.2826C26 45.373 26.5882 44.6125 28.3015 44.6125H30.1949V44.2523C30.1949 43.2444 29.6176 42.695 28.5074 42.695C27.7353 42.695 27.011 42.9642 26.5221 43.3899L26.1581 42.7968C26.7574 42.2911 27.6434 42 28.5846 42C30.125 42 31 42.7641 31 44.2887ZM30.1949 46.1734V45.2092H28.3235C27.1691 45.2092 26.7941 45.6568 26.7941 46.2644C26.7941 46.9485 27.3493 47.3742 28.3015 47.3742C29.2537 47.3742 29.8787 46.9485 30.1949 46.1734Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M37 42V42.7821C36.9339 42.7821 36.8641 42.7711 36.8091 42.7711C35.5643 42.7711 34.8042 43.5643 34.8042 44.967V48H34V42.0477H34.7711V43.2118C35.1457 42.4186 35.9021 42 37 42Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M43 44.9927C43 43.2327 44.1939 42 45.8401 42C46.7721 42 47.5612 42.3927 48 43.1636L47.4456 43.5673C47.068 42.9745 46.483 42.6945 45.8401 42.6945C44.6361 42.6945 43.7551 43.6145 43.7551 44.9927C43.7551 46.3709 44.6361 47.2909 45.8401 47.2909C46.4796 47.2909 47.0646 47.0218 47.4456 46.4291L48 46.8327C47.5612 47.5964 46.7755 48 45.8401 48C44.1939 48 43 46.7564 43 44.9964V44.9927Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M50 44.9945C50 43.2444 51.2771 42 53.0055 42C54.7338 42 56 43.2444 56 44.9945C56 46.7447 54.7338 48 53.0055 48C51.2771 48 50 46.7447 50 44.9945ZM55.1922 44.9945C55.1922 43.6155 54.2608 42.695 53.0055 42.695C51.7502 42.695 50.8078 43.6155 50.8078 44.9945C50.8078 46.3736 51.7502 47.2941 53.0055 47.2941C54.2608 47.2941 55.1922 46.3736 55.1922 44.9945Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M64 44.5426V47.9963H63.2661V44.6234C63.2661 43.3668 62.6662 42.7201 61.634 42.7201C60.4678 42.7201 59.7339 43.5138 59.7339 44.8732V48H59V42.0441H59.7004V43.1427C60.0925 42.4189 60.8264 42 61.7681 42C63.0918 42 64 42.8377 64 44.5462V44.5426Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M67 44.9927C67 43.2327 68.1939 42 69.8401 42C70.7721 42 71.5612 42.3927 72 43.1636L71.4456 43.5673C71.068 42.9745 70.483 42.6945 69.8401 42.6945C68.6361 42.6945 67.7551 43.6145 67.7551 44.9927C67.7551 46.3709 68.6361 47.2909 69.8401 47.2909C70.4796 47.2909 71.0646 47.0218 71.4456 46.4291L72 46.8327C71.5612 47.5964 70.7755 48 69.8401 48C68.1939 48 67 46.7564 67 44.9964V44.9927Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M74 40.5387C74 40.2484 74.2219 40 74.5 40C74.7781 40 75 40.2379 75 40.5282C75 40.8395 74.7875 41.0879 74.5 41.0879C74.2125 41.0879 74 40.8395 74 40.5387ZM74.1531 42.3297H74.8375V48H74.1531V42.3297Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M83.9924 45.242H78.8365C78.9316 46.4754 79.9125 47.2941 81.2624 47.2941C82.0114 47.2941 82.6806 47.0358 83.1483 46.5191L83.616 47.0358C83.0646 47.6653 82.2091 48 81.2357 48C79.3118 48 78 46.7447 78 44.9945C78 43.2444 79.2776 42 81.0114 42C82.7452 42 84 43.2226 84 44.9945C84 45.0637 83.9886 45.151 83.9886 45.242H83.9924ZM78.8365 44.6489H83.2053C83.0989 43.4955 82.2205 42.6877 81.0152 42.6877C79.8099 42.6877 78.9392 43.4955 78.8365 44.6489Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M89 42V42.7821C88.9302 42.7821 88.8641 42.7711 88.8091 42.7711C87.5643 42.7711 86.8042 43.5643 86.8042 44.967V48H86V42.0477H86.7674V43.2118C87.142 42.4186 87.8984 42 88.9963 42H89Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M97 42.0463V47.1139C97 49.0996 96.0126 50 94.0775 50C93.0108 50 91.9658 49.6833 91.3568 49.1103L91.7568 48.5196C92.3117 49.0142 93.155 49.3096 94.0559 49.3096C95.5333 49.3096 96.2108 48.6406 96.2108 47.2135V46.4769C95.7243 47.2135 94.8883 47.5943 93.9333 47.5943C92.2685 47.5943 91 46.4413 91 44.7865C91 43.1317 92.2649 42 93.9333 42C94.9099 42 95.7568 42.395 96.2432 43.153V42.0463H97ZM96.2324 44.79C96.2324 43.5409 95.2991 42.6833 94.0126 42.6833C92.7261 42.6833 91.8 43.5374 91.8 44.79C91.8 46.0427 92.7225 46.9075 94.0126 46.9075C95.3027 46.9075 96.2324 46.0391 96.2324 44.79Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
      <path
        d="M104.992 45.242H99.8365C99.9316 46.4754 100.913 47.2941 102.262 47.2941C103.011 47.2941 103.681 47.0358 104.148 46.5191L104.616 47.0358C104.065 47.6653 103.209 48 102.236 48C100.312 48 99 46.7447 99 44.9945C99 43.2444 100.278 42 102.011 42C103.745 42 105 43.2226 105 44.9945C105 45.0637 104.989 45.151 104.989 45.242H104.992ZM99.8365 44.6489H104.205C104.099 43.4955 103.221 42.6877 102.015 42.6877C100.81 42.6877 99.9392 43.4955 99.8365 44.6489Z"
        fill="#1A1A1A"
        fillOpacity="0.9"
      />
    </>
  ),

  [OthersIcons.USER_ICON]: (
    <>
      <path
        d="M19.25 20V15.3324C19.25 15.3324 17.1875 13.9989 13.75 13.9989C10.3125 13.9989 8.25 15.3324 8.25 15.3324V20M13.5438 11.3317C13.5438 11.3317 11.3438 9.99809 11.3438 8.33111C11.3438 7.71286 11.597 7.11993 12.0477 6.68277C12.4985 6.2456 13.1098 6 13.7473 6C14.3847 6 14.996 6.2456 15.4468 6.68277C15.8975 7.11993 16.1508 7.71286 16.1508 8.33111C16.1508 9.99809 13.9562 11.3317 13.9562 11.3317H13.5438Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
      <rect
        x="1"
        y="0.75"
        width="25.5"
        height="25.5"
        rx="12.75"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </>
  ),

  [OthersIcons.USER_LOGOUT]: (
    <>
      <path
        d="M11.25 1.75C11.6642 1.75 12 1.41421 12 1C12 0.585786 11.6642 0.25 11.25 0.25V1.75ZM2 21.1304V1.86957H0.5V21.1304H2ZM2.11957 1.75H11.25V0.25H2.11957V1.75ZM11.25 21.25H2.11957V22.75H11.25V21.25ZM0.5 21.1304C0.5 22.0249 1.2251 22.75 2.11957 22.75V21.25C2.05353 21.25 2 21.1965 2 21.1304H0.5ZM2 1.86957C2 1.80353 2.05353 1.75 2.11957 1.75V0.25C1.2251 0.25 0.5 0.975105 0.5 1.86957H2Z"
        fill="#1A1A1A"
      />
      <path
        d="M6.25 10.25C5.83579 10.25 5.5 10.5858 5.5 11C5.5 11.4142 5.83579 11.75 6.25 11.75V10.25ZM21.7803 11.5303C22.0732 11.2374 22.0732 10.7626 21.7803 10.4697L17.0074 5.6967C16.7145 5.40381 16.2396 5.40381 15.9467 5.6967C15.6538 5.98959 15.6538 6.46447 15.9467 6.75736L20.1893 11L15.9467 15.2426C15.6538 15.5355 15.6538 16.0104 15.9467 16.3033C16.2396 16.5962 16.7145 16.5962 17.0074 16.3033L21.7803 11.5303ZM6.25 11.75H21.25V10.25H6.25V11.75Z"
        fill="#1A1A1A"
      />
    </>
  ),

  [OthersIcons.VEHICLES]: (
    <>
      <path
        d="M4.97619 18.8235H7.35714M21.6429 18.8235H24.0238M3.9369 12.82C5.51548 13.1597 9.46429 13.8824 14.5 13.8824C19.5357 13.8824 23.4845 13.1597 25.0631 12.82M3.9369 12.82C5.0147 10.2974 5.57148 7.56853 5.57143 4.80912V4H23.4286V4.81035C23.4287 7.56935 23.9855 10.2978 25.0631 12.82M3.9369 12.82C3.49741 13.8485 2.97408 14.8362 2.37262 15.7724L2 16.3529V25H4.67857L4.76786 24.8518C5.19591 24.1411 5.79112 23.5551 6.49753 23.1488C7.20393 22.7426 7.99831 22.5294 8.80595 22.5294H20.1941C21.0017 22.5294 21.7961 22.7426 22.5025 23.1488C23.2089 23.5551 23.8041 24.1411 24.2321 24.8518L24.3214 25H27V16.3529L26.6274 15.7724C26.0259 14.8362 25.5026 13.8485 25.0631 12.82"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </>
  ),

  [OthersIcons.TEAM]: (
    <>
      <path
        d="M17.881 29V21.2547C17.881 20.6226 18.1318 20.0164 18.5783 19.5695C19.0248 19.1226 19.6304 18.8715 20.2619 18.8715V9.33875C20.2619 9.33875 18.4762 8.14716 15.5 8.14716C12.5238 8.14716 10.7381 9.33875 10.7381 9.33875V18.8715C11.3696 18.8715 11.9752 19.1226 12.4217 19.5695C12.8682 20.0164 13.119 20.6226 13.119 21.2547V29M5.38095 29V21.2547C5.38095 20.6226 5.1301 20.0164 4.68359 19.5695C4.23707 19.1226 3.63147 18.8715 3 18.8715V9.33875C3 9.33875 4.78571 8.14716 7.7619 8.14716M25.619 29V21.2547C25.619 20.6226 25.8699 20.0164 26.3164 19.5695C26.7629 19.1226 27.3685 18.8715 28 18.8715V9.33875C28 9.33875 26.2143 8.14716 23.2381 8.14716M15.3214 5.76398C15.3214 5.76398 13.4167 4.57239 13.4167 3.0829C13.4167 2.53048 13.6359 2.00069 14.0262 1.61007C14.4164 1.21945 14.9457 1 15.4976 1C16.0495 1 16.5788 1.21945 16.9691 1.61007C17.3593 2.00069 17.5786 2.53048 17.5786 3.0829C17.5786 4.57239 15.6786 5.76398 15.6786 5.76398H15.3214ZM7.58333 5.76398C7.58333 5.76398 5.67857 4.57239 5.67857 3.0829C5.67857 2.80937 5.7324 2.53852 5.83697 2.28581C5.94155 2.0331 6.09483 1.80348 6.28807 1.61007C6.4813 1.41665 6.71071 1.26323 6.96318 1.15855C7.21565 1.05388 7.48625 1 7.75952 1C8.0328 1 8.3034 1.05388 8.55587 1.15855C8.80834 1.26323 9.03775 1.41665 9.23098 1.61007C9.42421 1.80348 9.5775 2.0331 9.68207 2.28581C9.78665 2.53852 9.84048 2.80937 9.84048 3.0829C9.84048 4.57239 7.94048 5.76398 7.94048 5.76398H7.58333ZM23.0595 5.76398C23.0595 5.76398 21.1548 4.57239 21.1548 3.0829C21.1548 2.53048 21.374 2.00069 21.7643 1.61007C22.1545 1.21945 22.6838 1 23.2357 1C23.7876 1 24.3169 1.21945 24.7072 1.61007C25.0974 2.00069 25.3167 2.53048 25.3167 3.0829C25.3167 4.57239 23.4167 5.76398 23.4167 5.76398H23.0595Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </>
  ),

  [OthersIcons.WEBSITE_FORMS]: (
    <>
      <path
        d="M2 8.57971L14.3641 16.2899H14.6359L27 8.57971M27 5.82609V24H26.4565C23.1957 23.4493 17.7609 23.1739 14.5 23.1739C11.2391 23.1739 5.80435 23.4493 2.54348 24H2V5.82609C5.26087 5.27536 11.2391 5 14.5 5C17.7609 5 23.7391 5.27536 27 5.82609Z"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </>
  ),

  [OthersIcons.MERCH_STORE]: (
    <>
      <path
        d="M11.9565 7.32369V6.08835C11.9565 5.26927 12.2772 4.48374 12.8479 3.90456C13.4187 3.32538 14.1928 3 15 3C15.8072 3 16.5813 3.32538 17.1521 3.90456C17.7228 4.48374 18.0435 5.26927 18.0435 6.08835V6.35518C18.0435 7.37084 17.6458 8.34489 16.9381 9.06305C12.8815 13.1794 7.79877 16.0997 2.23322 17.5115L1 17.8241V21.5301L1.952 21.8513C10.4216 24.7162 19.5784 24.7162 28.048 21.8513L29 21.5301V17.8241L27.7668 17.5115C24.0693 16.5736 20.5691 14.9657 17.4348 12.7654"
        stroke="#1A1A1A"
        strokeWidth="1.5"
      />
    </>
  ),

  [OthersIcons.TOOLTIP]: (
    <>
      <path
        d="M5.25 4.17934C5.83579 3.66678 6.78553 3.66678 7.37132 4.17934C7.95711 4.69191 7.95711 5.52294 7.37132 6.0355C7.26936 6.12471 7.15638 6.1984 7.03621 6.25655C6.66337 6.43699 6.31066 6.75571 6.31066 7.16992V7.54492M10.8105 6.41992C10.8105 8.9052 8.79583 10.9199 6.31055 10.9199C3.82527 10.9199 1.81055 8.9052 1.81055 6.41992C1.81055 3.93464 3.82527 1.91992 6.31055 1.91992C8.79583 1.91992 10.8105 3.93464 10.8105 6.41992ZM6.31055 9.04492H6.3143V9.04867H6.31055V9.04492Z"
        stroke="#050405"
        strokeOpacity="0.3"
        strokeWidth="0.788835"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </>
  ),

  [OthersIcons.EDIT]: (
    <>
      <g clipPath="url(#clip0_11199_15769)">
        <path
          d="M9.16667 20.625H21.0833M3.20833 14.6667L16.5 1.375C17.594 1.375 18.6432 1.8096 19.4168 2.58318C20.1904 3.35677 20.625 4.40598 20.625 5.5L7.33333 18.7917H6.41667C4.60717 18.7917 3.32108 19.327 1.815 20.3317L1.375 20.625L1.66833 20.185C2.67392 18.678 3.20833 17.3919 3.20833 15.5833V14.6667Z"
          stroke="#1A1A1A"
          strokeOpacity="0.6"
        />
      </g>
      <defs>
        <clipPath id="clip0_11199_15769">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </>
  ),

  [OthersIcons.DELETE]: (
    <>
      <g clipPath="url(#clip0_11156_27146)">
        <path
          d="M9.5 9V18M14.5 9V18M8.5 4.5H2.5V4.75L2.74 5.8C3.90961 10.9169 4.49999 16.1491 4.5 21.398V22.5H19.5V21.398C19.5 16.149 20.09 10.918 21.26 5.8L21.5 4.75V4.5H15.5M8.5 4.5V4C8.5 3.54037 8.59053 3.08525 8.76642 2.66061C8.94231 2.23597 9.20012 1.85013 9.52513 1.52513C9.85013 1.20012 10.236 0.942313 10.6606 0.766422C11.0852 0.59053 11.5404 0.5 12 0.5C12.4596 0.5 12.9148 0.59053 13.3394 0.766422C13.764 0.942313 14.1499 1.20012 14.4749 1.52513C14.7999 1.85013 15.0577 2.23597 15.2336 2.66061C15.4095 3.08525 15.5 3.54037 15.5 4V4.5M8.5 4.5H15.5"
          stroke="#A61613"
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_11156_27146">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </>
  ),
};
