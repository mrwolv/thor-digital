import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { useEffect } from "react";
import { useState } from "react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { featured } from "../../constants/featured";
import { Link } from "react-router-dom";

const ImageCursol = () => {
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

  return (
    <section className="mt-6 -mb-6">
      {isMobile ? <MobileImageComponent /> : <DesktopImageSlider />}
    </section>
  );
};

export default ImageCursol;

const MobileImageComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={true}
      keyboard={true}
      draggable={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {featured.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col mb-20 ">
            <Link to={`/post/${encodeURIComponent(item.title)}`}>
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-md w-full h-full  "
                loading="lazy"
              />
              <p className="flex items-center gap-6 mt-6 uppercase">
                <span className="border border-[#747373] text-[#747373] py-1 px-3 rounded">
                  {item.categories.title1}
                </span>
                <span className="border border-[#747373] text-[#747373] py-1 px-3 rounded">
                  {item.categories.title2}
                </span>
              </p>
              <p className="text-[1.7rem] font-semibold mt-4">{item.title}</p>
              <p className="flex items-center gap-3 mt-2 text-[#747373]">
                <span>{item.date}</span>
                <span className="h-1 w-1 rounded-full bg-[#747373]"></span>
                <span>{item.readTime}</span>
              </p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const DesktopImageSlider = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        slidesPerView={1.5}
        pagination={true}
        keyboard={true}
        draggable={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {featured.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="md:flex md:flex-col md:mb-20 hover:cursor-pointer">
              <Link to={`/post/${encodeURIComponent(item.title)}`}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-md w-full h-full"
                  loading="lazy"
                />
                <p className="flex items-center gap-6 mt-6 uppercase">
                  <span className="border border-[#747373] text-[#747373] py-1 px-3 rounded">
                    {item.categories.title1}
                  </span>
                  <span className="border border-[#747373] text-[#747373] py-1 px-3 rounded">
                    {item.categories.title2}
                  </span>
                </p>
                <p className="text-[1.7rem] font-semibold mt-4">{item.title}</p>
                <p className="flex items-center gap-3 mt-2 text-[#747373]">
                  <span>{item.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#747373]"></span>
                  <span>{item.readTime}</span>
                </p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
