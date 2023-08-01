import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/manga";

const {saveManga}= mangaAction
const initialState= {
    manga:{}
}
const mangaReducer = createReducer(
    initialState,
    builder=>builder.addCase(
        saveManga,
        (state,action)=>{
            const newState={
                ...state,
                manga: action.payload.manga
            }
            return newState
        }
    )
)
export default mangaReducer