import { configureStore } from "@reduxjs/toolkit";
// import authorReducer from "./reducers/authors";

const store = configureStore({
    reducer:{
        // author:authorReducer
    }
})

export default store