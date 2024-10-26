import React from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
function ProjectHeading() {
  useGSAP(() => {
    gsap.from("h2", {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "power2.out",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "h2",
        start: "top 90%", // Adjust as needed
      },
    });
  }, []);
  return (
    <>
    <div className=' overflow-hidden mt-[150px] ml-[180px] p-10 flex  gap-4'>
      <h2 className='font-[Helvetica] text-[6vw] font-black uppercase underline text-[#666666]'>01.</h2>
      <div className='flex flex-col leading-none '>
        <h2 className=' font-[Helvetica] text-[6vw] font-black text-[#ABABAA]  uppercase'>The</h2>
        <h2 className='font-[Helvetica] text-[6vw] font-black -mt-1 text-[#ABABAA]  uppercase'>Work</h2>
      </div>
    </div>
    <div className=' overflow-hidden px-10 py-10 flex justify-center ml-[120px] flex-col'>
      <h2 className='font-[Helvetica] text-[2.5vw] font-semibold text-right leading-none text-[#ABABAA] '>The following is a collection of web experiences </h2>
      <h2 className='font-[Helvetica] text-[2.5vw] text-right font-semibold text-[#ABABAA] '> that I’ve had the pleasure of building.</h2>
    </div>
    </>

  );
}

export default ProjectHeading;
