import { configureStore } from "@reduxjs/toolkit";
// import authorReducer from "./reducers/authors";
import mangaReducer from "./reducers/manga";
import chapterReducer from "./reducers/chapters";
import mangasnewsReducer from './reducers/mangas'

const store = configureStore({
    reducer:{

    mangas: mangaReducer,
    chapter: chapterReducer
        //acá vamos a traernos los reductores de los diferentes recursos (usuarios, mangas capitulos...)
        chapter: chapterReducer,
        manga: mangaReducer,
        mangasnews: mangasnewsReducer,
      // author:authorReducer


    }
})

export default store