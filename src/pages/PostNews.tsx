import { Button, Heading, Input, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

<link rel="stylesheet" href="/src/css/form.css" />
const PostNews = () => {
    const navigate = useNavigate()
    const titleRef = useRef<HTMLInputElement>(null)
    const bodyRef = useRef<HTMLInputElement>(null)


    function handleAddPost() {
        axios
        .post(`https://jsonplaceholder.typicode.com/posts/`, {
        title: titleRef.current?.value,
        body: bodyRef.current?.value,
        userId: 1,
    }).then((res) => {
        console.log(res);
        navigate("/posts");
      })
      .catch((err) => console.log(err));


    }
return (
    <>

        <VStack>
            <Heading>New Post</Heading>
            <br />
            <Input variant='filled' placeholder='Title' ref={titleRef} />
            <Input variant='filled' placeholder='Description'ref={bodyRef} />
            <br />
            <Button colorScheme="messenger" onClick={handleAddPost}>Submit</Button>
        </VStack>

    </>

)
}
export default PostNews;
