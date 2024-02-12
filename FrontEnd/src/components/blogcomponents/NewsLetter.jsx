/* eslint-disable react/prop-types */
const NewsLetter = ({ bgColor }) => {
  return (
    <div
      className={`  text-black   px-6 py-10 md:p-20 ${
        bgColor ? "bg-[#F4F3F6]" : "bg-white"
      } `}
    >
      <div className="bg-white shadow-lg  rounded-2xl p-6 md:py-16 md:flex items-center md:justify-between ">
        <div className="flex flex-col gap-4">
          <h1 className="md:text-[2.2rem] text-[1.3rem] font-semibold ">
            Subscribe to newsletter
          </h1>
          <p className="text-[1.1rem] text-gray-400">
            Get every new post delivered to your email inbox before it’s posted
            here.
          </p>
        </div>
        <div className="mt-6 flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <input
            type="text"
            className=" text-black  border border-gray-400 px-10 text-[1.1rem]  w-full text-left py-3.5  "
            placeholder="Enter Address"
            required
          />
          <button className="bg-green-400 rounded-sm px-4 py-2.5 md:py-3.5 md:w-36 w-full  text-[#210C6E] hover:bg-[#210C6E] hover:text-white  font-bold text-[1.1rem]">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
