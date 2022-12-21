import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Post } from "./Pages/Post";
export const RoutesList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="post/:id" element={<Post />} />
    </Routes>
  );
};
