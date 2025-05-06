'use client'

export default function HeroSection(){
  return(
    <section >
      <div className="relative w-full">
        <video src="/video-fabrica-hero.mp4" 
          autoPlay
          loop
          muted
          className="w-full"
        ></video>
        <div className="bg-black/50 w-full h-full absolute top-0">  
          <div className="container p-2 text-center mx-auto absolute z-2 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-xs md:text-lg uppercase pb-2">Technology to boost the furniture market worldwide.</h2>
            <h1 className="italic text-2xl md:text-5xl md:leading-16">We are the future of the <br /> furniture market with technology</h1>
          </div>
        </div>
      </div>

    </section>
  )
}