import HeroSection from "../../components/HeroSection";
import AnnouncementLogo from "../../components/AnnouncementLogo";
import VideoTrailer from "../../components/VideoTrailer";
import Qualities from "../../components/Qualities";

export default function Home() {
  return (<>
    < HeroSection />
    <AnnouncementLogo />
    <VideoTrailer />
    <Qualities />
    <h1>Olá Mundos</h1>
  </>
  );
}
