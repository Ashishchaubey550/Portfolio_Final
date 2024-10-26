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
      stagger: 0.3,
      scrollTrigger: {
        trigger: "h2",
        start: "top 90%", // Adjust as needed
      },
    });
  }, []);
  return (
    <div className=' overflow-hidden ml-[150px] mt-[150px] flex items-start gap-4 px-40'>
      <h2 className='font-[Helvetica] text-[6vw] font-black uppercase text-[#666666] underline'>01.</h2>
      <div className='flex flex-col leading-none '>
        <h2 className=' font-[Helvetica] text-[6vw] font-black text-[#ABABAA]  uppercase'>The</h2>
        <h2 className='font-[Helvetica] text-[6vw] font-black -mt-1 text-[#ABABAA]  uppercase'>Work</h2>
      </div>
    </div>
  );
}

export default ProjectHeading;
