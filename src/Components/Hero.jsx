import React from 'react'
import "../Styles/Hero.css"

import spacejoy from "../Assets/Photo/Images/spacejoy.jpg"

const Hero = () => {
  return (
  <div className="hero  container max-w-full   rounded-md" id="hero">

  <div className="hero__wrapper  flex justify-between my-6 mx-9 bg-gray-600   rounded-md">

    <div className="hero__text text-left  p-8">
<h1 className="text-4xl text-white  pb-10 lh">Exclusive deals of <br  /> <span className="mt-7">Furniture Collection</span></h1>
<p  className="pb-10  text-white opacity-90">Explore different categories, Find the best deals.</p>

<button  className="hero__btn bg-red-600 rounded-md  px-4 py-2  text-white">Shop Now</button>
    </div>

    <div className="hero__img mt-7">

<img src={spacejoy} alt=""  className="mt-5 z-3" />
    </div>

  </div>


  </div>
  )
}

export default Hero