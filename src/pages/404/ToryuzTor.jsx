import { FaHouseChimney } from "react-icons/fa6";
import error from "../../assets/404.png";
import { Link } from "react-router-dom";

function ToryuzTor() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-black">
            <img
                src={error}
                alt="404"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-16 flex justify-center">
                <Link
                    to="/"
                    className=" flex items-center gap-3 px-7 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-lg font-semibold shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] transition-all duration-300"
                >
                    <FaHouseChimney className="text-xl" />
                    Bosh sahifaga qaytish
                </Link>
            </div>

        </div>
    );
}

export default ToryuzTor;