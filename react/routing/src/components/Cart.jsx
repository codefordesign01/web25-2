import React from 'react'
import { useSelector } from 'react-redux'

const Cart  = () => {

  const selecter = useSelector((state)=>state.cart.value);

  return (
    <div>Cart <span className='badge bg-danger rounded-pill'>{selecter}</span></div>
  )
}

export default Cart 