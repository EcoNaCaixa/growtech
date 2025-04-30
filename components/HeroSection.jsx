export default function HeroSection(){
  return(
    <section>
      <div className="relative">
        <video src="/video-fabrica-hero.mp4" 
          autoPlay
          loop
          muted
        ></video>
        <div className="bg-black/30">  
          <div className="container p-2 text-center absolute z-2 top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white">
            <h2 className="text-xs md:text-lg uppercase pb-2">Technology to boost the furniture market worldwide.</h2>
            <h1 className="italic text-2xl md:text-5xl md:leading-16">We are the future of the furniture market with technology</h1>
          </div>
        </div>
      </div>

    </section>
  )
}