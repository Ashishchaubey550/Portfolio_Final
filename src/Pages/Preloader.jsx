import React, { useEffect } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';

function Preloader() {
    useGSAP(function(){
        const tl = gsap.timeline();
        // tl.to(".flying",{
        //     opacity:1,
        //     y:-1000,
        //     duration: 3,
        // })
        // tl.to(".flying", {
        //     opacity:1,
        //     y: -100,
        //     duration: 3,
        // })
        tl.to(".flying", {      
            rotate: 90,
            duration: 2,
            ease: "power1.in",
        });
        tl.to(".flying",{
            x:1500,
            duration:3,
            ease:"power1.in",
            opacity:0
        })
        tl.to("#Preloader",{
            x:1500,
            duration:3,
            ease:"power1.in",
            onComplete: () => {
                document.getElementById("Preloader").style.display = "none"; // Set display to none after animation
            },
        })
    })
    return (
        <div id='Preloader' className=' bg-[#1D1D1C] flex justify-center items-center absolute z-40 w-full h-full'>
            <i className="ri-plane-fill text-center flying text-[50px]"></i>
        </div>
    );
}

export default Preloader;
