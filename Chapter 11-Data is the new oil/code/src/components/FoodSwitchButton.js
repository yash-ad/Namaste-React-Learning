import { useState } from "react";

const FoodSwitchButton = ()=>{
  const [vegFood, setVegFood] = useState('Veg');
return(
<div>
<div className="mid-menu">
          <button
            id="isVegBtn"
            onClick={() => {
              // Toggling between Veg and All options
              if (vegFood === "Veg") {
                setVegFood("All");
              } else {
                setVegFood("Veg");
              }
              // Filtering the menu based on Veg or All
              if (vegFood === "All") {
         setResMenu(newResMenu);
              } 
              else {
                const filteredRestMenu = resMenu?.filter((rest) => rest.card.info.isVeg > 0);
                setResMenu(filteredRestMenu);
             
              }
            }}
            style={{ backgroundColor: vegFood === "Veg" ? "green" : "orange" }}>
            {vegFood}
          </button>
        </div>
</div>
)
};

export default FoodSwitchButton;