import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"


function App() {

  return (
    <div className="bg-gray-900">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
