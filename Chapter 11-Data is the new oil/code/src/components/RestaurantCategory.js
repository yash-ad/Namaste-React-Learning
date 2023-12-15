const RestaurantCategory = (props)=>{
  // Destructuring the props to get the data object
    const {data} = props;
// console.log(data);
    return(
        <div>
         {/* Main Menu Section */}
         <li>
          <div className="main-menu">
          {/* Accordions */}
          {/* 1.Header */}
<div className="category-header">
<h1 className="font-bold">
              {data.title}
              <span>({data.length})</span>
            </h1>
            <span class="material-symbols-outlined">
expand_more
</span>
</div> {/* 2.Body */}

            {/* Iterating over the recommended list/array of objects using map() */}
            {/* {resMenu?.map((item) => (

              <div key={item.card.info.id} className="menu-card">
                <div className="menu-left">
                  <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                  <p className="font-semibold">{"₹"+ item.card.info.price / 100}</p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="menu-right">
                  <img src={IMG_URL + item.card.info.imageId} alt="Item" />
                  <button id="addBtn">ADD</button>
                </div>
              </div>
            ))} */}
          </div>
        </li>
        </div>
    )
};
export default RestaurantCategory;