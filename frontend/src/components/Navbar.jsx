/* eslint-disable react/prop-types */

import { useState } from "react";
import Navmodal from "./Navmodal";
import { Link } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";

function Navbar({ navbarColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const { data, loading } = UseFetch( 'https://thordigital.onrender.com/api/header?populate=*');



  if (loading) return <p>....Loading...</p>;

  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full bg-[#6ed5a6] transition ease transform duration-300`;

  return (
    <nav
      className={`flex items-center justify-between text-white  font-semibold   py-4 px-6 md:px-20 md:py-8 ${
        navbarColor ? "bg-white" : "bg-[#210C6E] "
      }`}
    >
      <h1
        className={`text-[1.7rem] font-extrabold cursor-pointer  ${
          navbarColor ? "text-black  " : "text-white "
        } `}
      >
        <Link to={"/"} >{data?.title}</Link>
      </h1>
      <button
        className="flex flex-col h-12 w-12   justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-100 group-hover:opacity-100"
              : "opacity-100 group-hover:opacity-100"
          }`}
        />
      </button>
      {isOpen && <Navmodal onClose={() => setIsOpen(false)}  data={data}/>}
    </nav>
  );
}

export default Navbar;
