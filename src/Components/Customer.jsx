import React from 'react'
import Slider from 'react-slick'
import jake1  from "../Assets/Photo/Images/jake1.jpg"

const Customer = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    swipeToSLide:true  
  };

  return (
   <div className="customer  settings  container  max-w-full  m-7 ">

    <div className="heading  text-center mb-5">
      <h1  className="text-4xl  p-4  font-semibold">What my clients says</h1>
    </div>

  
      <Slider {...settings} >

      <div className="customer__wrapper max-w-full">
        <div className="single__customer  flex flex-col  text-center  items-center ">

          <img src={jake1} alt="" className='w-24 items-center  justify-self-center  rounded-full  flex-col pb-4'/>
  <p  className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla totam modi earum alias quasi,
     distinctio doloribus quas facilis quia explicabo harum quae perferendis minus assumenda ullam nisi, maxime, quos minima!
     </p>
     <h6 className="pt-2 font-bold">Zara Paul</h6>
     <span  className="opacity-95">CEO of flutter</span>
        </div>
      </div>


      <div className="customer__wrapper">
        <div className="single__customer  text-center flex  flex-col items-center">

        <img src={jake1} alt="" className='w-24 items-center  justify-self-center  rounded-full  flex-col pb-4'/>
  <p  className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla totam modi earum alias quasi,
     distinctio doloribus quas facilis quia explicabo harum quae perferendis minus assumenda ullam nisi, maxime, quos minima!
     </p>
     <h6 className="font-bold pt-2">Zara Paul</h6>
     <span  className="opacity-95">CEO of flutter</span>
        </div>
      </div>

      <div className="customer__wrapper flex">
        <div className="single__customer  text-center flex flex-col  items-center">

        <img src={jake1} alt="" className='w-24 items-center  justify-self-center  rounded-full  flex-col pb-4'/>
  <p  className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla totam modi earum alias quasi,
     distinctio doloribus quas facilis quia explicabo harum quae perferendis minus assumenda ullam nisi, maxime, quos minima!
     </p>
     <h6 className="font-bold  pt-2">Zara Paul</h6>
     <span  className="opacity-95">CEO of flutter</span>
        </div>
      </div>
      </Slider>


   </div>
  )
}

export default Customer