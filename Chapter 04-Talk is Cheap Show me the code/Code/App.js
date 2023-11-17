import React from 'react';
import ReactDOM from 'react-dom/client';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Wireframe of the App:-
//Componenets:-
//1.Header => logo-container,nav-items.
//2.Body => Search-container,restaurant-container > RestaurantCard > Images > Name of restaurant > star-rating > cuisines > delivery time .
//3.Footer => Copyrights-container,Links-container.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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



//JSON data:-
const restaurantObject =
      [
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
              "nextCloseTime": "2023-11-17 23:30:00",
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
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/brahma-garden-sinhagad-road-pune-21395",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "156120",
            "name": "The Good Bowl",
            "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
            "locality": "Karve Road",
            "areaName": "Karve Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Pastas",
              "Punjabi",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "156120",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3300
            },
            "parentId": "7918",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-good-bowl-karve-road-karve-nagar-pune-156120",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "34845",
            "name": "McDonald's",
            "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
            "locality": "Motiram Nagar",
            "areaName": "Warje",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Beverages",
              "Cafe",
              "Desserts"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "34845",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3300
            },
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "18 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 00:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-motiram-nagar-warje-pune-34845",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "16059",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "Karve Road",
            "areaName": "Erandwane",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Burgers",
              "Biryani",
              "American",
              "Snacks",
              "Fast Food"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "16059",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6200
            },
            "parentId": "547",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-karve-road-erandwane-pune-16059",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "14548",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Paud Road",
            "areaName": "Kothrud",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Burgers",
              "American"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "14548",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "166",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 4.2,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "4.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 06:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-paud-road-kothrud-pune-14548",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "63005",
            "name": "LunchBox - Meals and Thalis",
            "cloudinaryImageId": "ssdvzukpczydvv1hwwif",
            "locality": "Sudhakar Thorat Colony",
            "areaName": "Karve Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Biryani",
              "North Indian",
              "Punjabi",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "63005",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3300
            },
            "parentId": "4925",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-sudhakar-thorat-colony-karve-nagar-pune-63005",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "334229",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Atul Nagar",
            "areaName": "Warje",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Pizzas"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "334229",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3300
            },
            "parentId": "721",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 26,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "26 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-atul-nagar-warje-pune-334229",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "229278",
            "name": "Faasos - Wraps & Rolls",
            "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
            "locality": "Law College Road",
            "areaName": "Erandwane",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Kebabs",
              "Fast Food",
              "Snacks",
              "North Indian",
              "American",
              "Healthy Food",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "229278",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "21809",
            "avgRatingString": "4.2",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "29 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:59:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-law-college-road-erandwane-pune-229278",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "34724",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Warje",
            "areaName": "Warje",
            "costForTwo": "₹350 for two",
            "cuisines": [
              "Healthy Food",
              "Salads",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 3.8,
            "feeDetails": {
              "restaurantId": "34724",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "2",
            "avgRatingString": "3.8",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 22,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "22 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-warje-pune-34724",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "303296",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "abbhetnc04iqbs5kjdik",
            "locality": "Gangotri",
            "areaName": "Bavdhan",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "Desserts",
              "Ice Cream",
              "Ice Cream Cakes"
            ],
            "avgRating": 4.5,
            "veg": true,
            "feeDetails": {
              "restaurantId": "303296",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 6600
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 6600
            },
            "parentId": "582",
            "avgRatingString": "4.5",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 6.5,
              "serviceability": "SERVICEABLE",
              "slaString": "28 mins",
              "lastMileTravelString": "6.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 22:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-gangotri-bavdhan-pune-303296",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "284807",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "182191ab163770437b62861a6f987709",
            "locality": "Karve Road",
            "areaName": "Kothrud",
            "costForTwo": "₹400 for two",
            "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
            ],
            "avgRating": 4.4,
            "feeDetails": {
              "restaurantId": "284807",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5000
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5000
            },
            "parentId": "195515",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "23 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:30:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-karve-road-kothrud-pune-284807",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "518510",
            "name": "EatFit",
            "cloudinaryImageId": "6126c9b45de2cb222405c1af8a321e74",
            "locality": "Paud Road",
            "areaName": "Kothrud",
            "costForTwo": "₹270 for two",
            "cuisines": [
              "Chinese",
              "Healthy Food",
              "Tandoor",
              "Pizzas",
              "North Indian",
              "Thalis",
              "Biryani"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "518510",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "76139",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 3.8,
              "serviceability": "SERVICEABLE",
              "slaString": "24 mins",
              "lastMileTravelString": "3.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:45:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "brand",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-paud-road-kothrud-pune-518510",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "112062",
            "name": "Aroma's Hyderabad House",
            "cloudinaryImageId": "aaxakpacgyunpodsygfd",
            "locality": "Warje",
            "areaName": "Warje",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Mughlai",
              "North Indian",
              "Chinese"
            ],
            "avgRating": 4.2,
            "feeDetails": {
              "restaurantId": "112062",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 3700
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 3700
            },
            "parentId": "71",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 2.1,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "2.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 16:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "40% OFF",
              "subHeader": "UPTO ₹80"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/aromas-hyderabad-house-warje-pune-112062",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "218321",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "Kothrud",
            "areaName": "Kothrud",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Bakery",
              "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {
              "restaurantId": "218321",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5200
            },
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 01:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "newg.png",
                  "description": "Gourmet"
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
                        "description": "Gourmet",
                        "imageId": "newg.png"
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
              "header": "40% OFF",
              "subHeader": "ABOVE ₹159",
              "discountTag": "FLAT DEAL"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-kothrud-pune-218321",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "68577",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Manik Baug",
            "areaName": "Sinhgad Road",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.4,
            "veg": true,
            "feeDetails": {
              "restaurantId": "68577",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 5200
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 5200
            },
            "parentId": "5588",
            "avgRatingString": "4.4",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 4.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "4.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 00:30:00",
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
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-manik-baug-sinhgad-road-pune-68577",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "52944",
            "name": "Behrouz Biryani",
            "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
            "locality": "Sudhakar Thorat Colony",
            "areaName": "Karve Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Mughlai",
              "North Indian",
              "Lucknowi",
              "Hyderabadi",
              "Kebabs",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.3,
            "feeDetails": {
              "restaurantId": "52944",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4400
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4400
            },
            "parentId": "1803",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "19 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:59:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/behrouz-biryani-sudhakar-thorat-colony-karve-nagar-pune-52944",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "67133",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
            "locality": "Shastri Nagar",
            "areaName": "Kothrud",
            "costForTwo": "₹120 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "feeDetails": {
              "restaurantId": "67133",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "6249",
            "avgRatingString": "4.7",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 00:00:00",
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
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-shastri-nagar-kothrud-pune-67133",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "317437",
            "name": "Natural Ice Cream",
            "cloudinaryImageId": "oluh5h2utewdojbvrvmw",
            "locality": "MOHITE TWIN TOWERS",
            "areaName": "Sinhgad Road",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "Ice Cream",
              "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "feeDetails": {
              "restaurantId": "317437",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "2093",
            "avgRatingString": "4.7",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 3.7,
              "serviceability": "SERVICEABLE",
              "slaString": "20 mins",
              "lastMileTravelString": "3.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-17 23:30:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/natural-ice-cream-mohite-twin-towers-sinhgad-road-pune-317437",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "55760",
            "name": "The Belgian Waffle Co.",
            "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
            "locality": "Ramdut Vihar",
            "areaName": "Kothrud",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Waffle",
              "Desserts",
              "Ice Cream"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
              "restaurantId": "55760",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "2233",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "27 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-ramdut-vihar-kothrud-pune-55760",
            "type": "WEBLINK"
          }
        },
        {
          "info": {
            "id": "213610",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Kothrud",
            "areaName": "Kothrud",
            "costForTwo": "₹200 for two",
            "cuisines": [
              "Tibetan",
              "Healthy Food",
              "Asian",
              "Chinese",
              "Snacks",
              "Continental",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "feeDetails": {
              "restaurantId": "213610",
              "fees": [
                {
                  "name": "BASE_DISTANCE",
                  "fee": 4300
                },
                {
                  "name": "BASE_TIME"
                },
                {
                  "name": "ANCILLARY_SURGE_FEE"
                }
              ],
              "totalFee": 4300
            },
            "parentId": "1776",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 3,
              "serviceability": "SERVICEABLE",
              "slaString": "25 mins",
              "lastMileTravelString": "3.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2023-11-18 01:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "60% OFF",
              "subHeader": "UPTO ₹120"
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
            
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-kothrud-pune-213610",
            "type": "WEBLINK"
          },
        },
      ];


//RestaurantCard-component:- We created a new reusable component to inject into the code- Body component > restaurant-container.
const RestaurantCardComponent = (props)=>{
  const {restaurantData} = props;
  // const { cloudinaryImageId,name, cuisines, avgRating, deliveryTime, costForTwo, areaName }
return(
<div className="restaurant-list">
                    <div className="place">
                            <div className="list-item">
                                <div className="item-content">
                                    <div className="top-image">
                                        <img className='res-img' alt="Res-Image" src={ "https://media-assets.swiggy.com/swiggy/image/upload/"}/>
                                    </div>
                                    </div>
                                    <div className="place-name-div">
                                        <div className="name">{restaurantData.info.name}</div>
                                        <div className="food-list">{restaurantData.info.cuisines}</div>
                                    </div>
                                   <div className="info-div">
                                    <div className="ratings"><span>{restaurantData.info.avgRatingString}stars</span></div>
                                    <div className="dot">.</div>
                                    <div className="time">{restaurantData.info.deliveryTime}minutes</div>
                                    <div className="dot">.</div>
                                    <div className="price">{restaurantData.info.costForTwo}</div>
                                </div>
                                              
                                <div className="address">
                                    
                                    <span className="sNAfh">{restaurantData.areaName}</span>
                                </div>
                              </div>
                            </div>                      
</div>
)
};


//Body-Component:-
const Body = ()=>{
    return(
<div className='body'>
<div className='restaurant-container'>
<RestaurantCardComponent restaurantData={restaurantObject}/>
<RestaurantCardComponent restaurantData={restaurantObject}/>
<RestaurantCardComponent restaurantData={restaurantObject}/>
<RestaurantCardComponent restaurantData={restaurantObject}/>
<RestaurantCardComponent restaurantData={restaurantObject}/>
<RestaurantCardComponent restaurantData={restaurantObject}/>
</div>
</div>
)
};




//Footer-Component:-
const Footer = ()=>{
  <div className="footer">
  <h4 id="foot">Copyright</h4>
</div> 
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

<footer/>
    </div>)
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
