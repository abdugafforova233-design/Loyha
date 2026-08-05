import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Mahsulotlar from "./pages/mahsulotlar/Mahsulotlar"
import Navbar from "./pages/navbar/Navbar"
import Aloqa from "./pages/aloqa/Aloqa"


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/aloqa" element={<Aloqa />} />

      </Routes>
    </div>
  )
}

export default App
