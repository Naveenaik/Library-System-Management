import React from "react";

import { useNavigate} from "react-router-dom";

import "../Style/Home.css"
function Home() {

const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="admin" onClick={()=>navigate("/admin")}>Admin</div>
        <div className="student" onClick={()=>navigate("/student")}>Student</div>
      </div>
    </div>
  );
}

export default Home;
