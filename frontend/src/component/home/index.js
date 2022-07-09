import Project from "../projects";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Home = ({value}) => {
  let navegate= useNavigate()
  let img =
    "https://res.cloudinary.com/hudhud/image/upload/v1657316290/%D8%B5%D9%88%D8%B1%D8%A9%D8%A9_s01esg.png";
  let img2 =
    "https://res.cloudinary.com/hudhud/image/upload/v1657323881/aaaaaaaaaaaa_vpqbdl.png";
  return (
    <div className="all_home_home">
  

{ value &&     <div className="sidebar">
        <img src={img} />
        <h4>Hedaya Al-Momani</h4>

        <div className="link_cotact">
          <a href="https://api.whatsapp.com/send/?phone=962788066405&text&type=phone_number&app_absent=0">
            <i class="bi bi-whatsapp"></i>
          </a>

          <a href="https://www.linkedin.com/in/hedayaalmomani/">
            {" "}
            <i class="bi bi-linkedin"></i>
          </a>

          <a href="https://web.facebook.com/hedaya.almomani.18">
            <i class="bi jj bi-facebook"></i>
          </a>
          <a href="https://github.com/HedayaAlmomani">
            <i class="bi bi-github"></i>
          </a>
        </div>
        <div className="link_Home">
          <div>
            <i class="bi bi-house-fill"></i>
            <h5>Home</h5>
          </div>
          <div>
            {" "}
            <i class="bi bi-person"></i>
            <h5 onClick={()=>{
              navegate("/about")
            }}>About</h5>
          </div>
          <div>
            {" "}
            <i class="bi bi-file-earmark-person"></i>
            <h5 onClick={()=>{
               navegate("/resume")
            }}>Resume</h5>
          </div>
          <div>
            <i class="bi bi-layout-split"></i>
            <h5>Portfolio</h5>
          </div>
        </div>
      </div>}


<img className="img_home" src={img2} />

    
    </div>
  );
};

export default Home;
