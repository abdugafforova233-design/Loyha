import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineTruck,
} from "react-icons/hi2";
import { TbShieldCheck } from "react-icons/tb";

function ProductInformation() {
  const { id } = useParams();

  const [mahsulot, setMahsulot] = useState(null);
  const [barchaMahsulotlar, setBarchaMahsulotlar] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/mahsulotlar/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMahsulot(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:3000/mahsulotlar")
      .then((res) => res.json())
      .then((data) => {
        setBarchaMahsulotlar(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!mahsulot) {
    return (
      <div className="min-h-screen bg-[#05070d] flex items-center justify-center text-white text-xl">
        Mahsulot yuklanmoqda...
      </div>
    );
  }
  const oxshashMahsulotlar = barchaMahsulotlar
    .filter(
      (item) =>
        item.category === mahsulot.category &&
        String(item.id) !== String(mahsulot.id)
    )
    .slice(0, 5);

  return (
    <div className="min-h-screen bg-[#05070d] text-white px-5 py-8">
      <div className="max-w-[1450px] mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="w-full h-[560px] bg-[#080b14] border border-violet-500/50 rounded-2xl overflow-hidden flex items-center justify-center">
              <img
                src={mahsulot.image}
                alt={mahsulot.name}
                className="w-full h-full object-contain p-8"
              />
            </div>
          </div>
          <div className="flex flex-col">

            <div className="flex items-center gap-3 mb-3">
              <span className="text-violet-500 font-medium">
                {mahsulot.brand || mahsulot.category}
              </span>
              <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-md text-sm">
                Stokda bor
              </span>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {mahsulot.name}
            </h1>
            <div className="flex items-center gap-3 mb-5">
              <div className="text-yellow-400 text-lg">
                ★★★★★
              </div>
              <span className="text-gray-400 text-sm">
                4.8 (128 ta baho)
              </span>
            </div>
            <div className="flex items-center gap-5 mb-6">

              <span className="text-gray-500 text-lg">
                {mahsulot.price} so&apos;m
              </span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <span className="font-semibold">
                Miqdor:
              </span>
              <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden">
                <button
                  onClick={() =>
                    setQuantity((prev) =>
                      Math.max(1, prev - 1)
                    )
                  }
                  className="px-4 py-2 text-gray-400 hover:text-white hover:bg-violet-600 duration-200"
                >
                  −
                </button>
                <span className="px-5 py-2 border-x border-gray-700">
                  {quantity}
                </span>
                <button
                  onClick={() =>
                    setQuantity((prev) => prev + 1)
                  }
                  className="px-4 py-2 text-gray-400 hover:text-white hover:bg-violet-600 duration-200"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="flex-1 bg-violet-600 hover:bg-violet-700 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold duration-300">
                <HiOutlineShoppingCart className="text-2xl" />
                Savatchaga qo'shish
              </button>
              <button className="w-20 border border-violet-500 rounded-xl flex items-center justify-center text-violet-500 hover:bg-violet-500 hover:text-white duration-300">
                <HiOutlineHeart className="text-2xl" />
              </button>
            </div>
            <button className="w-full border border-violet-500 text-violet-400 hover:bg-violet-600 hover:text-white py-3 rounded-xl mt-3 duration-300">
              ⚡ Tez xarid qilish
            </button>
            <div className="border border-gray-800 rounded-xl mt-4 overflow-hidden">
              <div className="flex items-center gap-4 p-4 border-b border-gray-800">
                <HiOutlineTruck className="text-violet-500 text-3xl" />
                <div>
                  <p className="font-medium">
                    Yetkazib berish
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    1–2 kun ichida yetkazib beriladi
                  </p>
                </div>
                <span className="ml-auto text-gray-400">
                  →
                </span>
              </div>
              <div className="flex items-center gap-4 p-4">
                <TbShieldCheck className="text-violet-500 text-3xl" />
                <div>
                  <p className="font-medium">
                    Do'kon: TechStore
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    TechStore rasmiy do'koni
                  </p>
                </div>
                <span className="ml-auto text-gray-400">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border border-gray-800 rounded-xl overflow-hidden">
          <div className="flex gap-8 px-5 border-b border-gray-800 overflow-x-auto ">
            <button className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 ">
              Tavsif
            </button>
            <button className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 ">
              Xususiyatlar
            </button>
            <button className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 ">
              Sharhlar (128)
            </button>
            <button className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 ">
              Yetkazib berish
            </button>
            <button className="text-white pb-1 border-b-2 me-4 border-transparent hover:border-violet-500 hover:text-violet-500 transition-all duration-300 ">
              To'lov usullari
            </button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
            <div>
              <p className="text-gray-400 leading-7">
                {mahsulot.description ||
                  `${mahsulot.name} haqida batafsil ma'lumot. Ushbu mahsulot yuqori sifatli materiallardan tayyorlangan bo'lib, kundalik foydalanish uchun qulay va zamonaviy dizaynga ega.`}
              </p>
              <ul className="mt-6 space-y-3 text-gray-400">
                <li className="flex gap-2">
                  <span className="text-violet-500">
                    ✓
                  </span>
                  Yuqori sifatli mahsulot
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-500">
                    ✓
                  </span>
                  Zamonaviy dizayn
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-500">
                    ✓
                  </span>
                  Uzoq muddat foydalanish
                </li>
                <li className="flex gap-2">
                  <span className="text-violet-500">
                    ✓
                  </span>
                  TechStore kafolati
                </li>
              </ul>
            </div>
            <div className="border border-gray-800 rounded-xl p-5">
              <h2 className="font-semibold text-lg mb-5">
                Texnik xususiyatlari
              </h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-500">
                    Kategoriya
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-500">
                    Brend
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-500">
                    Ulanish turi
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-500">
                    Sensor
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-800 pb-3">
                  <span className="text-gray-500">
                    Batareya
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Og'irligi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;