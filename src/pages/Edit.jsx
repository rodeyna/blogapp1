import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/AddBlog.css';

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const [blogPost, setBlogPost] = useState({
    name: '',
    text: '',
    imgUrl: '',
  });

  useEffect(() => {
    // Charger l'article existant à modifier
    const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    if (savedPosts[id]) {
      setBlogPost(savedPosts[id]); // Remplir le formulaire avec les valeurs actuelles
    } else {
      alert("Post not found!");
      navigate('/'); // Rediriger si l'article n'existe pas
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogPost({
      ...blogPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blogPost.name || !blogPost.text) {
      alert('Please fill out all fields.');
      return;
    }

    let savedPosts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    savedPosts[id] = blogPost; // Mettre à jour l'article dans la liste

    localStorage.setItem("blogPosts", JSON.stringify(savedPosts)); // Sauvegarder la liste mise à jour
    navigate('/'); // Rediriger vers la page d'accueil
  };

  return (
    <>
      <Navbar />
      <div className="add-blog-container">
        <h2>Edit Blog Post</h2>
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
            />
          </div>
          <button type="submit">Edit Blog Post</button>
        </form>
      </div>
    </>
  );
};

export default Edit;