import ImageCursol from "./ImageCursol";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import SplitType from "split-type";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Featured = ({text}) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    const ourText = new SplitType(".our-text", { types: "chars" });
    const chars = ourText.chars;

    gsap.registerPlugin(ScrollTrigger);

    if (inView) {
      gsap.fromTo(
        chars,
        {
          y: 100,
          opacity: 0,
          clipPath: "inset(0 0 100% 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.1,
          ease: "power2.inOut",
          stagger: 0.1,
        }
      );
    }
  }, [inView]);

  return (
    <section className="md:p-20 py-8 bg-[#F4F3F6] px-6 md:py-10">
      <h1
        className="md:text-[3.8rem] text-[1.6rem] font-extrabold clip-your-needful-style our-text"
        ref={ref}
      >
        {text}
      </h1>
      <Link to="/blog">
        <Button text="View all Post" hover={true} />
      </Link>
      <div className="mt-6 py-5">
      <ImageCursol />
      </div>
    </section>
  );
};

export default Featured;
