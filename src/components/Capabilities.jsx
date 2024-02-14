/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import UseFetch from "../hooks/UseFetch";

const Capabilities = () => {
  const { data, loading } = UseFetch(
    "http://localhost:1337/api/capabilitie?populate=*"
  );
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
        end: "+=700",
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
          delay: 1.4 * index,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: box,
            start: "top bottom", // Adjust start point for each box animation
            end: "bottom bottom ", // Adjust end point for each box animation
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, [data?.Capabilities]);

  if (loading) return <p> this is capabilities ....loading </p>;

  return (
    <div className="bg-[#562ABD] md:px-20 md:py-24 py-4 px-6  ">
      <div>
        <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold text-white our-text clip-your-needful-style   ">
          Capabilities
        </h1>
        <div className="grid grid-flow-row md:grid md:grid-cols-2 gap-10 py-10  container   ">
          {data &&
            data?.Capabilities.map((item) => (
              <div
                className="flex flex-col  justify-between gap-7 text-white box"
                key={item.capNum}
              >
                <span className="text-[1.2rem] font-bold">0{item.id}</span>
                <h1 className="text-[1.6rem] font-bold">{item.Title}</h1>
                <span className="text-[1rem]">{item.Description}</span>
                <hr className="h-2" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
