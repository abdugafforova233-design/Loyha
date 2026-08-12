import { FaFacebookF, FaYoutube } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { HiOutlineComputerDesktop } from "react-icons/hi2"
import { PiTelegramLogo } from "react-icons/pi"
import { SiMastercard, SiVisa } from "react-icons/si"


function Footer() {
    return (
        <div className="border-t border-[#232836] pt-14 pb-5 hidden md:block">
            <div className="grid grid-cols-[1.4fr_3fr] gap-20">
                <div>
                    <div className="flex items-center gap-3">

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center shadow-lg shadow-violet-600/30">
                            <HiOutlineComputerDesktop className="text-3xl text-white" />
                        </div>
                        <h2 className="text-4xl font-bold text-white">
                            Tech<span className="text-violet-500">Store</span>
                        </h2>
                    </div>
                    <p className="text-gray-400 leading-8 mt-6">
                        Eng yaxshi kompyuterlar va aksessuarlar
                        do'koni. Sifat, ishonchlilik va tezkor
                        yetkazib berish bizning ustuvor
                        maqsadimiz.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="w-12 h-12 rounded-xl bg-[#10131c] border border-[#2b3140] text-violet-500 text-xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <PiTelegramLogo />
                        </button>

                        <button className="w-12 h-12 rounded-xl bg-[#10131c] border border-[#2b3140] text-violet-500 text-xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FiInstagram />
                        </button>

                        <button className="w-12 h-12 rounded-xl bg-[#10131c] border border-[#2b3140] text-violet-500 text-xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FaFacebookF />
                        </button>
                        <button className="w-12 h-12 rounded-xl bg-[#10131c] border border-[#2b3140] text-violet-500 text-xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FaYoutube />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-12">

                    <ul className="space-y-4">
                        <li className="text-white text-xl font-semibold mb-6">Kategoriyalar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Noutbuklar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Kompyuterlar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Monitorlar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Klaviaturalar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Sichqonchalar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Quloqchinlar</li>
                    </ul>

                    <ul className="space-y-4">
                        <li className="text-white text-xl font-semibold mb-6">Komponentlar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Aksessuarlar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Korpuslar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Xotira (RAM)</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Videokartalar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">SSD / HDD</li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="text-white text-xl font-semibold mb-6">Ma'lumot</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Bosh sahifa</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Mahsulotlar</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Biz haqimizda</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Aloqa</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Kafolat</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Yetkazib berish</li>
                    </ul>
                    <ul className="space-y-4">
                        <li className="text-white text-xl font-semibold mb-6">Yordam</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Qo'llab-quvvatlash</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">FAQ</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">To'lov usullari</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Qaytarish siyosati</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Maxfiylik siyosati</li>
                        <li className="text-gray-400 hover:text-violet-500 cursor-pointer duration-300">Foydalanish shartlari</li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-[#232836] mt-12 pt-6 flex justify-between items-center ">
                <p className="text-gray-500">
                    2026 TechStore. Barcha huquqlar himoyalangan.
                </p>
                <div className="flex gap-9">
                    <button className="bg-gray-800 text-4xl px-4 py-2 rounded-xl text-white hover:border-violet-500 hover:bg-violet-600 duration-300">
                        <SiVisa />
                    </button>
                    <button className="bg-gray-800 text-3xl px-4 py-2 rounded-xl text-amber-500 hover:border-violet-500 hover:bg-violet-600 duration-300">
                        <SiMastercard />
                    </button>
                    <button className="bg-gray-800 text-xl px-4 py-2 rounded-xl text-white hover:border-violet-500 hover:bg-violet-600 duration-300 font-bold">
                        UZCARD
                    </button>
                    <button className="bg-gray-800 text-xl px-4 py-2 rounded-xl text-white hover:border-violet-500 hover:bg-violet-600 duration-300 font-bold">
                        HUMO
                    </button>

                </div>
            </div>

        </div>
    )
}

export default Footer