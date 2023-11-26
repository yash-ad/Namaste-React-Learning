import RestaurantCard from "./RestaurantCard";
// import restaurantLists from "../utilities/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = ()=>{
  const [listOfRestaurants,setlistOfRestaurants] = useState([]);
  const [filterRestaurants,setFilterRestaurants] = useState([]);
  const [searchText,setSearchText] = useState("");

  
//   console.log('Body Render');

useEffect(()=>{
fetchData()
},[]);

const fetchData = async () => {
try{
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4833062&lng=73.8143365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    ); 

    const json = await data.json();
    
    //Optional chaining
    setlistOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    catch(error){
        console.error('Error Fetching Data:',error)
    }

};

    // //Conditional rendering using if condition:-
    if (listOfRestaurants.length === 0) {
        return <Shimmer/>
      }

    //Conditional rendering using ternary operator:-
//   return listOfRestaurants.length === 0 ? <Shimmer/> : 
return(
    <div className="body">

    <div className="search-container">
<div className="search-bar">
<input type="text" placeholder="Satisfy your hunger now!" id="searchInp" value={searchText} onChange={(event)=>{
setSearchText(event.target.value);
}}></input>
    <button id="searchBtn" 
    onClick={()=>{
let filterSearch = listOfRestaurants.filter((res)=>
res.info.name.toLowerCase().includes(searchText.toLowerCase())
)
if(filterSearch.length === 0){

}
else{
setFilterRestaurants(filterSearch)
}}}>Search</button>
</div>
    </div>

    <div className="filter-Buttons">
    <button className="finder-btns" 
        onClick={() => {
const filteredLists = listOfRestaurants.filter(
    (res)=> res.info.avgRating > 4
         )
      setFilterRestaurants(filteredLists)
}}>Top Rated Restaurants</button>
        <button 
        className="finder-btns" 
        onClick={()=>{
const findVegRestaurants = listOfRestaurants.filter((res)=>(
res.info.veg === true))
setFilterRestaurants(findVegRestaurants)
        }}>Veg Restaurants
        </button>
        
    </div>

    <div className="restaurant-container">
        {filterRestaurants.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
        ))} 
    </div>

    </div>
    )
};

export default Body;