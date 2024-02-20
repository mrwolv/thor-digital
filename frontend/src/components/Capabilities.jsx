import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import SplitType from "split-type";
import UseFetch from "../hooks/UseFetch";

const Capabilities = () => {
  const { data, loading } = UseFetch(
    "https://thordigital.onrender.com/api/capabilitie?populate=*"
  );

  const containerRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !triggered) {
      gsap.registerPlugin("ScrollTrigger");

      // Text animation
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
        }
      );

      // Sequential animation of boxes when they come into view
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
              start: "top 80%", // Adjust this value as needed for when you want the animation to start
              toggleActions: "play none none none",
            },
          }
        );
      });

      setTriggered(true);
    }
  }, [inView, triggered]);

  if (loading) return <p>Capabilities loading...</p>;

  return (
    <div className="bg-[#562ABD] md:px-20 md:py-24 py-4 px-6" >
      <div className="container" ref={containerRef} id="capabilities">
        <h1
          className="text-[2.5rem] md:text-[3rem] font-extrabold text-white our-text clip-your-needful-style"
          ref={ref}
        >
          Capabilities
        </h1>
        <div className="grid grid-flow-row md:grid md:grid-cols-2 gap-10 py-10">
          {data &&
            data?.Capabilities.map((item) => (
              <div
                className="flex flex-col justify-between gap-7 text-white box"
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
