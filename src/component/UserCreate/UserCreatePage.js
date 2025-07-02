import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import List from "../../class/class";

import AlertAlbumArt from "../AlertAlbumArt";
import Preview from "./Preview"
import Create_Category from "./CreateCategory";
import SelectKey from "./SelectKey";
import Inputs from "./Inputs";
import UploadAlubmArt from "./UploadAlubmArt";
import Alert from "../Alert";

export const KEYS = [
	"C",
	"C#(Db)",
	"D",
	"Eb(D#)",
	"E",
	"F",
	"F#(Gb)",
	"G",
	"Ab(G#)",
	"A",
	"Bb(A#)",
	"B",
];


export default function UserCreatePage({
	songList,
	setSongList,
	filterList
}) {
	const [vh, setVh] = useState(window.visualViewport.height);
	//뷰포트 크기 변화 감지
	window.addEventListener("resize", function () {
		setVh(window.visualViewport.height);
	})

	//이동
	const navigate = useNavigate();
	//드롭박스
	const [openSelectKey, setOpenSelectKey] = useState(false);
	const [openCate, setOpneCate] = useState(false);
	//앨범자켓 업로드
	const [openUploadAlbumArt, setOpenUploadAlbumArt] = useState(false);
	// 필수조건 없을 때 나올 알림창 메시지
	const [alertMessage, setAlertMessage] = useState({
		// message:[""] 문단 배열 이덱스마다 줄바꿈 발생
		//checkMessage:"" 확인버튼에 들어갈 단어 그냥 확인이면 작성하지않는다.
	});
	// 임시 이미지주소 받기 창
	const [openAlbumArtAdress, setOpenAlbumArtAdress] = useState(false);

	//앨범자켓 업로드 했을 때, 저장이 안됨을 확인하는 용도
	const [cheackAlbumArt, setCheackAlbumArt] = useState(false);

	//저장용
	const [song, setSong] = useState("");
	const [singer, setSinger] = useState("");
	const [key, setKey] = useState(localStorage.getItem("defaultKey"));
	const [file, setFile] = useState([]);
	// //임시 이미지 주소
	const [albumArtAdress, setAlbumArtAdress] = useState("");
	const [memo1, setMemo1] = useState("");
	const [memo2, setMemo2] = useState("");
	const [category, setCategory] = useState("*카테고리 선택");

	//스테이트 추적
	// console.log("song " + song);
	// console.log("singer " + singer);
	// console.log(key);
	// console.log(file);
	// console.log(albumArtAdress);
	// console.log("memo1 " + memo1);
	// console.log("memo2 " + memo2);
	// console.log(category);
	// console.log(categories);
	// console.log(handleSelect);
	// console.log(handleAlbumArt);


	// 새로고침시 경고
	// const preventClose = (e) => {
	// 	e.preventDefault();
	// 	e.returnValue = ""; //Chrome에서 동작하도록; deprecated
	// };
	// useEffect(() => {
	// 	(() => {
	// 		window.addEventListener("beforeunload", preventClose);
	// 	})();
	// 	return () => {
	// 		window.removeEventListener("beforeunload", preventClose);
	// 	};
	// }, []);



	//다른곳 눌리면 select 닫히게 만들기
	if (openSelectKey || openCate) {
		document.addEventListener("click", function (e) {
			if (e.target.id.indexOf("key")) {
				setOpenSelectKey(false);
			}
			if (e.target.id.indexOf("cate")) {
				setOpneCate(false);
			}
		});
	}

	// submit
	function createList(e) {
		e.preventDefault();
		try {
			if (category === "*카테고리 선택") {
				throw "카테고리를 선택해주세요.";
			}
			if (!song.trim()) {
				throw "곡 제목을 작성해 주세요.";
			}
			if (!singer.trim()) {
				throw "가수명을 작성해 주세요.";
			}
			if (!memo1.trim() && memo2) {
				throw "메모1 없이 메모2만 작성할 수 없습니다.";
			}
			if (file.length > 0) {
				if (!cheackAlbumArt) {
					return setOpenAlbumArtAdress(true);
				}
			}
			//추가하려는 새 리스트 생성
			const newList = new List(
				song,
				singer,
				key,
				category,
				albumArtAdress,
				memo1,
				memo2
			);

			//기존 리스트에 새 리스트 추가
			const updatedList = [...songList, newList]

			setSongList(updatedList);

			navigate("/");

		} catch (error) {
			setAlertMessage({
				message: [error]
			});
		}
	}

	//이미지 미리보기 기능
	const photoPreview = file.map((file) => (
		<img
			key={file.name}
			className="w-[inherit] h-[inherit] object-cover"
			src={URL.createObjectURL(file)}
			alt={file.name}
		/>
	));

	return (
		<>
			<main className="grow flex flex-col px-4 py-2"
				style={{
					maxHeight: vh - 140,
					height: vh - 140
				}}
			>
				<h3 className="text-[1.3rem] font-[600]"
				>
					New List
				</h3>
				<form
					id="createList"
					className="relative grow overflow-y-auto custom-scrollbar border-2 p-7
					flex flex-col justify-between"
					onSubmit={createList}
				>
					<article className="flex flex-col gap-5">
						<div className="w-28 h-28 mx-auto">
							<Preview
								file={file}
								setFile={setFile}
								openUploadAlbumArt={openUploadAlbumArt}
								setOpenUploadAlbumArt={setOpenUploadAlbumArt}
								photoPreview={photoPreview}
							/>
						</div>
						<div className="grow flex flex-col justify-between gap-2">

							<Create_Category
								filterList={filterList}
								open={openCate}
								setOpen={setOpneCate}
								category={category}
								setCategory={setCategory} />
							<SelectKey
								KEYS={KEYS}
								selectedKey={key}
								setSelectedKey={setKey}
								open={openSelectKey}
								setOpen={setOpenSelectKey}
							/>
						</div>
					</article>

					<Inputs
						setSong={setSong}
						setSinger={setSinger}
						setMemo1={setMemo1}
						setMemo2={setMemo2}
					/>

					<button
						type="submit"
						form="createList"
						className="w-[7rem] mx-auto border flex justify-center"
					>
						생성하기
					</button>
				</form>
			</main>

			{openUploadAlbumArt &&
				<UploadAlubmArt
					setOpen={setOpenUploadAlbumArt}
					file={file}
					setFile={setFile}
					photoPreview={photoPreview}
				/>}

			{openAlbumArtAdress &&
				<AlertAlbumArt
					setOpen={setOpenAlbumArtAdress}
					albumArtAdress={albumArtAdress}
					setAlbumArtAdress={setAlbumArtAdress}
					setCheackAlbumArt={setCheackAlbumArt}
				/>
			}

			{Object.keys(alertMessage).length !== 0 &&
				< Alert message={alertMessage} setMessage={setAlertMessage} />
			}
		</>
	)
}