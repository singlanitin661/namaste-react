import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./Slices/cartSlice"
//ConfigureSAtore is used to create the store
//slices will be added inside it


const appStore = configureStore({
    //The below reducer will be responsibel to moify the appStore, not the cartSlice
    reducer : {
        cart :cartReducer,
    }
});

export default appStore;