import React, { useState} from "react";
import {useNavigate} from 'react-router-dom';


import "../Style/Login.css";

import { loginHandle } from "../Utilis/handleLogin";

function Login({setIsLoggedIn}) {

  const navigate = useNavigate();


  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");

  return (
    <div className="login-container">
      <h2>Login</h2>
      
      <div className="input">
      <i class='fas fa-user-shield' style={{padding:10}}></i>
        <input
          type="text"
          placeholder="User name"
          required
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input">
      <i class='fas fa-eye-slash' style={{padding:10}}></i>
        <input
          type="password"
          placeholder="Password"
          required
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div
        className="submit-container"
        onClick={async () => {
          await loginHandle(userName, userPassword,setIsLoggedIn);
        }}
      >
        Login
      </div>
      <div>or</div>
      <div
        className="change-container"
        onClick={()=>navigate("/register")}
      >
        change username and password ?
      </div>
    </div>
  );
}

export default Login;
