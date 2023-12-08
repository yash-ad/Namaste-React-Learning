// Importing necessary dependencies and components
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CORS_URL } from "../utilities/config";
import { API_URL } from "../utilities/config";
import { Link } from "react-router-dom";

// Defining the Body component
const Body = () => {
  // State variables using the useState hook
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Async function to fetch restaurant data
  const fetchData = async () => {
    try {
      // Fetching data from the specified API
      const data = await fetch(CORS_URL + API_URL);
      const json = await data.json();

      // Setting the state variables with restaurant data
      setlistOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error('Error Fetching Data:', error);
    }
  };

  // Display a loading shimmer if there are no filtered restaurants yet
  if (filterRestaurants.length === 0) return <Shimmer />;

  return (
    <div className="body">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Satisfy your hunger now!"
            id="searchInp"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            id="searchBtn"
            onClick={() => {
              // Filter restaurants based on search text
              let filterSearch = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              if (filterSearch.length === 0) {
                // Handle case when no restaurants match the search
              } else {
                setFilterRestaurants(filterSearch);
              }
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="filter-Buttons">
        <button
          className="finder-btns"
          onClick={() => {
            // Filter restaurants based on ratings greater than 4.0
            const filteredLists = listOfRestaurants.filter((res) => res.info.avgRating > 4);
            setFilterRestaurants(filteredLists);
          }}
        >
          Ratings 4.0+
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
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

// Exporting the Body component
export default Body;
