import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-6 md:px-20 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">FashionHub</h2>
            <p>Modern fashion for men, women, and accessories. Trendy & affordable.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Home</li>
              <li className="mb-2 hover:text-white cursor-pointer">Shop</li>
              <li className="mb-2 hover:text-white cursor-pointer">About</li>
              <li className="mb-2 hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer Service</h3>
            <ul>
              <li className="mb-2 hover:text-white cursor-pointer">Shipping Policy</li>
              <li className="mb-2 hover:text-white cursor-pointer">Returns</li>
              <li className="mb-2 hover:text-white cursor-pointer">FAQ</li>
              <li className="mb-2 hover:text-white cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p>Email: support@fashionhub.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex mt-4 space-x-4">
              <span className="hover:text-white cursor-pointer">FB</span>
              <span className="hover:text-white cursor-pointer">IG</span>
              <span className="hover:text-white cursor-pointer">TW</span>
            </div>
          </div>

        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-6 text-gray-400 text-sm">
          &copy; 2026 FashionHub. All rights reserved.
        </div>
      </footer>
  )
}

export default Footer