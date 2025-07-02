export default function DubleCheck({ setOpen, setCheck, delate }) {
  return (
    <div className="z-20 fixed inset-0 bg-[#1c1b1b]/80">
      <div className="max-w-[25rem] w-[20rem] fixed top-[30%] left-[50%] translate-x-[-50%] bg-[#1c1b1b] p-3 border border-[#00FFC2] text-[0.8rem]">
        <p className="pb-5">정말 제거하시겠습니까?</p>
        <div className="flex gap-3 justify-between">
          <button
            onClick={() => {
              setCheck(true);
              setOpen(false);
            }}
            className="w-[10rem] border px-2 py-1 text-[0.75rem] break-keep border-[#00FFC2]"
          >
            제거
          </button>

          <button
            onClick={() => {
              setOpen(false);
            }}
            className="w-[10rem] border px-2 py-1 text-[0.75rem] break-keep  border-[#00FFC2]"
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
