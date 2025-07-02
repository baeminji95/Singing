import { useState } from "react";
import Alert from "../Alert";


export default function EditCategoryListPage({
    filterList,
    setFilterList,
    setEditCateOpen,
    songList,
    setSongList,
}) {
    //추가용 input value
    const [query, setQuery] = useState("");
    //닫을건지 확인하기
    const [check, setCheck] = useState(false);
    //카테고리를 수정전이름, 수정후이름으로 객체화
    //카테고리편집할 때 수정전,후 모두 알아야하기때문
    const [categories, setcategories] = useState(
        filterList.map(cate => {
            return {
                name: cate,
                editedName: cate,
            };
        })
    );
    const [forRestore, setForRestore] = useState("");

    //alert 메시지 담을 스테이트
    const [alertMessage, setAlertMessage] = useState({
        // alertMessage : [],
        // -띄울 메시지 ex)입력창이 비어있습니다.
        //  인자마다 줄바꿈이 발생된다.

        // checkMessage: "", 
        // -확인버튼에 "확인"이 아닌 다른 메시지가 들어가야 하는 경우에 입력. 그냥 확인이면 작성하지 않는다. ex) 계속하기

        //빈객체로 상태를 업데이트해서  alert창을 내린다.
    });

    //키스테이트 추적
    // console.log(filterList);
    // console.log(songList);
    // console.log(categories);
    console.log(forRestore);


    //카테고리 이름 변경 (&제거)
    function editCateName(indexNum, value) {
        setcategories(categories.map((cate, n) => {
            if (n === indexNum) {
                return { ...cate, editedName: value };
            } else {
                return cate;
            }
        }))
    }


    // 변경
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event);


        // songList를 가져와 카테고리만 추출해서 중복제거한다.
        let editSongList = songList;
        const setSongListCate = [...new Set(editSongList.map(list => list.category))];

        //categories에서 editedName만 추출
        const editedCate = categories.map(cate => cate.editedName.trim());

        //기타 카테고리 추가여부 확인할 변수
        let isOtherCateAdd = false;

        //기타카테고리에 노래가 존재하는데 기타를 삭제하려고 할때 거부
        if (editedCate.indexOf("기타removeMode") > 0
            && editedCate.indexOf("기타") === -1
            && setSongListCate.indexOf("기타") > 0) {
            return setAlertMessage({
                message: [`"기타"카테고리에 노래가 존재합니다.`, `"기타"카테고리 제거를 원하신다면 "기타"카테고리 안에 노래를 모두 이동시켜주세요.`],
                checkMessage: false,
            })
        }

        const removeCate = editedCate.filter(cate => cate.indexOf("removeMode") === -1);

        categories.map(cate => {
            if (cate.name !== cate.editedName) {
                editSongList = editSongList.map(song => {
                    if (song.category !== cate.name) {
                        return song
                    }
                    if (cate.editedName.indexOf("removeMode") === -1) {
                        return { ...song, category: cate.editedName }
                    } else {
                        if (!isOtherCateAdd) {
                            isOtherCateAdd = true;
                        }
                        return { ...song, category: "기타" }
                    }
                })
            }
        })

        if (isOtherCateAdd && removeCate.indexOf("기타") === -1) {
            removeCate.push("기타");
        }

        setFilterList(removeCate);
        setSongList(editSongList);
        setEditCateOpen(false);
    }



    //순서 변경
    function changeOrder(currentIndex, num) {
        const changeIndex = currentIndex + num;
        console.log(changeIndex)
        if (changeIndex < 0 || changeIndex > categories.length - 1) {
            return;
        }
        const changeOrdercategories = [...categories];
        const currentCate = changeOrdercategories[currentIndex]
        changeOrdercategories.splice(currentIndex, 1)
        changeOrdercategories.splice(changeIndex, 0, currentCate);
        setcategories(changeOrdercategories);
    }

    const inputs = () =>
        categories
            .map((li, n) => (
                <li
                    key={"editlist-" + li.name + n}
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: n === 0 ?
                            "10px"
                            :
                            `${n * 50 + 10}px`,

                        // **************************************


                        // 이상하게 움직임;;
                        // transition: "top 0.3s linear",



                        //***************************************

                        // 마지막 카테고리 아래 여유공간을 위한 설정
                        height: n === categories.length - 1 ? "3.125rem" : "2.5rem",
                        paddingBottom: n === categories.length - 1 ? "10px" : "0",
                    }}
                    className={`max-w-full w-full flex px-2`}
                >


                    {/* 순서 변경 buttons */}
                    <div className="w-fit flex flex-col justify-center gap-1 items-center pr-2 duration-500">
                        <button
                            type="button"
                            disabled={n === 0}
                            onClick={() => changeOrder(n, -1)}
                            className="h-3 leading-3 disabled:text-[#f2f2f2] disabled:opacity-50 hover:text-[#00FFC2] duration-300"
                        >
                            △
                        </button>
                        <button
                            type="button"
                            disabled={n === categories.length - 1}
                            onClick={() => changeOrder(n, 1)}
                            className="h-3 leading-3 disabled:text-[#f2f2f2] disabled:opacity-50 hover:text-[#00FFC2] duration-300"
                        >
                            ▽
                        </button>
                    </div>

                    {/* 이름 수정 input / 제거 button */}
                    <div className="grow flex border rounded-md justify-between items-center px-2 gap-1">
                        <p
                            style={{
                                width: li.name === li.editedName.replace(/removeMode/, "") ? '0' : `${li.name.length * 16 + 25}px`,
                                overflow: "hidden"
                            }}
                            className="text-nowrap grow-0 duration-500 peer-disabled:line-through">{li.name} →
                        </p>
                        <input
                            value={
                                li.editedName.indexOf("removeMode") === -1 ? li.editedName
                                    :
                                    li.editedName.replace(/removeMode/, "")
                            }
                            //이름생성과정에서 꼬일때를 위해 클릭하면 forRestore에 저장
                            onClick={(e) => {
                                if (!forRestore) {
                                    setForRestore(e.target.value);
                                }
                            }}

                            disabled={li.editedName.indexOf("removeMode") !== -1}

                            onChange={(e) => editCateName(n, e.target.value)}

                            onBlur={({ target }) => {
                                //editedName만 배열로 만든 후 set함수로 중복제거해서 중복 체크하기
                                const cate = categories.map(c => c.editedName);
                                const setCate = new Set(cate);
                                // 중복체크
                                const isDuplicate = cate.length === setCate.size ? false : true;

                                if (isDuplicate) {
                                    setAlertMessage({
                                        message: [`[${target.value.trim()}] 카테고리는 이미 존재합니다.`,
                                        `[${forRestore}] (으)로 카테고리명을 유지합니다.`
                                        ]
                                    });
                                    editCateName(n, forRestore);
                                }

                                if (
                                    !target.value.trim() || target.value.trim() === li.name
                                ) {
                                    editCateName(n, li.name);
                                }
                                setForRestore("");
                            }}
                            className='w-20 flex-grow mr-2 bg-[#1c1b1b] px-1 duration-200
                            border-b border-[#1c1b1b] focus:border-[#f2f2f2] outline-none 
                            peer
                            disabled:line-through disabled:opacity-50'
                            type="text"
                        />
                        {/* 카테고리 제거 / 복원 버튼 */}
                        <button
                            type="button"
                            className="w-6 h-6 grow-0 group border p-1 duration-300 hover:border-[#00FFC2]"
                            onClick={() => {
                                const cate = categories.map(c => c.editedName);
                                const popCate = cate.filter(c => c !== li.editedName);
                                const isDuplicate = popCate.includes(li.name)

                                li.editedName.indexOf("removeMode") !== -1 ?
                                    editCateName(n, li.editedName.replace(/removeMode/, ""))
                                    :
                                    isDuplicate ?
                                        setAlertMessage({
                                            message: [
                                                `[${li.name}] 카테고리가 이미 존재합니다.`,
                                                `수정 전 카테고리와 동일한 카테고리가 존재시`,
                                                '해당 카테고리를 삭제할 수 없습니다.'

                                            ]
                                        })
                                        :
                                        editCateName(n, li.editedName + "removeMode")
                            }}
                        >
                            <div
                                style={{
                                    rotate: li.editedName.indexOf("removeMode") !== -1 ? "45deg" : "0deg"
                                }}
                                className="relative flex justify-center items-center duration-200">
                                <div className="w-[1px] h-[0.75rem] absolute rotate-45 bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                                <div className="w-[0.75rem] h-[1px] absolute rotate-45 bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                            </div>
                        </button>
                    </div>
                </li>
            ))

    return (
        <>
            <form
                id="editFilterListForm"
                autoComplete="off"
                className="fixed inset-0 z-100 bg-[#1c1b1b]/90 flex items-center justify-center"
                onSubmit={(e) => handleSubmit(e)}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        event.preventDefault();
                    }
                }}
            >
                <div className="w-[22rem] relative bg-[#1c1b1b] border border-[#f2f2f2] z-100 p-4 flex flex-col items-center">
                    <h2 className="text-[1.3rem] font-bold">카테고리 편집</h2>
                    <p className="text-sm text-center opacity-80 mt-2">
                        카테고리를 추가,제거 또는 수정할 수 있습니다.
                    </p>

                    <ul className="w-full h-[20rem] max-h-[20rem] overflow-y-auto custom-scrollbar mt-4 border flex flex-col gap-2 relative">
                        {inputs()}
                    </ul>

                    {/* 추가 input */}
                    <div className="w-full flex justify-between items-center border border-t-0 px-2 py-2 gap-2">
                        <input
                            className="bg-[#1c1b1b] grow px-2 py-1 border rounded-md outline-none"
                            value={query}
                            spellCheck="false"
                            onChange={(e) => {
                                setQuery(e.target.value);
                            }}
                            type="text"
                        />

                        {/* 추가 버튼 */}
                        <button
                            type="button"
                            className="w-6 h-6 relative flex justify-center items-center group border p-1 duration-300 hover:border-[#00FFC2]"
                            onClick={() => {
                                const newCate = categories.map(li => li.editedName)
                                const cateToDelete = categories.map(li => {
                                    if (li.editedName.indexOf("removeMode") !== -1) {
                                        return li.editedName.replace(/removeMode/, "")
                                    }
                                })

                                if (!query.trim()) {
                                    setAlertMessage({
                                        message: ["추가할 카테고리를 작성해주세요"],
                                        checkMessage: false
                                    });
                                    return;
                                }
                                if (cateToDelete.includes(query)) {
                                    setAlertMessage({
                                        message: ["삭제할 카테고리와 동일한 카테고리명은 생성할 수 없습니다.",
                                            "해당 카테고리 삭제 취소를 원하신다면",
                                            `[${query}]카테고리 우측의 삭제 취소 버튼을 눌러주세요.`
                                        ]
                                    })
                                    setQuery("");
                                    return;
                                }

                                if (newCate.includes(query)) {
                                    setAlertMessage({
                                        message: ["이미 존재하는 카테고리입니다."],
                                        checkMessage: false
                                    });
                                    return;
                                } else {
                                    setcategories([...categories, { name: query, editedName: query }]);
                                    setQuery("");
                                }
                            }}
                        >
                            <div className="w-[1px] h-[0.7rem] bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                            <div className="w-[0.7rem] h-[1px]  absolute bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                        </button>
                    </div>

                    {/* 저장 버튼 */}
                    <button
                        type="submit"
                        className="border border-[#00FFC2] px-10 py-1 mt-3 bg-[#00FFC2] text-[#1c1b1b] disabled:bg-[#737373] disabled:border-[#f2f2f2] disabled:text-[#f2f2f2] duration-300"
                        disabled={
                            JSON.stringify(filterList)
                            ===
                            JSON.stringify(
                                categories.map(li => li.editedName)
                            )
                        }
                    >
                        DONE
                    </button>

                    {/* 닫기 버튼 */}
                    <button
                        type="button"
                        className="w-6 h-6 absolute top-2 right-2 flex justify-center items-center group border p-1 duration-300 hover:border-[#00FFC2]"
                        onClick={() => {
                            JSON.stringify(filterList) !== JSON.stringify(categories.map(li => li.editedName)) ?
                                setCheck(true)
                                :
                                setEditCateOpen(false)
                        }}
                    >
                        <div className="w-[1px] h-[0.7rem] rotate-45 bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                        <div className="w-[0.7rem] h-[1px] rotate-45 absolute top-[50%] bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                    </button>
                </div>

                {/*  변경사항 있을 때 닫을 건지 확인하는 창 */}
                {check &&
                    <div className="fixed inset-0 border bg-[#1c1b1b]/80 z-100 p-4">
                        <div
                            className="min-w-[16rem] w-[80%] max-w-[18rem] h-[12rem] absolute top-[40%] -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#1c1b1b] border p-4 flex flex-col justify-center">
                            <p className="text-center mt-4 mb-7">
                                변경사항이 존재합니다.
                                <br />
                                저장하지 않고 나가시겠습니까?
                            </p>

                            <button
                                type="button"
                                className="border mb-2 hover:text-[#1c1b1b] hover:bg-[#f2f2f2] duration-200"
                                onClick={() => setEditCateOpen(false)}

                            >
                                저장하지않고 나가기
                            </button>
                            <button
                                type="button"
                                className="border mb-2 hover:text-[#1c1b1b] hover:bg-[#f2f2f2] duration-200"
                                onClick={() => setCheck(false)}
                            >
                                편집 계속하기
                            </button>
                        </div>
                    </div>
                }
            </form >
            {Object.keys(alertMessage).length !== 0 &&
                < Alert message={alertMessage} setMessage={setAlertMessage} />
            }
        </>
    )
}



