import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {
    FaMapMarkerAlt,
    FaYoutube,
    FaFacebookF,
} from "react-icons/fa";
import { SlEarphonesAlt } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { FiInstagram } from "react-icons/fi";

function Aloqa() {
    return (
        <div>
            <h1 className="text-2xl text-white ">Biz bilan <span className="text-violet-600"> bog&apos;laning </span></h1>
            <p className="text-gray-500">Savollaringiz bormi yoki yordam kerakmi? Biz sizga <br /> har doim yordam berishga tayyormiz.</p>
            {/* bog'lanish */}
            <div className="text-white flex gap-5 text-2xl">
                <PiTelegramLogo />
                <FiInstagram />
                <FaFacebookF />
                <FaYoutube />
            </div>
            <div className="lg:grid-cols-4">
                <div className="border-violet-500 w-60 rounded-lg bg-gray-800 p-2 flex items-center gap-4">
                    <BsFillTelephoneFill className="text-white text-2xl border-2 bg-violet-600" />
                    <div>
                        <h2 className="text-violet-500">Telefon</h2>
                        <h2 className="text-white">+998 90 123 45 67</h2>
                        <p className="text-gray-500">Har kuni 09:00-21:00</p>
                    </div>
                </div>
                <div className="border-violet-500 w-60 rounded-lg bg-gray-800 p-2 flex items-center gap-4">
                    <FaMapMarkerAlt className="text-white text-2xl border-2 bg-violet-600" />
                    <div>
                        <h2 className="text-violet-500">Manzil</h2>
                        <h2 className="text-white">Toshkent sh., Chilonzor tumani, 19-uy</h2>
                        <p className="text-gray-500">O'zbekiston</p>
                    </div>
                </div>
                <div className="border-violet-500 w-60 rounded-lg bg-gray-800 p-2 flex items-center gap-4">
                    <MdOutlineEmail className="text-white text-2xl border-2 bg-violet-600" />
                    <div>
                        <h2 className="text-violet-500">Email</h2>
                        <h2 className="text-white">info@techstore.uz</h2>
                        <p className="text-gray-500">24/7 javob beramiz</p>
                    </div>
                </div>
                <div className="border-violet-500 w-60 rounded-lg bg-gray-800 p-2 flex items-center gap-4">
                    <SlEarphonesAlt className="text-white text-2xl border-2 bg-violet-600" />
                    <div>
                        <h2 className="text-violet-500">Qo&apos;llab-quvvatlash</h2>
                        <h2 className="text-white">+998 90 123 45 67</h2>
                        <p className="text-gray-500">Telegram orqali</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aloqa