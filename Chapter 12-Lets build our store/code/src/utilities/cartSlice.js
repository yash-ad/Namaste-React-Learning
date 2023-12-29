import { createSlice } from "@reduxjs/toolkit";

//Context of Redux slice:-

const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",
initialState:{
items:[]
},
reducers:{
addItem:(state,action)=>{
const addToCart = action.payload;
//Mutating the state here , directly modifying the state.
//We have to mutate the state      [`Immer` library for immutable state]
//Redux-toolkit uses `Immer` Behind the scenes.
state.items.push(addToCart);
},

removeItem: (state, action) => {
    const itemIdToRemove = action.payload.id;
    const indexToRemove = state.items.findIndex(item => item.id !== itemIdToRemove);
    state.items.splice(indexToRemove, 1); //We just want to remove `1` element from an array.
  },
  

clearCart:(state)=>{
state.items.length = 0 //[for an empty array]
}
}
});


export const{addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;
