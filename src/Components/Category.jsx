import React, { useState } from 'react'
import "../Styles/Category.css"


import chasity from "../Assets/Photo/Images/chastity.jpg"
import don from "../Assets/Photo/Images/don.jpg"

import Bedroom from './Categories/Bedroom'
import Dinningroom from './Categories/Dinningroom'

const Category = () => {

  const [filter, setFilter]  = useState('CATEGORY')



  return (





 <div className="category container max-w-full  mt-24" id="category">

<div className="heading  text-center mb-5">
      <h1  className="text-4xl  p-8 font-semibold  text-white">Explore by Category</h1>
    </div>

          <div className="category__wrapper text-left  flex p-10 justify-around gap-4 ">

            <div className="category__box   flex-wrap">
       <input type="text"  placeholder="Search  "/>

       <div>
        <ul  className="text-white p-5">
          <li className='py-2'><button  onClick={()=>setFilter('CATEGORY')}>Bedroom</button></li>
          <li  className='py-2'><button  onClick={()=>setFilter('BEDROOM')}>Dinning Room</button></li>
          <li  className='py-2'><button onClick={()=>setFilter('DINNINGROOM')}>Kitchen</button></li>
          <li className='py-2'><button onClick={()=>setFilter('BEDROOM')}>Living Room</button></li>
          <li className='py-2'><button onClick={()=>setFilter('BEDROOM')}>Living Space</button></li>
          <li  className='py-2'><button onClick={()=>setFilter('BEDROOM')}>Meeting Room</button></li>
          <li className='py-2'><button onClick={()=>setFilter('BEDROOM')}>Workspace</button></li>
        

        </ul>

        <button  className="px-6 py-3 rounded-md  bg-red-900  text-center text-white">All Categories <i class="ri-arrow-right-fill"></i></button>
       </div>
            </div>

{

  filter === ('CATEGORY') &&

            <div className="category__box  flex  flex-col  gap-4">

              <div className="catergory__row   flex  justify-between  ">
         <img src={chasity} alt="" className='w-2/4  h-44 rounded-lg  mx-4'/>
          <img src={don} alt="" className='w-3/4  h-44  rounded-lg'/>
              </div>

              <div className="catergory__row   flex  justify-between  ">
         <img src={chasity} alt="" className='w-2/4  h-44 rounded-lg  mx-4'/>
          <img src={don} alt="" className='w-3/4  h-44  rounded-lg  '/>
              </div>

              <div className="catergory__row   flex  justify-between  ">
         <img src={chasity} alt=""  className='w-2/4  h-44 rounded-lg  mx-4'/>
          <img src={don} alt="" className='w-2/4  h-44  rounded-lg  '/>
              </div>

              

            </div>
}

{filter === ('BEDROOM')  && <Bedroom />}

{filter === ("DINNINGROOM")  && <Dinningroom />}
</div>

 </div>
  )
}

export default Category