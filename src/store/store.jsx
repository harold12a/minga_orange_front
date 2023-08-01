import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import mangaReducer from "./reducers/mangas";
const store = configureStore({
    reducer:{
    mangas: mangaReducer
=======
import chapterReducer from "./reducers/chapters";
import mangaReducer from "./reducers/mangas";


const store = configureStore({
    reducer:{
    mangas: mangaReducer,
    chapter: chapterReducer
>>>>>>> 0a9cfaab6c7cceeba819604f3a78f4b50d57253e
    
    }
})

export default store;