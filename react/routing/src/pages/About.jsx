import React from 'react'
import style from './About.module.css'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const About = () => {
  var a = 50;

  const Mybutton = styled.h1`
    background-color:red;
  `
 
  return (
    <div className={style.red}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>


      <div className='card'>
        <img src='' className='card-img' />
        <div className='card-body'>
          <h2 className='card-title'></h2>
        </div>
      </div>
      about
      <Mybutton>click here</Mybutton>

      <Mybutton>read more</Mybutton>

      <h1 style={{fontSize:`${a}px`}}>jsdj jadj </h1>
    </div>
  )
}

export default About