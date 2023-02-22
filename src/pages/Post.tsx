import { Text, UnorderedList, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Post } from "../types";

const PostPage = () => {
  let { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<Post | null>(null);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPost(res.data);
      });
  }, [id]);

  if (!post) {
    return <VStack>

      <Text>Loading Informations...</Text>
      <img src="/public/loading.gif" width="50" />


    </VStack>

  }

  return (
    <UnorderedList>
      <VStack>
        <li><strong>Title:</strong> {post.title}</li>
        <li><strong>Body:</strong> {post.body}</li>
      </VStack>
    </UnorderedList>
  )
}
export default PostPage;
