import { configureStore } from "@reduxjs/toolkit";
import mangaReducer from "./reducers/manga";

const store = configureStore({
    reducer:{
        //acá vamos a traernos los reductores de los diferentes recursos (usuarios, mangas capitulos...)
        manga: mangaReducer
    }
})

export default store