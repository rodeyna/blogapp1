import React from 'react'
import { useState } from 'react'
import '../style/form.css'
const Signup = () => {
    const [User, setUser] = useState({
        username: "",
        email: "",
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
    return (
  <div className="form">
  <h2 className="form-title">sign up</h2>
  <form className="login-form" onSubmit={handleLogin}>
    <div className="input-container">
    
    <input
      type="text"
     name='name'
     placeholder="Enter your username"
      value={User.username}
      onChange={handelChange}
    />
    </div>
    <div className="form-group">
    <label for="Password">Password</label>
    <input
      type="password"
        name='password'
        placeholder="Enter password"
      value={User.password}
      onChange={handelChange}
    />
    </div>
    <div className="form-group">
    <input
      type="text"
     name='email'
     placeholder="Enter email"
      value={User.email}
      onChange={handelChange}
    />
    </div>
    <button className="submit" type="submit">Sign up</button>
    <p class="signup-link">
     have an account?
        <a href="">login</a>
      </p>
  </form>
  </div>
    );
}
export default Signup