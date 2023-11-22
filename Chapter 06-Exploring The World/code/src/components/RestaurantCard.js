import { CDN_URL } from "../utilities/constants";

const RestaurantCard = (props)=>{

    //Object destructuring:-
    const {restaurantData} = props;
    const {name,cloudinaryImageId,avgRating,costForTwo,areaName,cuisines,locality} = restaurantData?.info;
    const {header} = restaurantData.info.aggregatedDiscountInfoV3;
    const { slaString } = restaurantData.info.sla;
    return(
<div className="restaurant-list">
<div className="place">
<div className="list-item">
<div className="item-content">
<div className="top-image">
<img className="res-img" alt="Res-image" src={CDN_URL + cloudinaryImageId}>
</img>
</div>
</div>
<div className="place-name-div">
<div className="name">{name}</div>
<div className="food-list">{cuisines.join(' , ')}</div>
</div>
<div className="info-div">
    <div className="ratings"><span>{avgRating} stars</span></div>
    <div className="dot">.</div>
    <h5><span><i class="ri-star-fill"></i></span>{header}</h5>
    <div className="time">{slaString}</div>
    <div className="dot">.</div>
    <div className="price">{costForTwo}</div>
</div>
<div className="address">
<span className="sNAfh">{locality} | {areaName}</span>
</div>
</div>
</div>
</div>
    )
};

export default RestaurantCard;