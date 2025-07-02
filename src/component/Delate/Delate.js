import { useEffect, useState } from "react";

import DubleCheck from "./DubleCheck";

export default function Delate({
  id,
  songList,
  setSongList,
  dragX,
  setDragX,
  activeId,
  setActiveId
}) {
  const [openAlert, setOpenAlert] = useState(false);

  function delate() {
    console.log("??")
    const newSongList = songList.filter((list) => list.id !== id);
    setSongList(newSongList);
    setActiveId("")
    setOpenAlert(false);

  }

  return (
    <>
      <div className={`absolute inset-0 flex ${id === activeId && dragX > 40 ? '' : 'pointer-events-none'}`}>
        {/* 오버레이 */}
        {id === activeId && dragX > 40 &&
          <div
            id="overlay"
            onClick={({ target }) => {
              if (target.id === "overlay") {
                setDragX(null);
              }
            }}
            className='w-full h-full bg-[#a2c4ff] opacity-30'
          ></div>
        }
        {/* 제거버튼 */}
        <button
          onClick={() => setOpenAlert(true)}
          className={`h-full w-10 z-10 absolute -right-10 bg-[#ff0000] duration-500 ${id === activeId && dragX > 40 ? '-translate-x-10' : `-translate-x-${dragX}`}`}
          style={{}}
        >
          <svg
            className="w-7 mx-auto fill-[#fafbff]"
            viewBox="0 0 23 26"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.75335 2.62031L7.7779 4.0625H15.2221L14.2467 2.62031C14.1696 2.50859 14.0413 2.4375 13.9027 2.4375H9.09219C8.95357 2.4375 8.82522 2.50352 8.74821 2.62031H8.75335ZM16.3002 1.26953L18.1844 4.0625H18.8929H21.3571H21.7679C22.4507 4.0625 23 4.60586 23 5.28125C23 5.95664 22.4507 6.5 21.7679 6.5H21.3571V21.9375C21.3571 24.182 19.5192 26 17.25 26H5.75C3.4808 26 1.64286 24.182 1.64286 21.9375V6.5H1.23214C0.54933 6.5 0 5.95664 0 5.28125C0 4.60586 0.54933 4.0625 1.23214 4.0625H1.64286H4.10714H4.81563L6.69978 1.26445C7.23371 0.477344 8.13214 0 9.09219 0H13.9027C14.8627 0 15.7612 0.477344 16.2951 1.26445L16.3002 1.26953ZM4.10714 6.5V21.9375C4.10714 22.8363 4.84129 23.5625 5.75 23.5625H17.25C18.1587 23.5625 18.8929 22.8363 18.8929 21.9375V6.5H4.10714ZM8.21429 9.75V20.3125C8.21429 20.7594 7.84464 21.125 7.39286 21.125C6.94107 21.125 6.57143 20.7594 6.57143 20.3125V9.75C6.57143 9.30312 6.94107 8.9375 7.39286 8.9375C7.84464 8.9375 8.21429 9.30312 8.21429 9.75ZM12.3214 9.75V20.3125C12.3214 20.7594 11.9518 21.125 11.5 21.125C11.0482 21.125 10.6786 20.7594 10.6786 20.3125V9.75C10.6786 9.30312 11.0482 8.9375 11.5 8.9375C11.9518 8.9375 12.3214 9.30312 12.3214 9.75ZM16.4286 9.75V20.3125C16.4286 20.7594 16.0589 21.125 15.6071 21.125C15.1554 21.125 14.7857 20.7594 14.7857 20.3125V9.75C14.7857 9.30312 15.1554 8.9375 15.6071 8.9375C16.0589 8.9375 16.4286 9.30312 16.4286 9.75Z" />
          </svg>
        </button>
      </div>
      {openAlert &&
        <div className="z-20 fixed inset-0 bg-[#1c1b1b]/80">
          <div className="max-w-[25rem] w-[20rem] fixed top-[30%] left-[50%] translate-x-[-50%] bg-[#1c1b1b] p-3 border border-[#00FFC2] text-[0.8rem]">
            <p className="pb-5">정말 제거하시겠습니까?</p>
            <div className="flex gap-3 justify-between">
              <button
                onClick={() => {
                  delate();
                }}
                className="w-[10rem] border px-2 py-1 text-[0.75rem] break-keep border-[#00FFC2]"
              >
                제거
              </button>

              <button
                onClick={() => {
                  setActiveId("")
                  setOpenAlert(false);
                }}
                className="w-[10rem] border px-2 py-1 text-[0.75rem] break-keep  border-[#00FFC2]"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      }
    </>
  );
}
