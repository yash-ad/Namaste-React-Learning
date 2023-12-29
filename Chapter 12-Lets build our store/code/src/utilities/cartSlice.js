import { createSlice } from "@reduxjs/toolkit";

//Context of Redux slice:-

const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",
initialState:{
items:[]
},
reducers:{
//Redux `addItem` reducer:-
//The `addItem` reducer is your Redux slice is responsible for handling this actions.
//It takes the current stata (state.items) and the actions as a parameters
addItem:(state,action)=>{
const addToCart = action.payload;
//It uses `push()` method in an array to add elements at the end of an array.When user clicks on the `ADD` button, items will be add into the cart.
state.items.push(addToCart);
//Mutating the state here , directly modifying the state.
//We have to mutate the state      [`Immer` library for immutable state]
//Redux-toolkit uses `Immer` Behind the scenes.
},

// Redux `removeItem` Reducer:-
//The `removeItem` reducer in your Redux slice is responsible for handling this action.
//It takes the current state (`state.items`) and the actions as parameters.
removeItem:(state,action)=>{
const itemIdToRemove = action.payload.id;
//It finds the index of the item to be removed using `findIndex()` method based on thecorresponding `id` in the payload.
const indexToRemove = state.items.findIndex(item => item.id !== itemIdToRemove);
 //Then, it uses splice to remove one element at the found index, effectively removing the item from the array. 
state.items.splice(indexToRemove,1)//We just want to remove `1` element from an array.
},

clearCart:(state)=>{
state.items.length = 0 //[for an empty array]
}
}
});


export const{addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;
