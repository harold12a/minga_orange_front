import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/mangas";

const { saveTitle,data } = mangaAction

const initialState = {
    text: '',
    checks:[]
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
                checks: action.payload.checks
            }
            return newState
        }
            )
)



export default mangaReducer