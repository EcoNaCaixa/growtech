import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <section id="aboutMe" className="container mx-auto md:p-8 md:mb-16 grid gap-20">
        <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 ">
          <Image
            src="/founders.webp"
            alt="Founders of the company"
            width={904}
            height={704}
            className="w-full"
          />
          <div className="p-4 flex flex-col justify-center items-start">
            <h2 className="text-left md:text-left w-full pb-6 text-lg md:text-3xl">
              Our
              <span className="text-[#455072] pl-2">story</span>
            </h2>
            <p className="text-left md:text-left w-full pb-4">
              Founded by Rubens Stuque and Mateus Ferrareto, we evolved from a
              small workshop to an award-winning brand.
            </p>
            <p className="text-left md:text-left w-full">
              Eco Flame has grown while staying true to its core: the relentless
              pursuit of perfection in every detail. Our collections celebrate
              Brazilian diversity through designs ranging from modern to
              rustic-chic – elevating outdoor spaces into comfortable oases that
              enhance lifestyles and create meaningful moments.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 ">
          <video
            src="videos-about-us/Espuma-Growtech.mp4"
            autoPlay
            loop
            muted
            className="w-full"
          ></video>
          <div className="p-4 flex flex-col justify-center items-start">
            <h2 className="text-left md:text-left w-full pb-6 text-lg md:text-3xl">
              Our Exponential
              <span className="text-[#455072] pl-2">Growth Journey</span>
            </h2>
            <p className="text-left md:text-left w-full pb-4">
              In just 12 months, we transformed a startup with zero sales into
              an impressive success story. Beginning with a small workshop of 4
              seamstresses and a 100% e-commerce model, we’ve now achieved R$80
              million in sofa sales, establishing ourselves as Latin America’s
              largest boxed sofa manufacturer.
            </p>
            <p className="text-left md:text-left w-full">
              Our expansion included the strategic acquisition of 4 industrial
              plants, totaling over 30,000 m² of production capacity.
              Simultaneously, we scaled operations into Europe, Argentina,
              India, and China—all while maintaining our agility and quality
              standards. Today, we’re powered by a dedicated team of 280
              professionals.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-16 grid-cols-1 ">
          <video
            src="videos-about-us/Prensa-Growtech.mp4"
            autoPlay
            loop
            muted
            className="w-full"
          ></video>
          <div className="p-4 flex flex-col justify-center items-start">
            <h2 className="text-left md:text-left w-full pb-6 text-lg md:text-3xl">
              Building the
              <span className="text-[#455072] pl-2">Future</span>
            </h2>
            <p className="text-left md:text-left w-full pb-4">
              We command the entire sofa production chain – from chemical
              material development to textile manufacturing, assembly, and final
              delivery. This complete vertical integration allows us to
              guarantee quality, efficiency, and innovation at every stage.
            </p>
            <p className="text-left md:text-left w-full">
              We've established dedicated teams for expansion, engineering,
              legal, e-commerce, and sales, laying the foundation for our next
              chapter of global growth. This strategic structure positions us to
              scale intelligently while maintaining our core standards of
              excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
