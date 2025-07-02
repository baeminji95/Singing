export default function UploadAlubmArt({
	setOpen,
	file,
	setFile,
	photoPreview
}) {

	return (
		<div className="fixed inset-0 bg-[#1c1b1b]/80">
			<div className=" w-[80%] max-w-sm h-[20rem] mmd:h-[12rem] absolute top-[30%] left-[50%] translate-x-[-50%] flex flex-col justify-between p-3  border-[#00FFC2] border bg-[#343434]/95">
				<div className="flex justify-between items-center">
					<h3 className=" font-semibold text-[1.5rem] text-[#00FFC2]">
						음원 커버
					</h3>
					{/* 닫기 버튼 */}
					<button
						type="button"
						onClick={() => {
							setOpen(false);
							setFile([]);
						}}
						className="w-[1.3rem] h-[1.3rem] relative flex justify-center items-center border border-[#00FFC2]"
					>
						<div className="w-[1px] h-[0.7rem] rotate-45 bg-[#00FFC2]"></div>
						<div className="w-[0.7rem] h-[1px] rotate-45 absolute bg-[#00FFC2]"></div>
					</button>
				</div>

				<div className="flex flex-col mmd:flex-row justify-between gap-4 mb-1">
					{/* 프리뷰 */}
					{file.length > 0 ? (
						<div className="w-[7rem] h-[7rem] overflow-hidden border mx-auto">
							{photoPreview}
						</div>
					) : (
						<div className="w-[7rem] h-[7rem] bg-[#f2f2f2] mx-auto"></div>
					)
					}

					<div className="grow flex flex-col justify-between items-center gap-4 ">
						{/* file */}
						<label className="w-full h-[4rem] flex flex-col justify-center items-center gap-2 border">
							<input
								type="file"
								className="hidden"
								onChange={({ target }) => setFile(Array.from(target.files))}
								multiple={false}
								accept="image/png, image/jpg, image/jpeg"
							/>
							{file.length > 0 ? (
								file.map((file) => (
									<p
										key={file.name}
										className="text-[0.8rem] max-w-[inherit] break-words"
									>
										{file.name}
									</p>
								))
							) : (
								<>
									<svg
										className="w-[1.8rem] fill-[#D9D9D9]"
										viewBox="0 0 24 19"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M16.001 19H18.0012C18.4762 19 18.9137 18.7455 19.1512 18.3257L23.8182 10.1828C24.0599 9.76295 24.0599 9.24554 23.8224 8.82143C23.5849 8.39732 23.1473 8.14286 22.6681 8.14286H6.00039C5.52536 8.14286 5.08783 8.39732 4.85032 8.81719L2.00013 13.7877V2.71429C2.00013 2.34107 2.30015 2.03571 2.66684 2.03571H7.56299C7.738 2.03571 7.90885 2.10781 8.03386 2.23504L9.13809 3.35893C10.0132 4.24955 11.2007 4.75 12.4383 4.75H17.3345C17.7011 4.75 18.0012 5.05536 18.0012 5.42857V6.78571H20.0013V5.42857C20.0013 3.93147 18.8054 2.71429 17.3345 2.71429H12.4383C11.7299 2.71429 11.0507 2.43013 10.5507 1.92121L9.44645 0.79308C8.94641 0.284152 8.2672 0 7.55882 0H2.66684C1.19591 0 0 1.21719 0 2.71429V16.2857C0 17.7828 1.19591 19 2.66684 19H3.6544H16.001Z" />
									</svg>
									<p className="text-[0.6rem] font-[400]">
										이미지 파일 업로드
									</p>
								</>
							)}
						</label>

						<button
							type="button"
							onClick={() => {
								if(!file.length > 0){
									return alert("업로드할 파일이 없습니다.")
								}
								setOpen(false)
							}}
							className="w-full border text-[0.8rem] py-1"
						>
							업로드
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
