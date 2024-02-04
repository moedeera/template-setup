import { useState, useEffect } from "react";
import { fetchPublicPosts } from "../../Context/APcalls/PostCalls";
import "./PostsPage.css";
import { Loading } from "../../Components/Loading/Loading";
export const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      // Simulate fetching public posts. Replace this with your actual fetch logic.
      const fetchedPosts = fetchPublicPosts(); // Assuming fetchPublicPosts is available
      setPosts(fetchedPosts);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="posts-container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <p>Author: {post.author}</p>
          <p>{post.text}</p>
          <small>Created: {new Date(post.created).toLocaleDateString()}</small>
          <br />
          <small>
            Last Edited: {new Date(post.lastEdited).toLocaleDateString()}
          </small>
        </div>
      ))}
    </div>
  );
};
