import React from "react";

class UserClass extends React.Component{

    constructor(props){
super(props)
    };

render(){
    const{name,location} =  this.props;
    return(
        <div className="user-container">
        <div>Name:{name}</div>
        <div>Location:{location}</div>
        </div>
        )
}
};

export default UserClass;