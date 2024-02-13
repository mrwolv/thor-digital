/* eslint-disable react/prop-types */
import { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SlidingText from "../components/InfiniteTextSlide";
import Capabilities from "../components/Capabilities";
import Featured from "../components/Featured/Featured";
import WhoAmI from "../components/WhoAmI";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";

const Outlet = ({data}) => {
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className=" bg-[#210C6E] h-full  ">
      <Navbar isOpen={isOpen} toggle={toggleMenu} />
      <HeroSection data={data} />
      <SlidingText />
      <Capabilities data={data} />
      <Featured text="Featured Post" data={data} />
      <WhoAmI  data={data}/>
      <Testimonial data={data}/>
      <Footer />
    </main>
  );
};

export default Outlet;
