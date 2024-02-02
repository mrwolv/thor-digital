
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet from "./components/Outlet";
import Blog from "./pages/Blog";
import SingleBlogPages from "./pages/SingleBlogPages";
import Author from "./pages/Author";

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/post/:title" element={<SingleBlogPages/>} />
        <Route path="/author" element={<Author/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
