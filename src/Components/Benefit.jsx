import React from 'react'
import { Card, CardBody } from 'reactstrap'

import "../Styles/Benefit.css"

const Benefit = () => {
  return (
    <div className="benefit  container   max-w-full p-12"  id="benefit">

      <div className="heading  text-center pb-5">
        <h1  className='text-3xl text-center'>Benefits for your expediency</h1>
      </div>

      <div className="benefit__wrapper  flex  justify-around  py-7  items-center text-center">

        <div className="benefit__box  text-center ">
          <Card  className='text-red-800  text-6xl'>
          <i class="ri-shake-hands-line" ></i></Card>

        <CardBody>
         <h1>Return Policy</h1> 
         <p> We offer flexible payment options to ease purchases</p>
         </CardBody>
        </div>

        <div className="benefit__box  text-center">
          <Card  className='text-red-800 text-6xl'>
          <i class="ri-exchange-2-line"></i></Card>

        <CardBody>
         <h1>Customer Support</h1> 
         <p> You can return a product within 30days</p>
         </CardBody>
        </div>

        <div className="benefit__box text-center">
          <Card  className="text-red-800  text-6xl">
          <i class="ri-customer-service-line 2xl"></i>
          </Card>

        <CardBody>
         <h1>Payment Method</h1> 
         <p> Our customer support is 24/7</p>
         </CardBody>
        </div>

      </div>

    </div>
  )
}

export default Benefit