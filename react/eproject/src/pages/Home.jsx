import React, { useEffect, useState } from 'react'

const Home = () => {

  const [fProduct , setFProduct] = useState([])

  useEffect(()=>{
    GetFProduct();
  } , [])


  async function GetFProduct(){
    const api = "http://localhost:3000/products";
    let res = await fetch(api);

    const data= await res.json();
    console.log(data);
    setFProduct(data.slice(-4))

  }

  return (
     <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative overflow-hidden z-1 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Discover Latest <span className="text-blue-600">Fashion</span>
          </h1>
          <p className="text-white mt-4">
            Shop trendy clothes and accessories with best quality and prices.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
            Shop Now
          </button>
        </div>

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/072/682/079/small/how-to-choose-the-right-ecommerce-platform-for-your-business-photo.jpg"
          alt="hero"
          className="absolute w-full z-[-1] top-0 left-0"
        />
      </section>

      {/* Categories */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">Men</h3>
          </div>

          <div className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1495121605193-b116b5b09a75"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">Women</h3>
          </div>

          <div className="bg-white rounded-xl shadow p-4 text-center hover:shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1519741497674-611481863552"
              className="h-48 w-full object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">Accessories</h3>
          </div>

        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {
            fProduct.map((p)=>(
              <div className="bg-gray-50 rounded-xl shadow p-4 hover:shadow-lg">
              <img
                src={p.image}
                className="h-40 w-full object-cover rounded-lg"
              />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-blue-600 font-bold">${p.price}</p>
            </div>
            ))
          }
          

        </div>
      </section>

      {/* Banner */}
      <section className="py-12 px-6 md:px-20">
        <div className="bg-blue-600 rounded-xl text-white p-8 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Big Sale 50% Off</h2>
            <p className="mt-2">Limited time offer. Grab now!</p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-blue-600 px-6 py-2 rounded-lg">
            Shop Now
          </button>
        </div>
      </section>

    </div>
  )
}

export default Home