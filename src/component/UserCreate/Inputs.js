export default function Inputs({
	setSong,
	setSinger,
	setMemo1,
	setMemo2
}) {
	return (
		<article className="my-5 flex flex-col gap-2">
			<div className="flex flex-col-reverse">
				<input
					id="song"
					autoComplete="off"
					onBlur={({ target }) => setSong(target.value)}
					type="text"
					spellCheck="false"
					className="peer/song px-2 outline-none text-[#f2f2f2] border-2 focus:border-[#00FFC2] focus:text-[#00FFC2] bg-[#1c1b1b] duration-300"
				/>
				<label htmlFor="song" className="peer-focus/song:text-[#00FFC2]">
					*곡 제목
				</label>
			</div>

			<div className="flex flex-col-reverse">
				<input
					id="singer"
					autoComplete="off"
					onBlur={({ target }) => setSinger(target.value)}
					type="text"
					spellCheck="false"
					className="peer/singer px-2 outline-none text-[#f2f2f2] border-2 focus:border-[#00FFC2] focus:text-[#00FFC2] bg-[#1c1b1b] duration-300"
				/>
				<label htmlFor="singer" className="peer-focus/singer:text-[#00FFC2]">
					*가수
				</label>
			</div>

			<div className="flex flex-col-reverse">
				<textarea
					className="w-full border bg-transparent py-1 px-2 resize-none  outline-none focus:border-[#00FFC2] focus:text-[#00FFC2]"
					cols={2}
					spellCheck="false"
					onBlur={({ target }) => setMemo2(target.value)}
				>
				</textarea>
				<p className="peer-focus/memo2:text-[#00FFC2]">memo 2</p>

				<textarea
					className="peer/memo1 w-full border bg-transparent py-1 px-2 resize-none outline-none focus:border-[#00FFC2] focus:text-[#00FFC2]"
					cols={2}
					spellCheck="false"
					onBlur={({ target }) => setMemo1(target.value)}
				>
				</textarea>
				<p className="peer-focus/memo1:text-[#00FFC2]">memo 1</p>
			</div>
		</article>
	)
}