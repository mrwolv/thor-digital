import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet from "./components/Outlet";
import Blog from "./pages/Blog";
import SingleBlogPages from "./pages/SingleBlogPages";
import Author from "./pages/Author";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   async function getData() {
  //     try {
  //       const response = await axios({
  //         method: "get",
  //         url: "http://localhost:1337/api/thordigitals?[populate][0]=Capabilities&populate[1]=Posts.Image&populate[2]=WhoAmI&populate[3]=Testimonial.Image",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization:
  //             "Bearer 941d5cf582b91040d8e19cf9651bc4f76e1c04d81ce7fcf49894fdf8cc19a719b854ce13f9555d4c6f860000b242f406d5b66c4e6ccc675ce0f59c5e971161be82a0bd084e960d8056cb78adf01b9bcc50a171ce5f93961987c9724926d254c2e9de41fc0c2a9a8c8b37a382685a488f576cb49f07c2cde24b2e5b8aa06c1099",
  //         },
  //       });

  //       setData(response.data.data[0].attributes);
  //       console.log(response.data.data[0].attributes);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }

  //   getData();
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet data={data} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:title" element={<SingleBlogPages />} />
        <Route path="/author" element={<Author />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
