import RestaurantCard from "./RestaurantCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_URL } from "../utilities/config";
import { API_URL} from "../utilities/config";

const Body = ()=>{

const [listOfRestaurants,setlistOfRestaurants] = useState([]);
const [filterRestaurants,setFilterRestaurants] = useState([]);
const [searchText,setSearchText] = useState("");

useEffect(()=>{
fetchData()
},[]);

const fetchData = async () => {
try{
    const data = await fetch( CORS_URL + API_URL); 

    const json = await data.json();
    
    setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    
    setFilterRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
        console.error('Error Fetching Data:',error)
    }
};


if (filterRestaurants.length === 0) return <Shimmer />;
     

return(
<div className="body">

<div className="search-container">
<div className="search-bar">
<input type="text" placeholder="Satisfy your hunger now!" id="searchInp" value={searchText} onChange={(event)=>{
setSearchText(event.target.value);
}}>
</input>
<button id="searchBtn" onClick={()=>{
let filterSearch = listOfRestaurants.filter((res)=>
res.info.name.toLowerCase().includes(searchText.toLowerCase())
)
if(filterSearch.length === 0){
}
else{
setFilterRestaurants(filterSearch)
}}}>Search
</button>
</div>
</div>

<div className="filter-Buttons">
<button className="finder-btns" 
onClick={() => {const filteredLists = listOfRestaurants.filter((res)=> res.info.avgRating > 4)
setFilterRestaurants(filteredLists)
}}>Ratings 4.0+
</button>

<button className="finder-btns" onClick={()=>{const findVegRestaurants = listOfRestaurants.filter((res)=>(
res.info.veg === true))
setFilterRestaurants(findVegRestaurants)
        }}>Pure Veg
</button>     
</div>

<div className="restaurant-container">
        {filterRestaurants?.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
        ))} 
</div>

</div>
)
};

export default Body;