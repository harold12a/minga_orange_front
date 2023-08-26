import { createReducer } from "@reduxjs/toolkit";
import chapterActions from "../actions/chapters";

const { save_data, saveChapters } = chapterActions
const initialState = {
    title: "",
    order: 0,
    cover_photo: "",
    chapters: []
}

const chapterReducer = createReducer(
    initialState,
    builder => builder.addCase(
        save_data,
        (state, action) => {
            const newState = {
                ...state,
                title: action.payload.title,
                order: action.payload.order,
            }
            return newState
        }

    )
        .addCase(
            (saveChapters.fulfilled,
            (state, action) => {
                const newState = {
                    ...state,
                    title: action.payload.title,
                    cover_photo: action.payload.cover_photo,
                    order: action.payload.order,
                    chapters: action.payload.chapters
                }
                return newState
            })
        )
)

export default chapterReducer
