import { IMG_URL } from "../utilities/config";

const CartList = ({items})=>{
    return(
 <div>   <div>
 {/* Iterating over the restaurant categories of items list/array of objects using map() */}
         {items?.map((item) => (
           <div key={item.card.info.id} className="cart-menu">
             <div className="cart-menu-left">
               <h3 className="font-bold text-lg">{item.card.info.name}</h3>
               <p className="font-semibold">₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</p>
               <p>{item.card.info.description}</p>
             </div>
             <div className="cart-menu-right">
           <img src={IMG_URL + item.card.info.imageId} alt="Item" />
          <div className="buttons">
          <button onClick={()=> handleAddItem(item)} 
               id="addBtn">-</button>
               
               <button onClick={()=> handleAddItem(item)} 
               id="addBtn">+</button>
          </div>
             </div>
           </div>
         ))}
</div></div>
    ) 
};

export default CartList;