import {useState, useEffect } from "react";
import { RESINFO_API_URL } from "../utilities/config";
import Shimmer from "./Shimmer";

const RestaurantInfo = ()=>{  
const [resInfo,setResinfo] = useState(null);

useEffect(()=>{fetchInfo()},[]);

const fetchInfo = async ()=>{
try{
    const response = await fetch(RESINFO_API_URL);
    const json  = await response.json();
    setResinfo(json.data);
}
catch(error){
console.error('Error Fetching Data:',error)
}
};

if(resInfo === null) return <Shimmer/>

return(
<div className="pages-container">
<h1>Name of the restaurant</h1>
</div>
)
};

export default RestaurantInfo;