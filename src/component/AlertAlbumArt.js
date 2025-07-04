import Alert from "./Alert";
import { useState } from "react";

export default function AlertAlbumArt({
	setOpen,
	albumArtAdress,
	setAlbumArtAdress,
	setCheackAlbumArt,
}) {
	//주소란 빈칸인데 주소로 저장 눌렀을때 뜰 알림창
	const [openAdressAlert, setOpenAdressAlert] = useState(false);
	const [message, setMessage] = useState("")

	return (
		<div className="fixed inset-0 bg-[#1c1b1b]/80">
			<div className="max-w-[95vw] w-[22rem] fixed top-[30%] left-[50%] translate-x-[-50%] bg-[#1c1b1b] p-3 border border-[#f2f2f2] text-[0.8rem] text-[#f2f2f2]">
				<p className="mt-3">
					이미지를 저장하는 기능이 아직 구현되지않았습니다.
					<br />
					인터넷 이미지 주소로
					저장을 원하시면 아래에 입력창에 주소를 적어주세요.
					<br />
					(마우스 우클릭, '이미지 주소 복사'선택)
				</p>
				<input
					type="text"
					autoComplete="off"
					onChange={(e) => setAlbumArtAdress(e.target.value)}
					id="albumArtAdress"
					className="w-full my-4 p-1 bg-[#1c1b1b] border border-[#f2f2f2] outline-[#00FFC2]"
				/>
				<div className="flex gap-3 justify-between">
					<button
						type="submit"
						onClick={() => {
							if (albumArtAdress) {
								setCheackAlbumArt(true);
							} else {
								return setOpenAdressAlert(true);
							}
							setOpen(false);
						}}
						className="w-[10rem] border px-2 py-1  text-[0.75rem] break-keep border-[#f2f2f2]"
					>
						주소로 이미지 저장하기
					</button>
					<button
						type="submit"
						onClick={() => {
							setCheackAlbumArt(true);
							setOpen(false);
						}}
						className="w-[10rem] border px-2 py-1 text-[0.75rem] break-keep  border-[#f2f2f2]"
					>
						기본 이미지로 대체하기
					</button>
				</div>
			</div>

			{openAdressAlert &&
				<Alert message={message} setOpen={setOpenAdressAlert} />
			}
		</div>
	);
}