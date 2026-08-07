import { LuHeadset, LuShieldCheck } from "react-icons/lu"
import Contactlmage from "../../assets/ContactImage.png"
import { HiOutlineShoppingBag, HiOutlineUserGroup } from "react-icons/hi"
import { GoTrophy } from "react-icons/go"
import { FaTruckFast } from "react-icons/fa6"
import { RiTargetFill } from "react-icons/ri"
import { IoEyeOutline } from "react-icons/io5"

function Komponiya() {

    return (
        <div>
            <div className="flex justify-between items-center ">
                <div className="text-white flex flex-col gap-5">
                    <p className="text-violet-600"> BIZ HAQIMIZDA</p>
                    <h1 className="text-5xl font-bold">TechStore-Sifat va <br /> <span className="text-violet-600"> ishonchlilik</span> markazi</h1>
                    <p >Biz 2023-yilda tashkil etilgan bo&apos;lib, maqsadimiz - O&apos;zbekistondagi <br />
                        barcha texnologiya ixlosmandlariga eng sifatli kompyuter va <br />
                        aksessuar mahsulotlarini taqdim etish.</p>
                    <div className="flex gap-5 ">
                        <div className="flex gap-5">
                            <div className="bg-gray-800 w-15 h-15 p-3 rounded-2xl">
                                <LuShieldCheck className="text-4xl text-violet-500" />
                            </div>
                            <span>
                                <p>Sifat kafolati</p>
                                <p>Barcha mahsulotlar sinovdan <br /> o&apos;tkazilgan va original.</p>
                            </span>
                        </div >
                        <div className="flex gap-5">
                            <div className="bg-gray-800 w-15 h-15 p-3 rounded-2xl">
                                <LuHeadset className="text-4xl text-violet-500" />
                            </div>
                            <span>
                                <p>Professional yordam</p>
                                <p>Mutaxassislarimiz har doim <br /> sizga yordam berishga tayyor</p>
                            </span>
                        </div>
                    </div>
                </div>
                <img className="w-150" src={Contactlmage} alt="" />
            </div>

            <div className="grid grid-cols-5 items-center bg-[#090D15] border border-[#202633] rounded-2xl overflow-hidden">
                <div className="flex items-center gap-4 px-8 py-5 border-r border-[#202633]">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                        <HiOutlineUserGroup className="text-3xl text-violet-500" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            10K+
                        </h1>

                        <p className="text-sm text-gray-400 mt-1">
                            Mamnun mijozlar
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4 px-8 py-5 border-r border-[#202633]">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                        <HiOutlineShoppingBag className="text-3xl text-violet-500" />
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            20K+
                        </h1>

                        <p className="text-sm text-gray-400 mt-1">
                            Mahsulotlar soni
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4 px-8 py-5 border-r border-[#202633]">

                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                        <LuShieldCheck className="text-3xl text-violet-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            100%
                        </h1>

                        <p className="text-sm text-gray-400 mt-1">
                            Sifat kafolati
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4 px-8 py-5 border-r border-[#202633]">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                        <GoTrophy className="text-3xl text-violet-500" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-white">
                            2+
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Yillik tajriba
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 px-8 py-5">
                    <div className="w-14 h-14 shrink-0 rounded-full bg-[#111525] border border-violet-900/50 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                        <FaTruckFast className="text-3xl text-violet-500" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-white whitespace-nowrap">
                            Tez yetkazib berish
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            O&apos;zbekiston bo&apos;ylab
                        </p>
                    </div>

                </div>

            </div>

            <div className="text-white flex justify-evenly">
                <div className="flex border border-violet-600 py-4 px-15 rounded-2xl">
                    <div className="border border-violet-600 rounded-full w-20 h-20 flex flex-col justify-center items-center">
                        <RiTargetFill className="text-5xl text-violet-600" />
                    </div>
                    <div>
                        <p className="text-violet-600">Bizning maqsadimiz</p>
                        <p>Har bir mijozga yuqori sifatli mahsulotlar, qulay narxlar <br />
                            va a&apos;lo darajadagi xizmat ko&apos;rsatish. Biz texnologiya <br />
                            olamini siz uchun yanada yaqinroq qilishga intilamiz.</p>
                    </div>
                </div>
                <div className="flex border border-violet-600 py-4 px-15 rounded-2xl">
                    <div className="border border-violet-600 rounded-full w-20 h-20 flex flex-col justify-center items-center">
                        <IoEyeOutline className="text-5xl text-violet-600" />
                    </div>
                    <div>
                        <p className="text-violet-600">Bizning vizyonimiz</p>
                        <p>O&apos;zbekistondagi eng ishonchli va yetakchi texnologiya <br />
                            do&apos;koniga aylanish. Doimiy ravishda assortimentimizni <br />
                            kengaytirib, sizga eng yangisini taqdim etamiz.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Komponiya