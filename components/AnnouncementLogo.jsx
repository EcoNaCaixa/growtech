import Image from "next/image";

export default function AnnouncementLogo(){
  return <>
  <section className="container mx-auto">
    <div className="flex justify-between md:py-12 md:px-8 py-5 pl-5 overflow-scroll md:overflow-auto gap-4">
      <Image src="/logos/logo-sofa.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-cooze.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-eco.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-sofa-la-caixa.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-little-duck.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-nouv.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-polidomi.webp" alt="Logo" width={85} height={85} />
      <Image src="/logos/logo-the-growing-sofa.webp" alt="Logo" width={85} height={85} />
    </div>
  </section>
  </>
}