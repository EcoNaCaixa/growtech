'use client';

import Feature from "../components/feature/Feature";
import SofaIcon from "../components/icons";
import {World} from "../components/icons";
import {People} from "../components/icons";
import {Factory} from "../components/icons";

export default function VideoTrailer() {
  return <>
  <section id="Factory" className="container mx-auto py-8">
    <h2 className="text-center md:text-2xl">Discover our factory, <span className="text-[#2D4FB6]">where we optimize <br /> every process to ensure product excellence</span></h2>
    <div className="flex justify-center pt-8 w-full">
      <video src="/video-trailer-sofa.mp4" controls></video>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-5 p-8 pt-20 md:pt-24 gap-2 gap-y-8">
      <Feature svg={ <SofaIcon />} 
        title="117 Million" 
        content="ARR in 12 months" 
      />
      <Feature svg={ <World />} 
        title="40+" 
        content="Countries with patented sofa technology" 
      />
      <Feature svg={ <People />} 
        title="280" 
        content="Active employees" 
      />
      <Feature svg={ <Factory />} 
        title="4" 
        content="Industrial Plants" 
      />
      <Feature svg={ <World />} 
        title="3" 
        content="Continents present" 
      />
    </div>
    <div>    
    </div>
  </section>
  </>
}