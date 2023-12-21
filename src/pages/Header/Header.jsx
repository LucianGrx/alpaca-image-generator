import "./Header.css";

const Header = () => {
  return (
    <header className="container__header">
      <div className="header__logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="32"
          viewBox="0 0 31 32"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 0C1.79086 0 0 1.79086 0 4V28C0 30.2091 1.79086 32 4 32H26.1176C28.3268 32 30.1176 30.2091 30.1176 28V4C30.1176 1.79086 28.3268 0 26.1177 0H4ZM6.27448 26.9804V5.01962L20.3315 18.4754L20.3195 5.01962L23.8431 8.37473V26.9804L9.93863 13.4465V23.3005L16.8672 23.3684L20.6153 26.9804H6.27448Z"
            fill="white"
          />
        </svg>
        <p className="header__logo-title">BLucian</p>
      </div>
      <div className="header__social">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.99925 0.300018C4.19567 0.300018 0.300049 4.19513 0.300049 9.00031C0.300049 12.8436 2.79263 16.1047 6.24977 17.2557C6.68505 17.3352 6.84368 17.0666 6.84368 16.8359C6.84368 16.6292 6.8362 16.0823 6.83193 15.3565C4.41198 15.882 3.9014 14.19 3.9014 14.19C3.50564 13.1849 2.93524 12.9173 2.93524 12.9173C2.14532 12.3779 2.99505 12.3885 2.99505 12.3885C3.86828 12.45 4.3276 13.2853 4.3276 13.2853C5.10362 14.6146 6.36407 14.2306 6.8597 14.0079C6.93875 13.446 7.16359 13.0626 7.41194 12.8452C5.48015 12.6251 3.44903 11.879 3.44903 8.54526C3.44903 7.59512 3.78817 6.8191 4.34469 6.21077C4.25496 5.99073 3.95641 5.10626 4.43014 3.90831C4.43014 3.90831 5.16023 3.67438 6.82231 4.7997C7.51609 4.60689 8.26061 4.51076 9.00032 4.50702C9.73949 4.51076 10.4835 4.60689 11.1783 4.7997C12.8393 3.67438 13.5684 3.90831 13.5684 3.90831C14.0432 5.10626 13.7446 5.99073 13.6554 6.21077C14.213 6.8191 14.5495 7.59512 14.5495 8.54526C14.5495 11.8876 12.5151 12.623 10.5775 12.8382C10.8894 13.1069 11.1676 13.6378 11.1676 14.4496C11.1676 15.6123 11.157 16.5507 11.157 16.8359C11.157 17.0687 11.314 17.3395 11.7551 17.2546C15.2096 16.1015 17.7 12.8431 17.7 9.00031C17.7 4.19513 13.8044 0.300018 8.99925 0.300018"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.78022 5.63557C8.78022 3.61782 10.4155 1.9823 12.4321 1.9823C13.6793 1.9823 14.6652 2.60693 15.2984 3.49713L15.2201 3.30274C15.9381 3.162 16.6127 2.89945 17.2217 2.53811C16.9862 3.27432 16.4868 3.8928 15.8359 4.28256C16.474 4.20609 17.081 4.03693 17.646 3.78656L17.6446 3.78859C17.2231 4.41992 16.6885 4.97411 16.0727 5.41936L16.0442 5.3485C16.0777 5.56512 16.0949 5.78357 16.0949 6.00097C16.0949 10.3815 12.7582 15.4695 6.62565 15.4695C4.74688 15.4695 2.99718 14.9191 1.52424 13.9741C1.29183 13.8249 1.2243 13.5157 1.37342 13.2832C1.37947 13.2738 1.38578 13.2647 1.39234 13.2558C1.47036 13.0805 1.6556 12.9685 1.85613 12.9921C3.04024 13.1316 4.22747 12.9692 5.25699 12.4705C4.22933 12.0859 3.42458 11.2452 3.08833 10.1962C3.03988 10.0451 3.07464 9.87959 3.17981 9.76071C3.20504 9.73219 3.23344 9.70736 3.26418 9.6865C2.46843 9.02567 1.96186 8.02891 1.96186 6.91372V6.87312C1.96186 6.71367 2.04624 6.56612 2.18368 6.48527C2.26776 6.4358 2.36401 6.41582 2.45798 6.42549C2.15871 5.89977 1.98757 5.2913 1.98757 4.64351C1.98757 4.07949 1.99256 3.3971 2.37265 2.78443C2.45703 2.64841 2.60214 2.57304 2.75118 2.57161C2.93101 2.53009 3.12703 2.59013 3.25155 2.74283C4.60026 4.39673 6.5581 5.53052 8.78395 5.80169C8.78147 5.74664 8.78022 5.69126 8.78022 5.63557ZM6.62565 14.4695C5.53711 14.4695 4.49777 14.2632 3.5425 13.8881C4.69098 13.7509 5.80027 13.3373 6.73929 12.6014C6.88921 12.4839 6.94892 12.2847 6.88836 12.1041C6.82781 11.9236 6.6601 11.8006 6.46965 11.7973C5.53905 11.7809 4.72207 11.2928 4.24884 10.5618C4.5269 10.5513 4.79769 10.5095 5.05803 10.4391C5.25961 10.3846 5.39721 10.1986 5.39032 9.9899C5.38343 9.78119 5.23387 9.60464 5.02913 9.56354C4.00937 9.35882 3.19755 8.57964 2.94429 7.57865C3.22538 7.65962 3.52051 7.70742 3.82491 7.71738C4.02572 7.72395 4.20656 7.59661 4.26804 7.40533C4.32952 7.21405 4.25675 7.00519 4.08973 6.89352C3.36446 6.40866 2.88757 5.58082 2.88757 4.64351C2.88757 4.35691 2.89296 4.10807 2.92466 3.88592C4.54791 5.60942 6.81036 6.72502 9.33627 6.8522C9.49264 6.86007 9.64367 6.79425 9.74434 6.67434C9.84501 6.55444 9.88371 6.3943 9.8489 6.24165C9.80414 6.04542 9.78022 5.84316 9.78022 5.63557C9.78022 4.16983 10.968 2.9823 12.4321 2.9823C13.9842 2.9823 15.0949 4.41635 15.0949 6.00097C15.0949 9.95152 12.0911 14.4695 6.62565 14.4695Z"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.4909 15.4908C15.8838 15.0981 16.1901 14.6274 16.3905 14.1093C16.5834 13.6132 16.7152 13.0462 16.7532 12.2159C16.7911 11.384 16.8001 11.1184 16.8001 9.00002C16.8001 6.88169 16.7911 6.61595 16.7532 5.78411C16.7152 4.95386 16.5834 4.38689 16.3905 3.89075C16.1947 3.3703 15.8877 2.89882 15.4909 2.50921C15.1012 2.11235 14.6298 1.80526 14.1093 1.60937C13.6131 1.41668 13.0461 1.28485 12.2158 1.2471C11.3841 1.20899 11.1184 1.20001 9.00002 1.20001C6.88166 1.20001 6.61595 1.20899 5.78412 1.24696C4.95386 1.28485 4.38689 1.41668 3.89075 1.60951C3.3703 1.80538 2.89883 2.1124 2.50921 2.50919C2.11234 2.89877 1.80523 3.37024 1.60931 3.89071C1.41662 4.38689 1.28479 4.95386 1.24704 5.78411C1.20893 6.61595 1.19995 6.88166 1.19995 9.00002C1.19995 11.1184 1.20893 11.3841 1.24704 12.2159C1.28495 13.0462 1.41678 13.6132 1.60961 14.1093C1.80547 14.6298 2.11249 15.1012 2.50928 15.4908C2.89889 15.8877 3.37036 16.1946 3.89081 16.3905C4.38698 16.5833 4.95396 16.7152 5.78418 16.7531C6.61613 16.791 6.88175 16.8 9.0001 16.8C11.1184 16.8 11.3842 16.791 12.216 16.7531C13.0462 16.7152 13.6132 16.5833 14.1093 16.3905C14.6275 16.1901 15.0981 15.8837 15.4909 15.4908ZM2.39934 8.08196C2.39964 8.3343 2.40001 8.63453 2.40001 9.00004C2.40001 9.36554 2.39964 9.66577 2.39934 9.9181C2.39814 10.9032 2.39784 11.1583 2.42351 11.7186C2.45545 12.4211 2.49383 12.9373 2.61101 13.3264C2.72366 13.7004 2.85001 14.0811 3.26251 14.5405C3.67501 14.9999 4.07288 15.208 4.57969 15.3609C5.0865 15.5136 5.72347 15.5465 6.27658 15.5717C6.90394 15.6004 7.15258 15.6003 8.46852 15.5999H9.00002C9.3516 15.5999 9.64278 15.6001 9.88903 15.6005C10.8983 15.6016 11.1531 15.6018 11.7189 15.5759C12.4214 15.544 12.9376 15.5056 13.3267 15.3885C13.7007 15.2758 14.0814 15.1494 14.5407 14.7369C15.0001 14.3244 15.2082 13.9265 15.361 13.4197C15.5139 12.9129 15.5468 12.2759 15.572 11.7228C15.6006 11.0963 15.6004 10.8483 15.6002 9.537V9.53687L15.6001 9.00048V8.46898C15.6004 7.15303 15.6006 6.90439 15.5719 6.27703C15.5467 5.72393 15.5138 5.08696 15.361 4.58015C15.2082 4.07335 15.0001 3.67547 14.5407 3.26297C14.0814 2.85047 13.7006 2.72412 13.3267 2.61146C12.9375 2.49428 12.4213 2.45591 11.7188 2.42396C11.153 2.39804 10.8983 2.39832 9.88906 2.39942C9.64279 2.3997 9.35161 2.40002 9.00002 2.40002L8.4684 2.39993C7.15256 2.39958 6.90392 2.39951 6.27658 2.42813C5.72347 2.45336 5.0865 2.48621 4.57969 2.63906C4.07288 2.79192 3.67501 3 3.26251 3.45938C2.85001 3.91876 2.72366 4.29944 2.61101 4.67345C2.49383 5.0625 2.45545 5.57874 2.42351 6.28126C2.39784 6.84158 2.39814 7.09682 2.39934 8.08196ZM8.9999 6.30019C7.50884 6.30019 6.3001 7.50894 6.3001 9C6.3001 10.4911 7.50884 11.6998 8.9999 11.6998C10.491 11.6998 11.6997 10.4911 11.6997 9C11.6997 7.50894 10.491 6.30019 8.9999 6.30019ZM5.1001 9C5.1001 6.84619 6.8461 5.10019 8.9999 5.10019C11.1537 5.10019 12.8997 6.84619 12.8997 9C12.8997 11.1538 11.1537 12.8998 8.9999 12.8998C6.8461 12.8998 5.1001 11.1538 5.1001 9ZM13.1636 5.73637C13.6606 5.73637 14.0636 5.33344 14.0636 4.83637C14.0636 4.33932 13.6606 3.93637 13.1636 3.93637C12.6666 3.93637 12.2636 4.33932 12.2636 4.83637C12.2636 5.33344 12.6666 5.73637 13.1636 5.73637Z"
            fill="white"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
