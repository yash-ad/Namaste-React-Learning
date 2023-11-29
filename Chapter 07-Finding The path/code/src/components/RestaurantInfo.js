import {useState, useEffect } from "react";
import { CORS_URL } from "../utilities/config";
import {RESTINFO_API } from "../utilities/config";
import Shimmer from "./Shimmer";


const RestaurantInfo = ()=>{  
const [resInfo,setResinfo] = useState(null);

//`useEffect()` hook to fetch the API after the component will load with a dependancy array, it will render only at once intial phase.
useEffect(()=>{fetchInfo()},[]);

const fetchInfo = async ()=>{

    const data = await fetch(CORS_URL + RESTINFO_API);

    const json  = await data.json();

    setResinfo(json.data?.cards[0]?.card?.card?.info);

};
//Before destructing the data, we need to fetch it as we don't know how long it will take to fetch and it will return undefined otherwise.
if(resInfo === null) return <Shimmer/>

const {name,cuisines,avgRating,costForTwoMessage} = resInfo;
const {deliveryTime} = resInfo.sla;

return(
<div className="pages-container">
<div className="rest-menu">
<h1>{name}</h1>
<p>{cuisines.join(',')}</p>
<p>{avgRating}</p>
<p>{deliveryTime}mins</p>
<p>{costForTwoMessage}</p>
</div>
</div>
)
};

export default RestaurantInfo;