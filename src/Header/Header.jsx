import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import "../Styles/Header.css"

const nav__Link = [
  {
    path:'#',
    display: 'Home',
  },

  {
    path:'#',
    display: 'Products',
  },

  {
    path:'#',
    display: 'Category',
  },

  {
    path:'#',
    display: 'Contact US',
  },


]

const Header = () => {

  const menuRef = useRef(null);


const menuToggle = () => menuRef.current.classList.toggle('menu__active');


  return (
<div  className="container max-w-full"  id="header" >


<div  className="header__wrapper flex justify-between max-w-full p-6">

<div>
<h1 className="text-black font-medium">LioDesign</h1>
</div>



<div className="nav__menu"  ref={menuRef}  onClick={menuToggle}>

  <ul  className="nav__list flex  flex-row gap-4 ">

    {
      nav__Link.map((item, index)=>(

<li className="menu__item  text-2xl  "   key={index}><Link to={item.path}>{item.display}</Link></li>

      ) )
    }
  </ul>


 

</div>



<div className="side__menu flex item-center gap-5 justify-between">

<div  className='menu__btn hidden'>
<i class="ri-menu-line" onClick={menuToggle}></i>
</div>

<div  className="search  flex  rounded  px-2">
    <input type="text"  placeholder="Search Here "  className="search bg-transparent  border-none " />
    <i class="ri-search-2-line "></i>
  </div>

  <i class="ri-shopping-cart-line  cursor-pointer"></i>
  <i class="ri-contacts-line cursor-pointer"></i>

</div>


</div>

</div>
  )
}

export default Header