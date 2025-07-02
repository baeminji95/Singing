import { useEffect, useState } from "react";
import AlertAlbumArt from "../AlertAlbumArt";
import UploadAlubmArt from "../UserCreate/UploadAlubmArt";
import Preview from "../UserCreate/Preview";
import CreateCategory from "../UserCreate/CreateCategory";
import SelectKey from "../UserCreate/SelectKey";
import { KEYS } from "../UserCreate/UserCreatePage";
import Alert from "../Alert";

export default function Edit({ id, editId, songList, setSongList, filterList, setEditId }) {

  //submit이 가능한지 여부
  const [isReady, setIsReady] = useState(false);

  // 노래obj 속성
  const [title, setTitle] = useState("");
  const [singer, setSinger] = useState("");
  const [key, setKey] = useState("");
  const [liked, setLiked] = useState(false);
  const [albumArtAdress, setAlbumArtAdress] = useState("");
  const [memo1, setMemo1] = useState("");
  const [memo2, setMemo2] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState([]);

  // 사진 올렸으면 체크 (서버없어서 사진 저장 안됨)
  const [cheackAlbumArt, setCheackAlbumArt] = useState(false);
  // 사진 업로드 창 여닫
  const [openUploadAlbumArt, setOpenUploadAlbumArt] = useState(false);
  // 엘범커버 이미지주소 받는 창 여닫
  const [openAlbumArtAdress, setOpenAlbumArtAdress] = useState(false);
  // 음역 선택 여닫
  const [openSelectKey, setOpenSelectKey] = useState(false);
  // 카테고리 여닫
  const [openCate, setOpneCate] = useState(false);

  // 알림창 메시지 담을 state
  const [alertMessage, setAlertMessage] = useState({});

  // 초기화
  useEffect(() => {
    if (!editId) return;

    const song = songList.find((s) => s.id === editId);
    if (!song) return;

    // 초기화 상태중 업데이트를 막기위함
    setIsReady(false);

    setTitle(song.title || "");
    setSinger(song.singer || "");
    setKey(song.key || "");
    setLiked(song.liked || false);
    setAlbumArtAdress(song.albumArt || "");
    setMemo1(song.memo1 || "");
    setMemo2(song.memo2 || "");
    setCategory(song.category || "");
    setFile([]);

    //혹시 모르니까 딜레이
    setTimeout(() => setIsReady(true), 0);
  }, [editId]);

  const photoPreview = file.map((file) => (
    <img
      key={file.name}
      className="w-[inherit] h-[inherit] object-cover"
      src={URL.createObjectURL(file)}
      alt={file.name}
    />
  ));


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isReady) return;

    try {
      if (!title.trim()) throw "곡 제목을 작성해 주세요.";
      if (!singer.trim()) throw "가수명을 작성해 주세요.";

      if (file.length > 0 && !cheackAlbumArt) setOpenAlbumArtAdress(true);

      const updatedList = songList.map(song =>
        song.id === editId
          ? {
            ...song,
            title: title.trim(),
            singer: singer.trim(),
            key,
            liked,
            albumArt: albumArtAdress.trim(),
            category,
            memo1: !memo1.trim() && memo2.trim() ? memo2.trim() : memo1.trim(),
            memo2: !memo1.trim() && memo2.trim() ? "" : memo2.trim(),
          }
          : song
      );

      setSongList(updatedList);
      setEditId(""); // 폼 닫기
    } catch (error) {
      setAlertMessage({ message: [error] });
    }
  };

  //변경사항있는지 확인
  function isModified() {
    const editingSong = songList.find(song => song.id === editId);
    const editedSong = {
      id: editingSong?.id,
      title: title.trim(),
      singer: singer.trim(),
      key,
      liked,
      albumArt: albumArtAdress.trim(),
      category,
      memo1: !memo1.trim() && memo2.trim() ? memo2.trim() : memo1.trim(),
      memo2: !memo1.trim() && memo2.trim() ? "" : memo2.trim(),
    }

    const hasChanges = JSON.stringify(editingSong) !== JSON.stringify(editedSong);

    return hasChanges && isReady;
  };


  // 다른 영역 누르면 select 닫기
  useEffect(() => {
    function closeDropdowns(e) {
      if (!e.target.closest("#keyDropdown")) setOpenSelectKey(false);
      if (!e.target.closest("#cateDropdown")) setOpneCate(false);
    }

    document.addEventListener("click", closeDropdowns);
    return () => document.removeEventListener("click", closeDropdowns);
  }, [openSelectKey, openCate]);

  return (
    <>
      <form
        id="editList"
        autoComplete="off"
        onSubmit={handleSubmit}
        className="absolute z-20 bg-[#878787] flex flex-col justify-between"
        style={{
          height: editId === id ? "30rem" : "0rem",
          width: "100%",
          maxHeight: editId === id ? "30rem" : "0rem",
          padding: editId === id ? "0.75rem" : "0",
          overflow: "hidden",
        }}
      >
        <div className="flex flex-col mmd:flex-row gap-1 justify-between mb-4">
          <CreateCategory
            filterList={filterList}
            open={openCate}
            setOpen={setOpneCate}
            category={category}
            setCategory={setCategory}
          />
          <SelectKey
            KEYS={KEYS}
            selectedKey={key}
            setSelectedKey={setKey}
            open={openSelectKey}
            setOpen={setOpenSelectKey}
          />
        </div>

        <div className="relative w-20 h-20 mb-4 mx-auto">
          <Preview
            file={file}
            setFile={setFile}
            openUploadAlbumArt={openUploadAlbumArt}
            setOpenUploadAlbumArt={setOpenUploadAlbumArt}
            photoPreview={photoPreview}
          />

          {/* 좋아요 */}
          <button
            type="button"
            onClick={() => {
              setLiked(!liked);
            }}
            className="absolute top-[-0.3rem] right-[-0.4rem] pointer-events-auto"
          >
            <svg
              className={`w-[1.5rem] h-[1.35rem] pointer-events-none ${liked ? "fill-[#fd4343]" : "fill-[#737373]"
                }`}
              viewBox="0 0 41 38"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.5 4.32807C22.7345 1.67738 26.158 0 29.725 0C36.039 0 41 5.01144 41 11.3896C41 19.211 34.0414 25.5853 23.4985 35.2428L23.4725 35.2665L20.5 38L17.5275 35.2872L17.4466 35.2129C6.9344 25.563 0 19.1974 0 11.3896C0 5.01144 4.961 0 11.275 0C14.842 0 18.2655 1.67738 20.5 4.32807Z" />
            </svg>
          </button>
        </div>

        <div className="w-full inline-flex flex-col gap-1 mb-2">
          <div className="flex">
            <input
              value={title}
              className="w-full grow border bg-transparent py-1 px-2 mb-1 outline-none focus:border-[#00FFC2] focus:text-[#00FFC2] peer order-2"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="w-14 font-semibold text-lg peer-focus:text-[#00FFC2] order-1">제목</label>
          </div>

          <div className="flex">
            <input
              value={singer}
              className="w-full grow border bg-transparent py-1 px-2 mb-1 outline-none focus:border-[#00FFC2] focus:text-[#00FFC2] peer order-2"
              onChange={(e) => setSinger(e.target.value)}
            />
            <label className="w-14 font-semibold text-lg peer-focus:text-[#00FFC2] order-1">가수</label>
          </div>
        </div>

        <div>
          <p className="font-semibold text-lg">memo</p>
          <textarea
            className="w-full border bg-transparent py-1 px-2 resize-none outline-none focus:border-[#00FFC2] focus:text-[#00FFC2]"
            cols={2}
            value={memo1}
            onChange={(e) => setMemo1(e.target.value)}
          />
          <textarea
            className="w-full border bg-transparent py-1 px-2 resize-none outline-none focus:border-[#00FFC2] focus:text-[#00FFC2]"
            cols={2}
            value={memo2}
            onChange={(e) => setMemo2(e.target.value)}
          />
        </div>

        <div className="flex">
          <button
            type="submit"
            disabled={!isModified()}
            className="w-[7rem] mx-auto border hover:bg-[#f2f2f2] hover:text-[#878787] duration-300 disabled:hover:"
          >
            Done
          </button>

          <button
            type="button"
            onClick={() => {
              // if (isModified()) {
              //   alertMessage
              // }
              setEditId("")
            }}
            className="w-[7rem] mx-auto border hover:bg-[#f2f2f2] hover:text-[#878787] duration-300"
          >
            Cancel
          </button>
        </div>

        {openUploadAlbumArt && (
          <UploadAlubmArt
            setOpen={setOpenUploadAlbumArt}
            file={file}
            setFile={setFile}
            photoPreview={photoPreview}
          />
        )}

        {openAlbumArtAdress && (
          <AlertAlbumArt
            setOpen={setOpenAlbumArtAdress}
            albumArtAdress={albumArtAdress}
            setAlbumArtAdress={setAlbumArtAdress}
            setCheackAlbumArt={setCheackAlbumArt}
          />
        )}
      </form>

      {Object.keys(alertMessage).length !== 0 && (
        <Alert message={alertMessage} setMessage={setAlertMessage} />
      )}
    </>
  );
}