import RestaurantCard from "./RestaurantCard";
import restaurantLists from "../utilities/mockData";

const Body = ()=>{
    return(
    <div className="body">
    <div className="search-container">
    <input type="text" placeholder="Satisfy your hunger now!" id="searchInp"/>
    <button id="searchBtn">Search</button>
    </div>
    <div className="filter">
        <button className="filter-btn" onClick={()=>{
        restaurantLists.filter((res) => res.data.avgRating > 4 )
        }}
        >Top Rated Restaurants</button>
    </div>
    <div className="restaurant-container">
        {restaurantLists.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
        ))};    
    </div>
    </div>
    )
    };

    export default Body;