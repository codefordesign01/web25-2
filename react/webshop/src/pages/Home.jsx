import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import About from '../components/home/About'

const Home = () => {
  return (
    <>
      <Banner bannertext="New Arrivals On Sale" bannertitle="Home Page" />
      <Products />
      <About />
    </>
  )
}

export default Home