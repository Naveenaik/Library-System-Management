import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";

import "../Style/Navbar.css";

function Navbar({ setIsLoggedIn }) {


  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return (
    <div className="navbar">
      {/* <input type="checkbox" id="check" />
      <label for="check">
        <i className="fas fa-bars" id="btn"></i>
        <i className="fas fa-times" id="cancel" ></i>
      </label> */}
      <div className="sidebar">
        <header>Menu</header>

        <Link to="/stu-borrowers" className={currentPath === "/stu-borrowers" ? "active-link" : ""} >
          <span>Student-Borrow</span>
        </Link>
        <Link to="/teach-borrowers" className={currentPath === "/teach-borrowers" ? "active-link" : ""}>
          <span>Teacher-Borrow</span>
        </Link>

        <Link to="/books" className={currentPath === "/books" ? "active-link" : ""}>
          <span>Books</span>
        </Link>
        <Link to="/publisher" className={currentPath === "/publisher" ? "active-link" : ""}>
          <span>Publishers</span>
        </Link>
        <Link to="/student" className={currentPath === "/student" ? "active-link" : ""}>
          <span>Student</span>
        </Link>
        <Link to="/teacher" className={currentPath === "/teacher" ? "active-link" : ""}>
          <span>Teachers</span>
        </Link>

        <Link to="/due" className={currentPath === "/due" ? "active-link" : ""}>
          <span>Over due</span>
        </Link>
        <Link to="/"
        onClick={() =>
          setIsLoggedIn(sessionStorage.setItem("isLoggedIn", false))
        }
        >
          <span
          >
            Logout
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
