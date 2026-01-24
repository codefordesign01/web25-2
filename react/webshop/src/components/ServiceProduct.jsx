import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import AllProduct from '../components/service/Allproduct'

const ServiceProduct = () => {
  return (
    <div>
      <h1>Service Product</h1>
      <div className="products">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="filters">
              <ul>
                  <li><Link to="">All Products</Link></li>
                  <li><Link to="featured">Featured</Link></li>
                  <li><Link to="deals">Flash Deals</Link></li>
                  <li><Link to="lastminute">Last Minute</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="filters-content">
                <Outlet />
            </div>
          </div>
          <div className="col-md-12">
            <ul className="pages">
              <li><a href="#">1</a></li>
              <li className="active"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#"><i className="fa fa-angle-double-right"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ServiceProduct
