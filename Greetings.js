import React from 'react'

const Greetings = (props) => {
  return (
    <>
      <p>Hello {props.name} </p>
        <p>I am {props.age} </p>
        <img src ={props.url} alt = {props.altText} width={props.size}></img>
    </>
    
      
    
  )
}

export default Greetings