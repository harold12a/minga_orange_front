import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/mangas";
const store = configureStore({
    reducer:{
    mangas: mangaReducer
    }
})

export default store