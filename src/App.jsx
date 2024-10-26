import React, { useEffect } from 'react';
import Page1 from './Pages/Page1';
import Header from './Components/Header';
import Preloader from './Pages/Preloader';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Projects from './Pages/Projects';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(function(){
    const tl = gsap.timeline();

  })
  return (
    
    <div id="main">
      {/* <Preloader/> */}
      <Header />
      <div id="page1">
        <Page1 />
      </div>
      <div id="page2">
        <Projects/>
      </div>
      <div id="page3">

      </div>
    </div>
  );
}

export default App;
