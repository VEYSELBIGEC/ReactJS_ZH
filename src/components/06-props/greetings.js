import React from 'react'
import Welcome from './welcome'

const Greetings = () => {
  return (
  
  <div>
    <Welcome firstName="Veysel" lastName="BOY"/>
    <Welcome firstName="Veli" lastName="BOY"/>
  </div>
    
  )
}

export default Greetings

// Not: string seklindeki propslar "" 'tirnak icinde gonderilir, onun haricindeki datalar, number, funtion vs. suslu parantez ile gonderilir 
// mesela: <Welcome firstName="Veysel" lastName="BOY" age={45}/>
// Read and delete ....