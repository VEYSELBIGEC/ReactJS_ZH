import React from 'react'
import image1Src from "../../assets/img/image1.jpg" ;

const Image1 = () => {
  return (
    <div>
        {/* If images are in public file, we import like this!*/}
        <img src="logo512.png"/>
        {/* If images are in src file, we import like two different ways!*/}
        <img src={image1Src}/>
        <img src={require("../../assets/img/image2.jpg")}/>
    </div>
  )
}

export default Image1