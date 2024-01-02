import React from 'react'


import "../Styles/Trending.css"
import { Card, CardBody, Row } from 'reactstrap'
import trendingdata from '../Assets/Data/trendingdata'

const Trending = () => {




  return (

    <div className="trending  justify-center items-center  p-7 mt-24"  id="trending" >

      <div className="heading  text-center mb-5">
      <h1  className="text-4xl  p-8 font-semibold   text-white">TRENDING</h1>
    </div>


      <div  className="trending__wrapper flex  justify-between">
 {
  trendingdata.map((item,index)=>(
    <div>
    <Trendingitem  item={item}  key={index.id}  />
    </div>
  ))
 }

 </div>

 <div  className="justify-center items-center p-6  text-center">
 <button  className="bg-red-700 p-4 py-2  text-white  rounded-md">Explore all item  <i class="ri-arrow-right-fill"></i></button>
 </div>


  </div>
  
  
  )
}


const Trendingitem = ({item}) => {

  const {img, name, price} = item;

return(

  
  <div  className="trending__card max-w-full container flex  justify-between gap-4  text-white"> 

  <Row>
 <Card>
<div className="trending__img  justify-between  items-center  ">
<h1  className="bg-blue-900  w-12 rounded-sm text-center  py-2">New</h1>
<img src={img}  alt=""    className="t__img" />
</div>

 </Card>
  
  <CardBody>
  
  <h1>{name}</h1>
  <p>{price} </p>
  
  </CardBody>



  </Row>
  </div>


)
  

}

export default Trending