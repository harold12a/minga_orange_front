import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/mangas";

const { saveTitle,data } = mangaAction

const initialState = {
    text: '',
    check:[]
};

const mangaReducer = createReducer(initialState, (builder) => builder
    .addCase(saveTitle,
        (state, action) => {
            const newState = {
                ...state,
                text: action.payload.text,
               
            }
            return newState
        }     
    )
    .addCase(data,
        (state, action) => {
            const newState ={
                ...state,
                check: action.payload.check
            }
            return newState
        }
            )
)



export default mangaReducer