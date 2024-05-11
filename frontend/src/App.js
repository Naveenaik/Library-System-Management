import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Admin from "../src/Components/Admin";
import Student from "./Components/Students";

import Home from "../src/Components/Home";

import "../src/Style/Navbar.css";

function App() {
  return (
    <div className="App">
      <Admin/>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/student" element={<Student/>}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
