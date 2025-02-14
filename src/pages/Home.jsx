import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);
  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {isLoggedIn && (
        <Link to="/Addblog">
          <p>Add a new blog</p>
        </Link>
      )}   {posts.length > 0 ? (
        <div className="blog-posts">
          {posts.map((post, index) => (
            <div key={index} className="blog-post">
              <h2>{post.name}</h2>
              <img src={post.imgUrl} alt={post.name} style={{ width: '100%', maxWidth: '400px' }} />
              <p>{post.text}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No blog posts available. Add a new blog post!</p>
      )}

    </>
  );
};
export default Home;