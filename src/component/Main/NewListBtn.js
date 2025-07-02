import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewListBtn() {
  const [open, setOpen] = useState(false);
  
  return(
    <div
      className={`h-11 z-30 overflow-hidden absolute bottom-0 right-0 px-2 py-3 mb-2 flex flex-col-reverse justify-between items-center duration-150 gap-5 
      ${open && "outline outline-1 h-[7rem] bg-[#1c1b1b]/50" }
      outline-[#00FFC2] rounded-full`}
      onClick={() => setOpen(!open)}
    >
      <button>
        <svg
          className={`w-[2rem] fill-[#1c1b1b] duration-500
          ${open && '-rotate-45'}`}
          viewBox="0 0 27 27"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_34_402)">
            <path
              d="M9.36937 10.0789H9.86937V9.57895V0.5H16.5991V9.57895V10.0789H17.0991H25.5V15.693H17.0991H16.5991V16.193V25.5H9.86937V16.193V15.693H9.36937H0.5V10.0789H9.36937Z"
              stroke={open ? "#00FFC2" : "#F2F2F2"}
              shapeRendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_34_402"
              x="0"
              y="0"
              width="27"
              height="27"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values={
                  open
                    ? "0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.760784 0 0 0 1 0"
                    : "0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 1 0"
                }
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_34_402"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_34_402"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>
      {/* 검색 */}
      {/* <button className="flex flex-col justify-center items-center text-[0.5rem] text-[#00FFC2]">
        <svg
          className="w-[1.7rem] fill-[#00FFC2]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.222 15.2045L16.9698 15.5501L17.2722 15.8527L23.2069 21.7909L23.207 21.7911C23.5977 22.1817 23.5977 22.8164 23.207 23.207C22.8163 23.5976 22.1814 23.5977 21.7906 23.2072C21.7906 23.2071 21.7906 23.2071 21.7906 23.2071C21.7906 23.2071 21.7905 23.2071 21.7905 23.207L15.856 17.269L15.5528 16.9657L15.2069 17.219C13.6775 18.3392 11.7929 18.9971 9.75048 18.9971C4.64033 18.9971 0.5 14.8575 0.5 9.74857C0.5 4.63966 4.64033 0.5 9.75048 0.5C14.8606 0.5 19.001 4.63966 19.001 9.74857C19.001 11.7898 18.3386 13.6745 17.222 15.2045ZM8.12542 13.873C8.12542 14.7725 8.85096 15.4978 9.75048 15.4978C10.65 15.4978 11.3755 14.7725 11.3755 13.873V11.3734H13.8757C14.7752 11.3734 15.5007 10.6482 15.5007 9.74857C15.5007 8.84899 14.7752 8.12374 13.8757 8.12374H11.3755V5.62418C11.3755 4.7246 10.65 3.99934 9.75048 3.99934C8.85096 3.99934 8.12542 4.7246 8.12542 5.62418V8.12374H5.62527C4.72576 8.12374 4.00022 8.84899 4.00022 9.74857C4.00022 10.6482 4.72576 11.3734 5.62527 11.3734H8.12542V13.873Z" />
        </svg>
        검색
      </button> */}
      {/* 직접작성 */}
      <Link
        className="flex flex-col justify-center items-center text-[0.5rem] text-[#00FFC2]"
        to={"UserCreate"}
      >
        <svg
          className="w-[1.7rem] translate-x-[0.1rem] fill-[#00FFC2]"
          viewBox="0 0 26 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.10142 10.5C10.4808 10.5 11.8036 9.94688 12.779 8.96231C13.7543 7.97775 14.3022 6.64239 14.3022 5.25C14.3022 3.85761 13.7543 2.52226 12.779 1.53769C11.8036 0.553123 10.4808 0 9.10142 0C7.72208 0 6.39923 0.553123 5.42389 1.53769C4.44855 2.52226 3.90061 3.85761 3.90061 5.25C3.90061 6.64239 4.44855 7.97775 5.42389 8.96231C6.39923 9.94688 7.72208 10.5 9.10142 10.5ZM7.24457 12.4688C3.24238 12.4688 0 15.7418 0 19.7818C0 20.4545 0.540397 21 1.20675 21H13.1158C12.9898 20.6391 12.9655 20.2453 13.0589 19.8598L13.6684 17.3947C13.7822 16.9312 14.0178 16.5129 14.351 16.1766L15.9884 14.5236C14.6842 13.2521 12.9126 12.4688 10.9542 12.4688H7.24457ZM24.9395 9.66738C24.3057 9.02754 23.2777 9.02754 22.6398 9.66738L21.4452 10.8732L24.33 13.7854L25.5246 12.5795C26.1585 11.9396 26.1585 10.902 25.5246 10.258L24.9395 9.66738ZM15.2733 17.1035C15.1067 17.2717 14.9889 17.4809 14.932 17.7146L14.3225 20.1797C14.2657 20.4053 14.3307 20.6391 14.4932 20.8031C14.6557 20.9672 14.8873 21.0328 15.1108 20.9754L17.5527 20.3602C17.7803 20.3027 17.9916 20.1838 18.1581 20.0156L23.4077 14.7123L20.5229 11.8002L15.2733 17.1035Z" />
        </svg>
        사용자 작성
      </Link>
    </div>
  );
}
