import React from 'react'

const Admin = () => {
  return (
    <div>
     {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            
            <div className="bg-white p-5 shadow rounded">
              <h3 className="text-gray-500">Users</h3>
              <p className="text-2xl font-bold">120</p>
            </div>

            <div className="bg-white p-5 shadow rounded">
              <h3 className="text-gray-500">Products</h3>
              <p className="text-2xl font-bold">80</p>
            </div>

            <div className="bg-white p-5 shadow rounded">
              <h3 className="text-gray-500">Orders</h3>
              <p className="text-2xl font-bold">45</p>
            </div>

          </div>
    </div>
  )
}

export default Admin