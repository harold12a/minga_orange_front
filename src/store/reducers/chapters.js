import { createReducer } from "@reduxjs/toolkit";
import chapterActions from "../actions/chapters";

const { save_data } = chapterActions
const initialState ={
    title: "",
    order: 0,
    id:  ""
}

const chapterReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        save_data,
        (state, action) => {
            const newState ={
                ...state,
                title: action.payload.title,
                order: action.payload.order,
            }
            return newState
        }
    )
)

export default chapterReducer
