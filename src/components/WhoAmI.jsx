/* eslint-disable react/no-unescaped-entities */
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

const WhoAmI = () => {
  
  useEffect(() => {
    const ourText = new SplitType('.text-head', { types: 'chars' });
    const chars = ourText.chars;

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      chars,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        ease: 'power2.inOut',
        
        scrollTrigger: {
          trigger: '.text-head',
          start: 'top center',
          end: 'bottom center',
          
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);
  return (
    <section className="bg-white md:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-20">
        <img
          src="/person.jpg"
          alt="person image"
          className="w-full rounded-2xl relative p-3 md:p-0"
        />

        <img
          
          src="/image.jpg"
          alt=""
          className=" w-32 md:w-0 p-2 md:p-0 rounded-2xl md:left-[28%]  md:absolute md:translate-y-3/4 md:translate-x-1/2 
          absolute right-[30%]  translate-x-1/2 -translate-y-1/3"
         
        />

        <div className="p-4  flex flex-col md:ml-32 ml-0 gap-6 justify-between">
          <h1 className="text-[2.1rem] md:text-[3.4rem] font-extrabold clip-your-needful-style text-head ">
            Who Am I ?{" "}
          </h1>
          <p className="md:text-[1.2rem] ">
            I'm a digital enthusiast who enjoys technology and marketing. I
            specialise in digital marketing, no-code, automation, and Webflow.
            I’m passionate about what I do - all while having a lot of fun along
            the way.
          </p>
          <p className="md:text-[1.2rem]">
            I’m committed to being the go-to for digital innovation in the tech
            and marketing space. I work with businesses and founders who are
            seeking better ways to engage their customers and achieve their
            goals. My goal is simple: to consistently produce high quality work
            which accelerates client’s growth and takes them to new heights.
          </p>
          <div className="flex flex-col items-start  justify-between gap-3">
            <p className="flex items-center justify-between  gap-2">
              <SiGmail color="#562ABD" size={24} />
              <span className="text-center text-[1.1rem]">Email.com</span>
            </p>
            <p className="flex items-center justify-between  gap-2">
              <FaTwitter color="#562ABD" size={24} />
              <span className="text-center text-[1.1rem]">Email.com</span>
            </p>
            <p className="flex items-center justify-between  gap-2">
              <FaLinkedin color="#562ABD" size={24} />
              <span className="text-center text-[1.1rem]">Email.com</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-20 text-gray-400" />
    </section>
  );
};

export default WhoAmI;
