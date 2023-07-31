import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from "./reducers/chapters";
import mangaReducer from "./reducers/mangas";


const store = configureStore({
    reducer:{
    mangas: mangaReducer
    chapter: chapterReducer
    
    }
})

export default store;