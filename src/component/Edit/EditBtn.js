export default function EditBtn({ id, setActiveId }) {
	return (
		<button
			className="absolute top-0 right-0 z-10 mt-1 px-2 text-[0.6rem] border opacity-80 pointer-events-auto"
			onClick={()=> setActiveId(id)}
		>
			edit
		</button>
	)
}