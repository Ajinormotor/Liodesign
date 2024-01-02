import React from 'react'
import kelly1 from "../Assets/Photo/Images/kelly1.jpg"


import "../Styles/Newsletter.css"

const Newsletter = () => {
  return (
  <div className="newsletter  container max-w-full">

    <div className="newsletter__wrapper max-w-full flex">

      <div className="newsletter__box  w-1/2">

        <img src={kelly1} alt="" />

      </div>

      <div className="newsletter__box   w-1/2  p-6 px-24  ">
<h1  className="text-5xl text-white  pb-6">Join our  <br  /> <span>Newsletter</span></h1>
<p  className="pb-4  text-2lg  text-white">Recieve exclusive deals, discounts and many offers</p>
<input type="text" placeholder="Enter your email"   className='rounded w-full py-1  border-none'/>
<br  />

<button  className="hero__btn bg-red-600 rounded-md mt-6 w-2/4 px-4 py-2  text-white">Subscribe</button>
      </div>

    </div>
  </div>
  )
}

export default Newsletter