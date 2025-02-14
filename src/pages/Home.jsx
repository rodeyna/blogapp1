// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Navbar from '../components/navbar';
// const Home = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   useEffect(() => {
//     const loggedIn = localStorage.getItem("isLoggedIn") === "true";
//     setIsLoggedIn(loggedIn);
//   }, []);
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     const savedPosts = localStorage.getItem('blogPosts');
//     if (savedPosts) {
//       setPosts(JSON.parse(savedPosts));
//     }
//   }, []);
//   return (
//     <>
//       <Navbar />
//       <h1>Home</h1>
//       {isLoggedIn && (
//         <Link to="/Addblog">
//           <p>Add a new blog</p>
//         </Link>
//       )}   {posts.length > 0 ? (
//         <div className="blog-posts">
//           {posts.map((post, index) => (
//             <div key={index} className="blog-post">
//               <h2>{post.name}</h2>
//               <img src={post.imgUrl} alt={post.name} style={{ width: '100%', maxWidth: '400px' }} />
//               <p>{post.text}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No blog posts available. Add a new blog post!</p>
//       )}

//     </>
//   );
// };
// export default Home;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // Import des icônes
import '../style/Home.css';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Supprimer un blog post
  const handleDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1 className="home-title">Latest Blog Posts</h1>

        {isLoggedIn && (
          <Link to="/Addblog" className="add-blog-button">
            + Add New Blog
          </Link>
        )}

        {posts.length > 0 ? (
          <div className="blog-grid">
            {posts.map((post, index) => (
              <div key={index} className="blog-card">
                <img src={post.imgUrl} alt={post.name} className="blog-image" />
                <h2 className="blog-title">{post.name}</h2>
                <p className="blog-text">{post.text.substring(0, 100)}...</p>

                {/* Icônes Modifier et Supprimer */}
                {isLoggedIn && (
                  <div className="blog-icons">
                    <FiEdit
                      className="edit-icon"
                      onClick={() => navigate(`/Edit/${index}`)}
                    />
                    <FiTrash2
                      className="delete-icon"
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-posts">No blog posts available. Add a new blog post!</p>
        )}
      </div>
    </>
  );
};

export default Home;
