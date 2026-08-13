import { FiHeart, FiShoppingCart } from "react-icons/fi";
import register from "../../assets/ContactImage.png";
import { useState } from "react";

function Registration() {
    const [yuborish, setYuborish] = useState({
        ism: "",
        familiya: "",
        email: "",
        tel: "",
        password: "",
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
            familiya: "",
            email: "",
            tel: "",
            password: "",
        })
    }
    return (
        <div className="min-h-screen bg-[#05070d] px-6 lg:px-10 py-8">
            <form onSubmit={handelSumit} >

                <div className="max-w-[1450px] mx-auto grid lg:grid-cols-2 gap-10">

                    <div className="hidden lg:block relative h-[780px] pt-8">

                        <div className="text-white">
                            <h1 className="text-5xl font-bold leading-tight">
                                Hisob yarating va <br />
                                <span className="text-violet-600">
                                    qulay xarid qiling
                                </span>
                            </h1>

                            <p className="text-gray-400 text-lg mt-5 leading-7">
                                Hisobingiz bilan buyurtmalarni kuzatib boring,
                                <br />
                                sevimlilarni saqlang va tezkor xarid qiling.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 mt-9">

                            <div className="flex text-white gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#10131c] border border-violet-600 text-violet-500 text-2xl flex items-center justify-center">
                                    <FiShoppingCart />
                                </div>

                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Buyurtmalarni kuzatish
                                    </h1>

                                    <p className="text-gray-400 text-sm mt-1">
                                        Barcha buyurtmalaringiz holatini kuzatib boring
                                    </p>
                                </div>
                            </div>

                            <div className="flex text-white gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#10131c] border border-violet-600 text-violet-500 text-2xl flex items-center justify-center">
                                    <FiHeart />
                                </div>

                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Sevimlilarni saqlash
                                    </h1>

                                    <p className="text-gray-400 text-sm mt-1">
                                        Sevimli mahsulotlaringizni bir joyda saqlang
                                    </p>
                                </div>
                            </div>

                            <div className="flex text-white gap-4">
                                <div className="w-14 h-14 rounded-xl bg-[#10131c] border border-violet-600 text-violet-500 text-2xl flex items-center justify-center">
                                    ◇
                                </div>

                                <div>
                                    <h1 className="font-semibold text-lg">
                                        Maxsus takliflar
                                    </h1>

                                    <p className="text-gray-400 text-sm mt-1 max-w-[400px]">
                                        Maxsus chegirmalar va aksiyalardan birinchi
                                        bo&apos;lib xabardor bo&apos;ling
                                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="absolute -bottom-8 -left-10 w-[680px] h-[410px]">
                            <img
                                src={register}
                                className="w-full h-full object-contain"
                                alt=""
                            />
                        </div>

                    </div>

                    <div className="text-white bg-[#090d14] border border-[#292f3a] rounded-2xl p-8 lg:p-10">

                        <h1 className="text-4xl font-bold">
                            Ro&apos;yxatdan o&apos;tish
                        </h1>

                        <p className="text-gray-400 mt-2 mb-8">
                            Yangi hisob yarating
                        </p>

                        <div className="flex gap-5 mb-5">

                            <input
                                className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                                type="text"
                                name="ism"
                                value={yuborish.ism}
                                onChange={boglanish}
                                placeholder="Ismingizni kiriting"
                            />

                            <input
                                className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                                type="text"
                                name="familiya"
                                value={yuborish.familiya}
                                onChange={boglanish}
                                placeholder="Familiyangizni kiriting"
                            />
                        </div>

                        <input
                            className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500 mb-5"
                            type="email"
                            name="email"
                            value={yuborish.email}
                            onChange={boglanish}
                            placeholder="Email manzilingizni kiriting"
                        />

                        <input
                            className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500 mb-5"
                            type="tel"
                            name="tel"
                            value={yuborish.tel}
                            onChange={boglanish}
                            placeholder="+998 XX XXX XX XX"
                        />

                        <div className="flex gap-5 mb-6">

                            <input
                                className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                                type="password"
                                name="password"
                                value={yuborish.password}
                                onChange={boglanish}
                                placeholder="Parol kiriting"
                            />


                            <input
                                className="w-full h-12 bg-[#080c12] border border-[#303642] rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                                type="password"
                                name="password"
                                value={yuborish.password}
                                onChange={boglanish}
                                placeholder="Parolni qayta kiriting"
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full py-4 rounded-lg bg-violet-600 hover:bg-violet-700 duration-300 text-lg font-medium">
                            Ro&apos;yxatdan o&apos;tish
                        </button>
                        
                        <div className="flex items-center gap-4 my-7">

                            <div className="h-px bg-[#303642] flex-1" />

                            <span className="text-gray-500 text-sm">
                                Yoki orqali ro&apos;yxatdan o&apos;ting
                            </span>

                            <div className="h-px bg-[#303642] flex-1" />

                        </div>

                        <div className="grid grid-cols-3 gap-3">

                            <button className="border border-[#303642] rounded-lg py-3 hover:border-violet-600 duration-300">
                                🌐 Google
                            </button>

                            <button className="border border-[#303642] rounded-lg py-3 hover:border-violet-600 duration-300">
                                🔵 Facebook
                            </button>

                            <button className="border border-[#303642] rounded-lg py-3 hover:border-violet-600 duration-300">
                                 Apple
                            </button>

                        </div>


                        <p className="text-center text-gray-400 mt-7">
                            Allaqachon hisobingiz bormi?{" "}
                            <span className="text-violet-500">
                                Kirish
                            </span>
                        </p>

                    </div>

                </div>
            </form>
        </div>
    );
}

export default Registration;