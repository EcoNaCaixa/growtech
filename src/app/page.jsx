import Image from "next/image";
import HeroSection from "../../components/HeroSection";
import AnnouncementLogo from "../../components/AnnouncementLogo";
import VideoTrailer from "../../components/VideoTrailer";
import Qualities from "../../components/Qualities";
import AboutUs  from "../../components/AboutUs";  

export default function Home() {
  return (<>
    <HeroSection />
    <AnnouncementLogo />
    <VideoTrailer />
    <Qualities />
    <Image src="/banner-growtech.webp" alt="banner-growtech" width={1444} height={336} className="w-full py-8"/>
    <AboutUs />
  </>
  );
}
