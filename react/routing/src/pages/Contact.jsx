import React, { useState } from 'react'

const Contact = () => {

  const [name , setName] = useState("----------");
  const [phone , setPhone] = useState();
  const [image , setImage] = useState();
  const [language , setLanguage] = useState([]);


  function handleCheck(e){
    if(e.target.checked){
      setLanguage([...language , e.target.value])
    }
    else{
      setLanguage(language.filter((item)=>item!=e.target.value))
    }
    
  }
   function handelClear(){
    setName("")
    setLanguage([])
      setImage("")
    
   }

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <div className='col-lg-6 col-md-10 col-sm-12'>
            <div className='bg-white shadow rounded p-4 border border-info'>
                <div className='mb-3'>
                  <input onChange={(e)=>{setName(e.target.value)}} type='text' placeholder='Enter Name' className='form-control' />
                </div>
                <div className='mb-3'>
                  <input onChange={(e)=>{setPhone(e.target.value)}} type='number' placeholder='Enter Number' className='form-control'  />
                </div>
                <div>
                  <input onChange={(e)=>{setImage(e.target.value)}} type='url' placeholder='Enter Image url' className='form-control'  />
                </div>
                <div>
                  <h3>Select Any Language</h3>

                  <label htmlFor='html'>HTML</label>
                  <input onChange={handleCheck} value="HTML" id='html' type='checkbox' /><br />
                  <label htmlFor='css'>Css</label>
                  <input onChange={handleCheck} value="CSS" id='css' type='checkbox' /><br />
                  <label  htmlFor='js'>Js</label>
                  <input onChange={handleCheck} value="JS" id='js' type='checkbox' /><br />
                  <label  htmlFor='react'>React</label>
                  <input onChange={handleCheck} value="React" id='react' type='checkbox' /><br />
                </div>
                <button onClick={handelClear} className='btn btn-info'>Clear All Data</button>
            </div>
          </div>
          <div className='col-lg-6 col-md-10 col-sm-12'>
            <div className='bg-white shadow rounded p-4 border border-info'>
                <div className='mb-3'>
                  <img src={image} />
                  <h2>Name : {name}</h2>
                  <h2>Phone : {phone}</h2>
                  <h2>Language : {language}</h2>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact