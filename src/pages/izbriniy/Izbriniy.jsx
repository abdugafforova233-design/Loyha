import { useEffect, useState } from "react";
import { HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi2";

function Izbriniy() {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        const data =
            JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(data);

    }, []);

    // Mahsulotni izbrinniydan o'chirish
    const removeFavorite = (id) => {

        const newFavorites = favorites.filter(
            (item) => String(item.id) !== String(id)
        );

        setFavorites(newFavorites);

        localStorage.setItem(
            "favorites",
            JSON.stringify(newFavorites)
        );
    };



    return (
        <div className="min-h-screen bg-[#05070d] p-5 text-white">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-3xl font-bold mb-6">
                    Izbrinniy ❤️
                </h1>


                {favorites.length === 0 ? (

                    <div className="text-gray-400 text-lg">
                        Izbrinniyda hozircha mahsulot yo'q.
                    </div>

                ) : (

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {favorites.map((item) => (

                            <div
                                key={item.id}
                                className="bg-[#151A2D] rounded-2xl overflow-hidden border border-gray-800"
                            >

                                {/* RASM */}
                                <div className="relative">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-52 object-contain"
                                    />

                                    {/* O'CHIRISH */}
                                    <button
                                        onClick={() =>
                                            removeFavorite(item.id)
                                        }
                                        className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center hover:bg-red-500 duration-300"
                                    >
                                        <HiOutlineTrash className="text-xl" />
                                    </button>

                                </div>


                                {/* MA'LUMOT */}
                                <div className="p-4">

                                    <h2 className="text-lg font-semibold">
                                        {item.name}
                                    </h2>

                                    <p className="text-sm text-gray-400 mt-1">
                                        {item.category}
                                    </p>

                                    <div className="flex items-center justify-between mt-4">

                                        <p className="text-violet-500 font-bold">
                                            {Number(item.price).toLocaleString()} so'm
                                        </p>

                                        <button className="w-10 h-10 border border-violet-500 rounded-lg flex items-center justify-center text-violet-500 hover:bg-violet-600 hover:text-white duration-300">
                                            <HiOutlineShoppingCart />
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default Izbriniy;