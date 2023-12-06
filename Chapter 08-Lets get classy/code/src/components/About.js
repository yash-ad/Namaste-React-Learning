import User from "./User";
import UserClass from "./UserClass";

const About = ()=>{ 
return(
<div className="about-us-container">
<h1>About Us</h1> 
{/* <User name={"Yash dandnaik (functional)"} location={"Pune (functional)"}/> */}
<UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/>
</div>
)
}


export default About;