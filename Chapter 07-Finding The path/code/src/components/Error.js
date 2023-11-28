import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const error = useRouteError();
return(
<div className="error-container">
    <h1>Oops something went wrong!!</h1>
    <h1>{error.status}: not found</h1>
</div>
)
};


export default Error;