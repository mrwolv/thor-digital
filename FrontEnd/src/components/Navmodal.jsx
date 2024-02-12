/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navmodal = ({ onClose, data }) => {
  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item");
    gsap.registerPlugin(ScrollTrigger);

    navItems.forEach((item) => {
      const underline = item.querySelector(".hover-underline");

      const underlineTween = gsap.to(underline, {
        scaleX: 0,
        transformOrigin: "bottom left",
        duration: 0.4,
        ease: "power2.out",
      });

      item.addEventListener("mouseenter", () => {
        underlineTween.reverse();
      });

      item.addEventListener("mouseleave", () => {
        underlineTween.play();
      });
    });

    gsap.fromTo(
      ".modal-container",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="fixed top-[15%] right-[3%] bg-[#210C6E] md:px-5 px-3  md:py-3 opacity-85 z-10 h-[260px] w-[170px] md:w-[220px] shadow-2xl rounded-md modal-container">
      <ul className="mt-4 text-white text-[1.2rem] flex flex-col justify-center gap-5">
        <li className="nav-item hover:cursor-pointer">
          {data?.attributes?.about}
          <span
            className="hover-underline"
            style={{
              display: "block",
              height: "2px",
              backgroundColor: "#6ED5A6",
            }}
          ></span>
        </li>
        <li className="nav-item hover:cursor-pointer">
          {data?.attributes?.capabilities}
          <span
            className="hover-underline"
            style={{
              display: "block",
              height: "2px",
              backgroundColor: "#6ED5A6",
            }}
          ></span>
        </li>
        <li className="nav-item relative cursor-pointer group ">
          <Link to="/blog">{data?.attributes?.blog}</Link>
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2  rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {" "}
            <FaExternalLinkAlt size={13} className="mb-2.5 text-gray-400" />
          </span>
          <span
            className="hover-underline"
            style={{
              display: "block",
              height: "2px",
              backgroundColor: "#6ED5A6",
            }}
          ></span>
        </li>

        <button className="mt-4 bg-[#6ED5A6] text-[#210C6E] p-2  md:px-1 md:py-2 rounded-md hover:bg-[#5FAC9B] text-[1.1rem] font-bold">
          Work with me
        </button>
      </ul>
    </div>
  );
};

export default Navmodal;
