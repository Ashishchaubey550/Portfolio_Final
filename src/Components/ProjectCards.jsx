import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function ProjectCards() {
  const imgRef1 = useRef(null);
  const imgRef2 = useRef(null);
  useEffect(() => {
    gsap.from(".animation_zone", {
      y:-100,
      opacity: 0,
      duration: 0.5, // Reduced duration for smoother transitions
      delay: 0.3, // Slight delay before the entire animation starts
      stagger: 0.3, // Reduced stagger to prevent overly long waits between animations
      ease: "power2.out",
      scrollTrigger: {
        markers: true, // Debugging markers; remove in production
        trigger: ".animation_zone",
        start: "top 60%", // Adjusted to match your layout better
        end: "bottom 10%",
        toggleActions: "play pause resume reset",
      },
    });
  }, []); 
  useEffect(() => {
    const imgElement1 = imgRef1.current;
    const imgElement2 = imgRef2.current;

    const hoverIn = (imgElement) => {
      gsap.to(imgElement, { scale: 1.03, duration: 0.3, ease: "power1.inOut", filter: "grayscale(0%)" });
    };

    const hoverOut = (imgElement) => {
      gsap.to(imgElement, { scale: 1, duration: 0.3, ease: "power1.inOut", filter: "grayscale(100%)" });
    };

    imgElement1.addEventListener('mouseenter', () => hoverIn(imgElement1));
    imgElement1.addEventListener('mouseleave', () => hoverOut(imgElement1));
    imgElement2.addEventListener('mouseenter', () => hoverIn(imgElement2));
    imgElement2.addEventListener('mouseleave', () => hoverOut(imgElement2));

    return () => {
      imgElement1.removeEventListener('mouseenter', () => hoverIn(imgElement1));
      imgElement1.removeEventListener('mouseleave', () => hoverOut(imgElement1));
      imgElement2.removeEventListener('mouseenter', () => hoverIn(imgElement2));
      imgElement2.removeEventListener('mouseleave', () => hoverOut(imgElement2));
    };
  }, []);

  return (
    <div className='overflow-hidden h-auto flex justify-center items-center gap-[150px]'>
      <div className='animation_zone px-10 py-8 w-fit'>
        <div ref={imgRef1} id='project_img' className='w-fit'>
          <img
            src="https://images.unsplash.com/photo-1729205940313-ec6f3ccbbc63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            className='h-[300px] w-[500px] object-cover grayscale'
            alt="Nike Studio:NYC"
          />
        </div>
        <div className='text-[#AAAAAA] w-[500px]'>
          <h3 className='font-[Helvetica] font-semibold text-[2.5vw]'>Nike Studio:NYC</h3>
          <h3 className='font-[Helvetica] font-semibold text-[1vw]'>
            An interactive web experience that serves as a virtual venue for the Nike community to connect and co-create with athletes, creatives, and more.
          </h3>
        </div>
        <div className='text-[#AAAAAA] flex gap-2'>
          <a className='font-[Helvetica] font-semibold text-[1.3vw]'>Learn more</a>
          <i className="font-[Helvetica] font-semibold text-[1.3vw] ri-arrow-right-line"></i>
        </div>
      </div>
      <div className='animation_zone w-fit p-2 mt-[150px]'>
        <div ref={imgRef2} id='project_img' className='w-fit'>
          <img
            src="https://images.unsplash.com/photo-1729205940313-ec6f3ccbbc63?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            className='h-[300px] w-[500px] object-cover grayscale'
            alt="Nike Studio:NYC"
          />
        </div>
        <div className='text-[#AAAAAA] w-[500px]'>
          <h3 className='font-[Helvetica] font-semibold text-[2.5vw]'>Nike Studio:NYC</h3>
          <h3 className='font-[Helvetica] font-semibold text-[1vw]'>
            An interactive web experience that serves as a virtual venue for the Nike community to connect and co-create with athletes, creatives, and more.
          </h3>
        </div>
        <div className='text-[#AAAAAA] flex gap-2'>
          <a className='font-[Helvetica] font-semibold text-[1.3vw]'>Learn more</a>
          <i className="font-[Helvetica] font-semibold text-[1.3vw] ri-arrow-right-line"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
