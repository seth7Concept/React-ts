import { Button, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";


const NavLinksComponent = () => {
    const [loginAuth, setloginAuth] = useState<boolean>(false);
const toggledLogin = () => {
    setloginAuth((prev) => !prev);
}

    return (

        <ButtonGroup gap='2' alignItems='center'>
            {loginAuth ? (
                <>
                    <Button colorScheme={"messenger"}> Home </Button>
                    <Button colorScheme={"messenger"}> Logout </Button>
                </>
            ) : (
                <>
                    <Button colorScheme={"messenger"} onClick={toggledLogin} > Login </Button>
                    <Button colorScheme={"messenger"}> Sign up </Button>

                </>
            )}
        </ButtonGroup>

    )
}

export default NavLinksComponent