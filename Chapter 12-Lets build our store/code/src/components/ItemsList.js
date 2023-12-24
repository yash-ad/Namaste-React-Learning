import { useDispatch } from "react-redux";
import { IMG_URL } from "../utilities/config";
import { addItem } from "../utilities/cartSlice";

const ItemsList = (props)=>{
  const {items} = props;
    // console.log(items);

//Introduced `useDispatch` hook for dispatching an actions.
  const dispatch = useDispatch();


//This is a designated callback function.handleAddItem();
const handleAddItem = ()=>{
  //In the action whatever i pass into this action it will be display.
  //dispatch(addItem("pizza"))//['pizza']
  
//`It dispatches an action`.
dispatch(addItem())
};

    return(
<div>
    {/* Iterating over the restaurant categories of items list/array of objects using map() */}
            {items?.map((item) => (
              <div key={item.card.info.id} className="menu-card">
                <div className="menu-left">
                  <h3 className="font-bold text-lg">{item.card.info.name}</h3>
                  <p className="font-semibold">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</p>
                  <p>{item.card.info.description}</p>
                </div>
                <div className="menu-right">
                  <img src={IMG_URL + item.card.info.imageId} alt="Item" />
                  {/* //The `onClick` event will call a designated callback function when the button is clicked. */}
                  <button onClick={handleAddItem} id="addBtn">ADD </button>
                </div>
              </div>
            ))}
  </div>
    );
};


export default ItemsList;