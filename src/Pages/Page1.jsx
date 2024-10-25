import React, { useRef, useState } from 'react'
// import TiltText from '../Components/TiltText'
import PageBottom from '../Components/PageBottom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import TiltText from '../Components/TiltText';

function Page1() {
    const tiltRef= useRef(null);
    const [xvalue , setXValue]=useState(0);
    const [yvalue , setYValue]=useState(0);
    const mouseMoving=(e)=>{
        // setXValue(e.clientX/100);
        // setYValue(e.clientY/100);
        setXValue((e.clientX-tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/40)
        setYValue(-(e.clientY-tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)    
    }
    useGSAP(function(){
        gsap.to(tiltRef.current,{
            transform : `rotateX(${yvalue}deg) rotateY(${xvalue}deg)`,
            duration:5,
            ease:'sine.out'
        })
    },[xvalue,yvalue])


  return (
    <div onMouseMove={(e)=>{mouseMoving(e)}} className=' relative h-screen w-full bg-[#f6f4f4] p-7'>
      <div id='page-in' className=' relative h-full p-28 w-full shadow-xl shadow-gray-300 rounded-[50px] bg-[#1D1D1C]'>
        <TiltText tiltRef={tiltRef} />
        <PageBottom/>
      </div>
    </div>
  )
}

export default Page1
