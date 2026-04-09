import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Service from './pages/Service'
import {Routes , Route} from 'react-router-dom'
import Error from './components/Error'
import ProductDetail from './components/ProductDetail'

function App() {
  

 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App


