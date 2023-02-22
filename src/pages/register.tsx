import { Button, Center, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftElement, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { Link } from "react-router-dom";


const Register = () => {


    return (
        <>
            <Center >
                <FormControl isRequired >
                    <FormLabel>First name</FormLabel>
                    <Input placeholder='First name' />
                    {/*  */}
                    <FormLabel>Amount</FormLabel>
                    <NumberInput max={50} min={10}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    {/*  */}
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' />
                    <FormHelperText>We'll never share your email.</FormHelperText>
                    {/*  */}
                    <InputGroup>
                        <InputLeftElement
                            pointerEvents='none'
                            // children={<PhoneIcon color='gray.300' />}
                        />
                        <Input type='tel' placeholder='Phone number' />
                    </InputGroup>
                    {/*  */}
                    <Center>
                        <Button colorScheme='messenger'><Link to="/login">Sign Up</Link> </Button>
                    </Center>
                </FormControl>
            </Center>
        </>
    )
}

export default Register
