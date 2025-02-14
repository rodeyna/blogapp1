import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/form.css';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [User, setUser] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
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
      <div className="form">
        <div className='img'></div>
        <div className='mainlog'>
          <div className='log'>
            <div className="intro">
              <h2 className="form-title">Sign Up</h2>
              <p className='cleargrey'>Join us today! Create an account to get started.</p>
            </div>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-container">
                <label className="cleargrey">User Name</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={User.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label className="cleargrey">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={User.email}
                  onChange={handleChange}
                />
              </div>
              <div className="input-container">
                <label className="cleargrey">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={User.password}
                  onChange={handleChange}
                />
              </div>
              <button className="submit" type="submit">Sign up</button>
              <div className="signup-link">
                <p className='cleargrey'>Have an account?</p>
                <Link to='/login'><p>Login</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
