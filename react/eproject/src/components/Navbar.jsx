import React from 'react'
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
 const [open, setOpen] = useState(false);
  return (
   <>
    <nav className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-500">
          eproject
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/shop" className="hover:text-blue-400">Shop</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>

          <Link 
            to="/login" 
            className="bg-blue-500 px-4 py-1 rounded hover:bg-blue-600"
          >
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/product" onClick={() => setOpen(false)}>Product</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link 
            to="/login" 
            className="bg-blue-500 px-3 py-1 rounded text-center"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar