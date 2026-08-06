import { LuHeadset, LuShieldCheck } from "react-icons/lu"
import Contactlmage from "../../assets/ContactImage.png"
import { HiOutlineUserGroup } from "react-icons/hi"

function Komponiya() {
    // &apos;
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
            <div>
                <div className="text-white">
                    <HiOutlineUserGroup />
                    <h1>10K+</h1>
                    <p>Mamnun mijozlar</p>
                </div>
                <div>
                    <h1>20K+</h1>
                    <p>Mahsulotlar</p>
                </div>
                <div>
                    <h1>100%</h1>
                    <p>Sifat kafolati</p>
                </div>
                <div>
                    <h1>2+</h1>
                    <p>Yillik tajriba</p>
                </div>
                <div>
                    <h1>Tez yetkazib berish</h1>
                    <p>O&apos;zbekiston bo&apos;ylab</p>
                </div>
            </div>
        </div>
    )
}

export default Komponiya