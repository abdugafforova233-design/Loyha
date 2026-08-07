import { Link } from "react-router-dom"
import {
    HiOutlineComputerDesktop,
    HiOutlineBars3,
    HiOutlineMagnifyingGlass,
    HiOutlineHeart,
    HiOutlineShoppingCart,
} from "react-icons/hi2";

function Navbar() {
    return (
        <div className="w-full flex items-center justify-between px-10 py-5 bg-[#0B0F1D]">
            <div className="flex items-center gap-2">
                <HiOutlineComputerDesktop className="text-3xl text-violet-500" />

                <h2 className="text-3xl font-bold text-white">
                    Tech<span className="text-violet-500">Store</span>
                </h2>
            </div>
            <button className="flex items-center gap-2 bg-[#151A2B] border border-[#2B3045] px-5 py-3 rounded-xl text-white hover:border-violet-500 transition">
                <HiOutlineBars3 className=" text-xl" />
                <h1>Kategoriyalar</h1>
            </button>
            <div className="relative w-[420px]">
                <input className="w-full h-12 bg-transparent border border-[#2B3045] rounded-xl pl-5 pr-12 text-white placeholder:text-gray-400 focus:outline-none focus:border-violet-500"
                    type="text"
                    placeholder="Mahsulot qidirish..." />
                <HiOutlineMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white cursor-pointer" />
            </div>
            <nav className="flex items-center ">
                <Link
                    className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 "
                    to="/" >Bosh sahifa</Link>
                <Link
                    className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 "
                    to="/mahsulotlar" >Mahsulotlar</Link>
                <Link
                    className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 "
                    to="/aloqa" >Aloqa</Link>
                <Link
                    className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 "
                    to="/biz_haqimizda" >Biz haqda</Link>
            </nav>
            <div className="flex items-center gap-6">
                <Link to="/izbriniy">
                    <HiOutlineHeart className="text-2xl text-white cursor-pointer" />
                </Link>
                <div className="relative">
                    <HiOutlineShoppingCart className="text-2xl text-white cursor-pointer" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-violet-600 text-xs text-white flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Navbar