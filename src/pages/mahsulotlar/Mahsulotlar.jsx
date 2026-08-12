import { useEffect, useState } from "react";
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";


function Mahsulotlar() {
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

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 8;

    const totalPages = Math.ceil(mahsulotlar.length / itemsPerPage);

    const currentProducts = mahsulotlar.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex">
            {/* Filter */}
            <div className="flex flex-col h-220 gap-4 p-4 m-3 w-3xs border border-violet-400 rounded-2xl hidden md:block">

                <div className="flex flex-col gap-2 text-white border-b-1 border-violet-400 py-4 ">
                    <h2 className="">
                        <TbCategory className="text-violet-500 text-2xl" />
                        Kategoriyalar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Noutbuklar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Kompyuterlar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Monitorlar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Klaviaturalar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Sichqonlar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Quloqchinlar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Komponentlar
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Aksessuarlar
                    </h2>
                </div>

                <div className="flex flex-col gap-2 text-white border-b-1 border-violet-400 py-4">
                    <h2 className="flex gap-2 text-white my-4">
                        <TbCategory className="text-violet-500 text-2xl" />
                        Narx oralig&apos;i
                    </h2>
                    <input
                        type="range"
                        min="500000"
                        max="12000000"
                        value={min}
                        onChange={(e) => setMin(Number(e.target.value))}
                        className="w-full"
                    />

                    <div className="flex justify-between mt-4">
                        <span className="text-white border border-violet-400 rounded-lg p-2">{min.toLocaleString()}</span>
                        <span className="text-white border border-violet-400 rounded-lg p-2">{max.toLocaleString()}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-white py-4">
                    <h2 className="flex gap-2 text-white my-4">
                        <TbCategory className="text-violet-500 text-2xl" />
                        Brendlar
                    </h2>
                    <h2 >
                        <input type="checkbox" name="category" />
                        ASUS
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Lenovo
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Acer
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        HP
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        MSI
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Dell
                    </h2>
                    <h2>
                        <input type="checkbox" name="category" />
                        Apple
                    </h2>
                </div>
            </div>
            {/* Mahsulotlar */}

            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {currentProducts.map((item) => (
                        <Link
                            key={item.id}
                            to={`/ProductInformation/${item.id}`}
                            className="bg-[#151A2D] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-2 duration-300"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover"
                                />

                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.stopPropagation();

                                        const favorites =
                                            JSON.parse(localStorage.getItem("favorites")) || [];

                                        const newFavorites = [...favorites, item];

                                        localStorage.setItem(
                                            "favorites",
                                            JSON.stringify(newFavorites)
                                        );

                                    }}
                                    className="absolute top-4 right-4 bg-[#0F172A]/80 p-2 rounded-full text-xl text-white hover:text-red-500 duration-300"
                                >
                                    <HiOutlineHeart />
                                </button>
                            </div>

                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-white mt-2">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-gray-400">
                                    {item.category}
                                </p>

                                <div className="flex items-center justify-between mt-5">

                                    <span className="text-2xl font-bold text-indigo-500">
                                        {Number(item.price).toLocaleString()} so'm
                                    </span>

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            const korzinka = JSON.parse(localStorage.getItem("korzinka")) || []
                                            const newKorzinka = [...korzinka, item]
                                            localStorage.setItem(
                                                "korzinka",
                                                JSON.stringify(newKorzinka)
                                            )
                                        }}
                                        className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-2xl text-white duration-300"
                                    >
                                        <HiOutlineShoppingCart />
                                    </button>

                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

                <div className="mt-10 flex justify-center">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </div>

        </div >
    )
}

export default Mahsulotlar