import React from 'react'

const Contact = () => {
  return (
    <div className="py-12 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions or need help? Reach out to us via email or phone.
      </p>
      <form className="bg-white p-6 rounded-xl shadow max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 mb-4 border rounded-lg"
        ></textarea>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact