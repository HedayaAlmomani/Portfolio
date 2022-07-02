import { Routes, Route, Link } from "react-router-dom";
import Face from "../face";
import Final from "../final";
import Happy from "../happy";
import Project from "../projects";

import "./style.css"


const Navbar =()=>{




    return <div >

<div className="links">

<Link to="/resume"> Resume </Link>
{/* <Link to="/"> my Projects </Link> */}
<Link to="/"> Home </Link>

</div>
<Routes>
{/* <Navbar />


<Final />
<Happy />
<Project/>


<Face/> */}
{/* <Route path="/" element={<Navbar />} /> */}
<Route path="/" element={<Final />} />
{/* <Route path="/" element={<Happy />} />
<Route path="/" element={<Project/>} /> */}
       
        <Route path="/resume" element={<Face />} />
      </Routes>


    </div>
}

export default Navbar