export default function EditDefaultKeyBtn({setKeySettingOpen}) {
    return (
        <button
            onClick={() => setKeySettingOpen(true)}
            className="flex flex-col justify-center items-center group">
            <svg 
            className="pl-[5px]"
            width="40" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_127_190" fill="white">
                    <rect width="9" height="22.4483" rx="1" />
                </mask>
                <rect width="9" height="22.4483" rx="1"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke="#f2f2f2" strokeWidth="3" mask="url(#path-1-inside-1_127_190)" />
                <mask id="path-2-inside-2_127_190" fill="white">
                    <rect x="24" width="9" height="22.4483" rx="1" />
                </mask>
                <rect x="24" width="9" height="22.4483" rx="1"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke="#f2f2f2" strokeWidth="3" mask="url(#path-2-inside-2_127_190)" />
                <mask id="path-3-inside-3_127_190" fill="white">
                    <rect x="16" width="9" height="22.4483" rx="1" />
                </mask>
                <rect x="16" width="9" height="22.4483" rx="1"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke="#f2f2f2" strokeWidth="3" mask="url(#path-3-inside-3_127_190)" />
                <rect x="22" width="5" height="11.7586" rx="1"
                    className="group-hover:fill-[#00FFC2] duration-300"
                    fill="#f2f2f2" />
                <rect x="6" width="5" height="11.7586" rx="1"
                    className="group-hover:fill-[#00FFC2] duration-300"
                    fill="#f2f2f2" />
                <mask id="path-6-inside-4_127_190" fill="white">
                    <rect x="8" width="9" height="22.4483" rx="1" />
                </mask>
                <rect x="8" width="9" height="22.4483" rx="1"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke="#f2f2f2" strokeWidth="3" mask="url(#path-6-inside-4_127_190)" />
                <rect x="14" width="5" height="11.7586" rx="1"
                    className="group-hover:fill-[#00FFC2] duration-300"
                    fill="#f2f2f2" />
                <path
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    d="M43.499 11.7905L43.4999 11.7915C44.1667 12.5042 44.1667 13.6842 43.4999 14.397L42.2428 15.7407L38.2744 11.4989L39.3261 10.3747H39.3302L39.6266 10.0579C40.2579 9.38309 41.2507 9.38306 41.882 10.0578C41.882 10.0578 41.8821 10.0578 41.8821 10.0579L43.499 11.7905ZM27.1361 23.4088L27.1362 23.4086L35.9772 13.9547L39.9453 18.1961L31.0054 27.7478L31.0052 27.7479C30.6944 28.0801 30.3118 28.3201 29.8977 28.4521C29.8973 28.4523 29.8969 28.4524 29.8964 28.4526L25.0073 29.9904C25.0058 29.9866 25.0044 29.9823 25.0033 29.9772C24.9987 29.9581 24.9986 29.9352 25.0049 29.9121L26.4576 24.6355C26.4577 24.635 26.4579 24.6345 26.458 24.6341C26.5895 24.163 26.8247 23.7416 27.1361 23.4088Z" fill="#444444" stroke="#f2f2f2" strokeWidth="2" />
            </svg>
            <p className="text-[#f2f2f2] text-[0.7rem] group-hover:text-[#00FFC2] duration-300 leading-[0.8rem]">
                기본 음역 <br /> 변경
            </p>
        </button>
    )
}