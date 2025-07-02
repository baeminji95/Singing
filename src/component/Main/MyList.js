import { useEffect, useState } from "react";

import DragZone from "../Delate/DragZone";
import Delate from "../Delate/Delate";
import EditBtn from "../Edit/EditBtn";
import Edit from "../Edit/Edit";
import { Link } from "react-router-dom";

export default function MyList({ songList, setSongList, filterList, filtedSongs }) {
  //memo가 보이는 노래들 id 배열
  const [showMemoArr, setShowMemoArr] = useState([]);
  //제거버튼이 활성화 된 노래 id
  const [delateActiveId, setDelateActiveId] = useState("");
  //수정이 활성화 된 노래 id
  const [editId, setEditId] = useState("");
  //제거 버튼을 위한 드레그 값
  const [dragX, setDragX] = useState(null);

  // document.addEventListener("click", function (e) {
  //   console.log(e.target.id)
  // })

  //like 변경
  function toggleLike(id) {
    const updatedList = songList.map((list) => {
      //e.tartget.id와 같은 아이디를 가진 list만 변경
      if (list.id === id) {
        return { ...list, liked: !list.liked };
      }
      //나머지는 그대로 둔다.
      return list;
    });
    //songList 업데이트해서 로컬스토리지 동기화
    setSongList(updatedList);
  }

  // list 누르면 해당 리스트 메모 보이게 하기
  function showMemo(id, target) {
    // 버블링,캡쳐링 막기위해 id 검사
    if (target.id === id) {
      console.log(target.id)
      if (showMemoArr.indexOf(id) > -1) {
        const newArr = showMemoArr.filter((list) => list !== id);
        setShowMemoArr(newArr);
      } else {
        const newArr2 = [...showMemoArr, id];
        setShowMemoArr(newArr2);
      }
    }
  }

  // 노래 리스트
  const list = filtedSongs
    .map((song, i) => (
      <div
        id={song.id}
        style={{
          height: editId === song.id ? "30rem" : "",
          maxHeight: editId === song.id ? "30rem" : showMemoArr.indexOf(song.id) === -1 ?
            "4.5rem"
            :
            "9rem"
        }}
        className={`list w-full relative border-b pb-3 duration-500 overflow-hidden
    ${editId === song.id && 'mmd:max-h-[28rem]'}`}
        key={song.id}
        onDoubleClick={({ target }) => showMemo(song.id, target)}
      >
        {/* 수정 폼*/}
        <Edit
          key={`key-${song.id}`}
          id={song.id}
          editId={editId}
          songList={songList}
          setSongList={setSongList}
          filterList={filterList}
          setEditId={setEditId}
        />

        <div className="w-full relative flex justify-between items-center pt-3 pointer-events-none">
          <div className="flex gap-3 w-full">
            {/* 앨범자켓 */}
            <div className={`w-[2.9rem] h-[2.9rem] relative`}>
              <img src={song.albumArt} />
              {/* 좋아요 */}
              <button
                id={"likeBtn" + i}
                onClick={(e) => toggleLike(song.id)}
                className="absolute top-[-0.3rem] right-[-0.4rem] pointer-events-auto"
              >
                <svg
                  className={`w-[1rem] h-[0.9rem] pointer-events-none ${song.liked ? "fill-[#fd4343]" : "fill-[#737373]"
                    }`}
                  viewBox="0 0 41 38"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.5 4.32807C22.7345 1.67738 26.158 0 29.725 0C36.039 0 41 5.01144 41 11.3896C41 19.211 34.0414 25.5853 23.4985 35.2428L23.4725 35.2665L20.5 38L17.5275 35.2872L17.4466 35.2129C6.9344 25.563 0 19.1974 0 11.3896C0 5.01144 4.961 0 11.275 0C14.842 0 18.2655 1.67738 20.5 4.32807Z" />
                </svg>
              </button>
            </div>
            {/* 제목, 가수명 */}
            <div
              className="grow flex flex-col justify-center pointer-events-none">
              <p className="text-[1.25rem] font-semibold max-w-[9rem] overflow-hidden text-nowrap text-ellipsis leading-7">
                {song.title}
              </p>
              <p className="text-[0.75rem] font-light text-[#f2f2f2]/90 leading-4 ">
                {song.singer}
              </p>
            </div>
            {/* 키 */}
            <p className="flex items-end text-[1.3rem] pr-4">
              {song.key}
            </p>
          </div>
          {/* 수정버튼 */}
          <EditBtn id={song.id} setActiveId={setEditId} />
        </div>
        {/* 메모 */}
        {song.memo1 && (
          <div className="mt-2 px-2 pointer-events-none">
            <p>MEMO</p>
            <ul className="pl-2 leading-4 text-[0.85rem] opacity-90">
              <li>- {song.memo1}</li>
              {song.memo2 && <li>- {song.memo2}</li>}
            </ul>
          </div>
        )}
        {/* 제거버튼 드레그 영역 */}
        <DragZone
          id={song.id}
          setActiveId={setDelateActiveId}
          setDragX={setDragX}
        />
        {/* 제거버튼 */}
        <Delate
          id={song.id}
          activeId={delateActiveId}
          setActiveId={setDelateActiveId}
          songList={songList}
          setSongList={setSongList}
          dragX={dragX}
          setDragX={setDragX}
        />
      </div>
    ));

  return (
    <>
      <div className="px-4">
        <p className="mt-3 text-[0.65rem]">
          총 <span>{filtedSongs.length}</span>곡
        </p>

        <div className="border-t overflow-y-auto w-full">
          {/* 노래 리스트 */}
          {list}

          {filtedSongs.length === 0 &&
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 mt-6 text-nowrap text-center">
              <p className="text-[0.8rem] opacity-50 mb-1">
                해당하는 노래가 없습니다.
              </p>

              <Link
                className="text-[1.1rem] font-semibold group"
                to={"UserCreate"}>
                노래 추가하기
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#f2f2f2]
                group-hover:w-28 duration-300
                "></div>
              </Link>
            </div>
          }

        </div>
      </div>
    </>
  );
}
