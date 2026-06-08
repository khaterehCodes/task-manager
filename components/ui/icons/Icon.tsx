import { IconType } from "./iconType";

function Icon({ name, style, ...props }: IconType) {
  const iconColor = style?.color || "currentColor";
  switch (name) {
    case "closeTerms":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6666 10.6665L21.3333 21.3332"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.3333 10.6665L10.6666 21.3332"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "listview":
      return (
        <svg
          {...props}
          style={{
            color: iconColor,
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 12H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.414 10.586C7.195 11.367 7.195 12.633 6.414 13.414C5.633 14.195 4.367 14.195 3.586 13.414C2.805 12.633 2.805 11.367 3.586 10.586C4.367 9.80499 5.633 9.80499 6.414 10.586"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 5H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.02 4.508L4.673 5.996L8 3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 19H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.414 17.586C7.195 18.367 7.195 19.633 6.414 20.414C5.633 21.195 4.367 21.195 3.586 20.414C2.805 19.633 2.805 18.367 3.586 17.586C4.367 16.805 5.633 16.805 6.414 17.586"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "columnViem":
      return (
        <svg
          {...props}
          style={{
            color: iconColor,
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 21.0001V9.06006"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 9.06006H11C9.89543 9.06006 9 9.95549 9 11.0601V21.0001"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 15.0601H9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendarNav":
      return (
        <svg
          {...props}
          style={{
            color: iconColor,
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 2V6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 9H21"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.01301 12.729C6.87501 12.729 6.76301 12.841 6.76401 12.979C6.76401 13.117 6.87601 13.229 7.01401 13.229C7.15201 13.229 7.26401 13.117 7.26401 12.979C7.26401 12.841 7.15201 12.729 7.01301 12.729"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.013 12.729C11.875 12.729 11.763 12.841 11.764 12.979C11.764 13.117 11.876 13.229 12.014 13.229C12.152 13.229 12.264 13.117 12.264 12.979C12.264 12.841 12.152 12.729 12.013 12.729"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.013 12.729C16.875 12.729 16.763 12.841 16.764 12.979C16.764 13.117 16.876 13.229 17.014 13.229C17.152 13.229 17.264 13.117 17.264 12.979C17.264 12.841 17.152 12.729 17.013 12.729"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.01301 16.729C6.87501 16.729 6.76301 16.841 6.76401 16.979C6.76401 17.117 6.87601 17.229 7.01401 17.229C7.15201 17.229 7.26401 17.117 7.26401 16.979C7.26401 16.841 7.15201 16.729 7.01301 16.729"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.013 16.729C11.875 16.729 11.763 16.841 11.764 16.979C11.764 17.117 11.876 17.229 12.014 17.229C12.152 17.229 12.264 17.117 12.264 16.979C12.264 16.841 12.152 16.729 12.013 16.729"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "share":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.53 7.52002L9.46997 10.56"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4048 4.64228C17.1984 5.43582 17.1984 6.72242 16.4048 7.51596C15.6113 8.3095 14.3247 8.3095 13.5311 7.51596C12.7376 6.72241 12.7376 5.43582 13.5311 4.64228C14.3247 3.84873 15.6113 3.84873 16.4048 4.64228"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.53 16.4802L9.46997 13.4402"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4048 16.4843C17.1984 17.2779 17.1984 18.5645 16.4048 19.358C15.6113 20.1515 14.3247 20.1515 13.5311 19.358C12.7376 18.5645 12.7376 17.2779 13.5311 16.4843C14.3247 15.6908 15.6113 15.6908 16.4048 16.4843"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.46542 10.5648C10.2582 11.3576 10.2582 12.6429 9.46542 13.4356C8.67266 14.2284 7.38733 14.2284 6.59457 13.4356C5.80181 12.6429 5.80181 11.3575 6.59457 10.5648C7.38734 9.77202 8.67266 9.77202 9.46542 10.5648"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.0586"
            cy="11.0588"
            r="7.06194"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.0033 20.0034L16.0517 16.0518"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "filter":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.12132 4.87868C9.29289 6.05025 9.29289 7.94975 8.12132 9.12132C6.94975 10.2929 5.05025 10.2929 3.87868 9.12132C2.70711 7.94975 2.70711 6.05025 3.87868 4.87868C5.05025 3.70711 6.94975 3.70711 8.12132 4.87868"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 7H9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.1213 14.8787C21.2929 16.0502 21.2929 17.9497 20.1213 19.1213C18.9497 20.2929 17.0502 20.2929 15.8787 19.1213C14.7071 17.9497 14.7071 16.0502 15.8787 14.8787C17.0502 13.7071 18.9497 13.7071 20.1213 14.8787"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 17H15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "restore":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.125 18.0584C15.7 17.1167 18.3334 13.8667 18.3334 10.0001C18.3334 5.40008 14.6334 1.66675 10 1.66675C4.44169 1.66675 1.66669 6.30008 1.66669 6.30008M5.36669 6.30008H3.34169H1.66669V2.50008"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66669 10C1.66669 14.6 5.40002 18.3333 10 18.3333"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="3 3"
          />
        </svg>
      );
    case "downArrow":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 10L12 14L16 10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "upArrow":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 14L12 10L16 14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "add":
      return (
        <svg
          {...props}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 8V16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 12H8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "logout":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 3H18C19.105 3 20 3.895 20 5V19C20 20.105 19.105 21 18 21H6C4.895 21 4 20.105 4 19V5C4 3.895 4.895 3 6 3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 11V13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5.00302V18.998C4 20.485 5.565 21.452 6.894 20.787L10.894 18.787C11.572 18.447 12 17.755 12 16.997V7.00302C12 6.24502 11.572 5.55302 10.894 5.21402L6.894 3.21402C5.565 2.54902 4 3.51602 4 5.00302Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "lightMode":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
            stroke="#1E1E1E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
            stroke="#1E1E1E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "darkMode":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.03009 12.42C2.39009 17.57 6.76009 21.76 11.9901 21.99C15.6801 22.15 18.9801 20.43 20.9601 17.72C21.7801 16.61 21.3401 15.87 19.9701 16.12C19.3001 16.24 18.6101 16.29 17.8901 16.26C13.0001 16.06 9.00009 11.97 8.98009 7.14002C8.97009 5.84002 9.24009 4.61002 9.73009 3.49002C10.2701 2.25002 9.62009 1.66002 8.37009 2.19002C4.41009 3.86002 1.70009 7.85002 2.03009 12.42Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "link":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.02459 10.9158C8.76456 10.6888 8.36974 10.7156 8.14273 10.9756C7.91572 11.2356 7.94248 11.6305 8.2025 11.8575L9.02459 10.9158ZM14.1628 11.3866L14.5738 11.8575C14.5845 11.8482 14.5948 11.8386 14.6047 11.8286L14.1628 11.3866ZM9.56295 4.00416C9.3163 4.24563 9.31211 4.64134 9.55359 4.88799C9.79507 5.13464 10.1908 5.13883 10.4374 4.89735L9.56295 4.00416ZM10.9757 9.08413C11.2358 9.31114 11.6306 9.28438 11.8576 9.02435C12.0846 8.76433 12.0578 8.3695 11.7978 8.14249L10.9757 9.08413ZM5.83752 8.61331L5.42648 8.14249C5.41585 8.15177 5.40554 8.1614 5.39557 8.17137L5.83752 8.61331ZM10.4374 15.9958C10.684 15.7544 10.6882 15.3587 10.4467 15.112C10.2052 14.8654 9.80954 14.8612 9.56289 15.1027L10.4374 15.9958ZM8.2025 11.8575C10.0275 13.4507 12.7489 13.4507 14.5738 11.8575L13.7518 10.9158C12.3977 12.0979 10.3786 12.0979 9.02459 10.9158L8.2025 11.8575ZM14.6047 11.8286L15.9914 10.4419L15.1075 9.55806L13.7209 10.9447L14.6047 11.8286ZM15.996 10.4372C17.7405 8.65541 17.7254 5.8013 15.9622 4.03804L15.0783 4.92192C16.357 6.20068 16.368 8.27054 15.1028 9.56277L15.996 10.4372ZM15.9622 4.03804C14.1989 2.27478 11.3448 2.25967 9.56295 4.00416L10.4374 4.89735C11.7297 3.63221 13.7995 3.64317 15.0783 4.92192L15.9622 4.03804ZM11.7978 8.14249C9.97285 6.54923 7.25144 6.54923 5.42648 8.14249L6.24856 9.08413C7.60258 7.90202 9.62171 7.90202 10.9757 9.08413L11.7978 8.14249ZM5.39557 8.17137L4.00893 9.55806L4.89282 10.4419L6.27947 9.05524L5.39557 8.17137ZM4.00428 9.56276C2.25979 11.3446 2.2749 14.1987 4.03816 15.962L4.92204 15.0781C3.64329 13.7993 3.63233 11.7295 4.89747 10.4372L4.00428 9.56276ZM4.03816 15.962C5.80142 17.7252 8.65553 17.7403 10.4374 15.9958L9.56289 15.1027C8.27066 16.3678 6.2008 16.3568 4.92204 15.0781L4.03816 15.962Z"
            fill="currentColor"
          />
        </svg>
      );
    case "userInfo":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5.2C16.7 6.9 16.7 9.6 15 11.2C13.3 12.8 10.6 12.9 8.99999 11.2C7.39999 9.5 7.29999 6.8 8.99999 5.2C10.7 3.6 13.3 3.6 15 5.2"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 20C4 17.5 6 15.5 8.5 15.5H11.1"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 21H16.3L19.7 17.6C20.1 17.2 20.1 16.6 19.7 16.2L18.8 15.3C18.4 14.9 17.8 14.9 17.4 15.3L14 18.7V21V21H14Z"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "accountInfo":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="8.24835"
            r="4.25177"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.99667 20.0033C3.99667 17.5173 6.01251 15.5015 8.49855 15.5015H11.0826"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.0029 16.9399L16.0017 19.9412L14.2019 18.1404"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "setting":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.1213 9.87868C15.2929 11.0502 15.2929 12.9497 14.1213 14.1213C12.9497 15.2929 11.0502 15.2929 9.87865 14.1213C8.70708 12.9497 8.70708 11.0502 9.87865 9.87868C11.0502 8.70711 12.9497 8.70711 14.1213 9.87868"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.18 18.725V18.725C16.683 19.228 17.5 19.228 18.003 18.725L18.725 18.003C19.228 17.5 19.228 16.683 18.725 16.18V16.18C18.343 15.798 18.231 15.225 18.441 14.727C18.463 14.674 18.485 14.621 18.506 14.567C18.689 14.101 19.143 13.801 19.643 13.801H19.71C20.422 13.801 20.999 13.224 20.999 12.512V11.491C20.999 10.779 20.422 10.202 19.71 10.202H19.643C19.143 10.202 18.689 9.901 18.506 9.436C18.485 9.382 18.463 9.329 18.441 9.276C18.231 8.778 18.343 8.205 18.725 7.823V7.823C19.228 7.32 19.228 6.503 18.725 6L18.003 5.278C17.5 4.775 16.683 4.775 16.18 5.278V5.278C15.798 5.66 15.225 5.772 14.727 5.562C14.674 5.54 14.621 5.518 14.567 5.497C14.101 5.311 13.8 4.856 13.8 4.356V4.289C13.8 3.577 13.223 3 12.511 3H11.49C10.777 3 10.2 3.577 10.2 4.289V4.356C10.2 4.856 9.899 5.31 9.434 5.493C9.38 5.515 9.327 5.536 9.274 5.559C8.776 5.769 8.203 5.657 7.821 5.275V5.275C7.318 4.772 6.501 4.772 5.998 5.275L5.275 5.997C4.772 6.5 4.772 7.317 5.275 7.82V7.82C5.657 8.202 5.769 8.775 5.559 9.273C5.536 9.327 5.515 9.38 5.494 9.434C5.311 9.899 4.856 10.2 4.356 10.2H4.289C3.577 10.2 3 10.777 3 11.489V12.51C3 13.223 3.577 13.8 4.289 13.8H4.356C4.856 13.8 5.31 14.101 5.493 14.566C5.514 14.62 5.536 14.673 5.558 14.726C5.768 15.224 5.656 15.797 5.274 16.179V16.179C4.771 16.682 4.771 17.499 5.274 18.002L5.996 18.724C6.499 19.227 7.316 19.227 7.819 18.724V18.724C8.201 18.342 8.774 18.23 9.272 18.44C9.325 18.462 9.378 18.484 9.432 18.505C9.898 18.688 10.198 19.142 10.198 19.642V19.709C10.198 20.421 10.775 20.998 11.487 20.998H12.508C13.22 20.998 13.797 20.421 13.797 19.709V19.642C13.797 19.142 14.098 18.688 14.563 18.505C14.617 18.484 14.67 18.462 14.723 18.44C15.224 18.231 15.797 18.343 16.18 18.725V18.725Z"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "return":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.48001 11.98H19.47"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.483 5.98779L19.52 11.9998L13.483 18.0118"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "backIcon":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.01001 11.98H19"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.013 5.988L4.00201 12L10.013 18.012"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "noColor":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7.5" cy="7.5" r="7" stroke="black" />
          <line
            x1="12.3536"
            y1="2.35355"
            x2="2.35355"
            y2="12.3536"
            stroke="black"
          />
        </svg>
      );
    case "closeCalendar":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8L16 16"
            stroke="#C8C8C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 8L8 16"
            stroke="#C8C8C8"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "prevMonth":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 16L14 12L10 8"
            stroke="#7D828C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "nextMonth":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 8L10 12L14 16"
            stroke="#7D828C"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "grayFlag":
      return (
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.12739 25.7352V4.81616"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.2841 17.1813V4.90192"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.12744 17.1568C6.12744 17.1568 7.19974 16.2659 10.4166 16.2659C13.6335 16.2659 15.7781 18.3823 18.995 18.3823C22.2119 18.3823 23.2842 17.185 23.2842 17.185"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.12744 4.81861C6.12744 4.81861 7.19974 3.67645 10.4166 3.67645C13.6335 3.67645 15.7781 5.79287 18.995 5.79287C22.2119 5.79287 23.2842 4.90194 23.2842 4.90194"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "more":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.4191 9.99997C15.4191 10.2302 15.2325 10.4168 15.0023 10.4168C14.7721 10.4168 14.5854 10.2302 14.5854 9.99997C14.5854 9.76976 14.7721 9.58313 15.0023 9.58313C15.2325 9.58313 15.4191 9.76976 15.4191 9.99997"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.4172 9.99997C10.4172 10.2302 10.2306 10.4168 10.0003 10.4168C9.77012 10.4168 9.5835 10.2302 9.5835 9.99997C9.5835 9.76976 9.77012 9.58313 10.0003 9.58313C10.2306 9.58313 10.4172 9.76976 10.4172 9.99997"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.41486 9.99997C5.41486 10.2302 5.22823 10.4168 4.99802 10.4168C4.7678 10.4168 4.58118 10.2302 4.58118 9.99997C4.58118 9.76976 4.7678 9.58313 4.99802 9.58313C5.22823 9.58313 5.41486 9.76976 5.41486 9.99997"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "edit":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5 9.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H10"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.5 12.5L10.125 12.1759C10.3092 12.1534 10.4808 12.0692 10.6125 11.9384L16.9717 5.5792C17.6758 4.87504 17.6758 3.73337 16.9717 3.02837V3.02837C16.2675 2.3242 15.1258 2.3242 14.4208 3.02837L8.12083 9.32837C7.99333 9.45587 7.91083 9.62087 7.885 9.80004L7.5 12.5Z"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "editColor":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99911 5.31244C9.87245 5.31244 9.76995 5.41494 9.77162 5.5416C9.77162 5.66827 9.87411 5.77077 10.0008 5.77077C10.1274 5.77077 10.2299 5.66827 10.2299 5.5416C10.2283 5.41494 10.1266 5.31244 9.99911 5.31244"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.76992 9.99911C5.76992 9.87245 5.66742 9.76995 5.54159 9.77162C5.41493 9.77162 5.31243 9.87411 5.31243 10.0008C5.31243 10.1274 5.41493 10.2299 5.54159 10.2299C5.66826 10.2299 5.76992 10.1266 5.76992 9.99911"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3141 6.68495C13.225 6.59578 13.08 6.59578 12.9916 6.68578C12.9025 6.77495 12.9025 6.91995 12.9916 7.00911C13.0808 7.09828 13.2258 7.09828 13.315 7.00911C13.4041 6.91911 13.4041 6.77495 13.3141 6.68495"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.00833 12.9907C6.91917 12.9016 6.77417 12.9016 6.68584 12.9916C6.59667 13.0807 6.59667 13.2257 6.68584 13.3149C6.775 13.4041 6.92 13.4041 7.00917 13.3149C7.09833 13.2257 7.09833 13.0807 7.00833 12.9907"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.0091 7.00827C7.09826 6.91911 7.09826 6.77411 7.00826 6.68578C6.9191 6.59661 6.7741 6.59661 6.68493 6.68578C6.59577 6.77494 6.59577 6.91994 6.68493 7.00911C6.7741 7.09827 6.9191 7.09827 7.0091 7.00827"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99994 17.4999C5.78747 17.4999 2.38582 14.0266 2.50332 9.78744C2.61165 5.87413 5.87413 2.61165 9.78744 2.50332C14.0266 2.38582 17.4999 5.78747 17.4999 9.99994V10.8333C17.4999 11.7541 16.7541 12.4999 15.8332 12.4999H14.1141C13.0066 12.4999 12.2074 13.5599 12.5116 14.6241L12.7257 15.3749C13.0307 16.4399 12.2308 17.4999 11.1241 17.4999H9.99994Z"
            stroke="#323232"
            strokeWidth="1.24999"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "delete":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4483 17.5H6.54831C5.67581 17.5 4.95081 16.8266 4.88581 15.9558L4.13831 5.83331H15.8333L15.1108 15.9516C15.0483 16.8241 14.3225 17.5 13.4483 17.5V17.5Z"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 9.16669V14.1667"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.33337 5.83335H16.6667"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.1667 5.83333L13.3225 3.58167C13.0784 2.93083 12.4567 2.5 11.7617 2.5H8.23837C7.54337 2.5 6.92171 2.93083 6.67754 3.58167L5.83337 5.83333"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.8583 9.16669L12.5 14.1667"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.14167 9.16669L7.50001 14.1667"
            stroke="#FA5252"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "member":
      return (
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.53125"
            y="0.53125"
            width="32.9375"
            height="32.9375"
            rx="16.4688"
            stroke="#C1C1C1"
            strokeWidth="1.0625"
            strokeDasharray="2.12 2.12"
          />
          <path
            d="M19.5 11.3333C20.9167 12.7499 20.9167 14.9999 19.5 16.3333C18.0833 17.6666 15.8333 17.7499 14.5 16.3333C13.1667 14.9166 13.0833 12.6666 14.5 11.3333C15.9167 9.99992 18.0833 9.99992 19.5 11.3333"
            stroke="#C1C1C1"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.3333 23.6667C10.3333 21.5834 12 19.9167 14.0833 19.9167H16.25"
            stroke="#C1C1C1"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5833 24.0834V19.9167"
            stroke="#C1C1C1"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.5 21.9999H23.6667"
            stroke="#C1C1C1"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "priority":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#C1C1C1"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M16.4216 36.0294V15.1104"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.5784 27.4754V15.196"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 27.451C16.4216 27.451 17.4939 26.5601 20.7108 26.5601C23.9277 26.5601 26.0723 28.6765 29.2892 28.6765C32.5061 28.6765 33.5784 27.4792 33.5784 27.4792"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 15.1129C16.4216 15.1129 17.4939 13.9707 20.7108 13.9707C23.9277 13.9707 26.0723 16.0871 29.2892 16.0871C32.5061 16.0871 33.5784 15.1962 33.5784 15.1962"
            stroke="#C1C1C1"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendarTask":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#BDC0C6"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M30 12.5V17.5"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 12.5V17.5"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 21.25H36.25"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M33.75 15H16.25C14.8687 15 13.75 16.1187 13.75 17.5V33.75C13.75 35.1313 14.8687 36.25 16.25 36.25H33.75C35.1313 36.25 36.25 35.1313 36.25 33.75V17.5C36.25 16.1187 35.1313 15 33.75 15Z"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7663 25.9111C18.5938 25.9111 18.4538 26.0511 18.4551 26.2236C18.4551 26.3961 18.5951 26.5361 18.7676 26.5361C18.9401 26.5361 19.0801 26.3961 19.0801 26.2236C19.0801 26.0511 18.9401 25.9111 18.7663 25.9111"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.0163 25.9111C24.8438 25.9111 24.7038 26.0511 24.7051 26.2236C24.7051 26.3961 24.8451 26.5361 25.0176 26.5361C25.1901 26.5361 25.3301 26.3961 25.3301 26.2236C25.3301 26.0511 25.1901 25.9111 25.0163 25.9111"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.2663 25.9111C31.0938 25.9111 30.9538 26.0511 30.9551 26.2236C30.9551 26.3961 31.0951 26.5361 31.2676 26.5361C31.4401 26.5361 31.5801 26.3961 31.5801 26.2236C31.5801 26.0511 31.4401 25.9111 31.2663 25.9111"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.7663 30.9111C18.5938 30.9111 18.4538 31.0511 18.4551 31.2236C18.4551 31.3961 18.5951 31.5361 18.7676 31.5361C18.9401 31.5361 19.0801 31.3961 19.0801 31.2236C19.0801 31.0511 18.9401 30.9111 18.7663 30.9111"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.0163 30.9111C24.8438 30.9111 24.7038 31.0511 24.7051 31.2236C24.7051 31.3961 24.8451 31.5361 25.0176 31.5361C25.1901 31.5361 25.3301 31.3961 25.3301 31.2236C25.3301 31.0511 25.1901 30.9111 25.0163 30.9111"
            stroke="#BDC0C6"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "tag":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#C1C1C1"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M21.5252 22.7273C21.7008 22.903 21.7008 23.1877 21.5252 23.3634C21.3495 23.539 21.0648 23.539 20.8891 23.3634C20.7135 23.1877 20.7135 22.903 20.8891 22.7273C21.0648 22.5517 21.3495 22.5517 21.5252 22.7273"
            stroke="#C1C1C1"
            strokeWidth="1.83824"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.6446 18.0026L33.4804 26.8384C34.4265 27.7845 34.4265 29.3188 33.4804 30.2649L28.4265 35.3188C27.4804 36.2649 25.9461 36.2649 25 35.3188L16.1642 26.483C15.9375 26.2563 15.8088 25.9475 15.8088 25.6264V18.8592C15.8088 18.1901 16.3517 17.6472 17.0208 17.6472H23.7892C24.1103 17.6472 24.4179 17.7747 24.6446 18.0026V18.0026Z"
            stroke="#C1C1C1"
            strokeWidth="1.83824"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.1912 22.5491L26.2181 14.6778C25.7586 14.2244 25.1409 13.9707 24.4963 13.9707H19.4853"
            stroke="#C1C1C1"
            strokeWidth="1.83824"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "redFlag":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 17.4998V3.2749"
            stroke="#FB0606"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 11.6832V3.33325"
            stroke="#FB0606"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 11.6666C4.16663 11.6666 4.89579 11.0608 7.08328 11.0608C9.27077 11.0608 10.7291 12.5 12.9166 12.5C15.1041 12.5 15.8332 11.6858 15.8332 11.6858"
            stroke="#FB0606"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 3.27666C4.16663 3.27666 4.89579 2.5 7.08328 2.5C9.27077 2.5 10.7291 3.93916 12.9166 3.93916C15.1041 3.93916 15.8332 3.33333 15.8332 3.33333"
            stroke="#FB0606"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "yellowFlag":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 17.4998V3.2749"
            stroke="#FFE605"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 11.6832V3.33325"
            stroke="#FFE605"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 11.6666C4.16663 11.6666 4.89579 11.0608 7.08328 11.0608C9.27077 11.0608 10.7291 12.5 12.9166 12.5C15.1041 12.5 15.8332 11.6858 15.8332 11.6858"
            stroke="#FFE605"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 3.27666C4.16663 3.27666 4.89579 2.5 7.08328 2.5C9.27077 2.5 10.7291 3.93916 12.9166 3.93916C15.1041 3.93916 15.8332 3.33333 15.8332 3.33333"
            stroke="#FFE605"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "greenFlag":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 17.4998V3.2749"
            stroke="#09DBCE"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 11.6832V3.33325"
            stroke="#09DBCE"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 11.6666C4.16663 11.6666 4.89579 11.0608 7.08328 11.0608C9.27077 11.0608 10.7291 12.5 12.9166 12.5C15.1041 12.5 15.8332 11.6858 15.8332 11.6858"
            stroke="#09DBCE"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 3.27666C4.16663 3.27666 4.89579 2.5 7.08328 2.5C9.27077 2.5 10.7291 3.93916 12.9166 3.93916C15.1041 3.93916 15.8332 3.33333 15.8332 3.33333"
            stroke="#09DBCE"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "grayFlagL":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.16667 17.4998V3.2749"
            stroke="#B3ACAC"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8333 11.6832V3.33325"
            stroke="#B3ACAC"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 11.6666C4.16663 11.6666 4.89579 11.0608 7.08328 11.0608C9.27077 11.0608 10.7291 12.5 12.9166 12.5C15.1041 12.5 15.8332 11.6858 15.8332 11.6858"
            stroke="#B3ACAC"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.16663 3.27666C4.16663 3.27666 4.89579 2.5 7.08328 2.5C9.27077 2.5 10.7291 3.93916 12.9166 3.93916C15.1041 3.93916 15.8332 3.33333 15.8332 3.33333"
            stroke="#B3ACAC"
            strokeWidth="1.62499"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "deletePrioperty":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.66663 6.66675L13.3333 13.3334"
            stroke="#E45454"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.3333 6.66675L6.66663 13.3334"
            stroke="#E45454"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "removeTag":
      return (
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.41187 3.41187L6.82375 6.82375"
            stroke="#1E1E1E"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.82375 3.41187L3.41187 6.82375"
            stroke="#1E1E1E"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "editTag":
      return (
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.66293 4.53772V7.83789C8.66293 8.29372 8.29372 8.66293 7.83789 8.66293H2.06259C1.60676 8.66293 1.23755 8.29372 1.23755 7.83789V2.06259C1.23755 1.60676 1.60676 1.23755 2.06259 1.23755H4.95024"
            stroke="#BDBDBD"
            strokeWidth="0.618782"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.71271 6.1877L5.01215 6.02723C5.10332 6.01609 5.1883 5.97443 5.25347 5.90966L8.40142 2.76171C8.75 2.41313 8.75 1.84798 8.40142 1.49898V1.49898C8.05284 1.1504 7.48769 1.1504 7.1387 1.49898L4.02004 4.61764C3.95692 4.68076 3.91608 4.76244 3.90329 4.85113L3.71271 6.1877Z"
            stroke="#BDBDBD"
            strokeWidth="0.618782"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "editTagsColor":
      return (
        <svg
          width="11"
          height="11"
          viewBox="0 0 11 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.11742 2.71876C5.0526 2.71876 5.00014 2.77122 5.00099 2.83605C5.00099 2.90087 5.05345 2.95333 5.11828 2.95333C5.1831 2.95333 5.23556 2.90087 5.23556 2.83605C5.23471 2.77122 5.18268 2.71876 5.11742 2.71876"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.95299 5.11742C2.95299 5.0526 2.90054 5.00014 2.83614 5.00099C2.77131 5.00099 2.71885 5.05345 2.71885 5.11828C2.71885 5.1831 2.77131 5.23556 2.83614 5.23556C2.90096 5.23556 2.95299 5.18268 2.95299 5.11742"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.81395 3.42128C6.76832 3.37565 6.69411 3.37565 6.6489 3.42171C6.60327 3.46734 6.60327 3.54155 6.6489 3.58718C6.69454 3.63282 6.76875 3.63282 6.81438 3.58718C6.86001 3.54112 6.86001 3.46734 6.81395 3.42128"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.58672 6.64833C3.54108 6.6027 3.46688 6.6027 3.42167 6.64876C3.37603 6.69439 3.37603 6.7686 3.42167 6.81423C3.4673 6.85987 3.54151 6.85987 3.58715 6.81423C3.63278 6.7686 3.63278 6.69439 3.58672 6.64833"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.58718 3.58684C3.63281 3.54121 3.63281 3.467 3.58675 3.42179C3.54112 3.37616 3.46691 3.37616 3.42127 3.42179C3.37564 3.46742 3.37564 3.54163 3.42127 3.58727C3.46691 3.6329 3.54112 3.6329 3.58718 3.58684"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.11784 8.95634C2.96196 8.95634 1.22104 7.17874 1.28118 5.00921C1.33662 3.00643 3.00631 1.33674 5.00909 1.2813C7.17862 1.22116 8.95622 2.96208 8.95622 5.11796V5.54445C8.95622 6.01572 8.57451 6.39742 8.10324 6.39742H7.2234C6.6566 6.39742 6.2476 6.93991 6.40327 7.48453L6.51288 7.8688C6.66897 8.41385 6.25954 8.95634 5.69317 8.95634H5.11784Z"
            stroke="#BDBDBD"
            strokeWidth="0.639729"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "redP":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#FB0606"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M16.4216 36.0294V15.1104"
            stroke="#FB0606"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.5784 27.4754V15.196"
            stroke="#FB0606"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 27.451C16.4216 27.451 17.4939 26.5601 20.7108 26.5601C23.9277 26.5601 26.0723 28.6765 29.2892 28.6765C32.5061 28.6765 33.5784 27.4792 33.5784 27.4792"
            stroke="#FB0606"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 15.1129C16.4216 15.1129 17.4939 13.9707 20.7108 13.9707C23.9277 13.9707 26.0723 16.0871 29.2892 16.0871C32.5061 16.0871 33.5784 15.1962 33.5784 15.1962"
            stroke="#FB0606"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "yellowP":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#FFE605"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M16.4216 36.0294V15.1104"
            stroke="#FFE605"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.5784 27.4754V15.196"
            stroke="#FFE605"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 27.451C16.4216 27.451 17.4939 26.5601 20.7108 26.5601C23.9277 26.5601 26.0723 28.6765 29.2892 28.6765C32.5061 28.6765 33.5784 27.4792 33.5784 27.4792"
            stroke="#FFE605"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 15.1129C16.4216 15.1129 17.4939 13.9707 20.7108 13.9707C23.9277 13.9707 26.0723 16.0871 29.2892 16.0871C32.5061 16.0871 33.5784 15.1962 33.5784 15.1962"
            stroke="#FFE605"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "greenP":
      return (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.694444"
            y="0.694444"
            width="48.6111"
            height="48.6111"
            rx="24.3056"
            stroke="#09DBCE"
            strokeWidth="1.38889"
            strokeDasharray="2.78 2.78"
          />
          <path
            d="M16.4216 36.0294V15.1104"
            stroke="#09DBCE"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M33.5784 27.4754V15.196"
            stroke="#09DBCE"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 27.451C16.4216 27.451 17.4939 26.5601 20.7108 26.5601C23.9277 26.5601 26.0723 28.6765 29.2892 28.6765C32.5061 28.6765 33.5784 27.4792 33.5784 27.4792"
            stroke="#09DBCE"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4216 15.1129C16.4216 15.1129 17.4939 13.9707 20.7108 13.9707C23.9277 13.9707 26.0723 16.0871 29.2892 16.0871C32.5061 16.0871 33.5784 15.1962 33.5784 15.1962"
            stroke="#09DBCE"
            strokeWidth="2.3897"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "dropDown":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21V21C7.029 21 3 16.971 3 12Z"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 11L12 14L9 11"
            stroke="#323232"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "desc":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.66528 2.66502H13.3364"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66577 5.33298H13.3361"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66577 8.00046H13.3361"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.66528 10.6684H13.3364"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.00073 13.3359H13.3363"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "littleTik":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.1373 6.74133L7.46792 9.40911L5.86312 7.80911"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="1.99789"
            y="1.99744"
            width="12.005"
            height="12.005"
            rx="3.33333"
            stroke="#BDC0C6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "changeStatus":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85667 9.35167L10.0042 12.5L16.4 6.10417C15.0833 3.94583 12.7133 2.5 10 2.5C5.8575 2.5 2.5 5.8575 2.5 10C2.5 14.1425 5.8575 17.5 10 17.5C13.86 17.5 17.0358 14.5833 17.4508 10.8333"
            stroke="#323232"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "comment":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3.99658C7.02789 3.99658 2.99622 7.35666 2.99622 11.4968C3.07137 13.9951 4.44922 16.2717 6.62773 17.497C6.41133 18.085 6.11043 18.6384 5.7345 19.1398C5.527 19.4427 5.53214 19.8433 5.74732 20.1409C5.96251 20.4384 6.34137 20.5687 6.69406 20.4665C7.89689 20.1163 9.02904 19.558 10.0391 18.817C10.6857 18.9382 11.3422 18.9985 12 18.997C16.972 18.997 21.0037 15.6369 21.0037 11.4968C21.0037 7.35667 16.972 3.99658 12 3.99658Z"
            stroke="#AEAEAE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.99872 9.99923H15.0012"
            stroke="#AEAEAE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.99872 13.0007H12"
            stroke="#AEAEAE"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.3307 2.66699V8.00032"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.6667 2.66699V8.00032"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12.0007H28"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.3333 5.33398H6.66667C5.19333 5.33398 4 6.52732 4 8.00065V25.334C4 26.8073 5.19333 28.0007 6.66667 28.0007H25.3333C26.8067 28.0007 28 26.8073 28 25.334V8.00065C28 6.52732 26.8067 5.33398 25.3333 5.33398Z"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.6653 15.8333C23.4813 15.8333 23.332 15.9827 23.3333 16.1667C23.3333 16.3507 23.4827 16.5 23.6667 16.5C23.8507 16.5 24 16.3507 24 16.1667C24 15.9827 23.8507 15.8333 23.6653 15.8333"
            stroke="#BDBDBD"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "archive":
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.6766 8.87019V2.67834"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.67659 8.8702L12.0957 6.45105L9.67659 8.8702Z"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.41914 12.0958H5.95271C6.25788 12.0958 6.5369 12.2681 6.67362 12.5409L7.03407 13.2626C7.17069 13.536 7.45014 13.7087 7.75578 13.7085H11.5966C11.9022 13.7087 12.1817 13.536 12.3183 13.2626L12.6788 12.5417C12.8154 12.2683 13.0948 12.0956 13.4005 12.0958H16.934"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0957 2.41913H14.5149C15.8509 2.41913 16.934 3.50222 16.934 4.83828V14.5149C16.934 15.8509 15.8509 16.934 14.5149 16.934H4.83829C3.50223 16.934 2.41914 15.8509 2.41914 14.5149V4.83828C2.41914 3.50222 3.50223 2.41913 4.83829 2.41913H7.25744"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.25745 6.45105L9.67659 8.8702L7.25745 6.45105Z"
            stroke="#323232"
            strokeWidth="1.20907"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

export default Icon;
