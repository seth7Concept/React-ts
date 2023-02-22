import { Button, Center, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    const [theme, setTheme] = useState<boolean>(false);
    const [loginAuth, setloginAuth] = useState<boolean>(false);
    const toggleAuth = () => {
        setloginAuth((prev) => !prev);
    }


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
        
        <>
            <Center>
                <FormControl isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' />
                    <Center>
                        <Button colorScheme='messenger'><Link to="/" state={"coucou"} >Login</Link> </Button>
                    </Center>
                </FormControl>
            </Center>
        </>
    )
}


export default Login
