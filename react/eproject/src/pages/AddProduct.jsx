import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

 const pagelink = useNavigate()

 const [title , setTitle] = useState("");
 const [price , setPrice] = useState("");
 const [category , setCategory] = useState("");
 const [image , setImage] = useState("");
 const [dis , setDis] = useState("");

 async function addNewProduct(){
  const api = "http://localhost:3000/products";

  let res = await fetch(api , {
   method:"POST",
   headers:{
    "Cotent-type" : "Application-json"
   },
   body:JSON.stringify({
    title:title,
    description:dis,
    category:category,
    price:price,
    image:image
   })
  }) ;
  const data  = await res.json();

  if(data){
   alert("Product saved");
   pagelink("/adminproduct")
  }
  else{
   alert("error")
  }

 }

  return (
    <div className='flex justify-center gap-5'>
     <div className='bg-white mt-5  min-w-[400px]  px-5 md:px-10 py-5 md:py-15 shadow-2xl rounded-2xl'>
      <h2 className='text-[30px] text-center'>Add Product</h2>
      <div className='mb-4'>
       <label>Enter Title</label>
       <input 
       type='text' 
       placeholder='title' 
       className='w-full h-[40px] shadow border mt-3 rounded-sm ps-2'
       onChange={(e)=>{setTitle(e.target.value)}}
       />
      </div>
      <div className='mb-4'>
       <label>Enter Price</label>
       <input 
       type='number' 
       placeholder='Price' 
       className='w-full h-[40px] shadow border mt-3 rounded-sm ps-2'
       onChange={(e)=>{setPrice(e.target.value)}}
       />
      </div>
      <div className='mb-4'>
       <label>Enter Category</label>
       <input 
       type='text' 
       placeholder='Category' 
       className='w-full h-[40px] shadow border mt-3 rounded-sm ps-2'
       onChange={(e)=>{setCategory(e.target.value)}}
       />
      </div>
      <div className='mb-4'>
       <label>Enter Image URl</label>
       <input 
       type='url' 
       placeholder='Product Image' 
       className='w-full h-[40px] shadow border mt-3 rounded-sm ps-2'
       onChange={(e)=>{setImage(e.target.value)}}
       />
      </div>
      <div className='mb-4'>
       <label>Enter Discripation</label>
       <textarea  
       placeholder='Discripation' 
       className='w-full h-[40px] shadow border mt-3 rounded-sm ps-2' rows={5}
       onChange={(e)=>{setDis(e.target.value)}}
       ></textarea>
      </div>
      <div className='text-center mt-2'>
        <button onClick={addNewProduct} className='bg-blue-600 rounded-sm px-5 py-2 text-white'>
         Add Product
        </button>
      </div>
     </div>
     <div className='bg-white mt-5  min-w-[400px]  px-5 md:px-10 py-5 md:py-15 shadow-2xl rounded-2xl'>
      <h2 className='text-[30px] text-center'>Product View</h2>
      <div className='mb-4'>
       <label>Title</label>
       <h4 className='text-[24px] text-blue-500'>{title}</h4>
      </div>
      <div className='mb-4'>
       <label>Enter Price</label>
       <h4 className='text-[24px] text-blue-500'>{price}</h4>
      </div>
      <div className='mb-4'>
       <label>Enter Category</label>
       <h4 className='text-[24px] text-blue-500'>{category}</h4>
      </div>
      <div className='mb-4'>
       <label>Enter Image URl</label>
       <img src={image} alt={title} />
      </div>
      <div className='mb-4'>
       <label>Enter Discripation</label>
       <p className='text-[16px] text-blue-500'>{dis}</p>
      </div>
     </div>
    </div>
  )
}

export default AddProduct