import { useState } from "react";

//버튼
import Home from "./Home";
import Like from "./Like";
import Setting from "./Setting";
import EditDefaultKeyBtn from "./EditDefaultKeyBtn";
import EditCategoriesBtn from "./EditCategoriesBtn"
//수정페이지
import EditCategoriesPage from "./EditCategoriesPage";
import EditDefaultKeyPage from "./EditDefaultKeyPage";

export default function Nav({
	filterLiked,
	setFilterLiked,
	filterList,
	setFilterList,
	defaultKey,
	setDefaultKey,
	songList,
	setSongList
}) {
	//설정 여닫음
	const [open, setOpen] = useState(false);
	//수정페이지 여닫음
	const [keySettingOpen, setKeySettingOpen] = useState(false);
	const [editCateOpen, setEditCateOpen] = useState(false);

	//스테이트 추적
	// console.log(filterList == editFilterList);
	// console.log(filterList);



	//다른곳 눌리면 설정 닫히게 만들기
	if (open) {
		document.addEventListener("click", function (e) {
			if (e.target.id.indexOf("setting")) {
				setOpen(false);
			}
		});


	}
	return (
		<>
			<nav className="relative w-full h-[3rem] flex justify-between px-10 bg-[#343434] text-[#737373]">
				{/* 좋아요 리스트만 보기 / 취소 버튼 */}
				<Like
					filterLiked={filterLiked}
					setFilterLiked={setFilterLiked}
				/>
				{/* 홈버튼 */}
				<Home />

				{/* 설정 버튼 */}
				<Setting
					open={open}
					setOpen={setOpen}
				/>


				{/* 설정 bar */}
				<div className="w-full max-w-sm min-w-[280px] absolute left-1/2 -translate-x-1/2 pb-1 px-2 z-100 duration-300 text-[rgb(52,52,52)] text-[12px] leading-4 flex flex-row-reverse"
					style={{ bottom: open ? "3rem" : "-7rem" }}
				>
					<ul className="tooltip  min-w-36 max-w-44 h-full bg-[#444444] border-2 border-[#f2f2f2] rounded-md flex justify-between gap-4 pt-3 pb-4 px-4">
						{/* 기본 음역 설정 버튼 */}
						<EditDefaultKeyBtn
							setKeySettingOpen={setKeySettingOpen}
						/>

						{/* 카테고리 편집 */}
						<EditCategoriesBtn
							setEditCateOpen={setEditCateOpen}
						/>
					</ul>
				</div>
			</nav>

			{/* 음역 설정 페이지 */}
			{keySettingOpen &&
				<EditDefaultKeyPage 
				setDefaultKey={setDefaultKey}
				setKeySettingOpen={setKeySettingOpen}
				defaultKey={defaultKey}
				/>
			}


			{/* 카테고리 편집 */}
			{editCateOpen &&
				<EditCategoriesPage 
				filterList={filterList}
				setFilterList={setFilterList}
				setEditCateOpen={setEditCateOpen}
				songList={songList}
				setSongList={setSongList}
				/>
			}
		</>
	);
}


