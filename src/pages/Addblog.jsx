import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import '../style/AddBlog.css'

const Addblog = () => {
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState({
    name: '',
    text: '',
    imgUrl: '',
  });

  const [posts, setPosts] = useState(() => {
    // Load existing posts from localStorage
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPost({
      ...blogPost,
      [name]: value,
    });
  };


  //just to reset blogPosts
  // const handleReset = () => {
  //   localStorage.removeItem("blogPosts"); // Supprime les articles du localStorage
  //   setBlogPost([]); // Réinitialise l'état
  //   console.log("localstorage renitialiser")
  // };
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blogPost.name || !blogPost.text) {
      alert('Please fill out all fields.');
      return;
    }

    // Add the new blog post to the posts array
    const newPosts = [...posts, blogPost];
    setPosts(newPosts);

    // Save the updated posts array to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));

    // Clear the form
    setBlogPost({
      name: '',
      text: '',
      imgUrl: '',
    });

    // Redirect to the home page
    navigate('/');
  };

  return (
    <>
      <Navbar />
      {/* <button onClick={handleReset} style={{ marginTop: "10px", color: "red" }}>
  Réinitialiser les articles
</button> */}

      <div className="add-blog-container">
        <h2>Add New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Blog Name:</label>
            <input
              type="text"
              name="name"
              value={blogPost.name}
              onChange={handleChange}
              placeholder="Enter blog name"
              required
            />
          </div>
          <div className="form-group">
            <label>Blog Text:</label>
            <textarea
              name="text"
              value={blogPost.text}
              onChange={handleChange}
              placeholder="Enter blog text"
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL:</label>
            <input
              type="url"
              name="imgUrl"
              value={blogPost.imgUrl}
              onChange={handleChange}
              placeholder="Enter image URL (e.g., from Google)"
              required
            />
          </div>
          <button type="submit">Add Blog Post</button>
        </form>
      </div>
    </>
  );
};

export default Addblog;