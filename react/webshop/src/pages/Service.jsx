import React from 'react'
import Banner from '../components/home/Banner'
import Products from '../components/home/Products'
import ServiceProduct from '../components/ServiceProduct'

const Service = () => {
  return (
    <div>
      <Banner bannertext="Service Page information" bannertitle="service Page" />
      <ServiceProduct />
    </div>
  )
}

export default Service