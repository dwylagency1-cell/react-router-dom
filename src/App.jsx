import { Route, Routes } from "react-router-dom"
import About from "./pages/About.jsx"
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from "./component/Navbar.jsx"
function App() {
  return <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  </div>
}

export default App
