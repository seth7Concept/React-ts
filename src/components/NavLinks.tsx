import { Button, ButtonGroup, FormLabel, Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinksComponent = () => {
    const [theme, setTheme] = useState<boolean>(false);
    const [loginAuth, setloginAuth] = useState<boolean>(false);
    const toggleAuth = () => {
        setloginAuth((prev) => !prev);
    }
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            toggleAuth()
        }
    }, [location])

    function changeTheme() {
        const newTheme = !theme;
        setTheme(newTheme);
        localStorage.setItem("themeReact", newTheme ? "dark" : "light");
    }

    useEffect(() => {
        const storedTheme = localStorage.getItem("themeReact");
        if (storedTheme === "dark") {
            setTheme(true);
        }
        if (theme) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, []);

    return (
        <ButtonGroup gap='2' alignItems='center'>



            {loginAuth ? (
                <>
                    <Button colorScheme={"messenger"}><Link to="/posts">post</Link> </Button>
                    <Button colorScheme={"messenger"}> <Link to="/about">about</Link> </Button>
                    <Button colorScheme={"messenger"}> <Link to="/">Home</Link> </Button>
                    <Button colorScheme={"messenger"} onClick={toggleAuth}><Link to="/register">Sign up</Link> </Button>
                </>
            ) : (
                <>
                    <Button colorScheme={"messenger"} > <Link to="/login">Login</Link> </Button>
                    <Button colorScheme={"messenger"}> Sign up </Button>
                </>
            )}
            <FormLabel gap={0}>
                ☀️
                <Switch colorScheme='blue' alignItems='center' onChange={changeTheme} />
                🌘
            </FormLabel>
        </ButtonGroup>
    );
}

export default NavLinksComponent;