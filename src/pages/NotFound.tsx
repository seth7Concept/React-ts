import { Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {

    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 3000)






    return (
        <>
            <VStack>
                <Text>Page Not Found  </Text>
                <img src="/public/loading.gif" width="50" />
            </VStack>
        </>
    )
}

export default NotFound