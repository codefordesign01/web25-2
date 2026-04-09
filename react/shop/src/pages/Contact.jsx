import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [user,setUser]=useState([])
  useEffect(()=>{
    getUser()
  },[])
 async function getUser(){
    const api="https://dummyjson.com/users";
    const res=await fetch(api)
    const data=await res.json()
    console.log(data)
    setUser(data.users)

  }
  return (
    <div>Contact Page
      <ul>
        {
          user.map((user)=>(
            <li key={user.id}>
              {user.lastName}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Contact