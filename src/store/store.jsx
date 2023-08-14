import { configureStore } from "@reduxjs/toolkit";
import authorReducer from "./reducers/authors";
import mangaReducer from "./reducers/mangas";
import chapterReducer from "./reducers/chapters";
import mangasnewsReducer from "./reducers/mangas";

const store = configureStore({
  reducer: {
    mangas: mangaReducer,
    manga: mangasnewsReducer , 
    chapter: chapterReducer,
    mangasnews: mangasnewsReducer,
    authors:authorReducer,
  }
});

export default store;