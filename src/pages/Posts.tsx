import axios from "axios";
import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import { Post } from "../types";

const Posts = () => {
  // const [posts, setPostsr] = useState<Post[]>([]);
  const [posts, setPots] = useState<Post[]>([]);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setPots(res.data);
      // setPostsr(res.data);
    });
  }, []);
  return (
    <>
      <PostList posts={posts} />
    </>
  )
}

export default Posts
