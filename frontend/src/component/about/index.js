
import "./style.css"
const About = ()=>{

let img = "https://res.cloudinary.com/hudhud/image/upload/v1657316290/%D8%B5%D9%88%D8%B1%D8%A9%D8%A9_s01esg.png"
    return <div className="div1">

<div className="div2">
<h2>About </h2>
<p>Full-Stack Developer who build and develop web applications, apply creative thinking to solve problems,
    <br></br>I work hard to turn ideas into practical applications, have a great passion for teamworking.
    <br></br> I got advanced knowledge of MERN Stack, MySQL, JavaScript, jQuery and aiming to expand my knowledge and skills in web development</p>

</div>

<div className="div3">
<div className="div4">
    <img src={img} />
</div>

<div className="div5">

    <h3>Project 1</h3>
    <h4>A site for selling electrical products</h4>

<p>An online store for selling electronic devices .Allows users to easily buy products 
Express.js, MYSQL,React and Redux</p>


<h3>Project 2</h3>
    <h4>Clothing store</h4>

<p>An online clothing store that displays all the products and all their details, where the user can shop online according 
    <br></br>to the category they desire
Express.js, Mongoose,React</p>

</div>
</div>

    </div>

    
}
export default About