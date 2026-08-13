import { HiOutlineShoppingCart, HiOutlineTrash } from "react-icons/hi2";
import { useFavorites } from "../../Contexr/FavoritesContext";


function Izbriniy() {

    const { favorites, removeFavorite } = useFavorites();

    return (
        <div className="min-h-screen p-5 text-white">

            <div className="max-w-7xl mx-auto">

                {favorites.length === 0 ? (

                    <div className="text-gray-400 text-lg">
                        Izbrinniyda hozircha mahsulot yo'q.
                    </div>

                ) : (

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                        {favorites.map((item) => (

                            <div
                                key={item.id}
                                className="bg-[#151A2D] rounded-2xl overflow-hidden border border-gray-800"
                            >

                                <div className="relative">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-52 object-contain"
                                    />

                                    {/* O'chrish knopkasi */}
                                    <button
                                        onClick={() =>
                                            removeFavorite(item.id)
                                        }
                                        className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-violet-600 flex items-center justify-center hover:bg-red-500 duration-300"
                                    >
                                        <HiOutlineTrash className="text-xl" />
                                    </button>

                                </div>

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

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>
    );
}

export default Izbriniy;