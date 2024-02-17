import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";


const Footer = () => {

 

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to create a SplitType instance and animate each word
    
      const splitType = new SplitType('text-split', { types: "words" });
      const words = splitType.words;

      gsap.from(words, {
        opacity: 0,
        y: 100,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: 'text-split',
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
  
  }, []);

  return (
    <footer className="md:px-20 md:py-24 py-4 px-6 bg-[#210C6E] ">
      <h1 className="flex flex-wrap md:flex-nowrap md:flex-row md:items-center gap-2 mt-6 md:mt-0 text-white text-[1.5rem] md:text-[2rem] font-extrabold text-split clip-your-needful-style">
        <span>Ready </span>
        <span> to </span>
        <span> catalyse </span>
        <span> your </span>
        <span> next </span>
        <span> breakthrough? </span>
      </h1>
      <button className="mt-7 bg-[#6ED5A6]  text-[#210C6E] px-4 py-2.5 rounded-md hover:bg-[#5FAC9B] text-[1.1rem] font-bold ">
        Work with me
      </button>
      <div className="mt-16 flex flex-col gap-10 md:flex-row  md:justify-between ">
        <div className=" flex flex-col gap-2 text-[#9D94BF] text-[1.1rem] font-medium  ">
          <span className="text-white text-[1.4rem] font-semibold ">
            Contact
          </span>
          <span className="hover:text-white text-[1.1rem]">
            hello@gmail.com
          </span>
          <span className="uppercase hover:text-white text-[1.1rem]">
            M-F 10 AM-6Pm GMT
          </span>
          <span className="hover:text-white text-[1.1rem]">S/S NOT ONLINE</span>
        </div>

        <div className="flex flex-col gap-2 text-[#9D94BF] text-[1.1rem] font-medium ">
          <span className="text-white text-[1.4rem] font-semibold ">Site</span>
          <span className="hover:text-white text-[1.1rem]">Home</span>
          <span className=" hover:text-white text-[1.1rem]">About</span>
          <span className="hover:text-white text-[1.1rem]">Capabilities</span>
          <span className="hover:text-white text-[1.1rem]">Blog</span>
        </div>

        <div className=" flex flex-col gap-2 text-[#9D94BF] text-[1.1rem] font-medium ">
          <span className="text-white text-[1.4rem] font-semibold ">
            Social
          </span>
          <span className="hover:text-white text-[1.1rem]">Twitter</span>
          <span className="hover:text-white text-[1.1rem]">Facebook</span>
          <span className="hover:text-white text-[1.1rem]">Linkedin</span>
          <span className="hover:text-white text-[1.1rem]">Medium</span>
        </div>

        <div className=" flex flex-col gap-2 text-[#9D94BF] text-[1.1rem] font-medium ">
          <span className="text-white text-[1.4rem] font-semibold ">
            Newsletter
          </span>
          <span className=" md:w-[450px] text-[1.3rem] ">
            If you like what you’re reading here and want to get a post in your
            inbox before it’s posted here, subscribe below.
          </span>
          <div className="mt-6 flex flex-col md:flex-row items-center gap-2 md:gap-0">
            <input
              type="text"
              className="bg-transparent border border-gray-400 px-6 text-white  w-full text-left py-3.5 rounded-sm"
              placeholder="Enter Address"
              required
            />
            <button className="bg-white rounded-sm px-4 py-2.5 md:py-3.5 md:w-36 w-full  text-[#210C6E] font-bold text-[1.1rem]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col  justify-between gap-4 md:flex-row md:justify-between text-white   ">
        <p className="text-[1.1rem]">
          Designed In House
         
        </p>
        <p className="capitalize">Copyright &copy; 2024 Thor Solutions, a heratech ltd brand</p>
      </div>
    </footer>
  );
};

export default Footer;
