import { Link } from "react-router-dom"
import {
    HiOutlineComputerDesktop,
    HiOutlineBars3,
    HiOutlineMagnifyingGlass,
    HiOutlineHeart,
    HiOutlineShoppingCart,
    HiOutlineUser,
    HiOutlinePhone,
    HiOutlineInformationCircle,
    HiOutlineShoppingBag,
    HiOutlineHome,
    HiOutlineXMark,
} from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import { useFavorites } from "../Contexr/FavoritesContext";


function Navbar() {
    const [open, setOpen] = useState(false);
    const { favoritesCount } = useFavorites();
    const { favorites, removeFavorite } = useFavorites();

    return (
        <div>
            {/* DESKTOP VERSIYA */}
            <div className="hidden md:flex w-full items-center justify-between px-10 py-5 bg-gray-900">

                <Link to="/">
                    <div className="flex items-center gap-2">
                        <HiOutlineComputerDesktop className="text-3xl text-violet-500" />

                        <h2 className="text-3xl font-bold text-white">
                            Tech<span className="text-violet-500">
                                Store
                            </span>
                        </h2>
                    </div>
                </Link>

                <div className="relative w-[420px]">

                    <input
                        className="w-full h-12 bg-transparent border border-[#2B3045] rounded-xl pl-5 pr-12 text-white placeholder:text-gray-400 focus:outline-none focus:border-violet-500"
                        type="text"
                        placeholder="Mahsulot qidirish..." />

                    <HiOutlineMagnifyingGlass
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl text-white cursor-pointer" />
                </div>

                <nav className="flex items-center">

                    <Link
                        className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
                        to="/">
                        Bosh sahifa
                    </Link>

                    <Link
                        className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
                        to="/mahsulotlar">
                        Mahsulotlar
                    </Link>

                    <Link
                        className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
                        to="/aloqa"
                    >
                        Aloqa
                    </Link>

                    <Link
                        className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300"
                        to="/biz_haqimizda"
                    >
                        Biz haqda
                    </Link>

                </nav>


                <div className="flex items-center gap-6">

                    <Link to="/izbriniy" className="relative">
                        <HiOutlineHeart className="text-2xl text-white cursor-pointer" />
                        {favoritesCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-violet-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {favoritesCount}
                            </span>
                        )}
                    </Link>

                    <Link to="/cart">
                        <HiOutlineShoppingCart className="text-2xl text-white cursor-pointer" />
                    </Link>

                    <Link to="/Registration">
                        <CgProfile className="text-2xl text-white cursor-pointer" />
                    </Link>

                </div>

            </div>


            {/* MOBILE VERSIYA */}
            <div className="flex md:hidden flex-col w-full bg-gray-900 text-white">

                <div className="h-16 flex items-center justify-between px-5">

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 bg-[#151A2B] border border-[#2B3045] px-5 py-3 rounded-xl text-white hover:border-violet-500 transition"
                    >
                        {open ? (
                            <HiOutlineXMark className="text-xl" />
                        ) : (
                            <HiOutlineBars3 className="text-xl" />
                        )}
                    </button>

                    <Link to="/">
                        <h2 className="text-xl font-bold">
                            Tech<span className="text-violet-500">
                                Store
                            </span>
                        </h2>
                    </Link>

                    <Link
                        to="/cart"
                        className="relative" >
                        <HiOutlineShoppingCart className="text-2xl" />

                        <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-violet-600 text-[10px] flex items-center justify-center">
                            1
                        </span>
                    </Link>

                </div>

                {/* Sidebar - faqat open=true bo'lganda DOM'ga qo'shiladi */}
                {open && (
                    <>
                        <div
                            className="fixed top-0 left-0 h-screen w-72 bg-[#0F1424] border-r border-[#2B3045] z-50
                            transition-transform duration-300 ease-in-out translate-x-0"
                        >
                            {/* Sidebar header */}
                            <div className="flex items-center justify-between px-5 py-5 border-b border-[#2B3045]">
                                <h2 className="text-xl font-bold text-white">
                                    TechStore
                                </h2>

                                <button
                                    onClick={() => setOpen(false)}
                                    className="text-gray-400 hover:text-white text-2xl"
                                >
                                    <HiOutlineXMark />
                                </button>
                            </div>

                            <div className="p-4 space-y-2">

                                <Link
                                    to="/"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-violet-600 hover:text-white transition"
                                >
                                    <HiOutlineHome className="text-xl" />
                                    Bosh sahifa
                                </Link>

                                <Link
                                    to="/mahsulotlar"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-violet-600 hover:text-white transition"
                                >
                                    <HiOutlineShoppingBag className="text-xl" />
                                    Mahsulotlar
                                </Link>

                                <Link
                                    to="/kompaniya"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-violet-600 hover:text-white transition"
                                >
                                    <HiOutlineInformationCircle className="text-xl" />
                                    Kompaniya haqida
                                </Link>

                                <Link
                                    to="/aloqa"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-violet-600 hover:text-white transition"
                                >
                                    <HiOutlinePhone className="text-xl" />
                                    Aloqa
                                </Link>

                                <Link
                                    to="/profil"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-300 hover:bg-violet-600 hover:text-white transition"
                                >
                                    <HiOutlineUser className="text-xl" />
                                    Profil
                                </Link>

                            </div>
                        </div>

                        {/* Overlay - endi faqat sidebar ochiq bo'lganda ko'rinadi va click'larni tutadi */}
                        <div
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40"
                        />
                    </>
                )}

                <div className="px-4 pb-4">

                    <div className="relative">

                        <input
                            type="text"
                            placeholder="Mahsulot qidirish..."
                            className="w-full h-10 bg-[#111827] border border-[#252d3a] rounded-lg px-4 pr-10 text-sm text-white outline-none focus:border-violet-500" />

                        <HiOutlineMagnifyingGlass
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-300" />

                    </div>

                </div>

                <div className="fixed bottom-0 left-0 right-0 h-16 bg-gray-900 border-t border-[#252d3a] flex items-center justify-around z-50">

                    <Link
                        to="/"
                        className="flex flex-col items-center text-violet-500"
                    >
                        <HiOutlineComputerDesktop className="text-xl" />

                        <span className="text-[10px]">
                            Bosh sahifa
                        </span>
                    </Link>

                    <Link
                        to="/mahsulotlar"
                        className="flex flex-col items-center text-gray-400">
                        <HiOutlineBars3 className="text-xl" />

                        <span className="text-[10px]">
                            Katalog
                        </span>
                    </Link>

                    <Link
                        to="/izbriniy"
                        className="relative flex flex-col items-center text-gray-400">
                        <HiOutlineHeart className="text-xl" />
                        <span className="text-[10px]">Izbriniy</span>
                        {favoritesCount > 0 && (
                            <span className="absolute -top-1 right-3 bg-violet-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                                {favoritesCount}
                            </span>
                        )}
                    </Link>

                    <Link
                        to="/cart"
                        className="flex flex-col items-center text-gray-400">
                        <HiOutlineShoppingCart className="text-xl" />
                        <span className="text-[10px]">
                            Savat
                        </span>
                    </Link>

                    <Link
                        to="/Registration"
                        className="flex flex-col items-center text-gray-400">
                        <CgProfile className="text-xl" />

                        <span className="text-[10px]">
                            Profil
                        </span>
                    </Link>

                </div>

            </div>

        </div>
    )
}


export default Navbar