import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/form.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const Signup = () => {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handelChange = (e) => {
    let targetName = e.target.name;
    let targetValue = e.target.value;
    setUser({
      ...User,
      [targetName]: targetValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data:", User);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="form">
        <h2 className="form-title">Sign Up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={User.username}
              onChange={handelChange}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={User.password}
              onChange={handelChange}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={User.email}
              onChange={handelChange}
            />
          </div>
          <button className="submit" type="submit">Sign up</button>
          <p className="signup-link">
            Have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;