/* eslint-disable react/no-unescaped-entities */

import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";

const Capabilities = () => {
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
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.to(".container", {
      scrollTrigger: {
        pin: ".container",
        end: "+=950",
        pinSpacing: true,
        scrub: true,
      },
    });

    gsap.fromTo(
      ".box1",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        duration: 1,
        scrollTrigger: {
          trigger: ".box1",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".box2",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        delay: 2.4,
        scrollTrigger: {
          trigger: ".box2",
          duration: 1.2,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".box3",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 3.8,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".box3",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );
    gsap.fromTo(
      ".box4",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: 5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".box4",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#562ABD] md:px-20 md:py-24 py-4 px-6 ">
      <div>
        <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold text-white our-text clip-your-needful-style   ">
          Capabilities
        </h1>
        <div className="grid grid-flow-row md:grid md:grid-cols-2 gap-10 py-10  container ">
          <div className="flex flex-col  justify-between gap-7 text-white box1">
            <span className="text-[1.2rem] font-bold">01</span>
            <h1 className="text-[1.6rem] font-bold">Planning & Strategies</h1>
            <span className="text-[1rem]">
              You can't afford to keep your marketing efforts basic. By
              understanding your goals, I will develop effective digital
              strategies which will give you an edge over your competition.
            </span>
            <hr className="h-2" />
          </div>
          <div className="flex flex-col  justify-between gap-7 text-white box2">
            <span className="text-[1.2rem] font-bold">01</span>
            <h1 className="text-[1.6rem] font-bold">Planning & Strategies</h1>
            <span className="text-[1rem]">
              You can't afford to keep your marketing efforts basic. By
              understanding your goals, I will develop effective digital
              strategies which will give you an edge over your competition.
            </span>
            <hr className="h-2" />
          </div>
          <div className="flex flex-col  justify-between gap-7 text-white box3">
            <span className="text-[1.2rem] font-bold">01</span>
            <h1 className="text-[1.6rem] font-bold">Planning & Strategies</h1>
            <span className="text-[1rem]">
              You can't afford to keep your marketing efforts basic. By
              understanding your goals, I will develop effective digital
              strategies which will give you an edge over your competition.
            </span>
            <hr className="h-2" />
          </div>
          <div className="flex flex-col  justify-between gap-7 text-white box4">
            <span className="text-[1.2rem] font-bold">01</span>
            <h1 className="text-[1.6rem] font-bold">Planning & Strategies</h1>
            <span className="text-[1rem]">
              You can't afford to keep your marketing efforts basic. By
              understanding your goals, I will develop effective digital
              strategies which will give you an edge over your competition.
            </span>
            <hr className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
