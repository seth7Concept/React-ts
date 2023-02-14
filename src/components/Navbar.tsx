import { Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { User } from "../types";
import NavLinksComponent from "./NavLinks";

type Props = {
    user: User
}

const Navbar = (props: Props) => {
    const { user } = props
    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' bg="#242430" p={2} >
                <Box p='2'>
                    <Heading size='md' color="white">Afloapp - {user.username}</Heading>

                </Box>
                <Spacer />
                <NavLinksComponent />
            </Flex>
        </>
    )
}

export default Navbar;