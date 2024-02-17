/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import UseFetch from "../hooks/UseFetch";

const HeroSection = () => {
  const { data, loading } = UseFetch(
    "http://localhost:1337/api/hero-section?populate=*"
  );

  useEffect(() => {
    const splitText = (text, className) => {
      const words = text.split(" ");
      const spans = words.map(
        (word, _index) => `<span class="${className}">${word}</span>`
      );
      return spans.join(" ");
    };

    /*Animating the text of header one and split the text into span to  */

    const animateText = (element, stagger = 0.2) => {
      gsap.from(element.querySelectorAll(".animated-word"), {
        opacity: 0,
        y: 100,
        duration: 0.9,
        delay: 0.4,
        ease: "power2.inOut",
        stagger: stagger,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    };

    /* Animating the paragrph of the text one by one lines */

    const animateLines = (element) => {
      const splitType = new SplitType(element, { types: "lines" });
      const lines = splitType.lines;

      gsap.from(lines, {
        opacity: 0,
        y: 100,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.2,
        delay: 1.6,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    };

    const h1Element = document.querySelector(".custom-text");
    h1Element.innerHTML = splitText(
      // "Discover the next stage of a founder’s story",
      ` ${data && data?.Title}`,
      "animated-word"
    );

    animateText(h1Element);
    animateLines(".para-text");
  });

  return (
    <>
      <div className="px-6 py-10 md:p-20 flex flex-col md:flex-row md:justify-between md:items-center text-white ">
        <h1 className="md:text-[4.8rem] text-left text-[2.5rem] font-extrabold custom-text clip-your-needful-style md:w-[40rem]">
          {/* The text will be dynamically added here */}
        </h1>
        <p className="md:text-[1.4rem] mt-20 md:ml-10  md:w-[34rem] para-text clip-your-needful-style ">
          {data && data?.Description}
        </p>
      </div>
    </>
  );
};

export default HeroSection;
