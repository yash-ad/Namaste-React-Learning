import { useSelector } from "react-redux";
import CartList from "./CartList";


const CartStore = ()=> {

//To read from the cart-store,We need to subscribing to the store. using Selector.
const cartItems = useSelector((store)=> store.cart.items);

return (
    <div className="cart-container">
    <div className="cart-items">
    {/* //Re-usable component for showing itemLists , and it takes an items as an input and pass the cartItems overhere*/}
{/* <ItemsList items={cartItems} /> */}
<CartList items={cartItems}/>
    </div>
</div>
 )
};


export default CartStore;