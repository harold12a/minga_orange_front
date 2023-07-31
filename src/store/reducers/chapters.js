import { createReducer } from "@reduxjs/toolkit";
import chaptersActions from "../actions/chapters";

const { save_data } = chaptersActions
const initialState ={
    title: "",
    order: 0
}

const chaptersReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        save_data,
        (state, action) => {
            const newState ={
                ...state,
                title: action.payload.title,
                order: action.payload.order
            }
            return newState
        }
    )
)

export default chaptersReducer
