
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Outlet from "./components/Outlet";
import Blog from "./pages/Blog";
import SingleBlogPages from "./pages/SingleBlogPages";

const App = () => {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Outlet/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/post/:title" element={<SingleBlogPages/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
