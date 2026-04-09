import React, { useEffect, useState } from 'react'

const About = () => {

  const [user , setUser] = useState([])

  useEffect(()=>{
    getUsers();
  } , [])

  async function getUsers(){
    const api = "https://dummyjson.com/users";
    const res = await fetch(api);
    const data = await res.json();
    setUser(data.users)
    console.log(data)
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          {
            user.map((u)=>(
              <div className='col-lg-3 col-md-6 col-sm-12 mb-3'>
                <div className='card shadow border-info'>
                  <img src={u.image} width='150' className='mx-auto' />
                  <div className='card-body'>
                      <h3>{u.lastName}</h3>
                      <p>Email : <span>{u.email}</span></p>
                      <p>Age : <span>{u.age}</span></p>
                      <p>phone : <span>{u.phone}</span></p>
                      <p>gender : <span>{u.gender}</span></p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default About