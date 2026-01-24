import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Error from './components/Error'
import Footer from './components/Footer'
import Allproduct from './components/service/Allproduct'
import Featured from './components/service/Featured'
import FlashDeals from './components/service/FlashDeals'
import LastMinute from './components/service/LastMinute'

const App = () => {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} >
          <Route index path='' element={<Allproduct />} />
          <Route path='featured' element={<Featured />} />
          <Route path='deals' element={<FlashDeals />} />
          <Route path='lastminute' element={<LastMinute />} />
        </Route>
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
      
    </>
  )
}

export default App