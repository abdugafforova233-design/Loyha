import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  HiOutlineShoppingCart,
  HiOutlineHeart,
  HiOutlineTruck,
} from "react-icons/hi2";
import { TbShieldCheck } from "react-icons/tb";
import { useFavorites } from "../../../Context/FavoritesContext";
import { useCart } from "../../../Context/CartContext";

const TABLAR = [
  { key: "tavsif", label: "Tavsif" },
  { key: "xususiyatlar", label: "Xususiyatlar" },
  { key: "sharhlar", label: "Sharhlar" },
  { key: "yetkazib_berish", label: "Yetkazib berish" },
  { key: "tolov", label: "To'lov usullari" },
];

function ProductInformation() {
  const { id } = useParams();

  const [mahsulot, setMahsulot] = useState(null);
  const [barchaMahsulotlar, setBarchaMahsulotlar] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("tavsif");
  const [qoshildi, setQoshildi] = useState(false);

  const { addFavorite, removeFavorite, favorites } = useFavorites();
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:3000/mahsulotlar/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMahsulot(data);
        setQuantity(1);
        setActiveTab("tavsif");
        setQoshildi(false);
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

  const favorit = favorites.some((f) => String(f.id) === String(mahsulot.id));

  const handleToggleFavorite = () => {
    if (favorit) {
      removeFavorite(mahsulot.id);
    } else {
      addFavorite(mahsulot);
    }
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(mahsulot);
    }
    setQoshildi(true);
    setTimeout(() => setQoshildi(false), 1500);
  };

  const xususiyatlar = [
    { label: "Kategoriya", qiymat: mahsulot.category },
    { label: "Brend", qiymat: mahsulot.brand },
    { label: "Ulanish turi", qiymat: mahsulot.connection },
    { label: "Sensor", qiymat: mahsulot.sensor },
    { label: "Batareya", qiymat: mahsulot.battery },
    { label: "Og'irligi", qiymat: mahsulot.weight },
  ];

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
            {mahsulot.rating && (
              <div className="flex items-center gap-3 mb-5">
                <div className="text-yellow-400 text-lg">
                  {"★".repeat(Math.round(mahsulot.rating))}
                  <span className="text-gray-700">
                    {"★".repeat(5 - Math.round(mahsulot.rating))}
                  </span>
                </div>
                <span className="text-gray-400 text-sm">
                  {mahsulot.rating} ({mahsulot.reviews || 0} ta baho)
                </span>
              </div>
            )}
            <div className="flex items-center gap-5 mb-6">
              <span className="text-white text-2xl font-bold">
                {Number(mahsulot.price).toLocaleString()} so&apos;m
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
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-violet-600 hover:bg-violet-700 py-4 rounded-xl flex items-center justify-center gap-3 font-semibold duration-300"
              >
                <HiOutlineShoppingCart className="text-2xl" />
                {qoshildi ? "Savatchaga qo'shildi ✓" : "Savatchaga qo'shish"}
              </button>
              <button
                onClick={handleToggleFavorite}
                className={`w-20 border rounded-xl flex items-center justify-center duration-300 ${favorit
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-violet-500 text-violet-500 hover:bg-violet-500 hover:text-white"
                  }`}
              >
                <HiOutlineHeart className={`text-2xl ${favorit ? "fill-current" : ""}`} />
              </button>
            </div>
            <Link to={"/cart"}
              onClick={() => {
                setQuantity(1);
                handleAddToCart();
              }}
              className="w-full border border-violet-500 text-violet-400 hover:bg-violet-600 hover:text-white py-3 rounded-xl mt-3 duration-300"
            >
              ⚡ Tez xarid qilish
            </Link>
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border border-gray-800 rounded-xl overflow-hidden">
          <div className="flex gap-8 px-5 border-b border-gray-800 overflow-x-auto">
            {TABLAR.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`pb-3 pt-4 border-b-2 whitespace-nowrap transition-all duration-300 ${activeTab === tab.key
                  ? "border-violet-500 text-violet-500"
                  : "border-transparent text-white hover:border-violet-500/50 hover:text-violet-400"
                  }`}
              >
                {tab.key === "sharhlar"
                  ? `Sharhlar (${mahsulot.reviews || 0})`
                  : tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">

            {activeTab === "tavsif" && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <p className="text-gray-400 leading-7">
                    {mahsulot.description ||
                      `${mahsulot.name} haqida batafsil ma'lumot. Ushbu mahsulot yuqori sifatli materiallardan tayyorlangan bo'lib, kundalik foydalanish uchun qulay va zamonaviy dizaynga ega.`}
                  </p>
                  <ul className="mt-6 space-y-3 text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-violet-500">✓</span>
                      Yuqori sifatli mahsulot
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">✓</span>
                      Zamonaviy dizayn
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">✓</span>
                      Uzoq muddat foydalanish
                    </li>
                    <li className="flex gap-2">
                      <span className="text-violet-500">✓</span>
                      TechStore kafolati
                    </li>
                  </ul>
                </div>
                <div className="border border-gray-800 rounded-xl p-5">
                  <h2 className="font-semibold text-lg mb-5">
                    Texnik xususiyatlari
                  </h2>
                  <div className="space-y-3 text-sm">
                    {xususiyatlar.map((x, i) => (
                      <div
                        key={x.label}
                        className={`flex justify-between ${i !== xususiyatlar.length - 1
                          ? "border-b border-gray-800 pb-3"
                          : ""
                          }`}
                      >
                        <span className="text-gray-500">{x.label}</span>
                        <span className="text-white">
                          {x.qiymat || "Noma'lum"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "xususiyatlar" && (
              <div className="border border-gray-800 rounded-xl p-5 max-w-xl">
                <div className="space-y-3 text-sm">
                  {xususiyatlar.map((x, i) => (
                    <div
                      key={x.label}
                      className={`flex justify-between ${i !== xususiyatlar.length - 1
                        ? "border-b border-gray-800 pb-3"
                        : ""
                        }`}
                    >
                      <span className="text-gray-500">{x.label}</span>
                      <span className="text-white">
                        {x.qiymat || "Noma'lum"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "sharhlar" && (
              <div className="text-gray-400">
                {mahsulot.reviews > 0 ? (
                  <p>
                    Bu mahsulot uchun {mahsulot.reviews} ta sharh mavjud,
                    o'rtacha baho {mahsulot.rating || 0} / 5.
                  </p>
                ) : (
                  <p>Bu mahsulot uchun hozircha sharhlar yo'q.</p>
                )}
              </div>
            )}

            {activeTab === "yetkazib_berish" && (
              <div className="text-gray-400 space-y-3">
                <p>Buyurtma 1–2 kun ichida O'zbekiston bo'ylab yetkazib beriladi.</p>
                <p>Toshkent shahri bo'ylab yetkazib berish bepul.</p>
                <p>Boshqa hududlar uchun yetkazib berish narxi buyurtma rasmiylashtirishda hisoblanadi.</p>
              </div>
            )}

            {activeTab === "tolov" && (
              <div className="text-gray-400 space-y-3">
                <p>To'lov quyidagi usullar orqali amalga oshiriladi: Payme, Click, UzCard, Humo.</p>
                <p>Naqd pul orqali yetkazib berilganda ham to'lash mumkin.</p>
              </div>
            )}

          </div>
        </div>

        {oxshashMahsulotlar.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">O'xshash mahsulotlar</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {oxshashMahsulotlar.map((item) => (
                <Link
                  key={item.id}
                  to={`/ProductInformation/${item.id}`}
                  className="bg-[#0b0f1a] border border-gray-800 rounded-2xl overflow-hidden hover:border-violet-500/60 hover:-translate-y-1 transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-36 md:h-44 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-white line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-violet-400 font-bold mt-1">
                      {Number(item.price).toLocaleString()} so&apos;m
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ProductInformation;