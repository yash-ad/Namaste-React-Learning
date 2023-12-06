import React from "react";

class UserClass extends React.Component{

 constructor(props){   
super(props)
this.state = {
count : 1,
message:"Hello React,Im from Classbased component"
};
    };

render(){
    const{name,location} =  this.props;
    const{count,message} = this.state;
    return(
        <div className="user-card">
        <div>Name:{name}</div>
        <div>Location:{location}</div>
        {/* <h3>Count:{this.state.count}</h3>
        <h4>Message:{this.state.message}</h4> */}
        <h3>Count:{count}</h3>
        <h4>Message:{message}</h4>
        </div>
        )
}
};

export default UserClass;