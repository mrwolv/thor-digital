import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TextAnimation from "../components/TextAnimation";
import SlidingText from "../components/InfiniteTextSlide";
import Capabilities from "../components/Capabilities";
import Featured from "../components/Featured/Featured";
import WhoAmI from "../components/WhoAmI";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";

const Outlet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [backendData, setBackendData] = useState([]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://localhost:1337/api/products/");
      const data = await res.json();
      setBackendData(data);
    };
    getData();
  }, []);
  console.log(backendData);
  return (
    <main className=" bg-[#210C6E] h-full  ">
      <Navbar isOpen={isOpen} toggle={toggleMenu} />
      <TextAnimation />
      <SlidingText />
      <Capabilities />
      <Featured text='Featured Post'/>
      <WhoAmI />
      <Testimonial backendData={backendData} />
      <Footer/>
    </main>
  );
};

export default Outlet;
