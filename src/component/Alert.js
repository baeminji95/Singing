export default function Alert({
    message,
    setMessage,
}) {
    function check() {
        setMessage({});
    }

    return (
        <article className="bg-[#1c1b1b]/80 fixed inset-0 z-100 text-[0.8rem]">
            <div className="min-w-56 border border-[#f2f2f2] absolute  left-1/2 -translate-x-1/2 top-1/3
            px-8 pt-10 pb-6
            bg-[#1c1b1b] text-[#f2f2f2] text-center">
                {message.message.map((centence,n) => 
                    <p key={message+n} className="text-nowrap">{centence}</p>
                )}
                <button
                    className="border border-[#f2f2f2] px-8 py-1 mt-5
                    hover:bg-[#f2f2f2] hover:text-[#1c1b1b] duration-300"
                    onClick={check}
                >
                    {message.checkMessage || "확인"}
                </button>
            </div>
        </article>
    )
}           