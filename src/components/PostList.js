import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setTimeout(async () => {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      }, 2000);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </div>
  );
};

export default PostList;
