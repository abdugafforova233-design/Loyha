import { Link } from "react-router-dom";
import Orqafon from "../assets/Orqafon.png"

import Noutbuk from "../assets/noutbuk.png"
import Kompyuter from "../assets/kompyuter.png"
import Monitor from "../assets/monitor.png"
import Klaviatura from "../assets/klaviatura.png"
// import Sichqoncha from "../assets/sichqoncha.png"
import Quloqchin from "../assets/quloqchin.png"
import Mikrofon from "../assets/mikrofon.png"
import Komponent from "../assets/komponent.png"
import Aksessuar from "../assets/aksessuar.png"
import Xotira from "../assets/xotira_qurilma.png"
import ImigKlyava from "../assets/ImigKlyava.jpg";
import images from "../assets/images.jpg"
import ImigMishka from "../assets/ImigMishka.jpg"
import ImigManitor from "../assets/ImigMonitor.png"
import samsung from "../assets/samsung.png"
import {
    HiOutlineComputerDesktop,
    HiOutlineBars3,
    HiOutlineMagnifyingGlass,
    HiOutlineHeart,
    HiOutlineShoppingCart,
} from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { GrCreditCard } from "react-icons/gr";
import { LuHeadset } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
function Home() {
    const MashhurMahsulotlar = [
        {
            name: "HyperX Cloud II",
            category: "Quloqchin",
            price: "650 000 so'm",
            image: images,
            id: 1,
        },
        {
            name: "Logitech G Pro",
            category: "Klaviatura",
            price: "950 000 so'm",
            image: ImigKlyava,
            id: 2,
        },
        {
            name: "Logitech G102",
            category: "Sichqoncha",
            price: "250 000 so'm",
            image: ImigMishka,
            id: 3,
        },
        {
            name: "ASUS TUF 24 FHD",
            category: "Monitor",
            price: "2 500 000 so'm",
            image: ImigManitor,
            id: 4,
        },
        {
            name: "Samsung 970 EVO Pluse",
            category: "SSD 1TB",
            price: "1 250 000 so'm",
            image: samsung,
            id: 5
        }
    ]
    return (
        <div>
            {/* qiruv qator */}
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
                    <Link className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 " to="#">Bosh sahifa</Link>
                    <Link className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 " to="#">Mahsulotlar</Link>
                    <Link className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 " to="#">Aloqa</Link>
                    <Link className=" text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 " to="#">Biz haqda</Link>
                </nav>
                <div className="flex items-center gap-6">
                    <HiOutlineHeart className="text-2xl text-white cursor-pointer" />

                    <div className="relative">
                        <HiOutlineShoppingCart className="text-2xl text-white cursor-pointer" />
                        <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-violet-600 text-xs text-white flex items-center justify-center">
                            0
                        </span>
                    </div>
                </div>

            </div>
            {/* Glavniy ekran */}
            <div className="relative w-full h-[600px] overflow-hidden rounded-3xl">

                {/* Rasm */}
                <img
                    src={Orqafon}
                    alt="Hero"
                    className="w-full h-full object-cover"
                />

                {/* Qora overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Matn */}
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-16">
                    <h1 className="text-6xl font-bold text-white">
                        Eng yaxshi <br /> <span className="text-violet-500">kompyuterlar</span> va <br /> <span className="text-violet-500">aksessuarlar</span>  do&apos;koni
                    </h1>

                    <p className="text-gray-300 text-xl mt-5 max-w-xl">
                        Sifatli mahsulotlar, qulay narxlar va tez yetkazib berish <br /> bilan sizning ehtiyojlaringizni qondiramiz.</p>

                    <button className="mt-8 w-52 h-14 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition">
                        Hoziroq xarid qiling
                    </button>
                </div>

            </div>
            {/* aloqlar */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 absolute top-[500px] left-0 right-0 mx-auto w-[90%]  rounded-xl shadow-lg">

                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <LuShieldCheck className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            100% original mahsulotlar
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Sifat kafolati
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <FaTruckFast className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            Tez yetkazib berish
                        </h3>
                        <p className="text-gray-400 text-sm">
                            1–3 kun ichida
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <GrCreditCard className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            Xavfsiz to&apos;lov
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Payme, Click, UzCard
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-5">
                    <LuHeadset className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            24/7 qo&apos;llab-quvvatlash
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Har doim siz bilan
                        </p>
                    </div>
                </div>

            </div>
            {/* Kategoriyalar */}
            <div className=" border-2 border-violet-500 rounded-xl">
                <h2 className="text-white font-bold text-xl p-2">Kategoriyalar</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 ">
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Noutbuk} alt="Noutbuk" />
                        <h3>Noutbuklar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Kompyuter} alt="Kompyuterlar" />
                        <h3>Kompyuterlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Monitor} alt="Monitorlar" />
                        <h3>Monitorlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Klaviatura} alt="Klaviaturalar" />
                        <h3>Klaviaturalar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Quloqchin} alt="Sichqonchalar" />
                        <h3>Sichqonchalar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Quloqchin} alt="Quloqchinlar" />
                        <h3>Quloqchinlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Mikrofon} alt="Mikrofonlar" />
                        <h3>Mikrofonlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Komponent} alt="Komponentlar" />
                        <h3>Komponentlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Aksessuar} alt="Aksessuarlar" />
                        <h3>Aksessuarlar</h3>
                    </div>
                    <div className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white">
                        <img src={Xotira} alt="Xotira qurilmalari" />
                        <h3>Xotira qurilmalari</h3>
                    </div>
                </div>
            </div>
            {/* Mashhur mahsulotlar */}
            <div className="mt-16">
                <h2 className="text-3xl font-bold text-white mb-8">Mashhur mahsulotlar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {MashhurMahsulotlar.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#151A2D] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-2 duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover"
                                />

                                <button className="absolute top-4 right-4 bg-[#0F172A]/80 p-2 rounded-full text-xl text-white hover:text-red-500 duration-300">
                                    <HiOutlineHeart />
                                </button>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-white mt-2">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    {item.category}
                                </p>

                                <div className="flex items-center justify-between mt-5">
                                    <span className="text-2xl font-bold text-indigo-500">
                                        {item.price}
                                    </span>

                                    <button className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-2xl text-white duration-300">
                                        <HiOutlineShoppingCart />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Home