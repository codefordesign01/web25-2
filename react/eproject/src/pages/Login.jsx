import React from 'react'

const Login = () => {
  return (
    <div className="py-12 px-6 md:px-20 bg-gray-50 min-h-screen flex justify-center items-center">
      <form className="bg-white p-8 rounded-xl shadow w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Login
        </button>
        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account? <span className="text-blue-600 cursor-pointer">Sign Up</span>
        </p>
      </form>
    </div>
  )
}

export default Login