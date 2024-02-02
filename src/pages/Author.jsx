/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { SiGmail } from "react-icons/si";
import Footer from "../components/Footer";

const Author = () => {
  return (
    <>
      <Navbar navbarColor={true} />
      <section className="md:px-20 md:py-5 px-6 py-10 text-[1.2rem]">
        <h1 className="md:text-[3.4rem] font-extrabold">
          A little bit more about me...
        </h1>
        <p className="mt-7 ">
          Diving headfirst into the digital realm, I've always been drawn to the
          art of merging technology with marketing, crafting experiences that
          don't just catch the eye, but truly engage the user.
        </p>
        <p className="mt-7 ">
          My path in digital marketing began academically and it's grown through
          real work in the pharmaceutical world, the fast-paced tech industry,
          and the creative challenges of working with online content creators.
        </p>
        <p className="mt-7 ">
          In the pharmaceutical sector, I had my first taste of real impact.
          Here, I was more than just a strategist; I was a doer. Working on two
          major brands, leading the development of a healthcare professional
          (HCP) portal and turning concepts into tangible, valuable resources.
          The role of digital marketing consultant was multifaceted, involving
          meticulous planning and coordination to weave together CRM and
          marketing strategies, while complying in highly regulated field. This
          wasn't just about ideation; it was about bringing ideas to life, step
          by step, from the initial brainstorm to the final integration.
        </p>
        <div className="flex flex-col items-start  justify-between gap-4 mt-7">
            <p className="flex items-center justify-between  gap-3 text-[#562ABD] hover:text-[#210C6E]">
              <SiGmail size={30} />
              <span className="text-center text-[1.1rem]">singhdepu566@gmail.com</span>
            </p>
            <p className="flex items-center justify-between  gap-3 text-[#562ABD] hover:text-[#210C6E]">
              <FaTwitter  size={30} className=""/>
              <span className="text-center text-[1.1rem]">singhdepu</span>
            </p>
            <p className="flex items-center justify-between  gap-3 text-[#562ABD] hover:text-[#210C6E]">
              <FaLinkedin  size={30} />
              <span className="text-center text-[1.1rem]">deependrasingh</span>
            </p>
          </div>
      </section>
      <Footer/>
    </>
  );
};

export default Author;
