import { HashRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";

import List from "./class/class";

import Main from "./component/Main/Main";
import Nav from "./component/Nav/Nav";
import UserCreatePage from "./component/UserCreate/UserCreatePage";
import Help from "./component/Help/Help";

const seed1 = new List(
  "title",
  "singer",
  "A#",
  "댄스",
  "/logo/logo512.png",
  "memo1",
  "memo2",
  "seed1"
);
const seed2 = new List(
  "title2",
  "singer2",
  "Bb",
  "발라드",
  "/logo/logo512.png",
  "memo1",
  "",
  "seed2"
);
const seedSongList = [seed1, seed2];
const seedFilterList = ["발라드", "댄스"];

function seedData() {
  localStorage.setItem(`songList`, JSON.stringify(seedSongList));
  localStorage.setItem(`filterList`, JSON.stringify(seedFilterList));
  localStorage.setItem("currentCategory", "전체");
  localStorage.setItem("defaultKey", "A");
  localStorage.setItem("filterLiked", "false");
}


if (
  !localStorage.getItem("songList") ||
  !localStorage.getItem("filterList") ||
  !localStorage.getItem("currentCategory") ||
  !localStorage.getItem("defaultKey") ||
  !localStorage.getItem("filterLiked")
) {
  seedData();
}

export default function App() {
  const [songList, setSongList] = useState(JSON.parse(localStorage.getItem("songList")));
  const [filterList, setFilterList] = useState(JSON.parse(localStorage.getItem("filterList")));
  const [defaultKey, setDefaultKey] = useState(localStorage.getItem("defaultKey"));
  const [filterLiked, setFilterLiked] = useState(JSON.parse(localStorage.getItem("filterLiked")));


  //변경되면 로컬스토리지 동기화
  useEffect(() => {
    localStorage.setItem("songList", JSON.stringify(songList));
  }, [songList]);
  useEffect(() => {
    localStorage.setItem("filterList", JSON.stringify(filterList));
  }, [filterList]);
  useEffect(() => {
    localStorage.setItem("defaultKey", defaultKey);
  }, [defaultKey]);
  useEffect(() => {
    localStorage.setItem("filterLiked", JSON.stringify(filterLiked));
  }, [filterLiked]);

  return (
    <Router>
      <div className="max-w-sm min-w-[280px] max-h-[100svh] mx-auto pt-10 overflow-hidden">
        <header className="relative mx-auto mb-4 text-center">
          <Link to="/">
            <h1 className="h-[4rem] font-Timmana mt-2 mx-10 text-[#00FFC2] text-[4rem]">
              Singing!
            </h1>
          </Link>

          {/* 도움말 버튼 */}
          <Link
          to="Help"
          className="w-6 h-6 absolute -top-4 right-4 border-2 rounded-full text-sm border-[#737373] text-[#737373]
          hover:border-[#f2f2f2] hover:text-[#f2f2f2] duration-300">
            ?
          </Link>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <Main
                songList={songList}
                setSongList={setSongList}
                filterList={filterList}
                filterLiked={filterLiked}
              />
            }
          />
          <Route
            path="UserCreate"
            element={
              <UserCreatePage
                songList={songList}
                setSongList={setSongList}
                filterList={filterList}
              />}
          />

          <Route
            path="Help"
            element={
              <Help />
            }
          />

        </Routes>

        <Nav
          filterLiked={filterLiked}
          setFilterLiked={setFilterLiked}
          filterList={filterList}
          setFilterList={setFilterList}
          defaultKey={defaultKey}
          setDefaultKey={setDefaultKey}
          songList={songList}
          setSongList={setSongList}
        />
      </div>
    </Router>
  );
}
