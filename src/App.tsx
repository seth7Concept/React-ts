import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/home";
import Login from "./pages/login";
import Posts from "./pages/Posts";
import Register from "./pages/register";
import { Hobby } from "./types";



const App = () => {
  const hobbies: Hobby[] = [
    { name: "Graphisme", isFavorite: true },
    { name: "Music", isFavorite: true },
    { name: "Sport", isFavorite: false },
  ]

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home hobbies={hobbies} />} />
          <Route path="about" element={<About />} />
          <Route path="posts" element={<Posts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
