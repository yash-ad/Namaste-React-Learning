import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../utilities/mockData";
import { useState } from "react";

const Body = ()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState(restaurantLists);

      return(
    <div className="body">
    <div className="search-container">
    <input type="text" placeholder="Satisfy your hunger now!" id="searchInp"/>
    <button id="searchBtn">Search</button>
    </div>
    <div className="filter">
        <button 
        className="filter-btn" 
        onClick={() => {
const filteredLists = listOfRestaurants.filter(
    (res)=> res.info.avgRating > 4
         );
      setlistOfRestaurants(filteredLists)
        }}
        >Top Rated Restaurants</button>
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