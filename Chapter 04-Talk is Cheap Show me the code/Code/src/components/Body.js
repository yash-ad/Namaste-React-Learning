import restaurantList from "../utilities/mockdata";
import RestaurantCard from "./RestaurantCard";

const Body = ()=>{
    return(
<div className='body'>
<div className='search-container'>
    <div className="search-bar">
      <input type="text" placeholder="Satisfy your hunger now!" id="searchInp"></input>
      <button id="searchBtn">Search</button>
      </div>
    </div>
<div className='restaurant-container'> 
{restaurantList.map((restaurant)=>(
<RestaurantCard key={restaurant.info.id} restaurantData={restaurant}/>
))}
</div>
</div>
)
};

export default Body;