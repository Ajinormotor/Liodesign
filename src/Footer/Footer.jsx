import React from 'react'
import { Link } from 'react-router-dom'



const account =[
  {
    path: '#',
    display: 'Sign in',
  },

  {
    path: '#',
    display: 'Register',
  },

  {
    path: '#',
    display: 'Track Order',
  },
]

const help =[
  {
    path: '#',
    display: 'Shipping',
  },

  {
    path: '#',
    display: 'Return',
  },

  {
    path: '#',
    display: 'Sizing',
  },
]

const store =[
  {
    path: '#',
    display: 'All products',
  },

  {
    path: '#',
    display: 'Bedroom',
  },

  {
    path: '#',
    display: 'Dinning Room',
  },
]

const legal =[
 
  { 
    path: '#',
    display: 'Shipping  & Delivery',
  },

  {
    path: '#',
    display: 'Terms & Conditions',
  },

  {
    path: '#',
    display: 'Privacy Policy',
  },
]



const Footer = () => {
  return (
  <div className="footer container max-w-full bg-black  text-white tex-center">


<div className="footer__wrapper  flex p-5 justify-between gap-4">

  <div className="flex flex-col">

  <h1 className='font-bold pb-3'>LioDesign</h1>
    <div  className="flex">
      <ul  className="flex gap-3">
      <li><i class="ri-facebook-circle-line"></i></li>
            <li><i class="ri-linkedin-fill"></i></li>
            <li><i class="ri-twitter-line"></i></li>
      </ul>
    </div>

    <div>
    
    <h1 className='font-bold pb-1 pt-1'>Address</h1>
      <ul  className=''>
        <li><i class="ri-phone-line"></i>+123 654 987</li>
        <li><i class="ri-mail-line"></i> 877 The Bronx, NY  14568, USA</li>
       
      </ul>
    </div>
  
  </div>

  <div className="footer__box">

    <h1 className='font-bold pb-4'>My Account</h1>
    <ul>
      {
       account.map((item,index) =>(
        <li  className="footer__item  p-1 opacity-85" ><Link to={item.path}>{item.display}</Link></li>
       )) 
      }
    </ul>

  </div>

  <div className="footer__box">
  <h1 className='font-bold pb-4'>Help</h1>
    <ul>
      {
        help.map((item,index)=>(
       <li  className="footer__item  p-1 opacity-85"><Link to={item.path}>{item.display}</Link></li>  
        ))
      }
    </ul>
    
    </div>

    <div className="footer__box  opacity-85">
    <h1 className='font-bold pb-4'>Store</h1>
<ul>
  {
    store.map((item,index)=>(
   <li  className="footer__item  p-1"><Link to={item.path}>{item.display}</Link></li>  
    ))
  }
</ul>

</div>

<div className="footer__box">
<h1 className='font-bold pb-4'>Legal Information</h1>
<ul>
  {
    legal.map((item,index)=>(
   <li  className="footer__item  p-1 opacity-85"><Link to={item.path}>{item.display}</Link></li>  
    ))
  }
</ul>

</div>

</div>

<p className="text-center p-4">
Copyright 2023 LioDesign. All Rights Reserved
</p>

  </div>
  )
}

export default Footer