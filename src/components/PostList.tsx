import { HStack, Input, Text, UnorderedList, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Post } from "../types";
type Props = {
    posts: Post[]
}

const PostList = (props: Props) => {
    const { posts } = props;
    const [search, setSearch] = useState('');

    const filteredPosts = posts.filter((post) => {
        return post.title.toLowerCase().includes(search.toLowerCase()) || post.body.toLowerCase().includes(search.toLowerCase());
    });

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <UnorderedList>
            <VStack>
                <HStack>
                    <Input variant='filled' placeholder='Search' onChange={handleSearch} />
                </HStack>
                {filteredPosts.map((post) => (
                    <Text key={post.id}>
                        <Link to={`/posts/${post.id}`}>{post.id}. {post.title}</Link>
                    </Text>
                ))}
                {/* {filteredPosts.map((post) => (
                    <Text key={post.id}> <Link to={`/post/${post.id}`}> {post.id}</Link>-</Text>)
                    )} */}
            </VStack>
        </UnorderedList>
    )
}

export default PostList;

