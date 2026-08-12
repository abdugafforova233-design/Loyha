import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Mahsulotlar from "./pages/mahsulotlar/Mahsulotlar"
import Navbar from "./components/Navbar"
import Aloqa from "./pages/aloqa/Aloqa"
import Komponiya from "./pages/komponiya/Komponiya"
import ProductInformation from "./pages/mahsulotlar/productInformation/ProductInformation"
import Cart from "./pages/cart/Cart"
import Footer from "./components/Footer"
import ToryuzTor from "./pages/404/ToryuzTor"
import Registration from "./pages/registration/Registration"
import Izbriniy from "./pages/izbriniy/Izbriniy"


function App() {
  return (
    <div className="bg-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/Aloqa" element={<Aloqa />} />
        <Route path="/Biz_haqimizda" element={<Komponiya />} />
        <Route path="/Izbriniy" element={<Izbriniy />} />
        <Route path="/ProductInformation/:id" element={<ProductInformation />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="*" element={<ToryuzTor />} />

      </Routes>
      <Footer />
    </div>
  )
}

export default App
