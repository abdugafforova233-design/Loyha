import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {
    FaMapMarkerAlt,
    FaYoutube,
    FaFacebookF,
    FaRegCommentDots
} from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";
import ContactImage from "../../assets/ContactImage.png"
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { SiMastercard, SiVisa } from "react-icons/si";

function Aloqa() {
    return (
        <div className="h-[100%] bg-gray-900">
            <div className="max-w-[1500px] mx-auto px-8 py-12 flex items-center justify-between gap-10">

                {/* Left */}
                <div className="w-[28%]">
                    <h1 className="text-[68px] leading-[75px] font-bold text-white">
                        Biz bilan <br />
                        <span className="text-violet-600">bog&apos;laning</span>
                    </h1>

                    <p className="text-gray-400 text-[18px] leading-8 mt-7">
                        Savollaringiz bormi yoki yordam kerakmi?
                        Biz sizga har doim yordam berishga tayyormiz.
                    </p>

                    <div className="flex gap-4 mt-10">

                        <button className="w-14 h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <PiTelegramLogo />
                        </button>

                        <button className="w-14 h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FiInstagram />
                        </button>

                        <button className="w-14 h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FaFacebookF />
                        </button>

                        <button className="w-14 h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                            <FaYoutube />
                        </button>

                    </div>
                </div>

                {/* Center */}
                <div className="w-[32%] flex justify-center">
                    <img
                        src={ContactImage}
                        alt=""
                        className="w-full object-contain drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
                    />
                </div>

                {/* Right */}
                <div className="w-[40%] grid grid-cols-2 gap-5">

                    {/* Card */}
                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-6 py-6 flex items-start gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-violet-500/30">
                            <BsFillTelephoneFill />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-lg font-semibold">
                                Telefon
                            </h3>

                            <p className="text-white text-xl font-semibold mt-2">
                                +998 90 123 45 67
                            </p>

                            <p className="text-gray-400 mt-2">
                                Har kuni 09:00 - 21:00
                            </p>
                        </div>

                    </div>

                    {/* Card */}
                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-6 py-6 flex items-start gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-violet-500/30">
                            <MdOutlineEmail />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-lg font-semibold">
                                Email
                            </h3>

                            <p className="text-white text-xl font-semibold mt-2">
                                info@techstore.uz
                            </p>

                            <p className="text-gray-400 mt-2">
                                24/7 javob beramiz
                            </p>
                        </div>

                    </div>

                    {/* Card */}
                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-6 py-6 flex items-start gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-violet-500/30">
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-lg font-semibold">
                                Manzil
                            </h3>

                            <p className="text-white text-lg font-semibold mt-2 leading-7">
                                Toshkent sh., Chilonzor <br />
                                tumani, 19-uy
                            </p>

                            <p className="text-gray-400 mt-2">
                                O&apos;zbekiston
                            </p>
                        </div>

                    </div>

                    {/* Card */}
                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-6 py-6 flex items-start gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-violet-500/30">
                            <SlEarphonesAlt />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-lg font-semibold">
                                Qo&apos;llab-quvvatlash
                            </h3>

                            <p className="text-white text-xl font-semibold mt-2">
                                +998 90 123 45 67
                            </p>

                            <p className="text-gray-400 mt-2">
                                Telegram orqali
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="mt-12 bg-[#0B0F17] border border-[#232836] rounded-3xl p-8">
                <div className="grid grid-cols-2 gap-10">
                    <div>
                        <h2 className="flex items-center gap-3 text-white text-3xl font-bold mb-8">
                            <FaRegCommentDots className="text-violet-500 text-3xl" />
                            Bizga xabar yozing
                        </h2>
                        <div className="space-y-5">
                            <div className="grid grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Ismingiz"
                                    className="h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Email manzilingiz"
                                    className="h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Mavzu"
                                className="w-full h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                            />
                            <textarea
                                placeholder="Xabaringizni yozing..."
                                className="w-full h-52 p-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none resize-none focus:border-violet-500 transition"
                            />
                            <button className="flex items-center justify-center gap-3 w-60 h-14 rounded-xl bg-gradient-to-r from-violet-700 to-violet-500 text-white font-semibold hover:scale-105 duration-300 shadow-lg shadow-violet-600/30">
                                <PiTelegramLogo className="text-xl" />
                                Xabar yuborish
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="flex items-center gap-3 text-white text-3xl font-bold mb-8">
                            <FaMapMarkerAlt className="text-violet-500 text-3xl" />
                            Bizning joylashuvimiz
                        </h2>
                        <div className="overflow-hidden rounded-2xl border border-[#2b3140]">
                            <iframe
                                src="https://www.google.com/maps?q=41.285680,69.203464&z=16&output=embed"
                                width="100%"
                                height="360"
                                loading="lazy"
                                allowFullScreen
                                className="w-full"
                            ></iframe>
                        </div>
                        <div className="mt-5 bg-[#090C13] border border-[#2b3140] rounded-2xl p-5 flex items-center gap-4">
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center text-white text-2xl">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-semibold">
                                    Toshkent sh., Chilonzor tumani, 19-uy
                                </h3>
                                <p className="text-gray-400 mt-1">
                                    Mo'ljal: Chilonzor metro bekatidan 5 daqiqa piyoda
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-15 border-t border-[#232836] pt-14 pb-5">
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
                        © 2026 TechStore. Barcha huquqlar himoyalangan.
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
        </div>
    )
}

export default Aloqa
