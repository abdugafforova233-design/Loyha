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
import { useState } from "react";

function Aloqa() {
    const [yuborish, setYuborish] = useState({
        ism: "",
        email: "",
        mavzu: "",
        xabar: "",
    })
    const [mavzu, setMavzu] = useState("")
    const boglanish = (e) => {
        setYuborish({
            ...yuborish,
            [e.target.name]: e.target.value,
        })
    }
    const handelSumit = (e) => {
        e.preventDefault()
        setMavzu("Xabar yuborild")
        setYuborish({
            ism: "",
            email: "",
            mavzu: "",
            xabar: "",
        })
    }

    return (
        <div className="">
            <div className="max-w-[1500px] mx-auto px-5 sm:px-8 py-8 sm:py-12 flex flex-col md:flex-row items-center md:items-stretch md:justify-between gap-8 md:gap-10">

                {/* Matn + rasim bloki */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0">

                    <div className="w-full md:w-[28%] text-center md:text-left">
                        <h1 className="text-3xl leading-tight sm:text-4xl sm:leading-[1.1] font-bold text-white md:text-6xl md:leading-[1.05]">
                            Biz bilan <br />
                            <span className="text-violet-600">bog&apos;laning</span>
                        </h1>

                        <p className="text-gray-400 text-base sm:text-[18px] leading-7 sm:leading-8 mt-4 md:mt-7">
                            Savollaringiz bormi yoki yordam kerakmi?
                            Biz sizga har doim yordam berishga tayyormiz.
                        </p>

                        <div className="flex justify-center md:justify-start gap-3 sm:gap-4 mt-6 md:mt-10">

                            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-xl sm:text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                                <PiTelegramLogo />
                            </button>

                            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-xl sm:text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                                <FiInstagram />
                            </button>

                            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-xl sm:text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                                <FaFacebookF />
                            </button>

                            <button className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#10131c] border border-[#2a2f3b] text-violet-500 text-xl sm:text-2xl flex items-center justify-center hover:border-violet-500 hover:bg-violet-500/10 duration-300">
                                <FaYoutube />
                            </button>

                        </div>
                    </div>

                    <div className="w-[70%] sm:w-[55%] md:w-[32%] flex justify-center order-first md:order-none">
                        <img
                            src={ContactImage}
                            alt=""
                            className="w-full object-contain drop-shadow-[0_0_45px_rgba(139,92,246,0.45)]"
                        />
                    </div>
                </div>


                {/* Kontakt kartalari */}
                <div className="w-full md:w-[40%] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-5 sm:px-6 py-5 sm:py-6 flex items-start gap-4 sm:gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg shadow-violet-500/30">
                            <BsFillTelephoneFill />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-base sm:text-lg font-semibold">
                                Telefon
                            </h3>

                            <p className="text-white text-lg sm:text-xl font-semibold mt-2">
                                +998 90 123 45 67
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base mt-2">
                                Har kuni 09:00 - 21:00
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-5 sm:px-6 py-5 sm:py-6 flex items-start gap-4 sm:gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg shadow-violet-500/30">
                            <MdOutlineEmail />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-base sm:text-lg font-semibold">
                                Email
                            </h3>

                            <p className="text-white text-lg sm:text-xl font-semibold mt-2 break-all">
                                info@techstore.uz
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base mt-2">
                                24/7 javob beramiz
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-5 sm:px-6 py-5 sm:py-6 flex items-start gap-4 sm:gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg shadow-violet-500/30">
                            <FaMapMarkerAlt />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-base sm:text-lg font-semibold">
                                Manzil
                            </h3>

                            <p className="text-white text-base sm:text-lg font-semibold mt-2 leading-6 sm:leading-7">
                                Toshkent sh., Chilonzor <br />
                                tumani, 19-uy
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base mt-2">
                                O&apos;zbekiston
                            </p>
                        </div>

                    </div>

                    <div className="bg-[#10131c] border border-[#232836] rounded-2xl px-5 sm:px-6 py-5 sm:py-6 flex items-start gap-4 sm:gap-5 hover:border-violet-500 hover:shadow-[0_0_35px_rgba(139,92,246,0.25)] duration-300">

                        <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-xl sm:text-2xl shadow-lg shadow-violet-500/30">
                            <SlEarphonesAlt />
                        </div>

                        <div>
                            <h3 className="text-violet-400 text-base sm:text-lg font-semibold">
                                Qo&apos;llab-quvvatlash
                            </h3>

                            <p className="text-white text-lg sm:text-xl font-semibold mt-2">
                                +998 90 123 45 67
                            </p>

                            <p className="text-gray-400 text-sm sm:text-base mt-2">
                                Telegram orqali
                            </p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="mx-4 sm:mx-8 mt-8 sm:mt-12 bg-[#0B0F17] border border-[#232836] rounded-3xl p-5 sm:p-8">
                <form onSubmit={handelSumit} className="space-y-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                        <div>
                            <h2 className="flex items-center gap-3 text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                                <FaRegCommentDots className="text-violet-500 text-2xl sm:text-3xl" />
                                Bizga xabar yozing
                            </h2>

                            <div className="space-y-4 sm:space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                                    <input
                                        type="text"
                                        name="ism"
                                        value={yuborish.ism}
                                        onChange={boglanish}
                                        placeholder="Ismingiz"
                                        className="h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={yuborish.email}
                                        onChange={boglanish}
                                        placeholder="Email manzilingiz"
                                        className="h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="mavzu"
                                    value={yuborish.mavzu}
                                    onChange={boglanish}
                                    placeholder="Mavzu"
                                    className="w-full h-14 px-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none focus:border-violet-500 transition"
                                />
                                <textarea
                                    name="xabar"
                                    value={yuborish.xabar}
                                    onChange={boglanish}
                                    placeholder="Xabaringizni yozing..."
                                    className="w-full h-40 sm:h-52 p-5 rounded-xl bg-[#090C13] border border-[#2b3140] text-white placeholder:text-gray-500 outline-none resize-none focus:border-violet-500 transition"
                                />
                                <button
                                    type="submit"
                                    className="flex items-center justify-center gap-3 w-full sm:w-60 h-14 rounded-xl bg-gradient-to-r from-violet-700 to-violet-500 text-white font-semibold hover:scale-105 duration-300 shadow-lg shadow-violet-600/30">
                                    <PiTelegramLogo className="text-xl" />
                                    Xabar yuborish
                                </button>
                            </div>

                        </div>
                        <div>
                            <h2 className="flex items-center gap-3 text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                                <FaMapMarkerAlt className="text-violet-500 text-2xl sm:text-3xl" />
                                Bizning joylashuvimiz
                            </h2>
                            <div className="overflow-hidden rounded-2xl border border-[#2b3140]">
                                <iframe
                                    src="https://www.google.com/maps?q=41.285680,69.203464&z=16&output=embed"
                                    width="100%"
                                    height="280"
                                    loading="lazy"
                                    allowFullScreen
                                    className="w-full sm:h-[360px]"
                                ></iframe>
                            </div>
                            <div className="mt-5 bg-[#090C13] border border-[#2b3140] rounded-2xl p-4 sm:p-5 flex items-center gap-4">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-xl bg-gradient-to-br from-violet-600 to-violet-500 flex items-center justify-center text-white text-xl sm:text-2xl">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-white text-base sm:text-lg font-semibold">
                                        Toshkent sh., Chilonzor tumani, 19-uy
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Mo'ljal: Chilonzor metro bekatidan 5 daqiqa piyoda
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Aloqa