import { useState } from "react";

export default function UserGuide() {
    const [vh, setVh] = useState(window.visualViewport.height);
    //뷰포트 크기 변화 감지
    window.addEventListener("resize", function () {
        setVh(window.visualViewport.height);
    })

    const [openList, setOpenList] = useState([]);

    const toggle = (num) => {
        setOpenList(prev =>
            prev.includes(num) ?
                prev.filter(item => item !== num)
                :
                [...prev, num]
        );
    };


    return (
        <article
            className="relative px-4 py-2 flex flex-col  overflow-hidden"
            style={{
                maxHeight: vh - 180,
                height: vh - 180,
            }}
        >
            <div
                style={{ height: 100 % - 31 }}
                className="flex flex-col grow relative border-2 pt-2 pb-4 mt-2">
                <h2 className="py-1 text-[1.3rem] font-[600] px-8">도움말</h2>
                <hr />
                <ul className="flex flex-col gap-1 overflow-y-auto custom-scrollbar px-8  pt-4 pb-6">
                    {/* about singing! */}
                    <li>
                        <button
                            onClick={() => toggle(0)}
                            style={{ color: openList.includes(0) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            About Singing!
                            &nbsp;
                            <span className="">{openList.includes(0) ? "−" : "+"}</span>
                        </button>
                        <div
                            style={{ maxHeight: openList.includes(0) ? "7rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <div
                                style={{ borderColor: openList.includes(0) ? "#00ffc2" : "#eaeaea" }}
                                className="border h-[7rem] p-2 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth custom-scrollbar">
                                <p>
                                    노래방에 가면 부르고 싶었던 노래!
                                    <br />
                                    집에 돌아오니 생각난적이 있으신가요?
                                    <br />
                                    <br />
                                    이 노래, 키를 낮춰 불렀던가? 올려 불렸던가?  <br />
                                    매번 헷갈리는 당신!
                                    <br />
                                    <br />
                                    Singing!으로 노래와 키를 함께 저장해보세요!
                                    <br />
                                    Singing!은 노래방러버들을 위한 노래리스트 저장소입니다.
                                </p>
                            </div>
                        </div>
                    </li>

                    {/* My List 기본설명*/}
                    <li>
                        <button
                            onClick={() => toggle(1)}
                            style={{ color: openList.includes(1) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            리스트 기본 설명
                            &nbsp;
                            <span className="">{openList.includes(1) ? "−" : "+"}</span>
                        </button>
                        <div
                            style={{ maxHeight: openList.includes(1) ? "10rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ul
                                style={{ borderColor: openList.includes(1) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[10rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">

                                {/* 앨범커버 */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={0} />
                                    <p className="pt-2 px-1">
                                        곡 추가 시 저장한 앨범커버가 표시됩니다.
                                        <br />
                                        저장한 이미지가 없을 시 기본 이미지로 표시됩니다.
                                    </p>
                                </li>


                                {/* 곡제목, 가수명 */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={1} />
                                    <p className="pt-2 px-1">
                                        곡제목과 가수명이 표시됩니다.
                                    </p>
                                </li>

                                {/* key */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={2} />
                                    <p className="pt-2 px-1">
                                        key(음역)가 표시됩니다.
                                        <br />
                                        ex) C, G, F# 등
                                    </p>
                                </li>

                                {/* liked */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={3} />
                                    <p className="pt-2 px-1">
                                        클릭하여 '좋아요'를 활성화/비활성화 할 수 있는 버튼입니다.
                                    </p>
                                </li>

                                {/* edit */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={4} />
                                    <p className="pt-2 px-1">
                                        수정 버튼입니다.
                                        <br />
                                        클릭시 해당 리스트의 정보를 수정할 수 있는 창이 나타납니다.
                                    </p>
                                </li>

                                {/* memo */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={5} />
                                    <p className="pt-2 px-1">
                                        더블클릭(모바일은 탭)시 해당 리스트의 메모를 볼 수 있습니다.
                                    </p>
                                </li>

                                {/* remove */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <MyList num={6} />
                                    <p className="pt-2 px-1">
                                        리스트 좌측을 드래그해 삭제 버튼을 활성화됩니다.
                                        <br />
                                        휴지통 버튼을 눌러 리스트를 삭제합니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>


                    {/* 리스트 검색 */}
                    <li>
                        <button
                            onClick={() => toggle(2)}
                            style={{ color: openList.includes(2) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            노래 검색하기
                            &nbsp;
                            <span className="">{openList.includes(2) ? "−" : "+"}</span>
                        </button>
                        <div
                            style={{ maxHeight: openList.includes(2) ? "10rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ul
                                style={{ borderColor: openList.includes(2) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[10rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">

                                {/* 버튼 */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <FilterSearch num={"search0"} />
                                    <p className="pt-2 px-1">
                                        돋보기 모양의 버튼을 클릭해 검색창을 열어주세요.
                                    </p>
                                </li>

                                {/* 검색창 */}
                                <li className="h-[10rem] snap-start pt-2">
                                    <FilterSearch num={"search1"} />
                                    <p className="pt-2 px-1">
                                        검색창에 곡제목으로 검색하세요.
                                        <br />
                                        검색어를 포함한 리스트를 확인하실 수 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* 노래추가 */}
                    <li>
                        <button
                            onClick={() => toggle(3)}
                            style={{ color: openList.includes(3) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            노래 추가하기
                            &nbsp;
                            <span className="">{openList.includes(3) ? "−" : "+"}</span>
                        </button>
                        <div
                            style={{ maxHeight: openList.includes(3) ? "11rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ol
                                style={{ borderColor: openList.includes(3) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[11rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">
                                {/* 리스트추가 1 */}
                                <li className="h-[11rem] snap-start pt-2">
                                    <div className="flex flex-col w-full h-[6rem]  border overflow-hidden">
                                        <div className=" relative border-x-2 border-b-2 mx-4 mb-2 h-[3.5rem]">
                                            <div
                                                className="absolute bottom-[0.4rem] right-[0.7rem] w-10 h-10 rounded-full border-[3px] border-[#f8ff2a]"></div>
                                            <svg
                                                className="w-[1.8rem] fill-[#1c1b1b] absolute bottom-3 right-4"
                                                viewBox="0 0 27 27"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g filter="url(#filter0_d_34_402)">
                                                    <path
                                                        d="M9.36937 10.0789H9.86937V9.57895V0.5H16.5991V9.57895V10.0789H17.0991H25.5V15.693H17.0991H16.5991V16.193V25.5H9.86937V16.193V15.693H9.36937H0.5V10.0789H9.36937Z"
                                                        stroke="#F2F2F2"
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
                                                            values="0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 0 0.94902 0 0 0 1 0"
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

                                        </div>
                                        <div className="h-1">
                                            <Nav />
                                        </div>
                                    </div>
                                    <p className="pt-2 px-1">
                                        리스트 하단의 +모양의 버튼을 클릭해 주세요.
                                    </p>
                                </li>

                                {/* 리스트추가 2 */}
                                <li className="h-[11rem] snap-start pt-2">
                                    <div className="flex flex-col w-full h-[6rem] border overflow-hidden">
                                        <div className=" relative border-x-2 mx-4 h-full">
                                            <div className="absolute bottom-1 right-1 w-11 h-[5rem] rounded-full border border-[#00ffc2] flex flex-col justify-between items-center py-2">
                                                {/* 사용자 작성 버튼 */}
                                                <div className="text-[0.4rem] text-[#00FFC2] flex flex-col items-center">
                                                    <svg
                                                        className="w-[1.3rem] translate-x-[0.1rem] fill-[#00FFC2]"
                                                        viewBox="0 0 26 21"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.10142 10.5C10.4808 10.5 11.8036 9.94688 12.779 8.96231C13.7543 7.97775 14.3022 6.64239 14.3022 5.25C14.3022 3.85761 13.7543 2.52226 12.779 1.53769C11.8036 0.553123 10.4808 0 9.10142 0C7.72208 0 6.39923 0.553123 5.42389 1.53769C4.44855 2.52226 3.90061 3.85761 3.90061 5.25C3.90061 6.64239 4.44855 7.97775 5.42389 8.96231C6.39923 9.94688 7.72208 10.5 9.10142 10.5ZM7.24457 12.4688C3.24238 12.4688 0 15.7418 0 19.7818C0 20.4545 0.540397 21 1.20675 21H13.1158C12.9898 20.6391 12.9655 20.2453 13.0589 19.8598L13.6684 17.3947C13.7822 16.9312 14.0178 16.5129 14.351 16.1766L15.9884 14.5236C14.6842 13.2521 12.9126 12.4688 10.9542 12.4688H7.24457ZM24.9395 9.66738C24.3057 9.02754 23.2777 9.02754 22.6398 9.66738L21.4452 10.8732L24.33 13.7854L25.5246 12.5795C26.1585 11.9396 26.1585 10.902 25.5246 10.258L24.9395 9.66738ZM15.2733 17.1035C15.1067 17.2717 14.9889 17.4809 14.932 17.7146L14.3225 20.1797C14.2657 20.4053 14.3307 20.6391 14.4932 20.8031C14.6557 20.9672 14.8873 21.0328 15.1108 20.9754L17.5527 20.3602C17.7803 20.3027 17.9916 20.1838 18.1581 20.0156L23.4077 14.7123L20.5229 11.8002L15.2733 17.1035Z" />
                                                    </svg>
                                                    사용자 작성
                                                </div>
                                                <div
                                                    className="absolute -top-[0.4em] -right-[0.1rem] w-12 h-12 rounded-full border-[3px] border-[#f8ff2a]"></div>

                                                {/* x버튼 */}
                                                <svg className="w-[1.6rem] fill-[#1c1b1b] duration-500 -rotate-45" viewBox="0 0 27 27" xmlns="http://www.w3.org/2000/svg">
                                                    <g filter="url(#filter0_d)">
                                                        <path d="M9.36937 10.0789H9.86937V9.57895V0.5H16.5991V9.57895V10.0789H17.0991H25.5V15.693H17.0991H16.5991V16.193V25.5H9.86937V16.193V15.693H9.36937H0.5V10.0789H9.36937Z" stroke="#00FFC2" shapeRendering="crispEdges" />
                                                    </g>
                                                    <defs>
                                                        <filter id="filter0_d" x="0" y="0" width="27" height="27" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                            <feOffset dx="1" dy="1" />
                                                            <feComposite in2="hardAlpha" operator="out" />
                                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.760784 0 0 0 1 0" />
                                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                                                        </filter>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-2 px-1">
                                        '사용자 작성' 버튼을 눌러 리스트 생성 페이지로 이동합니다.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </li>

                    {/* 카테고리별 리스트 보기 */}
                    <li>
                        <button
                            onClick={() => toggle(4)}
                            style={{ color: openList.includes(4) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            카테고리별 리스트 보기&nbsp;
                            <span className="">{openList.includes(4) ? "−" : "+"}</span>
                        </button>

                        <div
                            style={{ maxHeight: openList.includes(4) ? "9rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ol
                                style={{ borderColor: openList.includes(4) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[9rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">
                                {/* 카테고리선택1 */}
                                <li className="h-[9rem] snap-start pt-2">
                                    <FilterSearch num={"cat0"} />
                                    <p className="pt-2 px-1">
                                        <span className="text-[0.6rem]">▼</span>  버튼을 클릭하여 카테고리 선택창을 열어주세요.
                                    </p>
                                </li>
                                {/* 카테고리선택2 */}
                                <li className="h-[9rem] snap-start pt-2">
                                    <FilterSearch num={"cat1"} />
                                    <p className="pt-2 px-1">
                                        선택창에서 원하시는 카테고리를 선택해 주세요.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </li>

                    {/* 하단네비게이션 */}
                    <li>
                        <button
                            onClick={() => toggle(5)}
                            style={{ color: openList.includes(5) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            하단 탭 메뉴
                            &nbsp;
                            <span className="">{openList.includes(5) ? "−" : "+"}</span>
                        </button>

                        <div
                            style={{ maxHeight: openList.includes(5) ? "9rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ul
                                style={{ borderColor: openList.includes(5) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[9rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">
                                {/* 좋아요 */}
                                <li className="h-[9rem] snap-start pt-2">
                                    <div className=" border">
                                        <Nav num={0} />
                                    </div>
                                    <p className="pt-2 px-1">
                                        활성화하면 ‘좋아요’한 항목만 표시되는 필터 버튼입니다.
                                        <br />
                                        비활성화시 카테고리별 전체 항목이 표시됩니다.
                                    </p>
                                </li>

                                {/* 홈버튼 */}
                                <li className="h-[9rem] snap-start pt-2">
                                    <div className=" border">
                                        <Nav num={1} />
                                    </div>
                                    <p className="pt-2 px-1">
                                        상단 로고와 더불어 메인 페이지로 이동하는 홈 버튼입니다.
                                    </p>
                                </li>

                                {/* 설정버튼 */}
                                <li className="h-[9rem] snap-start pt-2">
                                    <div className=" border">
                                        <Nav num={2} />
                                    </div>
                                    <p className="pt-2 px-1">
                                        하위 항목이 펼쳐지는 설정 버튼입니다.
                                        <br />
                                        (기본음역 변경, 카테고리 편집)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* 기본 음역 변경 */}
                    <li>
                        <button
                            onClick={() => toggle(6)}
                            style={{ color: openList.includes(6) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            기본 음역 변경하기
                            &nbsp;
                            <span className="">{openList.includes(6) ? "−" : "+"}</span>
                        </button>

                        <div
                            style={{ maxHeight: openList.includes(6) ? "12rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ol
                                style={{ borderColor: openList.includes(6) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[12rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">

                                <li className="h-[12rem] snap-start pt-2 flex flex-col justify-between">
                                    <p className="pb-5 px-1">
                                        새 리스트 생성 시 적용될 음역 기본값을 설정하는 방법입니다.
                                    </p>
                                    <div>
                                        <div className=" border">
                                            <Nav num={2} />
                                        </div>
                                        <p className="pt-2 pb-4 px-1">
                                            하단 탭 메뉴에서 설정버튼을 클릭해 주세요.
                                        </p>
                                    </div>
                                </li>

                                <li className="h-[12rem] snap-start pt-2">
                                    <div className=" border">
                                        <div className="h-24 flex flex-col justify-center items-center">
                                            <div className="border-x-2 border-b-2 w-[90%] h-full mb-2"></div>
                                            <div className="relative max-h-10 w-full">
                                                <Nav />
                                                <Nav2 num={0} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="pt-2 px-1">
                                        버튼을 클릭하면 기본 음역을 변경할 수 있는 창이 열립니다.
                                    </p>
                                </li>

                            </ol>
                        </div>
                    </li>

                    {/* 카테고리 편집하기 */}
                    <li>
                        <button
                            onClick={() => toggle(7)}
                            style={{ color: openList.includes(7) ? "#00ffc2" : "#f2f2f2" }}
                            className="w-full text-left duration-300"
                        >
                            카테고리 편집하기
                            &nbsp;
                            <span className="">{openList.includes(7) ? "−" : "+"}</span>
                        </button>

                        <div
                            style={{ maxHeight: openList.includes(7) ? "9rem" : "0" }}
                            className="overflow-hidden duration-300">
                            <ol
                                style={{ borderColor: openList.includes(7) ? "#00ffc2" : "#eaeaea" }}
                                className="snap-y snap-mandatory border h-[9rem] px-1 py-4 mb-2 text-[0.8rem] overflow-y-scroll scroll-smooth scrollbar-hidden">
                                <li className="h-[9rem] snap-start pt-2">
                                    <div className="relative border p-1 max-h-12 overflow-hidden">
                                        <FilterSearch num={"catEdit0"} />
                                    </div>
                                    <p className="pt-2 px-1">
                                        노래 리스트를 필터링하는 데 사용되는 카테고리를 추가/수정 등 편집하는 방법입니다.
                                    </p>
                                </li>

                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className=" border">
                                            <div className="h-14 flex flex-col justify-center items-center overflow-hidden">
                                                <div className="border-x-2 border-b-2 w-[90%] h-full mb-2"></div>
                                                <div className="relative max-h-10 w-full">
                                                    <Nav2 num={1} />
                                                </div>
                                            </div>
                                        </div>

                                        <p className="pt-2 pb-4 px-1">
                                            ‘설정’ 하위 메뉴에서 ‘카테고리 편집’을 클릭하면 편집 창이 열립니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className="border">
                                            <EditCat num={0} />
                                        </div>
                                        <p className="pt-2 pb-2 px-1">
                                            카테고리 순서를 변경하는 버튼입니다.
                                            <br />
                                            자주 사용하는 카테고리는 위쪽으로 올려두면 편리합니다!
                                        </p>
                                    </div>
                                </li>
                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className="border">
                                            <EditCat num={2} />
                                        </div>
                                        <p className="pt-2 pb-2 px-1">
                                            해당 카테고리 삭제 버튼입니다.
                                            <br />
                                            <span className="text-yellow-400">※주의※</span>삭제한 카테고리내에 노래가 존재하는 경우 모두 '기타' 카테고리로 이동됩니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className="border">
                                            <EditCat num={1} />
                                        </div>
                                        <p className="pt-2 pb-2 px-1">
                                            카테고리명을 클릭하면, 바로 이름을 수정할 수 있습니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className="border">
                                            <InputDone num={0} />
                                        </div>
                                        <p className="pt-2 pb-2 px-1">
                                            카테고리 이름을 작성 후 
                                            <br/>'+' 버튼으로 생성합니다.
                                        </p>
                                    </div>
                                </li>
                                <li className="h-[9rem] snap-start pt-2">
                                    <div>
                                        <div className="border">
                                            <InputDone num={1} />
                                        </div>
                                        <p className="pt-2 pb-2 px-1">
                                            편집이 끝난 후 'DONE' 버튼을 눌러 변경사항을 저장합니다.
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </li>
                </ul>
                <div className="absolute bottom-4 px-8 bg-[#f2f2f2] w-full h-[1px]"></div>
            </div>
        </article>
    )
}

// nav모형
function Nav({ num }) {
    return (
        <div className="w-full bg-[#343434] h-10 flex justify-between items-center px-4 msm:px-6">
            <div className="relative">
                <svg className="w-5 msm:w-6 duration-500"
                    viewBox="0 0 35 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9298 4.13193L17.5 4.79914L18.0702 4.13193C19.8396 2.0613 22.5561 0.75 25.375 0.75C30.3533 0.75 34.25 4.63686 34.25 9.59128C34.25 12.6375 32.8831 15.4607 30.325 18.5792C27.7583 21.7081 24.0719 25.0418 19.5568 29.1217L19.5356 29.1407L19.5336 29.1426L17.4981 30.9891L15.4663 29.1599L15.4643 29.1581L15.3973 29.0973L15.3969 29.097C10.8949 25.0203 7.22015 21.6901 4.66186 18.5653C2.11214 15.4509 0.75 12.6322 0.75 9.59128C0.75 4.63686 4.64673 0.75 9.625 0.75C12.4439 0.75 15.1604 2.0613 16.9298 4.13193Z"
                        className="group-hover:stroke-[#00FFC2] duration-300"
                        stroke="#737373"
                        strokeWidth="1.5" />
                </svg>
                <div
                    style={{ display: num === 0 ? "block" : "none" }}
                    className="absolute -inset-2 rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>

            <div className="relative">
                <svg className="w-5 msm:w-7 duration-500" viewBox="0 0 37 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M36.2449 16.3852L36.2403 16.4264V16.4678C36.2403 17.2039 35.6223 17.7867 34.9346 17.7867H32.8788H32.1256L32.1288 18.54L32.1738 28.8621C32.1738 28.8626 32.1738 28.8631 32.1738 28.8635C32.1737 29.001 32.1635 29.1454 32.1462 29.3016L32.1417 29.3428V29.3842V30.4219C32.1417 31.4344 31.3252 32.25 30.322 32.25H29.2942C29.2179 32.25 29.1813 32.2495 29.1503 32.2467L29.0895 32.2411L29.0286 32.2455C28.9698 32.2497 28.9067 32.25 28.8123 32.25H26.7245H25.1827C24.1795 32.25 23.363 31.4344 23.363 30.4219V28.875V24.75C23.363 23.1973 22.1109 21.9375 20.5573 21.9375H16.4458C14.8922 21.9375 13.6401 23.1973 13.6401 24.75V28.875V30.4219C13.6401 31.4344 12.8237 32.25 11.8204 32.25H10.2787H8.22935C8.16224 32.25 8.09091 32.2455 7.99032 32.2388L7.93401 32.235L7.87776 32.2397C7.79536 32.2466 7.74953 32.25 7.70899 32.25H6.68112C5.67792 32.25 4.86146 31.4344 4.86146 30.4219V23.2031C4.86146 23.1726 4.8615 23.1517 4.86201 23.1326C4.86209 23.1292 4.86219 23.1262 4.86229 23.1235C4.86246 23.1189 4.86265 23.1151 4.86283 23.1119C4.86311 23.1073 4.86333 23.1052 4.86333 23.1052L4.86788 23.0641V23.0227V18.5367V17.7867H4.11788H2.05573C1.31745 17.7867 0.75 17.224 0.75 16.4678C0.75 16.0855 0.865113 15.7674 1.15708 15.4672L17.6077 1.08018L17.627 1.06327L17.6452 1.04508C17.8863 0.803098 18.1542 0.75 18.5273 0.75C18.8503 0.75 19.1736 0.844773 19.3888 1.02122L35.7876 15.4834L35.7888 15.4845C36.1792 15.8272 36.2744 16.1188 36.2449 16.3852Z"
                        stroke="#737373" strokeWidth="1.5" />
                </svg>
                <div
                    style={{ display: num === 1 ? "block" : "none" }}
                    className="absolute -inset-2 rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>

            <div className="relative">
                <svg className="w-7 msm:w-9 duration-500" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <mask id="path-1-inside-1_19_4" fill="white">
                        <path d="M19.891 8.39618C20.3543 7.98066 20.537 7.3277 20.2956 6.74729C20.1455 6.39772 19.9824 6.05475 19.7997 5.72497L19.5974 5.36881C19.4016 5.03903 19.1863 4.71585 18.9579 4.40585C18.586 3.90459 17.9335 3.7397 17.3462 3.93757L15.5061 4.55096C14.8079 3.97054 14.0053 3.49566 13.144 3.17248L12.7459 1.25976C12.622 0.646368 12.1521 0.158294 11.5388 0.0857427C11.1081 0.0263824 10.6709 0 10.2272 0H10.1815C9.73782 0 9.30064 0.0263823 8.86998 0.079147C8.25661 0.151699 7.78679 0.646368 7.66282 1.25316L7.26478 3.17248C6.39693 3.50226 5.60086 3.97054 4.90266 4.55096L3.05603 3.94416C2.46877 3.74629 1.81625 3.91118 1.44431 4.41245C1.21593 4.72244 1.0006 5.04563 0.798318 5.3754L0.602562 5.72497C0.419857 6.05475 0.256727 6.39772 0.106648 6.75388C-0.134784 7.3277 0.047921 7.98066 0.511209 8.40278L1.9598 9.70871C1.88802 10.1506 1.84887 10.6123 1.84887 11.0806C1.84887 11.5489 1.88802 12.0106 1.9598 12.4591L0.511209 13.765C0.047921 14.1805 -0.134784 14.8335 0.106648 15.4139C0.256727 15.7635 0.419857 16.1064 0.602562 16.4428L0.798318 16.7858C0.994073 17.1221 1.2094 17.4387 1.44431 17.7487C1.81625 18.25 2.46877 18.4149 3.05603 18.217L4.89614 17.6036C5.59433 18.184 6.39693 18.6589 7.25825 18.9821L7.65629 20.9014C7.78027 21.5148 8.25008 22.0029 8.86345 22.0754C9.30064 22.1282 9.74435 22.1546 10.1946 22.1546C10.6448 22.1546 11.0885 22.1282 11.5257 22.0754C12.1391 22.0029 12.6089 21.5082 12.7329 20.9014L13.1309 18.9821C13.9988 18.6523 14.7948 18.184 15.493 17.6036L17.3331 18.217C17.9204 18.4149 18.5729 18.25 18.9449 17.7487C19.1732 17.4387 19.3886 17.1221 19.5843 16.7858L19.7866 16.4296C19.9693 16.0998 20.1325 15.7569 20.2825 15.4073C20.524 14.8335 20.3413 14.1805 19.878 13.7584L18.4294 12.4525C18.5012 12.004 18.5403 11.5423 18.5403 11.074C18.5403 10.6057 18.5012 10.144 18.4294 9.69551L19.878 8.38959L19.891 8.39618ZM7.06902 11.0806C7.06902 10.2409 7.39901 9.43569 7.98639 8.84197C8.57377 8.24825 9.37043 7.91471 10.2011 7.91471C11.0318 7.91471 11.8285 8.24825 12.4158 8.84197C13.0032 9.43569 13.3332 10.2409 13.3332 11.0806C13.3332 11.9202 13.0032 12.7255 12.4158 13.3192C11.8285 13.9129 11.0318 14.2465 10.2011 14.2465C9.37043 14.2465 8.57377 13.9129 7.98639 13.3192C7.39901 12.7255 7.06902 11.9202 7.06902 11.0806ZM32.6934 32.4833C33.1045 32.9516 33.7505 33.1362 34.3247 32.8922C34.6706 32.7405 35.0099 32.5756 35.3361 32.3909L35.6885 32.1865C36.0148 31.9886 36.3345 31.771 36.6412 31.5401C37.1371 31.1642 37.3002 30.5046 37.1045 29.911L36.4976 28.051C37.0718 27.3453 37.5417 26.5341 37.8614 25.6634L39.7602 25.2611C40.3671 25.1358 40.8499 24.6609 40.9217 24.0409C40.9739 23.599 41 23.1505 41 22.6954C41 22.2403 40.9739 21.7918 40.9217 21.3499C40.8499 20.7299 40.3605 20.2551 39.7602 20.1297L37.8614 19.7208C37.5351 18.8436 37.0718 18.0389 36.4976 17.3332L37.1045 15.4733C37.3002 14.8796 37.1371 14.2201 36.6412 13.8441C36.3345 13.6133 36.0148 13.3956 35.6885 13.1912L35.3427 12.9933C35.0164 12.8086 34.6771 12.6437 34.3247 12.492C33.757 12.248 33.111 12.4327 32.6934 12.901L31.4014 14.3652C30.9577 14.2926 30.501 14.2531 30.0377 14.2531C29.5744 14.2531 29.1176 14.2926 28.6739 14.3652L27.3819 12.901C26.9708 12.4327 26.3249 12.248 25.7506 12.492C25.4048 12.6437 25.0655 12.8086 24.7327 12.9933L24.3934 13.1912C24.0606 13.389 23.7474 13.6067 23.4407 13.8441C22.9448 14.2201 22.7817 14.8796 22.9774 15.4733L23.5843 17.3332C23.0101 18.0389 22.5402 18.8502 22.2205 19.7208L20.3217 20.1165C19.7148 20.2419 19.232 20.7167 19.1602 21.3367C19.108 21.7786 19.0819 22.2271 19.0819 22.6822C19.0819 23.1373 19.108 23.5858 19.1602 24.0277C19.232 24.6477 19.7214 25.1226 20.3217 25.2479L22.2205 25.6502C22.5468 26.5275 23.0101 27.3321 23.5843 28.0378L22.9774 29.8978C22.7817 30.4914 22.9448 31.151 23.4407 31.5269C23.7474 31.7578 24.0606 31.9754 24.3934 32.1733L24.7458 32.3777C25.072 32.5624 25.4113 32.7273 25.7572 32.879C26.3249 33.123 26.9708 32.9384 27.3885 32.4701L28.6804 31.0059C29.1242 31.0784 29.5809 31.118 30.0442 31.118C30.5075 31.118 30.9643 31.0784 31.408 31.0059L32.7 32.4701L32.6934 32.4833ZM30.0377 19.5229C30.449 19.5229 30.8563 19.6048 31.2363 19.7639C31.6163 19.923 31.9616 20.1562 32.2524 20.4502C32.5433 20.7442 32.774 21.0932 32.9314 21.4773C33.0888 21.8614 33.1698 22.2731 33.1698 22.6888C33.1698 23.1046 33.0888 23.5163 32.9314 23.9004C32.774 24.2845 32.5433 24.6335 32.2524 24.9274C31.9616 25.2214 31.6163 25.4546 31.2363 25.6137C30.8563 25.7728 30.449 25.8547 30.0377 25.8547C29.6264 25.8547 29.2191 25.7728 28.8391 25.6137C28.4591 25.4546 28.1138 25.2214 27.823 24.9274C27.5321 24.6335 27.3014 24.2845 27.144 23.9004C26.9866 23.5163 26.9056 23.1046 26.9056 22.6888C26.9056 22.2731 26.9866 21.8614 27.144 21.4773C27.3014 21.0932 27.5321 20.7442 27.823 20.4502C28.1138 20.1562 28.4591 19.923 28.8391 19.7639C29.2191 19.6048 29.6264 19.5229 30.0377 19.5229Z" />
                    </mask>
                    <path d="M19.891 8.39618C20.3543 7.98066 20.537 7.3277 20.2956 6.74729C20.1455 6.39772 19.9824 6.05475 19.7997 5.72497L19.5974 5.36881C19.4016 5.03903 19.1863 4.71585 18.9579 4.40585C18.586 3.90459 17.9335 3.7397 17.3462 3.93757L15.5061 4.55096C14.8079 3.97054 14.0053 3.49566 13.144 3.17248L12.7459 1.25976C12.622 0.646368 12.1521 0.158294 11.5388 0.0857427C11.1081 0.0263824 10.6709 0 10.2272 0H10.1815C9.73782 0 9.30064 0.0263823 8.86998 0.079147C8.25661 0.151699 7.78679 0.646368 7.66282 1.25316L7.26478 3.17248C6.39693 3.50226 5.60086 3.97054 4.90266 4.55096L3.05603 3.94416C2.46877 3.74629 1.81625 3.91118 1.44431 4.41245C1.21593 4.72244 1.0006 5.04563 0.798318 5.3754L0.602562 5.72497C0.419857 6.05475 0.256727 6.39772 0.106648 6.75388C-0.134784 7.3277 0.047921 7.98066 0.511209 8.40278L1.9598 9.70871C1.88802 10.1506 1.84887 10.6123 1.84887 11.0806C1.84887 11.5489 1.88802 12.0106 1.9598 12.4591L0.511209 13.765C0.047921 14.1805 -0.134784 14.8335 0.106648 15.4139C0.256727 15.7635 0.419857 16.1064 0.602562 16.4428L0.798318 16.7858C0.994073 17.1221 1.2094 17.4387 1.44431 17.7487C1.81625 18.25 2.46877 18.4149 3.05603 18.217L4.89614 17.6036C5.59433 18.184 6.39693 18.6589 7.25825 18.9821L7.65629 20.9014C7.78027 21.5148 8.25008 22.0029 8.86345 22.0754C9.30064 22.1282 9.74435 22.1546 10.1946 22.1546C10.6448 22.1546 11.0885 22.1282 11.5257 22.0754C12.1391 22.0029 12.6089 21.5082 12.7329 20.9014L13.1309 18.9821C13.9988 18.6523 14.7948 18.184 15.493 17.6036L17.3331 18.217C17.9204 18.4149 18.5729 18.25 18.9449 17.7487C19.1732 17.4387 19.3886 17.1221 19.5843 16.7858L19.7866 16.4296C19.9693 16.0998 20.1325 15.7569 20.2825 15.4073C20.524 14.8335 20.3413 14.1805 19.878 13.7584L18.4294 12.4525C18.5012 12.004 18.5403 11.5423 18.5403 11.074C18.5403 10.6057 18.5012 10.144 18.4294 9.69551L19.878 8.38959L19.891 8.39618ZM7.06902 11.0806C7.06902 10.2409 7.39901 9.43569 7.98639 8.84197C8.57377 8.24825 9.37043 7.91471 10.2011 7.91471C11.0318 7.91471 11.8285 8.24825 12.4158 8.84197C13.0032 9.43569 13.3332 10.2409 13.3332 11.0806C13.3332 11.9202 13.0032 12.7255 12.4158 13.3192C11.8285 13.9129 11.0318 14.2465 10.2011 14.2465C9.37043 14.2465 8.57377 13.9129 7.98639 13.3192C7.39901 12.7255 7.06902 11.9202 7.06902 11.0806ZM32.6934 32.4833C33.1045 32.9516 33.7505 33.1362 34.3247 32.8922C34.6706 32.7405 35.0099 32.5756 35.3361 32.3909L35.6885 32.1865C36.0148 31.9886 36.3345 31.771 36.6412 31.5401C37.1371 31.1642 37.3002 30.5046 37.1045 29.911L36.4976 28.051C37.0718 27.3453 37.5417 26.5341 37.8614 25.6634L39.7602 25.2611C40.3671 25.1358 40.8499 24.6609 40.9217 24.0409C40.9739 23.599 41 23.1505 41 22.6954C41 22.2403 40.9739 21.7918 40.9217 21.3499C40.8499 20.7299 40.3605 20.2551 39.7602 20.1297L37.8614 19.7208C37.5351 18.8436 37.0718 18.0389 36.4976 17.3332L37.1045 15.4733C37.3002 14.8796 37.1371 14.2201 36.6412 13.8441C36.3345 13.6133 36.0148 13.3956 35.6885 13.1912L35.3427 12.9933C35.0164 12.8086 34.6771 12.6437 34.3247 12.492C33.757 12.248 33.111 12.4327 32.6934 12.901L31.4014 14.3652C30.9577 14.2926 30.501 14.2531 30.0377 14.2531C29.5744 14.2531 29.1176 14.2926 28.6739 14.3652L27.3819 12.901C26.9708 12.4327 26.3249 12.248 25.7506 12.492C25.4048 12.6437 25.0655 12.8086 24.7327 12.9933L24.3934 13.1912C24.0606 13.389 23.7474 13.6067 23.4407 13.8441C22.9448 14.2201 22.7817 14.8796 22.9774 15.4733L23.5843 17.3332C23.0101 18.0389 22.5402 18.8502 22.2205 19.7208L20.3217 20.1165C19.7148 20.2419 19.232 20.7167 19.1602 21.3367C19.108 21.7786 19.0819 22.2271 19.0819 22.6822C19.0819 23.1373 19.108 23.5858 19.1602 24.0277C19.232 24.6477 19.7214 25.1226 20.3217 25.2479L22.2205 25.6502C22.5468 26.5275 23.0101 27.3321 23.5843 28.0378L22.9774 29.8978C22.7817 30.4914 22.9448 31.151 23.4407 31.5269C23.7474 31.7578 24.0606 31.9754 24.3934 32.1733L24.7458 32.3777C25.072 32.5624 25.4113 32.7273 25.7572 32.879C26.3249 33.123 26.9708 32.9384 27.3885 32.4701L28.6804 31.0059C29.1242 31.0784 29.5809 31.118 30.0442 31.118C30.5075 31.118 30.9643 31.0784 31.408 31.0059L32.7 32.4701L32.6934 32.4833ZM30.0377 19.5229C30.449 19.5229 30.8563 19.6048 31.2363 19.7639C31.6163 19.923 31.9616 20.1562 32.2524 20.4502C32.5433 20.7442 32.774 21.0932 32.9314 21.4773C33.0888 21.8614 33.1698 22.2731 33.1698 22.6888C33.1698 23.1046 33.0888 23.5163 32.9314 23.9004C32.774 24.2845 32.5433 24.6335 32.2524 24.9274C31.9616 25.2214 31.6163 25.4546 31.2363 25.6137C30.8563 25.7728 30.449 25.8547 30.0377 25.8547C29.6264 25.8547 29.2191 25.7728 28.8391 25.6137C28.4591 25.4546 28.1138 25.2214 27.823 24.9274C27.5321 24.6335 27.3014 24.2845 27.144 23.9004C26.9866 23.5163 26.9056 23.1046 26.9056 22.6888C26.9056 22.2731 26.9866 21.8614 27.144 21.4773C27.3014 21.0932 27.5321 20.7442 27.823 20.4502C28.1138 20.1562 28.4591 19.923 28.8391 19.7639C29.2191 19.6048 29.6264 19.5229 30.0377 19.5229Z"
                        stroke="#737373"
                        strokeWidth="2.2"
                        mask="url(#path-1-inside-1_19_4)"
                    />
                </svg>
                <div
                    style={{ display: num === 2 ? "block" : "none" }}
                    className="absolute -inset-2 rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>

        </div>
    )
}
//nav설정 하위항목 모형
function Nav2({ num }) {
    return (
        <div className="tooltip2 bottom-full right-3 w-24 h-12 bg-[#444444] border-2 border-[#f2f2f2] rounded-md text-center flex justify-between gap-2 pb-1 px-2">
            <div className="relative flex flex-col justify-center items-center">
                <svg
                    className="relative pl-[3px]"
                    width="30" height="22" viewBox="0 0 53 26" fill="none" xmlns="http://www.w3.org/2000/svg">

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
                <p className="text-[#f2f2f2] text-[0.4rem] leading-[0.4rem]">기본 음역 <br /> 변경</p>
                {/* 기본음역 포인터 */}
                <div
                    style={{ display: num === 0 ? "block" : "none" }}
                    className="absolute w-[3rem] h-[3rem] rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <svg
                    className="pl-[5px]"
                    width="30" height="22" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <p className="text-[#f2f2f2] text-[0.4rem] group-hover:text-[#00FFC2] duration-300 leading-[0.4rem]">
                    카테고리 <br /> 편집
                </p>
                <div
                    style={{ display: num === 1 ? "block" : "none" }}
                    className="absolute w-[3rem] h-[3rem] rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>
        </div>
    )
}
//카테고리 편집 리스트 모형
function EditCat({ num }) {
    return (
        <div className="max-w-60 border-x mx-auto flex items-center px-2 py-1 h-10 gap-1 text-[0.6rem]">
            <div className="relative">
                <div>△</div>
                <div>▽</div>
                <div
                    style={{ display: num === 0 ? "block" : "none" }}
                    className="absolute -top-1 -left-[0.3rem] w-5 h-9 rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
            </div>
            <div className="grow h-full py-1">
                <div className="h-full flex justify-between items-center border rounded-sm px-1 py-1">
                    <div className="relative grow mx-1">
                        발라드
                        <div
                            style={{ display: num === 1 ? "block" : "none" }}
                            className="absolute -top-1 -left-2 w-full h-6 rounded-full border-[3px] border-[#f8ff2a] duration-500">
                            <svg 
                            className="absolute left-1/2 top-1/3"
                            width="20" height="22" viewBox="0 0 20 22" fill="#1c1b1b" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 19L2 2L17.5 9.5L10.5 12.5L6 19Z" stroke="#f8ff2a" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                    <div className="relative border px-[2px]">
                        ×
                        <div
                            style={{ display: num === 2 ? "block" : "none" }}
                            className="absolute -inset-[0.4rem] rounded-full border-[3px] border-[#f8ff2a] duration-500"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

//카테고리 편집 추가 인풋 모형
function InputDone({ num }) {
    return(
        <div className="px-2 pb-2 max-w-60 mx-auto border-x">
        <div className="w-full p-2 border border-t-0 flex gap-2 items-center">
            <div className="relative border rounded-md h-5 grow text-[0.6rem] leading-4 pl-1">{num === 0 ? "카테고리1" : ""}
                      <div
                    style={{ display: num === 0 ? "block" : "none" }}
                    className="absolute w-14 -left-1 -inset-y-1  rounded-full border-[3px] border-[#f8ff2a] duration-500">
                        <div className="absolute -top-3 -left-4 border-2 rounded-full w-5 h-5 border-[#f8ff2a] text-center leading-4 bg-black font-bold text-[#f8ff2a] text-[0.75rem]">1</div>
                    </div>
            </div>
            <div className="relative border w-4 h-4 text-center leading-3">+
                 <div
                    style={{ display: num === 0 ? "block" : "none" }}
                    className="absolute -inset-1  rounded-full border-[3px] border-[#f8ff2a] duration-500">
                        <div className="absolute -top-3 -left-4 border-2 rounded-full w-5 h-5 border-[#f8ff2a] text-center leading-4 bg-black font-bold text-[#f8ff2a] text-[0.75rem]">2</div>
                    </div>
            </div>
        </div>
        <div className="relative w-20 px-6 py-1 text-[0.6rem] mt-2 mx-auto bg-[#00ffc2] text-[#1c1b1b]">DONE
              <div
                    style={{ display: num === 1 ? "block" : "none" }}
                    className="absolute -inset-y-1 -inset-x-3  rounded-full border-[3px] border-[#f8ff2a] duration-500">
                        <svg 
                            className="absolute left-1/2 top-1/2"
                            width="20" height="22" viewBox="0 0 20 22" fill="#1c1b1b" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 19L2 2L17.5 9.5L10.5 12.5L6 19Z" stroke="#f8ff2a" stroke-width="2" />
                            </svg>
                    </div>
        </div>
        </div>
    )
}

//리스트 모형
function MyList({ num }) {
    return <div className="relative border-y py-[0.6rem]  p-1 text-[#f2f2f2]">
        <div className="flex justify-between items-center">
            <div className="flex">
                <div className="w-9 h-9 relative">
                    <img src="./public/logo/logo512.png" alt="기본이미지" />
                    {/* 좋아요 */}
                    <div style={{ display: num === 3 ? "block" : "none" }}
                        className="absolute -top-[0.8rem] -right-[0.7rem] w-6 h-6 rounded-full border-[3px] border-[#f8ff2a]"></div>
                    <svg
                        className="w-[0.9rem] h-[0.8rem] fill-[#fd4343] absolute top-[-0.4rem] right-[-0.4rem]"
                        viewBox="0 0 41 38"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M20.5 4.32807C22.7345 1.67738 26.158 0 29.725 0C36.039 0 41 5.01144 41 11.3896C41 19.211 34.0414 25.5853 23.4985 35.2428L23.4725 35.2665L20.5 38L17.5275 35.2872L17.4466 35.2129C6.9344 25.563 0 19.1974 0 11.3896C0 5.01144 4.961 0 11.275 0C14.842 0 18.2655 1.67738 20.5 4.32807Z" />
                    </svg>
                    {/* 앨범커버 */}
                    <div
                        style={{ display: num === 0 ? "block" : "none" }}
                        className="absolute -top-1 -left-[0.4rem] w-12 h-12 rounded-full border-[3px] border-[#f8ff2a]"></div>
                </div>

                <div className="relative h-10 pl-2">
                    <p className="font-bold text-[1rem] leading-5">title</p>
                    <p>singer</p>
                    {/* 제목, 가수 */}
                    <div
                        style={{ display: num === 1 ? "block" : "none" }}
                        className="absolute -top-[0.4rem] -left-[0.15rem] w-14 h-14 rounded-full border-[3px] border-[#f8ff2a]"></div>
                </div>
            </div>
            <div className="relative text-[1.2rem] pt-2 pr-3">
                A
                {/* key */}
                <div
                    style={{ display: num === 2 ? "block" : "none" }}
                    className="absolute top-2 -left-[0.6rem] w-8 h-8 rounded-full border-[3px] border-[#f8ff2a]"></div>
            </div>
            <div className="absolute top-[0.2rem] right-[0.1rem] border text-[0.3rem] p-[0.1rem]">
                edit
                {/* 수정버튼 */}
                <div
                    style={{ display: num === 4 ? "block" : "none" }}
                    className="absolute -top-[0.4rem] -left-[0.4rem] w-6 h-6 rounded-full border-[3px] border-[#f8ff2a]"></div>
            </div>
        </div>
        <div style={{ display: num === 5 ? "block" : "none" }}>
            <p>-memo1</p>
            <p>-memo2</p>
        </div>

        {/* 메모 */}
        <svg width="30" height="31" viewBox="0 0 49 52" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: num === 5 ? "block" : "none" }}
            className="absolute left-[60%] top-8"
        >
            <path d="M28.7893 8.51862C30.166 11.3043 30.6532 14.4465 30.1857 17.5184C30.0609 18.3372 29.2956 18.8996 28.4767 18.7749C27.6582 18.65 27.0957 17.8857 27.2202 17.067C27.5952 14.6029 27.2037 12.0824 26.0995 9.84791C24.9953 7.61372 23.2312 5.77262 21.0463 4.57381C18.8611 3.37501 16.3597 2.87615 13.8819 3.14543C11.4042 3.41473 9.06888 4.43846 7.19229 6.07849C5.31561 7.71877 3.9876 9.89691 3.3891 12.3165C2.79072 14.7359 2.94985 17.2812 3.84538 19.6071C4.74098 21.933 6.33027 23.9274 8.39682 25.3208C10.4634 26.7141 12.9087 27.4388 15.4009 27.397L15.5544 27.4028C16.3115 27.4672 16.9117 28.0954 16.925 28.8715C16.939 29.6998 16.2788 30.3827 15.4505 30.3967L14.8692 30.3958C11.965 30.3332 9.13537 29.4368 6.72003 27.8084C4.1437 26.0713 2.16214 23.5848 1.04561 20.6851C-0.0708586 17.7854 -0.268722 14.6124 0.477339 11.596C1.22346 8.5797 2.87792 5.86504 5.21747 3.82017C7.55706 1.77529 10.4691 0.498173 13.5582 0.162437C16.647 -0.173154 19.7649 0.448307 22.4889 1.94268C25.2131 3.43719 27.4127 5.73308 28.7893 8.51862ZM24.2697 11.9242C24.9324 13.6666 25.0752 15.562 24.6843 17.3793L24.5987 17.741L24.5526 17.8877C24.2908 18.6016 23.5255 19.0153 22.773 18.8227C22.0207 18.63 21.5486 17.9 21.6619 17.1482L21.6922 16.998L21.7504 16.7484C22.0198 15.4964 21.9223 14.191 21.4657 12.9907C20.9786 11.7105 20.1069 10.6126 18.9712 9.84681C17.8355 9.08106 16.4904 8.68407 15.1209 8.71251C13.7517 8.7411 12.4251 9.19334 11.3224 10.0054C10.2195 10.8177 9.39489 11.9515 8.96142 13.2508C8.52805 14.5502 8.50654 15.9527 8.90095 17.2644C9.29543 18.5758 10.0864 19.7325 11.1643 20.5773C12.2423 21.4221 13.5549 21.9141 14.9228 21.9835C15.7501 22.0254 16.3868 22.73 16.3449 23.5574C16.3028 24.3845 15.5983 25.0205 14.7711 24.9785C12.7853 24.8778 10.8795 24.1657 9.31434 22.9393C7.74903 21.7127 6.6 20.0319 6.02735 18.1275C5.45478 16.223 5.48591 14.1876 6.11517 12.3011C6.74448 10.4147 7.94261 8.76902 9.54382 7.58973C11.1448 6.41081 13.0709 5.75554 15.0586 5.71411C17.0469 5.67281 19.0001 6.24734 20.649 7.35918C22.2977 8.47095 23.5626 10.0656 24.2697 11.9242ZM48.2858 33.5798C48.2722 34.1676 47.9159 34.6934 47.3752 34.9245L35.6429 39.9352L28.0925 50.8057C27.7548 51.2917 27.1618 51.5335 26.5803 51.4233C25.9988 51.3128 25.536 50.8698 25.4 50.2936L18.4688 20.9393C18.3359 20.3764 18.5392 19.7868 18.9901 19.4246C19.4409 19.0627 20.06 18.9917 20.5808 19.2427L47.4369 32.1936C47.9668 32.4491 48.2992 32.9916 48.2858 33.5798ZM22.1121 23.3126L27.5464 46.3308L33.4248 37.8696L33.5574 37.706C33.7 37.5522 33.8737 37.4293 34.068 37.3463L43.161 33.4615L22.1121 23.3126Z" fill="#F8FF2A" />
        </svg>

        <div
            style={{ display: num === 6 ? "block" : "none" }}
            className="absolute inset-0 bg-[#a2c4ff]/30">
            <div className="absolute right-0 h-full w-12 bg-red-600 flex justify-center items-center">
                {/* 삭제 */}
                <svg
                    className="w-6 mx-auto fill-[#fafbff]"
                    viewBox="0 0 23 26"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8.75335 2.62031L7.7779 4.0625H15.2221L14.2467 2.62031C14.1696 2.50859 14.0413 2.4375 13.9027 2.4375H9.09219C8.95357 2.4375 8.82522 2.50352 8.74821 2.62031H8.75335ZM16.3002 1.26953L18.1844 4.0625H18.8929H21.3571H21.7679C22.4507 4.0625 23 4.60586 23 5.28125C23 5.95664 22.4507 6.5 21.7679 6.5H21.3571V21.9375C21.3571 24.182 19.5192 26 17.25 26H5.75C3.4808 26 1.64286 24.182 1.64286 21.9375V6.5H1.23214C0.54933 6.5 0 5.95664 0 5.28125C0 4.60586 0.54933 4.0625 1.23214 4.0625H1.64286H4.10714H4.81563L6.69978 1.26445C7.23371 0.477344 8.13214 0 9.09219 0H13.9027C14.8627 0 15.7612 0.477344 16.2951 1.26445L16.3002 1.26953ZM4.10714 6.5V21.9375C4.10714 22.8363 4.84129 23.5625 5.75 23.5625H17.25C18.1587 23.5625 18.8929 22.8363 18.8929 21.9375V6.5H4.10714ZM8.21429 9.75V20.3125C8.21429 20.7594 7.84464 21.125 7.39286 21.125C6.94107 21.125 6.57143 20.7594 6.57143 20.3125V9.75C6.57143 9.30312 6.94107 8.9375 7.39286 8.9375C7.84464 8.9375 8.21429 9.30312 8.21429 9.75ZM12.3214 9.75V20.3125C12.3214 20.7594 11.9518 21.125 11.5 21.125C11.0482 21.125 10.6786 20.7594 10.6786 20.3125V9.75C10.6786 9.30312 11.0482 8.9375 11.5 8.9375C11.9518 8.9375 12.3214 9.30312 12.3214 9.75ZM16.4286 9.75V20.3125C16.4286 20.7594 16.0589 21.125 15.6071 21.125C15.1554 21.125 14.7857 20.7594 14.7857 20.3125V9.75C14.7857 9.30312 15.1554 8.9375 15.6071 8.9375C16.0589 8.9375 16.4286 9.30312 16.4286 9.75Z" />
                </svg>
            </div>
        </div>

        <svg width="78" height="17" viewBox="0 0 78 17" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ display: num === 6 ? "block" : "none" }}
            className="absolute left-[65%] top-3"
        >
            <path d="M0.0330812 12.7435C-0.108544 13.2773 0.20939 13.8248 0.743207 13.9665L9.44226 16.2744C9.97608 16.416 10.5236 16.0981 10.6653 15.5642C10.8069 15.0304 10.4889 14.4829 9.95513 14.3412L2.22264 12.2898L4.27412 4.55728C4.41575 4.02346 4.09781 3.4759 3.564 3.33428C3.03018 3.19265 2.48263 3.51059 2.341 4.0444L0.0330812 12.7435ZM77 1.99999C77.2576 1.03375 77.2571 1.0336 77.2565 1.03345C77.2563 1.03339 77.2556 1.03322 77.2552 1.0331C77.2542 1.03285 77.2532 1.03257 77.252 1.03227C77.2497 1.03166 77.2469 1.03093 77.2437 1.0301C77.2372 1.02843 77.2288 1.02631 77.2186 1.02376C77.1981 1.01868 77.17 1.0119 77.134 1.00359C77.062 0.986986 76.9582 0.964293 76.8199 0.936945C76.5433 0.882259 76.1283 0.808893 75.5525 0.728363C74.4012 0.567341 72.6051 0.377355 69.9855 0.251098C64.7473 -0.00136713 56.2048 0.000432945 42.9244 1.00272L42.9997 1.99989L43.0749 2.99705C56.2946 1.99934 64.7522 2.00119 69.8892 2.24878C72.4571 2.37255 74.1923 2.55759 75.2755 2.70908C75.8169 2.78481 76.1949 2.85208 76.432 2.89896C76.5505 2.9224 76.6337 2.94072 76.6845 2.95244C76.7099 2.95829 76.7272 2.9625 76.7367 2.96486C76.7415 2.96604 76.7443 2.96676 76.7452 2.96699C76.7457 2.96711 76.7457 2.96711 76.7452 2.96698C76.7449 2.96692 76.7446 2.96682 76.7441 2.9667C76.7438 2.96663 76.7434 2.96651 76.7433 2.96648C76.7428 2.96636 76.7423 2.96622 77 1.99999ZM42.9997 1.99989L42.9244 1.00272C29.5766 2.0101 18.9913 4.78098 11.7336 7.30539C8.10472 8.56763 5.30711 9.76845 3.41125 10.6569C2.46328 11.1011 1.74064 11.4673 1.25212 11.7241C1.00786 11.8525 0.82211 11.9536 0.695979 12.0234C0.632913 12.0583 0.58475 12.0854 0.551626 12.1041C0.535064 12.1135 0.522262 12.1209 0.513236 12.126C0.508724 12.1286 0.505155 12.1307 0.502533 12.1322C0.501222 12.133 0.500147 12.1336 0.49931 12.1341C0.498891 12.1343 0.49844 12.1346 0.498231 12.1347C0.49784 12.1349 0.497508 12.1351 0.999643 12.9999C1.50178 13.8647 1.50156 13.8648 1.50141 13.8649C1.50144 13.8649 1.50134 13.8649 1.50139 13.8649C1.5015 13.8648 1.50185 13.8646 1.50242 13.8643C1.50358 13.8636 1.50568 13.8624 1.50872 13.8607C1.5148 13.8572 1.52463 13.8516 1.53821 13.8439C1.56535 13.8285 1.60746 13.8048 1.66439 13.7733C1.77825 13.7103 1.95139 13.616 2.18271 13.4944C2.64537 13.2512 3.3407 12.8987 4.25992 12.4679C6.09844 11.6063 8.83209 10.4322 12.3907 9.19439C19.508 6.7188 29.9227 3.98967 43.0749 2.99705L42.9997 1.99989Z" fill="#F8FF2A" />
        </svg>

    </div >
}

// 카테고리선택/검색창 모형
function FilterSearch({ num }) {
    return <div
        style={{ height: num === "search1" ? "3rem" : "5rem" }}
        className="flex flex-col w-full max-w-60 mx-auto border overflow-hidden px-1">
        <div style={{ display: num === "cat1" || "search1" ? "none" : "block" }}>My List</div>
        <div className="border-2 border-y-0 h-full">
            <div className="relative p-2 flex justify-between">
                {/* 검색인풋 */}
                <div
                    style={{ display: num === "search1" ? "block" : "none" }}
                    className="relative border rounded-sm grow mr-2 h-4 text-[0.5rem] pl-1"
                >곡제목으로 검색해주세요.
                    <div className="absolute -inset-[0.35rem] rounded-full border-[3px] border-[#f8ff2a]"></div>
                </div>


                <div
                    style={{ display: num === "search1" ? "none" : "flex" }}
                    className="w-16 h-4 relative border text-[0.6rem] px-1 flex justify-between items-center">
                    <p>전체</p>
                    <p className="text-[0.4rem]">
                        {num === "cat1" ? "▲" : "▼"}
                    </p>
                    {/* ▼ */}
                    <div
                        style={{ display: num === "cat0" ? "block" : "none" }}
                        className="absolute -right-2 w-8 h-8 rounded-full border-[3px] border-[#f8ff2a]"></div>
                    {/* 전체 */}
                    <div
                        style={{ display: num === "catEdit0" ? "block" : "none" }}
                        className="absolute -inset-x-3 -inset-y-2 rounded-full border-[3px] border-[#f8ff2a]"></div>
                    {/* 드롭다운 */}
                    <div
                        style={{ display: num === "cat1" ? "block" : "none" }}
                        className="absolute top-full left-0 w-full h-16 border bg-[#343434] px-1">
                        <div className="py-1">전체</div>
                        <hr />
                        <div className="py-1">발라드</div>
                        <hr />
                    </div>
                    <div
                        style={{ display: num === "cat1" ? "block" : "none" }}
                        className="absolute top-full -right-2 w-20 h-14 rounded-full border-[3px] border-[#f8ff2a]"></div>
                </div>
                <svg
                    className={`w-[0.7rem] pointer-events-none`}
                    stroke={num === "search1" ? "#00ffc2" : "#f2f2f2"}
                    viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.87787 8.7465L9.62566 9.09209L9.92809 9.3947L13.39 12.8586L13.3901 12.8588C13.5366 13.0053 13.5366 13.2436 13.3901 13.3901C13.2436 13.5366 13.0051 13.5366 12.8586 13.3902C12.8585 13.3902 12.8585 13.3902 12.8585 13.3902C12.8585 13.3902 12.8585 13.3901 12.8584 13.3901L9.39668 9.9263L9.09354 9.62298L8.74758 9.87636C7.89015 10.5044 6.83365 10.8733 5.68778 10.8733C2.82188 10.8733 0.5 8.55177 0.5 5.68667C0.5 2.82156 2.82188 0.5 5.68778 0.5C8.55368 0.5 10.8756 2.82156 10.8756 5.68667C10.8756 6.83154 10.5042 7.88825 9.87787 8.7465ZM5.68778 10.1236C6.27053 10.1236 6.84758 10.0088 7.38598 9.78586C7.92438 9.56289 8.41358 9.23608 8.82566 8.82408C9.23775 8.41208 9.56463 7.92296 9.78766 7.38464C10.0107 6.84632 10.1255 6.26935 10.1255 5.68667C10.1255 5.10399 10.0107 4.52702 9.78766 3.9887C9.56464 3.45038 9.23775 2.96126 8.82566 2.54925C8.41358 2.13725 7.92438 1.81044 7.38598 1.58747C6.84758 1.3645 6.27053 1.24974 5.68778 1.24974C5.10503 1.24974 4.52798 1.3645 3.98958 1.58747C3.45118 1.81044 2.96197 2.13725 2.54989 2.54925C2.13781 2.96126 1.81092 3.45038 1.5879 3.9887C1.36487 4.52702 1.25009 5.10399 1.25009 5.68667C1.25009 6.26935 1.36487 6.84632 1.5879 7.38464C1.81092 7.92296 2.13781 8.41208 2.54989 8.82408C2.96197 9.23608 3.45118 9.56289 3.98958 9.78586C4.52798 10.0088 5.10503 10.1236 5.68778 10.1236Z" />
                </svg>
                {/* 검색 버튼 */}
                <div
                    style={{ display: num === "search0" ? "block" : "none" }}
                    className="absolute top-0 -right-[0.1rem] w-8 h-8 rounded-full border-[3px] border-[#f8ff2a]"></div>
            </div>
            <hr />
            <div className="p-2 pb-0">
                <div className="text-[0.4rem]">총 5곡</div>
                <hr />
            </div>
        </div>
    </div>
}
