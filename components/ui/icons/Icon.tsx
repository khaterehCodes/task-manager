import { IconType } from "./iconType";

function Icon({ name, ...props }: IconType) {
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
  }
}

export default Icon;
