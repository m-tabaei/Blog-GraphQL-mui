import { Routes, Route } from 'react-router-dom';
import Home from "./Component/Home/Home";
import Layouts from "./Component/layout/Layouts";
import BlogPage from "./Component/Blog/BlogPage";
import AuthorPage from "./Component/Author/AuthorPage";

function App() {
  return (
    <Layouts>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layouts>
  );
}

export default App;
