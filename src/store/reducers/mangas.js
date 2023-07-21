import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/mangas";

const { saveTitle } = mangaAction

const initialState = {
    text: '',
    // check:[]
};

const mangaReducer = createReducer(initialState, builder => builder
    .addCase(saveTitle,
        (state, action) => {
            const newState = {
                ...state,
                text: action.payload.text
            }
            return newState
        }     
    )
)

export default mangaReducer