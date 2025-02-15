

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import '../style/Home.css';
import Footer from '../components/footer';
import Hero from '../components/Hero';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <Hero/>
        <h1 className="home-title">Latest Blog Posts</h1>
        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.imgUrl} alt={post.name} className="blog-image" />
                <h2 className="blog-title">{post.name}</h2>
                <p className="blog-text">{post.text.substring(0, 100)}...</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-posts">No blog posts available. Add a new blog post!</p>
        )}
        {isLoggedIn && (
          <Link to="/Addblog" className="add-blog-button">
            + Add New Blog
          </Link>
        )}

      </div>
      <Footer/>
    </>
  );
};

export default Home;
