import { createReducer } from "@reduxjs/toolkit";
import authorActions from "../actions/authors";

const {saveData} = authorActions

const initialState = {
    profile:{}
}

const authorReducer = createReducer (
    initialState,
    (builer) => builer.addCase(
        saveData,
        (state,action)=> {
            let newState = {
                ...state,
                profile: action.payload.profile
            }
            return newState
        }
    )
)
export default authorReducer;