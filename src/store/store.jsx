import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./reducers/authors";
import mangasReducer from "./reducers/mangas"; 
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapters";
import mangasnewsReducer from "./reducers/mangas"; // chequiar



const store = configureStore({
  reducer: {
    mangas: mangasReducer,
    manga: mangasnewsReducer , 
    manga_upd_del : mangaReducer,
    chapter: chapterReducer,
    mangasnews: mangasnewsReducer,
    authors:authorReducer,
   
  }
});

export default store;