import React from 'react'
import { useState , useEffect } from 'react'

const AdminProducts = () => {
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
    
    <div className="px-6 md:px-20 py-12">
      <div className='flex justify-between items-center mb-5'>
       <h2 className="text-2xl font-bold mb-6">Products List</h2>
       <button className='bg-blue-500 text-white px-4 py-2 rounded-sm'>Add New Product</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-6 text-left text-gray-700">ID</th>
              <th className="py-3 px-6 text-left text-gray-700">Image</th>
              <th className="py-3 px-6 text-left text-gray-700">Name</th>
              <th className="py-3 px-6 text-left text-gray-700">Category</th>
              <th className="py-3 px-6 text-left text-gray-700">Price</th>
              <th className="py-3 px-6 text-left text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
             product.map((p)=>(
               <tr key={p.id}  className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{p.id}</td>
                <td className="py-3 px-6">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                </td>
                <td className="py-3 px-6">{p.title}</td>
                
                <td className="py-3 px-6">{p.category}</td>
                <td className="py-3 px-6 font-bold text-blue-600">${p.price}</td>
                <td className="py-3 px-6 font-bold text-blue-600">
                 <button className='p-2 border-0 text-blue-400'>Eidt</button>
                 <button className='p-2 border-0 text-red-400'>Delete</button>
                 <button className='p-2 border-0 text-green-400'>View</button>
                </td>
              </tr>
             ))
            }
              
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminProducts