export default function Categoroy({
	open,
	setOpen,
	currentCategory,
	setCurrentCategory,
	filterList,
}) {
	return (
		<div className="relative text-[0.95rem]">
			<button
				id="mainCate"
				className="w-[7rem] flex items-center border pl-2 pr-8"
				onClick={() => setOpen(!open)}
			>
				{currentCategory}
				<svg
					className="w-[0.7rem] fill-[#f2f2f2] absolute right-2 duration-500 pointer-events-none "
					style={{ transform : open && "scaleY(-1)"}}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 320 512"
				>
					<path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" />
				</svg>
			</button>
			<div id="main_category" className={`w-[7rem] duration-500 absolute custom-scrollbar
			${open ? 'overflow-y-auto max-h-[5.4rem] border border-t-0' : 'max-h-0 overflow-hidden'} z-30
			
			`}>
				<ul
					className={`bg-[#343434]`}
				>
					<li>
						<button
						className={`w-full text-left py-[0.1rem] px-[0.3rem] hover:text-[#00FFC2]`}
						key="전체"
						onClick={() => { setCurrentCategory("전체"); setOpen(false) }}
						>
						전체
						</button>
					</li>

					{filterList.map((list) => (
						<li
							className={`w-full text-left border-t py-[0.1rem] px-[0.3rem] hover:text-[#00FFC2]`}
							key={list}
							onClick={() => { setCurrentCategory(list); setOpen(false) }}
						>
							{list}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}