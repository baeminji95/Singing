export default function CreateCategory({
	filterList,
	open,
	setOpen,
	category,
	setCategory
}) {
	const categoryList = filterList.map(category => (
		<li
			id={category}
			key={category}
			className="border-b p-1"
			onClick={({ target }) => {
				setCategory(target.id);
				setOpen(false);
			}}
		>
			{category}
		</li>
	))

	return (
		<section 
		id="cateDropdown"
		className="min-w-[6rem] relative grow basis-0">
			<div
				id="cate"
				className="flex justify-between items-center border p-1"
				onClick={() => setOpen(!open)}
			>
				<p id="cateText">{category}</p>
				<button id="cateBtn" type="button" className="pr-2">
					<svg
						className="fill-[#f2f2f2] w-2 opacity-80 pointer-events-none"
						viewBox="0 0 10 6"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							className="pointer-events-none"
							d="M5.7063 5.70715C5.31584 6.09762 4.68173 6.09762 4.29127 5.70715L0.292933 1.70871C0.00555325 1.42132 -0.0787866 0.993362 0.0773983 0.618509C0.233583 0.243655 0.595932 0 1.00201 0H8.99868C9.40164 0 9.76711 0.243655 9.92329 0.618509C10.0795 0.993362 9.99201 1.42132 9.70776 1.70871L5.70942 5.70715H5.7063Z"
						/>
					</svg>
				</button>
			</div>

			<div className={`w-full ${open ? `max-h-[7.5rem] scustom-scrollbar overflow-y-auto` : 'max-h-0 overflow-hidden'} absolute z-20  duration-500`}>
				<ul className='bg-[#1c1b1b] border-x'>
					{categoryList}
				</ul>
			</div>
		</section>
	)
}