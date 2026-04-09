import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItem } from '../redux/slice';

const Home = () => {
  const dispatch = useDispatch()

  const [product , setProduct] = useState([])

  useEffect(()=>{
    getProduts();
  } , [])

   const getProduts = async () =>{
    const api = "https://dummyjson.com/products";
    const res = await fetch(api);
    const data = await res.json();
    setProduct(data.products)
  }


  return (
    <div className='bg-light'>
      <div className='container py-5'>
        <div className='row'>
          {
            product.map((p , i)=>(
              <div key={i} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                <div className='card shadow'>
                  <div className='card-body'>
                    <img src={p.thumbnail} width="250px" />
                      <h2>{p.title}</h2>
                      <p>{p.price}</p>
                      <p>Ager :<span className='text-info'>{p.rating}</span></p>
                      <div className='d-flex justify-content-between'>
                        <Link to={"/detail/" + p.id} className='btn btn-info'>Read More</Link>
                      <button onClick={()=>dispatch(addItem(1))} className='btn btn-success'>Add to card</button>
                      </div>
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