import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { updateHandle } from '../Utilis/handleLogin';

function Change() {

const navigate = useNavigate();

  const [userName, setName] = useState("");
  const [userPassword, setPassword] = useState("");

  return (
    <div className="login-container">
    <h2>Change username or password</h2>
    
    <div className="input">
      {/* <img src={ e} alt="" /> */}
      <input
        type="text"
        placeholder="User name"
        required
        value={userName}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="input">
      {/* <img src={password_icon} alt="" /> */}
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
        await updateHandle(userName, userPassword);
      }}
    >
      Change username or password
    </div>
    <div>or</div>
    <div
      className="change-container"
      onClick={()=>navigate("/")}
    >
      Login
    </div>
  </div>
);
}

export default Change