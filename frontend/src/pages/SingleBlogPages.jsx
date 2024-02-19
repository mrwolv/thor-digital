/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import NewsLetter from "../components/blogcomponents/NewsLetter";
import Markdown from "react-markdown";
import ImageCursol from "../components/Featured/ImageCursol";
import Footer from "../components/Footer";

const SingleBlogPages = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const item = state?.blogData || [];
  console.log(item);

  return (
    <>
      <Navbar navbarColor={true} />
      <main className="bg-white md:p-20 px-6 py-10 ">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-32 ">
          <div
            className="relative h-16 w-16 md:h-[4rem] md:w-[8rem] md:mb-72 rounded-full bg-gray-200 opacity-75 transition-transform ease-in-out duration-300 hover:scale-110 hover:translate-y-[-1px] hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeftLong
              size={18}
              color="#562ABD"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="md:px-20 flex flex-col gap-4 md:gap-0">
            <span className="md:text-[1.4rem] uppercase">{item.topic}</span>
            <h1 className="md:text-[4.2rem] text-[1.9rem] font-semibold tracking-tight">
              {item.description}
            </h1>
            <p className="text-[1.1rem ] md:text-[1.2rem] text-gray-400 flex items-center  gap-3  ">
              <span className="uppercase underline text-[#562ABD] active:text-red-300">
                <Link to="/author">Author</Link>
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-400 "></span>
              <span className="uppercase ">date</span>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <img
            src={item?.imgUrl?.data?.attributes?.url}
            alt=""
            className=" rounded-2xl object-contain w-full "
          />
        </div>
        <div className="mt-12 md:mt-20 md:px-52 md:text-[1.25rem]">
          <div
            dangerouslySetInnerHTML={{ __html: item?.topicDescription || "" }}
          />
        </div>
        <NewsLetter bgColor={false} />
      </main>
      <div className="bg-[#F4F3F6] ">
        <h1 className="md:text-[2.2rem] text-[1.5rem] md:p-20 px-6 py-10 font-semibold">
          {" "}
          Similar Posts
        </h1>
        <div className="md:px-20 -mt-10">
          <ImageCursol />
        </div>
      </div>
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};

export default SingleBlogPages;
