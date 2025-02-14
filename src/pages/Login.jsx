import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/form.css';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';

const Login = () => {
  const [User, setUser] = useState({
    username: "",
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
        <h2 className="form-title">Login</h2>
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
          <button className="submit" type="submit">Sign in</button>
          <p className="signup-link">
            No account? <Link to="/Signup">Sign up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;