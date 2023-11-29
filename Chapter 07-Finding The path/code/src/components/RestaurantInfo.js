import {useState, useEffect } from "react";
import { RESINFO_API_URL } from "../utilities/config";

const RestaurantInfo = ()=>{  
    
    const [resInfo,setResinfo] = useState(null);

    useEffect(()=>{
fetchInfo()
    },[]);

    const fetchInfo = async ()=>{
const response = await fetch(RESINFO_API_URL);
const data     = await response.json();
    }


return(
<div className="res-info-container">
<h1>Name of the restaurant</h1>
</div>
)
};

export default RestaurantInfo;