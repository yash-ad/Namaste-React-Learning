// Importing necessary dependencies
import { CDN_URL } from "../utilities/config";

// Defining the RestaurantCard component
const RestaurantCard = (props) => {
  // Destructuring the props to get the restaurantData object
  const { restaurantData } = props;

  // Destructuring values from the restaurantData object
  const { name, cloudinaryImageId, avgRating, costForTwo, areaName, cuisines, locality } = restaurantData?.info;
  const { slaString } = restaurantData?.info.sla;

  return (
    <div className="restaurant-list">
      <div className="place">
        <div className="list-item">
          <div className="item-content">
            <div className="top-image">
              {/* Displaying the restaurant image using CDN_URL and cloudinaryImageId */}
              <img className="res-img" alt="Res-image" src={CDN_URL + cloudinaryImageId} />
            </div>
          </div>
          <div className="place-name-div">
            <div className="name">{name}</div>
            <div className="food-list">{cuisines.join(' , ')}</div>
          </div>
          <div className="info-div">
            {/* Displaying ratings, delivery time, and cost for two */}
            <div className="ratings"><span> <i className="ri-star-fill"></i> {avgRating}</span></div>
            <div className="dot">.</div>
            <div className="time">{slaString}</div>
            <div className="dot">.</div>
            <div className="price">{costForTwo}</div>
          </div>
          <div className="address">
            {/* Displaying locality and areaName */}
            <span className="sNAfh">{locality} | {areaName}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the RestaurantCard component
export default RestaurantCard;
