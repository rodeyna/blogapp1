import React from 'react'
import { useState } from 'react'
import '../style/form.css'
const Login = () => {
    const [User, setUser] = useState({
        username: "",
        password: ""
    })
    const handelChange = (e) => {
        let targetName = e.target.name
        let targetValue = e.target.value
        setUser({
            ...User,
            [targetName]: targetValue
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Data:", User);
      };
    
    return (
        <div className="form">
        <h2 className="form-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
          
          <input
            type="text"
           name='name'
           placeholder="Enter your username"
            value={User.username}
            onChange={handelChange}
          />
          </div>
          <div className="input-container">
         
          <input
            type="password"
              name='password'
              placeholder="Enter password"
            value={User.password}
            onChange={handelChange}
          />
          </div>
          <button className="submit" type="submit">Sign up</button>
          <p class="signup-link">
          No account?
              <a href=""> Sign up</a>
            </p>
        </form>
        </div>
    );
}

export default Login