import { useState } from "react";
import SelectKey from "../UserCreate/SelectKey";
import { KEYS } from "../UserCreate/UserCreatePage";

export default function EditDefaultKeyPage({
    setDefaultKey,
    setKeySettingOpen,
    defaultKey
}) {
    const [selectOpen, setSelectOpen] = useState(false);
    const [key, setKey] = useState(defaultKey);

    return (
        <article className="fixed inset-0 z-100 bg-[#1c1b1b]/90 flex items-center justify-center">
            <div className="relative z-100 bg-[#1c1b1b] border max-w-[22rem] p-4 flex flex-col items-center">
                <h2 className="text-[1.3rem] font-bold">기본 음역 설정</h2>
                <p className="text-center opacity-90 mt-2">새 리스트를 생성할 때
                    <br />
                    기본값이 될 음역(key)을 선택해 주세요.
                    <br />
                    나에게 맞는 음역으로 설정하시면
                    <br />
                    보다 편리하게 리스트를 추가하실 수 있습니다.
                </p>
                <div className="w-[15rem] my-7">
                    <SelectKey
                        KEYS={KEYS}
                        selectedKey={key}
                        setSelectedKey={setKey}
                        open={selectOpen}
                        setOpen={setSelectOpen}
                    />
                </div>

                {/* 변경하기 버튼 */}
                <button
                    onClick={() => {
                        setDefaultKey(key);
                        setKeySettingOpen(false)
                    }}
                    className="border border-[#00FFC2] px-10 py-1 bg-[#00FFC2] text-[#1c1b1b] disabled:bg-[#737373] disabled:border-[#f2f2f2] disabled:text-[#f2f2f2] duration-300"
                    disabled={key === defaultKey}
                >
                    DONE
                </button>

                {/* 닫기 버튼 */}
                <button
                    className="w-6 h-6 absolute top-2 right-2 flex justify-center items-center group border p-1 duration-300 hover:border-[#00FFC2]"
                    type="button"
                    onClick={() => setKeySettingOpen(false)}
                >
                    <div className="w-[1px] h-[0.7rem] absolute rotate-45 bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                    <div className="w-[0.7rem] h-[1px] absolute rotate-45 bg-[#f2f2f2] group-hover:bg-[#00FFC2] duration-300"></div>
                </button>
            </div>
        </article>
    )
}



