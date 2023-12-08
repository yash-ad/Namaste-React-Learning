import { useEffect,useState } from "react";
import { CORS_URL, REST_INFO_API_URL } from "../utilities/config";


const useRestaurantInfo = (resId)=>{

 // State variables using the useState hook to hold and update data
 const [resInfo,setResInfo] = useState(null);
  const [resMenu,setResMenu] = useState(null);
  const [resMenuTitle,setResMenuTitle] = useState(null);
  const [newResMenu, setNewResMenu] = useState(null);
  const [resNewInfo, setResNewInfo] = useState(null);

 // useEffect() hook to fetch the API after the component will load with a dependency array, it will render only once at the initial phase.
useEffect(()=>{
fetchInfo();
},[]);


//Async function to fetch restaurant information
const fetchInfo =  async ()=> {
const data =  await fetch(CORS_URL + REST_INFO_API_URL + resId);
const json = await data.json();

//Setting state variables with fetched data
setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

setResInfo(json?.data?.cards[0]?.card?.card?.info);

setResMenuTitle(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

setNewResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

setResNewInfo(json?.data?.cards[0]?.card?.card?.info?.labels[1]);
  
};

return {resMenu,resInfo,resMenuTitle,newResMenu,resNewInfo};

};

export default useRestaurantInfo;