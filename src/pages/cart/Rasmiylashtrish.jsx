import { useState } from "react"
import { HiOutlineX } from "react-icons/hi"

function Rasmiylashtrish({ yopish }) {
    const [yuborish, setYuborish] = useState({
        ism: "",
        familiya: "",
        manzil: "",
        tel: "",
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

        setMavzu("Xabar yuborildi")

        setYuborish({
            ism: "",
            familiya: "",
            manzil: "",
            tel: "",
        })
    }

    return (
        <div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={yopish}
        >
            <div
                className="w-full max-w-[500px] border-2 border-gray-700 bg-[#070b12] p-6 rounded-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* X tugmasi */}
                <button
                    type="button"
                    onClick={() => yopish()}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                >
                    <HiOutlineX />
                </button>

                <h2 className="text-2xl font-bold text-white mb-6">
                    Buyurtmani rasmiylashtirish
                </h2>

                <form
                    onSubmit={handelSumit}
                    className="flex flex-col gap-5 text-white"
                >
                    <input
                        className="w-full h-12 bg-gray-950 border border-gray-700 rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                        type="text"
                        name="ism"
                        value={yuborish.ism}
                        onChange={boglanish}
                        placeholder="Ismingizni kiriting"
                    />

                    <input
                        className="w-full h-12 bg-gray-950 border border-gray-700 rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                        type="text"
                        name="familiya"
                        value={yuborish.familiya}
                        onChange={boglanish}
                        placeholder="Familiyangizni kiriting"
                    />

                    <input
                        className="w-full h-12 bg-gray-950 border border-gray-700 rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                        type="text"
                        name="manzil"
                        value={yuborish.manzil}
                        onChange={boglanish}
                        placeholder="Manzilingizni kiriting"
                    />

                    <input
                        className="w-full h-12 bg-gray-950 border border-gray-700 rounded-lg px-4 outline-none focus:border-violet-600 placeholder:text-gray-500"
                        type="tel"
                        name="tel"
                        value={yuborish.tel}
                        onChange={boglanish}
                        placeholder="+998 XX XXX XX XX"
                    />

                    <button
                        type="submit"
                        className="w-full py-4 rounded-lg bg-violet-600 hover:bg-violet-700 duration-300 text-lg font-medium"
                    >
                        Rasmiylashtirish
                    </button>

                    {mavzu && (
                        <p className="text-green-500 text-center">
                            {mavzu}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default Rasmiylashtrish