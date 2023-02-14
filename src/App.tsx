import { Center, Container } from "@chakra-ui/react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import { Hobby, User } from "./types";




const App = () => {
  const user: User = {
    id: 1,
    username: "quentin",
    isAdmin: true,
  };

  const hobbies: Hobby[] = [
    { name: "Graphisme", isFavorite: true },
    { name: "Music", isFavorite: true },
    { name: "Sport", isFavorite: false },
  ]



  useEffect(() => {
    console.log("coucou")
  }, [])

  return (
    <>

      <Navbar user={user} />
      <Container maxW="full" p={4}>
        <Center>
          <Home hobbies={hobbies} />
        </Center>

      </Container>

    </>
  )
}

export default App
