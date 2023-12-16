import ItemsList from "./ItemsList";

const RestaurantCategory = (props)=>{
  // Destructuring the props to get the data object
    const {data} = props;
// console.log(data);
    return(
        <div className="menu-category">
         <li>
          <div className="main-menu">
          {/* Accordions */}

          {/* 1.Header */}
<div className="category-header">
<h1 className="font-bold">
              {data.title}
              <span>({data.itemCards.length})</span>
            </h1>
  <span><span class="material-symbols-outlined">
expand_more
</span></span>
</div>

 {/* 2.Body */}
<div className="category-body">
        <ItemsList items={data.itemCards}/>
          </div>
          </div>
        </li>
        </div>
    )
};
export default RestaurantCategory;