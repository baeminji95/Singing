export default function Like({
    filterLiked,
    setFilterLiked
}) {
    return (
        <button
            className="group"
            onClick={() => setFilterLiked(!filterLiked)}
        >
            <svg width="30" height="32" viewBox="0 0 35 32"
                fill={filterLiked ? "#00FFC2" : "#343434"}
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9298 4.13193L17.5 4.79914L18.0702 4.13193C19.8396 2.0613 22.5561 0.75 25.375 0.75C30.3533 0.75 34.25 4.63686 34.25 9.59128C34.25 12.6375 32.8831 15.4607 30.325 18.5792C27.7583 21.7081 24.0719 25.0418 19.5568 29.1217L19.5356 29.1407L19.5336 29.1426L17.4981 30.9891L15.4663 29.1599L15.4643 29.1581L15.3973 29.0973L15.3969 29.097C10.8949 25.0203 7.22015 21.6901 4.66186 18.5653C2.11214 15.4509 0.75 12.6322 0.75 9.59128C0.75 4.63686 4.64673 0.75 9.625 0.75C12.4439 0.75 15.1604 2.0613 16.9298 4.13193Z"
                    className="group-hover:stroke-[#00FFC2] duration-300"
                    stroke={filterLiked ? "#00FFC2" : "#737373"}
                    strokeWidth="1.5" />
            </svg>
        </button>
    )
}