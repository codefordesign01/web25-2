import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <div className='navbar bg-info navbar-expand-lg'>
       <div className='container'>
         <a href="" className='navbar-brand'><h1>Logo</h1></a>
       <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
         <NavLink to="/" className='nav-link text-white'>Home</NavLink>
        </li>
        <li className='nav-item'>
         <NavLink to="/about" className='nav-link text-white'>About</NavLink>
        </li>
        <li className='nav-item'>
         <NavLink to="/contact" className='nav-link text-white'>Contact</NavLink>
        </li>
        <li className='nav-item'>
         <NavLink to="/service" className='nav-link text-white'>Service</NavLink>
        </li>
       </ul>
       </div>
     </div>
    </div>
  )
}

export default Navbar