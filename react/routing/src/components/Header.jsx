import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
  return (
   <>
    <div className='bg-dark'>
     <div className='container'>
       <div className='d-flex justify-content-between align-items-center'>
        <h1 className='text-white'>Routing</h1>
        <Link  className='text-white' to="/home">Go Website</Link>
       </div>
     </div>
    </div>
    <div>
     <Outlet />
    </div>
    </>
  )
}

export default Header