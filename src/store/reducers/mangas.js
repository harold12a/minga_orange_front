import { createReducer } from "@reduxjs/toolkit";
import mangaAction from "../actions/mangas";

const { saveTitle,saveButton } = mangaAction

const initialState = {
    text: '',
    check:[]
};

const mangaReducer = createReducer(initialState, builder => builder
    .addCase(saveTitle,
        (state, action) => {
            const newState = {
                ...state,
                text: action.payload.text,
               
            }
            return newState
        }     
    )
    .addCase(saveButton,
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