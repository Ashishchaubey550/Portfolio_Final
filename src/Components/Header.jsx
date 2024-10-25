import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

function Header() {
    useGSAP(function(){
        gsap.to("button", {
            x:90,
            duration: 2,
            ease: 'circ.in',
            delay:2,
            repeat: Infinity, // Repeat the shake
            yoyo: true // Reverse the animation back
        });
    })



  return (
    <nav className="font-[Helvetica] z-10 fixed flex justify-between items-center h-[10vh] w-full text-[1.8vh] uppercase text-[#AAABAB]   py-[60px] px-[90px]">
      <div className="flex gap-6 font-bold">
        <a href="" className="hover:text-[#F5F5F5]">Ashish</a>
      </div>
      <div className="flex gap-6 font-bold justify-center">
        <a href="" className="hover:text-[#F5F5F5]">Quick Info</a>
        <a href="" className="hover:text-[#F5F5F5]">Works</a>
      </div>
      <div className="flex gap-6 font-bold">
        <a href="" className="hover:text-[#F5F5F5]">Contact</a>
      </div>
      <div className='z-10 p-10'>
      <button className= 'font-[Helvetica] bg-black px-8 py-2 rounded-full font-bold text-[1.8vh] border-4 hover:bg-[#AAABAB] hover:text-black'>Hire Me</button>
      </div>
    </nav>
  );
}

export default Header;
