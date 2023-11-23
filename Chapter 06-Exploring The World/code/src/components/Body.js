import RestaurantCard from "./RestaurantCard";
// import restaurantLists from "../utilities/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);

useEffect(()=>{
fetchData()
},[]);

const fetchData = async () => {

    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4833062&lng=73.8143365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); 

    const json = await data.json();

    //Optional chaining
    setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };

    // //Conditional rendering:-
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer/>
    //   }

    //Conditional rendering using ternary operator:-
return listOfRestaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
    <div className="search-container">
<div className="search-bar">
<input type="text" placeholder="Satisfy your hunger now!" id="searchInp"/>
    <button id="searchBtn" onClick={()=>{}}>Search</button>
</div>
    </div>
    <div className="filter">
        <button className="finder-btns" onClick={() => {
const filteredLists = listOfRestaurants.filter(
    (res)=> res.info.avgRating > 4
         )
      setlistOfRestaurants(filteredLists)
}}>Top Rated Restaurants</button>

        <button 
        className="finder-btns" 
        onClick={()=>{
const findVegRestaurants = listOfRestaurants.filter((res)=>(
res.info.veg === true))
setlistOfRestaurants(findVegRestaurants)
        }}>Veg Restaurants
        </button>
        
    </div>
    <div className="restaurant-container">
        {listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
        ))} 
    </div>
    </div>
    )
};

export default Body;