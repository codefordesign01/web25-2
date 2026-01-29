import React from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
 const pageid = useParams();

  return (
    <div><h1>Detail page {pageid.id}</h1></div>
  )
}

export default Detail