import { Route, Routes } from "react-router-dom"
import Home from "./home/Home"
import Mahsulotlar from "./mahsulotlar/Mahsulotlar"
import Navbar from "./navbar/Navbar"


function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
      </Routes>
    </div>
  )
}

export default App
