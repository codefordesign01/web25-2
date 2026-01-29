import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Allproduct from './components/service/Allproduct'
import Woman from './components/service/Woman'
import Man from './components/service/Man'
import Header from './components/Header'
import Landing from './pages/Landing'
import Sidebar from './components/Sidebar'
import Admin from './pages/Admin'
import Detail from './components/Detail'

const App = () => {
  return (
    <>
      <Routes>
        <Route  element={<Header />}>
            <Route path='/' element={<Landing /> } />
        </Route>
      </Routes>
      
      <Routes >
        <Route element={<Navbar />}>
          <Route  path="/home" element={<Home />} />
            <Route  path="/about" element={<About />} />
            <Route  path="/service" element={<Service />}>
              <Route index path='' element={<Allproduct />} />
              <Route path='woman' element={<Woman />} />
              <Route path='man' element={<Man />} />
            </Route>
            <Route  path="/contact" element={<Contact />} />
            <Route  path="/detail/:id" element={<Detail/>} />
        </Route>
      </Routes>

      
      <Routes>
        <Route element={<Sidebar />}>
          <Route path='/admin' element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App