export default function Preview({
	file,
	setFile,
	openUploadAlbumArt,
	setOpenUploadAlbumArt,
	photoPreview,
}) {
	return (
		<div className="w-full h-full max-w-full max-h-full relative bg-[#f2f2f2] mx-auto">
			{file.length > 0 && !openUploadAlbumArt ? (
				<div className="w-full h-full relative overflow-hidden border">
					{photoPreview}
					<button
						type="button"
						onClick={() => setFile([])}
						className="w-[1.3rem] h-[1.3rem] absolute top-1 right-1 flex justify-center items-center border border-[#00FFC2] bg-[#1c1b1b]/80"
					>
						<div className="w-[1px] h-[0.7rem] rotate-45 bg-[#00FFC2]"></div>
						<div className="w-[0.7rem] h-[1px] rotate-45 absolute top-[50%] bg-[#00FFC2]"></div>
					</button>
				</div>
			) : (
				<button
					type="button"
					onClick={() => setOpenUploadAlbumArt(true)}
					className="w-[2rem] h-[2rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center border border-[#1c1b1b]"
				>
					<div className="w-[1px] h-[0.7rem] bg-[#1c1b1b]"></div>
					<div className="w-[0.7rem] h-[1px] absolute top-[50%] bg-[#1c1b1b]"></div>
				</button>
			)}
		</div>
	)
}