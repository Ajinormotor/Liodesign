import React from 'react'

import chasity from "../../Assets/Photo/Images/chastity.jpg"
import don from "../../Assets/Photo/Images/don.jpg"
import architecture from "../../Assets/Photo/Images/architecture.jpg"
import spacejoy1 from "../../Assets/Photo/Images/spacejoy.jpg"


const Dinningroom = () => {
  return (
   <div className="dinningroom" id="dinningroom">
      
      <div className="category__box  flex  flex-col  gap-4">

<div className="catergory__row   flex  justify-between  ">
<img src={chasity} alt="" className='w-92  h-44 rounded-lg  mx-4'/>
<img src={don} alt="" className='w-3/4  h-44  rounded-lg'/>
</div>

<div className="catergory__row   flex  justify-between  ">
<img src={architecture} alt="" className='w-92  h-44 rounded-lg  mx-4'/>
<img src={spacejoy1} alt="" className='w-92  h-44  rounded-lg  '/>
</div>

<div className="catergory__row   flex  justify-between  ">
<img src={chasity} alt=""  className='w-92  h-44 rounded-lg  mx-4'/>
<img src={don} alt="" className='w-3/4  h-44  rounded-lg  '/>
</div>



</div>
   </div>
  )
}

export default Dinningroom