import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
     <div className='card m-5 shadow border border-info'>
       <div className='card-body'>
         <h2>Page Not Found</h2>
         <Link to="/">Go Home Page</Link>
       </div>
     </div>
    </div>
  )
}

export default Error