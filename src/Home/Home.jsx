import Orqafon from "../assets/Orqafon.png"
import ImigKlyava from "../assets/ImigKlyava.png";
import ImigNaushnik from "../assets/ImigNaushnik.webp"
import ImigMishka from "../assets/ImigMishka.jpg"
import ImigManitor from "../assets/ImigMonitor.png"
import samsung from "../assets/samsung.png"
import ImigKorpus from "../assets/Korpus.jpg"
import ImigAksesuarlar from "../assets/ImigAksesuarlar.png"
import ImigNoutbuklar from "../assets/ImigNoutbuklar.png"
import ImigKomponentlar from "../assets/ImigKomponentlar.png"
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoFlash } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { GrCreditCard } from "react-icons/gr";
import { LuHeadset } from "react-icons/lu";
import { FaComputer, FaComputerMouse, FaTruckFast } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoMdLaptop } from "react-icons/io";
import { FiMonitor } from "react-icons/fi";
import { FaHeadphones, FaKeyboard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFavorites } from "../Contexr/FavoritesContext";
 
function Home() {
    const { addFavorite } = useFavorites();
 
    const [kategoriyalar, setKategoriyalar] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/kategoriyalar")
            .then((res) => res.json())
            .then((data) => {
                setKategoriyalar(data);
            })
            .catch((err) => console.log(err));
    }, []);
 
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
 
    // Yurak bosilganda: faqat izbriniga qo'shiladi, sahifa o'zgarmaydi
    const handleAddFavorite = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
        addFavorite(item);
    };
 
    // Savat bosilganda: faqat savatga qo'shiladi, sahifa o'zgarmaydi
    const handleAddToCart = (e, item) => {
        e.preventDefault();
        e.stopPropagation();
 
        const korzinka = JSON.parse(localStorage.getItem("korzinka")) || [];
        const newKorzinka = [...korzinka, item];
        localStorage.setItem("korzinka", JSON.stringify(newKorzinka));
    };
 
    return (
        <div>
            {/* Glavniy ekran */}
 
            <div className="relative w-full h-[290px] overflow-hidden md:h-[600px]">
                <img
                    src={Orqafon}
                    alt="Hero"
                    className="w-full h-full object-cover "
                />
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-16">
                    <h1 className="text-3xl font-bold text-white md:text-6xl">
                        Eng yaxshi <br /> <span className="text-violet-500">kompyuterlar</span> va <br /> <span className="text-violet-500">aksessuarlar</span>  do&apos;koni
                    </h1>
 
                    <p className="text-gray-300 text-sm mt-3 max-w-xl md:text-xl md:mt-5">
                        Sifatli mahsulotlar, qulay narxlar va tez yetkazib berish <br /> bilan sizning ehtiyojlaringizni qondiramiz.</p>
 
                    <button className="mt-4 w-40 h-10 rounded-xl text-white bg-violet-600 md:mt-8 md:h-14 md:w-52">
                        Hoziroq xarid qiling
                    </button>
                </div>
            </div>
            <div className="hidden md:flex md:justify-between mt-16 gap-6 absolute top-[500px] left-0 right-0 mx-auto w-[90%] rounded-xl shadow-lg">
                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <LuShieldCheck className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            100% original mahsulotlar
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Sifat kafolati
                        </p>
                    </div>
                </div>
 
                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <FaTruckFast className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            Tez yetkazib berish
                        </h3>
                        <p className="text-gray-400 text-sm">
                            1–3 kun ichida
                        </p>
                    </div>
                </div>
 
                <div className="flex items-center gap-4 p-5 border-r-2 border-indigo-500">
                    <GrCreditCard className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            Xavfsiz to&apos;lov
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Payme, Click, UzCard
                        </p>
                    </div>
                </div>
 
                <div className="flex items-center gap-4 p-5">
                    <LuHeadset className="text-4xl text-violet-500" />
                    <div>
                        <h3 className="text-white font-semibold text-lg">
                            24/7 qo&apos;llab-quvvatlash
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Har doim siz bilan
                        </p>
                    </div>
                </div>
 
            </div>
 
            {/* Kategoriyalar */}
            <div className="block text-4xl flex text-violet-700 md:hidden items-center justify-between gap-3 grid-cols-3">
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <IoMdLaptop />
                    <p className="text-sm text-white">Noutbuk</p>
                </div>
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <FaComputer />
                    <p className="text-sm text-white">Kampyuter</p>
                </div>
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <FiMonitor />
                    <p className="text-sm text-white">Ekran</p>
                </div>
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <FaKeyboard />
                    <p className="text-sm text-white">klaviatura</p>
                </div>
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <FaComputerMouse />
                    <p className="text-sm text-white">Sichqoncha</p>
                </div>
                <div className=" p-2 bg-gray-500/15 rounded-xl flex flex-col items-center w-25 h-20">
                    <FaHeadphones />
                    <p className="text-sm text-white">Quloqchin</p>
                </div>
            </div>
            <div className="border-2 border-violet-500 rounded-xl hidden md:block">
                <h2 className="text-white font-bold text-xl p-2">Kategoriyalar</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 ">
                    {kategoriyalar.map((item) => (
                        <div
                            key={item.id}
                            className="bg-gray-800 rounded-xl flex flex-col items-center justify-center p-2 text-white overflow-hidden shadow-lg hover:shadow-indigo-600/30 hover:-translate-y-2 duration-300"
                        >
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            {/* Mashhur mahsulotlar */}
 
            <div className="mt-8 md:16">
                <h2 className="text-3xl font-bold text-white mb-8">Mashhur mahsulotlar</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {mahsulotlar.filter((item) => item.id <= 6).map((item) => (
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
                                    onClick={(e) => handleAddFavorite(e, item)}
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
                                        {item.price}
                                    </span>
                                    <button
                                        onClick={(e) => handleAddToCart(e, item)}
                                        className="w-12 h-12 rounded-xl bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center text-2xl text-white duration-300"
                                    >
                                        <HiOutlineShoppingCart />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
 
            {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 rounded-xl shadow-lg">
                <img className="rounded-2xl hidden md:block" src={ImigAksesuarlar} alt="Description" />
                <img className="rounded-2xl hidden md:block" src={ImigNoutbuklar} alt="Description" />
                <img className="rounded-2xl hidden md:block" src={ImigKomponentlar} alt="Description" />
            </div>
        </div>
    )
}
 
export default Home
 