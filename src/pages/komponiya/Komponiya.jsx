import { LuHeadset, LuShieldCheck } from "react-icons/lu"
import Contactlmage from "../../assets/ContactImage.png"
import { HiOutlineShoppingBag, HiOutlineUserGroup } from "react-icons/hi"
import { GoTrophy } from "react-icons/go"
import { FaTruckFast } from "react-icons/fa6"
import { RiTargetFill } from "react-icons/ri"
import { IoEyeOutline, IoLogoInstagram, IoPaperPlaneOutline } from "react-icons/io5"
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa"

const JAMOA = [
    {
        ism: "Jasur Rahmatov",
        lavozim: "Asoschi & CEO",
        tavsif: "Strategiya va rivojlanish bo'yicha mas'ul.",
        rasm: "https://i.pravatar.cc/200?img=12",
    },
    {
        ism: "Azizbek Norov",
        lavozim: "Texnik direktor",
        tavsif: "Texnik xizmat va mahsulot sifatiga mas'ul.",
        rasm: "https://i.pravatar.cc/200?img=13",
    },
    {
        ism: "Sabrina Aliyeva",
        lavozim: "Marketing menejeri",
        tavsif: "Brend rivojlantirish va mijozlar bilan ishlash.",
        rasm: "https://i.pravatar.cc/200?img=47",
    },
    {
        ism: "Oybek Karimov",
        lavozim: "Mijozlar bo'limi rahbari",
        tavsif: "Mijozlar savollariga javob berish va yordam.",
        rasm: "https://i.pravatar.cc/200?img=14",
    },
];

const STATISTIKA = [
    {
        icon: HiOutlineUserGroup,
        qiymat: "10K+",
        label: "Mamnun mijozlar",
    },
    {
        icon: HiOutlineShoppingBag,
        qiymat: "20K+",
        label: "Mahsulotlar soni",
    },
    {
        icon: LuShieldCheck,
        qiymat: "100%",
        label: "Sifat kafolati",
    },
    {
        icon: GoTrophy,
        qiymat: "2+",
        label: "Yillik tajriba",
    },
    {
        icon: FaTruckFast,
        qiymat: "Tez yetkazib berish",
        label: "O'zbekiston bo'ylab",
        katta: true,
    },
];

function Komponiya() {

    return (
        <div className="px-4 md:px-10 py-6 md:py-10 max-w-[1536px] mx-auto">

            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10">
                <img
                    className="w-full md:hidden rounded-2xl order-1"
                    src={Contactlmage}
                    alt=""
                />

                <div className="text-white flex flex-col gap-5 order-2 md:order-1 md:w-1/2">
                    <p className="text-violet-500 font-semibold tracking-wide text-sm">
                        BIZ HAQIMIZDA
                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                        TechStore &ndash; Sifat va{" "}
                        <span className="text-violet-500">ishonchlilik</span> markazi
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base leading-6 md:leading-7">
                        Biz 2023-yilda tashkil etilgan bo&apos;lib, maqsadimiz &ndash;
                        O&apos;zbekistondagi barcha texnologiya ixlosmandlariga eng
                        sifatli kompyuter va aksessuar mahsulotlarini taqdim etish.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 mt-2">
                        <div className="flex gap-4">
                            <div className="bg-gray-800/70 w-12 h-12 md:w-14 md:h-14 shrink-0 p-3 rounded-2xl flex items-center justify-center">
                                <LuShieldCheck className="text-2xl md:text-3xl text-violet-500" />
                            </div>
                            <div>
                                <p className="font-semibold">Sifat kafolati</p>
                                <p className="text-sm text-gray-400">
                                    Barcha mahsulotlar sinovdan <br className="hidden md:block" />
                                    o&apos;tkazilgan va original.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="bg-gray-800/70 w-12 h-12 md:w-14 md:h-14 shrink-0 p-3 rounded-2xl flex items-center justify-center">
                                <LuHeadset className="text-2xl md:text-3xl text-violet-500" />
                            </div>
                            <div>
                                <p className="font-semibold">Professional yordam</p>
                                <p className="text-sm text-gray-400">
                                    Mutaxassislarimiz har doim <br className="hidden md:block" />
                                    sizga yordam berishga tayyor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    className="hidden md:block md:w-1/2 rounded-2xl order-2"
                    src={Contactlmage}
                    alt=""
                />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-0 mt-10 bg-[#090D15] border border-[#202633] rounded-2xl overflow-hidden">
                {STATISTIKA.map((item, index) => (
                    <div
                        key={item.label}
                        className={`flex items-center gap-3 md:gap-4 px-4 md:px-8 py-5 ${index !== STATISTIKA.length - 1 ? "sm:border-r border-[#202633]" : ""
                            } ${item.katta ? "col-span-2 sm:col-span-1" : ""}`}
                    >
                        <div className="w-11 h-11 md:w-14 md:h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                            <item.icon className="text-xl md:text-3xl text-violet-500" />
                        </div>

                        <div>
                            <h1 className={`font-bold text-white whitespace-nowrap ${item.katta ? "text-sm md:text-lg" : "text-lg md:text-2xl"}`}>
                                {item.qiymat}
                            </h1>
                            <p className="text-xs md:text-sm text-gray-400 mt-1">
                                {item.label}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-white grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10">

                <div className="flex gap-5 border border-violet-600/60 py-6 px-6 md:px-10 rounded-2xl items-start">
                    <div className="border border-violet-600 rounded-full w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                        <RiTargetFill className="text-3xl md:text-5xl text-violet-600" />
                    </div>
                    <div>
                        <p className="text-violet-500 font-semibold mb-1">Bizning maqsadimiz</p>
                        <p className="text-sm md:text-base text-gray-300 leading-6">
                            Har bir mijozga yuqori sifatli mahsulotlar, qulay narxlar
                            va a&apos;lo darajadagi xizmat ko&apos;rsatish. Biz texnologiya
                            olamini siz uchun yanada yaqinroq qilishga intilamiz.
                        </p>
                    </div>
                </div>

                <div className="flex gap-5 border border-violet-600/60 py-6 px-6 md:px-10 rounded-2xl items-start">
                    <div className="border border-violet-600 rounded-full w-16 h-16 md:w-20 md:h-20 shrink-0 flex items-center justify-center">
                        <IoEyeOutline className="text-3xl md:text-5xl text-violet-600" />
                    </div>
                    <div>
                        <p className="text-violet-500 font-semibold mb-1">Bizning vizyonimiz</p>
                        <p className="text-sm md:text-base text-gray-300 leading-6">
                            O&apos;zbekistondagi eng ishonchli va yetakchi texnologiya
                            do&apos;koniga aylanish. Doimiy ravishda assortimentimizni
                            kengaytirib, sizga eng yangisini taqdim etamiz.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-14">
                <h2 className="text-white text-2xl md:text-3xl font-bold text-center relative inline-block left-1/2 -translate-x-1/2 pb-3">
                    Bizning jamoa
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-violet-600 rounded-full"></span>
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-8">
                    {JAMOA.map((a2zo) => (
                        <div
                            key={a2zo.ism}
                            className="bg-[#0b0f1a] border border-[#202633] rounded-2xl p-5 flex flex-col items-center text-center hover:border-violet-600/60 transition"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-[#111525] border-2 border-violet-600/50">
                                <img
                                    src={a2zo.rasm}
                                    alt={a2zo.ism}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-white font-semibold mt-4">
                                {a2zo.ism}
                            </h3>
                            <p className="text-violet-500 text-sm mt-1">
                                {a2zo.lavozim}
                            </p>
                            <p className="hidden md:block text-gray-400 text-xs mt-2 leading-5">
                                {a2zo.tavsif}
                            </p>

                            <div className="flex items-center gap-3 mt-4">
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-[#252d3a] flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500 transition"
                                >
                                    <FaLinkedinIn className="text-sm" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-[#252d3a] flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500 transition"
                                >
                                    <IoLogoInstagram className="text-sm" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full border border-[#252d3a] flex items-center justify-center text-gray-400 hover:text-violet-400 hover:border-violet-500 transition"
                                >
                                    <FaTelegramPlane className="text-sm" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-14 mb-4 border border-violet-600/60 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5">
                <div className="w-14 h-14 shrink-0 rounded-full border border-violet-600/60 flex items-center justify-center">
                    <IoPaperPlaneOutline className="text-2xl text-violet-500" />
                </div>

                <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">
                        Yangiliklardan xabardor bo&apos;ling
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                        Yangi mahsulotlar va chegirmalar haqida birinchilardan bo&apos;lib bilib oling.
                    </p>
                </div>

                <div className="flex w-full md:w-auto gap-2">
                    <input
                        type="email"
                        placeholder="Emailingizni kiriting"
                        className="flex-1 md:w-64 h-12 bg-[#0b0f1a] border border-[#252d3a] rounded-xl px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-violet-500"
                    />
                    <button className="w-12 h-12 rounded-xl bg-violet-600 hover:bg-violet-700 flex items-center justify-center text-white shrink-0 transition">
                        <IoPaperPlaneOutline className="text-xl" />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Komponiya