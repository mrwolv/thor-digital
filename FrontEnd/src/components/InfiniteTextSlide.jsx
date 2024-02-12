import Marquee from "react-fast-marquee";

const InfiniteTextSlide = () => {
  return (
    <div className="flex flex-col  overflow-hidden justify-between gap-16 mt-16  py-10 ">
      <Marquee speed={100} autoFill={true}>
        <div className="flex items-center justify-center gap-10 text-[1.6rem] text-[#8c69de]   ">
          <span className=" ml-6">WebSite & SEO Editing</span>
          <span className="opacity-70">WebFlow Development</span>
          <span>Market Analysis</span>
          <span className="opacity-70">Content Strategy</span>
          <span className="">Digital Marketing Strategy</span>
        </div>
      </Marquee>
      <Marquee speed={100} autoFill={true} direction="right">
        <div className="flex items-center justify-center gap-10 text-[1.6rem] text-[#8c69de]   ">
          <span className=" ml-6">WebSite & SEO Editing</span>
          <span className="opacity-70">WebFlow Development</span>
          <span>Market Analysis</span>
          <span className="opacity-70">Content Strategy</span>
          <span className="">Digital Marketing Strategy</span>
        </div>
      </Marquee>
    </div>
  );
};

export default InfiniteTextSlide;
