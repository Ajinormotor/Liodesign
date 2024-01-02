import React from 'react'
import { Card, CardBody } from 'reactstrap'

import denys from "../Assets/Photo/Images/denys.jpg"
import spacejoy from "../Assets/Photo/Images/spacejoy.jpg"
import minh from "../Assets/Photo/Images/minh.jpg"



const  secondata = [
  {
      id: 2,
      name: 'Living Family Set',
      price: '$589.99',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Ipsa aliquam consequatur quod distinctio fuga est aperiam enim sapiente blanditiis architecto vitae ab magni officiaunde asperiores, delectus vero! Ad,tempora',
      img: spacejoy,


  },
  {
      id: 3,
      name: 'Living Room Set',
      price: '$299.99',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Ipsa aliquam consequatur quod distinctio fuga est aperiam enim sapiente blanditiis architecto vitae ab magni officiaunde asperiores, delectus vero! Ad,tempora',
      img: minh,

  },

]


const Offer = () => {

  return (
<div className="offer  container  max-w-full" id="offer">


<div className="heading  text-center mb-5">
      <h1  className="text-5xl  p-8 font-semibold  text-black">Special Offer</h1>
    </div>



  <div className="offer__wrapper  flex justify-between gap-10 m-9">

  <div className="offer__box  ">
    <Card>
      <div className='card__img  max-w-4xl'>
    <img src={denys}  alt=""  className='object-contain  w-screen' />
    </div>
    </Card>
  
    <CardBody className="flex  gap-8 pt-3 ">
      <div>
        <h1> Larkin Wood Full Set </h1>
        
        <div  className='flex gap-1 pt-2  '>
<i class="ri-star-fill  text-yellow-500"    ></i>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-half-fill  text-yellow-500"></i>
</div>

        <p  className="font-extrabold">$722.99</p>
      </div>
  
      <div  className='px-4'>
      <button  className="px-4 py-1 rounded-md  bg-red-900  text-center text-white">Add to cart </button>
      </div>
    </CardBody>
  </div>
  
  <div className="offer__box">
   
  <h1  className='font-bold text-2xl pb-4'>Description</h1>
  <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit
     Ipsa aliquam consequatur quod distinctio fuga est aperiam enim sapiente blanditiis architecto vitae ab magni officia, unde asperiores, delectus vero! Ad, tempora.</p>
     <div>

      <span className='py-4  font-bold text-1xl'>See more <i class="ri-arrow-down-fill"></i></span>

  <div className="offersub__wrapper  pt-8">

    {
      secondata.map((item,index) =>(
    
    <div className="suboffer__img"  key={index.id}>
      <SecondLayer  item={item}  />
      
    </div>
  
      )

    )}

  </div>

     </div>
  </div>
  
    </div>









    </div>
  )
  }


  const SecondLayer = ({item}) =>  {
    const {price,img, name ,desc} = item;
  
  
    return(
     <div className="flex text-left">
<Card>
<div  className=" py-4  max-w-96   h-40">
<img src={img} alt="" className="object-fit" />
</div>

</Card>

<CardBody>
  <div  className=" py-4  px-5 text-left">
<h1 className='flex -item-center  justify-between'> {name}  <span  className='font-extrabold'>{price}</span></h1>

<div  className='flex gap-1 pt-2'>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-fill  text-yellow-500"></i>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-fill text-yellow-500"></i>
<i class="ri-star-half-fill text-yellow-500"></i>
</div>

<p>{desc}</p>
</div>
</CardBody>



     </div>
      
    )
  
  }



export default Offer