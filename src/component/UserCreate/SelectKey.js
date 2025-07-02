export default function SelectKey({
	KEYS,
	selectedKey,
	setSelectedKey,
	open,
	setOpen
}) {
	function changeKeyBtn(x) {
		let keyIndex = KEYS.indexOf(selectedKey);
		keyIndex += x;

		if (keyIndex < 0) {
			keyIndex = KEYS.length - 1;
		}
		if (keyIndex > KEYS.length - 1) {
			keyIndex = 0;
		}
		// console.log(keyIndex);
		setSelectedKey(KEYS[keyIndex]);
	}

	const keylist = KEYS.map((key) => (
		<li
			id={key}
			key={key}
			className="p-1 border-b"
			onClick={(e) => setSelectedKey(e.target.id)}
		>
			{key}
		</li>
	))

	//다른곳 눌리면 select 닫히게 만들기
	if (open) {
		document.addEventListener("click", function (e) {
			if (e.target.id.indexOf("key")) {
				setOpen(false);
			}
		});
	}

	return (
		<section 
		id="keyDropdown"
		className="relative grow shrink basis-0">
			<div className="flex gap-5 justify-between border p-1">
				{/* - 버튼 */}
				<button
					type="button"
					onClick={() => changeKeyBtn(-1)}
					className="w-[1.5rem] h-[1.5rem] flex justify-center items-center border"
				>
					<div className="w-[0.7rem] h-[1px] bg-[#f2f2f2]"></div>
				</button>
				{/* 현재 음역, select */}
				<div className="relative">
					<div
						id="keyContainer"
						className="flex items-center gap-1"
						onClick={() => setOpen(!open)}
					>
						<p id="key" className="w-[3.5rem] text-center">
							{selectedKey}
						</p>
						{/* select 버튼 */}
						<button type="button" id="keyBtn">
							<svg
								className="fill-[#f2f2f2] w-2 opacity-80 pointer-events-none"
								viewBox="0 0 10 6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path

									d="M5.7063 5.70715C5.31584 6.09762 4.68173 6.09762 4.29127 5.70715L0.292933 1.70871C0.00555325 1.42132 -0.0787866 0.993362 0.0773983 0.618509C0.233583 0.243655 0.595932 0 1.00201 0H8.99868C9.40164 0 9.76711 0.243655 9.92329 0.618509C10.0795 0.993362 9.99201 1.42132 9.70776 1.70871L5.70942 5.70715H5.7063Z"
								/>
							</svg>
						</button>
					</div>
					{/* 음역 select */}
					<div
						className={`w-[5.5rem] z-10 ${open ? "h-[8rem]  border" : "h-0"} duration-300 custom-scrollbar scroll-smooth cursor-s-resize
						absolute top-[100%] left-[50%] translate-x-[-50%] bg-[#1c1b1b] overflow-y-scroll`}
					>
						<ul>
							{keylist}
						</ul>
					</div>
				</div>
				{/* + 버튼 */}
				<button
					type="button"
					onClick={() => changeKeyBtn(+1)}
					className="w-[1.5rem] h-[1.5rem] relative flex justify-center items-center border"
				>
					<div className="w-[1px] h-[0.7rem] bg-[#f2f2f2]"></div>
					<div className="w-[0.7rem] h-[1px] absolute top-[50%] bg-[#f2f2f2]"></div>
				</button>
			</div>
		</section>
	)
}