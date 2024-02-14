/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { SiGmail } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";
import UseFetch from "../hooks/UseFetch";

const WhoAmI = () => {

const {data,loading} = UseFetch("http://localhost:1337/api/who-am-i?populate=*")
console.log(data)
  
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

  if(loading) return <p>....Loading</p>

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
          Who Am I
          </h1>
          <p className="md:text-[1.2rem] ">
           {data&&data?.text1}
          </p>
          <p className="md:text-[1.2rem]">
          {data&&data?.text2}
          </p>
          <div className="flex flex-col items-start  justify-between gap-3">
            <p className="flex items-center justify-between  gap-2">
              <SiGmail color="#562ABD" size={27} />
              <span className="text-center text-[1.3rem] text-[#562abd]">{data&&data?.gmail}</span>
            </p>
            <p className="flex items-center justify-between  gap-2">
              <FaTwitter color="#562ABD" size={27} />
              <span className="text-center text-[1.3rem] text-[#562abd]">{data&&data?.twitter}</span>
            </p>
            <p className="flex items-center justify-between  gap-2">
              <FaLinkedin color="#562ABD" size={27} />
              <span className="text-center text-[1.3rem] text-[#562abd]">{data&&data?.linkedin}</span>
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-20 text-gray-400" />
    </section>
  );
};

export default WhoAmI;
