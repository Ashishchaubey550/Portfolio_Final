import React from 'react'
import 'remixicon/fonts/remixicon.css'; 

function PageBottom() {
  return (
    <div className= 'py-[20px] px-[80px]  font-[Helvetica] justify-between flex  text-[#AAABAB] rounded-[50px] absolute bottom-10 w-[96%] ml-[-110px] uppercase'>
      <h1>Based in Raipur,Chhattisgarh</h1>
      <div className='flex gap-3'>
      <i class="ri-global-line"></i>
      <h1>WoRking Worldwide</h1>
      </div>
      <div className=' flex gap-3 justify-center items-center '>
        <div className='bg-green-600 h-[8px] w-[8px] blinking-dot'></div>
        <h1>Open to new Projects</h1>
      </div>
    </div>
  )
}

export default PageBottom
