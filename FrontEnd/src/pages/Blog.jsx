import  { useEffect } from "react";
import Navbar from "../components/Navbar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BlogGallery from "../components/blogcomponents/BlogGallery";
import NewsLetter from "../components/blogcomponents/NewsLetter";
import Popularpost from "../components/blogcomponents/Popularpost";
import Footer from "../components/Footer";

const Blog = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".blog",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".blog",
          start: "top center",
          end: "top center",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className=" ">
      <Navbar />
      <div className=" bg-[#210C6E]  px-6 py-10 md:p-20 h-[18rem] md:h-[45rem] text-white relative    ">
        <h1 className="md:text-[4rem] text-[2.8rem] font-black blog clip-your-needful-style">
          <strong>Blog</strong>
        </h1>
      </div>
      <div className=" bg-white ">
        <div className="  mr-4 md:mr-0 md:px-16 absolute top-[42%] md:top-[70%] left-4  md:left-5 md:right-5 flex flex-col gap-5  ">
          <img
            src="/creator.jpg"
            alt="creator jpg"
            className=" h-[15rem] md:h-[40rem] md:w-full md:object-center  rounded-2xl"
          />
          <h1 className="  text-[1.3rem] md:text-[2.2rem] font-semibold text-black">
            Quality or Quantity? Finding the Right Balance for Creator Success
          </h1>
          <p className="text-[1.1rem ] md:text-[1.3rem] text-gray-400 flex items-center  gap-2  ">
            <span className="uppercase">thor solutions</span>
            <span className="h-2 w-2 rounded-full bg-gray-400 "></span>

            <span className="uppercase "> feb 2024</span>
          </p>
        </div>
        <BlogGallery />
        <NewsLetter />
        <Popularpost />
        <Footer />
      </div>
    </section>
  );
};

export default Blog;
