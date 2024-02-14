import ImageCursol from "./ImageCursol";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import Button from "../Button";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Featured = ({ text, data }) => {
  useEffect(() => {
    const ourText = new SplitType(".our-text", { types: "chars" });
    const chars = ourText.chars;

    gsap.registerPlugin(ScrollTrigger);

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".our-text",
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
          pin: true, // Pin the element during animation
        },
      })
      .fromTo(
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
        }
      );
  }, []);

  return (
    <section className="md:p-20   py-8 bg-[#F4F3F6] px-6 md:py-10">
      <h1 className="md:text-[3.8rem]  text-[1.6rem]  font-extrabold clip-your-needful-style our-text">
        {text}
      </h1>
      <Link to="/blog">
        <Button text="View all Post" hover={true} />
      </Link>

      <div className="mt-6 py-5   ">
        <ImageCursol  />
      </div>
    </section>
  );
};

export default Featured;
