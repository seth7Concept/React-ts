import { Button, FormLabel, Heading, HStack, Input, Switch, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Hobby } from "../types";

type Props = {
    hobbies: Hobby[]
}



const Home = (props: Props) => {
    const { hobbies } = props;

    const toto = "toto";
    const color = "#242430";

    const [count, setCount] = useState<number>(0)
    const [input, setInput] = useState<string>("")
    let [switchs, setSwitchs] = useState<boolean>(false);
    const [favorites, setFavorites] = useState<boolean>(false);
    function clear() {
        setSwitchs(false);
        setInput("");
        setCount(0);
    }
    function increment() {
        setCount(prevCount => prevCount + parseInt(input));
    }
    function multiplication() {
        setCount(prevCount => prevCount + parseInt(input));
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
    


    return (
        <>
            <VStack>
                <HStack gap={5}>
                    <Heading color={toto === "toto" ? color : "blue"} >Home Page - {count}</Heading>
                    <Button colorScheme="messenger" onClick={clear} isDisabled={count === 0 && input === "" && switchs === false}>clear</Button>
                    <Button colorScheme="messenger" onClick={increment} isDisabled={!isNaN(parseInt(input)) ? false : true}>
                        {parseInt(input)
                            ? switchs
                                ? "x" + (parseInt(input) >= 0 ? input : `(${input})`)
                                : (parseInt(input) >= 0 ? "+" : "") + input : "0"}
                    </Button>
                    <FormLabel gap={2}>
                        additions
                        <Switch colorScheme='blue' isChecked={switchs} onChange={handleChangeSwitch} />
                        multiplication
                    </FormLabel>

                </HStack>
                <Input variant='filled' placeholder='Filled' value={input} onChange={handleChangeInput} />
                <Text>{input}</Text>

                <HStack>
                    <Text>Non favories</Text>
                    <Switch isChecked={favorites} onChange={handleChangeFavorites} />
                    <Text>Favories</Text>
                </HStack>

                {hobbies
                    .filter((hobby) => hobby.isFavorite === favorites)
                    .map((hobby) => (
                        <Text key={hobby.name}>{hobby.name}</Text>
                    ))}
            </VStack>

        </>
    )
}

export default Home;