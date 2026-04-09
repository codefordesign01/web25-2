import React from 'react'
import { useState } from "react";
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
 const [open, setOpen] = useState(true);
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`bg-black text-white p-5 ${open ? "w-64" : "w-20"} transition-all`}>
        <h1 className="text-xl font-bold text-blue-500 mb-6">
          {open ? "eproject" : "EP"}
        </h1>

        <ul className="space-y-4">
          <li className="hover:text-blue-400 cursor-pointer"><Link to='/admin'>Dashboard</Link></li>
          <li className="hover:text-blue-400 cursor-pointer"><Link to='/adminproduct'>Product</Link></li>
          <li className="hover:text-blue-400 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">

        {/* Top Navbar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <button 
            onClick={() => setOpen(!open)} 
            className="text-xl"
          >
            ☰
          </button>

          <h2 className="font-semibold">Admin Dashboard</h2>

          <div className="bg-blue-500 text-white px-3 py-1 rounded">
            Admin
          </div>
        </div>

        {/* Content */}
        <div className="p-6">

          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default AdminLayout