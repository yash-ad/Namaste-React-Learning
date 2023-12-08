// Importing necessary dependencies and components
import { useState, useEffect } from "react";
import { CORS_URL, REST_INFO_API_URL } from "../utilities/config";
import { IMG_URL } from "../utilities/config";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

// Defining the RestaurantInfo component
const RestaurantInfo = () => {
  // State variables using the useState hook to hold and update data
  const [resInfo, setResinfo] = useState(null);
  const [resMenu, setResmenu] = useState(null);
  const [resMenuTitle, setResMenuTitle] = useState(null);
  const [vegFood, setVegFood] = useState('Veg');
  const [newResMenu, setNewResMenu] = useState(null);
  const [resNewInfo, setResNewInfo] = useState(null);

  // useParams hook to fetch dynamic parameters from the router
  const { resId } = useParams();

  // useEffect() hook to fetch the API after the component will load with a dependency array, it will render only once at the initial phase.
  useEffect(() => {
    fetchInfo();
  }, []);

  
  ///.Checking in the console browser how to clear the interval which was writtein the useEffect Hook:-
  // useEffect(()=>{
  //   const timer = setInterval(()=>{
  //     console.log("Namaste-React");
  //         },1000);
      
  //         return ()=>{
  //     clearInterval(timer);
  //         }
  // },[]);


  // Async function to fetch restaurant information
  const fetchInfo = async () => {
    const data = await fetch(CORS_URL + REST_INFO_API_URL + resId);
    const json = await data.json();

    // Setting state variables with fetched data
    setResinfo(json?.data?.cards[0]?.card?.card?.info);
    setResNewInfo(json?.data?.cards[0]?.card?.card?.info?.labels[1]);
    setResmenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    setResMenuTitle(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    setNewResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
  };

  // Before destructuring the data, we need to fetch it as we don't know how long it will take to fetch, and it will return undefined otherwise.
  if (resMenu === null) return <Shimmer />;

  // Destructuring values from the fetched data
  const { name, cuisines, avgRating, costForTwoMessage, cloudinaryImageId, locality, totalRatingsString, avgRatingString } = resInfo;
  const { lastMileTravelString, maxDeliveryTime } = resInfo?.sla;
  const { title } = resMenuTitle;
  const { message } = resNewInfo;

  // Rendering the JSX structure
  return (
    <div className="pages-container">
      <div className="rest-menu">
        {/* Top Menu Section */}
        <div className="top-menu">
          <div className="top-menu-left">
            {/* Displaying the restaurant image */}
            <img src={IMG_URL + cloudinaryImageId} alt="Restaurant" />
          </div>
          <div className="top-menu-right">
            <h1>{name}</h1>
            <p>{cuisines.join(" , ")}</p>
            <p>{locality} - {lastMileTravelString}</p>
            <div className="top-menu-right-child">
              {/* Displaying restaurant ratings, delivery time, and cost for two */}
              <p style={avgRating > 3.8 ? { backgroundColor: "darkgreen" } : { backgroundColor: "rgb(164, 14, 14)" }}>
                <i className="ri-star-fill"></i>
                {avgRating}
              </p>
              <span>|</span>
              <p>{maxDeliveryTime}mins</p>
              <span>|</span>
              <p>{costForTwoMessage}</p>
            </div>
          </div>
          <div className="ratings-container">
            {/* Displaying restaurant ratings with an icon */}
            <button className="RestaurantRatings_wrapper" >
              <span className="RestaurantRatings_avgRating" >
                <span className="icon-star"></span>
                <span><i className="ri-star-fill"></i>{avgRatingString}</span>
              </span>
              <span className="RestaurantRatings_totalRatings" >{totalRatingsString}</span>
            </button>
          </div>
        </div>

        {/* Mid Menu Section */}
        <div className="mid-menu">
          <button
            id="isVegBtn"
            role="switch"
            onClick={() => {
              // Toggling between Veg and All options
              if (vegFood === "Veg") {
                setVegFood("All");
              } else {
                setVegFood("Veg");
              }
              // Filtering the menu based on Veg or All
              if (vegFood === "All") {
                setResmenu(newResMenu);
              } else {
                const filteredRestMenu = resMenu?.filter((rest) => rest.card.info.isVeg > 0);
                setResmenu(filteredRestMenu);
              }
            }}
            style={{ backgroundColor: vegFood === "Veg" ? "green" : "orange" }}>
            {vegFood}
          </button>
        </div>

        {/* Main Menu Section */}
        <li>
          <div className="main-menu">
            <h1>
              {title}
              <span>({resMenu?.length})</span>
            </h1>
            {/* Iterating over the recommended list/array of objects using map() */}
            {resMenu?.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-left">
                  <h3>{item.card.info.name}</h3>
                  <p>{"₹" + item.card.info.price / 100}</p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="menu-right">
                  <img src={IMG_URL + item.card.info.imageId} alt="Item" />
                  <button id="addBtn">ADD</button>
                </div>
              </div>
            ))}
          </div>
        </li>

        {/* Bottom Menu Section */}
        <div className="bottom-menu">
          <div className="RestaurantLicence_wrapper__4BYQV">
            <div className="RestaurantLicence_licence__Oo5_q" aria-hidden="true">
              {/* Displaying FSSAI image */}
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i" alt="FSSAI" className="RestaurantLicence_image__2-5G_" />
            </div>
            <div></div>
          </div>
          <div className="RestaurantFooterAddress_wrapper__16xqp" aria-hidden="true">
            <p className="RestaurantFooterAddress_name__deVKZ">{name}</p><br></br>
            <p>Outlet: {locality}</p><br></br>
            <div className="RestaurantFooterAddress_address__37uUA">
              <div className="icon-markerDark RestaurantFooterAddress_icon__2Kjdg"></div>
              <p>{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the RestaurantInfo component
export default RestaurantInfo;
