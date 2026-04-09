import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [product , setProduct] = useState([])

  useEffect(()=>{
    getProduct();
  } , [])

async function getProduct(){
  const api = "https://dummyjson.com/products";
  const res = await fetch(api);
  const data = await res.json();
  setProduct(data.products);
  console.log(data)
 }

  


  return (
    <div>
     <div className='container py-5'>
        <div className='row'>
          {
            product.map((p)=>(
              <div className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                <div className='card shadow border-info'>
                  <img src={p.thumbnail} />
                  <div className='card-body'>
                    <h3>{p.title}</h3>
                    <p>
                      {p.description}
                    </p>
                    <span>category : <span>{p.category}</span></span>
                    <Link to={"/detail/" + p.id} className='btn btn-info w-100'>See Deatial</Link>
                  </div>
                </div>
              </div>
            ))
          }
              
            
          
        </div>
     </div>
    </div>
  )
}

export default Home