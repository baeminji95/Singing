import { useEffect, useRef, useState } from "react";
import MyList from "./MyList"
import NewListBtn from "./NewListBtn";
import Categoroy from "./Category";
import Search from "./Search";
import Alert from "../Alert";

export default function Main({
	songList,
	setSongList,
	filterList,
	filterLiked
}) {

	// filterLiked의 값으로 필터링
	const FILTER_LIKE = {
		true: (song) => song.liked,
		false: (song) => true,
	}

	const [vh, setVh] = useState(window.visualViewport.height);
	//뷰포트 크기 변화 감지
	window.addEventListener("resize", function () {
		setVh(window.visualViewport.height);
	})

	
	//현재카테고리
	const [currentCategory, setCurrentCategory] = useState(
		localStorage.getItem("currentCategory")
	);
	// 카테고리 열기
	const [cateOpen, setCateOpen] = useState(false);
	// 검색창 열기
	const [searchOpen, setSearchOpen] = useState(false);
	//검색어
	const [query, setQuery] = useState("");
	//현재 카테고리(currentCategory), 좋아요만 보이는 버튼(filterLiked)로 걸러진 노래들
	const [filtedSongs, setFiltedSons] = useState(
		songList
			.filter((song) => song.category === currentCategory)
	);

	// 검색창 열리면 자동 포커스를 위한 input ref
	const inputRef = useRef();
	//검색창 열리면 자동 포커스
	if (searchOpen) {
		inputRef.current.focus();
	}
	// 검색창 여닫을 때 filtedSongs, query 변경
	useEffect(() => {
		if (!searchOpen) {
			filtering();
			setQuery("");
		} else {
			setFiltedSons(songList);
		}
	}, [searchOpen])

	// 라이브서치를 위함
	useEffect(() => {
		setFiltedSons(songList.filter(song => song.title.indexOf(query) > -1));
	}, [query])

	//현재 카테고리나 검색등에 맞는 노래만 필터링.
	const filtering = () => {
		if (currentCategory === "전체") {
			setFiltedSons(
				songList
					.filter(FILTER_LIKE[filterLiked])
					.filter(FILTER_LIKE[false])
			);
		} else {
			setFiltedSons(
				songList
					.filter(FILTER_LIKE[filterLiked])
					.filter((song) => song.category === currentCategory)
			);
		}
	}

	//변경사항이 있을 때 filtedSongs를 업데이트
	useEffect(() => {
		filtering();
	}, [songList, currentCategory, filterLiked]);

	// 현재 카테고리 값이 변경되면 local스토리기 동기화
	useEffect(() => {
		localStorage.setItem("currentCategory", currentCategory);
	}, [currentCategory]);


	//다른곳 눌리면 cate 닫히게 만들기
	if (cateOpen) {
		document.addEventListener("click", function (e) {
			if (e.target.id.indexOf("mainCate")) {
				setCateOpen(false);
			}
		});
	}

	//닫히면 안됨
	// //다른곳 눌리면 search 닫히게 만들기 
	// if (searchOpen) {
	// 	document.addEventListener("click", function (e) {
	// 		console.log(e.target)
	// 		if (e.target.id.indexOf("mainSearch")) {
	// 			setSearchOpen(false);
	// 		}
	// 	});
	// }


	return (
		<main className="px-4 py-2 flex flex-col overflow-hidden"
			style={{
				maxHeight: vh - 180,
				height: vh - 180,
			}}>
			<h3 className="text-[1.3rem] font-[600]">
				{searchOpen ? "Search" : "My List"}
			</h3>
			<article className="flex flex-col grow relative border-2 pb-4">
				<div className="relative w-full flex justify-between p-4 bg-[#1c1b1b] border-b">
					<Categoroy
						open={cateOpen}
						setOpen={setCateOpen}
						currentCategory={currentCategory}
						setCurrentCategory={setCurrentCategory}
						filterList={filterList}
					/>
					<Search
						open={searchOpen}
						setOpen={setSearchOpen}
						setQuery={setQuery}
						filtering={filtering}
						setFiltedSons={setFiltedSons}
						songList={songList}
					/>

					{/* 검색창 */}
					<div className="absolute top-3 bottom-3 right-12 bg-black duration-700 felx items-center overflow-hidden"
						style={{
							maxWidth: searchOpen ? "18rem" : "0",
							left: searchOpen ? "1rem" : "100%"
						}}
					>
						<input
							id="mainSearchInput"
							placeholder="제목으로 검색해주세요."
							autoComplete="off"
							ref={inputRef}
							value={query}
							onChange={({ target }) => {
								setQuery(target.value)
							}}
							className="w-full h-full px-1 rounded-sm bg-[#1c1b1b] outline-none text-[#f2f2f2] border focus:border-2 "
						/>
					</div>
				</div>

				<div
					id="my-list"
					className="relative grow overflow-y-auto custom-scrollbar"
					style={{ height: 100 % - 31 }}>
					<MyList
						songList={songList}
						setSongList={setSongList}
						filterList={filterList}
						filtedSongs={filtedSongs}
					/>
				</div>
				<NewListBtn />
			</article>
		</main>
	)
}
