// Importing necessary dependencies and components
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";   
import useRestaurantList from "../utilities/useRestaurantList";
import useOnlineStatus from "../utilities/useOnlineStatus";
import NetworkStatus from "./NetworkStatus";
import { withPromotedLabel } from "./RestaurantCard";

// Defining the Body component
const Body = () => {
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const listOfRestaurants = useRestaurantList();
const [searchText, setSearchText] = useState('');
// console.log(listOfRestaurants);


//This is a higher order component that we passed in the RestaurantCard which returns a new component.
const RestaurantPromotedLabel = withPromotedLabel(RestaurantCard);

//The `useEffect` hook is a React hook that is used for handling side-effects in functional components, in this specific case,it is being used to update the state variable `filterRestaurants` whenever the `listOfRestaurants` changes.
useEffect(()=>{
  // console.log("listOfRestaurants:", listOfRestaurants);
//The function inside useEffect is the side effect that you want to perform. In this case, it sets the state of filterRestaurants using the setFilterRestaurants function to be equal to the current value of listOfRestaurants.
setFilterRestaurants(listOfRestaurants);
//The second argument to useEffect is the dependency array. It contains variables that the useEffect depends on. The useEffect will be re-run whenever any of the variables in the dependency array change.
},[listOfRestaurants])
//In your code, the useEffect is triggered whenever the value of listOfRestaurants changes. When this happens, it updates filterRestaurants to match the latest value of listOfRestaurants.
// console.log("filterRestaurants:", filterRestaurants);

//Lets add the feature overhere to check Whether the user is an offline or not with our own custom hook `useOnlineStatus()`.
const onlineStatus = useOnlineStatus()


if(onlineStatus === false)
  return( <NetworkStatus/>
  )



// Display a loading shimmer if there are no filtered restaurants yet
// if (filterRestaurants.length === 0) return <Shimmer />;

if (!filterRestaurants || filterRestaurants.length === 0) {
  // Data is not yet available, return a loading state or nothing
  return <Shimmer/>;
};


  return (
    <div className="body">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
       <input className="input-bar"
            type="text"
            placeholder="Satisfy your hunger now !"
            id="searchInp"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            // To implement the search functionality when the user presses the `Enter` key.If the key code corresponds to the `Enter ` key , you can trigger the search logic.
            // using `onKeyDown` event.
            onKeyDown={(event)=>{
              if (event.key === 'Enter') {
                // Trigger search when Enter key is pressed
                let filterSearch = listOfRestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                  res.info.cuisines.includes(searchText)
                 
                );
                if (filterSearch.length === 0) {
                  // Handle case when no restaurants match the search
                } else {
                  setFilterRestaurants(filterSearch);
                }
              }
            }}
          />

      <div className="button-container">
      <button
            id="searchBtn"
            onClick={() => {
                  // Filter restaurants based on case-insensitive search text
                  let filterSearch = listOfRestaurants.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                    res.info.cuisines.includes(searchText)
                  );
                  if (filterSearch.length === 0) {
                    // Handle case when no restaurants match the search
                  } else {
                    setFilterRestaurants(filterSearch);
                  }
                }
            }
          ><svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path fill="#fc9a01" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </button>
      </div>
       </div>
       </div>

  



      {/* Filter Buttons */}
      <div className="filter-Buttons rounded-lg hover:ring-offset-zinc-900 ">
        <button
          className="finder-btns"
          onClick={() => {
            // Filter restaurants based on ratings greater than 4.0
            const filteredLists = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setFilterRestaurants(filteredLists);
          }}
        >
         Top Rated Restaurants
        </button>
        <button
          className="finder-btns"
          onClick={() => {
            // Filter restaurants to show only pure veg
            const findVegRestaurants = listOfRestaurants.filter((res) => res.info.veg === true);
            setFilterRestaurants(findVegRestaurants);
          }}
        >
          Pure Veg
        </button>
      </div>
   


      {/* Displaying Restaurant Cards */}
      <div className="restaurant-container">
        {filterRestaurants?.map((restaurant) => (
          // Linking each restaurant card to its details page
          <Link key={restaurant.info.id} to={'/restaurants/' + restaurant.info.id}>


{/* The recent update to the Swiggy API, the 'PROMOTED' data is no longer available,Because there were no any option so Instead of "Promoted' there is a 'veg' attribute for every restaurant. So I used that for label "Promoted" using higher order components */}
{restaurant.info.veg ? (
  <RestaurantPromotedLabel restaurantData={restaurant} />
  ) : ( <RestaurantCard restaurantData={restaurant} />)
}
           
          </Link>
        ))}
      </div>
    </div>
  );
};

// Exporting the Body component
export default Body;
