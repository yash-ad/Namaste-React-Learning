
import { useDispatch } from "react-redux";
import { IMG_URL } from "../utilities/config";
import { removeItem } from "../utilities/cartSlice";

const CartList = ({items})=>{

  const dispatch = useDispatch();

  const  handleRemoveItem = (id) => {
dispatch(removeItem(id))
  };

    return(
 <div>
 <div>
 {/* Iterating over the restaurant categories of items list/array of objects using map() */}
         {items?.map((item) => (
           <div key={item.card.info.id} className="cart-menu">
             <div className="cart-menu-left">
               <h3 className="font-bold text-lg">{item.card.info.name}</h3>
               <p>{item.card.info.description}</p>
               <p className="cart-menu-price">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</p>
             </div>
             <div className="cart-menu-right">
           <img src={IMG_URL + item.card.info.imageId} alt="Item" />
          <div className="buttons">
          <button onClick={()=> handleRemoveItem(id)} 
               id="lessBtn"> - </button>
          {/* <button
               id="addBtn"> + </button> */}
          </div>
             </div>
           </div>
         ))}
</div>
</div>
    ) 
    
};

export default CartList;