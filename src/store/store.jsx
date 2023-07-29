import { configureStore } from "@reduxjs/toolkit";
import chapterReducer from "./reducers/chapters";

const store = configureStore({
    reducer:{

        chapter: chapterReducer

    }
})

export default store;