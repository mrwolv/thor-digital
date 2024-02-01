import { topics } from "../../constants/featured";

const Popularpost = () => {

    const slicedTopics = topics.slice(0, 4);

  return (
    <div className=" bg-[#562ABD] px-6 py-10 md:p-20">
      <h1 className=" capitalize text-[2rem] md:text-[2.6rem] font-semibold  text-white">
        Popular posts
      </h1>
      <div className="  grid grid-flow-row  md:grid-cols-2 mt-10 gap-5">
        {slicedTopics.map((item) => (
          <div
            className="flex flex-col items-start justify-between gap-5"
            key={item.id}
          >
            {/* Your existing code for each topic */}
            <img
              src={item.imageUrl}
              alt={item.author}
              className="rounded-2xl"
            />
            <p className="uppercase md:text-[1.3rem] text-[1.1rem] text-white">
              {item.topic}
            </p>
            <h1 className=" text-white text-[1.3rem] md:text-[2.2rem] font-semibold">
              {item.description}
            </h1>
            <p className="text-[1.1rem ] md:text-[1.3rem] text-gray-400 flex items-center  gap-2  ">
              <span className="uppercase">{item.author}</span>
              <span className="h-2 w-2 rounded-full bg-gray-400 "></span>
              <span className="uppercase ">{item.date}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popularpost;
