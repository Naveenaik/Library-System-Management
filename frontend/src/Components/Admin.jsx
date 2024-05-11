import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";

import Login from "./Login";
import Change from "./Change";

import Loading from "./Loading";

import AddBook from "./AddBook";
import Students from "./Students";
import Teachers from "./Teachers";
import Publisher from "./Publisher";
import StuBorrowers from "./Stu_Borrowers";
import TeachBorrow from "./Teach_Borrow";
import Due from "./Due";

// import AllBooks from "./AllBooks";

import LibraryManagement from "./LibraryManagement";

import Navbar from "./Navbar";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //request interceptor
    axios.interceptors.request.use(
      (config) => {
        setLoading(true);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    //response interceptor
    axios.interceptors.response.use(
      (config) => {
        setLoading(false);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }, []);

  const [book, setBook] = useState({
    Book_id: "",
    Title: "",
    Author: "",
    Price: "",
    Available: "",
  });
  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <BrowserRouter>
          <Loading show={loading}></Loading>

          <Navbar setIsLoggedIn={setIsLoggedIn} />

          <LibraryManagement />
          <Routes>
            <Route exact path="/stu-borrowers" element={<StuBorrowers />}></Route>
            <Route path="/publisher" element={<Publisher />}></Route>
            <Route path="/student" element={<Students />}></Route>
            <Route path="/teacher" element={<Teachers />}></Route>
            <Route
              path="/books"
              element={<AddBook setBook={setBook} />}
            ></Route>
            <Route path="/teach-borrowers" element={<TeachBorrow />}></Route>
            <Route path="/due" element={<Due />}></Route>
            <Route path="/logout"></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            ></Route>
            <Route path="/register" element={<Change />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default Admin;
