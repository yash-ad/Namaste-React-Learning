import React from 'react';
import ReactDOM from 'react-dom/client';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Wireframe of the App:-
//Componenets:-
//1.Header => logo-container,nav-items.
//2.Body => Search-container,restaurant-container > RestaurantCard > Images > Name of restaurant > star-rating > cuisines > delivery time .
//3.Footer => Copyrights-container,Links-container.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//JSON data:-
const restaurantObject =
      {
        "info": {
          "id": "21395",
          "name": "Brahma Garden",
          "cloudinaryImageId": "uvltlhppkqfium1fpuay",
          "locality": "Sinhagad Road",
          "areaName": "Sinhagad Road",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "South Indian",
            "Chinese",
            "Juices",
            "Biryani",
            "Punjabi"
          ],
          "avgRating": 4.3,
          "veg": true,
          "feeDetails": {
            "restaurantId": "21395",
            "fees": [
              {
                "name": "BASE_DISTANCE",
                "fee": 4500
              },
              {
                "name": "BASE_TIME"
              },
              {
                "name": "ANCILLARY_SURGE_FEE"
              }
            ],
            "totalFee": 4500
          },
          "parentId": "49529",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 24,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "24 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2023-11-16 23:30:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹900",
            "discountTag": "FLAT DEAL",
            "discountCalloutInfo": {
              "message": "Free Delivery",
              "logoCtx": {
                "logo": "v1655895371/free_delivery_logo_hqipbo.png"
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {
          "context": "seo-data-4d8e0018-4106-4521-9150-bdfd0efc21a0"
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/brahma-garden-sinhagad-road-pune-21395",
          "text": "RESTAURANT_MENU",
          "type": "WEBLINK"
        }
      };

//RestaurantCard-component:- We created a new reusable component to inject into the code- Body component > restaurant-container.
const RestaurantCardComponent = (props)=>{
  const {restaurantData} = props;
return(
<div className="restaurant-list">
                    <div className="place">
                            <div className="list-item">
                                <div className="item-content">
                                    <div className="top-image">
                                        <img className='res-img' alt="Res-Image" src={props.resImage}/>
                                    </div>
                                    </div>
                                    <div className="place-name-div">
                                        <div className="name">{}</div>
                                        <div className="food-list">{}</div>
                                    </div>
                                   <div className="info-div">
                                    <div className="ratings"><span>{}</span></div>
                                    <div className="dot">.</div>
                                    <div className="time">{}</div>
                                    <div className="dot">.</div>
                                    <div className="price">{props.price}</div>
                                </div>
                                              
                                <div className="address">
                                    
                                    <span className="sNAfh">{props.address}</span>
                                </div>
                              </div>
                            </div>                      
</div>
)
};

//Header-Component:-
const Header = ()=>{
return(
<div className='header'>
<div className='logo-container'>
    <img className="logo" src='https://logohistory.net/wp-content/uploads/2022/10/Gofood-logo.png'/>
</div>
<div className='search-container'>Search</div>
<div className='nav-items'>
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
</div>
</div>
)
};

//Body-Component:-
const Body = ()=>{
    return(
<div className='body'>
<div className='restaurant-container'>
<RestaurantCardComponent restaurantData={restaurantObject} />
{/* resImage='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_750,h_500,c_fill/uvltlhppkqfium1fpuay' resName="Bramha Garden Restaurant" resCuisines="Biryani, Maharashtrian, Seafood" resRatings="4.5"deliveryTime="40 mins"price="₹1000 for two"/> */}
{/* <RestaurantCardComponent resImage='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_750,h_500,c_fill/jua0srbxkeug7gtvkzrl'resName="The Good Bowl" resCuisines="Japanese, Korean, Chinese"resRatings="4.2"deliveryTime="35 mins"price="₹500 for two"/>
<RestaurantCardComponent resImage='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_750,h_500,c_fill/c058b951bd917bf716630dff74648a5d'resName="Haldiram's Restaurant" resCuisines="North Indian, South Indian"resRatings="4.0"deliveryTime="30 mins"price="₹200 for two"/> */}
</div>
</div>
)
};

//Footer-Component:-
const Footer = ()=>{
    
}


//AppLayout-Component:-
//To rendering the app and all the data which are stored into the  `div` `App-container`.
const AppLayout = ()=>{
    return ( 
    <div id ='App-container'>
 {/* //1.Header-Component - This is an example of component composition it means that The component is inside an another component.*/}
<Header/>

{/* //2.Body-Component - This is an example of component composition it means that The component is inside an another component.*/}
<Body/>
    </div>)
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
