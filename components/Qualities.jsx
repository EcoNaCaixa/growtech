export default function Qualities() {
  return (
    <>
      <section className="container mx-auto md:p-8">
        <div>

          <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 pb-8">
            <video src="/qualities-video-1.mp4" autoPlay loop muted className="w-full"></video>
            <div className="p-4 flex flex-col justify-center items-start">
              <h2 className="text-left md:text-right w-full pb-6 text-lg md:text-3xl">
                Discover our factory,
                <span className="text-[#455072]"> 
                   where we optimize
                  <br /> every process to ensure product excellence
                </span>
              </h2>
              <p className="text-left md:text-right w-full">At every stage of production – from material selection to final delivery – each step is carefully designed to guarantee superior quality. We continuously invest in infrastructure, people, and technology to deliver the best experience, from click to delivery.</p>
            </div>
          </div>
            
          <div className="grid md:grid-cols-2 md:gap-4 grid-cols-1 ">
            <video src="/qualities-video-1.mp4" autoPlay loop muted className="w-full md:order-1"></video>
            <div className="p-4 flex flex-col justify-center items-start">
              <h2 className="text-left md:text-left w-full pb-6 text-lg md:text-3xl">
              Excellence in technology: 
                <span className="text-[#455072]"> 
                precisely 
                  <br />  engineered for outdoor perfection
                </span>
              </h2>
              <p className="text-left md:text-left w-full pb-8">Every Eco Flame piece is born from revolutionary manufacturing technology, where material innovation meets scientific comfort design. Our patented production process delivers uncompromising quality through:</p>
              <ul className="grid gap-4 pb-8">
                <li>✔ Advanced material algorithms selecting weather-resistant fabrics and adaptive cushioning</li>
                <li>✔ Digital precision systems ensuring 0.01mm structural tolerances</li>
                <li>✔ Pressure-mapped comfort engineering tested across 250+ body points</li>
              </ul>
              <p>he result: Outdoor furniture that outperforms conventional alternatives in durability, comfort, and aesthetic perfection</p>
            </div>
          </div>  

        </div>
      </section>
    </>
  );
}
