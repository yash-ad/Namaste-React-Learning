import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const error = useRouteError();
return(
<div class="GenericError__container">
        <div class="GenericError__content">
          <div class="GenericError__image"></div>
          <div class="GenericError__title">Oops something went wrong!!</div>
          <div class="GenericError__description">
          {error.status}:not found. We'll be back shortly.
          </div>
        </div>
      </div>
)
};


export default Error;
