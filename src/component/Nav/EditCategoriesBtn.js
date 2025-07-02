export default function EditCategoryListBtn({setEditCateOpen}) {
    return (
        <button
            onClick={() => setEditCateOpen(true)}
            className="flex flex-col justify-center items-center group"
        >
            <svg
                className="pl-[3px]"
                width="40" height="31" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="path-1-inside-1_127_191" fill="white">
                    <rect width="43.2304" height="13.6365" rx="1"
                    />
                </mask>
                <rect width="43.2304" height="13.6365" rx="1"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke="#f2f2f2" strokeWidth="4" mask="url(#path-1-inside-1_127_191)" />
                <path d="M29.4636 10.2271H27.5889C27.0853 10.2271 26.6771 10.6353 26.6771 11.1389V14.5031C26.6771 15.0554 26.2294 15.5031 25.6771 15.5031H23.1179C22.5656 15.5031 22.1179 15.9508 22.1179 16.5031V18.7239C22.1179 19.2762 22.5656 19.7239 23.1179 19.7239H25.6771C26.2294 19.7239 26.6771 20.1716 26.6771 20.7239V23.9999C26.6771 24.5522 27.1248 24.9999 27.6771 24.9999H29.4636C30.0159 24.9999 30.4636 24.5522 30.4636 23.9999V20.7239C30.4636 20.1716 30.9113 19.7239 31.4636 19.7239H34.1876C34.7398 19.7239 35.1876 19.2762 35.1876 18.7239V16.5031C35.1876 15.9508 34.7398 15.5031 34.1876 15.5031H31.4636C30.9113 15.5031 30.4636 15.0554 30.4636 14.5031V11.2271C30.4636 10.6748 30.0159 10.2271 29.4636 10.2271Z"
                    className="group-hover:stroke-[#00FFC2]  duration-300"
                    fill="#444444" stroke="#f2f2f2" strokeWidth="2" />
                <path d="M50.2733 15.9091H39.2036C38.6514 15.9091 38.2036 16.3568 38.2036 16.9091V19.4546C38.2036 20.0068 38.6514 20.4546 39.2036 20.4546H50.2733C50.8256 20.4546 51.2733 20.0068 51.2733 19.4546V16.9091C51.2733 16.3568 50.8256 15.9091 50.2733 15.9091Z"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    fill="#444444" stroke="#f2f2f2" strokeWidth="2" />
                <path d="M35.3132 10.4681L38.9047 4.32138H31.7217L35.3132 10.4681Z"
                    className="group-hover:fill-[#00FFC2] duration-300"
                    fill="#f2f2f2" />
            </svg>
            <p className="text-[#f2f2f2] text-[0.7rem] group-hover:text-[#00FFC2] duration-300 leading-[0.8rem]">카테고리 <br /> 편집</p>
        </button>

    )
}