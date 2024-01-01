import { useContext } from "react";
import UserContext from "../utilities/UserContext";



const User = ()=> {

const {loggedInUser,setUserName} = useContext(UserContext);

return(
<div className="user-container">
<div>
      <input className="input-bar border border-black p-4 bg-black"
            type="text"
            placeholder="Enter your Username here"
            value={loggedInUser}
            onChange={(event)=> setUserName(event.target.value)}
          />
          </div> 
</div>
)
};

export default User;