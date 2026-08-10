import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Mahsulotlar from "./pages/mahsulotlar/Mahsulotlar"
import Navbar from "./components/Navbar"
import Aloqa from "./pages/aloqa/Aloqa"
import Komponiya from "./pages/komponiya/Komponiya"
import Izbriniy from "./pages/izbriniy/Izbriniy"
import ProductInformation from "./pages/mahsulotlar/productInformation/ProductInformation"
import Cart from "./pages/cart/Cart"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/biz_haqimizda" element={<Komponiya />} />
        <Route path="/izbriniy" element={<Izbriniy />} />
        <Route path="/ProductInformation/:id" element={<ProductInformation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
