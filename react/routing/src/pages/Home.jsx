import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  var users = [
    {
      id:1,
      name:"Ali",
      email:"Ali@gmail.com",
      age:20
    },
    {
      id:2,
      name:"Ahmad",
      email:"ahmad@gmail.com",
      age:25
    },
    {
      id:3,
      name:"Zain",
      email:"zain@gmail.com",
      age:18
    },
    {
      id:4,
      name:"zeshan",
      email:"zeshan@gmail.com",
      age:20
    },
    {
      id:5,
      name:"Umer",
      email:"umer@gmail.com",
      age:20
    }
  ]


  return (
    <div className='bg-light'>
      <div className='container py-5'>
        <div className='row'>
          {
            users.map((u , i)=>(
              <div key={i} className='col-lg-4 col-md-6 col-sm-12 mb-3'>
                <div className='card shadow'>
                  <div className='card-body'>
                      <h2>{u.name}</h2>
                      <p>{u.email}</p>
                      <p>Ager :<span className='text-info'>{u.age}</span></p>
                      <Link to={"/detail/" + u.id} className='btn btn-info'>Read More</Link>
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

export default Home