import { useEffect, useState } from "react";
import { testimonial } from "../constants/featured";
import { Swiper, SwiperSlide } from "swiper/react";
import gsap from "gsap";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Testimonial = ({data}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Function to create a SplitType instance and animate each word
    const animateWords = (element) => {
      const splitType = new SplitType(element, { types: "words" });
      const words = splitType.words;

      gsap.from(words, {
        opacity: 0,
        y: 100,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    };

    // Function to animate each line
    const animateLines = (element) => {
      const splitType = new SplitType(element, { types: "lines" });
      const lines = splitType.lines;

      gsap.from(lines, {
        opacity: 0,
        y: 100,
        duration: 0.9,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none none",
        },
      });
    };

    // Animate words for the first part
    animateWords(".text-split > p");

    // Animate line for the second part
    animateLines(".text-split > span");
    
    gsap.fromTo('.img', 
    
    {
      opacity:0,
      y:100,
      clipPath:' polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);'
    },{
      y:0,
      opacity:1,
      duration: 0.9,
      clipPath:'polygon(0 100%, 100% 100%, 100% 0, 0 0)',
      ease: "power2.inOut",
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.img',
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
      },
    }
    
    );

  
  

  }, []);

  return (
    <section className="bg-white px-2  md:px-20 md:py-0 py-10 ">
      <h1 className="flex flex-col justify-center text-[1.5rem] md:text-[3.2rem] font-black ">
        <p className="flex items-center gap-3 text-split clip-your-needful-style ">
          <span className=""> Take </span>
          <span className=""> their </span>
          <span className=""> words,</span>
          <span className=""> Client love</span>
        </p>
        <p className="flex items-center gap-3 text-split clip-your-needful-style">
          <span>working</span>
          <span> with </span>
          <span> me.</span>
         
        </p>
      </h1>
      {isMobile ? <TestimonialSlide data={data} /> : <DesktopTestimonial data={data} />}
    </section>
  );
};

export default Testimonial;

export function DesktopTestimonial({data}) {
  return (
    <div className="flex items-center justify-between gap-2">
      {data&&data.Testimonial?.map((item) => (
        <div
          className={`${
            item.id === 1
              ? "md:mt-[10rem]"
              : item.id === 2
              ? "md:-mt-[2rem]"
              : "md:-mt-[16rem]"
          } md:flex md:flex-col md:items-start md:gap-5`}
          key={item.id}
        >
          <img
           
            src={item.Image.data && item.Image.data.attributes.name}
            alt="author"
            className={`rounded-2xl img clip-your-needful ${
              item.id === 1
                ? "h-72 w-[28rem]"
                : item.id === 2
                ? "h-[28rem] w-[24rem]"
                : " h-[32rem] w-[24rem]"
            } object-cover`}
          />
          <p className="text-left text-[1.125rem] w-[25rem]">
            {item.About}
          </p>
          <p className="md:flex md:flex-col gap-1">
            <span className="text-[1.1rem] font-bold uppercase">
              {item.name}
            </span>
            <span className="text-[1.1rem] uppercase text-[#535351]">
              {item.jobTitle}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
}

function TestimonialSlide() {
  return (
    <Swiper>
      {
        <div className="flex items-center justify-between gap-2">
          {testimonial.map((item) => (
            <SwiperSlide
              spaceBetween={50}
              slidesPerView={1}
              pagination={true}
              keyboard={true}
              draggable={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="mt-10"
              key={item.id}
            >
              <img
                src={item.imageUrl}
                alt="author"
                className={`rounded-2xl h-96 w-[28rem] object-cover`}
              />
              <p className="mt-7 text-left text-[1.125rem]">
                {item.description}
              </p>
              <p className="mt-5 flex flex-col gap-1">
                <span className="text-[1.1rem] font-bold uppercase">
                  {item.name}
                </span>
                <span className="text-[1.1rem] uppercase text-[#535351]">
                  {item.jobTitle}
                </span>
              </p>
            </SwiperSlide>
          ))}
        </div>
      }
    </Swiper>
  );
}
