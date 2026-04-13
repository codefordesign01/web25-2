import { Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Login from './pages/Login'
import AdminLayout from "./components/AdminLayout"
import Admin from "./pages/Admin"
import Footer from "./components/Footer"
import AdminProducts from "./pages/AdminProducts"
import AddProduct from "./pages/AddProduct"


function App() {

  return (
    <>
      
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/adminproduct" element={<AdminProducts />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Route>
        
      </Routes>
      <Footer />
    </>
  )
}

export default App
