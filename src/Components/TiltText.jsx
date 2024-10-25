import React from 'react'

function TiltText({tiltRef}) {
  return (
    <div id='tiltDev' ref={tiltRef} className=' m-auto items-center justify-center flex flex-col mt-[10%]'>
      <h1 className=' text-[#AAAAAA] text-[4.1vw] font-semibold leading-[3.5vw] uppercase font-[Helvetica]'>I’m a<span className=' text-black'> Freelance Web & App</span></h1>
      <h1 className=' font-bold text-[#AAAAAA] leading-[5.5vw] text-[5vw] uppercase font-[Helvetica]'>Developer Available</h1>
      <h1 className=' font-semibold text-[#AAAAAA] text-[4.1vw] leading-[3.5vw] uppercase font-[Helvetica]'>To hire</h1>
    </div>
  )
}

export default TiltText
