import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "../about";
import Body from "../body";
import Details from "../details";
import Face from "../face";
import Final from "../final";
import Happy from "../happy";
import Project2 from "../project2";
import Project from "../projects";
// Project2
import "./style.css";

const Navbar = () => {
  const [sidebar , setSidebar]=useState(true)
  return (
    <div className="tot">
      <div className="links">
      <i onClick={()=>{
        setSidebar(!sidebar)
      }} class="bi bi-list"></i>
        <Link to="/resume"> Resume </Link>

        <Link to="/"> Home </Link>
        <Link to="/project1"> Project 1</Link>
        <Link to="/project2"> Project2 </Link>
      </div>
      <Routes>
        {/* <Route path="/" element={<Final />} /> */}
        <Route path="/project1" element={<Details />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Body value={sidebar} />} />
        <Route path="/resume" element={<Face />} />
        
        <Route path="/project2" element={<Project2 />} />
      </Routes>
    </div>
  );
};

export default Navbar;
