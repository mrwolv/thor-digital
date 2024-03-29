import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";
import UseFetch from "../hooks/UseFetch";
import { useInView } from "react-intersection-observer";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";


const Testimonial = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const { data, loading } = UseFetch(
    " https://thordigital.onrender.com/api/testimonial?populate=Testimonial.Image"
  );

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

  const { ref, inView } = useInView();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (inView) {
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

      animateWords(".text-split > p");
      animateLines(".text-split > span");

      gsap.fromTo(
        ".this-is-gsap-image",
        {
          opacity: 0,
          y: 100,
          // clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          opacity: 1,
          y: 0,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          duration: 0.9,
          ease: "power2.inOut",
        }
      );
    }
  }, [inView]);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="bg-white px-2  md:px-20 md:py-0 py-10 ">
      <h1
        className="flex flex-col justify-center text-[1.5rem] md:text-[3.2rem] font-black "
        ref={ref}
      >
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
      {isMobile ? (
        <TestimonialSlide data={data} />
      ) : (
        <DesktopTestimonial data={data} />
      )}
    </section>
  );
};

export default Testimonial;

export function DesktopTestimonial({ data }) {
  return (
    <div className="flex items-center justify-between gap-2 mb-4">
      {data &&
        data.Testimonial?.map((item) => (
          <div
            className={`${
              item.id === 1
                ? "md:mt-[10rem]"
                : item.id === 2
                ? "md:-mt-[2rem]"
                : "md:-mt-[16rem]"
            } md:flex md:flex-col md:items-start md:gap-8`}
            key={item.id}
          >
            <img
              src={item?.Image?.data?.attributes?.url}
              alt="author"
              className={`rounded-2xl this-is-gsap-image clip-your-needful ${
                item.id === 1
                  ? "h-72 w-[28rem]"
                  : item.id === 2
                  ? "h-[28rem] w-[24rem]"
                  : " h-[32rem] w-[24rem]"
              } object-cover`}
            />
            <p className="text-left text-[1.2rem] w-[25rem]">
              {item.description}
            </p>
            <p className="md:flex md:flex-col gap-1">
              <span className="text-[1.1rem] font-bold uppercase">
                {item.author}
              </span>
              <span className="text-[1.1rem] uppercase text-[#535351]">
                {item.authorTitle}
              </span>
            </p>
          </div>
        ))}
    </div>
  );
}

function TestimonialSlide({data}) {
  return (
    <Swiper>
      {
        <div className="flex items-center justify-between gap-2">
          {data &&
        data.Testimonial?.map((item) => (
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
