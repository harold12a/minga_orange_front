import { createReducer } from "@reduxjs/toolkit";
import authorActions from "../actions/authors";

const { saveProfile, saveAuthors, updateActive } = authorActions

const initialState = {
    profile: {},
    authors: {
        active_true: [],
        active_false: []
    }
}

const authorReducer = createReducer(
    initialState,
    (builder) => builder.addCase(
        saveProfile,
        (state, action) => {
            let newState = {
                ...state,
                profile: action.payload.profile
            }
            return newState
        }
    )
        .addCase(saveAuthors.fulfilled, (state, action) => {
            let newState = {
                ...state,
                authors: {
                    active_true: action.payload.authors.active_true,
                    active_false: action.payload.authors.active_false
                }
            }
            return newState
        })
        .addCase(updateActive.fulfilled, (state, action) => {
            let newState = {
                ...state
            }
            if (action.payload.change === true) {
                console.log(true)
                newState.authors.active_true = state.authors.active_true.filter(each => each._id != action.payload.id),
                    newState.authors.active_false = state.authors.active_false.push(action.payload.data)

            } else {
                console.log(false)
                newState.authors.active_false = state.authors.active_false.filter(each => each._id != action.payload.id),
                    newState.authors.active_true = state.authors.active_true.push(action.payload.data)
            }
            console.log(newState)
            return newState
        })
)

export default authorReducer