import { useEffect, useState } from "react";
import { HiOutlineArrowLeft, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
 
 
function Cart() {
    const [korzinka, setKorzinka] = useState([]);
 
    // Savatni localStorage'dan yuklash funksiyasi (qayta ishlatiladi)
    const loadCart = () => {
        const data = JSON.parse(localStorage.getItem("korzinka")) || [];
 
        // Har bir mahsulotga quantity bo'lmasa, 1 qo'yamiz
        const normalized = data.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
        }));
 
        setKorzinka(normalized);
    };
 
    useEffect(() => {
        loadCart();
    }, []);
 
    // O'zgargan korzinkani state va localStorage'ga saqlash
    const saveCart = (newKorzinka) => {
        setKorzinka(newKorzinka);
        localStorage.setItem("korzinka", JSON.stringify(newKorzinka));
    };
 
    // Mahsulotni savatdan o'chirish
    const removeFromCart = (id) => {
        const newKorzinka = korzinka.filter(
            (item) => String(item.id) !== String(id)
        );
        saveCart(newKorzinka);
    };
 
    // Barcha savatni tozalash
    const clearCart = () => {
        saveCart([]);
    };
 
    // Savatni localStorage'dan qayta yuklash
    const refreshCart = () => {
        loadCart();
    };
 
    // Mahsulot miqdorini oshirish
    const increaseQuantity = (id) => {
        const newKorzinka = korzinka.map((item) =>
            String(item.id) === String(id)
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        saveCart(newKorzinka);
    };
 
    // Mahsulot miqdorini kamaytirish (1 dan pastga tushmaydi)
    const decreaseQuantity = (id) => {
        const newKorzinka = korzinka.map((item) =>
            String(item.id) === String(id)
                ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                : item
        );
        saveCart(newKorzinka);
    };
 
    // Umumiy mahsulotlar soni (miqdorlar yig'indisi)
    const jamiMahsulotSoni = korzinka.reduce(
        (jami, item) => jami + item.quantity,
        0
    );
 
    // Umumiy narx
    const umumiyNarx = korzinka.reduce(
        (jami, item) => jami + Number(item.price) * item.quantity,
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
 
                {korzinka.length === 0 ? (
                    <div className="p-10 text-center text-gray-400">
                        Savatingiz hozircha bo'sh.
                    </div>
                ) : (
                    <div className="max-h-[528px] overflow-y-auto">
                        {korzinka.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[1fr_180px_150px_180px_50px] items-center px-5 min-h-[132px] border-b border-[#1c2431] last:border-b-0"
                            >
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
                                    {Number(item.price).toLocaleString()} so'm
                                </p>
                                <div>
                                    <div className="flex items-center h-11 rounded-lg border border-[#252d3a] bg-[#090e17] overflow-hidden w-fit">
                                        <button
                                            onClick={() => decreaseQuantity(item.id)}
                                            className="w-10 h-full text-xl text-violet-500 hover:bg-violet-500/10">
                                            −
                                        </button>
                                        <span className="w-10 text-center text-white">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() => increaseQuantity(item.id)}
                                            className="w-10 h-full text-xl text-violet-500 hover:bg-violet-500/10">
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p className="text-[17px] font-semibold text-violet-400">
                                    {(Number(item.price) * item.quantity).toLocaleString()} so'm
                                </p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    className="w-11 h-11 rounded-lg border border-[#252d3a] bg-[#090e17] flex items-center justify-center text-gray-400 hover:text-red-500 hover:border-red-500 transition">
 
                                    <HiOutlineTrash className="text-xl" />
 
                                </button>
 
                            </div>
                        ))}
                    </div>
                )}
 
                <div className="flex items-center justify-between px-5 py-5 border-t border-[#1c2431]">
                    <button
                        onClick={clearCart}
                        className="h-11 px-5 rounded-lg border border-violet-600/70 text-violet-400 flex items-center gap-2 hover:bg-violet-600/10 transition">
                        <HiOutlineTrash className="text-lg" />
                        Barchasini o'chirish
                    </button>
                    <button
                        onClick={refreshCart}
                        className="h-11 px-5 rounded-lg border border-violet-600/70 text-violet-400 flex items-center gap-2 hover:bg-violet-600/10 transition">
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
                            Mahsulotlar ({jamiMahsulotSoni} ta)
                        </span>
                        <span className="text-white">
                            {umumiyNarx.toLocaleString()} so'm
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
                        {umumiyNarx.toLocaleString()} so'm
                    </span>
                </div>
                <button
                    disabled={korzinka.length === 0}
                    className="w-full h-14 mt-8 rounded-xl bg-gradient-to-r from-violet-700 via-violet-600 to-violet-500 text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg shadow-violet-700/20 hover:brightness-110 transition disabled:opacity-40 disabled:cursor-not-allowed">
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
 