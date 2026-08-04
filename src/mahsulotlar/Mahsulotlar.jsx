import { useState } from "react";
import { TbCategory } from "react-icons/tb";

function Mahsulotlar() {
    const [min, setMin] = useState(500000);
    const [max, setMax] = useState(12000000);
    return (
        <div>
            <div className="flex flex-col gap-4 p-4 m-3 w-3xs border border-violet-400 rounded-2xl">
                {/* Kategoriyalar */}
                <div className="flex flex-col gap-2 text-white border-b-1 border-violet-400 py-4">
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
                {/* Narx oralig'i */}
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
                {/* Brendlar */}
                <div className="flex flex-col gap-2 text-white border-b-1 border-violet-400 py-4">
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
        </div >
    )
}

export default Mahsulotlar