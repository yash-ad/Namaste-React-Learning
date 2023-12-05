const User = (props)=>{
const{name,location} = props;
return(
<div className="user-container">
<div>Name:{name}</div>
<div>Location:{location}</div>
</div>
)
};

export default User;