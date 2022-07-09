import "./style.css"
import { useNavigate } from "react-router-dom"
const Project = ()=>{
const navegate = useNavigate();


    const img1 ="https://www.channelsight.com/wp-content/uploads/2022/04/shutterstock_740501749.jpg"
    const img2="https://media.istockphoto.com/photos/customers-shopping-in-modern-clothing-store-retail-sales-associate-picture-id1345291289?b=1&k=20&m=1345291289&s=170667a&w=0&h=XP5HfcthaxKOKI0MDJNRViMSZKLfc6xAXNdqzsiQroU="
    const img3="https://idowaz.com/blog/wp-content/uploads/2021/10/Healthy-Food-Doesnt-Have-To-Be-Expensive.jpg"
    return <div className="totalDiv">

<selection>
    <h1 className="letter" >
    <span>P</span>
    <span>R</span>
    <span>O</span>
    <span>J</span>
    <span>E</span>
    <span>C</span>
    <span>T</span>
    <span >S</span>
    </h1>
</selection>



<div className="allProjects ">
<div className="pro ">

<img onClick={()=>{
    navegate("/project1")
}} className="image " src={img1}/>
<p>An online store for selling electronic devices .Allows users to easily buy products 
Express.js, MYSQL,React and Redux</p>


</div>
<div className="pro">
<img onClick={()=>{
    navegate("/project2")
}} className="image " src={img2}/>
<p>
An online clothing store that displays all the products and all their details, where the user can shop online according to the category they desire
Express.js, Mongoose,React 
</p>

</div>
<div className="pro ">

<img className="image" src={img3}/>
<p>
A site that display healthy food recipes, all their details, and calculate the ideal weight
</p>

</div>
</div>


    </div>
}

export default Project 