import React, { useEffect, useState } from "react";
import axios from "axios";

const Post = ({ post }) => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const fetchAuthor = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      setAuthor(response.data);
    };

    fetchAuthor();
  }, [post.userId]);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "20px",
        padding: "10px"
      }}
    >
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {author && (
        <p>
          <strong>Author:</strong> {author.name}
        </p>
      )}
    </div>
  );
};

export default Post;
