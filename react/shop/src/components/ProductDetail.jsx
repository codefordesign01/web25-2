import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

  const [product , setProduct] = useState({});

  useEffect(()=>{
    singalProduct();
  } , [])

 var pageid = useParams();
 console.log(pageid);


async function singalProduct(){
  const api = "https://dummyjson.com/products/";
  const res = await fetch(api+pageid.id);
  const data = await res.json();
  setProduct(data);

 }
 
  return (
    <div>
     <div className='container'>
      <div className='row justify-content-center'>
          <div className='col-lg-8 col-md-10 col-sm-12'>
            <div className='card shadow'>
                <h1>{product.title}</h1>
                <img src={product.thumbnail}  width="50%"/>
                <p>{product.description}</p>
            </div>
          </div>
      </div>
     </div>
    </div>
  )
}

export default ProductDetail