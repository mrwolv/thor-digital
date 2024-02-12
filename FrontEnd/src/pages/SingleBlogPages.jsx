/* eslint-disable react/no-unescaped-entities */
import Navbar from "../components/Navbar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import NewsLetter from "../components/blogcomponents/NewsLetter";

import ImageCursol from "../components/Featured/ImageCursol";
import Footer from "../components/Footer";

const SingleBlogPages = () => {
  const navigate = useNavigate();
  const {title}  = useParams()

  return (
    <>
      <Navbar navbarColor={true} />
      <main className="bg-white md:p-20 px-6 py-10 ">
        <div className="flex flex-col items-start gap-10 md:flex-row md:items-center md:gap-32 ">
          <div
            className="relative h-16 w-16 md:h-[3.5rem] md:w-[7.5rem] md:mb-72 rounded-full bg-gray-200 opacity-75 transition-transform ease-in-out duration-300 hover:scale-110 hover:translate-y-[-1px] hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeftLong
              size={18}
              color="#562ABD"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
          <div className="md:px-20 flex flex-col gap-4 md:gap-0">
            <span className="md:text-[1.4rem] uppercase">
              creator economy / header title{" "}
            </span>
            <h1 className="md:text-[4.2rem] text-[1.9rem] font-semibold tracking-tight">
             {title}
            </h1>
            <p className="text-[1.1rem ] md:text-[1.2rem] text-gray-400 flex items-center  gap-3  ">
              <span className="uppercase underline text-[#562ABD] active:text-red-300">
                <Link to='/author'>
                Author
                </Link>
              </span>
              <span className="h-2 w-2 rounded-full bg-gray-400 "></span>
              <span className="uppercase ">date</span>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <img
            src="/creator.jpg"
            alt=""
            className=" rounded-2xl object-contain w-full "
          />
        </div>
        <div className="mt-12 md:mt-20 md:px-52 md:text-[1.25rem]">
          <h1 className="md:text-[1.9rem] font-medium">Introduction</h1>
          <p className="md:mt-9 mt-6">
            So you wanna know about the creator economy? Welcome to the club.{" "}
          </p>
          <p className="md:mt-9 mt-6">
            Before we begin, let’s take a quick second to remind ourselves of
            what a content creator actually does.
          </p>
          <p className="md:mt-9 mt-6">
            In simple terms, this is anyone who creates a piece of communication
            to be distributed and shared with the public. Content in its
            broadest sense, is made up of various forms. This could be anywhere
            from paintings, music, and novels to TikTok and YouTube videos,
            blogs, and Instagram posts. The aims can also be endless. Creators
            create to entertain, to educate, to inspire, to advise or to simply
            share their craft with others.{" "}
          </p>
          <p className="md:mt-9 mt-6">
            <span className="text-[#562ABD] underline hover:cursor-pointer">
              According to the ‘State of the Creator Economy’ study by
              ConvertKit,{" "}
            </span>
            creators are pretty optimistic about their prospects,
            <span className="text-[#562ABD] underline hover:cursor-pointer">
              with 80% expecting to earn more this year than last.{" "}
            </span>
            To give you some perspective, the creator economy is booming,{" "}
            <span className="text-[#562ABD] underline hover:cursor-pointer">
              {" "}
              currently worth around $250 billion.{" "}
            </span>
            There is still a way to go, but the market is a clear sign that the
            creator economy is no side gig, it's mainstream and here to stay.
            And hey, if you're just starting out in the space, you're in good
            company:
            <span className="text-[#562ABD] underline hover:cursor-pointer">
              {" "}
              47% of creators have been in the game for less than two years, so
              it’s never too late to start..{" "}
            </span>
          </p>
          <p className="md:mt-9 mt-6">
            So, technology has allowed people to create and make a living on
            their own terms, and reach audiences they otherwise could not have
            imagined. But with having your own freedom, comes great
            responsibility, which leads us to our main issue -
            <span className="font-semibold">
              {" "}
              The overarching debate of quality vs. quantity.
            </span>
          </p>
          <p className="md:mt-9 mt-6">
            When you feel the need to be everything, everywhere, all at once
            <span className="text-[#562ABD] underline hover:cursor-pointer">
              {" "}
              (excuse the movie reference){" "}
            </span>
            lines can get blurred between what you should do and what you’re
            feeling pressured to do according to what you think is ‘right’. It
            isn’t as simple as one or the other, there are many pieces of the
            puzzle to be addressed before creators can make a decision for their
            content. Sounds hectic? Well, it is.
          </p>
          <p className="md:mt-9 mt-6">
            So, where do you draw the line? How do you stay true to your craft
            without burning yourself out or losing sight of what makes you
            unique? That's what we're going to explore in this blog post.
          </p>
          <p className="md:mt-9 mt-6">
            I’ve been consulting with creators for over 3 years now, helping
            them successfully grow their creator businesses through various
            outlets. This has given me perspective into the real experiences of
            different creators, allowing me to question the so-called "rules" of
            the creator business, and hopefully helping you figure out how to
            find the right balance for you.
          </p>
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
