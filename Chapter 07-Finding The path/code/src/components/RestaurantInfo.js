import { useEffect } from "react";

const RestaurantInfo = ()=>{  
    useEffect(()=>{
fetchInfo()
    },[]);

    const fetchInfo = async ()=>{
const response = await fetch();

    }
return(
<div className="res-info-container">
<h1>Name of the restaurant</h1>
</div>
)
};

export default RestaurantInfo;