import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapters";
import mangaReducer from "./reducers/mangas";

const store = configureStore({
    reducer:{
     
       manga: mangaReducer

const store = configureStore({
    reducer:{
    mangas: mangaReducer,
    chapter: chapterReducer
    
    }
})

export default store;