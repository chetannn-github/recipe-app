import { configureStore } from "@reduxjs/toolkit";
import reciepeReducer from "./reciepeSlice";

const appstore = configureStore({
    reducer:{
        reciepe:reciepeReducer
    }
});

export default appstore;