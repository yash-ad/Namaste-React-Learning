import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../utilities/mockData";
import { useState } from "react";

const Body = ()=>{
///.1:-
//const arr = useState(restaurantLists)
//const [listOfRestaurants,setlistOfRestaurants] = arr;
//const listOfRestaurants = arr[0];
//const setlistOfRestaurants = arr[1];

///.Both are same line of code -> The difference is way of writing code in an effecient way.

///2.:-
//Array Destructuring and useState(restaurantLists) -> returns an array.
  const [listOfRestaurants,setlistOfRestaurants] = useState(restaurantLists);

      return(
    <div className="body">
    <div className="search-container">
    <input type="text" placeholder="Satisfy your hunger now!" id="searchInp"/>
    <button id="searchBtn" onClick={()=>{}}>Search</button>
    </div>
    <div className="filter">
        <button 
        className="finder-btns" 
        onClick={() => {
const filteredLists = listOfRestaurants.filter(
    (res)=> res.info.avgRating > 4
         );
      setlistOfRestaurants(filteredLists)
        }}
        >Top Rated Restaurants</button>

        <button 
        className="finder-btns" 
        onClick={()=>{
const findVegRestaurants = listOfRestaurants.filter((res)=>(
res.info.veg === true));
setlistOfRestaurants(findVegRestaurants);
        }}>Veg Restaurants
        </button>
        
    </div>
    <div className="restaurant-container">
        {listOfRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
        ))};    
    </div>
    </div>
    )
    };

    export default Body;