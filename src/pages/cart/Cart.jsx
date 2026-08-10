import { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"


function Cart() {
    const [korzinka, setKorzinka] = useState([]);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("korzinka")) || [];

        setKorzinka(data);

    }, []);

    // Mahsulotni izbrinniydan o'chirish
    const removeFavorite = (id) => {

        const newKorzinka = korzinka.filter(
            (item) => String(item.id) !== String(id)
        );

        setKorzinka(newKorzinka);

        localStorage.setItem(
            "korzinka",
            JSON.stringify(newKorzinka)
        );
    };

    const JamiSuma = []

    const umumiyNarx = korzinka.reduce(
        (jami, item) =>
            jami + Number(item.price) * (item.quantity || 1),
        0
    );
    return (
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_360px] gap-4">

            <div className="bg-[#070b12] border border-[#1c2431] rounded-xl overflow-hidden">

                <div className="grid grid-cols-[1fr_180px_150px_180px_50px] items-center px-5 h-16 border-b border-[#1c2431] text-gray-300">

                    <span className="text-sm">
                        Mahsulot
                    </span>

                    <span className="text-sm">
                        Narx
                    </span>

                    <span className="text-sm">
                        Miqdor
                    </span>

                    <span className="text-sm">
                        Jami
                    </span>

                    <span></span>




                </div>

                <div className="max-h-[528px] overflow-y-auto">
                    {korzinka.map((item) => (
                        <div className="grid grid-cols-[1fr_180px_150px_180px_50px] items-center px-5 min-h-[132px]">
                            <div className="flex items-center gap-5">
                                <div className="w-[148px] h-[108px] rounded-lg overflow-hidden bg-[#0b1019] border border-[#202936]">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[17px] font-semibold text-white">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">
                                        {item.category}
                                    </p>
                                    <p className="text-sm text-green-500 mt-2">
                                        • Stokda bor
                                    </p>
                                </div>
                            </div>
                            <p className="text-[17px] font-semibold text-violet-400">
                                {item.price} so'm
                            </p>
                            <div>
                                <div className="flex items-center h-11 rounded-lg border border-[#252d3a] bg-[#090e17] overflow-hidden w-fit">
                                    <button
                                        onClick={() =>
                                            setQuantity((prev) =>
                                                Math.max(1, prev - 1)
                                            )}
                                        className="w-10 h-full text-xl text-violet-500 hover:bg-violet-500/10">
                                        −
                                    </button>
                                    <span className="w-10 text-center text-white">
                                        {quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setQuantity((prev) => prev + 1)}
                                        className="w-10 h-full text-xl text-violet-500 hover:bg-violet-500/10">
                                        +
                                    </button>
                                </div>
                            </div>
                            <p className="text-[17px] font-semibold text-violet-400">
                                {umumiyNarx} so'm
                            </p>
                            <button
                                onClick={() =>
                                    removeFavorite(item.id)
                                }
                                className="w-11 h-11 rounded-lg border border-[#252d3a] bg-[#090e17] flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition">

                                <HiOutlineTrash className="text-xl" />

                            </button>

                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between px-5 py-5 border-t border-[#1c2431]">
                    <button className="h-11 px-5 rounded-lg border border-violet-600/70 text-violet-400 flex items-center gap-2 hover:bg-violet-600/10 transition">
                        <HiOutlineTrash className="text-lg" />
                        Barchasini o'chirish
                    </button>
                    <button className="h-11 px-5 rounded-lg border border-violet-600/70 text-violet-400 flex items-center gap-2 hover:bg-violet-600/10 transition">
                        <HiOutlineRefresh className="text-lg" />
                        Savatchani yangilash
                    </button>
                </div>
            </div>

            {/* O'ng tomon---------------------------------------------------------------------------- */}
            <div className="bg-[#070b12] border border-[#1c2431] rounded-xl p-6">
                <div className="flex items-center gap-3 mb-7">
                    <HiOutlineClipboardDocumentList className="text-3xl text-violet-500" />
                    <h2 className="text-2xl font-bold text-white">
                        Buyurtma ma'lumotlari
                    </h2>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between">
                        <span className="text-gray-400">
                            Mahsulotlar (4 ta)
                        </span>
                        <span className="text-white">
                            4 600 000 so'm
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">
                            Yetkazib berish
                        </span>
                        <span className="text-green-500">
                            Bepul
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-400">
                            Chegirma
                        </span>
                        <span className="text-green-500">
                            - 0 so'm
                        </span>
                    </div>
                </div>
                <div className="border-t border-[#252c38] my-7"></div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-lg">
                        Jami summa
                    </span>
                    <span className="text-3xl font-bold text-violet-500">
                        4 600 000 so'm
                    </span>
                </div>
                <button className="w-full h-14 mt-8 rounded-xl bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-violet-700/20 hover:brightness-110 transition">
                    <HiOutlineShoppingCart className="text-2xl" />
                    Rasmiylashtirishga o'tish
                </button>
                <button className="w-full h-14 mt-4 rounded-xl border border-violet-600 text-violet-400 font-semibold text-lg flex items-center justify-center gap-3 hover:bg-violet-600/10 transition">
                    <HiOutlineArrowLeft className="text-xl" />
                    Xaridni davom ettirish
                </button>
                <div className="mt-8 rounded-xl border border-[#202936] bg-[#0a0f18] p-5">
                    <div className="flex gap-3">
                        <HiOutlineShieldCheck className="text-3xl text-violet-500 shrink-0" />
                        <div>
                            <h3 className="text-lg font-semibold text-white">
                                Xavfsiz xarid
                            </h3>
                            <p className="text-sm text-gray-400 mt-2 leading-6">
                                Sizning ma'lumotlaringiz himoyalangan va
                                100% xavfsiz to'lov kafolati.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-3 mt-5">

                        <div className="h-10 rounded-lg bg-[#111a29] flex items-center justify-center font-bold text-white text-sm">
                            VISA
                        </div>
                        <div className="h-10 rounded-lg bg-[#111a29] flex items-center justify-center font-bold text-white text-sm">
                            <span className="text-yellow-500">●</span>
                            <span className="text-red-500 -ml-1">●</span>
                        </div>
                        <div className="h-10 rounded-lg bg-[#111a29] flex items-center justify-center font-bold text-blue-400 text-xs">
                            UZCARD
                        </div>
                        <div className="h-10 rounded-lg bg-[#111a29] flex items-center justify-center font-bold text-white text-sm">
                            HUMO
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart