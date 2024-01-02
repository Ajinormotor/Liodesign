import React from 'react'
import {  Navigate, Routes,Route } from 'react-router-dom'

import Home from '../Pages/Home'



const Routers = () => {

  return (

    
   <Routes>
<Route   path='index'   elements= { <Navigate to='/home' />}  />
<Route  path='/home'    element = {< Home  />}   />


   </Routes>


  )
}

export default Routers