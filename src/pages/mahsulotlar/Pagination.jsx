import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex items-center justify-center gap-3 mt-10">
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="w-10 h-10 rounded-lg bg-[#151A2D] text-white disabled:opacity-40"
            >
                <IoChevronBack className="mx-auto" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i}
                    onClick={() => onPageChange(i + 1)}
                    className={`w-10 h-10 rounded-lg ${currentPage === i + 1
                            ? "bg-violet-600 text-white"
                            : "bg-[#151A2D] text-white"
                        }`}
                >
                    {i + 1}
                </button>
            ))}

            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="w-10 h-10 rounded-lg bg-[#151A2D] text-white disabled:opacity-40"
            >
                <IoChevronForward className="mx-auto" />
            </button>
        </div>
    );
}

export default Pagination;