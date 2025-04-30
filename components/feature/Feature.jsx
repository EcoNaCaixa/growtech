import Image from "next/image";

export default function Feature({ svg, title, content }) {
  return (
    <div className="flex flex-col items-center justify-start text-center ">
      <div className="pb-4">{svg}</div>
      <h3 className="text-lg md:text-3xl font-regular mb-2">{title}</h3>
      <p className= "text-sm">{content}</p>
    </div>
  );
}