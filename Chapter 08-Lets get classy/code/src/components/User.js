import { useState } from "react";

const User = (props)=>{
const[count] = useState(0);
const[message] = useState('Hello React , Im From functional component')
const{name,location} = props;
return(
<div className="user-card">
<div>Name:{name}</div>
<div>Location:{location}</div>
<h2>Count:{count}</h2>
<h3>Message:{message}</h3>
</div>
)
};

export default User;