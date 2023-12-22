import { createSlice, isAction } from "@reduxjs/toolkit";
//CreateSlice takes an confiouration to create an slice
/*
First configuration => name
Second configuration => initialstate (What basically should initially be cart items)
Third configuration => reducers (Object) (Reducer functions are passed here)
Actions are like apis to communicate with the store.
Reducer functions gets two parameters => one is State, another is action. It will modify the  state based on the action
*/
const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers: {
        // addItems is an action 
        // and an reducer function is mapped to it. It will be used to modify the cart
        addItems : (state, action) => {
            state.items.push(action.payload)
        }, 

        // as we dont need action , therefore we can simply remove that from the below 
        removeItems : (state) => {
            // Lets say we are removing the last item only from the cart's items array
            state.items.pop();
        },
        clearCart : (state) => {
            state.items.length = 0;
        }
    }
});
/* 
createSlice returns an object that will be stored in the cartSlice and the object will look likew this
{
    action : {
        addItems: (  ),
        removeItems: (),
        clearcart: ()
    }, 
    reducer
}
*/
export const {addItems, removeItems, clearCart} = cartSlice.actions;
export default cartSlice.reducer;