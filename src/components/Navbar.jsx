import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Remove login state from storage
    setIsLoggedIn(false); // Update state
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="button-container">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="button button-login">Login</button>
            </Link>
            <Link to="/signup">
              <button className="button button-signup">Sign Up</button>
            </Link>
          </>
        ) : (
          <button className="button button-logout" onClick={handleLogout}>Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;