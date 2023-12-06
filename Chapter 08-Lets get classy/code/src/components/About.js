import React from "react";
// import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

///.Classbased Component:-

class About extends Component{
constructor(props){
   super(props) 
console.log("Parent constructor called");
}
componentDidMount(){
    console.log("Parent componentDidMount called");
}
render(){
    console.log("Parent render called")
    return(
        <div className="about-us-container">
        <h1>About Us</h1> 
        <UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/>
        </div>)
}
};

//Outputs in the console:-
// 1.Parent constructor called
// 2.About.js:17 Parent render called
// 3.UserClass.js:12 Child constructor called
// 4.UserClass.js:20 Child render called
// 5.UserClass.js:16 Child componentDidMount called
// 5.About.js:14 Parent componentDidMount called

///.Functional Component:-
// const About = ()=>{ 
// return(
// <div className="about-us-container">
// <h1>About Us</h1> 
// {/* <User name={"Yash dandnaik (functional)"} location={"Pune (functional)"}/> */}
// <UserClass name={"Yash dandnaik (class)"} location={"Pune (class)"}/>
// </div>
// )
// }


export default About;