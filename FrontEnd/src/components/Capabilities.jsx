/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Capabilities = ({ data }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ourText = new SplitType(".our-text", { types: "chars" });
    const chars = ourText.chars;
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
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: chars,
          start: "top top",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(".container", {
      scrollTrigger: {
        pin: ".container",
        end: "+=750",
        pinSpacing: true,
        scrub: true,
      },
    });

    // Sequential animation of boxes
    gsap.utils.toArray(".box").forEach((box, index) => {
      gsap.fromTo(
        box,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay:1.4*index,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: box,
            start: "top bottom", // Adjust start point for each box animation
            end: "bottom -200%", // Adjust end point for each box animation
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [data?.Capabilities]);

  return (
    <div className="bg-[#562ABD] md:px-20 md:py-24 py-4 px-6 ">
      <div>
        <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold text-white our-text clip-your-needful-style   ">
          Capabilities
        </h1>
        <div className="grid grid-flow-row md:grid md:grid-cols-2 gap-10 py-10  container  ">
          {data && data.Capabilities.map((item) => (
            <div
              className="flex flex-col  justify-between gap-7 text-white box"
              key={item.capNum}
            >
              <span className="text-[1.2rem] font-bold">0{item.capNum}</span>
              <h1 className="text-[1.6rem] font-bold">{item.capTitle}</h1>
              <span className="text-[1rem]">{item.capDescription}</span>
              <hr className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;