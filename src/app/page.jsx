import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnnouncementLogo from "../../components/AnnouncementLogo";
import VideoTrailer from "../../components/VideoTrailer";
import Qualities from "../../components/Qualities";
import AboutUs  from "../../components/AboutUs";
import Form from "../../components/Form";  

export default function Home() {
  return (<>
    <HeroSection />
    <AnnouncementLogo />
    <VideoTrailer />
    <Qualities />
    <Image src="/banner-growtech.webp" alt="banner-growtech" width={1444} height={336} className="w-full py-16"/>
    <AboutUs />
    <Form />
    <p className="text-center p-16">© Growtech  | All rights reserved.</p>
  </>
  );
}
