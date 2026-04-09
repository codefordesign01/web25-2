import React, { useEffect, useState } from 'react'

const Shop = () => {

  const [product , setProduct] = useState([])

  useEffect(()=>{
    getProducts();
  } , [])

  async function getProducts(){
    const api = "http://localhost:3000/products";
    const res = await fetch(api);
    const data = await res.json();
    setProduct(data);
    console.log(data)
  }

  return (
    <div className="py-12 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
          product.map((p)=>(
            <div className="bg-white shadow rounded-lg p-4" key={p.id}>
              <img src={p.image} className="h-40 w-full object-cover rounded-lg" />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <small>{p.description}</small>
              <p className="text-blue-600 font-bold">category : <span className='text-green-400'>{p.category}</span></p>
              <p>Price : <span className="text-blue-600 font-bold">${p.price}</span></p>
              
            </div>
          ))
        }
        
      </div>
    </div>
  )
}

export default Shop