import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import FeaturedProducts from "./Components/FeaturedProduct";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

export default function Home() {
  return ( 
    <div>
      
      <Navbar/>
      <HeroSection/>
      <FeaturedProducts/>
      <Footer/>
      
    </div>
  )
}