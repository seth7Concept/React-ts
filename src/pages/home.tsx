import { Button, FormLabel, Heading, HStack, Input, Switch, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Hobby } from "../types";

type Props = {
    hobbies: Hobby[]
}



const Home = (props: Props) => {
    const { hobbies } = props;

    const [count, setCount] = useState<number>(0)
    const [input, setInput] = useState<string>("")
    const [switchs, setSwitchs] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<boolean>(false);
    const [parsedInput, setParsedInput] = useState<number>(0);


    function clear() {
        setSwitchs(false);
        setInput("");
        setCount(0);
    }
    function increment() {
        setCount(prevCount => prevCount + parsedInput);
    }
    function multiplication() {
        setCount((prevCount) => prevCount * parseInt(input));
    }
    function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
        setInput(event.target.value)
    }
    function handleChangeSwitch() {
        setSwitchs((prevSwitch) => !prevSwitch)
    }
    function handleChangeFavorites() {
        setFavorites((prevFavorites) => !prevFavorites);
    }

    // useEffect(() => {
    //     console.log('')
    // }, [count, switchs])


    useEffect(() => {
        setParsedInput(parseInt(input))
    }, [input])
    return (
        <>
            <VStack>
                <HStack gap={5}>
                    <Heading>Home Page - {count}</Heading>
                    <Button colorScheme="messenger" onClick={clear} isDisabled={count === 0 && input === "" && switchs === false}>clear</Button>
                    <Button colorScheme="messenger" onClick={switchs ? multiplication : increment} isDisabled={!isNaN(parsedInput) ? false : true}>{parsedInput ? switchs ? "x" + (parsedInput >= 0 ? input : `(${input})`) : (parsedInput >= 0 ? "+" : "") + input : "0"}
                    </Button>
                    <FormLabel gap={2}>
                        additions
                        <Switch colorScheme='blue' isChecked={switchs} onChange={handleChangeSwitch} />
                        multiplication
                    </FormLabel>

                </HStack>
                <Input variant='filled' placeholder='Filled' value={input} onChange={handleChangeInput} />
                {/* <Text>{input}</Text> */}

                <HStack>
                    <Text>Non favories</Text>
                    <Switch isChecked={favorites} onChange={handleChangeFavorites} />
                    <Text>Favories</Text>
                </HStack>

                {hobbies.filter((hobby) => hobby.isFavorite === favorites).map((hobby) => (<Text key={hobby.name}>{hobby.name}</Text>))}
            </VStack>

        </>
    )
}

export default Home;