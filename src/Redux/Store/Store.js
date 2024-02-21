import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../Reducres/ProductSlice";


let store = configureStore({
    reducer:{
        Card:ProductSlice
    }
})

export default store