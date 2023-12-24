import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
//We added `name` to the slice.
name:"cart",
initialState:{
items:[]
// items:["Pav-Bhaji","Bhel-puri"]
},
reducers:{
addItem:(state,action)=>{
//Mutating the state here , directly modifying the state.
state.items.push(action.payload);
},
removeItem:(state)=>{
state.items.pop()
},
clearCart:(state)=>{
state.items.length = 0 //[for an empty array]
}
}
});


export const{addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;

//Now we have build the slice and  we want to add the slice to the store.