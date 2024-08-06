import About from "@/components/Home/About";
import Comments from "@/components/Home/Comments";
import End from "@/components/Home/End";
import HeroSection from "@/components/Home/HeroSection";
import Navbar from "@/components/Home/Navbar";
import Service from "@/components/Home/Service";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Service/>
    <Comments buttonLink={false}/>
    <End/>
    </>
  );
}
