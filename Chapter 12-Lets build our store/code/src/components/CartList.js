// Component
import {useDispatch} from "react-redux"
import { IMG_URL } from "../utilities/config";
import { removeItem } from "../utilities/cartSlice";

const CartList = ({ items }) => {
  //It uses `dispatch` function , its a hook called `useDispatch()`from `react-redux` to send an action to the Redux store Here the store in our app is `appStore`.
const dispatch = useDispatch();

  // The function is defined called as `handleRemoveItem` is responsible for dispatching an action it calls a reducer function called `removeItem` with the `itemId` parameter as a payload.
const handleRemoveItem = (itemId) => {
   // console.log("Dispatching removeItem:", itemId);
  //Inside `handleRemoveItem` function ,the action `removeItem` is dispatched with an object `{ id: itemId }` as the payload.
  //This `removeItem` action is part of your `Redux slice` which means in our app is `cartSlice` and we have exported the action from `cartSlice.actions` and it is designed to remove the item from the cart based on the provided `id` specific `id` ,to remove the specific `Item` Because each `Item` has  an `id`.
dispatch(removeItem({ id : itemId}))
}
   

  return (
    <div>
      <div>
        {items?.map((item) => (
          <div key={item.card.info.id} className="cart-menu">
            <div className="cart-menu-left">
              <h3 className="font-bold text-lg">{item.card.info.name}</h3>
              <p>{item.card.info.description}</p>
              <p className="cart-menu-price">
                ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
              </p>
            </div>
            <div className="cart-menu-right">
              <img src={IMG_URL + item.card.info.imageId} alt="Item" />
              <div className="buttons">
                {/* This attribute  specifies the `handleRemoveItem` function that should be called when the button is clicked using `onClick` event handler */}
              {/*So, in this case we are using an arrow function within an event handler called `onClick` its an anonymous function that calls `handleRemoveItem` function and  passing `item.card.info.id` as an argument. */}
                <button onClick={()=> handleRemoveItem(item.card.info.id)}>
                  -
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
