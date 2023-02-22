import { Center, Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { User } from "../types";

const MainLayout = () => {
    const user: User = {
        id: 1,
        username: "quentin",
        isAdmin: true,
    };
    return (
        <>
            <Navbar user={user} />
            <Container maxW="full" p={4}>
                <Center>
                    <Outlet />  
                </Center>
            </Container>
        </>
    )
}

export default MainLayout