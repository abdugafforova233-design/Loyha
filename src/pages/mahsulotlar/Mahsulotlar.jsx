import { useEffect, useState } from "react";
import { HiOutlineHeart, HiOutlineShoppingCart, HiOutlineFunnel, HiOutlineXMark, HiChevronDown } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";
import Pagination from "./Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { useFavorites } from "../../Contexr/FavoritesContext";
import { useCart } from "../../Contexr/CartContext";

const SARALASH_OPTIONS = [
    { value: "yangi", label: "Yangilari" },
    { value: "arzon", label: "Arzon narx" },
    { value: "qimmat", label: "Qimmat narx" },
];

function Mahsulotlar() {
    const [searchParams] = useSearchParams();
    const qidiruv = searchParams.get("name") || "";

    const [min, setMin] = useState(500000);
    const [max, setMax] = useState(12000000);

    const [mahsulotlar, setMahsulotlar] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/mahsulotlar")
            .then((res) => res.json())
            .then((data) => {
                setMahsulotlar(data);
            })
            .catch((err) => console.log(err));
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [sortOption, setSortOption] = useState("yangi");
    const [sortOpen, setSortOpen] = useState(false);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    const categoryCounts = mahsulotlar.reduce((acc, item) => {
        if (!item.category) return acc;
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
    }, {});
    const categories = Object.keys(categoryCounts).sort();

    const brandCounts = mahsulotlar.reduce((acc, item) => {
        if (!item.brand) return acc;
        acc[item.brand] = (acc[item.brand] || 0) + 1;
        return acc;
    }, {});
    const brands = Object.keys(brandCounts).sort();

    const toggleBrand = (brand) => {
        setSelectedBrands((prev) =>
            prev.includes(brand)
                ? prev.filter((b) => b !== brand)
                : [...prev, brand]
        );
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredProducts = mahsulotlar.filter((item) => {
        const kategoriyaMos = !selectedCategory || item.category === selectedCategory;
        const brendMos = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        const narxMos = Number(item.price) >= min && Number(item.price) <= max;

        const qidiruvMos = !qidiruv || item.name?.toLowerCase().includes(qidiruv.toLowerCase());
        return kategoriyaMos && brendMos && narxMos && qidiruvMos;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortOption) {
            case "arzon":
                return Number(a.price) - Number(b.price);
            case "qimmat":
                return Number(b.price) - Number(a.price);
            case "yangi":
            default:
                return Number(b.id) - Number(a.id);
        }
    });

    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

    const currentProducts = sortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory, selectedBrands, min, max, sortOption, qidiruv]);

    const { addFavorite, favorites, removeFavorite } = useFavorites();
    const { addToCart } = useCart();

    const isFavorite = (id) => favorites.some((f) => String(f.id) === String(id));

    const handleToggleFavorite = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        if (isFavorite(item.id)) {
            removeFavorite(item.id);
        } else {
            addFavorite(item);
        }
    };

    const activeFiltersCount =
        (selectedCategory ? 1 : 0) +
        selectedBrands.length +
        (min !== 500000 || max !== 12000000 ? 1 : 0);

    const currentSortLabel =
        SARALASH_OPTIONS.find((o) => o.value === sortOption)?.label || "Yangilari";

    // Filtr paneli (desktop sidebar va mobil drawer uchun umumiy)
    const FiltrPaneli = () => (
        <>
            {categories.length > 0 && (
                <div className="flex flex-col gap-2 text-white border-b border-violet-400 py-4">
                    <h2 className="flex items-center gap-2 mb-2 font-semibold">
                        <TbCategory className="text-violet-500 text-xl" />
                        Kategoriyalar
                    </h2>
                    <label className="flex items-center justify-between gap-2 cursor-pointer text-sm py-1">
                        <span className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === null}
                                onChange={() => setSelectedCategory(null)}
                                className="accent-violet-600"
                            />
                            Barchasi
                        </span>
                        <span className="text-gray-500">{mahsulotlar.length}</span>
                    </label>
                    {categories.map((kategoriya) => (
                        <label key={kategoriya} className="flex items-center justify-between gap-2 cursor-pointer text-sm py-1">
                            <span className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="category"
                                    checked={selectedCategory === kategoriya}
                                    onChange={() => setSelectedCategory(kategoriya)}
                                    className="accent-violet-600"
                                />
                                {kategoriya}
                            </span>
                            <span className="text-gray-500">{categoryCounts[kategoriya]}</span>
                        </label>
                    ))}
                </div>
            )}

            <div className="flex flex-col gap-2 text-white border-b border-violet-400 py-4">
                <h2 className="flex gap-2 text-white my-4">
                    <TbCategory className="text-violet-500 text-2xl" />
                    Narx oralig&apos;i
                </h2>
                <input
                    type="range"
                    min="500000"
                    max="12000000"
                    value={min}
                    onChange={(e) => setMin(Math.min(Number(e.target.value), max))}
                    className="w-full"
                />
                <div className="flex justify-between mt-4">
                    <span className="text-white border border-violet-400 rounded-lg p-2">{min.toLocaleString()}</span>
                    <span className="text-white border border-violet-400 rounded-lg p-2">{max.toLocaleString()}</span>
                </div>
            </div>

            {brands.length > 0 && (
                <div className="flex flex-col gap-2 text-white py-4">
                    <h2 className="flex items-center gap-2 mb-2 font-semibold">
                        <TbCategory className="text-violet-500 text-xl" />
                        Brendlar
                    </h2>
                    {brands.map((brand) => (
                        <label key={brand} className="flex items-center justify-between gap-2 cursor-pointer text-sm py-1">
                            <span className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={selectedBrands.includes(brand)}
                                    onChange={() => toggleBrand(brand)}
                                    className="accent-violet-600"
                                />
                                {brand}
                            </span>
                            <span className="text-gray-500">{brandCounts[brand]}</span>
                        </label>
                    ))}
                </div>
            )}

            {activeFiltersCount > 0 && (
                <button
                    onClick={() => {
                        setSelectedCategory(null);
                        setSelectedBrands([]);
                        setMin(500000);
                        setMax(12000000);
                    }}
                    className="mt-2 w-full h-10 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition text-sm"
                >
                    Filtrlarni tozalash
                </button>
            )}
        </>
    );

    return (
        <div className="px-4 md:px-8">

            {/* Sahifa sarlavhasi + saralash */}
            <div className="flex items-center justify-between mt-5 flex-wrap gap-3">
                <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white">Mahsulotlar</h1>
                    <p className="text-gray-400 text-sm mt-1">
                        {qidiruv
                            ? `"${qidiruv}" bo'yicha ${sortedProducts.length} ta natija`
                            : `${sortedProducts.length} ta mahsulot`}
                    </p>
                </div>

                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setMobileFilterOpen(true)}
                        className="md:hidden relative flex items-center gap-2 h-11 px-4 rounded-xl border border-violet-500 text-violet-400"
                    >
                        <HiOutlineFunnel className="text-lg" />
                        Filter
                        {activeFiltersCount > 0 && (
                            <span className="w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center">
                                {activeFiltersCount}
                            </span>
                        )}
                    </button>

                    <div className="relative">
                        <button
                            onClick={() => setSortOpen((o) => !o)}
                            className="flex items-center gap-2 h-11 px-4 rounded-xl border border-[#2B3045] bg-[#151A2B] text-white text-sm"
                        >
                            Saralash: <span className="text-violet-400">{currentSortLabel}</span>
                            <HiChevronDown className={`transition-transform ${sortOpen ? "rotate-180" : ""}`} />
                        </button>

                        {sortOpen && (
                            <div className="absolute right-0 mt-2 w-44 bg-[#151A2B] border border-[#2B3045] rounded-xl overflow-hidden z-20 shadow-lg">
                                {SARALASH_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => {
                                            setSortOption(opt.value);
                                            setSortOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 text-sm hover:bg-violet-600/20 transition ${sortOption === opt.value ? "text-violet-400" : "text-white"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {categories.length > 0 && (
                <div className="flex md:hidden items-center gap-3 mt-5 overflow-x-auto pb-2 [scrollbar-width:none]">
                    <button
                        onClick={() => setSelectedCategory(null)}
                        className={`shrink-0 flex items-center gap-2 h-10 px-4 rounded-xl text-sm font-medium transition ${!selectedCategory
                            ? "bg-violet-600 text-white"
                            : "border border-[#2B3045] text-gray-300 hover:border-violet-500"
                            }`}
                    >
                        <TbCategory className="text-lg" />
                        Barchasi
                    </button>
                    {categories.map((kategoriya) => (
                        <button
                            key={kategoriya}
                            onClick={() => setSelectedCategory(kategoriya)}
                            className={`shrink-0 h-10 px-4 rounded-xl text-sm font-medium transition ${selectedCategory === kategoriya
                                ? "bg-violet-600 text-white"
                                : "border border-[#2B3045] text-gray-300 hover:border-violet-500"
                                }`}
                        >
                            {kategoriya}
                        </button>
                    ))}
                </div>
            )}

            <div className="flex mt-5 gap-6">

                <div className="hidden md:block w-64 shrink-0 p-4 border border-violet-400 rounded-2xl h-fit">
                    <FiltrPaneli />
                </div>

                {/* Mobil filtr drawer */}
                {mobileFilterOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div
                            onClick={() => setMobileFilterOpen(false)}
                            className="absolute inset-0 bg-black/60"
                        />
                        <div className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[#0F1424] border-l border-[#2B3045] overflow-y-auto p-4">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg font-bold text-white">Filtrlar</h2>
                                <button
                                    onClick={() => setMobileFilterOpen(false)}
                                    className="text-gray-400 hover:text-white text-2xl"
                                >
                                    <HiOutlineXMark />
                                </button>
                            </div>
                            <FiltrPaneli />
                            <button
                                onClick={() => setMobileFilterOpen(false)}
                                className="w-full h-12 mt-4 rounded-xl bg-violet-600 text-white font-semibold"
                            >
                                Natijalarni ko'rish ({filteredProducts.length})
                            </button>
                        </div>
                    </div>
                )}

                {/* Mahsulotlar */}
                <div className="flex-1">

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">

                        {currentProducts.length > 0 ? (

                            currentProducts.map((item) => {
                                const favorit = isFavorite(item.id);

                                return (
                                    <Link
                                        key={item.id}
                                        to={`/ProductInformation/${item.id}`}
                                        className="bg-[#151A2D] border border-[#232a3d] rounded-2xl overflow-hidden hover:border-violet-500/60 hover:-translate-y-1 transition duration-300"
                                    >
                                        <div className="relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-40 md:h-56 object-cover"
                                            />

                                            <button
                                                onClick={(e) => handleToggleFavorite(e, item)}
                                                className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0F172A]/80 flex items-center justify-center text-lg duration-300 ${favorit ? "text-red-500" : "text-white hover:text-red-500"
                                                    }`}
                                            >
                                                <HiOutlineHeart className={favorit ? "fill-current" : ""} />
                                            </button>

                                        </div>

                                        <div className="p-3 md:p-4">
                                            <h3 className="text-sm md:text-lg font-semibold text-white line-clamp-1">
                                                {item.name}
                                            </h3>

                                            <p className="text-xs md:text-sm text-gray-400 mt-1">
                                                {item.category}
                                            </p>

                                            <div className="flex items-center justify-between mt-3">
                                                <span className="text-base md:text-xl font-bold text-white">
                                                    {Number(item.price).toLocaleString()} so'm
                                                </span>

                                                <button
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        e.stopPropagation();
                                                        addToCart(item);
                                                    }}
                                                    className="w-9 h-9 md:w-11 md:h-11 rounded-xl border border-violet-500 text-violet-400 hover:bg-violet-600 hover:text-white flex items-center justify-center text-lg md:text-xl duration-300"
                                                >
                                                    <HiOutlineShoppingCart />
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })

                        ) : (

                            <div className="col-span-full flex justify-center items-center py-20">
                                <p className="text-gray-400 text-lg">
                                    {qidiruv
                                        ? `"${qidiruv}" bo'yicha mahsulot topilmadi.`
                                        : "Bu kategoriyada mahsulot topilmadi."}
                                </p>
                            </div>

                        )}

                    </div>

                    {totalPages > 1 && (
                        <div className="mt-10 flex justify-center">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={setCurrentPage}
                            />
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Mahsulotlar;