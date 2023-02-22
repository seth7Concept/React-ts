import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import PostNews from "./pages/PostNews";
import Posts from "./pages/Posts";
import Register from "./pages/Register";
import { Hobby } from "./types";
<link rel="stylesheet" href="/src/css/form.css" />
const App = () => {
  const hobbies: Hobby[] = [
    { name: "Graphisme", isFavorite: true },
    { name: "Music", isFavorite: true },
    { name: "Sport", isFavorite: false },
  ]

  return (
    <div id="body" >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home hobbies={hobbies} />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="posts/news" element={<PostNews />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
