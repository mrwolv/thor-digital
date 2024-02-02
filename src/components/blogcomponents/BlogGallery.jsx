import { useState } from "react";
import Button from "../Button";
import { topics } from "../../constants/featured";
import { Link } from "react-router-dom";

const BlogGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const itemsPerPage = 4; // Adjust the number of items per page

  const filteredTopics = selectedTopic
    ? topics.filter((item) => item.topic === selectedTopic)
    : topics;

  const totalPages = Math.ceil(filteredTopics.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const visibleTopics = filteredTopics.slice(startIndex, endIndex);

  const handleFilter = (topic) => {
    setSelectedTopic(topic);
    setCurrentPage(1); // Reset to the first page when a filter is applied
  };

  return (
    <section className="mt-[28rem] bg-[#F4F3F6]   px-6 py-10 md:p-20">
      <h1 className="text-black text-[1.6rem]">Topics</h1>
      <div className="flex flex-col md:flex-row items-center gap-3">
        {Array.from(new Set(topics.map((item) => item.topic))).map((topic) => (
          <Button
            key={topic}
            text={topic}
            onClick={() => handleFilter(topic)}
          />
        ))}
      </div>

      <div className="grid grid-flow-row md:grid-cols-2 mt-10 gap-10">
        {visibleTopics.map((item) => (
          <div
            className="flex flex-col items-center justify-between gap-10"
            key={item.id}
          >
            <Link to={`/post/${encodeURIComponent(item.description)}`}>
              {/* Your existing code for each topic */}
              <img
                src={item.imageUrl}
                alt={item.author}
                className="rounded-2xl"
              />
              <p className="mt-3 uppercase md:text-[1.3rem] text-[1.1rem] text-black">
                {item.topic}
              </p>
              <h1 className="text-[1.3rem] md:text-[2rem] font-semibold text-black">
                {item.description}
              </h1>
              <p className="text-[1.1rem ] md:text-[1.2rem] text-gray-400 flex items-center gap-2">
                <span className="uppercase">{item.author}</span>
                <span className="h-2 w-2 rounded-full bg-gray-400 "></span>
                <span className="uppercase ">{item.date}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-5">
        <Button
          text="Previous"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          hover={true}
        />
        <Button
          text="Next"
          hover={true}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          position={"right"}
        />
      </div>
    </section>
  );
};

export default BlogGallery;
