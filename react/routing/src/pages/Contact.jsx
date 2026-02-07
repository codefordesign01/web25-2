import React, { useState } from 'react'

const Contact = () => {
  const [name , setName] = useState("HEllo");
  const [email , setEmail] = useState();
  const [language , setLanguage] = useState([]);
  const [image ,setImage] = useState("https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80")

  function handelCheck(e){
    console.log(e.target.value , e.target.checked)
    if(e.target.checked){
      setLanguage([...language,e.target.value])
    }
    else{
      setLanguage([language.filter((item)=>{item!==e.target.value})])
    }
  }

  return (
    <div>
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-10 col-sm-12'>
            <div className='bg-white shadow rouded p-5 border border-primary'>
              <input onChange={(e)=>{setName(e.target.value)}} placeholder='Enter Name' className='form-control' />
              <input onChange={(e)=>{setImage(e.target.value)}} placeholder='Enter Iamge' className='form-control' />
              <input type='email' placeholder='Enter Email' onChange={(e)=>{setEmail(e.target.value)}} />
              <div className='mt-3'>
                <h4>Select Any Language</h4>
                <input onChange={handelCheck} value="HTML" id='html' type='checkbox' />
                <label htmlFor='html'>HTML</label>
                <br />
                <input onChange={handelCheck} value="CSS" id='css' type='checkbox' />
                <label htmlFor='css'>CSS</label>
                <br />
                <input onChange={handelCheck} value="JS" id='js' type='checkbox' />
                <label htmlFor='js'>JS</label>
                <br />
                <input onChange={handelCheck} value="BS" id='bs' type='checkbox' />
                <label htmlFor='bs'>Bootstrap</label>
              </div>
            </div>
            
          </div>
          <div className='col-6'>
            <img src={image} width="100%" />
            <h1>{name}</h1>
            <h1>{email}</h1>
            <h1>{language}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact