import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../style/Ab-c.css";

function AddblogComponent() {
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState({
    name: '',
    text: '',
    imgUrl: '',
  });
  const [posts, setPosts] = useState(() => {
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
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blogPost.name || !blogPost.text || !blogPost.imgUrl) {
      alert('Please fill out all fields.');
      return;
    } 
    const newPosts = [...posts, blogPost];
    setPosts(newPosts);   
    localStorage.setItem('blogPosts', JSON.stringify(newPosts));   
    setBlogPost({
      name: '',
      text: '',
      imgUrl: '',
    });
    navigate('/');
  };
    return ( 
    <>
   <div className="add-blog-container">
        <h2>Add a New Blog Post</h2>
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
  )
}

export default AddblogComponent