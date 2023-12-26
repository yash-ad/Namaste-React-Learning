import { useSelector } from "react-redux";
import CartList from "./CartList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utilities/cartSlice";

const CartStore = ()=> {

//To read from the cart-store,We need to subscribing to the store. using Selector.
const cartItems = useSelector((store)=> store.cart.items);

const dispatch = useDispatch();

const handleClearCart = ()=>{
dispatch(clearCart());
}
return (
    <div className="cart-container">
    <div className="cart-items">
    {/* //Re-usable component for showing itemLists , and it takes an items as an input and pass the cartItems overhere*/}
{/* <ItemsList items={cartItems} /> */}
<CartList items={cartItems}/>
  {/* Conditionally render the "Clear Cart" button */}
  {cartItems.length > 0 ? <button className="clear-cart-button rounded" onClick={handleClearCart}>Clear Cart</button>: null
        }
    </div>
</div>
 )
};


export default CartStore;